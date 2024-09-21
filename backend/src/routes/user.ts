import { Hono } from "hono";
import hashing from '../helperfunctions/hashing';
import { decode, sign, verify, jwt } from 'hono/jwt'
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { signUpInput, singInInput } from '@lolice/medium-common/dist'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


userRouter.post(`/signup`, async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());


    const body = await c.req.json();
    const {success} = signUpInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            msg: "Inputs are not correct"
        });
    }

    const hashedPassword = await hashing(body.password);
    try {

        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: hashedPassword,
                name: body.name
            },
        })

        const token = await sign({ id: user.id }, c.env.JWT_SECRET)

        return c.json({
            jwt: token
        });

    } catch (err) {
        return (c.json({ message: err }))
    }

})

userRouter.post(`/signin`, async (c) => {

    

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());


    try {
        const body = await c.req.json();
        
        const {success} = singInInput.safeParse(body);

        if(!success){
            c.status(411);
            return c.json({
                message: "wrong inputs"
            });
        }

        const hashedPassword = await hashing(body.password);

        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: hashedPassword
            }
        });

        if (!user) {
            c.status(403);
            return c.json({
                error: "email or password not correct"
            })
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET)

        return c.json(
            {
                jwt: token
            }
        )

    } catch (err) {
        console.log(err)
        return c.json(
            { msg: err }
        )
    }

})

userRouter.get(``, async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const res = await prisma.user.findMany({
    });

    console.log(res);
    return (c.text(`returned full list of users`));
})
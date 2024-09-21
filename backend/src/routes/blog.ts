import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from "hono";
import { decode, sign, verify, jwt } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@lolice/medium-common/dist";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();


blogRouter.use(`/*`, async (c, next) => {
    const authHeaders = c.req.header('authorization');

    if(!authHeaders){
        c.status(403);
        return c.json({err: "not logged in!"});
    }

    const token = authHeaders.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);

    if(!payload){
        c.status(401);
        return c.json({error : "unauthorized"});
    }

    c.set('userId', payload.id as string);
    await next();
})


blogRouter.post(``, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const body = await c.req.json();
        const {success} = createBlogInput.safeParse(body);

        if(!success){
            console.log(body);
            c.status(411)
            return c.json({
                msg: "Incorrect blog inputs"
            });
        }

        const title :string = body.title;

        const post = await prisma.post.create({
            data: {
                title: body.title,
                content : body.content,
                userId : c.get("userId")
            }
        })

        console.log(post);
        return c.json({
            msg: "successfully posted"
        });
        
    } catch (err) {
        console.log(err);
        return c.json({
            msg : "SOME ERROR ENCOUNTERED COULD NOT POST"
        })
    }
})

blogRouter.put(``, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const body = await c.req.json();
        const {success} = updateBlogInput.safeParse(body);

        if(!success){
            c.status(411)
            return c.json({
                msg: "Incorrect blog inputs"
            });
        }

        const updatedPost = await prisma.post.update({
            where: {
                id: body.id,
                userId : c.get("userId")
            },
            data: {
                title : body.title,
                content : body.content,
                published : body.published
            }
        })

        console.log(updatedPost);
        return c.json({
            msg: "successfully updated blog"
        });

    } catch (err) {
        console.log(err);
        return c.json({
            msg : "some error encountered while posting"
        });
    }
})

blogRouter.get(`/bulk`, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const posts = await prisma.post.findMany({});

    return c.json(posts);
})

blogRouter.get(`/:id`, async (c) => {
    
    const header = c.req.param('id');
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const post = await prisma.post.findUnique({
        where: {
            id: header
        }
    });

    if(post){
        return c.json({
            "fetched post" : post
        })
    }
    else {
        return c.json({
            error : "post not found"
        });
    }
})






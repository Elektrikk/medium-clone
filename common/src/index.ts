import z from "zod"

export const signUpInput = z.object({
    email : z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export const singInInput = z.object({
    email : z.string().email(),
    password : z.string().min(6)
});

export const createBlogInput = z.object({
    title : z.string(),
    content : z.string()
});

export const updateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
    id: z.string()
});

export type signUpInput = z.infer<typeof signUpInput>;
export type singInInput = z.infer<typeof singInInput>;

export type createBlogInput = z.infer<typeof createBlogInput>;
export type updateBlogInput = z.infer<typeof updateBlogInput>;
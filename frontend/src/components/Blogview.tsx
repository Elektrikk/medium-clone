import { Blog } from "../hooks/useBlogs"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const Blogview = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 pt-10 max-w-screen-lg w-full ">

                <div className="col-span-8 ">

                    <div className="text-5xl font-bold ">
                        {blog.title}
                    </div>
                    <div className="text-slate-400 py-3 font-normal">
                        Post on 2nd December, 2023
                    </div>
                    <div className="pt-2">
                        {blog.content}
                    </div>

                </div>
                <div className="col-span-4">
                    <div className="text-lg text-slate-500">
                        Author
                    </div>
                    
                    <div className="flex w-full">
                        <div className="pr-2 flex flex-col justify-center">
                            <Avatar name={blog.user.name || "Anonymous"} />
                        </div>
                        <div className="px-2 py-1">
                            <div className="text-xl font-bold">
                                {blog.user.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catchphrase about the user's ability to grab the user's attention.
                            </div>

                        </div>
                    </div>    

                </div>
            </div>
        </div>


    </div>
}
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/Blogskeleton";
import { useBlogs } from "../hooks/useBlogs"

export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>

            <Appbar/>
            <div className="flex justify-center">
                <div className="flex justify-center flex-col">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return (
        <div >
            <Appbar />
            <div className="flex justify-center">
                <div className="">

                    {blogs.map(blog => <BlogCard
                        authorName={blog.user.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate="23/2/24"
                        id={blog.id}
                    />)}

                </div>
            </div>
        </div>

    )
}
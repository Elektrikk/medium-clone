import { Alert } from "../components/Alert";
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/useBlogs"

export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>

            <Appbar />
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
                    {blogs.length>0 ? (
                        blogs.map(blog => (
                            <BlogCard
                                key={blog.id}  // Add a key to avoid warnings
                                authorName={blog.user?.name || "Anonymous"}  // Use optional chaining for user
                                title={blog.title}
                                content={blog.content}
                                publishedDate="23/2/24"
                                id={blog.id}
                            />
                        ))
                    ) : (
                        <Alert/>
                    )}

                </div>
            </div>
        </div>

    )
}
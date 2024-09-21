import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks/useBlogs"

export const Blogs = () => {

    const {loading, blogs} = useBlogs();

    if(loading){
        <div>
            loading...
        </div>
    }

    return (
        <div >
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    <BlogCard
                        authorName="Dhruv"
                        title="How a dumb engineering student scored big winnning a 100L lottery"
                        content=" How a dumb engineering student scored big winnning a hundred L lottery How a dumb engineering student scored big winnning a hundred lottery How a dumb engineering student scored big winnning a hundred lottery How a dumb engineering student scored big winnning a hundred lottery "
                        publishedDate="23/2/24"
                    />
                    <BlogCard
                        authorName="Dhruv"
                        title="How a dumb engineering student scored big winnning a 100L lottery"
                        content=" How a dumb engineering student scored big winnning a hundred L lottery How a dumb engineering student scored big winnning a hundred lottery How a dumb engineering student scored big winnning a hundred lottery How a dumb engineering student scored big winnning a hundred lottery "
                        publishedDate="23/2/24"
                    />
                    <BlogCard
                        authorName="Dhruv"
                        title="How a dumb engineering student scored big winnning a 100L lottery"
                        content=" How a dumb engineering student scored big winnning a hundred L lottery How a dumb engineering student scored big winnning a hundred lottery How a dumb engineering student scored big winnning a hundred lottery How a dumb engineering student scored big winnning a hundred lottery "
                        publishedDate="23/2/24"
                    />
                    <BlogCard
                        authorName="Dhruv"
                        title="How a dumb engineering student scored big winnning a 100L lottery"
                        content=" How a dumb engineering student scored big winnning a hundred L lottery How a dumb engineering student scored big winnning a hundred lottery How a dumb engineering student scored big winnning a hundred lottery How a dumb engineering student scored big winnning a hundred lottery "
                        publishedDate="23/2/24"
                    />
                </div>
            </div>
        </div>

    )
}
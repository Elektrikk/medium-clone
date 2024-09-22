import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlogs"
import { Blogview } from "../components/Blogview";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";


export function Blog() {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center h-screen flex-col">
                <div className="flex justify-center">
                    <Spinner/>
                </div>
            </div>
        </div>
    }
    return (<div>
        {/* @ts-ignore */}
        <Blogview blog={blog} />
    </div>
    )
}


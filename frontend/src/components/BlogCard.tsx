import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: string
}


export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} />
                </div>

                <div className="font-extralight p-2">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col text-xxs font-extralight text-slate-400">
                    &#9679;
                </div>
                <div className="font-thin p-2 text-slate-600">
                    {publishedDate}
                </div>


            </div>
            <div className="text-2xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-l font-light">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-400 text-sm pt-3">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>

        </div>
    </Link>
}

export function Avatar({ name }: { name: string, size?: number }) {
    return (
        <div className={`relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="text-md font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
    );


}
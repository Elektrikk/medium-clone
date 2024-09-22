import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-6 py-4">
        <Link to={`/blogs`} className="font-extrabold cursor-pointer flex flex-col justify-center">
                Medium
        </Link>
        <div>
            <Link to={`/publish`}>
                 <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-full text-sm px-4 py-1.5 mx-4">New</button>
            </Link>
        
            <Avatar name={"Dhruv"}/>
        </div>
    </div>
}
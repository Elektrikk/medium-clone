import { Link } from "react-router-dom"

export const Alert = () => {
    return (
        <div className="flex justify-center pt-60">
            <div className="flex justify-center flex-col">
            <div className="flex items-center p-4 mb-4 text-sm text-slate-50 rounded-lg bg-slate-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                

                <div>
                    <span className="font-medium">Info alert ! </span>You are not not logged in! Try   
                    <Link to={"/signup"} className="px-1 underline">
                        Signing Up
                    </Link>
                     or 
                     <Link to={"/signin"} className="px-1 underline">
                        Logging In
                     </Link>
                     
                </div>
            </div>
        </div>
        </div>
        

    )
}
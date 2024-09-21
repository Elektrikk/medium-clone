import { Link } from "react-router-dom"


export const AuthHeader = ({ type }: { type: "singup" | "signin" }) => {
    return (
        <div className="px-12">
            <div className="text-3xl text-center font-bold">
                Create an account
            </div>
            <div className="text-xl text-center text-slate-400 pl-2 pb-2">
                {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                <Link to={type === "signin" ? "/signup" : "/signin"} className="underline">
                    {type === "signin" ? "Sign up " : "Login"}
                </Link>
            </div>
        </div>
    )
}
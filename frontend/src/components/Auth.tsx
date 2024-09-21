import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom"
import { signUpInput } from "@lolice/medium-common/dist"

export const Auth = ({ type }: { type: "singup" | "signin" }) => {
    
    const [postInputs, setPostInputs] = useState<signUpInput>({
        name: "",
        email: "",
        password: ""
    });

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="">
                <div className="px-12">
                    <div className="text-3xl text-center font-bold">
                        Create an account
                    </div>
                    <div className="text-xl text-center text-slate-400 pl-2 pb-2">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                        <Link to={type === "signin" ? "/signup" : "/signin"} className="underline">
                            {type==="signin" ? "Sign up " : "Login"}
                        </Link>
                    </div>
                </div>
                <div className="">

                    {type === "singup" ? <LabelledInput label="Name" placeholder="Dhruv Sri.." onChange= {(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name : e.target.value
                        }))  
                    }} /> : <></>}
                    
                    <LabelledInput label="Email" placeholder="user@example.com" onChange= {(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email : e.target.value
                        }))  
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder=" " onChange= {(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password : e.target.value
                        }))  
                    }} />
                </div>
                <button className="w-full rounded-md  bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white 
                transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 
                active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
                    Sign Up
                </button>
            </div>
            <div className="">
                
            </div>

        </div>

    </div> 
}

interface labelledInputType {
    label : string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void; 
    type? : string
}

function LabelledInput({label, placeholder, onChange, type} : labelledInputType){
    return <div>
        <div>
            <label className="block mb-2 text-m font-semibold text-slate-700 pt-4">{label}</label>
            <input onChange= {onChange} type={ type ||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900
             text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}
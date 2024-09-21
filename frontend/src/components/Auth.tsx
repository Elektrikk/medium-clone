import { ChangeEvent, useState } from "react";
import { signUpInput } from "@lolice/medium-common/dist"
import { AuthHeader } from "./AuthHeader";
import axios from "axios";
import {BACKEND_URL }from "../config"
import { useNavigate } from "react-router-dom";

export const Auth = ({ type }: { type: "singup" | "signin" }) => {

    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<signUpInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "singup" ? "signup" : "signin" }`, postInputs);
            const jwt= await response.data.jwt;
            localStorage.setItem("token", "Bearer "+jwt);
            navigate("/blogs");
        } catch (err) {
            //ALERT THE USER THAT THE REQUEST FAILED
            alert("failed");
            console.log(err);
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="">

                <AuthHeader type={type === "signin" ? "signin" : "singup"} /> 

                <div className="">
                    {type === "singup" ? <LabelledInput label="Name" placeholder="Dhruv Sri.." onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }} /> : null}

                    <LabelledInput label="Email" placeholder="user@example.com" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }} />

                    <LabelledInput label="Password" type={"password"} placeholder=" " onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                </div>
                <button onClick={sendRequest} className="w-full rounded-md  bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white 
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
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: labelledInputType) {
    return <div>
        <div>
            <label className="block mb-2 text-m font-semibold text-slate-700 pt-4">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900
             text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}
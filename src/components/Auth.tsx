import { Link, useNavigate } from "react-router-dom"
import InputBox from "./InputBpx"
import { SignupInput } from "@ratneshrt/common"
import { useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [ postInputs, setPostInputs ] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    async function sendRequest(){
        try{
            console.log("Sending data:", postInputs);
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const jwt = response.data.token;
            localStorage.setItem("token", jwt)
            navigate("/blogs");
        }catch(e){
            // alert user that request failed
            console.error("erroe is: "+" "+e)
            alert(type=== "signin" ? "Error while Signing in" : "Error while Signing up")
        }
    }
    return (
        <>
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <div className="px-10">
                        <div className="py-3">
                            <div className="text-4xl font-extrabold max-w-96">
                                {type == "signin" ? "Please login to your account" : "Create an account"}
                            </div>
                            <div className="font-light text-slate-700 pt-3">
                                {type === 'signin' ? "Don't have an account?" : "Already have an account?"} 
                                <Link to={type === "signin" ? "/signup" : "/signin"} className="pl-2 underline">{type === "signin" ? "Sign Up" : "Log in"}</Link>
                            </div>
                        </div>

                        {type === "signup" ? (<InputBox label="Name" placeholder="Ratnesh" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} />) : null}
                        
                        <InputBox label="Email" placeholder="ratnesh@gmail.com" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value
                            })
                        }}></InputBox>
                        <InputBox label="Password" placeholder="Ae@567" type="password" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }}></InputBox>
                        <div className="pt-4">
                            <Button type={type} onClick={sendRequest} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
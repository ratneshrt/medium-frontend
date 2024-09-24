import { ChangeEvent } from "react";

interface LabelebInput{
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBox({ label, placeholder, onChange, type }: LabelebInput){
    return (
        <>
            <div>
            <label className="block mb-2 text-sm text-gray-900 font-bold pt-4">{label}</label>
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} onChange={onChange} required />
        </div>
        </>
    )
}
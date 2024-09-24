import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return (
        <>
            <div className="px-10 border-b flex justify-between py-4">
                    <div className="flex flex-col justify-center cursor-pointer">
                        <Link to={`/blogs`} >
                            Medium
                        </Link>
                    </div>
                <div>
                    <Link to={'/publish'}>
                        <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Publish</button>
                    </Link>
                    <Avatar size={"big"} name="Ratnesh"></Avatar>
                </div>
            </div>
        </>
    )
}
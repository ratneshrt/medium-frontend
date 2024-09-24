import { BlogType } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: BlogType }) => {
    return (
        <>
            <AppBar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl">
                    <div className="grid col-span-8 ">
                        <div className=" text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="pt-2 text-slate-600">
                            2nd Dec 2024
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>

                    <div className="col-span-4 ">
                        <div className="text-slate-600 text-lg px-2">
                            Author
                        </div>
                        <div className="flex w-full">
                            <div className="flex justify-center flex-col pr-4">
                                <Avatar name={blog.author.name[0] || "Anonymous"} size="big"></Avatar>
                            </div>
                            <div >
                                <div className="text-xl font-bold">
                                {blog.author.name}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Nothing just copying and pasting the codes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
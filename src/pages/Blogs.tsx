import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if(loading)
    {
     return (
        <>
            <AppBar />
            <div className="flex justify-center">
                <div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                </div>
            </div>
        </>
     )
    }
    return (
        <>
            <AppBar />
            <div className="flex justify-center">
                <div>
                    {blogs.map(blog => <BlogCard 
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"} 
                    title={blog.title} 
                    content={blog.content} 
                    publishedDate="2nd Dec 2023"/>)}
                </div>
            </div>
        </>
    )
}
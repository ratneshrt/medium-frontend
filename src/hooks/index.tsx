import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config";

export interface BlogType {
    "title": string
    "content": string
    "id": string
    "author": {
        "name": string
    }
}

export const useBlog = ({ id }:  { id:string }   ) => {
    const [loading, setLoading] = useState(true);
    const [blog,setblog] = useState<BlogType>();
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setblog(response.data.blog)
                setLoading(false)
            })
    }, [])
    return {
        loading, 
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs,setblogs] = useState<BlogType[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setblogs(response.data.blogs)
                setLoading(false)
            })
    }, [])
    return {
        loading, 
        blogs
    }
}
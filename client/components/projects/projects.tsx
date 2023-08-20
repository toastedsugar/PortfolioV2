'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { getPosts } from "@/lib/contentfulEndpoints";
import ProjectCard from './projectCard';

type PostType = {
    id: String,
    title: String,
    slug: String,
    imageID: String,
}

export default function Projects() {
    const [error, setError] = useState<Boolean>(false)
    const [posts, setPosts] = useState<PostType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(getPosts)
                .then((response) => {
                    //console.log(response.data.items);

                    // Clean up post data to match PostType
                    let posts: PostType[] = []

                    response.data.items.map((item: any) => {
                        const post = {
                            id: item.sys.id,
                            title: item.fields.title,
                            slug: item.fields.slug,
                            imageID: item.fields.image.sys.id,
                        }

                        posts.push(post)
                    })

                    // Save the post data to state
                    setPosts(posts)
                })
                .catch((error) => {
                    //console.log(getPosts)
                    console.log(error)
                    setError(true)
                })
        }
        fetchData();

    }, [])

    return (
        <div>
            {posts.map((post: PostType) => (
                <div key={post.id as string}>
                    <ProjectCard post={post}/>
                </div>
            ))}
        </div>
    )
}
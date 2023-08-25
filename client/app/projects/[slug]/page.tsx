'use client'

import { useState, useEffect } from 'react';
import Image from "next/image"
import Link from 'next/link';
import axios from 'axios';
import { getProjectBySlug, getImage } from "@/lib/strapiEndpoints";
import ProjectError from '@/components/projects/projectError';

type PostType = {
    id: String,
    title: String,
    slug: String,
    imageName: String,
    imageURL: any,
    tags: String[],
    content: any,
}

type PostProps = {
    params: {
        slug: String,
    },
    id: String,
}

export default function Project({ params, id }: PostProps) {
    const [error, setError] = useState<Boolean>(false)
    const [post, setPost] = useState<PostType>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(getProjectBySlug(params.slug), { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}` } })
                .then((response) => {
                    console.log(response.data.data[0])

                    // Clean up post data to match PostType
                    const item = response.data.data[0]

                    const post: PostType = {
                        id: item.id,
                        title: item.attributes.Title,
                        slug: item.attributes.Slug,
                        imageName: item.attributes.Image.data.attributes.name,
                        imageURL: getImage(item.attributes.Image.data.attributes.url),
                        tags: item.attributes.Tags.toLowerCase().split(','),
                        content: item.attributes.Content,
                    }
                    console.log(post)


                    // Save the post data to state
                    setPost(post)
                })
                .catch((error) => {
                    console.log(error)
                    setError(true)
                })
        }
        fetchData()
    }, [])

    return (
        <div className=' bg-zinc-700 flex flex-col md:flex-row gap-3 min-h-full rounded-xl'>
            <div className='bg-green-700 md:w-2/3 rounded-xl'>
                <Image
                    className='h-48 object-cover rounded-xl mb-2'
                    src={post?.imageURL}
                    width={800}
                    height={800}
                    alt="Header Image"
                    quality={25}
                    priority={true}
                />
                <div className='px-4 pb-4'>
                    <h4 className='font-raleway font-semibold text-3xl mb-2'>
                        {post?.title}
                    </h4>
                    <p className=''>
                        {post?.content}
                    </p>
                </div>
            </div>
            <div className='bg-pink-700 md:w-1/3 p-4 rounded-xl'>
                <p className='font-raleway font-semibold text-xl mb-2'>Tags</p>
                <ul className='flex flex-row flex-wrap'>
                    {post?.tags.map(tag => (
                        <li className='font-raleway font-bold text-xs bg-black py-1 px-4 m-1 rounded-full'>{tag}</li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
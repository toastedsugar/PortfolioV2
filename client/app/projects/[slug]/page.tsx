'use client'

import { useState, useEffect } from 'react';
import Image from "next/image"
import Link from 'next/link';
import blurIMG from '@/public/blur.jpg'
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { getProjectBySlug, getImage } from "@/lib/strapiEndpoints";
import ProjectError from '@/components/projects/projectError';
import style from './markdown-styles.module.css'

type PostType = {
    id: String,
    title: String,
    slug: String,
    imageName: String,
    imageURL: any,
    tags: String[],
    content: any,
    repository: String,
    demoLink: String,
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
                        repository: item.attributes.Repository,
                        demoLink: item.attributes.DemoLink,
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
        <div className='flex flex-col md:flex-row gap-3 rounded-xl'>
            <div className='bg-zinc-900 md:w-2/3 rounded-xl'>
                {post?.imageURL ? (
                    <Image
                        src={post?.imageURL}
                        className='h-48 object-cover rounded-xl mb-8'
                        width={800}
                        height={800}
                        alt="Header Image"
                        priority={true}
                        onError={(error) => { console.log(error) }}
                    />
                ) : (
                    <Image
                        src={blurIMG}
                        className='h-48 object-cover rounded-xl mb-8'
                        width={800}
                        height={800}
                        quality="1"
                        alt="Loading Image"
                    />
                )}
                <div className='px-6 pb-6'>
                    <h4 className='font-raleway font-semibold text-3xl mb-4'>
                        {post?.title}
                    </h4>
                    <ReactMarkdown children={post?.content} className={style.reactMarkdown} />
                </div>
            </div>
            <div className='flex flex-col flex-none gap-3 h-1/2 md:w-1/3'>

                <div className='bg-zinc-900 p-4 rounded-xl'>
                    <p className='font-raleway font-semibold text-xl mb-2'>More Details</p>
                    <ul className='flex flex-row flex-wrap'>
                        {post?.tags.map(tag => (
                            <li key={tag as any} className='font-raleway font-bold text-xs bg-black py-1 px-4 m-1 rounded-full'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='bg-zinc-900  p-4 rounded-xl'>
                    <p className='font-raleway font-semibold text-xl mb-2'>Tags</p>
                    <ul className='flex flex-row flex-wrap'>
                        {post?.tags.map(tag => (
                            <li key={tag as any} className='font-raleway font-bold text-xs bg-black py-1 px-4 m-1 rounded-full'>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
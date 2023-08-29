'use client'

import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import ProjectSkeleton from './projectSkeleton';
//import { getPosts, getImage } from "@/lib/contentfulEndpoints";
import { getProjects, getFeaturedProjects, getImage } from "@/lib/strapiEndpoints";
import Error from '../Error';
import blurIMG from '@/public/blur.jpg'

type PostType = {
    id: String,
    title: String,
    slug: String,
    imageName: String,
    imageURL: any,
    tags: String[],
}

type ProjectsProps = {
    featured: Boolean,
}

export default function Projects({ featured }: ProjectsProps) {
    const [error, setError] = useState<Boolean>(false)
    const [posts, setPosts] = useState<PostType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(featured ? getFeaturedProjects : getProjects, { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}` } })
                .then((response) => {
                    console.log(response.data.data)

                    // Clean up post data to match PostType
                    let posts: PostType[] = []

                    response.data.data.map((item: any) => {
                        const post = {
                            id: item.id,
                            title: item.attributes.Title,
                            slug: item.attributes.Slug,
                            imageName: item.attributes.Image.data.attributes.name,
                            imageURL: getImage(item.attributes.Image.data.attributes.url),
                            tags: item.attributes.Tags.toLowerCase().split(','),
                        }
                        console.log(post)
                        posts.push(post)
                    })

                    // Save the post data to state
                    console.log(posts)
                    setPosts(posts)
                })
                .catch((error) => {
                    console.log(error)
                    setError(true)
                })
        }
        fetchData()
    }, [])

    function showCards() {
        return posts.map((post) => (
            <div
                key={post.id as string}
                className="flex flex-col bg-zinc-900 p-4 rounded-xl hover:contrast-75 h-80"
            >
                <Link href={`./projects/${post.slug}`}>
                    <h3 className='text-lg font-raleway font-semibold pl-2 mb-2'>
                        {post.title}
                    </h3>
                    {post?.imageURL ? (
                        <Image
                            className='rounded-xl h-48 object-cover mb-3'
                            src={post.imageURL}
                            width={400}
                            height={400}
                            quality={25}
                            priority={true}
                            alt="Project Image"
                        />
                    ) : (
                        <Image
                            className='rounded-xl h-48 object-cover mb-3'
                            src={blurIMG}
                            width={400}
                            height={400}
                            quality="1"
                            alt="Loading Image"
                        />
                    )}
                    <ul className='flex flex-row px-4 gap-2'>
                        {post.tags.map(tag => (
                            <li key={tag as any} className='font-raleway font-bold text-xs bg-black py-1 px-4 rounded-full'>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </Link>

            </div>
        ))
    }


    return (
        <>
            {error && <Error errorMsg="Failed to load Projects!!" />}
            <Suspense fallback={<ProjectSkeleton />}>
                {/** Set layout for the projects here */}
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {showCards()}
                </div>
            </Suspense>
        </>
    )
}
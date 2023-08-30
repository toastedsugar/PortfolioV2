import Image from 'next/image'
import Projects from "@/components/projects/projects"
import nodejs from '@/public/nodejs_dark.svg'
import cpp from '@/public/cpp_logo.png'
import mongodb from '@/public/MongoDB/MongoDB_White.svg'
import typescript from '@/public/typescript-design-assets/ts-logo-128.svg'
import nextjs from '@/public/NEXTJS/logotype/dark-background/nextjs-logotype-dark-background.svg'
import linux from '@/public/Linux_logo_PNG1.png'
import python from '@/public/python-logo-only.svg'
import aws from '@/public/powered-by-aws-white.png'


export default function Home() {
  const skills = [
    { name: 'Typescript' },
    { name: 'NodeJS' },
    { name: 'C++' },
    { name: 'Python' },
    { name: 'MongoDB' },
    { name: 'NextJS' },
    { name: 'Linux' },
    { name: 'AWS' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className='w-3/4 md:w-3/5'>
          <h2 className='text-2xl md:text-3xl'>A Software Developer with an interest in creating clean and minimalistic applications</h2>
          <p className='md:text-lg text-zinc-300 px-6'>
            Hey I&apos;m Rohan, a Software Developer based in California. I&apos;m a fresh Systems Programming graduate looking to expand my knowledge and hone my skills at a position on the cutting edge of technology
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className='border-b lg:border-zinc-800'>
        <h2>Skills</h2>
        <div className='flex flex-row flex-wrap gap-4 px-4'>
          {skills.map((skill) => (
            <p key={skill.name as any} className='bg-zinc-900 font-semibold px-6 py-3 rounded-lg'>
              {skill.name}
            </p>

          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className='border-0'>
        <h2 className="">Featured Projects</h2>
        <Projects featured={true} />
      </section>
    </div>
  )
}

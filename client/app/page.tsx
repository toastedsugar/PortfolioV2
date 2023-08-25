import Image from 'next/image'
import Projects from "@/components/projects/projects"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className='bg-green-400 '>
        <div>

          <h2>Hello, I'm Rohan</h2>
          <h3>I'm a Software Developer</h3>
          <p>I like to make clean and creative looking websites</p>
        </div>
      </section>

      {/* Skills */}
      <section className='border-b lg:border-zinc-800'>
        <h2>Skills</h2>
      </section>

      {/* Selected Projects */}
      <section className='border-b lg:border-zinc-800'>
        <h2 className="">Featured Projects</h2>
        <Projects featured={true} />
      </section>
    </div>
  )
}

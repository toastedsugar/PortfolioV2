import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero section*/}
      <section className="">
        {/* Hero Section */}
        <div className='border-b lg:border-zinc-800'>
        <h2>Hello, I'm Rohan</h2>
        <h3>I'm a Software Developer</h3>
        <p>I like to make clean and creative looking websites</p>

        </div>
        {/* Skills */}
        <div className='border-b lg:border-zinc-800'>
          <h2>Skills</h2>
        </div>
        {/* Selected Projects */}
        <div className='border-b lg:border-zinc-800'>
          <h2>Selected Websites</h2>
        </div>
      </section>
    </div>
  )
}

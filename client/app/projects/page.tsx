import Projects from "@/components/projects/projects"

export default function About() {
    return (
        <div>
            <h2 className="text-2xl font-raleway font-semibold pl-2 mb-6">
                Check out all my Projects
            </h2>
            <Projects featured={false} />
        </div>
    )
}
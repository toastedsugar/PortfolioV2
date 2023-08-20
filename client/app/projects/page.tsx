import { Suspense } from "react"
import Projects from "@/components/projects/projects"
import ProjectSkeleton from "@/components/projects/projectSkeleton"

export default function About(){
    

    return(
        <div>
            <h2>Projects</h2>
            <Suspense fallback={<ProjectSkeleton />}>
                <Projects />
            </Suspense> 
        </div>
    )
}
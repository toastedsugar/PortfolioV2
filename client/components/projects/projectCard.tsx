type PostType = {
    id: String,
    title: String,
    slug: String,
    imageID: String,
}

export default function ProjectCard({id, title, slug, imageID}: PostType) {
    return (
        <div>
            Card
        </div>
    )
}
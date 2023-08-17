import Link from "next/link";
import Image from "next/image";
import profilepic from "../../public/pfp.jpg"

export default function Brand() {
    return (
        <div className="flex -z-10">
            <Image
                src={profilepic}
                className="rounded-full mr-4"
                width={50}
                height={50}
                alt="Picture of the author"
            />

            <Link href="/" className="font-montserrat flex flex-col mt-0.5">
                <p className="text-xl font-light">Rohan Shrotri</p>
                <p className="text-xs ml-2">Software Developer</p>
            </Link>
        </div>
    )
}
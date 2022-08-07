import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ name, title, description }) {
  return (
    <Link href={`/projects/${name}`}>
      <a className="flex p-2 w-full max-w-2xl bg-fogWhite/50 shadow-2xl divide-x-2 divide-fogDark/20 border-2 border-fogDark/50">
        <div className="relative h-48 w-48 my-auto">
          <Image src={`/${name}.png`} alt={title} layout="fill" objectFit="contain" />
        </div>
        <div className="pl-4 max-w-md">
          <h2 className="text-fogGold text-2xl font-bold">{title}</h2>
          <p className="whitespace-pre-wrap">{description}</p>
        </div>
      </a>
    </Link>
  )
}

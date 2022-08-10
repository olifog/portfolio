import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ name, title, description, skills }) {
  return (
    <Link href={`/projects/${name}`}>
      <a className="flex p-2 w-full max-w-2xl bg-fogWhite/50 shadow-2xl divide-x-2 divide-fogDark/20 border-2 border-fogDark/50 overflow-hidden">
        <div className="relative h-48 w-48 my-auto">
          <Image src={`/${name}.png`} alt={title} layout="fill" objectFit="contain" />
        </div>
        <div className="relative pl-4 max-w-md">
          <div className="flex -space-x-1 absolute -top-2 -right-[26px]">
            {
              skills.map(skill => (
                <div className={`skew-x-[24deg] bg-fog${skill} pb-[2px] px-3`} key={skill}>
                  <div className="-skew-x-[24deg]">
                    <span className="text-fogWhite text-sm font-bold">
                      {skill}
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
          <h2 className="text-fogGold text-2xl font-bold">{title}</h2>
          <p className="whitespace-pre-wrap">{description}</p>
        </div>
      </a>
    </Link>
  )
}

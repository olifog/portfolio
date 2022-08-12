import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ name, title, description, skills, cardImg }) {
  return (
    <Link href={`/projects/${name}`}>
      <a className="relative flex flex-col items-center sm:items-start sm:flex-row p-2 w-[20rem] sm:w-full max-w-2xl sm:space-x-2 bg-fogWhite/50 shadow-2xl border-2 border-fogDark/50 overflow-hidden">
        <div className="relative h-48 w-48 mt-8 sm:my-auto">
          <Image src={cardImg} alt={title} layout="fill" objectFit="contain" />
        </div>
        <div className="sm:relative sm:pl-4 max-w-md">
          <div className="flex -space-x-1 absolute top-0 -right-[5px] sm:-top-2 sm:-right-[18px] font-roboto">
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
          <h2 className="text-fogGold text-2xl font-bold flex justify-center sm:justify-start">{title}</h2>
          <p className="whitespace-pre-wrap">{description}</p>
        </div>
      </a>
    </Link>
  )
}

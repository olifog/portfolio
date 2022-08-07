import Layout from "/lib/Layout"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "/lib/ProjectCard"
import getProjects from "/lib/getProjects"

export default function Home({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center pb-8 w-full">
        <span className="text-fogDark font-syncopate text-5xl pb-16 pt-16 text-center">
          <span className="text-fogGold">OLI</span>
          VER FOGELIN
        </span>
        <div className="grid grid-cols-2 w-full max-w-lg h-64">
          <div className="w-full p-6">
            <div className="bg-fogDark w-full h-full"></div>
          </div>
          <div className="w-full flex flex-col p-6 font-roboto">
            <span className="pt-4 pb-8 font-bold">developer, writer, creative</span>
            I&apos;m always looking for cool problems to solve.
            <br />
            <div className="text-sm pt-1">
              (and&nbsp;
              <a href="https://letterboxd.com/olifog/" className="text-fogBlue">
                watching a film every day
              </a>
              .)
            </div>
          </div>
        </div>
      </div>
      <div className="bg-fogDark w-full min-h-[340px] grid grid-cols-2">
        <div className="w-full h-full p-8">
          <div className="w-full h-full relative">
            <Image src="/trophy.jpg" alt="responsive" layout="fill" objectFit="contain" className="object-right" />
          </div>
        </div>
        <div className="w-full p-8 font-roboto text-fogGold pb-10">
          <h1 className="text-2xl font-roboto pb-4">Awards and Recognition</h1>
          <ul className="text-sm list-disc text-fogWhite space-y-1">
            <li><b>Google Code In</b> International Finalist, <span className="text-gray-400">2019</span></li>
            <li><b>Oxford University Computing Challenge</b> national top 20 finalist, <span className="text-gray-400">2022, 2021</span></li>
            <li><b>Lockheed Martin CodeQuest</b> 1st place nationally, <span className="text-gray-400">2021, 2020, 2019, 2018</span></li>
            <li><b>UKMT Senior Mathematical Challenge</b> Gold award + Best in School, <span className="text-gray-400">2021, 2020</span></li>
            <li><b>British Biology Olympiad</b> Gold award + Best in School, <span className="text-gray-400">2022</span></li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="font-syncopate text-7xl text-fogBlue pt-8 pb-6">PROJECTS</h1>
        <div className="w-full flex flex-col items-center space-y-4 mb-8">
          {
            projects.map(project => (
              <ProjectCard key={project.name} {...project} />
            ))
          }
          <Link href="/projects">
            <a className="flex items-center justifty-center rounded-md shadow-xl bg-fogDark h-12 text-fogWhite font-roboto p-4">
              Show me more!
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const projects = await getProjects()

  return {
    props: {
      projects: projects.filter(project => project.featured)
    }
  }
}

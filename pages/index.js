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
        <div className="grid grid-cols-2 w-full max-w-lg h-64 space-x-1">
          <div className="w-full p-6 relative">
            <Image src="/oliverfogelin.jpg" alt="Oliver Fogelin" layout='fill' objectFit="contain"></Image>
          </div>
          <div className="w-full flex flex-col p-4 font-roboto">
            <h2 className="pt-2 font-bold text-lg pb-2">developer, writer, creative</h2>
            <h2 className="pb-8">and founding cohort at the <a href="https://lis.ac.uk"><span className="italic">London Interdisciplinary School</span></a></h2>
            I&apos;m always looking for cool problems to solve.
            <br />
            <div className="text-sm pt-1">
              (and&nbsp;
              <a href="https://letterboxd.com/olifog/" className="text-fogBlue">
                watching way too many films
              </a>
              .)
            </div>
          </div>
        </div>
      </div>
      <div className="bg-fogDark w-full min-h-[340px] grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none">
        <div className="w-full h-full p-2 sm:p-8">
          <div className="w-full h-full relative">
            <Image src="/trophy.jpg" alt="responsive" layout="fill" objectFit="contain" className="md:object-right" />
          </div>
        </div>
        <div className="w-full px-6 sm:p-8 font-roboto text-fogGold pb-10">
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
        <h1 className="font-syncopate text-4xl md:text-7xl text-fogBlue pt-8 pb-6">PROJECTS</h1>
        <div className="w-full flex flex-col items-center space-y-4 mb-8">
          {
            projects.sort((a, b) => b.weight - a.weight).map(project => (
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
      <div id="contact" className="flex flex-col items-center bg-fogGold pb-6">
        <h2 className="text-xl pt-4 pb-4 font-bold">Contact me!</h2>
        <div className="flex space-x-1">
          <Link href="">
            <a><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg></a>
          </Link>
          <Link href="">
            <a><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg></a>
          </Link>
          <Link href="">
            <a><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg></a>
          </Link>
          <Link href="">
            <a><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg></a>
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

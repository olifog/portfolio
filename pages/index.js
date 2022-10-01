import Layout from "/lib/Layout"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "/lib/ProjectCard"
import getProjects from "/lib/getProjects"
import Head from "next/head"

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>
          Oliver Fogelin
        </title>
      </Head>
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
              <h2 className="pb-8">and founding cohort at the <a target="_blank" rel="noreferrer noopener" href="https://lis.ac.uk"><span className="italic text-fogGold">London Interdisciplinary School</span></a></h2>
              I&apos;m always looking for cool problems to solve.
              <br />
              <div className="text-sm pt-1">
                (and&nbsp;
                <a target="_blank" rel="noreferrer noopener" href="https://letterboxd.com/olifog/" className="text-fogBlue">
                  watching way too many films
                </a>
                .)
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fogDark w-full min-h-[340px] grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none border-x-4 border-fogGold">
          <div className="w-full h-full p-2 sm:p-8">
            <div className="w-full h-full relative">
              <Image src="/trophy.jpg" alt="responsive" layout="fill" objectFit="contain" className="md:object-right" />
            </div>
          </div>
          <div className="w-full px-6 sm:p-8 font-roboto text-fogGold pb-10">
            <h1 className="text-2xl font-roboto pb-4">Achievements</h1>
            <ul className="text-sm list-disc text-fogWhite space-y-1">
              <li><b>A Levels, A*A*A*A*A</b> in Maths, Further Maths, English Literature, Biology, and AS Computer Science <span className="text-gray-400">2022</span></li>
              <li><b>Lockheed Martin CodeQuest</b> 1st place nationally, <span className="text-gray-400">2021, 2020, 2019, 2018</span></li>
              <li><b>Google Code In</b> International Finalist, <span className="text-gray-400">2019</span></li>
              <li><b>Oxford University Computing Challenge</b> national top 20 finalist, <span className="text-gray-400">2022, 2021</span></li>
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
        <div id="contact" className="flex flex-col items-center bg-fogDark pb-6 border-x-4 border-fogGold">
          <h2 className="text-xl pt-4 pb-4 font-bold text-fogGold">Contact me!</h2>
          <div className="flex space-x-2">
            <Link href="mailto:oliverfogelin@gmail.com">
              <a className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </Link>
            <Link href="https://github.com/olifog" passHref>
              <a target="_blank" rel="noopener noreferrer" className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </Link>
            <Link href="https://www.linkedin.com/in/ofogelin/" passHref>
              <a target="_blank" rel="noopener noreferrer" className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
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

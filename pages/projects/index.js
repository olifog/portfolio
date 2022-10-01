import Layout from '/lib/Layout.js'
import getProjects from '/lib/getProjects'
import ProjectCard from '/lib/ProjectCard'
import TechSelector from '/lib/TechSelector'
import { useState } from 'react'
import Head from 'next/head'

export default function ProjectsPage({ projects }) {
  const [selectedTech, setSelectedTech] = useState([])

  return (
    <>
      <Head>
        <title>
          Oliver Fogelin
        </title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center">
          <div className="font-syncopate text-center text-3xl text-fogBlue pt-6 pb-4">
            SELECTED PROJECTS
          </div>
          <TechSelector projects={projects} selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
          <div className="flex flex-col items-center space-y-4 max-w-2xl w-full mx-auto pb-8 pt-6">
            {
              projects.filter(project => {
                if (selectedTech.length === 0) return true
                for (let tech of selectedTech) {
                  if (project.tech.includes(tech)) return true
                }
                return false
              }).sort((a, b) => b.weight - a.weight).map(project => (
                <ProjectCard key={project.name} {...project} />
              ))
            }
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
      projects: projects
    }
  }
}
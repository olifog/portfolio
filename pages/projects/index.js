import Layout from '/lib/Layout.js'
import getProjects from '/lib/getProjects'
import ProjectCard from '/lib/ProjectCard'

export default function ProjectsPage({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col space-y-4 max-w-2xl w-full mx-auto">
        {
          projects.map(project => (
            <ProjectCard key={project.name} {...project} />
          ))
        }
      </div>
    </Layout>
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
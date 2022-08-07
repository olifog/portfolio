import Layout from '/lib/Layout.js'
import getProjects from '/lib/getProjects'
import ProjectCard from '/lib/ProjectCard'

export default function ProjectsPage({ projects }) {
  return (
    <Layout>
      {
        projects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))
      }
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
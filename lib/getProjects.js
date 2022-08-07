import { promises as fs } from "fs";

export default async function getProjects() {
  const files = await fs.readdir('./projects')
  
  return Promise.all(files.map(async name => {
    return JSON.parse(await fs.readFile(`./projects/${name}`))
  }))
}

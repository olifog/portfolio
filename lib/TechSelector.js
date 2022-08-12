import { useState } from "react"

const TechButton = ({ name, count, selectedTech, setSelectedTech }) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    if (!selected && !selectedTech.includes(name)) {
      setSelectedTech([...selectedTech, name])
    }
    if (selected && selectedTech.includes(name)) {
      setSelectedTech(selectedTech.filter(tech => tech !== name))
    }
    setSelected(!selected)
  }

  return (
    <button className={`rounded-full ${selected ? 'bg-fogGold' : 'bg-fogWhite'} text-fogDark/60 px-2 py-[1px]`} onClick={handleClick}>
      <span className="text-fogDark">{name}</span>
      &nbsp;
      {'x' + count}
    </button>
  )
}

export default function TechSelector ({ projects, selectedTech, setSelectedTech }) {
  const [open, setOpen] = useState(false)
  
  const techList = projects.reduce((prev, project) => {
    for (let tag of project.tech) {
      if (prev.hasOwnProperty(tag)) {
        prev[tag]++
      } else {
        prev[tag] = 1
      }
    }
    return prev
  }, {})

  const sortedTech = Object.keys(techList).sort((a, b) => techList[b] - techList[a]).map(tech => [tech, techList[tech]])
  
  return (
    <div className="flex flex-col items-center font-roboto text-sm">
      <div className="flex items-center" onClick={() => setOpen(!open)}>
        <span className="font-roboto pb-[1px] cursor-pointer text-lg">Tech filter</span>
        {
          open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#2d3047" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#2d3047" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )
        }
      </div>
      {
        open && (
          <div className="w-full max-w-xl px-4 flex flex-wrap gap-1">
            {
              sortedTech.map(tech => (
                <TechButton key={tech[0]} name={tech[0]} count={tech[1]} selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

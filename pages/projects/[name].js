import Layout from '/lib/Layout'
import getProjects from '/lib/getProjects'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const NextButton = ({ onClick, className }) => (
  <button
    className={className + " flex items-center justify-center"}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-fogDark/80 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
)

const PrevButton = ({ onClick, className }) => (
  <button
    className={className + " flex items-center justify-center"}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-fogDark/80 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  </button>
)


export default function ProjectPage({ name, title, github, images, skills, url, writeup, tech }) {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: 'center'
  })

  const [modal, setModal] = useState(null)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSlideClick = useCallback(
    (image) => {
      if (embla && embla.clickAllowed()) {
        setModal(image)
      }
    },
    [embla, setModal],
  )

  return (
    <Layout>
      {
        modal && (
          <div className="fixed flex items-center justify-center h-screen w-screen z-50 bg-fogDark/80 top-0 left-0" onClick={() => setModal(null)}>
            <div className="w-[90%] h-[90%] max-w-4xl relative">
              <Image src={`/${name}/${modal}`} alt={title} layout='fill' className="object-contain" />
            </div>
          </div>
        )
      }
      <div className="flex w-screen flex-col items-center font-roboto">
        <div className="relative flex w-full max-w-xl items-center">
          <PrevButton className="w-16 h-16" onClick={scrollPrev} />
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex items-center">
              {
                images.map(image => (
                  <div onClick={() => onSlideClick(image)} key={image} className="relative h-[20rem]" style={{flex: "0 0 100%"}}>
                    <Image src={`/${name}/${image}`} alt={title} layout="fill" className="object-contain" />
                  </div>
                ))
              }
            </div>
          </div>
          <NextButton className="w-16 h-16" onClick={scrollNext} />
        </div>
        <h1 className="font-syncopate text-5xl text-fogGold pt-8">
          {title.toUpperCase()}
        </h1>
        <div className="flex space-x-4 pt-2">
          <div className="flex -space-x-1">
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
          <div className="text-fogBlue space-x-3 flex">
            {
              github && (
                <Link href={github} alt={github}>
                  <a className="flex items-center">
                    <span className="pr-[2px]">Github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Link>
              )
            }
            {
              url && (
                <Link href={url} alt={url}>
                  <a className="flex items-center">
                    <span className="pr-[2px]">Live site</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Link>
              )
            }
          </div>
        </div>
        <div className="flex w-full max-w-2xl font-roboto pt-8 px-8 space-x-4">
          <div className="">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {writeup}
            </ReactMarkdown>
          </div>
          <div className="flex flex-col items-center bg-fogWhite/40 p-3 max-w-xs border-fogDark/30 border-2">
            <h3 className="text-xl underline underline-offset-4 text-fogGold font-bold">Tech used</h3>
            <div className="pt-2 flex flex-wrap w-[9rem] gap-1 justify-center">
              {
                tech.map(techSkill => (
                  <div key={techSkill} className="rounded-full inline-block bg-fogDark text-fogWhite px-2 py-[1px]">{techSkill}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: (await getProjects()).map(project => {
      return {
        params: { name: project.name }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const projects = await getProjects()

  return {
    props: projects.filter(project => project.name === context.params.name)[0]
  }
}

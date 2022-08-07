import Layout from '/lib/Layout'
import getProjects from '/lib/getProjects'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'


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


export default function ProjectPage({ name, title, github, images }) {
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
      <div className="flex w-screen flex-col items-center">
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
        <h1 className="font-syncopate text-5xl text-fogGold">
          {title.toUpperCase()}
        </h1>
        <div>
          {github}
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

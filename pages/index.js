import Layout from "/lib/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="flex bg-fogWhite z-20 flex-col items-center pb-8 w-full">
        <span className="pb-4 font-caveat text-3xl text-fogDark">Hi, I&apos;m</span>
        <span className="text-fogDark font-syncopate text-4xl pb-8">
          <span className="text-fogGold">OLI</span>
          VER FOGELIN
        </span>
        <div className="grid grid-cols-2 w-full max-w-md h-64">
          <div className="bg-red-700 w-full"></div>
          <div className="bg-red-200 w-full"></div>
        </div>
      </div>
      <div className="bg-fogDark w-full h-64 z-10 relative">
      </div>
    </Layout>
  )
}

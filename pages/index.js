import Layout from "/lib/Layout"

export default function Home() {
  return (
    <Layout>
      <span className="pb-4 font-caveat text-3xl text-fogDark">Hi, I&apos;m</span>
      <span className="text-fogDark font-syncopate text-4xl">
        <span className="text-fogGold">OLI</span>
        VER FOGELIN
      </span>
      <div className="grid grid-cols-2 w-full max-w-md h-64">
        <div className="bg-red-700 w-full"></div>
        <div className="bg-red-200 w-full"></div>
      </div>
    </Layout>
  )
}

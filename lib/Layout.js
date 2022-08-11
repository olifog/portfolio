import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col min-h-screen border-x-4 border-b-4 border-fogGold items-center">
      <div className="w-full border-fogGold border-x-4 fixed bg-fogDark/90 flex justify-center">
        <nav className="flex w-screen px-8 py-1 max-w-screen-md justify-between">
          <div className="w-16 h-16">
            <Link href="/">
              <a>
                <Image src='/icon.png' alt='Home' width={128} height={128}>
                </Image>
              </a>
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-fogWhite font-roboto font-medium">
            <Link href="/projects">
              <a>
                Projects
              </a>
            </Link>
            <Link href="/#contact">
              <a>
                Contact
              </a>
            </Link>
          </div>
        </nav>
      </div>
      <div className="-z-50 w-screen h-screen fixed pattern-bg-fogWhite pattern-opacity-10 pattern-size-8 pattern-fogBlue pattern-dots"></div>
      <div className="mt-[5rem] w-screen">{children}</div>
    </main>
  )
}

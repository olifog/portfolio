import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col bg-fogWhite min-h-screen border-4 border-fogGold items-center">
      <nav className="flex w-full px-8 py-4 max-w-screen-md justify-between">
        <div className="w-16 h-16"> 
          <Link href="/">
            <a>
              <Image src='/icon.png' alt='Home' width={128} height={128}>
              </Image>
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-6 text-fogDark font-roboto font-medium">
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
      {children}
    </main>
  )
}

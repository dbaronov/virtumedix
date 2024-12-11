import Link from "next/link"

function NavBar() {
  return (
    <nav className="flex gap-6">
        <h5 className="px-4 py-1 mt-4 lg:mt-0">VirtuMedix</h5>
        <ul className="flex gap-2">
            <li>
                <Link href="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Home </Link>
            </li>
            <li>
                <Link href="/about" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">About</Link>
            </li>
            <li>
                <Link href="/contact" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar

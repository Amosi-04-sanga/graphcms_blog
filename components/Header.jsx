import Link from 'next/link'

const categories = [{ name: "HTML/CSS", slug: "html-css" }, { name: "JavaScript", slug: "js", }, { name: "react js", slug: "reactjs" }, { name: "next js", slug: "next-js" }]

const Header = () => {
    return (
        <nav className='py-3 px-8 bg-gray-200 h-14 relative sticky top-0' >
            <div className="flex justify-between">
                <div>
                    <Link href="/" >
                        <span className='cursor-pointer font-bold text-xl' >MOSDEV</span>
                    </Link>
                </div>
                <div>
                    <div className="hidden md:contents">
                        {
                            categories.map(item => (
                                <Link key={item.slug} href={`/category/${item.slug}`} >
                                    <span className='float-right mr-4 cursor-pointer hover:underline' >
                                        {item.name}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
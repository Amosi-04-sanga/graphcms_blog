import Link from 'next/link'
import styles from '../styles/Home.module.css'

const categories = [{ name: "HTML/CSS", slug: "html-css" }, { name: "JavaScript", slug: "js", }, { name: "react js", slug: "reactjs" }, { name: "next js", slug: "next-js" }]

const Header = () => {
    return (
        <>
            <nav className={`${styles.navBar} py-3 px-8 h-14 relative sticky top-0`} >
                <div className="flex justify-between">
                    <div>
                        <Link href="/" >
                            <span className='cursor-pointer font-bold text-xl' >MOSDEV</span>
                        </Link>
                    </div>
                    <div>
                        <div className="contents">
                            <Link href="/" >
                                <span className='mr-4 cursor-pointer' >Home</span>
                            </Link>
                            <Link href="/about" >
                                <span className='mr-4 cursor-pointer' >About</span>
                            </Link>
                            <Link href="/contacts" >
                                <span className='mr-4 cursor-pointer' >Contacts</span>
                            </Link>
                            <Link href="/myPortfolio" >
                                <span className='mr-4 cursor-pointer' >Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`${styles.categories} font-bold flex justify-between`}>
                <Link href="/category/htmlcss" >
                    <span>html & css</span>
                </Link>
                <Link href="/category/javascript" >
                    <span>vanilla JS</span>
                </Link>
                <Link href="/category/react" >
                    <span>react</span>
                </Link>
                <Link href="/category/nextjs" >
                    <span>next js</span>
                </Link>
                <Link href="/category/node-express" >
                    <span>node & express</span>
                </Link>
                <Link href="/category/mongodb" >
                    <span>mongodb</span>
                </Link>
                
            </div>
        </>
    )
}

export default Header



/*
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

*/



// JUMA HAULE


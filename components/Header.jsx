import Link from 'next/link'
import styles from '../styles/Home.module.css'

const categories = [{ name: "HTML/CSS", slug: "html-css" }, { name: "JavaScript", slug: "js", }, { name: "react js", slug: "reactjs" }, { name: "next js", slug: "next-js" }]

const Header = () => {
    return (
        <>
            <nav className={`${styles.navBar} py-3 px-2 md:px-8 h-14 relative sticky top-0`} >
                <div className="flex justify-between">
                    <div>
                        <Link href="/" >
                            <span className='cursor-pointer font-bold text-xl' >MOSDEV</span>
                        </Link>
                    </div>
                    <div>
                        <div className="contents">
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
        </>
    )
}

export default Header




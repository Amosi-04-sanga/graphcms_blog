import Link from 'next/link'
import styles from '../styles/Home.module.css'

const categories = [{ name: "HTML/CSS", slug: "html-css" }, { name: "JavaScript", slug: "js", }, { name: "react js", slug: "reactjs" }, { name: "next js", slug: "next-js" }]

const Header = () => {

    const backToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(backToTop);
            window.scrollTo(0, c - c / 8);
        }
    }

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
            <div>
                <svg onClick={backToTop} className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 182.6C336.4 188.9 328.2 192 319.1 192s-16.38-3.125-22.62-9.375L224 109.3V432c0 44.13-35.89 80-80 80H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h112C152.8 448 160 440.8 160 432V109.3L86.62 182.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l127.1-128c12.5-12.5 32.75-12.5 45.25 0l128 128C355.1 149.9 355.1 170.1 342.6 182.6z" /></svg>
            </div>
        </>
    )
}

export default Header




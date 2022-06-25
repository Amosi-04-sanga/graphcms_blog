import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const categories = [{ name: "HTML/CSS", slug: "html-css" }, { name: "JavaScript", slug: "js", }, { name: "react js", slug: "reactjs" }, { name: "next js", slug: "next-js" }]

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const [isDark, setIsDark] = useState(false)

    const backToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(backToTop);
            window.scrollTo(0, c - c / 8);
        }
    }

    const openMenuHandler = () => {
        setMenuOpened(!menuOpened)
    }
    const closeMenuHandler = () => {
        setMenuOpened(!menuOpened)
    }


    const darkModeHandler = () => {
        console.log("night");
        setIsDark(!isDark)
    }
    const lightModeHandler = () => {
        console.log("light");
        setIsDark(!isDark)
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

                    <div className={`${styles.headerIcons} flex items-center`}>
                        <div className="darkmodeIcons">
                            <img onClick={lightModeHandler} className={`${!isDark ? 'hidden' : 'block'} w-6 h-6 cursor-pointer`} src={'/light.png'} alt="light" />
                            <svg onClick={darkModeHandler} className={`${!isDark ? 'block' : 'hidden'} w-6 h-6 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z" /></svg>
                        </div>
                        <div className={styles.menuIcon}>
                            <svg onClick={openMenuHandler} className={`${!menuOpened ? 'block' : 'hidden'} w-7 h-7 pl-2 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>
                            <svg onClick={closeMenuHandler} className={`${!menuOpened ? 'hidden' : 'block'} w-7 h-6 pl-2 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" /></svg>
                        </div>
                    </div>
                    <div className={`${!menuOpened ? styles.hideNav : styles.headerNavigation}`}>
                        <Link href="/about" >
                            <a><span className='mr-4 cursor-pointer' >About</span></a>
                        </Link>
                        <Link href="/contacts" >
                            <a><span className='mr-4 cursor-pointer' >Contacts</span></a>
                        </Link>
                        <Link href="/portifolio" >
                            <a><span className='mr-4 cursor-pointer' >portifolio</span></a>
                        </Link>
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




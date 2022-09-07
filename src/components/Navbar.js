import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"

function Navbar() {
    const [click, setclick] = useState(false)

    const style = {
        nav: 'relative w-full h-[80px] bg-blue-400 flex justify-between items-center px-[5%] text-[30px]',
        logo: "",
        ul: 'flex list-none flex-[0.4] justify-around hidden lg:flex',
        icon: "text-[30px] lg:hidden",
        sidebar: `w-[400px] h-[300px] bg-green-600 absolute right-0 top-[80px] 
        ${click ? 'translate-x-[0] scale-[1]' : 'translate-x-[500px] scale-0'} duration-[.3s]`
    }
    return (
        <div className={style.nav}>
            <h1 className={style.logo}>LOGO</h1>
            <div className={style.ul}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </div>
            <FaBars className={style.icon}
                onClick={() => setclick(click ? false : true)} />
            <div className={style.sidebar}></div>
        </div>
    )
}

export default Navbar
import React from 'react'
import { FaBars } from "react-icons/fa"

function Navbar() {
    const style = {
        nav: 'w-full h-[80px] bg-blue-400 flex justify-between items-center px-[5%] text-[30px]',
        logo: "",
        ul: 'flex list-none flex-[0.4] justify-around hidden lg:flex',
        icon: "text-[30px] lg:hidden"
    }
    return (
        <div className={style.nav}>
            <h1 className={style.logo}>LOGO</h1>
            <div className={style.ul}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </div>
            <FaBars className={style.icon} />
        </div>
    )
}

export default Navbar
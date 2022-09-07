import React from 'react'

function Footer() {
    const style = {
        footer: "w-full h-auto  bg-[#0009] items-center mt-[50px] text-white grid place-items-center md:grid-cols-2 lg:grid-cols-4",

        ul: " w-[20%] h-full flex flex-col pl-[2%] items-center pt-[2%] pb-[2%] lg:pt-[10%] lg:pb-[10%]",
        h1: " text-[40px] font-bold",
        li: "list-none text-[30px]  hover:pl-[4px] hover:underline "
    }

    return (
        <div className={style.footer}>
            <div className={style.ul}>
                <h1 className={style.h1}>Footer</h1>
                <li className={style.li}><a href="#">Home</a></li>
                <li className={style.li}><a href="#">Blog</a></li>
                <li className={style.li}><a href="#">Service</a></li>
                <li className={style.li}><a href="#">Contact</a></li>
            </div>
            <div className={style.ul}>
                <h1 className={style.h1}>Footer</h1>
                <li className={style.li}><a href="#">Home</a></li>
                <li className={style.li}><a href="#">Blog</a></li>
                <li className={style.li}><a href="#">Service</a></li>
                <li className={style.li}><a href="#">Contact</a></li>
            </div>
            <div className={style.ul}>
                <h1 className={style.h1}>Footer</h1>
                <li className={style.li}><a href="#">Home</a></li>
                <li className={style.li}><a href="#">Blog</a></li>
                <li className={style.li}><a href="#">Service</a></li>
                <li className={style.li}><a href="#">Contact</a></li>
            </div>
            <div className={style.ul}>
                <h1 className={style.h1}>Footer</h1>
                <li className={style.li}><a href="#">Home</a></li>
                <li className={style.li}><a href="#">Blog</a></li>
                <li className={style.li}><a href="#">Service</a></li>
                <li className={style.li}><a href="#">Contact</a></li>
            </div>
        </div>
    )
}

export default Footer
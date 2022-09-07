import React from 'react'
import { TiWaves } from "react-icons/ti"
import Image1 from "../images/4.jpg"
import Image2 from "../images/2.jpg"
import Image3 from "../images/3.jpg"

function Main() {
    const style = {
        main: 'w-3/5 m-auto  md:w-4/5 ',
        h1: "text-[30px] text-center sm:text-[50px]",
        icon: "block text-center m-auto text-[50px]",
        imgWrap: " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl: gap-[40px]",
        img: ""
    }
    return (
        <div className={style.main}>
            <h1 className={style.h1}>Interior</h1>
            <TiWaves className={style.icon} />
            <h1 className={style.h1}>Cafe on the beach</h1>
            <div className={style.imgWrap}>
                <img className={style.img} src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
            </div>


        </div>
    )
}

export default Main
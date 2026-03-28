"use client"
import React, { useEffect, useState } from 'react'
import "./styles/loader.css"
const Loader = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 500);
    },[])
    return (
        <div className={loaded ? "loading" + " " + "loaded" : "loading"}>
            <div className='push-pop loader'>
                <div></div>
                <div></div>
            </div>
            {/* <div className='push-out loader'>
                <div></div>
                <div></div>
            </div> */}
        </div>
    )
}

export default Loader
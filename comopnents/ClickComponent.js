"use client"
import React from 'react'
import TouchToStart from '@/public/icons/TouchToStart2.svg'
import TouchToRestart from '@/public/icons/TouchToRestart2.svg'
import Image from 'next/image'
const ClickComponent = ({ showOn = null, selected = null, clickHandler = () => { } }) => {
    return (
        <div className={`circle-icon fade ${selected == showOn ? "show" : ""}`} onClick={clickHandler}>
            <div id="circle">
                {selected == "first" && <TouchToStart />}
                {selected == "fifth" && <TouchToRestart />}
            </div>
            <Image
                src="/icons/Finger.svg"
                alt="Finger"
                width={70}
                height={70}
                className={`touch-to-restart-2  fade ${showOn == selected ? "show" : ""
                    }`}
            />
        </div>
    )
}

export default ClickComponent

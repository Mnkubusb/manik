"use client"
import Image from "next/image"
import { useLayoutEffect } from "react"

const Loading = () => {
    useLayoutEffect(() => {
        const prevBg = document.body.style.background
        const prevOverflow = document.body.style.overflow
        // set loading background
        document.body.style.background = "rgba(240, 240, 240, 0.54)"
        document.body.style.overflow = "hidden"

        return () => {
            // restore previous styles
            document.body.style.background = prevBg
            document.body.style.overflow = prevOverflow
        }
    }, [])

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <Image
                src="/icons/Apple_Logo.svg"
                alt="Apple Logo"
                className="size-20 animate-pulse"
                height={80}
                width={80}
            />
        </div>
    )
}

export default Loading

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Check, Moon, Sun } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { AnimatedThemeToggler } from "./animated-theme-toggler"
import { flushSync } from "react-dom"
import { PopoverAnchor } from "@radix-ui/react-popover"

export default function ThemePopover({ img }: { img: string }) {
    const [isDark, setIsDark] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const updateTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"))
        }

        updateTheme()

        const observer = new MutationObserver(updateTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        })

        return () => observer.disconnect()
    }, [])

    const toggleTheme = useCallback(async () => {
        if (!buttonRef.current) return

        await document.startViewTransition(() => {
            flushSync(() => {
                const newTheme = !isDark
                setIsDark(newTheme)
                document.documentElement.classList.toggle("dark")
                localStorage.setItem("theme", newTheme ? "dark" : "light")
            })
        }).ready

        const { top, left, width, height } =
            buttonRef.current.getBoundingClientRect()
        const x = left + width / 2
        const y = top + height / 2
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        )

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 400,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            }
        )
    }, [isDark])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <AnimatedThemeToggler img={img} />
            </PopoverTrigger>

            <PopoverContent
                align="center"
                // sideOffset={10}
                className="
          w-44 p-1 rounded-[10px]
          z
          bg-[#F0F0F08A] text-[#262626] 
          border 
        "
                style={{
                    backdropFilter: "blur(80px)",
                    WebkitBackdropFilter: "blur(80px)",
                    boxShadow: `
      0px 0px 3px 0px #FFFFFF1A inset,
      0px 0px 3px 0px #0000008C,
      0px 8px 40px 0px #00000040
    `,
                }}
            >
                <ThemeItem
                    active={!isDark}
                    label="Light Mode"
                    onClick={toggleTheme}
                    buttonRef={buttonRef}
                />

                <ThemeItem
                    active={isDark}
                    label="Dark Mode"
                    onClick={toggleTheme}
                    buttonRef={buttonRef}
                />
            </PopoverContent>
        </Popover>
    )
}

function ThemeItem({
    label,
    active,
    onClick,
    buttonRef
}: {
    label: string
    active?: boolean
    onClick: () => void
    buttonRef: any
}) {
    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm",
                "transition",
                active && "bg-primary text-primary-foreground"
            )}
        >
            <div className="flex items-center gap-2">
                {/* {icon} */}
                {label}
            </div>
            {active && <Check className="size-4" />}
        </button>
    )
}

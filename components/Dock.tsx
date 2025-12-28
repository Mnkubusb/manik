"use client"
import { dockApps } from "@/constants";
import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { Tooltip } from 'react-tooltip'

export const Dock = () => {
    const dockRef = useRef<HTMLDivElement>(null);
    const { openWindow, closeWindow, windows } = useWindowStore();
    useGSAP(() => {
        const dockRefCurrent = dockRef.current;
        if (!dockRefCurrent) return;

        const icons = dockRefCurrent.querySelectorAll('.dock-icon');

        const animateIcons = (mouseX: number) => {
            const { left } = dockRefCurrent.getBoundingClientRect();
            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const iconCenterX = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - iconCenterX);
                const intensity = Math.exp(-(distance ** 2.8) / 20000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out"
                });
            })
        }

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX - dockRefCurrent.getBoundingClientRect().left;
            animateIcons(mouseX);
        }
        const handleMouseLeave = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out"
                });
            })
        }
        dockRefCurrent.addEventListener("mousemove", handleMouseMove);
        dockRefCurrent.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            dockRefCurrent.removeEventListener("mousemove", handleMouseMove);
            dockRefCurrent.removeEventListener("mouseleave", handleMouseLeave);
        }
    }, [])

    const toggleApp = (app: { id: string, canOpen: boolean, name: string, icon: string }) => {
        if (!app.canOpen) return;
        const window = windows[app.id]
        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }
    }

    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container">
                {dockApps.map((app) => (
                    <div key={app.id ?? app.name} className="relative flex justify-center">
                        <button
                            type="button"
                            className="dock-icon"
                            aria-label="name"
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={app.name}
                            data-tooltip-delay-show={150}
                            disabled={!app.canOpen}
                            onClick={() => toggleApp(app)}
                        >
                            <Image
                                src={`/images/${app.icon}`}
                                width={48}
                                height={48}
                                alt={app.name}
                                loading="lazy"
                                className={app.canOpen ? "" : "opacity-60"}
                            />
                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    )
}


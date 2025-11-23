/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ReactElement, useLayoutEffect, useRef } from "react"
gsap.registerPlugin(Draggable);

interface WindowInfo {
    isOpen: boolean;
    zIndex: number;
    [key: string]: any;
}

interface WindowsMap {
    [key: string]: WindowInfo;
}

interface WindowStore {
    focusWindow: (key: string) => void;
    windows: WindowsMap;
}

interface WrappedProps {
    [key: string]: any;
}

interface ComponentType {
    (props?: any): ReactElement | null;
    displayName?: string;
    name?: string;
}

const WindowWrapper = (Component: ComponentType, windowKey: string): ComponentType => {

    const Wrapped: ComponentType = (props?: WrappedProps) => {
        const { focusWindow, windows } = useWindowStore() as WindowStore;
        const { isOpen, zIndex } = windows[windowKey] as WindowInfo;
        const ref = useRef<HTMLElement | null>(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block"
            gsap.fromTo(el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: 'power3.out' })

        }, [isOpen])

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const [instance] = Draggable.create(el,
                {
                    onPress: () => focusWindow(windowKey)
                })
            return () => instance.kill();
        },[])

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? "block" : "none"
        }, [isOpen])

        return <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
            <Component {...props} />
        </section>
    };

    Wrapped.displayName = `WindowWrapper(${Component?.displayName || Component.name || "Component"})`

    return Wrapped;
}

export default WindowWrapper

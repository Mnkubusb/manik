"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ReactEventHandler, useRef } from "react"

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 900, default: 100 },
  title: {
    min: 400,
    max: 900,
    default: 400
  }
}


const renderTexts = ({ text, className, baseWeight = 100 }: { text: string, className?: string, baseWeight?: number }) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `'wght' ${baseWeight}`,
        fontStyle: className?.includes('italic') ? "italic" : "normal",
        fontWeight: baseWeight
      }}
    >

      {char === " " ? "\u00A0" : char}
    </span>
  ))
}

const setupTextHover = (container: HTMLElement | null, type: string) => {

  if (!container) return () => { };

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type as keyof typeof FONT_WEIGHTS];


  const animateLetters = (letter: HTMLSpanElement, weight: number, duration = 0.2) => {
    const match = letter.style.fontVariationSettings?.match(/\d+/);
    const current = parseFloat(match?.[0] ?? String(base));
    const proxy = { w: current };

    return gsap.to(proxy, {
      w: weight,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        letter.style.fontVariationSettings = `'wght' ${proxy.w} 'opsz' 9`;
        letter.style.fontWeight = `${proxy.w}`;
      }
    });
  };


  const handleMouseMove = (e: any) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: letterLeft, width: letterWidth } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (letterLeft - left + letterWidth / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);
      animateLetters(letter as HTMLSpanElement, min + (max - min) * intensity);
    })
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetters(letter as HTMLSpanElement, base, 0.5);
    })
  };
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  }
}

const Welcome = () => {

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const titleCleanUp = setupTextHover(titleRef.current, "title");
    const subtitleCleanUp = setupTextHover(subtitleRef.current, "subtitle");
    return () => {
      if (titleCleanUp) titleCleanUp();
      if (subtitleCleanUp) subtitleCleanUp();
    }
  }, [])

  return (
    <section id="welcome">
      <p ref={subtitleRef} className="cursor-pointer ">
        {renderTexts({ text: "Hey , I'm Manik Welcome to my", className: "text-3xl font-georama", baseWeight: 100 })}
      </p>
      <h1 ref={titleRef} className="mt-7 cursor-pointer">
        {renderTexts({ text: "portfolio", className: "text-9xl italic font-georama", baseWeight: 400 })}
      </h1>
      <div className="small-screen">
        <p>
          This portfolio is designed for desktop/tablet screens only.
        </p>
      </div>
    </section>
  )
}

export default Welcome

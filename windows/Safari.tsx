"use client"
/* eslint-disable @next/next/no-img-element */

import { WindowControls } from "@/components"
import { liveSites } from "@/constants"
import WindowWrapper from "@/hoc/WindowWrapper"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react"


const Safari = () => {
  const [active, setActive] = useState(0);
  const site = liveSites[active];
  const go = (step: number) => setActive((i) => (i + step + liveSites.length) % liveSites.length);

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className='ml-10 icon' />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon cursor-pointer" onClick={() => go(-1)} />
          <ChevronRight className="icon cursor-pointer" onClick={() => go(1)} />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input type="text" readOnly value={site.url.replace("https://", "")} className="flex-1" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="tabs">
        {liveSites.map(({ name }, i) => (
          <button key={name} className={i === active ? "active" : ""} onClick={() => setActive(i)}>
            {name}
          </button>
        ))}
      </div>
      <div className="site">
        <a href={site.url} target="_blank" rel="noopener noreferrer" className="block !w-full">
          <img src={site.image} alt={site.name} />
        </a>
        <h3>{site.name}</h3>
        <p>{site.pitch}</p>
        <a href={site.url} target="_blank" rel="noopener noreferrer">
          Visit site
          <MoveRight className="icon-hover" />
        </a>
      </div>
    </>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari')

export default SafariWindow;
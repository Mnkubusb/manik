"use client"
import { Dock, Welcome, Navbar } from "@/components";
import { Finder, Resume, Safari, Terminal, TextFile, ImageViewer } from "@/windows";
import { useEffect, useState } from "react";

export default function Home() {

  const [mounted , setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[])

  if(!mounted) return null;

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Finder />
      <Resume />
      <TextFile />
      <ImageViewer />
    </main>
  );
}

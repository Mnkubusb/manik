"use client"
import { Dock, Welcome, Navbar } from "@/components";
import { Finder, Resume, Safari, Terminal, TextFile, ImageViewer } from "@/windows";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  if (loading) return <Loading />

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

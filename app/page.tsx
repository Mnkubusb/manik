"use client"
import { Dock, Navbar , Welcome} from "@/components";
import { Finder, Resume, Safari, Terminal } from "@/windows";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Finder />
      <Resume />
    </main>
  );
}

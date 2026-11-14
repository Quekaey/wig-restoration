"use client";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useState } from "react";

export function CompareSlider({ src, title, alt }: { src:string; title:string; alt:string }) {
 const [position,setPosition]=useState(50);
 return <figure>
  <div className="relative aspect-[16/10] overflow-hidden bg-[#e8d6c5]">
   <Image src={src} alt={`${alt}, after restoration`} fill className="object-cover object-right" sizes="(max-width: 768px) 100vw, 850px" />
   <div className="absolute inset-y-0 left-0 overflow-hidden" style={{width:`${position}%`}}>
    <div className="relative h-full" style={{width:`${10000/position}%`}}><Image src={src} alt={`${alt}, before restoration`} fill className="object-cover object-left" sizes="(max-width: 768px) 100vw, 850px" /></div>
   </div>
   <div className="pointer-events-none absolute inset-y-0 w-px bg-white" style={{left:`${position}%`}}><span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#651e2d] shadow-xl"><MoveHorizontal size={19}/></span></div>
   <span className="absolute left-4 top-4 rounded-full bg-[#2a1715]/80 px-3 py-1 text-xs uppercase tracking-widest text-white">Before</span>
   <span className="absolute right-4 top-4 rounded-full bg-[#fff8ef]/90 px-3 py-1 text-xs uppercase tracking-widest text-[#351821]">After</span>
   <input className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" type="range" min="10" max="90" value={position} onChange={e=>setPosition(Number(e.target.value))} aria-label={`Compare before and after for ${title}`} />
  </div>
  <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2"><span className="serif text-2xl">{title}</span><span className="text-xs uppercase tracking-[.16em] text-[#7c5b53]">AI-generated demonstration</span></figcaption>
 </figure>;
}

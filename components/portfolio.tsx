"use client";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const items=[
 {title:"Auburn, Reimagined",kind:"Lace refinement · Restyling",src:"/images/auburn-finish.png",copy:"A fictional editorial study in revived movement, a softened hairline, and a luminous copper finish."},
 {title:"The Silk Reset",kind:"Detangling · Smoothing",src:"/images/silk-restoration.png",copy:"A demonstration transformation showing how texture, ends, and lace presentation can shape the final impression."},
 {title:"Curl Memory",kind:"Deep conditioning · Curl definition",src:"/images/curl-revival.png",copy:"A fictional same-wig comparison focused on curl definition, considered shaping, and a more polished finish."}
];
export function Portfolio(){const [selected,setSelected]=useState<(typeof items)[0]|null>(null);return <>
 <div className="grid gap-4 md:grid-cols-12">{items.map((item,i)=><button key={item.title} onClick={()=>setSelected(item)} className={`focus-ring group relative overflow-hidden text-left ${i===0?"md:col-span-7 md:row-span-2 aspect-[4/5]":"md:col-span-5 aspect-[4/3]"}`}>
  <Image src={item.src} alt={`${item.title}, fictional restoration editorial`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 60vw" />
  <span className="absolute inset-0 bg-gradient-to-t from-[#21100e]/80 via-transparent to-transparent"/><span className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white"><span><span className="mb-2 block text-xs uppercase tracking-widest opacity-75">{item.kind}</span><span className="serif text-3xl">{item.title}</span></span><span className="grid h-11 w-11 place-items-center rounded-full border border-white/50"><ArrowUpRight/></span></span>
 </button>)}</div>
 {selected&&<div className="fixed inset-0 z-[100] grid place-items-center bg-[#160c0b]/85 p-4" role="dialog" aria-modal="true" aria-label={selected.title}><div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-auto bg-[#f8efe5] md:grid-cols-2"><button onClick={()=>setSelected(null)} className="focus-ring absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white" aria-label="Close detail"><X/></button><div className="relative min-h-80"><Image src={selected.src} alt="" fill className="object-cover"/></div><div className="p-8 md:p-12"><span className="eyebrow text-[#8c4c4e]">Demonstration transformation</span><h3 className="serif mt-5 text-5xl">{selected.title}</h3><p className="mt-5 leading-8 text-[#6b4f48]">{selected.copy}</p><p className="mt-8 border-t border-[#d7c1af] pt-6 text-sm text-[#806960]">This concept image is AI-generated and illustrative. A real specialist assessment would determine what is appropriate for an individual wig.</p></div></div></div>}
 </>}

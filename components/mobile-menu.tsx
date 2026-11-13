"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileMenu({ links, dark=false }: { links:{label:string;href:string}[]; dark?:boolean }) {
 const [open,setOpen]=useState(false);
 return <div className="md:hidden">
  <button className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-current/20" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
  {open && <div className={`absolute left-4 right-4 top-[calc(100%+8px)] rounded-2xl p-3 shadow-2xl ${dark?"bg-[#2c1135] text-white":"bg-[#fffaf5] text-[#351821]"}`}>
   {links.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="focus-ring block rounded-xl px-4 py-3 hover:bg-current/10">{l.label}</a>)}
  </div>}
 </div>;
}

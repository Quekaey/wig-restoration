import Link from "next/link";

export function Logo({ href="/", light=false, compact=false }: { href?:string; light?:boolean; compact?:boolean }) {
  return <Link href={href} className={`focus-ring inline-flex items-center gap-3 ${light?"text-white":"text-current"}`} aria-label="Revivé Hair Studio home">
    <span className="grid h-10 w-10 place-items-center rounded-full border border-current/40 serif text-xl italic">R</span>
    {!compact && <span className="leading-none"><span className="serif block text-[1.45rem] tracking-[.08em]">REVIVÉ</span><span className="block text-[.54rem] tracking-[.28em] opacity-70">HAIR STUDIO</span></span>}
  </Link>;
}

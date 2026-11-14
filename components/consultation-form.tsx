"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema=z.object({name:z.string().min(2,"Please enter your name"),email:z.email("Enter a valid email"),phone:z.string().min(8,"Enter a valid phone number"),city:z.enum(["Lagos","Abuja"]),concern:z.string().min(12,"Tell us a little more about your wig")});
type Data=z.infer<typeof schema>;
export function ConsultationForm(){
 const [sent,setSent]=useState(false); const [loading,setLoading]=useState(false);
 const {register,handleSubmit,formState:{errors}}=useForm<Data>({resolver:zodResolver(schema)});
 const submit=()=>{setLoading(true);setTimeout(()=>{setLoading(false);setSent(true)},700)};
 if(sent)return <div className="rounded-[2rem] border border-[#d7b8a2] bg-white/70 p-8 text-center"><CheckCircle2 className="mx-auto mb-4 text-[#7c2638]" size={40}/><h3 className="serif text-3xl">Consultation request previewed.</h3><p className="mt-2 text-[#6f5149]">This is a fictional demo. No details were sent or booking created.</p><button onClick={()=>setSent(false)} className="focus-ring mt-5 border-b border-current pb-1 text-sm uppercase tracking-widest">Start again</button></div>;
 return <form onSubmit={handleSubmit(submit)} className="grid gap-4 rounded-[2rem] bg-[#fffaf4] p-6 shadow-[0_30px_80px_rgba(65,30,29,.12)] md:grid-cols-2 md:p-9" noValidate>
  <Field label="Full name" error={errors.name?.message}><input {...register("name")} placeholder="Ada Okafor" /></Field>
  <Field label="Email address" error={errors.email?.message}><input {...register("email")} type="email" placeholder="ada@example.com" /></Field>
  <Field label="Phone number" error={errors.phone?.message}><input {...register("phone")} type="tel" placeholder="0800 000 0000" /></Field>
  <Field label="Preferred city" error={errors.city?.message}><select {...register("city")} defaultValue=""><option value="" disabled>Select a demo location</option><option>Lagos</option><option>Abuja</option></select></Field>
  <Field label="What would you like restored?" error={errors.concern?.message} wide><textarea {...register("concern")} rows={4} placeholder="Tell us about the wig, its condition, and the finish you want." /></Field>
  <div className="md:col-span-2 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between"><p className="max-w-md text-xs leading-relaxed text-[#80665f]">Demonstration form only. Availability and consultations shown on this concept are fictional.</p><button disabled={loading} className="focus-ring inline-flex min-w-48 items-center justify-center gap-2 rounded-full bg-[#681f31] px-6 py-3 text-white hover:bg-[#4e1423] disabled:opacity-60">{loading?<><LoaderCircle className="animate-spin" size={18}/>Preparing…</>:"Request consultation"}</button></div>
 </form>;
}
function Field({label,error,children,wide=false}:{label:string;error?:string;children:React.ReactElement;wide?:boolean}){return <label className={`block ${wide?"md:col-span-2":""}`}><span className="mb-2 block text-sm font-medium">{label}</span><span className="[&_input]:w-full [&_input]:rounded-xl [&_input]:border [&_input]:border-[#d9c5b8] [&_input]:bg-white [&_input]:px-4 [&_input]:py-3 [&_select]:w-full [&_select]:rounded-xl [&_select]:border [&_select]:border-[#d9c5b8] [&_select]:bg-white [&_select]:px-4 [&_select]:py-3 [&_textarea]:w-full [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:border-[#d9c5b8] [&_textarea]:bg-white [&_textarea]:px-4 [&_textarea]:py-3">{children}</span>{error&&<span className="mt-1 block text-sm text-[#9b1634]">{error}</span>}</label>}

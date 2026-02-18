import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Highlighter } from "@/components/ui/highlighter";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";

export default function Page() {
   return (<>
      <main className="">
         {/* Hero */}
         <section className="grid grid-cols-2 min-h-svh">
            {/* Copy */}
            <div className="bg-neutral-950 flex flex-col px-[10%] justify-center">
               {/* Open for work */}
               <div className="bg-black text-xs text-white w-fit flex items-center rounded-full px-4 py-2 mb-12 gap-2">
                  <span className="rounded-full animate-pulse size-2 bg-lime-200" />
                  <span>Open for new projects</span>
               </div>
               {/* Headline */}
               <div className="text-5xl/15 font-light text-white mb-12">
                  Crafted experiences, designed to{" "}
                  <Highlighter action="underline" color="oklch(89.2% 0.058 10.001)">
                     be beautiful
                  </Highlighter>{" "}
                  and built to last.
               </div>
               {/* Subheadline */}
               <div className="text-neutral-600 font-medium text-lg mb-12">
                  Hi 👋, I'm Aditya Shrestha, a software engineer building with modern web technologies, and aiming to push the boundaries of what's possible.
               </div>
               {/* Buttons */}
               <div className="flex items-center gap-4">
                  <div className="bg-white border border-white cursor-pointer duration-300 group text-neutral-950 w-fit rounded-full flex items-center gap-2 text-sm font-medium px-8 py-3">
                     <span>See my work</span>
                     <ArrowRight size={20} className="group-hover:rotate-45 mt-px duration-300" />
                  </div>
                  <div className="bg-transparent border border-white cursor-pointer duration-300 group text-white w-fit rounded-full flex items-center gap-2 text-sm font-medium px-8 py-3">
                     <span>Read my CV</span>
                     <ArrowRight size={20} className="group-hover:-rotate-45 mt-px duration-300 text-6xl" />
                  </div>
                  <HoverBorderGradient
                     containerClassName="rounded-full"
                     as="button"
                     className="bg-neutral-950 px-8.5 py-3.5 text-white flex items-center space-x-2 cursor-pointer font-base! font-medium text-sm"
                  >
                     <span>Hire me</span>
                  </HoverBorderGradient>
               </div>
            </div>
            {/* Decoration */}
            <div className="relative bg-linear-to-tr from-neutral-950 via-neutral-900 to-neutral-800 from-45% via-75% to-100%">
               <BackgroundRippleEffect />
            </div>
         </section>
         {/* Bento */}
         <section className="py-12 sm:py-24 lg:py-32 bg-black">
            <div className="wrapper">
               <div className="grid grid-cols-12 gap-4">
                  <div className="p-8 col-span-3 bg-neutral-900 rounded-lg">
                     <div className="text-transparent bg-clip-text bg-linear-to-t text-2xl font-medium from-rose-400 to-60% to-pink-400 mb-4">
                        This portfolio is currently under construction!
                     </div>
                     <div className="text-base text-neutral-600">
                        If you're looking to start a new web project, get in touch to discuss your requirements with me in more detail.
                     </div>
                  </div>
                  <div className="p-8 col-span-6 bg-neutral-900 rounded-lg"></div>
                  <div className="p-8 col-span-3 bg-neutral-900 rounded-lg"></div>
               </div>
            </div>
         </section>
      </main>
   </>)
}
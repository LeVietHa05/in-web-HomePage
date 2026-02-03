"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import data from "@/data/chonkhoahoc.json"
import { SVNHelveticaNeueHeavy } from "./font"

const AUTOPLAY = 5000

export default function CoursesSlider() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const total = data.slides.length
  const slide = data.slides[index]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % total)
        setFade(true)
      }, 300)
    }, AUTOPLAY)

    return () => clearInterval(interval)
  }, [total])

  return (
    <div className="bg-[#ECFEB0] rounded-[32px] md:rounded-[40px] py-8 lg:py-16 md:py-28 -mt-20 overflow-hidden">
      {/* TITLE */}
      <h2 className={`${SVNHelveticaNeueHeavy.className} whitespace-pre-line text-[#3253BC] text-center text-xl lg:text-[32px] md:text-[60px] font-black mb-4 md:mb-16`}>
        {data.sectionTitle}
      </h2>


      {/* SLIDE */}
      <div className="flex justify-center px-2 lg:px-4">
        <div className={`bg-[#FFF175] w-full max-w-[1100px] min-h-[520px] md:h-[460px] rounded-[32px] md:rounded-[40px] p-3 lg:p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
          
          {/* IMAGE */}
          <div className="w-full md:w-3/5 h-[220px] sm:h-[280px] md:h-[360px] relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="rounded-[24px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex justify-between flex-col p-4 lg:p-[30px] lg:h-full w-full md:w-2/5 text-center md:text-right">
            <h3 className={`${SVNHelveticaNeueHeavy.className} text-[#3253BC] text-[22px] md:text-[28px] font-black mb-4`}>
              {slide.title}
            </h3>

            <div className="space-y-3 mb-6">
              {slide.desc.map((t: string, i: number) => (
                <p key={i} className="text-[#3253BC] text-[16px] md:text-[20px]">
                  {t}
                </p>
              ))}
            </div>

            <Link href={`/khoahoc/${slide.id}`}>
              <button className="bg-[#004DEE] text-[#FEFFB7] px-6 py-3 rounded-full text-[16px] md:text-[18px] font-bold hover:scale-105 transition">
                {slide.button}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-8 md:mt-10 pb-8">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-[#3253BC]" : "bg-[#B8C6FF]"}`}
          />
        ))}
      </div>
    </div>
  )
}

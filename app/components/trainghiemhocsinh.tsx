"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { SVNHelveticaNeueHeavy } from "./font"

type Props = {
  course: "college-prep" | "ielts" | "khoa-hoc"
}

type Data = {
  sectionTitle: string
  autoPlay: number
  slides: {
    name: string
    class: string
    image?: string
    content: { text: string }[]
  }[]
}

export default function TestimonialsComposite({ course }: Props) {
  const [data, setData] = useState<Data | null>(null)
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    import(`@/data/trainghiemhocsinh/${course}.json`)
      .then((res) => {
        setData(res.default)
        setIndex(0)
      })
      .catch(() => setData(null))
  }, [course])

  useEffect(() => {
    if (!data) return
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % data.slides.length)
        setFade(true)
      }, 300)
    }, data.autoPlay)
    return () => clearInterval(interval)
  }, [data])

  if (!data) return null

  const slide = data.slides[index]

  return (
    <div className="bg-[#EAFDFF] rounded-[40px] overflow-hidden -mt-24 mb-5 min-h-[1150px] py-20 md:py-32 flex flex-col justify-start">
      <h2 className={`${SVNHelveticaNeueHeavy.className} text-[#FFCB1F] text-[40px] md:text-[72px] font-black text-center mb-10 md:mb-16`}>
        {data.sectionTitle}
      </h2>

      <div className="flex justify-center px-4 md:px-0">
        <div className="relative w-full md:w-[80%] bg-[#F4FFCF] rounded-[40px] md:rounded-[60px] px-6 md:px-[80px] pt-10 md:pt-[70px] pb-24 md:pb-[180px] md:h-[700px] flex flex-col md:flex-row gap-8 md:gap-12">
          {slide.image && (
            <Image
              src={slide.image}
              alt={slide.name}
              height={511}
              width={0}
              sizes="100vw"
              className={`w-full md:w-auto h-auto md:h-[511px] rounded-xl transition-opacity duration-500 mt-[20px] ${fade ? "opacity-100" : "opacity-0"}`}
            />
          )}

          <div className={`flex-1 transition-all duration-500 ease-in-out ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <h3 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[32px] md:text-[50px] font-black`}>
              {slide.name}
            </h3>

            <p className="mt-2 text-[#001E7F] text-[16px] md:text-[18px] font-bold">
              {slide.class}
            </p>

            <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              {slide.content.map((p, i) => (
                <p key={i} className="text-[#001E7F] text-[15px] md:text-[18px] text-justify">
                  {p.text}
                </p>
              ))}
            </div>
          </div>

          <span className={`${SVNHelveticaNeueHeavy.className} hidden md:block absolute right-[20px] bottom-[-250px] text-[#004DEE] text-[442px] font-black leading-none pointer-events-none select-none`}>
            ”
          </span>
        </div>
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { postsMeta } from "@/data/postsMeta"
import { SVNHelveticaNeueHeavy } from "./font"

const PER_PAGE = 6
const AUTOPLAY = 5000

export default function AllPosts() {
  const [pageAll, setPageAll] = useState(0)

  const totalPages = Math.ceil(postsMeta.length / PER_PAGE)

  useEffect(() => {
    const timer = setInterval(() => {
      setPageAll((prev) => (prev + 1) % totalPages)
    }, AUTOPLAY)
    return () => clearInterval(timer)
  }, [totalPages])

  const currentAllPosts = postsMeta.slice(pageAll * PER_PAGE, pageAll * PER_PAGE + PER_PAGE)

  return (
    <div className="relative -mt-16 md:-mt-40 z-20">
      <div className="mx-auto w-full max-w-[1440px] bg-[#FDFFD6] rounded-[30px] md:rounded-[60px]">
        <div className="px-4 sm:px-8 md:px-[60px] lg:px-[120px]">

          {/* TITLE */}
          <h2 className={`${SVNHelveticaNeueHeavy.className} text-center pt-20 md:pt-[140px] mt-0 md:mt-16 mb-12 md:mb-16 text-[#004DEE] font-black`} style={{ fontSize: "clamp(26px, 5vw, 42.766px)" }}>
            TẤT CẢ BÀI VIẾT
          </h2>

          {/* GRID POSTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-12 gap-y-10 lg:gap-y-14">
            {currentAllPosts.map((item) => (
              <Link key={item.id} href={`/tintuc/${item.id}`} className="group">
                <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] rounded-[16px] md:rounded-[18px] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>

                <h3 className={`${SVNHelveticaNeueHeavy.className} mt-4 text-[#004DEE] text-[16px] md:text-[18px] leading-[1.3] font-black line-clamp-2 min-h-[42px] md:min-h-[48px]`}>
                  {item.title}
                </h3>

                <p className={`${SVNHelveticaNeueHeavy.className} mt-1 text-[#004DEE] text-[12px] leading-tight font-black`}>
                  {item.author}
                </p>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 md:mt-16 pb-16 md:pb-20">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPageAll(i)}
                className={`w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full font-black transition ${i === pageAll ? "border-2 border-[#004DEE] text-[#004DEE]" : "bg-[#004DEE] text-[#FDFFD6] hover:opacity-80"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

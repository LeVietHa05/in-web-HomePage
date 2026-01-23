"use client"

import Image from "next/image"
import Link from "next/link"
import { postsMeta } from "@/data/postsMeta"
import { SVNHelveticaNeueHeavy} from "./font";

export default function BaiVietLienQuan() {
  const relatedPosts = postsMeta.slice(0, 3)

  return (
    <section className="bg-[#FDFFD6] rounded-[30px] md:rounded-[60px] px-4 sm:px-8 md:px-[60px] lg:px-[120px] py-16 md:py-20">
      <h2 className={`${SVNHelveticaNeueHeavy.className} text-center text-[#004DEE] text-[24px] md:text-[36px] font-black mb-10`}>
        BÀI VIẾT LIÊN QUAN
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {relatedPosts.map((item) => (
          <Link key={item.id} href={`/tintuc/${item.id}`} className="group">
            <div className="relative h-[180px] md:h-[220px] rounded-[16px] overflow-hidden bg-[#004DEE]">
              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>

            <h3 className={`${SVNHelveticaNeueHeavy.className} mt-4 text-[#004DEE] text-[16px] md:text-[18px] font-black line-clamp-2`}>
              {item.title}
            </h3>

            <p className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[12px] mt-1 font-black`}>
              {item.author}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

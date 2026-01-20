

"use client"

import { useState } from "react"
import Image from "next/image"
import datahs from '../../data/camnhanhs.json'
import { SVNHelveticaNeueHeavy } from "../components/font"
const ITEMS_PER_PAGE = 1

export default function Camnhanhs() {
    const data = datahs
    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

    const goToPage = (pageIndex: number) => {
        setCurrentPage(pageIndex)
    }
    return (
        <div className="bg-[#EAFDFF] relative z-1 min-h-[550px] -mt-24 mb-16 pt-20 pb-40 rounded-[60px] text-[#004DEE] overflow-hidden">
            <div className={`${SVNHelveticaNeueHeavy.className} text-[60px] text-center text-[#FFCB1F]`}>
                CẢM NHẬN HỌC SINH
            </div>
            <div className='flex w-fit' >
                {data.map((each, i) => {
                    return (
                        <div key={i} className=' flex w-[1280px] mx-auto transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentPage * 100}%)` }} >
                            <div className='flex-1 flex items-center justify-center'>
                                <Image src={each.studentImgLink} alt={each.name} width={310} height={310}></Image>
                            </div>
                            <div className='flex-1'>
                                <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[50px] font-black uppercase `}>{each.name}</div>
                                <div className={`${SVNHelveticaNeueHeavy.className} text-[#001E7F] text-[24px] font-black uppercase `}>{each.hocbong}</div>
                                <div className={` text-[#001E7F] text-[20px]   `}>{each.school}</div>
                                <div className={`pt-4 text-[#001E7F] text-[18px] text-justify  `}>{each.text}</div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentPage ? 'bg-[#001E7F]' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}


"use client"

import { useState } from "react"
import Image from 'next/image'
import datahs from '../../data/datahs.json'
import { SVNHelveticaNeueHeavy } from './font'

const data = datahs.filter(each => each.speech)

const ITEMS_PER_PAGE = 1

export default function TrainghiemHs() {
    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

    const goToPage = (pageIndex: number) => {
        setCurrentPage(pageIndex)
    }

    return (
        <div className="bg-[#EAFDFF] min-h-[800px] w-full rounded-[60px]  relative z-2  overflow-x-hidden overflow-y-hidden -mt-24 pt-16">
            <div className={`${SVNHelveticaNeueHeavy.className} text-[#FFCB1F] text-[72px] font-black text-center`}>
                TRẢI NGHIỆM HỌC SINH
            </div>
            <div className='flex w-fit ' >

                {data.map((each, i) => {
                    return (
                        <div key={i} className=' flex w-[1280px] mx-auto transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentPage * 100}%)` }} >
                            <div className='flex-1 flex items-center justify-center'>
                                <Image src={each.imglink2 ? each.imglink2 : each.imglink} alt={each.name} width={310} height={310}></Image>
                            </div>
                            <div className='flex-1'>
                                <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[50px] font-black uppercase `}>{each.name}</div>
                                <div className={`${SVNHelveticaNeueHeavy.className} text-[#001E7F] text-[24px] font-black uppercase `}>{each.hocbong}</div>
                                <div className={` text-[#001E7F] text-[20px]   `}>{each.school}</div>
                                <div className={`pt-4 text-[#001E7F] text-[18px] text-justify  `}>{each.speech}</div>
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
        </div >
    )
}
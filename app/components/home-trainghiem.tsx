

"use client"

import { useState } from "react"
import Image from 'next/image'
import datahs from '../../data/datahs.json'
import { SVNHelveticaNeueHeavy } from './font'


const ITEMS_PER_PAGE = 1

export default function TrainghiemHs({ type }: { type: string }) {
    const data = datahs.filter(e => e.type == type).filter(each => each.speech)
    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

    const goToPage = (pageIndex: number) => {
        setCurrentPage(pageIndex)
    }

    return (
        <div className="bg-[#EAFDFF]  w-full rounded-[32px] lg:rounded-[42px] xl:rounded-[60px]  relative z-2  overflow-x-hidden overflow-y-hidden -mt-16 lg:-mt-24 pt-8 lg:pt-16 lg:pb-16">
            <div className={`${SVNHelveticaNeueHeavy.className} text-[#FFCB1F] text-2xl lg:text-[48px] xl:text-[72px] font-black text-center`}>
                TRẢI NGHIỆM HỌC SINH
            </div>
            <div className='flex w-fit ' >

                {data.map((each, i) => {
                    return (
                        <div key={i} className=' flex flex-col lg:flex-row w-screen xl:w-[1280px] mx-auto transition-transform duration-500 ease-in-out px-8 ' style={{ transform: `translateX(-${currentPage * 100}%)` }} >
                            <div className='flex-3 lg:flex-4 xl:flex-5 flex items-center justify-center'>
                                <Image className="lg:w-1/2 " src={each.imglink2 ? each.imglink2 : each.imglink} alt={each.name} width={310} height={310}></Image>
                            </div>
                            <div className='flex-5 lg:text-left text-center'>
                                <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-xl lg:text-[36px] xl:text-[50px] font-black uppercase `}>{each.name}</div>
                                <div className={`${SVNHelveticaNeueHeavy.className} text-[#001E7F] text-sm lg:text-lg xl:text-[24px] font-black uppercase `}>{each.hocbong}</div>
                                <div className={` text-[#001E7F] text-[8px] lg:text-base xl:text-[20px]   `}>{each.school}</div>
                                <div className={`pt-4 text-[#001E7F] text-[10px] lg:text-[15px] xl:text-[18px] text-justify  `}>{each.speech}</div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <div className="flex justify-center mt-8 space-x-2 mb-6 lg:mb-0">
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
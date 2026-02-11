'use client'

import { useState } from "react"
import { SVNHelveticaNeueHeavy } from "./font"
import Image from "next/image"
import data from '@/data/hdnk-thuvien.json'

interface Props {
    className?: string
}

const ITEMS_PER_PAGE = 1

export default function Thuvien({ className = '' }: Props) {
    const [curBigImg, setCurBigImg] = useState(0)

    const totalPages = Math.ceil(data.bigImgList.length / ITEMS_PER_PAGE)


    const goToPage = (pageIndex: number) => {
        setCurBigImg(pageIndex)
    }

    return (
        <div className={`${className} bg-[#0F58EA] -mt-16 mb-24  lg:min-h-[1000px] pt-4 lg:pt-12 rounded-[30px] lg:rounded-[60px]`}>
            <div className="max-w-6xl mx-auto  lg:mt-8">
                <div className={`${SVNHelveticaNeueHeavy.className} text-2xl lg:text-[60px] text-[#FFCB1F] text-center`}>
                    Thư Viện Hoạt Động Ngoại Khóa
                </div>
                <div className="overflow-hidden mt-4 lg:mt-12 ">
                    <div
                        className="flex items-center  transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${curBigImg * 100}%)` }}
                    >
                        {Array.from({ length: totalPages }, (_, pageIndex) => (
                            <div key={pageIndex} className="w-full flex-shrink-0">
                                <div className="flex justify-center">
                                    {data.bigImgList.slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE).map((item, index) => (
                                        <div key={index} className="flex flex-col items-center text-center ">
                                            <div className="relative w-screen lg:w-[1024px] min-h-64 lg:h-[560px] mb-4 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src={item}
                                                    alt={""}
                                                    fill
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        e.currentTarget.src = '/placeholder.png' // Fallback image
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination Dots */}
                    <div className="flex justify-center my-8 space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => goToPage(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === curBigImg ? 'bg-[#001E7F]' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 lg:gap-8 mx-2 lg:mx-0 pb-8 justify-center">
                    {
                        data.hdnkList.map((each, i) => {
                            return (
                                <div key={i} className="w-1/3 lg:w-[326px] text-[#FFFACC]">
                                    <div>
                                        <Image src={each.imgLink} alt="" width={326} height={204}></Image>
                                    </div>
                                    <div className=" max-h-24 overflow-y-scroll lg:max-h-max lg:overflow-y-auto">
                                        <div className={`${SVNHelveticaNeueHeavy.className} text-base lg:text-[28px]`}>
                                            {each.title}
                                        </div>
                                        <div className="text-justify text-[10px] lg:text-sm ">
                                            {each.content}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
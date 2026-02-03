
"use client"

import { useState } from "react"
import datahs from '../../data/personal-statement.json'
import { SVNHelveticaNeueHeavy } from "../components/font"
const ITEMS_PER_PAGE = 1

export default function Statement() {
    const data = datahs
    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

    const goToPage = (pageIndex: number) => {
        setCurrentPage(pageIndex)
    }
    return (
        <div className="bg-[#ADDDFF] relative z-0 min-h-[900px] lg:min-h-[1450px] -mt-24 pt-28 lg:pt-40 pb-40 rounded-[32px] rounded-[60px] text-[#004DEE] overflow-hidden">
            <div className='flex w-fit' >
                {data.map((each, i) => {
                    return (
                        <div key={i} className="px-2 lg:px-16 w-screen lg:w-[1440px]  mx-auto transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                            <div className="bg-[#F9FFE6] rounded-[24px] lg:rounded-[40px] min-h-[800px] lg:min-h-[1200px]">
                                <div className="text-center">
                                    <div className={`${SVNHelveticaNeueHeavy.className} text-[#3253BC] `}>
                                        <div className="text-xl lg:text-[40px]">
                                            {each.bigTitle}
                                        </div>
                                        <div className=" text-base lg:text-[32px] lg:mt-6">
                                            {each.name}
                                        </div>
                                    </div>
                                    <div className="text-[10px] lg:text-2xl text-[#004DEE] w-3/5 mx-auto mt-2">
                                        {each.hocbong}
                                    </div>
                                </div>
                                <div className="lg:w-3/4 px-4 border-t-4 mx-auto mt-8 pt-4 text-center text-[#004DEE] lg:text-2xl">
                                    <div className=" text-[#3253BC] font-bold">
                                        {each.title}
                                    </div>
                                    {
                                        each.isCut && <div className="text-">
                                            [Trích Lược]
                                        </div>
                                    }
                                    <div className="text-[12px] lg:text-2xl text-justify mt-4" dangerouslySetInnerHTML={{ __html: each.content }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
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
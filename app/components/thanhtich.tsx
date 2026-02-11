
"use client"

import { useState, useEffect } from "react"
import { helveticaNeueHeavy } from "./font"
import Image from "next/image"

interface ThanhtichProps {
    name: string,
    imageLink: string,
    otherText?: string
}


const ITEMS_PER_PAGE = 8

export default function Thanhtich({ data }: { data: ThanhtichProps[] }) {
    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        const mobile = window.matchMedia("(max-width: 640px)")
        const tablet = window.matchMedia("(max-width: 1024px)")

        const update = () => {
            if (mobile.matches) setItemsPerPage(4)
            else if (tablet.matches) setItemsPerPage(6)
            else setItemsPerPage(8)
            setCurrentPage(1)
        }

        update()
        mobile.addEventListener("change", update)
        tablet.addEventListener("change", update)

        return () => {
            mobile.removeEventListener("change", update)
            tablet.removeEventListener("change", update)
        }
    }, [])

    const totalPages = Math.ceil(data.length / itemsPerPage)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
        }, 5000) // Auto change every 5 seconds

        return () => clearInterval(timer)
    }, [totalPages])
    // const startIndex = currentPage * ITEMS_PER_PAGE
    // const endIndex = startIndex + ITEMS_PER_PAGE
    // const currentData = data.slice(startIndex, endIndex)

    const goToPage = (pageIndex: number) => {
        setCurrentPage(pageIndex)
    }

    return (
        <div className="bg-[#fefefe] min-h-96 w-full rounded-[32px] lg:rounded-[60px] py-4  lg:-mt-24 relative z-3">
            <div className={`${helveticaNeueHeavy.className} font-bold font-[Helvetica] text-2xl lg:text-[60px] text-center text-[#001E7F] mb-8`}>
                THÀNH TÍCH INCEPTION
            </div>

            {/* Slideshow Container */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                    {Array.from({ length: totalPages }, (_, pageIndex) => (
                        <div key={pageIndex} className="w-full flex-shrink-0">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 px-8">
                                {data.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <div className="relative w-32 h-32 mb-4 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src={item.imageLink}
                                                alt={item.name}
                                                fill
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/placeholder.png' // Fallback image
                                                }}
                                            />
                                        </div>
                                        <h3 className={`${helveticaNeueHeavy.className} text-base lg:text-xl font-medium text-[#407EFF] leading-tight`}>
                                            {item.name} <div className="text-[#f27240]">{item.otherText}</div>
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
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

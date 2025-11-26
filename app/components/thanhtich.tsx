
"use client"

import { useState, useEffect } from "react"
import { helveticaNeueHeavy } from "./font"
import Image from "next/image"

const data = [
    {
        name: "Massachusetts Institute of Technology",
        imageLink: "/mit.png"
    }, {
        name: "Stanford University",
        imageLink: "/stanford.png"
    }, {
        name: "Duke University",
        imageLink: "/duke.png"
    }, {
        name: "Cornell University",
        imageLink: "/cornell.png"
    }, {
        name: "Johns Hopkins University",
        imageLink: "/johnshopkins.png"
    }, {
        name: "Northwestern University",
        imageLink: "/northwestern.png"
    }, {
        name: "University of Chicago",
        imageLink: "/Chicago.png"
    }, {
        name: "Brown University",
        imageLink: "/Brown.png"
    }, {
        name: "University of Melbourne",
        imageLink: "/Melbourne.png"
    }, {
        name: "University of Sydney",
        imageLink: "/Sydney.png"
    }, {
        name: "University of Queensland",
        imageLink: "/Queensland.png"
    }, {
        name: "University of Adelaide",
        imageLink: "/Adelaide1.png"
    }, {
        name: "University of Toronto",
        imageLink: "/Toronto.png"
    }, {
        name: "University of Waterloo",
        imageLink: "/Waterloo.png"
    }, {
        name: "University of British Columbia",
        imageLink: "/Columbia.png"
    }, {
        name: "University of Adelaide",
        imageLink: "/Adelaide2.png"
    },
]

const ITEMS_PER_PAGE = 8

export default function Thanhtich() {
    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
        }, 5000) // Auto change every 5 seconds

        return () => clearInterval(timer)
    }, [totalPages])

    const startIndex = currentPage * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentData = data.slice(startIndex, endIndex)

    const goToPage = (pageIndex: number) => {
        setCurrentPage(pageIndex)
    }

    return (
        <div className="bg-[#fefefe] min-h-96 w-full rounded-[60px] py-4 -mt-24 relative z-3">
            <div className={`${helveticaNeueHeavy.className} font-bold font-[Helvetica] text-[60px] text-center text-[#001E7F] mb-8`}>
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
                            <div className="grid grid-cols-4 gap-6 px-8">
                                {data.slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE).map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <div className="relative w-32 h-32 mb-4 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                            <Image
                                                src={item.imageLink}
                                                alt={item.name}
                                                fill
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/placeholder.png' // Fallback image
                                                }}
                                            />
                                        </div>
                                        <h3 className={`${helveticaNeueHeavy.className} text-xl font-medium text-[#407EFF] leading-tight`}>
                                            {item.name}
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

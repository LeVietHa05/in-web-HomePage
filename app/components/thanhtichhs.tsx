
import { SVNHelveticaNeueHeavy } from "./font"
import CardHS from "./CardHS"

import datahs from '../../data/datahs.json'

const cards = datahs.filter(e => e.name)

export default function ThanhtichHS() {
    return (
        <div className="bg-[#001E7F] min-h-[1800px] w-full rounded-[60px]  relative z-2  overflow-x-hidden overflow-y-hidden -mt-24">
            <div className="absolute w-[1600px] h-40 border-6 border-[#FEFFB7] rotate-5 top-50 -left-20">

            </div>

            <div className={`${SVNHelveticaNeueHeavy.className} font-black absolute w-[1800px] h-40 bg-[#EAFDFF] -rotate-5 top-50 -left-20 text-center text-[60px] uppercase text-[#004DEE] flex items-center gap-4`}>
                <span className="outline-text"> ch HọC SINH </span>
                <span> THÀNH TÍCH HọC SINH</span>
                <span className="outline-text"> THÀNH TÍCH </span>
            </div>

            <div className="py-4 px-40">
                <div className="mt-120 mx-auto  grid grid-flow-col grid-rows-3 gap-30 items-center justify-center  w-fit mx-auto hover:pause-on-hover animate-[infinite-scroll_40s_linear_infinite]">
                    {cards.map((each, i) => {
                        return <CardHS key={i} name={each.name} imglink={each.imglink} school={each.school} hocbong={each.hocbong} />
                    })}
                    {cards.map((each, i) => {
                        return <CardHS key={`${i}-copy`} name={each.name} imglink={each.imglink} school={each.school} hocbong={each.hocbong} />
                    })}
                </div>
            </div>


        </div>
    )
}
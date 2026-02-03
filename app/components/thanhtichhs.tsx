
import { SVNHelveticaNeueHeavy } from "./font"
import CardHS from "./CardHS"

import datahs from '../../data/datahs.json'

const cards = datahs.filter(e => e.type == "hocsinh").filter(e => e.name)

export default function ThanhtichHS() {
    return (
        <div className="bg-[#001E7F] lg:min-h-[1800px] w-full rounded-[32px] lg:rounded-[60px]  relative z-2  overflow-x-hidden overflow-y-hidden -mt-24 pb-32">
            <div className="absolute w-full lg:w-[1600px] h-16 lg:h-40 border-y-6 border-[#FEFFB7] skew-y-5 top-50 ">

            </div>

            <div className={`${SVNHelveticaNeueHeavy.className} font-black absolute lg:w-[1800px] w-full h-16 lg:h-40 bg-[#EAFDFF] -skew-y-5 top-50  text-center text-3xl lg:text-[60px] uppercase text-[#004DEE] flex items-center justify-center lg:justify-start gap-4`}>
                <span className="outline-text hidden lg:block"> HọC SINH </span>
                <span> THÀNH TÍCH HọC SINH</span>
                <span className="outline-text hidden lg:block"> THÀNH TÍCH </span>
            </div>

            <div className="py-4 lg:px-40">
                <div className="mt-90 lg:mt-120 mx-auto  grid grid-flow-col grid-rows-3 gap-12 lg:gap-30 items-center justify-center  w-fit mx-auto hover:pause-on-hover animate-[infinite-scroll_40s_linear_infinite]">
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
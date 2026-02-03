import { SVNHelveticaNeueHeavy } from "./font"
import Image from "next/image"


export default function CardHS({ name, imglink, school, hocbong }: { name: string, imglink: string, school: string, hocbong: string | null }) {
    return (
        <div className="relative w-48 lg:w-96 h-36 lg:h-72">
            <div className="w-48 lg:w-96 h-36 lg:h-72 bg-[#004DEE] text-[#FFCB1F] rounded-2xl shadow-lg flex justify-center items-center flex-col -rotate-10">
                <div className="size-24 lg:size-40">
                    <Image src={imglink} width={150} height={150} alt=""></Image>
                </div>
                <div className={`${SVNHelveticaNeueHeavy.className} text-sm lg:text-xl`}>
                    {name}
                </div>
                <div className="font-[Helvetica] text-[10px] text-sm">
                    {school}
                </div>
            </div>
            {hocbong && (
                <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] absolute -top-8 lg:-top-10 -right-12 lg:-right-20 w-36 lg:w-70 h-15 flex lg:items-center justify-center`}>
                    <div className="relative z-1 text-[12px] lg:text-xl">
                        {hocbong}
                    </div>
                    <div>
                        <Image className="absolute inset-0 z-0" src={'/hs/bg.png'} alt="bg" width={280} height={90}></Image>
                    </div>
                </div>
            )}
        </div>
    )
}
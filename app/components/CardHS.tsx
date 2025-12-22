import { SVNHelveticaNeueHeavy } from "./font"
import Image from "next/image"


export default function CardHS({ name, imglink, school, text }: { name: string, imglink: string, school: string, text: string | null }) {
    return (
        <div className="relative w-96 h-72">
            <div className="w-96 h-72 bg-[#004DEE] text-[#FFCB1F] rounded-2xl shadow-lg flex justify-center items-center flex-col -rotate-10">
                <div className="size-40">
                    <Image src={imglink} width={150} height={150} alt=""></Image>
                </div>
                <div className={`${SVNHelveticaNeueHeavy.className} text-xl`}>
                    {name}
                </div>
                <div className="font-[Helvetica] text-sm">
                    {school}
                </div>
            </div>
            {text && (
                <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] absolute -top-10 -right-20 w-70 h-15 flex items-center justify-center`}>
                    <div className="relative z-1 text-xl">
                        {text}
                    </div>
                    <div>
                        <Image className="absolute inset-0 z-0" src={'/hs/bg.png'} alt="bg" width={280} height={90}></Image>
                    </div>
                </div>
            )}
        </div>
    )
}
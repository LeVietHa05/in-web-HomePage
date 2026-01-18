import Image from "next/image"
import { SVNHelveticaNeueHeavy } from "./font"
import Link from "next/link"

export default function Dangkytuvan() {
    return (
        <div className="bg-[#407EFF] w-full rounded-[60px]  relative z-2  overflow-x-hidden overflow-y-hidden -mt-12 border-24 border-[#004DEE]">

            <div className="flex items-center">
                <div className="bg-[#ADDDFF] w-fit p-12 rounded-[36px] relative">
                    <Image className="relative z-100 " src={'/dangky-plane.png'} alt="" width={500} height={440}></Image>
                    <div className="absolute left-0 z-1 top-0 h-full w-full  rounded-[36px] bg-[#ADDDFF]">

                    </div>
                    <div className="absolute -right-5 z-0 top-0 h-full w-full  rounded-[36px] border-y-24 border-r-32 border-[#004DEE]"></div>
                </div>
                <div className="flex items-center justify-center flex-1 relative">
                    <div className="p-4 border border-[#FDFFD6] rounded-[60px]">
                        <Link target="blank" href={'https://docs.google.com/forms/d/e/1FAIpQLSf3PIufEyO_LTr2-mXyw6WYgNIIOoX77iUDR7IhzrXRV8VmVg/viewform?fbclid=IwY2xjawPAgm1leHRuA2FlbQIxMABicmlkETFnYW1GY0tkalRyNjJpeUFEc3J0YwZhcHBfaWQPNTE0NzcxNTY5MjI4MDYxAAEeWuwKPgq6ZEw84-RCqF2t1ZEAWdN1JMOcKiAzt6WsU9VGKbx6KQpGDClpLp0_aem_nN7Zo1VnwPX59kn2E6Tdaw'} className={`block font-black text-center ${SVNHelveticaNeueHeavy.className} text-[64px] text-[#004DEE] px-12 py-8 bg-[#FDFFD6] rounded-[48px]`}>
                            ĐĂNG KÝ <br></br>
                            TƯ VẤN
                        </Link>
                        <div className="absolute right-30 bottom-3 animate-bounce">
                            <Image src={'/mouse.png'} alt="" width={110} height={110}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
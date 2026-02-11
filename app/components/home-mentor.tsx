import Image from "next/image";
import { SVNHelveticaNeueHeavy } from "./font";

export default function Doingumentor({ imglink, color1, color2 }: { imglink: string, color1: string, color2: string }) {
    return (
        <div className="bg-[#3253BC] lg:min-h-[1000px] w-full rounded-[32px] lg:rounded-[60px]  relative z-2 overflow-hidden -mt-24 py-24">
            <div className={`${SVNHelveticaNeueHeavy.className} text-[72px] lg:text-[196px] text-center`} style={{ color: color1 }}>
                ĐỘI NGŨ<br></br>MENTOR
            </div>
            <div style={{ backgroundColor: color1, color: color2 }} className=" flex gap-6 lg:gap-4 lg:w-[1080px] mx-auto p-4 lg:p-8 text-justify text-[14px] lg:text-[20px] lg:-mt-14 relative rounded-lg">
                <div className="absolute bottom-1/1 left-1/2 -translate-x-1/2 ">
                    <Image src={imglink} alt="" width={386} height={518} className="w-48 lg:w-96"></Image>
                </div>
                <div className="flex-1">
                    Đội ngũ cố vấn của Inception là những chuyên gia giàu kinh nghiệm, từng dẫn dắt nhiều học sinh chinh phục thành công học bổng tại các trường đại học hàng đầu thế giới.
                </div>
                <div className="flex-1">
                    Với sự đồng hành toàn diện - từ củng cố nền tảng học thuật đến xây dựng chiến lược cá nhân hóa - Inception giúp học sinh tự tin vươn tới những mục tiêu du học cao nhất.
                </div>
            </div>
        </div>
    )
}
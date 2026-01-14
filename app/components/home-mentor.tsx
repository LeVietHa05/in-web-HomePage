import Image from "next/image";
import { SVNHelveticaNeueHeavy } from "./font";

export default function Doingumentor() {
    return (
        <div className="bg-[#3253BC] min-h-[1000px] w-full rounded-[60px]  relative z-1 overflow-hidden -mt-24 pt-24">
            <div className={`text-[#ADDDFF] ${SVNHelveticaNeueHeavy.className} text-[196px] text-center`}>
                ĐỘI NGŨ <br></br>MENTOR
            </div>
            <div className="bg-[#ADDDFF] flex gap-4 w-[1080px] mx-auto p-8 text-[20px] text-[#001E7F] -mt-14 relative rounded-lg">
                <div className="absolute bottom-1/1 left-1/2 -translate-x-1/2">
                    <Image src={'/mentor-2.png'} alt="" width={386} height={518}></Image>
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
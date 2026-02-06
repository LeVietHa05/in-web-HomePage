import Image from "next/image"
import { SVNHelveticaNeueHeavy } from "../components/font"
import Thuvien from "../components/hdnk-thuvien"
import Dangkytuvan from "../components/dangkytuvan"

export default function HDCN() {
    return (
        <div className="max-w-[1440px] mx-auto relative">
            <div className="w-full aspect-1441/961 relative z-10 border-b-12 lg:border-b-24 border-[#FFCB1F] rounded-[24px] lg:rounded-[60px] mt-16 lg:mt-0">
                <Image src={'/hdcn/1.png'} alt="" fill></Image>
            </div>
            {/*  */}
            <div className="-mt-16 text-[#004DEE] relative z-9 bg-[#EAFDFF] py-16 px-2 lg:px-64 rounded-b-[32px] lg:rounded-b-[60px]">
                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-3xl text-center text-[#004DEE] lg:text-[60px]`}>
                    Hoạt Động Chuyên Ngành
                </div>
                <div className="my-4 text-base lg:text-xl">
                    Hoạt động chuyên ngành tại Inception là một phần trong lộ trình chuẩn bị hồ sơ du học, hướng đến việc xây dựng nền tảng học thuật, tư duy nghiên cứu và thành tích cá nhân cho học sinh. Inception triển khai các hoạt động nghiên cứu khoa học, phát triển sản phẩm cá nhân, và hỗ trợ học sinh tham gia các cuộc thi trong nước và quốc tế.
                </div>
                <div className="bg-[#ECFEB0] p-2 lg:p-8  text-base lg:text-[20px] rounded-[16px] lg:rounded-[30px]">
                    <div className="font-bold ">
                        Mỗi năm, Inception đồng hành cùng hơn 100 học sinh từ khắp các tỉnh thành trong cả nước:
                    </div>
                    <ul className="list-disc ml-12 text-sm lg:text-base">
                        <li>Tham gia nghiên cứu khoa học theo định hướng học thuật và thực tiễn</li>
                        <li> Phát triển dự án cá nhân độc lập, ứng dụng cao</li>
                        <li> Góp mặt tại hơn 20 cuộc thi khoa học kỹ thuật trong nước và quốc tế</li>
                        <li> Hợp tác, cố vấn cùng đội ngũ mentor chuyên môn với bề dày kinh nghiệm</li>
                    </ul>
                </div>
            </div>
            {/* thanh tich hdcn */}
            <div className="-mt-16 text-[#EAFDFF] relative z-8 bg-[#181A4D] pt-20 pb-6 lg:py-16 lg:pt-24 rounded-b-[32px] lg:rounded-b-[60px]">
                <div className={`text-center text-3xl lg:text-[60px] ${SVNHelveticaNeueHeavy.className} pb-4 lg:pb-12`}>
                    Thành Tích <br></br>
                    Hoạt Động Chuyên Ngành
                </div>
                <div className=" bg-[#001E7F] p-3 lg:p-40 rounded-3xl lg:rounded-t-[60px]">
                    <div className="relative w-full aspect-16/9 ">
                        <Image className="rounded-t-[30px]" src={'/hdcn/1.png'} alt="" fill></Image>
                        <div className="absolute bottom-0 left-0 bg-[#407EFF] px-8 py-4 rounded-tr-[12px]">
                            <p className={`${SVNHelveticaNeueHeavy.className} text-[10px] lg:text-xl `}>
                                Giải đặc biệt & Huy chương Vàng - WICO (World Invention Creativity Olympic)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* goi dich vu ho tr viet luan */}
            <div className="bg-[#407EFF] min-h-[1450px] -mt-32 mb-16 pt-8 lg:pb-16 relative z-1 rounded-[32px] lg:rounded-[60px] text-[#004DEE]">
                <div className={`${SVNHelveticaNeueHeavy.className} text-3xl lg:text-[60px] font-black text-center  pt-28 pb-6 lg:pb-12 text-[#FFF175]`}>
                    CHƯƠNG TRÌNH HỖ TRỢ <br />
                    TẠI INCEPTION
                </div>
                <div>
                    <div className={`max-w-[1080px] mx-auto bg-[#EAFDFF] rounded-[30px] p-4 pb-8 flex flex-col lg:flex-row gap-2`}>
                        <div className="flex-6">
                            <div className="flex  items-center gap-4 lg:gap-12">
                                <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                                    1
                                </div>
                                <div className={`${SVNHelveticaNeueHeavy.className} py-8 text-2xl lg:text-[40px]`}>
                                    <div>
                                        Nghiên Cứu Khoa Học
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 lg:px-12 text-base lg:text-xl ">
                                <p className="font-bold">
                                    Inception đồng hành từ giai đoạn hình thành ý tưởng
                                    đến công bố nghiên cứu:
                                </p>
                                <ul className="list-disc ml-12 ">
                                    <li>Họp nhóm định hướng đề tài có tính ứng dụng thực tế</li>
                                    <li>Lên kế hoạch nghiên cứu chi tiết theo từng buổi</li>
                                    <li>Đào tạo kiến thức chuyên ngành xuyên suốt quá trình</li>
                                    <li>Hướng dẫn viết báo cáo khoa học chuẩn LaTeX</li>
                                    <li>Hỗ trợ đăng bài tại các tạp chí quốc tế và hội thảo khoa học uy tín</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-4 flex items-center justify-center">
                            <Image src={'/hdcn/2.png'} alt="" width={355} height={253}></Image>
                        </div>
                    </div>
                    <div className={`max-w-[1080px] mx-auto bg-[#D5F2FF] rounded-[30px] p-4 pb-8 flex flex-col lg:flex-row gap-2`}>
                        <div className="flex-6">
                            <div className="flex  items-center gap-4 lg:gap-12">
                                <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                                    2
                                </div>
                                <div className={`${SVNHelveticaNeueHeavy.className} py-8 text-2xl lg:text-[40px]`}>
                                    <div>
                                        Cuộc Thi Khoa Học Kỹ Thuật
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 lg:px-12 text-base lg:text-xl ">
                                <p className="font-bold">
                                    Học sinh được ghép nhóm và cố vấn toàn diện để tham gia các cuộc thi khoa học kỹ thuật:
                                </p>
                                <ul className="list-disc ml-12 ">
                                    <li>Hỗ trợ lên ý tưởng, lựa chọn đề tài phù hợp tiêu chí từng cuộc thi</li>
                                    <li>Đào tạo chuyên môn, kỹ năng làm poster, báo cáo, phản biện và thuyết trình</li>
                                    <li>Lựa chọn hình thức thi phù hợp (online hoặc offline)</li>
                                    <li>Phát triển kỹ năng mềm: làm việc nhóm, giao tiếp, tư duy phản biện, etc.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-4 flex items-center justify-center">
                            <Image src={'/hdcn/3.png'} alt="" width={355} height={253}></Image>
                        </div>
                    </div>
                    <div className={`max-w-[1080px] mx-auto bg-[#BDE8FF] rounded-[30px] p-4 pb-8 flex flex-col lg:flex-row gap-2`}>
                        <div className="flex-6">
                            <div className="flex  items-center gap-4 lg:gap-12">
                                <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                                    3
                                </div>
                                <div className={`${SVNHelveticaNeueHeavy.className} py-8 text-2xl lg:text-[40px]`}>
                                    <div>
                                        Dự Án Cá Nhân Chuyên Ngành
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 lg:px-12 text-base lg:text-xl ">
                                <p className="font-bold">
                                    Inception đồng hành từ giai đoạn hình thành ý tưởng
                                    đến công bố nghiên cứu:
                                </p>
                                <ul className="list-disc ml-12 ">
                                    <li>Họp nhóm định hướng đề tài có tính ứng dụng thực tế</li>
                                    <li>Lên kế hoạch nghiên cứu chi tiết theo từng buổi</li>
                                    <li>Đào tạo kiến thức chuyên ngành xuyên suốt quá trình</li>
                                    <li>Hướng dẫn viết báo cáo khoa học chuẩn LaTeX</li>
                                    <li>Hỗ trợ đăng bài tại các tạp chí quốc tế và hội thảo khoa học uy tín</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-4 flex items-center justify-center">
                            <Image src={'/hdcn/4.png'} alt="" width={355} height={253}></Image>
                        </div>
                    </div>
                </div>
            </div>

            <Dangkytuvan />
        </div>
    )
}
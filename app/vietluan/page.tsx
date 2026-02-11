import Image from "next/image"
import Link from "next/link"
import { SVNHelveticaNeueHeavy } from "../components/font"

import Doingumentor from "../components/home-mentor"
import Dangkytuvan from "../components/dangkytuvan"
import ThanhtichHS from "../components/thanhtichhs"
import Statement from "../components/vietluan-statement"
import Camnhanhs from "../components/vietluan-camnhanhs"


export default function Vietluan() {
    return (
        <div className="max-w-[1440px] mx-auto relative">
            {/* header */}
            <div className="relative h-screen max-h-[600px] lg:max-h-[840px] w-full z-0">
                <Image src={'/home-bg.png'} fill alt=""></Image>
                <div className="relative top-1/2 left-1/2 -translate-1/2 flex flex-col lg:flex-row w-fit ">
                    <div className="flex flex-col justify-around pl-4 lg:pl-20">
                        <div>
                            <div className={`${SVNHelveticaNeueHeavy.className} text-4xl lg:text-[48px] text-[#FFF175] mb-4`}>
                                CHINH PHỤC HỌC BỔNG DU HỌC <br />
                                VỚI BÀI LUẬN CÁ NHÂN HOÁ
                            </div>
                            <div className="text-[#EAFDFF] text-xl lg:text-[28px]">
                                Inception đồng hành cùng bạn viết nên <br />
                                hành trình học bổng riêng biệt!
                            </div>
                        </div>
                        <div className="mt-4">
                            <Link target="blank" href={'https://docs.google.com/forms/d/e/1FAIpQLSf3PIufEyO_LTr2-mXyw6WYgNIIOoX77iUDR7IhzrXRV8VmVg/viewform?fbclid=IwY2xjawPAgm1leHRuA2FlbQIxMABicmlkETFnYW1GY0tkalRyNjJpeUFEc3J0YwZhcHBfaWQPNTE0NzcxNTY5MjI4MDYxAAEeWuwKPgq6ZEw84-RCqF2t1ZEAWdN1JMOcKiAzt6WsU9VGKbx6KQpGDClpLp0_aem_nN7Zo1VnwPX59kn2E6Tdaw'} className={`${SVNHelveticaNeueHeavy.className} text-[23px] text-[#FDFFD6] bg-[#407EFF] rounded-full p-2 px-8 w-fit animate-pulse hover:animate-none`}>
                                TƯ VẤN VIẾT LUẬN
                            </Link>
                        </div>
                    </div>
                    <div className="flex -space-x-50 lg:items-end hidden lg:flex">
                        <div className="shrink-0 w-1/2 lg:w-auto ">
                            <Image src={'/mentor-1.png'} alt="text" width={438} height={657}></Image>
                        </div>

                    </div>
                </div>
            </div>

            <div className="-mt-32 text-[#004DEE] relative z-1 bg-[#EAFDFF] py-12 pl-4 lg:pl-28 rounded-[60px]">
                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-base lg:text-2xl  `}>
                    Tại Sao Học Sinh Lựa Chọn Inception Để Tư Vấn Bài Luận?
                </div>
                <div className="my-4 text-sm">
                    <ul className="list-disc ml-4 space-y-4 mt-4">
                        <li>
                            Trực tiếp trao đổi 1:1 cùng mentor để tìm ra ý tưởng độc đáo, mang đậm màu sắc cá nhân.
                        </li>
                        <li>
                            Cá nhân hoá bài luận theo câu chuyện và giá trị riêng của từng học sinh.
                        </li>
                        <li>
                            Định hướng bài luận theo tiêu chí đánh giá của hội đồng tuyển sinh.
                        </li>
                    </ul>
                </div>
            </div>

            {/* lo trinh appply */}
            <div className="mt-5 lg:mt-2 mb-40 relative z-10 lg:px-12 px-2">
                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-[#FFCB1F] text-2xl lg:text-[96px] text-center pb-6 lg:pb-8`}>
                    QUY TRÌNH TƯ VẤN
                </div>

                <div className=" grid grid-cols-1 lg:grid-cols-2 text-[#004DEE] text-sm lg:text-xl">
                    <div className={`bg-[#ECFEB0] font-bold flex items-center gap-12 rounded-[30px] p-4 `}>
                        <div className={`${SVNHelveticaNeueHeavy.className} size-12 lg:w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                            1
                        </div>
                        <div className="py-3 lg:py-5">
                            <div>
                                Phỏng vấn, gửi bảng câu hỏi để khai thác thông tin của học sinh
                            </div>
                        </div>
                    </div>

                    <div className={`bg-[#FDFFD6] lg:bg-[#ECFEB0] font-bold flex items-center gap-12 rounded-[30px] p-4 `}>
                        <div className={`${SVNHelveticaNeueHeavy.className} size-12 lg:w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                            2
                        </div>
                        <div className="py-3 lg:py-5">
                            <div>
                                Thảo luận để xác định câu chuyện độc đáo nhất của học sinh, xây dựng cấu trúc bài luận dựa trên ý tưởng đã chốt
                            </div>
                        </div>
                    </div>
                    <div className={`bg-[#ECFEB0] lg:bg-[#FDFFD6] font-bold flex items-center gap-12 rounded-[30px] p-4 `}>
                        <div className={`${SVNHelveticaNeueHeavy.className} size-12 lg:w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                            3
                        </div>
                        <div className="py-3 lg:py-8">
                            <div>
                                Nhận xét và đưa ra hướng dẫn chỉnh sửa, cải thiện bài viết của học sinh
                            </div>
                        </div>
                    </div>
                    <div className={`bg-[#FDFFD6] font-bold flex items-center gap-12 rounded-[30px] p-4 `}>
                        <div className={`${SVNHelveticaNeueHeavy.className} size-12 lg:w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                            4
                        </div>
                        <div className="py-3 lg:py-8">
                            <div>
                                Hoàn thiện bài luận về mặt từ ngữ và diễn đạt, khớp với tiêu chí đánh giá của hội đồng tuyển sinh
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ThanhtichHS />

            <div className="relative  z-4 -mt-6 lg:-mt-15 w-full ">
                <div className="absolute -top-5 z-4 w-full h-16 lg:h-30 border-y-6 border-[#FFCB1F] skew-y-3 "></div>
                <div className={`absolute -top-5 z-4 w-full h-16 lg:h-30 bg-[#ADDDFF] -skew-y-3  `}> </div>
            </div>

            {/* goi dich vu ho tr viet luan */}
            <div className="bg-[#FDFFD6] min-h-[1300px] lg:min-h-[1450px] -mt-24 pt-50 relative z-1 rounded-[30px] lg:rounded-[60px] text-[#004DEE]">
                <div className={`${SVNHelveticaNeueHeavy.className} text-2xl lg:text-[60px] font-black text-center mb-8`}>
                    Gói Dịch Vụ Hỗ Trợ Viết Luận <br />
                    (Essay Packages)
                </div>
                <div>
                    <div className={`max-w-[1080px] mx-auto bg-[#FFF175] font-bold  rounded-[30px] p-4 pb-8`}>
                        <div className="flex  items-center  gap-4 lg:gap-12">
                            <div className={`${SVNHelveticaNeueHeavy.className} size-12 lg:w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                                1
                            </div>
                            <div className={`${SVNHelveticaNeueHeavy.className} flex py-2 lg:py-8 text-xl lg:text-[40px]`}>
                                <div>
                                    Bài Luận Lẻ
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="list-disc ml-4 lg:ml-24 text-sm lg:text-xl font-bold pr-4 lg:pr-12">
                                <li>Phù hợp với học sinh cần hỗ trợ từng bài luận cụ thể.</li>
                                <li>Làm việc theo quy trình 4-5 buổi/bài luận, bao gồm khai thác ý tưởng, xây dựng bố cục, hướng dẫn viết bản nháp, chỉnh sửa nội dung và diễn đạt đến khi hoàn thiện.</li>
                                <li>Áp dụng cho bài luận ở tất cả các quốc gia trên thế giới.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`max-w-[1080px] mx-auto bg-[#ECFEB0] font-bold  rounded-[30px] p-4 pb-8 `}>
                        <div className="flex  items-center  gap-4 lg:gap-12">
                            <div className={`${SVNHelveticaNeueHeavy.className} size-12 lg:w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                                2
                            </div>
                            <div className={`${SVNHelveticaNeueHeavy.className} flex py-2 lg:py-8 text-xl lg:text-[40px]`}>
                                <div>
                                    Personal Statement
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="list-disc ml-4 lg:ml-24 text-sm lg:text-xl font-bold pr-4 lg:pr-12">
                                <li>Phù hợp với học sinh cần hướng dẫn viết bài luận chính app Mỹ (Personal Statement).</li>
                                <li>Không giới hạn thời gian và số buổi làm việc.</li>
                                <li>Quy trình làm việc được cá nhân hóa theo năng lực và lộ trình của học sinh.</li>
                                <li>Làm việc trên một ý tưởng đã thống nhất giữa mentor và học sinh. Nếu thêm ý tưởng mới sẽ tính là một bài mới.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`max-w-[1080px] mx-auto bg-[#EAFDFF] font-bold  rounded-[30px] p-4 pb-8 `}>
                        <div className="flex  items-center gap-4 lg:gap-12">
                            <div className={`${SVNHelveticaNeueHeavy.className} size-12 lg:w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                                3
                            </div>
                            <div className={`${SVNHelveticaNeueHeavy.className} flex py-2 lg:py-8 text-xl lg:text-[40px]`}>
                                <div>
                                    Combo Luận
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="list-disc ml-4 lg:ml-24 text-sm lg:text-xl font-bold pr-4 lg:pr-12">
                                <li>Phù hợp với học sinh cần hoàn thiện nhiều bài luận.</li>
                                <li>Hướng dẫn trọn gói theo danh sách trường muốn apply: gồm bài luận chính (Personal Statement), các bài luận phụ (không giới hạn số lượng), và thư giới thiệu.</li>
                                <li>Có thể tùy chọn mở rộng để thêm các trường top-ranking (Top 10-20 NU,...)</li>
                                <li> Tư vấn, thiết kế gói phù hợp với từng học sinh và danh sách trường.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Doingumentor imglink="/mentor-1.png" color1="#FDFFD6" color2="#001E7F" />

            <div className="bg-[#FFF175] relative z-1 -mt-24 pt-28 lg:pt-40 pb-8 lg:pb-20 rounded-[30px] lg:rounded-[60px] text-[#004DEE]">
                <div className={`${SVNHelveticaNeueHeavy.className} text-2xl lg:text-[60px] font-black text-center `}>
                    BÀI LUẬN TIÊU BIỂU
                </div>
            </div>

            {/* bai luan tieu bieu */}
            <Statement />

            {/* cam nhan hs */}
            <Camnhanhs />

            {/* Dang ky tu van */}
            <Dangkytuvan />
        </div >
    )
}
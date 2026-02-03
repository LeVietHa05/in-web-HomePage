import Image from "next/image"
import { SVNHelveticaNeueHeavy } from "../components/font"

import ThanhtichHS from "../components/thanhtichhs"
import Doingumentor from "../components/home-mentor"
import Dangkytuvan from "../components/dangkytuvan"

const data = [
    {
        link: "/vietluan",
        img: "/home-dichvu3.png",
        title: "Viết Luận",
        content: "Chương trình tư vấn 1-1 cá nhân hóa, giúp học sinh khám phá và khai thác câu chuyện riêng, phát triển ý tưởng sáng tạo và hoàn thiện bài luận theo tiêu chuẩn tuyển sinh quốc tế."
    }, {
        link: "/hoatdongngoaikhoa",
        img: "/home-dichvu4.png",
        title: "Hoạt Động Ngoại Khóa",
        content: "Tại Inception, các chương trình hoạt động ngoại khoá được thiết kế và triển khai đa dạng, có hệ thống, lấy trải nghiệm của học sinh làm trung tâm."
    }, {
        link: "/khoahoc",
        img: "/home-dichvu5.png",
        title: "Khóa Học Bổ Trợ",
        content: "Các khoá học bổ trợ được thiết kế nhằm cung cấp nền tảng giáo dục khai phóng, trau dồi các kỹ năng học thuật và hoàn thiện hồ sơ du học."
    }, {
        link: "/hoatdongchuyennganh",
        img: "/home-dichvu-6.png",
        title: "Hoạt Động Chuyên Ngành",
        content: "Hoạt động chuyên ngành tại Inception là một phần trong lộ trình chuẩn bị hồ sơ du học, hướng đến việc xây dựng nền tảng kiến thức chuyên ngành, tư duy nghiên cứu, và thành tích thi đấu học thuật."
    },
]

export default function Bacdaihoc() {
    return (
        <div className="max-w-[1440px] mx-auto relative">
            <div className="w-full aspect-1441/961 relative">
                <Image src={'/bacdaihoc/1.png'} alt="" fill></Image>
            </div>

            <div className="-mt-4 lg:-mt-32  text-[#004DEE] relative z-1 bg-[#EAFDFF] py-2 lg:py-12 px-4 lg:px-32 rounded-[32px] lg:rounded-[60px]">
                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-base lg:text-2xl text-left lg:text-center `}>
                    Inception đồng hành cùng học sinh chuẩn bị hồ sơ học bổng du học hiệu quả và cá nhân hoá
                </div>
                <div className="my-4 text-sm lg:text-base">
                    Mỗi học sinh làm việc cùng Inception được hỗ trợ bởi 2 mentor:
                    <ul className="list-disc ml-4 space-y-4 mt-4">
                        <li>
                            <b>Mentor chiến lược:</b> Đồng hành cùng học sinh phân tích hồ sơ hiện tại, xác định điểm mạnh, điểm yếu và xây dựng lộ trình, chiến lược hồ sơ phù hợp nhằm tối ưu khả năng trúng tuyển và học bổng tại các đại học hàng đầu thế giới.
                        </li>
                        <li>
                            <b>Mentor luận:</b> Đồng hành cùng học sinh trong toàn bộ quá trình viết bài luận cá nhân - từ khâu lên ý tưởng, xây dựng nội dung đến chỉnh sửa theo yêu cầu từng trường. Mentor giúp mỗi bài viết trở nên sâu sắc, chân thật và thể hiện rõ nét bản sắc riêng của từng bạn.
                        </li>
                    </ul>
                </div>
            </div>

            {/* lo trinh appply */}
            <div className="mt-12 relative z-10">
                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-[#FFCB1F] text-3xl lg:text-[96px] text-center pb-16`}>
                    LỘ TRÌNH APPLY
                </div>

                <div className="bg-[#004DEE] rounded-[30px]">
                    <div className="text-[#FDFFD6]  p-3 lg:p-12">
                        <div className={`${SVNHelveticaNeueHeavy.className} text-xl lg:text-[40px] lg:leading-[68px] font-black flex items-center gap-4 lg:gap-12`}>
                            <div className={`w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                                1
                            </div>
                            <div>
                                Chuẩn bị hồ sơ
                            </div>
                        </div>

                        <div className="text-sm lg:text-xl grid grid-cols-2 mt-4   ">
                            <div>
                                <b>Tháng 06:</b>
                                <ul className="list-disc ml-3 lg:ml-8">
                                    <li>
                                        Phân tích chuyên sâu và lên chiến lược tối ưu học bổng
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <b>Tháng 07:</b>
                                <ul className="list-disc ml-3 lg:ml-8">
                                    <li>
                                        Lên ý tưởng PS, viết bản nháp
                                    </li>
                                    <li>Lên danh sách các thư giới thiệu, viết bản nháp</li>
                                    <li>Sửa CV</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#407EFF] rounded-[30px] ">
                        <div className="text-[#FDFFD6] p-3 lg:p-12">
                            <div className={`${SVNHelveticaNeueHeavy.className} text-xl lg:text-[40px] lg:leading-[68px] font-black flex items-center gap-4 lg:gap-12`}>
                                <div className={`w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                                    2
                                </div>
                                <div>
                                    Kỳ Apply sớm
                                </div>
                            </div>

                            <div className="text-sm lg:text-xl grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4 text-[#EAFDFF]">
                                <div>
                                    <b>Tháng 08:</b>
                                    <ul className="list-disc ml-3 lg:ml-8">
                                        <li>Chuẩn bị hồ sơ tài chính</li>
                                        <li>Điền Common App</li>
                                        <li>Viết luận phụ</li>
                                    </ul>
                                </div>
                                <div>
                                    <b>Tháng 09:</b>
                                    <ul className="list-disc ml-3 lg:ml-8">
                                        <li>Hoàn thiện PS  </li>
                                        <li>Xin chữ ký thư giới thiệu</li>
                                        <li>Xin bảng điểm</li>
                                    </ul>
                                </div>
                                <div>
                                    <b>Tháng 10:</b>
                                    <ul className="list-disc ml-3 lg:ml-8">
                                        <li>Tháng 10:</li>
                                        <li>Điền CSS/ISFAA</li>
                                        <li>Chốt ED1, EA</li>
                                    </ul>
                                </div>
                                <div>
                                    <b>Tháng 11:</b>
                                    <ul className="list-disc ml-3 lg:ml-8">
                                        <li>Nộp hồ sơ Common App</li>
                                        <li>Nộp hồ sơ tài chính</li>
                                        <li>Gửi thư giới thiệu</li>
                                        <li>Gửi điểm</li>
                                        <li>Theo dõi portal</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#ADDDFF] rounded-[30px] ">
                            <div className="text-[#004DEE] p-3 lg:p-12">
                                <div className={`${SVNHelveticaNeueHeavy.className} text-xl lg:text-[40px] lg:leading-[68px] font-black flex items-center gap-4 lg:gap-12`}>
                                    <div className={`w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                                        3
                                    </div>
                                    <div>
                                        Kỳ Apply chính
                                    </div>
                                </div>

                                <div className="text-sm lg:text-xl grid grid-cols-3 mt-4 text-[#004DEE]">
                                    <div>
                                        <b>Tháng 11:</b>
                                        <ul className="list-disc ml-3 lg:ml-8">
                                            <li>
                                                Lên danh sách trường đợt RD
                                            </li>
                                        </ul>
                                        <br />
                                        <b>Tháng 12:</b>
                                        <ul className="list-disc ml-3 lg:ml-8">
                                            <li>Nhận kết quả ED 1, EA</li>
                                            <li>Bổ sung hồ sơ (nếu cần)</li>
                                            <li>Viết luận cho RD</li>
                                            <li>Chỉnh sửa hồ sơ tài chính</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <b>Tháng 01 - 02:</b>
                                        <ul className="list-disc ml-3 lg:ml-8">
                                            <li>Nộp hồ sơ Common App</li>
                                            <li>Nộp hồ sơ tài chính</li>
                                            <li>Gửi thư giới thiệu</li>
                                            <li>Gửi điểm</li>
                                            <li>Theo dõi portal</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <b>Tháng 03 - 04:</b>
                                        <ul className="list-disc ml-3 lg:ml-8">
                                            <li>Nhận kết quả RD</li>
                                            <li>Bổ sung hồ sơ (nếu cần)</li>
                                            <li>Hướng dẫn nếu vào waitlist</li>
                                            <li>Luyện phỏng vấn</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#D8FBFF] rounded-[30px] ">
                                <div className="text-[#407EFF] p-3 lg:p-12">
                                    <div className={`${SVNHelveticaNeueHeavy.className} text-xl lg:text-[40px] lg:leading-[68px] font-black flex items-center gap-4 lg:gap-12`}>
                                        <div className={`w-[68px] aspect-1/1 rounded-full border text-center flex items-center justify-center text-2xl`}>
                                            4
                                        </div>
                                        <div>
                                            Xin visa
                                        </div>
                                    </div>

                                    <div className="text-sm lg:text-xl grid grid-cols-3 mt-4 text-[#407EFF]">
                                        <div>
                                            <b>Tháng 06:</b>
                                            <ul className="list-disc ml-3 lg:ml-8">
                                                <li>Chốt trường, đặt cọc</li>
                                                <li>Nhận I-20</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <b>Tháng 06 - 07:</b>
                                            <ul className="list-disc ml-3 lg:ml-8">
                                                <li>Điền DS-160</li>
                                                <li>Hướng dẫn phỏng vấn visa</li>
                                                <li>Tư vấn các khoá học bổ trợ</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* thanhtichhs */}
            <ThanhtichHS />
            <div className="relative  z-4 -mt-6 lg:-mt-15 w-full ">
                <div className="absolute -top-5 z-4 w-full h-16 lg:h-30 border-y-6 border-[#FFCB1F] skew-y-3 "></div>
                <div className={`absolute -top-5 z-4 w-full h-16 lg:h-30 bg-[#EAFDFF] -skew-y-3  `}> </div>
            </div>

            {/* goi san hoc bong */}
            <div className=" -mt-24 pt-50 relative z-1 bg-[#ADDDFF] rounded-[30px] lg:rounded-[60px]">
                <div className={`${SVNHelveticaNeueHeavy.className} text-3xl lg:text-[48px] font-black text-center text-[#3253BC]`}>
                    GÓI SĂN HỌC BỔNG TẠI INCEPTION
                </div>
                <div className="text-2xl lg:text-[36px] text-center text-[#3253BC] font-medium mt-4 mb-6">
                    BẬC ĐẠI HỌC
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:w-4/5 mx-auto text-[#004DEE] text-base lg:text-[20px] pb-8 lg:pb-20 px-2 lg:px-0">
                    <div className="h-full">
                        <div className=" bg-[#F9FFE6] rounded-[30px] p-4 pb-8">
                            <ul className="list-disc ml-6 font-bold">
                                <li>Tư vấn chiến lược xây dựng hồ sơ</li>
                                <li>Xây dựng hoạt động ngoại khóa, thiện nguyện</li>
                                <li>Hướng dẫn đăng ký, điền thông tin hồ sơ</li>
                                <li>Viết và chỉnh sửa thư giới thiệu, resume,…</li>
                                <li>Hỗ trợ hoàn thiện thông tin tài chính</li>
                                <li>Hướng dẫn viết luận chính, luận phụ theo yêu cầu của trường</li>
                            </ul>
                            <div className="italic ">
                                (Dành cho cách trường Đại học Quốc tế tại Việt Nam)
                            </div>
                        </div>
                    </div>
                    <div className={`border-b-6 text-[#004DEE] ${SVNHelveticaNeueHeavy.className} block lg:hidden font-black lg:text-[40px] text-center pb-3 w-fit px-4 mx-auto`}>
                        SPECIAL
                    </div>

                    <div className="h-full">
                        <div className=" bg-[#F9FFE6] rounded-[30px] p-4 pb-8 h-full">
                            <ul className="list-disc ml-6 font-bold ">
                                <li>Tư vấn chiến lược xây dựng hồ sơ</li>
                                <li>Xây dựng hoạt động ngoại khóa, thiện nguyện</li>
                                <li>Tư vấn chọn ngành, chọn trường</li>
                                <li>Hướng dẫn viết thư giới thiệu, resume,…</li>
                                <li>Hỗ trợ xử lý hồ sơ tài chính và visa</li>
                                <li>Hướng dẫn viết luận chính, luận phụ theo yêu cầu của trường</li>
                            </ul>
                        </div>

                    </div>
                    <div className={`border-b-6 text-[#004DEE] ${SVNHelveticaNeueHeavy.className} block lg:hidden font-black lg:text-[40px] text-center pb-3 w-fit px-4 mx-auto`}>
                        STANDARD
                    </div>
                    <div className="h-full">
                        <div className=" bg-[#F9FFE6] rounded-[30px] p-4 pb-8 h-full">
                            <ul className="list-disc ml-6 font-bold">
                                <li>Toàn bộ các dịch vụ tại gói Standard</li>
                                <li>Xây dựng và cố vấn dự án cá nhân (Personal Project)</li>
                                <li>Định hướng & hướng dẫn nghiên cứu khoa học chuyên sâu</li>
                                <li>Tư vấn tham gia các cuộc thi học thuật / khoa học kỹ thuật quốc tế</li>
                                <li>Chiến lược hồ sơ dành riêng cho các nhóm trường top như: Ivy League (Mỹ), G8 (Úc), Russell Group (Anh),...</li>
                            </ul>
                        </div>

                    </div>
                    <div className={`border-b-6 text-[#004DEE] ${SVNHelveticaNeueHeavy.className} hidden lg:block font-black lg:text-[40px] text-center pb-3 w-fit px-4 mx-auto`}>
                        SPECIAL
                    </div>
                    <div className={`border-b-6 text-[#004DEE] ${SVNHelveticaNeueHeavy.className} hidden lg:block font-black lg:text-[40px] text-center pb-3 w-fit px-4 mx-auto`}>
                        STANDARD
                    </div>
                    <div className={`border-b-6 text-[#004DEE] ${SVNHelveticaNeueHeavy.className} font-black lg:text-[40px] text-center pb-3 w-fit px-4 mx-auto`}>
                        PREMIUM
                    </div>
                </div>
            </div>

            {/* chinh phuc voi */}
            <div className="bg-[#fdffd6] min-h-[900px] w-full   relative z-0 overflow-hidden -mt-24 pt-40 mb-16 lg:mb-0">

                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-3xl lg:text-[60px] text-center text-[#001E7F]`}>
                    CHINH PHỤC HỌC BỔNG VỚI
                </div>

                <div className="w-full lg:w-[1080px] mx-auto mt-4 lg:mt-20 grid-cols-2 grid lg:grid-cols-4 gap-2 lg:gap-10 px-2 lg:px-0">
                    {data.filter(e => e.title).map((each, i) => {
                        return (
                            <a key={i} href={each.link} className="*:hover:scale-105 *:duration-300">
                                <Image src={each.img} alt="" width={326} height={204}></Image>
                                <div className={`${SVNHelveticaNeueHeavy.className} text-base lg:text-[28px] text-[#004DEE] font-black  pt-1 lg:pt-8`}>{each.title}</div>
                                <div className="text-[10px] lg:text-[14px] text-[#004DEE] pt-1 lg:pt-4 max-h-24 overflow-y-auto lg:max-h-none">{each.content}</div>
                            </a>
                        )
                    })}
                </div>
            </div>

            {/* doi ngu mentor */}
            <Doingumentor imglink="/mentor-3.png" color1="#ECFEB0" color2="#001E7F" />


            {/* Dang ky tu van */}
            <Dangkytuvan />
        </div>
    )
}
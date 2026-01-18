import Image from "next/image"
import { SVNHelveticaNeueHeavy } from "../components/font"

import Doingumentor from "../components/home-mentor"
import Dangkytuvan from "../components/dangkytuvan"
import Thanhtich from "../components/thanhtich"
import TrainghiemHs from "../components/home-trainghiem"


const thanhtichData = [
    {
        name: "Duke University",
        imageLink: "/duke.png",
        otherText: "Fuqua"
    }, {
        name: "Purdue University West Lafayette",
        imageLink: "/purdue.png"
    }, {
        name: "Carnegie Mellon University",
        imageLink: "/carnegie.png"
    }, {
        name: "University of Notre Dame",
        imageLink: "/notredame.png"
    }, {
        name: "University of California Irvine | ",
        imageLink: "/irvine.png",
        otherText: "$16000"
    }, {
        name: "New York University",
        imageLink: "/nyu.png"
    }, {
        name: "Cornell University",
        imageLink: "/cornell.png"
    }, {
        name: "University of California, San Diego",
        imageLink: "/sandiego.png"
    }, {
        name: "Indiana University Bloomington | ",
        imageLink: "/indiana.png",
        otherText: "$1270"
    }, {
        name: "Dartmouth College",
        imageLink: "/dartmouth.png",
        otherText: "(50% scholarship)"
    }
]

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

export default function Baccaohoc() {
    return (
        <div className="max-w-[1440px] mx-auto relative">
            <div className="w-full aspect-1441/961 relative">
                <Image src={'/baccaohoc/1.png'} alt="" fill></Image>
            </div>

            <Thanhtich data={thanhtichData} />

            <div className="-mt-32 text-[#ECFEB0] relative z-1 bg-[#004DEE] py-12 px-32 pt-44 rounded-[60px]">
                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-2xl text-center `}>
                    Inception mang giải pháp học thuật toàn diện cho hành trình chinh phục học bổng cao học tại các trường đại học hàng đầu thế giới.
                </div>
                <div className="my-4 ">
                    <ul className="list-disc ml-4 space-y-4 mt-4">
                        <li>
                            Hồ sơ xin học bổng Thạc sĩ và Tiến sĩ yêu cầu chiều sâu học thuật và định hướng rõ ràng, khác với bậc Đại học vốn tập trung vào cá tính.
                        </li>
                        <li>
                            Inception đồng hành cùng ứng viên xây dựng hồ sơ bằng cách phân tích bảng điểm, đánh giá kỹ năng nghiên cứu và tìm kiếm các cơ hội thực tập, nghiên cứu phù hợp với mục tiêu học thuật.
                        </li>
                    </ul>
                </div>
            </div>

            {/* lo trinh appply */}
            <div className="mt-12 mb-40 relative z-10 px-12">
                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-[#FFCB1F] text-[96px] text-center`}>
                    LỘ TRÌNH APPLY
                </div>

                <div className=" grid grid-cols-2 text-[#004DEE] text-xl">
                    <div className={`bg-[#ECFEB0] font-bold flex items-center gap-12 rounded-[30px] p-4 pb-20`}>
                        <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                            1
                        </div>
                        <div className="py-8">
                            <div>
                                Định hướng quốc gia, bậc học, ngành học, mức học bổng cho các ngành
                            </div>
                            <div>
                                Phân tích chuyên sâu và lên chiến lược tối ưu hồ sơ học bổng
                            </div>
                        </div>
                    </div>

                    <div className={`bg-[#ECFEB0] font-bold flex items-center gap-12 rounded-[30px] p-4 pb-20`}>
                        <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                            2
                        </div>
                        <div className="py-8">
                            <div>
                                Lên danh sách các trường
                            </div>
                            <div>
                                Hướng dẫn ôn thi IELTS/TOEFL và GRE/GMAT
                            </div>
                        </div>
                    </div>
                    <div className={`bg-[#FDFFD6] font-bold flex items-center gap-12 rounded-[30px] p-4 -mt-14`}>
                        <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                            3
                        </div>
                        <div className="py-8">
                            <div>
                                Hoàn thiện hồ sơ, CV
                            </div>
                            <div>
                                Viết luận cho các trường
                            </div>
                        </div>
                    </div>
                    <div className={`bg-[#FDFFD6] font-bold flex items-center gap-12 rounded-[30px] p-4 -mt-14`}>
                        <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                            4
                        </div>
                        <div className="py-8">
                            <div>
                                Hoàn thiện hồ sơ, CV
                            </div>
                            <div>
                                Viết luận cho các trường
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* trai nghiem hoc sinh */}
            <TrainghiemHs type="caohoc"/>

            {/* chinh phuc voi */}
            <div className="bg-[#EAFDFF] min-h-[900px] w-full rounded-[60px]  relative z-0 overflow-hidden my-24 pt-40">

                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-[60px] text-center text-[#001E7F]`}>
                    CHINH PHỤC HỌC BỔNG VỚI
                </div>

                <div className="w-[1080px] mx-auto mt-20 grid grid-cols-4 gap-10">
                    {data.filter(e => e.title).map((each, i) => {
                        return (
                            <a key={i} href={each.link} className="*:hover:scale-105 *:duration-300">
                                <Image src={each.img} alt="" width={326} height={204}></Image>
                                <div className={`${SVNHelveticaNeueHeavy.className} text-[23px] text-[#004DEE] font-black  pt-4`}>{each.title}</div>
                                <div className="text-[14px] text-[#004DEE] pt-2">{each.content}</div>
                            </a>
                        )
                    })}
                </div>
            </div>


            {/* Dang ky tu van */}
            <Dangkytuvan />
        </div>
    )
}

import Image from "next/image"
import { SVNHelveticaNeueHeavy } from "./font"

const data = [
    {
        link: "/bacdaihoc",
        img: "/home-dichvu1.png",
        title: "Bậc Đại Học",
        content: "Chương trình tư vấn cá nhân hóa hỗ trợ học sinh xây dựng chiến lược hồ sơ, lựa chọn trường phù hợp và phát triển kỹ năng viết luận sáng tạo, tối ưu cơ hội giành học bổng từ các trường đại học hàng đầu thế giới."
    }, {
        link: "/baccaohoc",
        img: "/home-dichvu2.png",
        title: "Bậc Cao Học",
        content: "Chương trình cố vấn chuyên sâu dành cho ứng viên Thạc sĩ và Tiến sĩ, tập trung định hướng nghiên cứu, phát triển năng lực học thuật, nâng cao kỹ năng viết luận học thuật, đồng thời hỗ trợ tìm kiếm cơ hội nghiên cứu để tối đa hóa khả năng đạt học bổng."
    }, {
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

export default function Dichvucuachungtoi() {
    return (
        <div className="bg-[#fdffd6] lg:min-h-[1500px] w-full rounded-[32px] lg:rounded-[60px]  relative z-1 overflow-hidden -mt-24 py-32 lg:pt-50">

            <div className={`${SVNHelveticaNeueHeavy.className} font-black text-3xl lg:text-[60px] text-center text-[#001E7F]`}>
                DỊCH VỤ <br />
                CỦA CHÚNG TÔI
            </div>

            <div className="lg:w-[1080px] w-full mx-auto mt-8 lg:mt-20 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 px-2 lg:px-0">
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
    )
}
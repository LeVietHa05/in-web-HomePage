import Image from "next/image"
import { SVNHelveticaNeueHeavy } from "../components/font"
import Thuvien from "../components/hdnk-thuvien"
import Dangkytuvan from "../components/dangkytuvan"

export default function HDNK() {
    return (
        <div className="max-w-[1440px] mx-auto relative">
            <div className="w-full aspect-1441/961 relative z-10 border-b-24 border-[#FFCB1F] rounded-[60px]">
                <Image src={'/hdnk/1.png'} alt="" fill></Image>
            </div>
            {/* loi ich khi tham gia hdnk */}
            <div className="-mt-16 text-[#004DEE] relative z-9 bg-[#ECFEB0] py-16 px-64 rounded-b-[60px]">
                <div className={`${SVNHelveticaNeueHeavy.className} font-black text-2xl text-center text-[#004DEE] text-[60px]`}>
                    Lợi Ích Khi Tham Gia
                    Hoạt Động Ngoại Khóa
                </div>
                <div className="grid grid-cols-4 gap-8 mt-12">
                    <div className="col-span-2  ">
                        <div className="p-4 bg-[#FFF175] rounded-[20px] h-full">
                            <div className="flex  items-center gap-4">
                                <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                                    1
                                </div>
                                <div className={`${SVNHelveticaNeueHeavy.className} py-4 text-[24px]`}>
                                    <div>
                                        Giúp nhà tuyển sinh
                                        hiểu rõ con người bạn
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold pb-4">
                                Các trường không chỉ đánh giá điểm số, mà còn quan tâm đến tính cách, giá trị sống và cách bạn đóng góp cho tập thể, từ đó có góc nhìn đầy đủ hơn về con người bạn.
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2  col-start-3">
                        <div className="p-4 bg-[#FFF175] rounded-[20px] h-full">
                            <div className="flex  items-center gap-4">
                                <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                                    2
                                </div>
                                <div className={`${SVNHelveticaNeueHeavy.className} py-4 text-[24px]`}>
                                    <div>
                                        Rèn luyện khả năng
                                        lãnh đạo và cống hiến
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold pb-4">
                                Qua việc tham gia, tổ chức hay dẫn dắt CLB và dự án, các bạn học được cách lãnh đạo, phối hợp và sẻ chia với cộng đồng.
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2  row-start-2">
                        <div className="p-4 bg-[#FFF175] rounded-[20px] h-full">
                            <div className="flex  items-center gap-4">
                                <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                                    3
                                </div>
                                <div className={`${SVNHelveticaNeueHeavy.className} py-4 text-[24px]`}>
                                    <div>
                                        Khẳng định và trau dồi
                                        đam mê, năng lực riêng
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold pb-4">
                                Những trải nghiệm thực tế giúp bạn khám phá sở thích, phát triển kỹ năng và tạo dấu ấn khác biệt gắn với ngành học tương lai.
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2  col-start-3 row-start-2">
                        <div className="p-4 bg-[#FFF175] rounded-[20px] h-full">
                            <div className="flex  items-center gap-4">
                                <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                                    4
                                </div>
                                <div className={`${SVNHelveticaNeueHeavy.className} py-4 text-[24px]`}>
                                    <div>
                                        Tạo nên câu chuyện
                                        cá nhân ấn tượng
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold pb-4">
                                Hoạt động ngoại khóa là “chất liệu” để viết bài luận và kể câu chuyện riêng, giúp hồ sơ xin học bổng nổi bật và đáng nhớ.
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 row-span-2 row-start-3">
                        <div className="p-4 bg-[#FFF175] rounded-[20px] h-full">
                            <div className="flex  items-center gap-4">
                                <div className={`${SVNHelveticaNeueHeavy.className} w-[68px] aspect-1/1 rounded-full border text-[40px] text-center shrink-0`}>
                                    5
                                </div>
                                <div className={`${SVNHelveticaNeueHeavy.className} py-4 text-[24px]`}>
                                    <div>
                                        Mở rộng mối quan hệ và khả năng hòa nhập
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold pb-4">
                                Bạn có thêm nhiều bạn bè, thầy cô, mentor, tạo nền tảng kết nối xã hội và thích nghi tốt với môi trường học tập quốc tế.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* chuong trinh nk */}
            <div className="-mt-16 text-[#EAFDFF] relative z-8 bg-[#181A4D] py-16 pt-24 rounded-b-[60px]">
                <div className={`${SVNHelveticaNeueHeavy.className} text-[80px] text-center`}>
                    Chương Trình Ngoại Khóa
                </div>
            </div>
            {/* chuong trinh nk content */}
            <div className="-mt-16 text-[#004DEE] min-h-[1000px] relative z-7 bg-[#001E7F] py-16 rounded-b-[60px]">
                <div className="max-w-5xl mx-auto  mt-20">
                    <div className="flex gap-8 ">
                        <div className="flex-4 bg-[#EAFDFF] rounded-[30px] p-8">
                            <div className={`${SVNHelveticaNeueHeavy.className} `}>
                                1. Dự án xã hội, cộng đồng, thiện nguyện
                            </div>
                            <div className="text-sm">
                                <div className="my-3">
                                    Học sinh được hướng dẫn xây dựng và thực hiện các dự án có thật, có tác động rõ ràng tới cộng đồng.<br />
                                    Các dạng dự án phổ biến như:
                                </div>
                                <ul className="space-y-4 ">
                                    <li>
                                        Tổ chức chương trình khám chữa bệnh miễn phí
                                    </li>
                                    <li>Chiến dịch truyền thông giáo dục</li>
                                    <li>Hoạt động hỗ trợ trẻ em, người khuyết tật, vùng sâu vùng xa</li>
                                    <li>Gây quỹ cộng đồng và phân bổ nguồn lực</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#EAFDFF] relative p-4 rounded-[30px] flex items-center justify-center w-fit h-fit">
                            <Image className="rounded-[22px] shadow-lg" src={'/hdnk/2.png'} alt="" width={616} height={376}></Image>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto  mt-8">
                    <div className="flex flex-row-reverse gap-8 ">
                        <div className="flex-4 bg-[#EAFDFF] rounded-[30px] p-8">
                            <div className={`${SVNHelveticaNeueHeavy.className} `}>
                                2. Câu lạc bộ học thuật và kỹ năng
                            </div>
                            <div className="text-sm">
                                <div className="my-3">
                                    Inception tổ chức nhiều hoạt động học thuật theo hình thức câu lạc bộ, có cố vấn chuyên môn và mục tiêu rèn luyện định kỳ:
                                </div>
                                <ul className="space-y-4 ">
                                    <li>
                                        Câu lạc bộ Debate (Tranh biện học thuật)
                                    </li>
                                    <li>Câu lạc bộ Đọc sách & Viết văn</li>
                                    <li>Câu lạc bộ Khởi nghiệp (Entrepreneurship Club)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#EAFDFF] relative p-4 rounded-[30px] flex items-center justify-center w-fit h-fit overflow-hidden">
                            <Image className="rounded-[22px] shadow-lg  h-full w-full" src={'/hdnk/5.png'} alt="" width={616} height={376}></Image>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto  mt-8">
                    <div className="flex gap-8 ">
                        <div className="flex-4 bg-[#EAFDFF] rounded-[30px] p-8">
                            <div className={`${SVNHelveticaNeueHeavy.className} `}>
                                3. Hoạt động nghệ thuật &
                                sáng tạo
                            </div>
                            <div className="text-sm">
                                <div className="my-3">
                                    Định hướng màu sắc cá nhân và khả năng biểu đạt độc đáo: âm nhạc, hội hoạ, viết sáng tạo, nhiếp ảnh, sân khấu… Mỗi hoạt động được định hướng để phản ánh cá tính riêng, phù hợp ngành học và tiêu chí tuyển sinh của từng trường.
                                </div>
                                <ul className="space-y-4 ">
                                    <li>Tham gia dàn hợp xướng, biểu diễn piano/violin, sáng tác nhạc.</li>
                                    <li>Triển lãm tranh cá nhân, thiết kế poster cho CLB, đoạt giải cuộc thi vẽ quốc tế.</li>
                                    <li>Sáng tác thơ, truyện ngắn, đăng bài trên tạp chí học sinh, điều hành blog cá nhân.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#EAFDFF] relative p-4 rounded-[30px] flex items-center justify-center w-fit h-fit">
                            <Image className="rounded-[22px] shadow-lg" src={'/hdnk/4.png'} alt="" width={616} height={376}></Image>
                        </div>
                    </div>
                </div>
            </div>

            {/* cach inception ho tro hoc sinh trien khai hoat dong ngoai khoa */}
            <div className="bg-[#EAFDFF] -mt-16  min-h-[900px] pt-32">
                <div className="max-w-5xl mx-auto ">
                    <div className="text-[#0F58EA] mb-12">
                        <div className={`${SVNHelveticaNeueHeavy.className} text-[32px] mb-4`}>
                            Cách Inception hỗ trợ học sinh triển khai
                            hoạt động ngoại khoá
                        </div>
                        <div className="text-xl">
                            Inception không chỉ đưa ra gợi ý hoạt động mà còn đóng vai trò cố vấn và đồng hành cùng học sinh trong toàn bộ quá trình triển khai:
                        </div>
                    </div>

                    <div className="bg-[#FFF175] rounded-[30px] p-8 text-[#004DEE] text-lg space-y-8">
                        <div>
                            <div className="font-semibold">
                                Tư vấn chiến lược hoạt động:
                            </div>
                            <div>
                                Lập kế hoạch hoạt động phù hợp với ngành học và hồ sơ tổng thể
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                Kết nối và trực tiếp triển khai cùng học sinh:
                            </div>
                            <div>
                                Hỗ trợ học sinh kết nối với chuyên gia, tổ chức xã hội, mentor ngành để triển khai dự án
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                Quản lý và giám sát tiến độ:
                            </div>
                            <div>
                                Theo dõi quá trình triển khai hoạt động để đảm bảo kết quả rõ ràng và minh chứng được
                                <br />
                                Phân bổ hoạt động phù hợp với lịch cá nhân của học sinh
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                Kết nối với hồ sơ du học:
                            </div>
                            <div>
                                Hướng dẫn viết luận, resume và chuẩn bị thư giới thiệu có liên quan đến hoạt động đã thực hiện
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* thu vien hoat dong ngoai khoa */}
            <Thuvien />
            
            <Dangkytuvan/>
        </div>
    )
}
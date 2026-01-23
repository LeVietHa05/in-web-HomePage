import Image from "next/image";
import { SVNHelveticaNeueHeavy } from "../../components/font";
import DangKyTuVan from "../../components/dangkytuvan";

export default function IELTSHero() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden">
      <div className="relative z-200 w-full h-[70vh] sm:h-[80vh] lg:h-screen max-h-[637px]">
        <Image src="/creative-writing.jpg" alt="Tin tức" fill priority className="object-cover rounded-[40px]" />
        <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-7">
          <div className="text-[#FEFFE6] text-[14px] sm:text-[18px] lg:text-[32px] font-normal leading-normal">
            Trang chủ / Khoá học / Creative writing
          </div>
        </div>
      </div>

      <div className="relative z-100 bg-[#004DEE] rounded-[30px] w-full h-[100px] -mt-20" />

      <div className="w-full bg-[#F9FFE6] py-[140px] rounded-[40px] -mt-25">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[140px] text-center">

          <h2 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[36px] sm:text-[48px] lg:text-[60px]`}>
            CREATIVE WRITING
          </h2>

          <div className="w-[200px] sm:w-[280px] h-[4px] bg-[#004DEE] mx-auto mt-4" />

          <p className="mt-8 max-w-[820px] mx-auto text-[#004DEE] font-['Helvetica'] text-[16px] sm:text-[18px] lg:text-[21px]">
            Khơi mở trí tưởng tượng, làm chủ kỹ năng kể chuyện
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-[80px]">

            {[
              { title: "THỜI GIAN", icon: "/thoigian.svg", text: "120 phút/buổi" },
              { title: "THỜI LƯỢNG", icon: "/thoiluong.svg", text: "8 buổi học" },
              { title: "HỌC PHÍ", icon: "/hocphi.svg", text: "Liên hệ" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-6">
                <h3 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[28px] sm:text-[32px]`}>
                  {item.title}
                </h3>
                <div className="w-[100px] h-[100px] relative">
                  <Image src={item.icon} fill className="object-contain" alt={item.title} />
                </div>
                <p className="text-[#004DEE] font-[Montserrat] text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          <h2 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[36px] sm:text-[48px] lg:text-[60px]`}>
            Mục Tiêu
          </h2>

          <div className="w-[90%] h-[4px] bg-[#004DEE] mx-auto mt-10" />

          <p className="mt-10 w-[85%] mx-auto text-[#004DEE] font-['Helvetica'] text-[16px] sm:text-[18px] lg:text-[21px]">
            Creative Writing giúp học viên rèn luyện khả năng đặt câu hỏi sáng tạo, linh hoạt phản hồi nhiều dạng đề bài, trau dồi vốn từ vựng và kỹ năng miêu tả bằng giác quan. Khóa học còn tập trung phát triển giọng văn cá nhân, kỹ năng kể chuyện (storytelling) và vận dụng hiệu quả các thủ pháp tu từ.
          </p>
        </div>
      </div>

      <div className={`text-[clamp(28px,5vw,60px)] text-[#407EFF] text-center p-5 ${SVNHelveticaNeueHeavy.className}`}>Nội dung Khóa học</div>

      <div className="relative z-200 bg-[#EAFDFF] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]">
        <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16">
          <div className={`text-[#004DEE] ${SVNHelveticaNeueHeavy.className}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[58px] sm:text-[70px] lg:text-[80px] font-black leading-none">
                01
              </span>
              <h3 className="text-[20px] sm:text-[24px] lg:text-[27px] font-black leading-[1.2]">
                Học sinh lớp 10–11 định hướng du học
              </h3>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[Helvetica] leading-relaxed max-w-md">
              Học sinh muốn chuẩn bị cho bài luận cá nhân và các yêu cầu viết tự do của trường đại học quốc tế, cần làm quen với phong cách viết sáng tạo, giàu tính cá nhân và tư duy phản biện.
            </p>
          </div>

          <div className={`text-[#004DEE] ${SVNHelveticaNeueHeavy.className}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[58px] sm:text-[70px] lg:text-[80px] font-black leading-none">
                02
              </span>
              <h3 className="text-[20px] sm:text-[24px] lg:text-[27px] font-black leading-[1.2]">
                Học sinh yêu thích viết lách
              </h3>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[Helvetica] leading-relaxed max-w-md">
              Học sinh muốn phát triển khả năng kể chuyện, mở rộng vốn từ và kỹ thuật viết để thể hiện cảm xúc, góc nhìn và suy nghĩ một cách rõ ràng, sinh động, độc đáo.
            </p>
          </div>

          <div className={`text-[#004DEE] ${SVNHelveticaNeueHeavy.className}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[58px] sm:text-[70px] lg:text-[80px] font-black leading-none">
                03
              </span>
              <h3 className="text-[20px] sm:text-[24px] lg:text-[27px] font-black leading-[1.2]">
                Gặp khó khăn khi chuyển sang phong cách viết tự do
              </h3>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[Helvetica] leading-relaxed max-w-md">
              Học sinh gặp trở ngại khi rời bỏ khuôn mẫu viết truyền thống, cần được hướng dẫn để phát triển tư duy sáng tạo, lập luận và cách diễn đạt mang dấu ấn cá nhân.
            </p>
          </div>

          <div className={`text-[#004DEE] ${SVNHelveticaNeueHeavy.className}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[58px] sm:text-[70px] lg:text-[80px] font-black leading-none">
                04
              </span>
              <h3 className="text-[20px] sm:text-[24px] lg:text-[27px] font-black leading-[1.2]">
                Muốn rèn luyện tư duy viết trước khi học nâng cao
              </h3>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[Helvetica] leading-relaxed max-w-md">
              Học sinh muốn xây dựng nền tảng vững chắc về cách dùng từ, sắp xếp ý tưởng và phát triển quan điểm, tạo đà cho các khóa viết học thuật hoặc bài luận học bổng sau này.
            </p>
          </div>

        </div>
      </div>
      <div className="relative z-[100] bg-[#407EFF] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] -mt-16 sm:-mt-20">
        <div className="w-full max-w-[1200px] mx-auto text-center">
          <h2 className={`${SVNHelveticaNeueHeavy.className} mt-8 sm:mt-10 mb-10 sm:mb-12 text-[32px] sm:text-[44px] lg:text-[60px] font-black text-[#FFCB1F] leading-tight`}>
            Khoá học này dành cho ai?
          </h2>

          <div className="bg-[#FDFFD6] rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] px-4 sm:px-8 lg:px-12 py-8 sm:py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 lg:gap-y-16">
              {[
                {
                  no: "01",
                  title: "Tư Duy Đặt Câu Hỏi",
                  desc: "Khơi gợi tư duy đặt câu hỏi mới lạ, khám phá xung đột nội tâm và những bước ngoặt quan trọng trong hành trình viết."
                },
                {
                  no: "02",
                  title: "Mở Rộng Tư Duy",
                  desc: "Phát triển kỹ năng trả lời đa dạng, từ những đề bài thông thường cho đến chủ đề triết học, thông qua các ví dụ và mẫu bài thực tế."
                },
                {
                  no: "03",
                  title: "Viết Độc Đáo",
                  desc: "Thực hành sử dụng ẩn dụ, nhân cách hóa và cách tiếp cận không gian, thời gian để tạo chiều sâu cho bài viết."
                },
                {
                  no: "04",
                  title: "Phong Cách Cá Nhân",
                  desc: "Tập trung rèn luyện văn miêu tả, tư duy phản xạ và hình thành giọng văn mang dấu ấn riêng."
                },
                {
                  no: "05",
                  title: "Mở Rộng Kiến Thức",
                  desc: "Biết cách tích hợp và xử lý thông tin từ Internet, kết hợp với khả năng kể chuyện và phản tư duy."
                },
                {
                  no: "06",
                  title: "Truyền Tải Thông Điệp",
                  desc: "Học cách khái quát hóa ý tưởng, kết hợp kiến thức với sự sáng tạo ngôn ngữ để tạo nên thông điệp mạnh mẽ và lôi cuốn."
                },
                {
                  no: "07",
                  title: "Fiction & Storytelling",
                  desc: "Khám phá hình thức Fiction, biến câu chuyện thành công cụ truyền đạt tư tưởng và cảm xúc một cách tinh tế."
                },
                {
                  no: "08",
                  title: "Thuyết Trình & Phản Biện",
                  desc: "Đọc, đánh giá, thuyết trình và phản biện trước khán giả để rèn luyện sự tự tin và khả năng giao tiếp."
                }
              ].map((item) => (
                <div key={item.no} className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE]`}>
                  <div className="flex gap-4 mb-3 items-baseline">
                    <span className="text-[28px] sm:text-[36px] lg:text-[48px] font-black leading-none">
                      {item.no}
                    </span>
                    <h3 className="text-[18px] sm:text-[22px] lg:text-[25px] font-black leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-[Helvetica] text-justify text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-none sm:max-w-md">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="mt-20"></div>
      <DangKyTuVan/>
      <div className="mt-5"></div>
    </div>
  );
}

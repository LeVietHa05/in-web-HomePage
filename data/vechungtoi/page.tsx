"use client";

import Image from "next/image";
import { SVNHelveticaNeueHeavy } from "../components/font";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen max-h-[637px] z-100">
        <Image
          src="/vechungtoi-bg.png"
          alt="Tin tức"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative w-full bg-[#FEFFE6] py-24 rounded-[40px] z-200 -mt-[30px] mb-[10px]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">

          {/* TITLE */}
          <h1 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[36px] md:text-[48px] lg:text-[60px] font-black text-center mb-20 relative`}>
            CÂU CHUYỆN THƯƠNG HIỆU
            <span className="block w-[80vh] h-[3px] bg-[#004DEE] mx-auto mt-4" />
          </h1>
          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24 items-start">
            <div className="order-2 lg:order-1 rounded-[20px] overflow-hidden">
              <Image src="/vechungtoi-1.png" alt="Inception Team" width={496} height={320} className="w-full h-auto object-cover" />
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-between h-full">
              <h2 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[24px] sm:text-[26px] lg:text-[28px] font-black mb-4 lg:mb-6`}>
                SỰ RA ĐỜI CỦA INCEPTION
              </h2>
              <p className="text-[#004DEE] text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-justify leading-relaxed font-[Helvetica]">
                Thành lập vào 2018 với mục tiêu đồng hành cùng học sinh, sinh viên Việt Nam trên hành trình chinh phục học bổng du học. Inception tập trung vào tư vấn chiến lược hồ sơ, hướng dẫn viết luận và xây dựng hoạt động ngoại khóa, các cuộc thi khoa học kỹ thuật quốc tế nhằm tối ưu khả năng săn học bổng của học sinh.
              </p>
              <span className="hidden lg:block w-full h-[2px] bg-[#004DEE] mt-6" />
            </div>

            <div className="order-3 lg:order-3">
              <h2 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[24px] sm:text-[26px] lg:text-[28px] font-black mb-4 lg:mb-6`}>
                SỨ MỆNH
              </h2>
              <p className="text-[#004DEE] text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-justify leading-relaxed font-[Helvetica]">
                Inception là nơi viết nên những câu chuyện về giấc mơ du học, về những ước mơ khám phá chân trời tri thức của những nền giáo dục khai phóng hiện đại. Chúng dũng cảm đồng hành, bền bỉ giúp học sinh chuẩn bị hồ sơ, bài luận, thư giới thiệu. Inception đã, đang và sẽ mãi là một “Big Bang” trên chặng đường ấy.
              </p>
            </div>

            <div className="order-4 lg:order-4 rounded-[20px] overflow-hidden">
              <Image src="/vechungtoi-2.png" alt="Inception Class" width={491} height={256} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

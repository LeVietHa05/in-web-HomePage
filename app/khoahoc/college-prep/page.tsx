import Image from "next/image";
import { SVNHelveticaNeueHeavy } from "../../components/font";
import TraiNghiemHocSinh from "../../components/trainghiemhocsinh";
import DangKyTuVan from "../../components/dangkytuvan";

export default function IELTSHero() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden">
      <div className="relative z-200 w-full h-[70vh] sm:h-[80vh] lg:h-screen max-h-[637px]">
        <Image src="/college-prep.jpg" alt="Tin tức" fill priority className="object-cover rounded-[40px]" />
        <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-7">
          <div className="text-[#FEFFE6] text-[14px] sm:text-[18px] lg:text-[32px] font-normal leading-normal">
            Trang chủ / Khoá học / College prep
          </div>
        </div>
      </div>

      <div className="relative z-100 bg-[#004DEE] rounded-[30px] w-full h-[100px] -mt-20" />

      <div className="w-full bg-[#F9FFE6] py-[140px] rounded-[40px] -mt-25">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[140px] text-center">

          <h2 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[36px] sm:text-[48px] lg:text-[60px]`}>
            COLLEGE PREP
          </h2>

          <div className="w-[200px] sm:w-[280px] h-[4px] bg-[#004DEE] mx-auto mt-4" />

          <p className="mt-8 max-w-[820px] mx-auto text-[#004DEE] font-['Helvetica'] text-[16px] sm:text-[18px] lg:text-[21px]">
            Trang bị nền tảng kiến thức và kỹ năng đọc - viết bậc đại học
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-[80px]">

            {[
              { title: "THỜI GIAN", icon: "/thoigian.svg", text: "120 phút/buổi" },
              { title: "THỜI LƯỢNG", icon: "/thoiluong.svg", text: "16 buổi học" },
              { title: "ĐỐI TƯỢNG", icon: "/doituong.svg", text: "Học sinh THPT" }
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
            College Prep giúp học sinh THPT làm quen với các lĩnh vực học thuật nền tảng tại bậc đại học, rèn luyện tư duy phản biện và khả năng lập luận chặt chẽ. Khóa học đồng thời trang bị kỹ năng viết và nghiên cứu khoa học, hướng tới việc học sinh có thể tự tin học tập trong môi trường quốc tế.
          </p>
        </div>
      </div>

      <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[36px] sm:text-[48px] lg:text-[60px]`}>
        Nội dung Khóa học
      </div>

      <div className="relative z-[200] bg-[#EAFDFF] py-12 px-4 md:py-16 md:px-8 lg:px-10 rounded-[24px] md:rounded-[32px] lg:rounded-[40px]">
        <div className="w-full md:w-[90%] lg:w-[80%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 md:gap-y-14 lg:gap-y-16">

          <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE]`}>
            <div className="flex items-baseline gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="text-[36px] md:text-[44px] lg:text-[48px] font-black leading-none">01</span>
              <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-black leading-none">Tâm lý học</h3>
            </div>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-[Helvetica] leading-relaxed max-w-md">
              Tìm hiểu các lý thuyết tâm lý học: gắn bó (Attachment Theory), ham muốn (Cravings) và đam mê (The Psychology of Passion); đồng thời rèn luyện kỹ năng đọc phân tích, tóm tắt và viết học thuật.
            </p>
          </div>

          <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE]`}>
            <div className="flex items-baseline gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="text-[36px] md:text-[44px] lg:text-[48px] font-black leading-none">02</span>
              <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-black leading-none">Xã hội học</h3>
            </div>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-[Helvetica] leading-relaxed max-w-md">
              Tìm hiểu trí tưởng tượng xã hội học, cái tôi trong tương tác xã hội (Goffman) và hiện tượng lệch chuẩn (Deviance); kết hợp với kỹ năng xác định đề tài, chiến lược và viết nghiên cứu khoa học.
            </p>
          </div>

          <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE]`}>
            <div className="flex items-baseline gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="text-[36px] md:text-[44px] lg:text-[48px] font-black leading-none">03</span>
              <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-black leading-none">Kinh tế học</h3>
            </div>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-[Helvetica] leading-relaxed max-w-md">
              Tiếp cận các khái niệm kinh tế vĩ mô và kinh tế học hành vi (Behavioral Economics); phát triển kỹ năng lập luận.
            </p>
          </div>

          <div className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE]`}>
            <div className="flex items-baseline gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="text-[36px] md:text-[44px] lg:text-[48px] font-black leading-none">04</span>
              <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-black leading-none">Triết học</h3>
            </div>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-[Helvetica] leading-relaxed max-w-md">
              Suy ngẫm về bản chất của sự hài hước (Essentialism), công lý (Justice) và đạo đức (Ethics – How to Do Good); luyện tập phản biện, phản hồi và tổng hợp lập luận để nâng cao tư duy phản biện.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-[100] bg-[#407EFF] py-14 px-4 md:py-20 md:px-6 lg:py-24 rounded-[24px] md:rounded-[32px] lg:rounded-[40px] -mt-12 md:-mt-16 lg:-mt-20">
        <div className="w-full md:w-[90%] lg:w-[78%] mx-auto text-center">
          <h2 className={`${SVNHelveticaNeueHeavy.className} mb-8 md:mb-10 lg:mb-12 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-black text-[#FFCB1F] leading-tight`}>
            SAU KHÓA HỌC,<br />
            BẠN SẼ NHẬN ĐƯỢC GÌ?
          </h2>

          <div className="bg-[#FDFFD6] rounded-[20px] md:rounded-[28px] lg:rounded-[32px] px-5 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 text-left">
            <ol className="list-decimal pl-5 md:pl-6 space-y-4 md:space-y-5 lg:space-y-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal text-[#001E7F] font-[Helvetica]">
              <li>Thành thạo kỹ năng đọc phân tích &amp; viết học thuật bằng tiếng Anh.</li>
              <li>Hoàn thiện kỹ năng lập luận, phản biện, tổng hợp thông tin.</li>
              <li>Xây dựng nền tảng nghiên cứu khoa học (tìm đề tài, lập chiến lược, viết nghiên cứu khoa học).</li>
              <li>Triển khai và trình bày Đề tài Cuối khóa về chủ đề học thuật tự chọn.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-24"></div>
      <TraiNghiemHocSinh course="college-prep"/>
      <div className="mt-20"></div>
      <DangKyTuVan/>
      <div className="mt-5"></div>
    </div>
  );
}

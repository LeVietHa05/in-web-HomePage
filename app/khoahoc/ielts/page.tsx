import Image from "next/image";
import Link from "next/link";
import { SVNHelveticaNeueHeavy } from "../../components/font";
import TraiNghiemHocSinh from "../../components/trainghiemhocsinh";
import DangKyTuVan from "../../components/dangkytuvan";

export default function IELTSHero() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className={`relative w-full bg-[#EAFDFF] pt-20 z-100 rounded-[40px] ${SVNHelveticaNeueHeavy.className} overflow-hidden`}>
        <div className="w-full px-6 lg:px-[100px] grid grid-cols-1 lg:grid-cols-[2.3fr_1fr] items-center gap-10">

          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-[#FF2B4E] font-black text-[56px] sm:text-[68px] lg:text-[80px] leading-[1.2]">
              LUYỆN THI IELTS
            </h1>

            <div className="text-[#FF2B4E] font-black text-[84px] sm:text-[100px] lg:text-[120px] leading-none">
              7.5
            </div>

            <p className="text-[#FF2B4E] text-[28px] sm:text-[32px] font-black tracking-wide leading-[1.4]">
              Listening - Speaking - Reading - Writing
            </p>

            <div className="pt-4">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3PIufEyO_LTr2-mXyw6WYgNIIOoX77iUDR7IhzrXRV8VmVg/viewform?fbclid=IwY2xjawPAgm1leHRuA2FlbQIxMABicmlkETFnYW1GY0tkalRyNjJpeUFEc3J0YwZhcHBfaWQPNTE0NzcxNTY5MjI4MDYxAAEeWuwKPgq6ZEw84-RCqF2t1ZEAWdN1JMOcKiAzt6WsU9VGKbx6KQpGDClpLp0_aem_nN7Zo1VnwPX59kn2E6Tdaw" target="_blank">
                <button className="bg-[#004DEE] text-white px-8 py-3 rounded-full font-black text-[16px] sm:text-[18px] hover:scale-105 transition">
                  ĐĂNG KÝ TƯ VẤN
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-auto h-[420px] sm:h-[520px] lg:h-[600px] flex justify-center">
            <Image src="/mentor-3.png" alt="IELTS Mentor" fill className="object-contain object-right mt-[28px]" />
          </div>
        </div>
      </div>

      <div className="bg-[#004DEE] rounded-[40px] relative z-50 w-full h-[100px] -mt-20"></div>

      <div className="w-full bg-[#F9FFE6] py-[120px] rounded-[40px] -mt-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px]">

          {/* ===== TITLE ===== */}
          <div className="text-center">
            <h2 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[60px] leading-normal pt-20`}>
              LUYỆN THI IELTS
            </h2>

            <div className="w-[280px] h-[4px] bg-[#004DEE] mx-auto mt-4" />

            <p className="mt-8 max-w-[820px] mx-auto text-[#004DEE] text-center font-['Helvetica'] text-[21px] font-normal leading-normal">
              Chương trình dành cho học sinh có nền tảng 6.0 - 6.5, hướng tới mục tiêu 7.0 - 7.5.<br />
              Học sinh được củng cố toàn diện 4 kỹ năng, đặc biệt tập trung chuyên sâu vào<br />
              Writing và Speaking - hai kỹ năng khó trong IELTS.
            </p>
          </div>

          {/* ===== INFO GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-[120px] text-center">

            {/* ĐỐI TƯỢNG */}
            <div className="flex flex-col items-center gap-8">
              <h3 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[35.37px] font-[900] leading-normal`}>
                ĐỐI TƯỢNG
              </h3>

              <div className="w-[120px] h-[120px] relative">
                <Image src="/doituong.svg" alt="Đối tượng" fill className="object-contain" />
              </div>

              <p className="text-[#004DEE] font-[Montserrat] text-[28px] font-semibold leading-normal">
                Đầu ra IELTS 7.5
              </p>
            </div>

            {/* THỜI LƯỢNG */}
            <div className="flex flex-col items-center gap-8">
              <h3 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[35.37px] font-[900] leading-normal`}>
                THỜI LƯỢNG
              </h3>

              <div className="w-[120px] h-[120px] relative">
                <Image src="/thoiluong.svg" alt="Thời lượng" fill className="object-contain" />
              </div>

              <p className="text-[#004DEE] font-[Montserrat] text-[28px] font-semibold leading-normal">
                2 - 3 Tháng
              </p>
            </div>

            {/* HỌC PHÍ */}
            <div className="flex flex-col items-center gap-8">
              <h3 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[35.37px] font-[900] leading-normal`}>
                HỌC PHÍ
              </h3>

              <div className="w-[120px] h-[120px] relative">
                <Image src="/hocphi.svg" alt="Học phí" fill className="object-contain" />
              </div>

              <p className="text-[#004DEE] font-[Montserrat] text-[28px] font-semibold leading-normal">
                Liên hệ
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className={`text-[79px] text-[#407EFF] text-center p-5 ${SVNHelveticaNeueHeavy.className}`}>Nội Dung</div>

      <div className="max-w-[1440px] mx-auto bg-[#EAFDFF] rounded-[40px] px-6 sm:px-10 lg:px-[120px] py-24 flex flex-col gap-[60px]">
        {/* ===== ROW 1 ===== */}
        <div className="flex justify-between items-start">
          {/* TEXT */}
          <div className="w-[48%] flex flex-col gap-4">
            <div className="flex items-end gap-4">
              <span className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[79px] leading-none mb-[8px]`}>10</span>
              <span className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[39px] whitespace-nowrap`}>
                BUỔI HỌC NHÓM
              </span>
            </div>
            <p className="w-full text-[#004DEE] text-[16px] font-['Helvetica']">
              Học sinh sẽ được rèn luyện toàn diện cả 4 kỹ năng để củng cố nền tảng vững chắc.
            </p>
          </div>

          {/* LINE */}
          <div className="w-[48%] flex items-end mt-[60px] px-1 ">
            <div className="w-full h-[2px] bg-[#004DEE]" />
          </div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="flex justify-between items-start">
          {/* LINE */}
          <div className="w-[48%] flex items-end mt-[60px] px-1">
            <div className="w-full h-[2px] bg-[#004DEE]" />
          </div>

          {/* TEXT */}
          <div className="w-[48%] flex flex-col gap-4">
            <div className="flex items-end gap-4">
              <span className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[79px] leading-none mb-[8px]`}>12</span>
              <span className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[39px] whitespace-nowrap`}>
                BUỔI HỌC 1-1
              </span>
            </div>
            <p className="w-full text-[#004DEE] text-[16px] font-['Helvetica']">
              Bao gồm 6 buổi Writing và 6 buổi Speaking, cá nhân hoá lộ trình học theo năng lực và nhu cầu từng học sinh, tập trung chuyên sâu để nhanh chóng cải thiện 2 kỹ năng khó.
            </p>
          </div>
        </div>

        {/* ===== ROW 3 ===== */}
        <div className="flex justify-between items-start">
          {/* TEXT */}
          <div className="w-[48%] flex flex-col gap-4 -mt-[100px]">
            <div className="flex items-end gap-4 justify-right">
              <span className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[79px] leading-none mb-[8px]`}>05</span>
              <span className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[39px] whitespace-nowrap`}>
                BUỔI TEST
              </span>
            </div>
            <p className="w-full text-[#004DEE] text-[16px] font-['Helvetica']">
              Test 4 kỹ năng mô phỏng theo đề thi thật. Các buổi test được tổ chức theo từng giai đoạn nhằm đánh giá kịp thời năng lực học viên và điều chỉnh chương trình học phù hợp.
            </p>
          </div>

          {/* LINE */}
          <div className="w-[48%] flex items-center px-1">
            <div className="w-full h-[2px] bg-[#004DEE]" />
          </div>
        </div>
      </div>

      <div className="w-full py-12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px] flex flex-col md:flex-row justify-center gap-30">

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3PIufEyO_LTr2-mXyw6WYgNIIOoX77iUDR7IhzrXRV8VmVg/viewform?fbclid=IwY2xjawPAgm1leHRuA2FlbQIxMABicmlkETFnYW1GY0tkalRyNjJpeUFEc3J0YwZhcHBfaWQPNTE0NzcxNTY5MjI4MDYxAAEeWuwKPgq6ZEw84-RCqF2t1ZEAWdN1JMOcKiAzt6WsU9VGKbx6KQpGDClpLp0_aem_nN7Zo1VnwPX59kn2E6Tdaw" target="_blank" rel="noopener noreferrer" className="bg-[#004DEE] w-[35%] text-[#FDFFD6] font-['Helvetica'] text-[28px] font-bold px-[48px] py-[18px] rounded-full hover:scale-105 transition-all flex items-center justify-center">ĐĂNG KÝ TEST</a>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3PIufEyO_LTr2-mXyw6WYgNIIOoX77iUDR7IhzrXRV8VmVg/viewform?fbclid=IwY2xjawPAgm1leHRuA2FlbQIxMABicmlkETFnYW1GY0tkalRyNjJpeUFEc3J0YwZhcHBfaWQPNTE0NzcxNTY5MjI4MDYxAAEeWuwKPgq6ZEw84-RCqF2t1ZEAWdN1JMOcKiAzt6WsU9VGKbx6KQpGDClpLp0_aem_nN7Zo1VnwPX59kn2E6Tdaw" target="_blank" rel="noopener noreferrer" className="bg-[#004DEE] w-[35%] text-[#FDFFD6] font-['Helvetica'] text-[28px] font-bold px-[48px] py-[18px] rounded-full hover:scale-105 transition-all flex items-center justify-center">ĐĂNG KÝ TƯ VẤN</a>

        </div>
      </div>

      <div className="mt-30"></div>
      <TraiNghiemHocSinh course="ielts"/>
      <div className="mt-20"></div>
      <DangKyTuVan/>
      <div className="mt-5"></div>
    </div>
  );
}
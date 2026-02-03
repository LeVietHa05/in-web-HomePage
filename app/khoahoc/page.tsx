"use client";

import Image from "next/image";
import Link from "next/link";
import { SVNHelveticaNeueHeavy } from "../components/font";
import ChonKhoaHoc from "../components/chonkhoahoc";
import TraiNghiemHocSinh from "../components/trainghiemhocsinh";
import BaiVietLienQuan from "../components/baivietlienquan";

export default function KhoaHocBoTro() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="relative max-w-[1440px] mx-auto mt-[40px] h-[600px] lg:h-[600px] overflow-hidden z-10">
        <Image src="/home-bg.png" alt="Khóa học bổ trợ" fill priority className="object-cover" />

        <div className="relative z-10 max-w-[1440px] mx-auto h-full lg:px-[120px] flex items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-12 items-center w-full">
            <div>
              <h1 className={`${SVNHelveticaNeueHeavy.className} text-[#FFF175] text-[36px] md:text-[52px] lg:text-[72px] font-black leading-tight mb-10 px-2`}>
                KHÓA HỌC BỔ TRỢ<br />TẠI INCEPTION
              </h1>

              <div className="flex flex-wrap justify-center gap-6 max-w-[520px]">
                <Link href="/khoahoc/college-prep" className="px-8 py-3 rounded-full bg-[#407EFF] text-[#FEFFB7] text-[18px] font-semibold font-montserrat shadow-[1.864px_1.864px_3.729px_rgba(0,0,0,0.7)] hover:scale-105 transition">
                  KHÓA COLLEGE PREP
                </Link>

                <Link href="/khoahoc/ielts" className="px-8 py-3 rounded-full bg-[#407EFF] text-[#FEFFB7] text-[18px] font-semibold font-montserrat shadow-[1.864px_1.864px_3.729px_rgba(0,0,0,0.7)] hover:scale-105 transition">
                  LUYỆN THI IELTS
                </Link>

                <Link href="/khoahoc/creative-writing" className="px-8 py-3 rounded-full bg-[#407EFF] text-[#FEFFB7] text-[18px] font-semibold font-montserrat shadow-[1.864px_1.864px_3.729px_rgba(0,0,0,0.7)] hover:scale-105 transition">
                  KHÓA CREATIVE WRITING
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[499px] hidden lg:block">
              <Image src="/mentor-2.png" alt="Mentor Inception" fill className="object-contain object-right" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#BFE4FF] rounded-full lg:rounded-[40px] mx-auto max-w-[1440px] py-6 lg:py-16 z-100 -mt-[60px]">
        <h2 className={`${SVNHelveticaNeueHeavy.className} text-center text-[#3253BC] text-[32px] lg:text-[60px] font-black leading-normal`}>
          ĐỘI NGŨ GIẢNG VIÊN
        </h2>
      </div>
      <div className="w-full bg-[#3253BC] py-30 -mt-20">
        <div className="max-w-[1200px] mx-auto px-2 lg:px-6 flex flex-col items-center gap-14 overflow-hidden">

          <div className="flex flex-row lg:items-center lg:justify-center -ml-12 lg:ml-0 lg:px-10 -space-x-36">
            <Image src="/mentor-1.png" alt="Mentor 1" width={386} height={517} className="object-contain w-3/5 lg:w-auto" />
            <Image src="/mentor-2.png" alt="Mentor 2" width={386} height={517} className="object-contain w-3/5 lg:w-auto" />
            <Image src="/mentor-3.png" alt="Mentor 3" width={386} height={517} className="object-contain w-3/5 lg:w-auto" />
          </div>

          <div className="w-full bg-[#ADDDFF] px-10 py-8 -mt-25 text-[#004DEE] text-base lg:text-[20px] font-[700] text-justify leading-normal font-['Helvetica']">
            Đội ngũ giảng viên của Inception là những chuyên gia giàu kinh nghiệm, từng dẫn dắt nhiều học sinh chinh phục thành công học bổng tại các trường đại học hàng đầu thế giới. Với sự đồng hành toàn diện – từ củng cố nền tảng học thuật đến xây dựng chiến lược cá nhân hóa – Inception giúp học sinh tự tin vươn tới những mục tiêu du học cao nhất.
          </div>

        </div>
      </div>


      <ChonKhoaHoc/>
      <TraiNghiemHocSinh course="khoa-hoc"/>
      <BaiVietLienQuan/>
    </div>
  );
}

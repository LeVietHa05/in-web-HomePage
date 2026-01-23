"use client";

import Image from "next/image";
import Link from "next/link";
import BaiVietNoiBat from "../components/baivietnoibat";
import TatCaBaiViet from "../components/tatcabaiviet";
import { SVNHelveticaNeueHeavy } from "../components/font";

const categories = [
  { title: "Bậc Đại Học", image: "/bac-dai-hoc.jpg" },
  { title: "Bậc Cao Học", image: "/bac-cao-hoc.jpg" },
  { title: "Viết luận", image: "/viet-luan.jpg" },
  { title: "Hoạt Động Ngoại Khóa", image: "/ngoai-khoa.jpg" },
  { title: "Khóa Học Bổ Trợ", image: "/khoa-hoc.jpg" },
  { title: "Hoạt Động Chuyên Ngành", image: "/chuyen-nganh.jpg" },
];

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen max-h-[637px]">
        <Image
          src="/tintuc-bg.png"
          alt="Tin tức"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-10 left-4 sm:bottom-10 sm:left-10">
          <Image
            src="/tintuc-text.svg"
            alt="Tin tức"
            width={300}
            height={300}
            className="w-[180px] sm:w-[240px] lg:w-[300px]"
          />
        </div>
      </div>

      {/* ================= BÀI VIẾT NỔI BẬT ================= */}
      <BaiVietNoiBat />

      {/* ================= CHUYÊN MỤC ================= */}
      <div className="relative -mt-28 z-30">
        <div className="bg-[#BFE4FF] rounded-[40px] pt-40 pb-16">

          <h2
            className={`${SVNHelveticaNeueHeavy.className} text-center mb-14`}
            style={{
              color: "#001E7F",
              fontSize: "clamp(32px, 6vw, 64px)",
              fontWeight: 900,
            }}
          >
            CHUYÊN MỤC
          </h2>

          <div
            className="
              max-w-[1100px]
              mx-auto
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-x-10
              gap-y-12
              px-6
            "
          >
            {categories.map((item, index) => (
              <div key={index}>
                <div className="relative w-full h-[180px] sm:h-[200px] rounded-[18px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p
                  className={`${SVNHelveticaNeueHeavy.className} mt-3`}
                  style={{
                    color: "#004DEE",
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    fontWeight: 900,
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= TẤT CẢ BÀI VIẾT ================= */}
      <TatCaBaiViet />

      {/* ================= CTA ================= */}
      <div className="w-full bg-[#181A4D] -mt-20 py-30 pb-10 z-10 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 px-6">

          {[
            { label: "TƯ VẤN ĐẠI HỌC", href: "/tu-van-dai-hoc" },
            { label: "TƯ VẤN CAO HỌC", href: "/tu-van-cao-hoc" },
            { label: "TƯ VẤN VIẾT LUẬN", href: "/tu-van-viet-luan" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`${SVNHelveticaNeueHeavy.className}
                px-8 py-3 rounded-full
                bg-[#004DEE]
                transition-all duration-300
                hover:bg-[#003BB5] hover:scale-105
                active:scale-95
                text-center
              `}
              style={{
                color: "#FDFFD6",
                fontSize: "clamp(18px, 2.5vw, 23px)",
                fontWeight: 900,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

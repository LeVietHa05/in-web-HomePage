"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navitems = [
  { link: "/bacdaihoc", text: "BẬC ĐẠI HỌC" },
  { link: "/baccaohoc", text: "BẬC CAO HỌC" },
  { link: "/vietluan", text: "VIẾT LUẬN" },
  { link: "/khoahoc", text: "KHÓA HỌC" },
  { link: "/hoatdongngoaikhoa", text: "HOẠT ĐỘNG NGOẠI KHÓA" },
  { link: "/hoatdongchuyennganh", text: "HOẠT ĐỘNG CHUYÊN NGÀNH" },
  { link: "/tintuc", text: "TIN TỨC" },
];

const navClass = (active: boolean) =>
  `relative pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-white after:transition-transform after:duration-300 after:origin-left ${
    active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
  }`;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[1000] bg-[#001E7F] rounded-b-lg lg:rounded-b-4xl">
      <div className="max-w-[1440px] mx-auto p-2 lg:px-5 lg:py-4 flex items-center justify-between text-white font-bold font-[Helvetica]">

        <Link href="/">
          <Image src="/logo.png" alt="logo inception" width={140} height={120} />
        </Link>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center space-x-6 translate-y-1/7">
          {navitems.map((e, i) => (
            <Link key={i} href={e.link} className={navClass(pathname.startsWith(e.link))}>
              {e.text}
            </Link>
          ))}
        </div>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3PIufEyO_LTr2-mXyw6WYgNIIOoX77iUDR7IhzrXRV8VmVg/viewform" target="_blank" className="hidden lg:block">
          <div className="bg-[#407EFF] px-5 py-3 rounded-full border border-white hover:bg-white hover:text-[#001E7F] transition-all">
            TƯ VẤN NGAY
          </div>
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl"> ☰ </button>
      </div>

      {/* MOBILE */}
      {open && (
        <div className="lg:hidden bg-[#001E7F] px-6 pb-6 flex flex-col gap-4 text-white font-bold">
          {navitems.map((e, i) => (
            <Link key={i} href={e.link} onClick={() => setOpen(false)} className={navClass(pathname.startsWith(e.link))}>
              {e.text}
            </Link>
          ))}

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3PIufEyO_LTr2-mXyw6WYgNIIOoX77iUDR7IhzrXRV8VmVg/viewform" target="_blank">
            <div className="mt-4 bg-[#407EFF] text-center py-3 rounded-full border border-white hover:bg-white hover:text-[#001E7F] transition-all">
              TƯ VẤN NGAY
            </div>
          </a>
        </div>
      )}
    </nav>
  );
}

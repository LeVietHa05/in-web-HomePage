"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';
const navitems = [
    {
        link: "/bacdaihoc",
        text: "BẬC ĐẠI HỌC"
    },
    {
        link: "/baccaohoc",
        text: "BẬC CAO HỌC"
    },
    {
        link: "/vietluan",
        text: "VIẾT LUẬN"
    },
    {
        link: "/khoahoc",
        text: "KHÓA HỌC"
    },
    {
        link: "/hoatdongngoaikhoa",
        text: "HOẠT ĐỘNG NGOẠI KHÓA"
    },
    {
        link: "/hoatdongchuyennganh",
        text: "HOẠT ĐỘNG CHUYÊN NGÀNH"
    },
    {
        link: "/tintuc",
        text: "TIN TỨC"
    },
]

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="w-screen fixed top-0 z-1000 bg-[#001E7F] rounded-b-4xl p-5">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center text-white font-bold font-[Helvetica] *:transition-all *:duration-300" >
                <Image src={'/logo.png'} alt="logo inception" width={154} height={140} ></Image>
                <div className="space-x-4 ">
                    {navitems.map((each, i) => {
                        return (
                            <Link className={`${pathname.startsWith(each.link) ? "border-b-2" : "border-b-0"} border-white hover:text-[#FFF175]"`} href={each.link} key={i}>
                                {each.text}
                            </Link>
                        )
                    })}
                </div>
                <div className="bg-[#407EFF] tracking-wide p-3 rounded-full border-1 border-white hover:bg-white border-[#001E7F] hover:text-[#001E7F] cursor-pointer">
                    TƯ VẤN NGAY
                </div>
            </div>
        </nav>
    )
}
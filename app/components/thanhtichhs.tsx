
import { SVNHelveticaNeueHeavy } from "./font"
import CardHS from "./CardHS"

const datahs = [
    { name: "Trần Đăng Khôi", imglink: "/hs/trandangkhoi.png", school: "Massachusetts Institute of Technology", text: "Học Bổng Toàn Phần" },
    { name: "Lã Châu Giang", imglink: "/hs/lachaugiang.png", school: "Brown University", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
    { name: "", imglink: "", school: "", text: "" },
]

export default function ThanhtichHS() {
    return (
        <div className="bg-[#001E7F] min-h-[1600px] w-full rounded-[60px] py-4 px-40 -mt-24 relative z-2 overflow-hidden">
            <div className="absolute w-[1600px] h-40 border-6 border-[#FEFFB7] rotate-5 top-50 -left-20">

            </div>

            <div className={`${SVNHelveticaNeueHeavy.className} font-black absolute w-[1800px] h-40 bg-[#EAFDFF] -rotate-5 top-50 -left-20 text-center text-[60px] uppercase text-[#004DEE] flex items-center gap-4`}>
                <span className="outline-text"> ch HọC SINH </span>
                <span> THÀNH TÍCH HọC SINH</span>
                <span className="outline-text"> THÀNH TÍCH </span>
            </div>

            <div className="absolute top-120 ml-10  grid grid-cols-2 gap-50 w-fit mx-auto">

                <CardHS name="Trần Đăng Khôi" imglink="/hs/tranquangkhoi.png" school="Massachusetts Institute of Technology" text="Học Bổng Toàn Phần" />
                <CardHS name="Trần Đăng Khôi" imglink="/hs/tranquangkhoi.png" school="Massachusetts Institute of Technology" text="Học Bổng Toàn Phần" />
            </div>
        </div>
    )
}
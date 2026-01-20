import Image from "next/image";
import Thanhtich from "./components/thanhtich";
import ThanhtichHS from "./components/thanhtichhs";
import Dichvucuachungtoi from "./components/home-dichvu"
import Doingumentor from "./components/home-mentor";
import TrainghiemHs from "./components/home-trainghiem";
import Dangkytuvan from "./components/dangkytuvan";


const thanhtichData = [
  {
    name: "Massachusetts Institute of Technology",
    imageLink: "/mit.png"
  }, {
    name: "Stanford University",
    imageLink: "/stanford.png"
  }, {
    name: "Duke University",
    imageLink: "/duke.png"
  }, {
    name: "Cornell University",
    imageLink: "/cornell.png"
  }, {
    name: "Johns Hopkins University",
    imageLink: "/johnshopkins.png"
  }, {
    name: "Northwestern University",
    imageLink: "/northwestern.png"
  }, {
    name: "University of Chicago",
    imageLink: "/Chicago.png"
  }, {
    name: "Brown University",
    imageLink: "/Brown.png"
  }, {
    name: "University of Melbourne",
    imageLink: "/Melbourne.png"
  }, {
    name: "University of Sydney",
    imageLink: "/Sydney.png"
  }, {
    name: "University of Queensland",
    imageLink: "/Queensland.png"
  }, {
    name: "University of Adelaide",
    imageLink: "/Adelaide1.png"
  }, {
    name: "University of Toronto",
    imageLink: "/Toronto.png"
  }, {
    name: "University of Waterloo",
    imageLink: "/Waterloo.png"
  }, {
    name: "University of British Columbia",
    imageLink: "/Columbia.png"
  }, {
    name: "University of Adelaide",
    imageLink: "/Adelaide2.png"
  },
]

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      {/* header */}
      <div className="relative h-screen max-h-[840px] w-full z-0">
        <Image src={'/home-bg.png'} fill alt=""></Image>
        <div className="relative top-1/2 left-1/2 -translate-1/2 flex w-fit">
          <Image src={'/home-text.svg'} alt="text" width={420} height={438}></Image>
          <div className="flex -space-x-50 items-end">
            <div className="shrink-0">
              <Image src={'/mentor-1.png'} alt="text" width={438} height={657}></Image>
            </div>
            <div className="shrink-0">
              <Image src={'/mentor-2.png'} alt="text" width={433} height={580}></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ADDDFF] rounded-[60px] w-full flex justify-center gap-10 items-start p-12 px-20 font-[Helvetica] font-bold text-2xl h-64 -mt-24 z-2 relative">
        <div className="bg-[#407EFF] text-[#FDFFD6] rounded-full px-10 py-4"> TƯ VẤN ĐẠI HỌC</div>
        <div className="bg-[#407EFF] text-[#FDFFD6] rounded-full px-10 py-4"> TƯ VẤN CAO HỌC</div>
        <div className="bg-[#407EFF] text-[#FDFFD6] rounded-full px-10 py-4"> TƯ VẤN NGOẠI KHOÁ</div>
      </div>

      {/* thanh tich  */}
      <Thanhtich data={thanhtichData} />

      {/* Thanh tich hoc sinh */}
      <ThanhtichHS />
      <div className="relative  z-4 -mt-15 w-full ">
        <div className="absolute -top-5 z-4 w-full h-30 border-y-6 border-[#FFCB1F] skew-y-3 "></div>
        <div className={`absolute -top-5 z-4 w-full h-30 bg-[#ADDDFF] -skew-y-3  `}> </div>
      </div>
      {/* dich vu cua chung toi */}
      <Dichvucuachungtoi />

      {/* doingu mentor  */}
      <Doingumentor imglink="/mentor-2.png" color1="#ADDDFF" color2="#001E7F" />

      {/* Trai nghiem hoc sinh */}
      <TrainghiemHs type="hocsinh" />

      <div className="my-12">

      </div>

      {/* Dang ky tu van */}
      <Dangkytuvan />

    </div>
  );
}

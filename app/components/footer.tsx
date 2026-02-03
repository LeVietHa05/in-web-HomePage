
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="mt-20 bg-white w-full  relative z-2 text-black px-2">
            <div className="max-w-[1080px] mx-auto py-4 lg:py-12 flex justify-between text-xs font-light">
                <div className="text-xs">
                    <div >
                        <Image src={'/logo-black.svg'} alt="logo" width={190} height={62}></Image>
                    </div>
                    <div className="flex items-center justify-start leading-[16px] gap-2 pt-4">
                        <Image className="pb-1" src={'/icons/home.svg'} alt="home logo" width={16} height={16}></Image>
                        Tầng 4, số 4, ngõ 48 Nguyễn Chánh,  Yên Hòa, Hà Nội
                    </div>
                    <div className="flex items-center justify-start leading-[16px] gap-2 pt-2">
                        <Image className="pb-1" src={'/icons/phone-call.svg'} alt="home logo" width={16} height={16}></Image>
                        <a href="tel:0947.995.245">0947.995.245</a>
                    </div>
                    <div className="flex items-center justify-start leading-[16px] gap-2 pt-2">
                        <Image className="" src={'/icons/email-unread.svg'} alt="home logo" width={16} height={16}></Image>
                        <a href={'mailto:info@i-inception.com'}> info@i-inception.com</a>
                    </div>
                </div>

                <div className="space-y-4 *:hover:underline hidden lg:block">
                    <div className="text-sm text-[#032852] font-semibold">Dịch vụ tư vấn</div>
                    <div>
                        <Link href={'/bacdaihoc'}>Bậc Đại Học</Link>
                    </div>
                    <div>
                        <Link href={'/baccaohoc'}>Bậc Cao Học</Link>
                    </div>
                    <div>
                        <Link href={'/vietluan'}>Viết Luận</Link>
                    </div>
                    <div>
                        <Link href={'/hoatdongngoaikhoa'}>Hoạt Động Ngoại Khóa</Link>
                    </div>
                    <div>
                        <Link href={'/hoatdongchuyennganh'}>Hoạt Động Chuyên Ngành</Link>
                    </div>
                </div>

                <div className="space-y-4 *:hover:underline  hidden lg:block">
                    <div className="text-sm text-[#032852] font-semibold">Khóa học bổ trợ</div>
                    <div>
                        <Link href={''}>Luyện Thi IELTS</Link>
                    </div>
                    <div>
                        <Link href={''}>College Prep</Link>
                    </div>
                    <div>
                        <Link href={''}>Creative Writing</Link>
                    </div>
                </div>

                <div className="space-y-4 *:hover:underline">
                    <div className="text-sm text-[#032852] font-semibold">Theo dõi ngay tại</div>
                    <div className="flex">
                        <Link href={''}>
                            <Image className="h-6" src={'/icons/facebook.svg'} alt="" width={25} height={25}></Image>
                        </Link>
                        <Link href={''} >
                            <Image className="h-6" src={'/icons/tiktok.svg'} alt="" width={25} height={25}></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
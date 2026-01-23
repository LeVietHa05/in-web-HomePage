import Image from "next/image";
import Link from "next/link";

export default function FloatingButtons() {
  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-4">
      
      {/* PHONE */}
      <Link
        href="tel:0947995245"
        className="w-[48px] h-[48px] rounded-xl overflow-hidden hover:scale-105 transition"
      >
        <Image
          src="/phone-1.png"
          alt="Call"
          width={48}
          height={48}
          className="object-contain"
        />
      </Link>

      {/* MESSENGER */}
      <Link
        href="https://m.me/yourpage"
        target="_blank"
        className="w-[48px] h-[48px] rounded-xl overflow-hidden  hover:scale-105 transition"
      >
        <Image
          src="/messenger-1.png"
          alt="Messenger"
          width={48}
          height={48}
          className="object-contain"
        />
      </Link>

    </div>
  );
}

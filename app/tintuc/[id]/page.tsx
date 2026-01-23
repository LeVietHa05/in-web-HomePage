export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SVNHelveticaNeueHeavy } from "../../components/font";

/* ===== TYPES ===== */
type Section =
  | { type: "heading"; content: string }
  | { type: "text"; content: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string };

interface Post {
  breadcrumb: string;
  title: string;
  author: string;
  avatar: string;
  sections: Section[];
}

interface Props {
  params: Promise<{ id: string }>;
}

/* ===== PAGE ===== */
export default async function BaiVietPage({ params }: Props) {
  const { id } = await params;

  const filePath = path.join(process.cwd(), "data", "posts", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const post: Post = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden">
      {/* ================= HEADER (FULL WIDTH) ================= */}
      <div
        className="
          relative w-full
          h-[240px]
          sm:h-[300px]
          md:h-[420px]
          lg:h-[520px]
          xl:h-[637px]
        "
      >
        <Image
          src="/tintuc-bg.png"
          fill
          alt=""
          priority
          className="object-cover"
        />

        <div
          className="
            absolute bottom-15 left-4
            sm:left-6
            md:left-10
            text-[#FEFFE6]
            text-[13px]
            sm:text-[16px]
            md:text-[20px]
            lg:text-[24px]
            xl:text-[32px]
          "
        >
          {post.breadcrumb}
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="relative -mt-12 z-40">
        {/* BLUE STRIP */}
        <div
          className="
            mx-auto max-w-[1440px]
            bg-[#004DEE]
            h-[90px]
            sm:h-[110px]
            md:h-[136px]
            rounded-[28px]
            sm:rounded-[36px]
            md:rounded-[40px]
          "
        />

        {/* CONTENT CARD */}
        <div
          className="
            mx-auto
            max-w-[1440px]
            bg-[#FDFFD6]
            rounded-[36px]
            md:rounded-[60px]
            -mt-[70px]
            md:-mt-[96px]
            py-8
            sm:py-10
            md:py-14
            px-5
            sm:px-8
            md:px-10
            lg:px-16
          "
        >
          {/* ===== TITLE ===== */}
          <h1
            className={`
              ${SVNHelveticaNeueHeavy.className}
              text-center
              text-[#001E7F]
              font-black
              whitespace-pre-line
              text-[22px]
              sm:text-[26px]
              md:text-[32px]
              lg:text-[36px]
              xl:text-[40px]
              mb-6
              sm:mb-8
              md:mb-12
            `}
          >
            {post.title}
          </h1>

          {/* ===== CONTENT WRAPPER ===== */}
          <div
            className="
              max-w-[1100px]
              mx-auto
              text-[#001E7F]
              text-[15px]
              sm:text-[16px]
              md:text-[18px]
              lg:text-[20px]
              xl:text-[24px]
            "
          >
            {/* AUTHOR */}
            <p className="mb-6">
              Được viết bởi: <strong>{post.author}</strong>
            </p>

            {/* AVATAR */}
            <div
              className="
                mb-10
                w-[100px] h-[100px]
                sm:w-[120px] sm:h-[120px]
                md:w-[160px] md:h-[160px]
                lg:w-[200px] lg:h-[200px]
                xl:w-[225px] xl:h-[225px]
              "
            >
              <Image
                src={post.avatar}
                width={225}
                height={225}
                alt=""
                className="rounded-full object-cover"
              />
            </div>

            {/* ===== SECTIONS ===== */}
            {post.sections.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="
                      mt-8
                      md:mt-10
                      font-bold
                      text-[17px]
                      sm:text-[18px]
                      md:text-[22px]
                      lg:text-[24px]
                    "
                  >
                    {section.content}
                  </h2>
                );
              }

              if (section.type === "text") {
                return (
                  <p
                    key={index}
                    className="mt-5 md:mt-7 leading-relaxed"
                  >
                    {section.content}
                  </p>
                );
              }

              if (section.type === "list") {
                return (
                  <ul
                    key={index}
                    className="
                      list-disc
                      pl-5
                      sm:pl-6
                      md:pl-10
                      mt-5
                      md:mt-7
                    "
                  >
                    {section.items.map((item, i) => (
                      <li key={i} className="mt-2 md:mt-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (section.type === "image") {
                return (
                  <div
                    key={index}
                    className="
                      relative
                      my-8
                      md:my-10
                      mx-auto
                      w-full
                      max-w-full
                      sm:max-w-[640px]
                      md:max-w-[720px]
                      lg:max-w-[900px]
                      xl:max-w-[954px]
                      aspect-[954/510]
                    "
                  >
                    <Image
                      src={section.src}
                      fill
                      alt=""
                      className="object-cover rounded-lg md:rounded-xl"
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>

      {/* ================= FOOTER STRIP ================= */}
      <div className="w-full bg-[#181A4D] -mt-16 md:-mt-20 py-10 md:py-14" />
    </div>
  );
}






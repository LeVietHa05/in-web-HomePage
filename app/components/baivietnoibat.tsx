"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SVNHelveticaNeueHeavy, montserrat } from "./font";
import { postsMeta1 } from "@/data/postsMeta1";

/* ===== CONFIG ===== */
const GAP = 24;
const START_INDEX = 1;
const AUTO_PLAY_INTERVAL = 5000;

export default function FeaturedPostsSlider() {
  const router = useRouter();
  const posts = postsMeta1;
  const track = [...posts, ...posts, ...posts];

  const sliderRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(START_INDEX);
  const [animate, setAnimate] = useState(true);
  const [cardWidth, setCardWidth] = useState(450);
  const [containerWidth, setContainerWidth] = useState(0);

  /* ===== RESPONSIVE CARD WIDTH ===== */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w <= 768) setCardWidth(w - 48);
      else if (w <= 1024) setCardWidth(360);
      else setCardWidth(450);

      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const STEP = cardWidth + GAP;

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => prev + 1);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  /* ===== LOOP FIX ===== */
  useEffect(() => {
    if (active >= posts.length * 2) {
      setTimeout(() => {
        setAnimate(false);
        setActive(START_INDEX);
      }, 500);
    }

    if (active <= 0) {
      setTimeout(() => {
        setAnimate(false);
        setActive(posts.length);
      }, 500);
    }
  }, [active, posts.length]);

  useEffect(() => {
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  return (
    <div className="relative -mt-[40px] z-40">
      {/* BLUE TOP */}
      <div className="bg-[#004DEE] h-[100px] md:h-[136px] rounded-[32px] md:rounded-[40px]" />

      {/* YELLOW CONTENT */}
      <div className="bg-[#FDFFD6] rounded-[32px] md:rounded-[60px] -mt-[80px] md:-mt-[80px] py-10 md:py-14 overflow-hidden">
        {/* TITLE */}
        <h2 className={`${SVNHelveticaNeueHeavy.className} text-center text-[#004DEE] text-[24px] sm:text-[28px] md:text-[36px] xl:text-[42px] font-black mb-8 md:mb-12`}>
          BÀI VIẾT NỔI BẬT
        </h2>

        {/* SLIDER */}
        <div ref={sliderRef} className="overflow-hidden">
          <div
            className={`flex ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              gap: GAP,
              transform: `translateX(${-active * STEP + containerWidth / 2 - cardWidth / 2}px)`,
            }}
          >
            {track.map((post, index) => {
              const isActive = index === active;

              return (
                <div
                  key={`${post.id}-${index}`}
                  onClick={() => router.push(`/tintuc/${post.id}`)}
                  style={{ width: cardWidth }}
                  className={`flex-shrink-0 rounded-2xl bg-white cursor-pointer transition-opacity duration-300 hover:opacity-80  ${isActive ? "opacity-100" : "opacity-90"}`}
                >
                  {/* IMAGE */}
                  <div className="relative h-[200px] md:h-[260px] xl:h-[280px] rounded-t-2xl overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>


                  {/* TEXT */}
                  <div className="bg-[#EAFDFF] p-4 md:p-5 rounded-b-2xl">
                    <h3 className={`${SVNHelveticaNeueHeavy.className} text-[#004DEE] text-[16px] md:text-[20px] xl:text-[24px] font-black line-clamp-2 min-h-[48px]`}>
                      {post.title}
                    </h3>

                    <p className={`${montserrat.className} mt-2 text-[#004DEE] text-[11px] md:text-[12px] line-clamp-2 min-h-[32px]`}>
                      {post.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOT */}
        <div className="flex justify-center gap-3 mt-6 md:mt-8">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(START_INDEX + index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${(active - START_INDEX) % posts.length === index ? "bg-[#004DEE]" : "bg-[#BFD6FF]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

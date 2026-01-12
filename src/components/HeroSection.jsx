import React from "react";

import banner from "../assets/hero/banner.jpg";
import ad1 from "../assets/hero/bags.jpeg";
import ad2 from "../assets/hero/laptops.webp";
import ad3 from "../assets/hero/men_model.webp";
import ad4 from "../assets/hero/women_models.webp";
import ad5 from "../assets/hero/mobiles.png";
import ad6 from "../assets/hero/sunglass2.webp";
import ad7 from "../assets/hero/women_shoes.webp";
import ad8 from "../assets/hero/men_shoes.webp";

const ads = [ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8];

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* ===== HERO BANNER ===== */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={banner}
          alt="Main Banner"
          className="w-full h-[320px] md:h-[400px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
          <div className="px-10 max-w-xl">
            <span className="inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
              New Collection
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Fabric & Suits
            </h1>

            <p className="text-gray-200 mt-3 text-sm md:text-base">
              Premium fashion crafted for elegance, comfort and style.
            </p>

            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-semibold transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* ===== SMALL IMAGE TABS ===== */}
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 h-150">
        {ads.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer aspect-[4/3]"
          >
            <img
              src={img}
              alt={`ad-${index}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;

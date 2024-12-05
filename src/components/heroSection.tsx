"use client"
import { useState } from "react";
import { Apple } from "lucide-react";
import Image from "next/image";
import heroImage1 from "../../public/hero_endframe__cvklg0xk3w6e_large 2.png";
import { FaArrowRight } from "react-icons/fa6";

export default function MainCarousel() {
  const [currentSlide] = useState(0);

  const slides = [
    {
      title: "iPhone 14 Series",
      discount: "Up to 10%",
      type: "off Voucher",
      image: "/iphone-14.png",
      logo: Apple,
    },
  ];
  return (
    <div className="relative bg-black text-white rounded-lg overflow-hidden max-w-7xl mx-auto px-4">
      <div className="p-12 flex items-center justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Apple className="h-8 w-8" />
            <span className="text-xl">{slides[currentSlide].title}</span>
          </div>
          <h2 className="text-5xl font-bold">
            {slides[currentSlide].discount}
            <br />
            {slides[currentSlide].type}
          </h2>
          <button className="text-white text-lg underline flex gap-1">
            Shop Now
            <FaArrowRight className="pt-2 text-2xl" />
          </button>
        </div>
        <div className="w-1/2">
          <Image
            src={heroImage1}
            alt="iPhone 14"
            className="w-full h-auto"
            height={300}
            width={300}
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full hover:bg-red-600 hover:border hover:border-white ${
              currentSlide === index ? "bg-white" : "bg-gray-500" }`}
          />
        ))}
      </div>
    </div>
  );
}
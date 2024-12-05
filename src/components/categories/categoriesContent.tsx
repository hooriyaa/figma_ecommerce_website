import Image from "next/image";
import React from "react";
import category1 from "../../../public/category1.png";
import category2 from "../../../public/category2.png";
import category3 from "../../../public/category3.png";
import category4 from "../../../public/category4.png";
import category5 from "../../../public/category5.png";
import category6 from "../../../public/category6.png";

const CategoriesContent = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex justify-center gap-12 flex-wrap">
          {[
            { img: category1, name: "Phones" },
            { img: category2, name: "Computers" },
            { img: category3, name: "SmartWatch" },
            { img: category4, name: "Camera" },
            { img: category5, name: "HeadPhones" },
            { img: category6, name: "Gaming" },
          ].map((category, index) => (
            <div
              key={index}
              className="p-4  px-5 w-40 hover:bg-[#DB4444] hover:text-white  border-2 rounded-lg flex flex-col items-center text-center"
            >
              <Image
                width={80}
                height={80}
                alt={category.name}
                className="mb-4 transition-transform duration-300 hover:scale-105"
                src={category.img}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg  text-gray-900">
                  {category.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesContent;

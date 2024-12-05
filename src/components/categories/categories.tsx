import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 ">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <h2 className="text-red-500 text-sm font-semibold">Today&apos;s</h2>
          </div>
          <div className="flex items-center gap-8">
            <h3 className="text-3xl font-semibold">Browse By Category</h3>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;

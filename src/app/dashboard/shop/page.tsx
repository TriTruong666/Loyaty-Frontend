"use client";
import Image from "next/image";
import brand from "@/static/brand.png";
import brand2 from "@/static/brand2.png";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="flex flex-col font-open py-[20px]">
      <div className="px-[40px] flex flex-col gap-y-1">
        <p className="text-[28px] font-light select-none">Mua sắm</p>
        <p className="text-sm text-normal">
          Các sản phẩm được hiển thị theo các nhãn hàng.
        </p>
      </div>
      <div className="mt-[40px]">
        <BrandSection />
      </div>
    </div>
  );
}

function BrandSection() {
  const brands = [
    brand,
    brand2,
    brand,
    brand2,
    brand,
    brand,
    brand2,
    brand,
    brand2,
    brand,
    brand2,
    brand,
    brand2,
  ];

  const totalItems = 16;
  const filledBrands = [
    ...brands,
    ...new Array(totalItems - brands.length).fill(null),
  ];

  return (
    <div className="grid grid-cols-4 px-[40px] gap-[15px]">
      {filledBrands.map((brandItem, index) => (
        <Link
          href="/dashboard/shop/brand"
          key={index}
          className="w-full h-[120px] bg-foreground bg-opacity-40 rounded-[15px] flex items-center justify-center backdrop-blur-sm"
        >
          {brandItem ? (
            <Image
              alt=""
              src={brandItem}
              className="w-[150px] h-[60px] object-cover"
            />
          ) : (
            <div className="w-[150px] h-[60px] opacity-30"></div>
          )}
        </Link>
      ))}
    </div>
  );
}

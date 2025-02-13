"use client";
import {
  Avatar,
  Option,
  Select,
  ThemeProvider,
  Typography,
} from "@material-tailwind/react";
import { selectTheme } from "@/theme/select-theme";
import woman from "@/static/woman-1.jpg";
import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";
export default function ProductNotSalePage() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center px-[40px] py-[20px] mt-[10px] justify-end gap-x-4">
        <div className="w-[200px]">
          <ThemeProvider value={selectTheme}>
            <Select
              label="Sort by"
              variant="standard"
              className="font-inter font-semibold"
            >
              <Option>By name (A → Z)</Option>
              <Option>By name (Z → A)</Option>
            </Select>
          </ThemeProvider>
        </div>
        <div className="w-[200px]">
          <ThemeProvider value={selectTheme}>
            <Select
              label="Filter"
              variant="standard"
              className="font-inter font-semibold"
            >
              <Option>By name (A → Z)</Option>
              <Option>By name (Z → A)</Option>
            </Select>
          </ThemeProvider>
        </div>
      </div>
      <ProductNotSaleTable />
    </div>
  );
}

function ProductNotSaleTable() {
  const rankingTheme = (title: string) => {
    switch (title) {
      case "gold":
        return "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-600 via-orange-500 to-gray-900";
      case "bronze":
        return "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#78716C] via-black to-[#737373]";
      case "silver":
        return "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#D6D3D1] via-[#262626] to-[#ECFCCB]";
      default:
        return "";
    }
  };
  const statusTheme = (status: string) => {
    switch (status) {
      case "inactive":
        return "border-gray-400-40";
      case "active":
        return "border-[#45A834]";
      case "notsaleanymore":
        return "border-red-500";
      default:
        return "";
    }
  };
  const titleStatusTheme = (status: string) => {
    switch (status) {
      case "inactive":
        return "text-normal";
      case "active":
        return "text-[#45A834]";
      case "notsaleanymore":
        return "text-red-500";
      default:
        return "";
    }
  };
  return (
    <div className="flex mt-[20px]">
      <table className="flex flex-col w-full">
        <thead>
          <tr className="grid grid-cols-12 mx-[20px] px-[20px] py-4 bg-[#111111] rounded-lg">
            <th className="col-span-1 text-[12px] text-normal font-light text-start">
              ID
            </th>
            <th className="col-span-3 text-[12px] text-normal font-light text-start">
              Sản Phẩm
            </th>
            <th className="col-span-2 text-[12px] text-normal font-light text-start">
              Nhãn Hàng
            </th>
            <th className="col-span-2 text-[12px] text-normal font-light text-center">
              Giá
            </th>
            <th className="col-span-2 text-[12px] text-normal font-light text-center">
              Trạng Thái
            </th>
            <th className="col-span-2 text-[12px] text-normal font-light text-end">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-12 mx-[20px] px-[20px] py-4 items-center border-b border-gray-600 border-opacity-40">
            <td className="col-span-1 text-[13px]">1</td>
            <td className="col-span-3 flex items-center gap-x-2">
              <Image
                alt=""
                src={woman}
                className="w-[35px] h-[35px] object-cover rounded"
              />
              <div className="flex flex-col">
                <p className="text-[13px] font-semibold">Kem Duong Da</p>
              </div>
            </td>
            <td className="col-span-2 text-[11px] font-semibold">Easydew</td>
            <td className="col-span-2 text-[13px] text-center font-semibold">
              700$
            </td>

            <td
              className={`col-span-2 flex justify-center w-fit px-3 gap-x-1 py-[2px] border ml-[60px] ${statusTheme(
                "notsaleanymore"
              )} rounded-lg`}
            >
              <IoIosInformationCircleOutline
                className={`${titleStatusTheme("notsaleanymore")}`}
              />
              <p
                className={`text-[11px] font-semibold font-open ${titleStatusTheme(
                  "notsaleanymore"
                )}`}
              >
                Hết bán
              </p>
            </td>
            <td className="col-span-2 text-[13px] font-semibold text-end">
              Actions
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

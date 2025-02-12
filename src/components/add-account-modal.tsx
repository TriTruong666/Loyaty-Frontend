"use client";
import { useState } from "react";
import { FaUserTag, FaBuilding } from "react-icons/fa6";
import RadioButton from "./radio-button";
import { FaUserCheck } from "react-icons/fa";
import { TiChevronLeftOutline } from "react-icons/ti";
import { TiChevronRightOutline } from "react-icons/ti";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { addAccountModalState } from "@/context/modalState";
import {
  createAccountProgress,
  selectedAccountType,
} from "@/context/accountState";
import NormalInput from "./input";
import { FaUserTie } from "react-icons/fa";
import { DatePicker } from "@heroui/date-picker";
import { IoMail } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";
import { Select, SelectItem } from "@heroui/select";
import { IoMdCheckmark } from "react-icons/io";
import toast from "react-hot-toast";

export default function AddAccountModal() {
  const isToggleAddAccountModal = useAtomValue(addAccountModalState);
  const accountModalProgress = useAtomValue(createAccountProgress);
  if (!isToggleAddAccountModal) {
    return <></>;
  }
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-50 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
      <div className="w-[700px] bg-black flex flex-col transition-all duration-300 items-center relative py-[40px] px-[40px] rounded-[15px] shadow-[2px_2px_60px_6px_rgba(19,_19,_19,_0.63)]">
        {accountModalProgress === 1 && <ChooseAccountType />}
        {accountModalProgress === 2 && <RegistrationForm />}
        {accountModalProgress === 3 && <LocationForm />}
      </div>
    </div>
  );
}

function ChooseAccountType() {
  const [selected, setSelected] = useAtom(selectedAccountType);
  const setAddAccountModal = useSetAtom(addAccountModalState);
  const setAccountModalProgress = useSetAtom(createAccountProgress);
  const handleCloseModal = () => {
    setAddAccountModal(false);
  };
  const handleGoNext = () => {
    setAccountModalProgress(2);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 w-full">
      <p className="text-[28px] font-bold font-inter">
        Hãy chọn loại tài khoản
      </p>
      <p className="text-[12px] text-normal">
        Chọn loại tài khoản mà bạn muốn tạo
      </p>
      <div className="flex flex-col items-center w-full gap-y-4 mt-4">
        <RadioButton
          icon={<FaUserTag size={24} />}
          title="Tài khoản Sales"
          description="Tài khoản sales dành cho nhân viên bán hàng."
          value="sales"
          selected={selected}
          onChange={setSelected}
        />
        <RadioButton
          icon={<FaUserCheck size={24} />}
          title="Tài khoản cá nhân"
          description="Tài khoản cá nhân dành cho khách hàng nhưng chưa đến mức độ doanh nghiệp"
          value="personal"
          selected={selected}
          onChange={setSelected}
        />
        <RadioButton
          icon={<FaBuilding size={24} />}
          title="Tài khoản doanh nghiệp"
          description="Tài khoản doanh nghiệp dành cho các doanh nghiệp."
          value="business"
          selected={selected}
          onChange={setSelected}
        />
      </div>
      <div className="flex items-center w-full mt-[20px] gap-x-4">
        <div
          onClick={handleCloseModal}
          className="flex items-center w-[50%] border gap-x-1 border-gray-400-40 justify-center py-2 rounded-lg cursor-pointer hover:border-foreground transition-all duration-200"
        >
          <TiChevronLeftOutline size={20} />
          <p>Thoát</p>
        </div>
        <div
          onClick={handleGoNext}
          className="flex items-center w-[50%] border border-transparent bg-primary justify-center py-2 rounded-lg gap-x-1 cursor-pointer"
        >
          <p className="text-background font-semibold">Tiếp theo</p>
          <TiChevronRightOutline className="text-background" size={20} />
        </div>
      </div>
    </div>
  );
}

function RegistrationForm() {
  const setAccountModalProgress = useSetAtom(createAccountProgress);
  const handleGoNext = () => {
    setAccountModalProgress(3);
  };
  const handleGoPrev = () => {
    setAccountModalProgress(1);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 w-full">
      <p className="text-[28px] font-bold font-inter">Nhập thông tin đăng ký</p>
      <p className="text-[12px] text-normal">
        Vui lòng điền đủ thông tin vào các trường dưới đây để tạo tài khoản.
      </p>
      <div className="flex flex-col gap-3 w-full">
        <NormalInput
          label="Địa chỉ email"
          placeholder="email123@gmail.com"
          icon={<IoMail size={20} />}
        />
        <div className="flex items-center gap-x-3">
          <NormalInput
            label="Tên khách hàng"
            placeholder="Nguyễn Văn A"
            icon={<FaUserTie size={20} />}
          />
          <NormalInput
            label="Số điện thoại"
            placeholder="0776003669"
            icon={<MdLocalPhone size={20} />}
            max={10}
          />
        </div>
        {/* mst */}
        <NormalInput
          label="Mã số thuế"
          placeholder="2803148208"
          icon={<RiBuilding2Fill size={20} />}
        />
        {/* date picker */}
        <div className="flex flex-col w-full gap-y-2 font-inter">
          <label
            htmlFor="date"
            className="font-semibold text-sm 2xl:text-[12px] mb-1"
          >
            Ngày sinh
          </label>
          <DatePicker variant="bordered" />
        </div>
      </div>
      <div className="flex items-center w-full mt-[20px] gap-x-4">
        <div
          onClick={handleGoPrev}
          className="flex items-center w-[50%] border gap-x-1 border-gray-400-40 justify-center py-2 rounded-lg cursor-pointer hover:border-foreground transition-all duration-200"
        >
          <TiChevronLeftOutline size={20} />
          <p>Quay lại</p>
        </div>
        <div
          onClick={handleGoNext}
          className="flex items-center w-[50%] border border-transparent bg-primary justify-center py-2 rounded-lg gap-x-1 cursor-pointer"
        >
          <p className="text-background font-semibold">Tiếp theo</p>
          <TiChevronRightOutline className="text-background" size={20} />
        </div>
      </div>
    </div>
  );
}

function LocationForm() {
  const setAccountModalProgress = useSetAtom(createAccountProgress);
  const handleGoNext = () => {
    setAccountModalProgress(3);
  };
  const handleGoPrev = () => {
    setAccountModalProgress(2);
  };
  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 w-full">
      <p className="text-[28px] font-bold font-inter">Địa chỉ khách hàng</p>
      <p className="text-[12px] text-normal">
        Vui lòng nhập địa chỉ khách hàng để giao hàng
      </p>
      <div className="flex flex-col w-full gap-y-2 font-inter">
        <label
          htmlFor="date"
          className="font-semibold text-sm 2xl:text-[12px] mb-1"
        >
          Tỉnh / Thành phố
        </label>
        <Select variant="bordered" placeholder="Tỉnh / Thành phố">
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-col w-full gap-y-2 font-inter">
        <label
          htmlFor="date"
          className="font-semibold text-sm 2xl:text-[12px] mb-1"
        >
          Quận / Huyện
        </label>
        <Select variant="bordered" placeholder="Quận / Huyện" isDisabled>
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-col w-full gap-y-2 font-inter">
        <label
          htmlFor="date"
          className="font-semibold text-sm 2xl:text-[12px] mb-1"
        >
          Phường / Xã
        </label>
        <Select variant="bordered" placeholder="Phường / Xã" isDisabled>
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex items-center w-full mt-[20px] gap-x-4">
        <div
          onClick={handleGoPrev}
          className="flex items-center w-[50%] border gap-x-1 border-gray-400-40 justify-center py-2 rounded-lg cursor-pointer hover:border-foreground transition-all duration-200"
        >
          <TiChevronLeftOutline size={20} />
          <p>Quay lại</p>
        </div>
        <div
          onClick={handleGoNext}
          className="flex items-center w-[50%] border border-transparent bg-primary justify-center py-2 rounded-lg gap-x-1 cursor-pointer"
        >
          <p className="text-background font-semibold">Tạo tài khoản</p>
          <IoMdCheckmark className="text-background" size={20} />
        </div>
      </div>
    </div>
  );
}

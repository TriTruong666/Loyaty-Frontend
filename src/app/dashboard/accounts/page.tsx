"use client";
import { Option, Select, ThemeProvider } from "@material-tailwind/react";
import { selectTheme } from "@/theme/select-theme";
export default function AccountPage() {
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
      <AccountTable />
    </div>
  );
}

function AccountTable() {
  const accountsData = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 890",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Alice Smith",
      email: "alice@example.com",
      phone: "+1 987 654 321",
      role: "Manager",
      status: "Pending",
    },
    {
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "+1 456 789 012",
      role: "User",
      status: "Inactive",
    },
    {
      name: "Emma Wilson",
      email: "emma@example.com",
      phone: "+1 345 678 901",
      role: "User",
      status: "Active",
    },
  ];
  return (
    <div className="flex">
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

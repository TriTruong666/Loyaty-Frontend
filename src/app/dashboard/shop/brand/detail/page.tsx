import mypham from "@/static/mypham.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ProductDetailPage() {
  return (
    <div className="flex flex-col px-10 py-6 space-y-10 ">
      {/* Sản phẩm */}
      <div className="flex gap-10">
        {/* Ảnh sản phẩm */}
        <div className="w-[700px] h-[500px] overflow-hidden rounded-lg">
          <Image
            className="w-full h-full object-cover"
            alt="Mỹ phẩm"
            src={mypham}
          />
        </div>

        {/* Nội dung sản phẩm */}
        <div className="flex flex-col w-full">
          <p className="text-lg font-medium text-gray-600">EasyDew</p>
          <h1 className="font-bold text-3xl leading-snug">
            Dầu Xả Giúp Tăng Cường Dưỡng Tóc, Ngăn Ngừa Và Cải Thiện Giảm Gãy
            Rụng Tóc Vichy Dercos Technique Energising Anti-Hair Loss
            Conditioner 200ML
          </h1>

          {/* Giá */}
          <p className="text-5xl font-bold text-red-600 mt-4">415,000₫</p>

          {/* Button */}
          <div className="flex gap-5 mt-6">
            <button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 text-lg font-medium rounded-lg shadow-md">
              Mua Ngay
            </button>
            <button className="px-6 py-3 text-red-500 border border-red-500 hover:bg-red-100 text-lg font-medium rounded-lg shadow-md">
              Thêm Vào Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
      {/* Mô tả sản phẩm */}
      <div className=" p-5 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 border-b-1">Mô Tả Sản Phẩm</h2>
        <p className="text-white-700 leading-relaxed">
          Dầu Xả Giúp Tăng Cường Dưỡng Tóc, Ngăn Ngừa Và Cải Thiện Giảm Gãy Rụng
          Tóc Vichy Dercos Technique Energising Anti-Hair Loss Conditioner cung
          cấp các dưỡng chất cần thiết cho tóc, giúp tóc phục hồi và giảm gãy
          rụng. Ngoài ra, thành phần Aminexil 1,5%, Vitamin PP, B5, B6 có trong
          sản phẩm giúp củng cố lượng collagen ở chân tóc, cho tóc chắc khỏe và
          đàn hồi hơn. Các hoạt chất có trong sản phẩm được sử dụng rộng rãi
          trong ngành da liễu có công dụng thúc đẩy và cải thiện da đầu và sợi
          tóc khỏe mạnh. Kết cấu sản phẩm dịu nhẹ, an toàn cho da nhạy cảm và
          đem lại kết quả rõ ràng từ gốc tới ngọn. Sản phẩm giảm rụng tóc, dầu
          gội còn giúp nuôi dưỡng và cải thiện mái tóc khô xơ, bị tổn hại nhiều
          do các tác nhân như uốn, duỗi, nhuộm, thay đổi hóc môn, stress,.. –
          Picare là nhà phân phối chính hãng của Vichy tại Việt Nam.
        </p>
      </div>
    </div>
  );
}

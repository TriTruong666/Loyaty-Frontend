import woman from "@/static/woman-1.jpg";
import Image from "next/image";
export default function ProductDetailPage() {
  return (
    <div className="flex flex-col px-[40px]">
      <div className="flex gap-10">
        {/* image */}
        <Image className="h-[450px] w-[1000px]" alt="" src={woman} />
        {/* content */}
        <div className="flex flex-col">
          <p>EasyDew</p>
          <p className="font-bold text-[20px]">
            Dầu Xả Giúp Tăng Cường Dưỡng Tóc, Ngăn Ngừa Và Cải Thiện Giảm Gãy
            Rụng Tóc Vichy Dercos Technique Energising Anti-Hair Loss
            Conditioner 200ML
          </p>
          <p className="text-[30px] mt-[30px]">415,000₫</p>
          <button className="">Mua Ngay</button>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Mo ta</p>
        <p>
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
        {/* content */}
      </div>
    </div>
  );
}

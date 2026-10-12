import { cn } from "../../lib/utils";

export function InfiniteGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center",
        className,
      )}
    >
      {/* 1. KHUNG PHỐI CẢNH 3D VỚI ĐƯỜNG CHÂN TRỜI */}
      <div className="absolute inset-0 [perspective:350px] [perspective-origin:50%_40%] flex items-center justify-center">
        <div
          /* 
            2. MẶT PHẲNG LƯỚI 3D:
               - rotateX(72deg): Góc nghiêng gắt tạo độ nén phối cảnh cực mạnh ở xa.
               - translateY(120px): Đẩy xuống để đường chân trời nằm đúng vị trí.
          */
          className="absolute w-[300vw] h-[300vh] bg-grid opacity-70 animate-grid-move"
          style={{
            transform: "rotateX(72deg) translateY(120px) translateZ(-50px)",
          }}
        />
      </div>

      {/* 
        3. HIỆU ỨNG ĐƯỜNG CHÂN TRỜI (HORIZON MIST & SKY FADE):
           - Phía trên chân trời (bầu trời): Giữ nền sáng sạch sẽ (#fafafa).
           - Ngay tại đường chân trời: Lưới chụm lại dày đặc và tan nhẹ vào không gian.
           - Phía dưới đáy: Làm mờ nhẹ vùng sát mép dưới.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] from-0% via-[#fafafa] via-35% via-transparent via-45% to-[#fafafa] to-95%" />

      {/* 
        4. LỚP PHỦ LÀM DỊU 2 BÊN MÉP (VIGNETTE MỀM):
      */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#fafafa_95%)]" />
    </div>
  );
}

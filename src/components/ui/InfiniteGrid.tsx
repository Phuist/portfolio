import { cn } from "../../lib/utils";

export function InfiniteGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center",
        className,
      )}
    >
      {/* 
        1. ĐỘ SÂU 3D (PERSPECTIVE): 
           - Chỉnh [perspective:400px]: 
           - Số càng nhỏ (vd: 300px - 400px) -> Hiệu ứng hút sâu 3D càng gắt và tạo độ dốc lớn.
           - Số càng lớn (vd: 800px - 1000px) -> Mặt phẳng lưới trông càng phẳng nhẹ nhàng.
      */}
      <div className="absolute inset-0 [perspective:400px] flex items-center justify-center">
        <div
          /* 
            2. KÍCH THƯỚC & ĐỘ ĐẬM LƯỚI:
               - w-[300vw] h-[290vh]: Chiều rộng & cao mặt phẳng lưới (nên để lớn hơn màn hình để khi xoay 3D không lộ viền).
               - opacity-90: Độ hiển thị của lưới (chỉnh thành opacity-30, opacity-50, opacity-70... tùy độ đậm mong muốn).
               - animate-grid-move: Hiệu ứng chuyển động (tốc độ chỉnh trong src/index.css).
          */
          className="absolute w-[300vw] h-[290vh] bg-grid opacity-50 animate-grid-move"
          style={{
            /* 
              3. CÁC THÔNG SỐ BIẾN ĐỔI 3D (TRANSFORM):
                 - rotateX(40deg): Góc nghiêng ngửa/gập của mặt sàn. (Góc từ 40deg - 75deg cho cảm giác mặt sàn 3D).
                 - translateY(-50px): Đẩy mặt lưới lên trên (-) hoặc xuống dưới (+). Đẩy số âm lớn hơn (vd: -100px, -150px) để nâng đường chân trời lên gần thanh Nav.
                 - translateZ(-200px): Đẩy mặt lưới lùi xa (-) hoặc tiến lại gần (+) tầm mắt.
            */
            transform: "rotateX(40deg) translateY(-50px) translateZ(-150px)",
          }}
        />
      </div>

      {/* 
        4. LỚP PHỦ QUẦNG SÁNG TRUNG TÂM (RADIAL GRADIENT):
           - Làm mờ dần lưới ra 4 góc xung quanh, giữ cho vùng giữa màn hình nổi bật.
           - #fafafa 75%: Đổi % nhỏ hơn (vd: 50%) để quầng sáng thu hẹp lại, hoặc lớn hơn (85%) để thấy nhiều lưới hơn.
      */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#fafafa_95%)]" />

      {/* 
        5. LỚP PHỦ MỜ ĐỈNH VÀ ĐÁY MÀN HÌNH (LINEAR GRADIENT):
           - Che mờ viền trên (gần Nav) và viền dưới để lưới tan vào nền một cách tự nhiên.
           -from-[#fafafa]: Đỉnh trên cùng mờ trắng.
           - to-[#fafafa]: Đáy dưới cùng mờ trắng.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa]" />
    </div>
  );
}

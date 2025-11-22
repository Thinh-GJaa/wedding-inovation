# 📸 HƯỚNG DẪN THÊM ẢNH VÀO THIỆP CƯỜng

Trang web thiệp cưới đã được nâng cấp với các chỗ để hiển thị ảnh!

## 🎯 NHỮNG CHỖ CÓ THỂ THÊM ẢNH

### 1️⃣ **Ảnh Cô Dâu**
- Hình: Cô dâu mặc áo dài hoặc váy đẹp
- Vị trí: Phần "Chúng Tôi" - bên trái

### 2️⃣ **Ảnh Cặp Đôi**
- Hình: Cô dâu & chú rể chụp cùng nhau
- Vị trí: Phần "Chúng Tôi" - giữa

### 3️⃣ **Ảnh Chú Rể**
- Hình: Chú rể mặc áo dài hoặc vest đẹp
- Vị trí: Phần "Chúng Tôi" - bên phải

---

## 📝 CÁCH THÊM ẢNH

### **Bước 1: Chuẩn Bị Ảnh**
1. Chụp hoặc tìm ảnh muốn dùng (JPG, PNG)
2. Chỉnh sửa ảnh nếu cần (crop, adjust)
3. Lưu ảnh dưới tên:
   - `bride.jpg` (ảnh cô dâu)
   - `groom.jpg` (ảnh chú rể)
   - `couple.jpg` (ảnh cặp đôi)

### **Bước 2: Đặt Ảnh Vào Thư Mục**
1. Đặt các file ảnh vào thư mục:
   ```
   c:\Users\ManageITVN\Downloads\Linh tinh\wedding\
   ```
2. Cùng thư mục với file `index.html`

### **Bước 3: Cập Nhật HTML**
1. Mở file `index.html` bằng Notepad hoặc VS Code
2. Tìm phần này (khoảng dòng 40-50):
   ```html
   <section class="couple-photos fade-in-up" style="animation-delay: 1.2s">
       <h3 class="section-title">💑 Chúng Tôi</h3>
       <div class="photos-grid">
           <div class="photo-item bride-photo">
               <div class="photo-placeholder">👰</div>
               <p class="photo-label">Cô Dâu</p>
           </div>
   ```

3. Thay đoạn trên bằng:
   ```html
   <section class="couple-photos fade-in-up" style="animation-delay: 1.2s">
       <h3 class="section-title">💑 Chúng Tôi</h3>
       <div class="photos-grid">
           <div class="photo-item bride-photo">
               <img src="bride.jpg" alt="Cô Dâu" class="photo-img">
               <p class="photo-label">Cô Dâu</p>
           </div>
           <div class="photo-item couple-photo">
               <img src="couple.jpg" alt="Ảnh Cặp Đôi" class="photo-img">
               <p class="photo-label">Ảnh Cặp Đôi</p>
           </div>
           <div class="photo-item groom-photo">
               <img src="groom.jpg" alt="Chú Rể" class="photo-img">
               <p class="photo-label">Chú Rể</p>
           </div>
       </div>
   </section>
   ```

### **Bước 4: Thêm CSS cho ảnh**
1. Mở file `styles.css`
2. Tìm đoạn: `.photo-placeholder {`
3. Thêm phía dưới:
   ```css
   .photo-img {
       width: 100%;
       height: 250px;
       object-fit: cover;
       border-radius: 10px;
       margin-bottom: 15px;
       transition: transform 0.3s ease;
   }

   .photo-item:hover .photo-img {
       transform: scale(1.05);
   }
   ```

### **Bước 5: Lưu & Kiểm Tra**
1. Lưu file `index.html` (Ctrl+S)
2. Lưu file `styles.css` (Ctrl+S)
3. Mở lại `index.html` trong trình duyệt
4. Ảnh sẽ hiển thị! 🎉

---

## 🌐 THÊM GOOGLE MAP

Trang web đã có Google Map nhúng sẵn!

### **Cách Tùy Chỉnh Vị Trí Bản Đồ:**

1. Mở file `index.html`
2. Tìm phần:
   ```html
   <section class="map-section fade-in-up"...
   ```

3. Tìm `iframe` có `src="https://www.google.com/maps/embed?pb=..."`

4. Để lấy embed code mới từ Google Maps:
   - Vào: https://www.google.com/maps/
   - Tìm địa điểm của bạn
   - Click nút Share (chia sẻ) → Embed a map
   - Copy code
   - Paste vào file HTML

5. Thay địa chỉ, tọa độ trong embed code

---

## ✅ DANH SÁCH THÔNG TIN ĐÃ CÓ

Trang web hiện đã có:

✅ **Thông Tin Cặp Đôi:**
- Tên cô dâu & chú rể
- Ngày sinh
- Thành phố
- Lời yêu thích

✅ **Thông Tin Gia Đình:**
- Ông bà ngoại cô dâu & chú rể
- Bố mẹ cô dâu & chú rể
- Địa chỉ gia đình

✅ **Thông Tin Sự Kiện:**
- Ngày & giờ Lễ Vu Quy
- Ngày & giờ Tiệc Cưới
- Lịch trình chi tiết (8 khung giờ)

✅ **Thông Tin Địa Điểm:**
- 2 Google Map (Lễ Vu Quy + Tiệc Cưới)
- Tên nhà hàng
- Địa chỉ chi tiết
- Số điện thoại
- Thông tin đỗ xe

✅ **Thông Tin Hữu Ích:**
- Quà cưới & chuyển khoản
- Dress code (áo mặc)
- Giao thông & taxi
- Menu tiệc (khai vị, chính, tráng miệng)
- Chụp ảnh & hashtag
- Bài hát yêu thích

---

## 🎯 CÁC THÔNG TIN CÓ THỂ THÊM/THAY ĐỔI

### **Dễ Thay Đổi (Mở HTML & Sửa Chữ):**
1. Tên, ngày sinh cô dâu & chú rể
2. Tên gia đình & số điện thoại
3. Địa chỉ nhà cô dâu & chú rể
4. Tên & địa chỉ nhà hàng tiệc
5. Ngày giờ sự kiện
6. Lịch trình chi tiết
7. Quà cưới & số tài khoản
8. Bài hát yêu thích
9. Dress code
10. Hashtag

### **Phức Tạp Hơn (Cần Sửa CSS):**
1. Thêm ảnh (như hướng dẫn trên)
2. Thay đổi Google Map
3. Đổi màu sắc
4. Thay đổi font chữ
5. Thêm video

---

## 📏 KÍCH THƯỚC ẢNH KHUYÊN CÁO

Để ảnh hiển thị tốt nhất:

- **Ảnh Cô Dâu & Chú Rể:** 500x600px
- **Ảnh Cặp Đôi:** 600x400px (ngang hơn)
- **Hình Thức:** JPG hoặc PNG
- **Kích Thước File:** < 1MB (tốc độ tải nhanh)

---

## 🎨 TÙYẠN CHỈNH GOOGLE MAP

### **Để Thay Đổi Vị Trí Map:**

1. Vào: https://www.google.com/maps
2. Tìm kiếm địa chỉ của bạn
3. Nhấn nút "Chia sẻ" (Share)
4. Chọn tab "Nhúng bản đồ" (Embed map)
5. Copy code HTML
6. Dán vào file `index.html` thay cho iframe cũ

### **Ví Dụ Địa Chỉ:**
- Hà Nội: "456 Đường Tây Hồ, Hà Nội"
- Sài Gòn: "123 Đường Lê Lợi, TP.HCM"
- Đà Nẵng: "789 Võ Nguyên Giáp, Đà Nẵng"

---

## 💡 MẹO VỀ ẢNH

✅ **Ảnh Tốt:**
- Sáng, rõ ràng
- Background đơn giản
- Tỉ lệ 3:4 hoặc 16:9
- Khuôn mặt rõ ràng

❌ **Tránh:**
- Ảnh mờ, bị nhoè
- Background lộn xộn
- Ảnh quá tối hoặc quá sáng
- File quá lớn

---

## 📱 KIỂM TRA TRÊN MOBILE

Sau khi thêm ảnh:

1. Mở `index.html` trên điện thoại
2. Kiểm tra ảnh hiển thị đẹp không
3. Kiểm tra bố cục không lệch
4. Kiểm tra tốc độ tải

---

## 🐛 KHẮC PHỤC SỰ CỐ

**❓ Ảnh không hiển thị?**
→ Kiểm tra tên file: `bride.jpg`, `groom.jpg`, `couple.jpg` chính xác không?
→ Ảnh có trong cùng thư mục với `index.html` không?
→ Thử F5 reload trang

**❓ Ảnh hiển thị sai tỷ lệ?**
→ Thay đổi `object-fit: cover;` thành `object-fit: contain;` trong CSS

**❓ Ảnh nào được thay đổi kích thước?**
→ Thay đoạn `height: 250px;` trong CSS thành kích thước khác

**❓ Google Map không có gì?**
→ Embed code cũ có thể hết hạn
→ Lấy embed code mới từ Google Maps

---

## 📚 PHẦN THÔNG TIN CÒN THIẾU

Nếu bạn muốn thêm:

### **1. Album Ảnh**
```html
<section class="gallery fade-in-up">
    <h3 class="section-title">📸 Album Ảnh</h3>
    <div class="gallery-grid">
        <img src="photo1.jpg" alt="Ảnh 1">
        <img src="photo2.jpg" alt="Ảnh 2">
        <img src="photo3.jpg" alt="Ảnh 3">
    </div>
</section>
```

### **2. Video Yêu Thích**
```html
<section class="video fade-in-up">
    <h3 class="section-title">🎥 Video Của Chúng Tôi</h3>
    <video width="100%" controls>
        <source src="wedding-video.mp4" type="video/mp4">
    </video>
</section>
```

### **3. Form Xác Nhận (RSVP Online)**
```html
<form class="rsvp-form" action="https://formspree.io/f/YOUR_ID" method="POST">
    <input type="text" name="name" placeholder="Tên" required>
    <input type="email" name="email" placeholder="Email" required>
    <select name="attend" required>
        <option>Có thể tham dự</option>
        <option>Không thể tham dự</option>
    </select>
    <button type="submit">Gửi RSVP</button>
</form>
```

### **4. Countdown Timer**
Đã sẵn có trong `script.js` - chỉ cần uncomment

---

## ✨ HOÀN THÀNH!

Bạn đã có tất cả thông tin cần thiết! 

Bây giờ chỉ cần:
1. ✅ Thêm ảnh
2. ✅ Tùy chỉnh thông tin (tên, địa chỉ, etc)
3. ✅ Thêm nhạc nền
4. ✅ Share cho khách mời

**Chúc bạn có một đám cưới tuyệt vời! 💒💕**

# 📋 HƯỚNG DẪN TÙY CHỈNH ĐẦY ĐỦ - TẤT CẢ THÔNG TIN

Trang web thiệp cưới đã được nâng cấp với nhiều thông tin chi tiết!

## 🎯 TẤT CẢ THÔNG TIN CÓ THỂ TÙY CHỈNH

### 1️⃣ **THÔNG TIN CẶP ĐÔI**

**Tìm trong index.html dòng ~70:**
```html
<h2 class="couple-name">Nguyễn Thị Linh</h2>
<p class="couple-title">Cô gái xinh đẹp & tốt bụng</p>
<p class="couple-detail">Sinh năm 1998 • Hà Nội</p>
<p class="couple-quote">"Tìm thấy tình yêu của đời mình"</p>
```

**Thay bằng thông tin của bạn:**
```html
<h2 class="couple-name">Tên Cô Dâu</h2>
<p class="couple-title">Mô tả cô dâu</p>
<p class="couple-detail">Sinh năm XXXX • Thành phố</p>
<p class="couple-quote">"Lời yêu thích của cô dâu"</p>
```

---

### 2️⃣ **NGÀY & GIỜ SỰ KIỆN**

**Tìm dòng ~145:**
```html
<p class="detail-value">Thứ Sáu, 12 tháng 12 năm 2025</p>
<p class="detail-time">14:00 - 16:00</p>

<p class="detail-value">Thứ Bảy, 13 tháng 12 năm 2025</p>
<p class="detail-time">17:00 - 23:00</p>
```

**Thay bằng:**
```html
<p class="detail-value">Thứ [Ngày], [Ngày] tháng [Tháng] năm [Năm]</p>
<p class="detail-time">[GIỜ BẮTĐẦU] - [GIỜ KẾT THÚC]</p>
```

**Ví dụ:**
```html
<p class="detail-value">Thứ Sáu, 10 tháng 1 năm 2026</p>
<p class="detail-time">15:00 - 18:00</p>
```

---

### 3️⃣ **THÔNG TIN ĐỊA ĐIỂM LEY VU QUY**

**Tìm dòng ~160:**
```html
<p class="venue-name">Nhà Ông Bà Ngoại</p>
<p class="venue-address">📌 123 Phố Bà Triệu, Quận Hoàn Kiếm, Hà Nội</p>
<p class="venue-phone">📞 (024) 3825-1234</p>
<p class="venue-time">⏰ 14:00 - 16:00</p>
```

**Thay bằng:**
```html
<p class="venue-name">Tên Địa Điểm Cô Dâu</p>
<p class="venue-address">📌 Địa chỉ đầy đủ</p>
<p class="venue-phone">📞 Số điện thoại</p>
<p class="venue-time">⏰ Giờ bắt đầu - Giờ kết thúc</p>
```

---

### 4️⃣ **THÔNG TIN TIỆC CƯỜng CHÍNH**

**Tìm dòng ~175:**
```html
<p class="venue-name">Nhà Hàng Hoa Lâu</p>
<p class="venue-address">📌 456 Đường Tây Hồ, Quận Tây Hồ, Hà Nội</p>
<p class="venue-phone">📞 (024) 3827-5678</p>
<p class="venue-time">⏰ 17:00 - 23:00</p>
<p class="venue-parking">🚗 Có chỗ đỗ xe</p>
```

**Thay bằng:**
```html
<p class="venue-name">Tên Nhà Hàng/Trung Tâm Tiệc</p>
<p class="venue-address">📌 Địa chỉ chi tiết với số nhà</p>
<p class="venue-phone">📞 Số điện thoại chính</p>
<p class="venue-time">⏰ Giờ khai tiệc - Giờ kết thúc</p>
<p class="venue-parking">🚗 Thông tin đỗ xe</p>
```

---

### 5️⃣ **THÔNG TIN GIA ĐÌNH CÔ DÂU**

**Tìm dòng ~195:**
```html
<div class="family-info bride-family">
    <h4 class="family-title">🌸 Gia Đình Cô Dâu</h4>
    <p class="family-name"><strong>Ông bà ngoại:</strong></p>
    <p class="family-detail">Ông: Nguyễn Văn Anh</p>
    <p class="family-detail">Bà: Trần Thị Bích</p>
    <p class="family-name"><strong>Bố mẹ:</strong></p>
    <p class="family-detail">Cha: Nguyễn Hữu Chiến</p>
    <p class="family-detail">Mẹ: Hoàng Thị Hạ</p>
    <p class="family-name"><strong>Địa chỉ:</strong></p>
    <p class="family-detail">123 Phố Bà Triệu, Hoàn Kiếm, Hà Nội</p>
</div>
```

**Thay bằng:**
```html
<div class="family-info bride-family">
    <h4 class="family-title">🌸 Gia Đình Cô Dâu</h4>
    <p class="family-name"><strong>Ông bà ngoại:</strong></p>
    <p class="family-detail">Ông: Tên ông ngoại</p>
    <p class="family-detail">Bà: Tên bà ngoại</p>
    <p class="family-name"><strong>Bố mẹ:</strong></p>
    <p class="family-detail">Cha: Tên bố</p>
    <p class="family-detail">Mẹ: Tên mẹ</p>
    <p class="family-name"><strong>Địa chỉ:</strong></p>
    <p class="family-detail">Địa chỉ nhà cô dâu</p>
</div>
```

---

### 6️⃣ **THÔNG TIN GIA ĐÌNH CHỦ RỂ**

**Tìm dòng ~213:**
```html
<div class="family-info groom-family">
    <h4 class="family-title">🌹 Gia Đình Chú Rể</h4>
    <p class="family-name"><strong>Ông bà ngoại:</strong></p>
    <p class="family-detail">Ông: Trần Văn Hùng</p>
    <p class="family-detail">Bà: Đỗ Thị Vân</p>
    <p class="family-name"><strong>Bố mẹ:</strong></p>
    <p class="family-detail">Cha: Trần Minh Phú</p>
    <p class="family-detail">Mẹ: Lê Thị Hương</p>
    <p class="family-name"><strong>Địa chỉ:</strong></p>
    <p class="family-detail">789 Đường Lý Thái Tổ, Ba Đình, Hà Nội</p>
</div>
```

**Tương tự, thay với thông tin gia đình chú rể**

---

### 7️⃣ **LỊCH TRÌNH CHI TIẾT**

**Tìm dòng ~235 và các timeline-item:**
```html
<div class="timeline-item">
    <div class="timeline-time">14:00</div>
    <div class="timeline-content">
        <h4>Lễ Vu Quy</h4>
        <p>Đón dâu tại nhà cô dâu, thực hiện các nghi lễ truyền thống</p>
        <p class="timeline-location">📍 123 Phố Bà Triệu, Hà Nội</p>
    </div>
</div>
```

**Thay từng khung giờ:**
```html
<div class="timeline-item">
    <div class="timeline-time">[GIỜ]</div>
    <div class="timeline-content">
        <h4>[TÊN HOẠT ĐỘNG]</h4>
        <p>[MÔ TẢ CHI TIẾT]</p>
        <p class="timeline-location">📍 [ĐỊA ĐIỂM]</p>
    </div>
</div>
```

---

### 8️⃣ **THÔNG TIN QUÀ CƯỜng**

**Tìm dòng ~310:**
```html
<div class="info-card">
    <h4>🎁 Quà Cưới</h4>
    <p>Quà cưới nếu có thể gửi đến:</p>
    <p class="info-detail">Trần Minh Hưng & Nguyễn Thị Linh</p>
    <p class="info-detail">📧 Email: linh.minh.wedding@email.com</p>
    <p class="info-detail">💳 Chuyển khoản: 123456789 - Vietcombank</p>
</div>
```

**Thay bằng:**
```html
<div class="info-card">
    <h4>🎁 Quà Cưới</h4>
    <p>Quà cưới nếu có thể gửi đến:</p>
    <p class="info-detail">Tên Chú Rể & Tên Cô Dâu</p>
    <p class="info-detail">📧 Email: email@example.com</p>
    <p class="info-detail">💳 Chuyển khoản: [SỐ TK] - [TÊN NGÂN HÀNG]</p>
</div>
```

---

### 9️⃣ **DRESS CODE**

**Tìm dòng ~324:**
```html
<div class="info-card">
    <h4>👔 Dress Code</h4>
    <p><strong>Nam:</strong> Áo tuxedo, vest hoặc áo dài</p>
    <p><strong>Nữ:</strong> Váy dạ hội, áo dài hoặc bộ trang phục trang trọng</p>
</div>
```

**Tùy chỉnh theo ý muốn:**
```html
<div class="info-card">
    <h4>👔 Dress Code</h4>
    <p><strong>Nam:</strong> [Mô tả cách mặc nam]</p>
    <p><strong>Nữ:</strong> [Mô tả cách mặc nữ]</p>
</div>
```

---

### 🔟 **MENU TIỆC**

**Tìm dòng ~353:**
```html
<div class="info-card">
    <h4>🍽️ Menu Tiệc</h4>
    <p><strong>Khai Vị:</strong> Gỏi cuốn, gỏi tôm</p>
    <p><strong>Chính:</strong> Cua hoàng gia, cá hấp</p>
    <p><strong>Tráng Miệng:</strong> Bánh cưới, kem lạnh</p>
</div>
```

**Thay bằng:**
```html
<div class="info-card">
    <h4>🍽️ Menu Tiệc</h4>
    <p><strong>Khai Vị:</strong> [Các món khai vị]</p>
    <p><strong>Chính:</strong> [Các món chính]</p>
    <p><strong>Tráng Miệng:</strong> [Tráng miệng]</p>
</div>
```

---

### 1️⃣1️⃣ **HASHTAG VÀ BÀI HÁT**

**Tìm dòng ~366:**
```html
<div class="info-card">
    <h4>📸 Chụp Ảnh</h4>
    <p>Chụp ảnh miễn phí tại sảnh tiệc</p>
    <p>Chia sẻ ảnh với #LinVaMinh</p>
    <p>📷 Hashtag: #DamCuoiLinh2025</p>
</div>

<div class="info-card">
    <h4>🎵 Bài Hát Yêu Thích</h4>
    <p><strong>Bài Hát 1:</strong> "Perfect" - Ed Sheeran</p>
    <p><strong>Bài Hát 2:</strong> "All of Me" - John Legend</p>
    <p><strong>Bài Hát 3:</strong> "Vợ Tương Lai" - Sơn Tùng</p>
</div>
```

**Thay bằng:**
```html
<div class="info-card">
    <h4>📸 Chụp Ảnh</h4>
    <p>Chụp ảnh miễn phí tại sảnh tiệc</p>
    <p>Chia sẻ ảnh với #[HASHTAG CỦA BẠN]</p>
    <p>📷 Hashtag: #[HASHTAG CHÍNH]</p>
</div>

<div class="info-card">
    <h4>🎵 Bài Hát Yêu Thích</h4>
    <p><strong>Bài Hát 1:</strong> "[TÊN BÀI]" - [TÊN NGHỆ SĨ]</p>
    <p><strong>Bài Hát 2:</strong> "[TÊN BÀI]" - [TÊN NGHỆ SĨ]</p>
    <p><strong>Bài Hát 3:</strong> "[TÊN BÀI]" - [TÊN NGHỆ SĨ]</p>
</div>
```

---

### 1️⃣2️⃣ **GOOGLE MAP**

**Tìm dòng ~380:**
```html
<div class="map-item">
    <h4>🏠 Lễ Vu Quy</h4>
    <p class="map-address">123 Phố Bà Triệu, Hoàn Kiếm, Hà Nội</p>
    <div class="map-placeholder">
        <p>📍 Nhấn để xem bản đồ</p>
        <a href="https://maps.google.com/?q=21.02857,105.84692" target="_blank" class="map-link">Mở Google Maps</a>
    </div>
</div>
```

**Thay bằng:**
```html
<div class="map-item">
    <h4>🏠 Lễ Vu Quy</h4>
    <p class="map-address">[ĐỊA CHỈ ĐẦY ĐỦ]</p>
    <div class="map-placeholder">
        <p>📍 Nhấn để xem bản đồ</p>
        <a href="https://maps.google.com/?q=[LAT],[LON]" target="_blank" class="map-link">Mở Google Maps</a>
    </div>
</div>
```

**Cách lấy tọa độ:**
1. Vào: https://maps.google.com
2. Tìm địa điểm
3. Nhấn chuột phải → Bạn ở đây
4. Copy tọa độ ở trên
5. Format: `https://maps.google.com/?q=[VĨ ĐỘ],[KINH ĐỘ]`

---

### 1️⃣3️⃣ **LỜI NGỎ & LỜI CẢM ƠN**

**Tìm dòng ~460 (Lời ngỏ):**
```html
<div class="message-card">
    <p class="message-text">
        Trải qua những năm tháng bên nhau, chúng tôi đã học được...
    </p>
</div>
```

**Thay bằng lời của bạn**

**Tìm dòng ~490 (Lời cảm ơn):**
```html
<div class="gratitude-card">
    <p class="gratitude-text">
        Chúng tôi xin cảm ơn sâu sắc...
    </p>
</div>
```

**Thay bằng lời cảm ơn của bạn**

---

### 1️⃣4️⃣ **THÔNG TIN RSVP - XÁC NHẬN THAM DỰ**

**Tìm dòng ~480:**
```html
<div class="rsvp-card">
    <p class="rsvp-text">Vui lòng xác nhận tham dự trước ngày 10 tháng 12</p>
    <p class="rsvp-contact">
        📱 Linh: 0987-654-321<br>
        📱 Minh: 0912-345-678<br>
        📧 Email: linh.minh@wedding.vn
    </p>
</div>
```

**Thay bằng:**
```html
<div class="rsvp-card">
    <p class="rsvp-text">Vui lòng xác nhận tham dự trước ngày [NGÀY] tháng [THÁNG]</p>
    <p class="rsvp-contact">
        📱 [TÊN]: [SĐT CÔ DÂU]<br>
        📱 [TÊN]: [SĐT CHỦ RỂ]<br>
        📧 Email: [EMAIL]
    </p>
</div>
```

---

## ✅ DANH SÁCH KIỂM TRA ĐẦY ĐỦ

Hãy kiểm tra tất cả thông tin:

- [ ] Tên cô dâu đầy đủ
- [ ] Tên chú rể đầy đủ
- [ ] Ngày sinh cô dâu & chú rể
- [ ] Thành phố cô dâu & chú rể
- [ ] Tên ông bà ngoại cô dâu
- [ ] Tên ông bà ngoại chú rể
- [ ] Tên bố mẹ cô dâu
- [ ] Tên bố mẹ chú rể
- [ ] Địa chỉ nhà cô dâu
- [ ] Địa chỉ nhà chú rể
- [ ] Ngày Lễ Vu Quy
- [ ] Giờ Lễ Vu Quy
- [ ] Địa điểm Lễ Vu Quy
- [ ] Số điện thoại nơi Lễ Vu Quy
- [ ] Ngày tiệc cưới chính
- [ ] Giờ tiệc cưới chính
- [ ] Tên nhà hàng/trung tâm tiệc
- [ ] Địa chỉ tiệc cưới
- [ ] Số điện thoại tiệc cưới
- [ ] Lịch trình 8 khung giờ
- [ ] Số tài khoản ngân hàng
- [ ] Email liên hệ
- [ ] Số điện thoại xác nhận
- [ ] Hashtag Instagram
- [ ] Bài hát yêu thích
- [ ] Dress code
- [ ] Menu tiệc

---

## 💡 MẹO NHANH

**Tìm & Thay Toàn Bộ Tệp:**
1. Mở index.html bằng VS Code
2. Nhấn Ctrl+H
3. Nhập từ cũ → từ mới
4. Thay thế tất cả
5. Lưu (Ctrl+S)

**Ví Dụ:**
- Tìm: "Nguyễn Thị Linh" → Thay: "Tên Cô Dâu"
- Tìm: "Trần Minh Hưng" → Thay: "Tên Chú Rể"
- Tìm: "2025" → Thay: "2026"

---

**🎉 Chúc mừng! Bạn đã có tất cả thông tin cần thiết! 💒**

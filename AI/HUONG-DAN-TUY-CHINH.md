<!-- HƯỚNG DẪN NHANH TÙY CHỈNH THÔNG TIN THIỆP CƯỜng -->
<!-- Đây là file hướng dẫn - không cần mở trong trình duyệt -->

## 🎯 HƯỚNG DẪN TÙY CHỈNH NHANH

### 1️⃣ THAY ĐỔI TÊN CÔ DÂU VÀ CHỦ RỀ
Mở file `index.html` tìm đoạn này:

```html
<div class="bride">
    <p class="couple-label">Cô dâu</p>
    <h2 class="couple-name">Linh</h2>  <!-- ← THAY ĐỔI TỚI ĐÂY -->
    <p class="couple-title">Cô gái xinh đẹp</p>
</div>

<div class="groom">
    <p class="couple-label">Chú rể</p>
    <h2 class="couple-name">Minh</h2>  <!-- ← THAY ĐỔI TỚI ĐÂY -->
    <p class="couple-title">Chàng trai tốt bụng</p>
</div>
```

**Ví dụ:**
```html
<h2 class="couple-name">Thu Hương</h2>  <!-- Cô dâu -->
<h2 class="couple-name">Anh Tuấn</h2>   <!-- Chú rể -->
```

---

### 2️⃣ THAY ĐỔI NGÀY CƯỜng
Tìm đoạn này:

```html
<div class="detail-item">
    <span class="detail-icon">📅</span>
    <p class="detail-label">Ngày cưới</p>
    <p class="detail-value">Thứ Bảy, 15 tháng 12 năm 2025</p>  <!-- ← THAY ĐỔI -->
</div>
```

**Ví dụ:**
```html
<p class="detail-value">Chủ Nhật, 20 tháng 11 năm 2025</p>
```

---

### 3️⃣ THAY ĐỔI GIỜ TIỆC
Tìm đoạn này:

```html
<div class="detail-item">
    <span class="detail-icon">🕐</span>
    <p class="detail-label">Giờ tiệc</p>
    <p class="detail-value">17:00 - 23:00</p>  <!-- ← THAY ĐỔI -->
</div>
```

**Ví dụ:**
```html
<p class="detail-value">18:30 - 00:00 (Tối)</p>
```

---

### 4️⃣ THAY ĐỔI ĐỊA ĐIỂM TIỆC CƯỜng
Tìm đoạn này:

```html
<div class="venue-card">
    <p class="venue-name">Trung Tâm Tiệc Cưới Hoa Lâu</p>  <!-- ← TÊN NHÀ TIỆC -->
    <p class="venue-address">123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>  <!-- ← ĐỊA CHỈ -->
    <p class="venue-phone">📞 (028) 3822-8888</p>  <!-- ← SỐ ĐIỆN THOẠI -->
</div>
```

**Ví dụ:**
```html
<p class="venue-name">Khách Sạn Rex Hà Nội</p>
<p class="venue-address">141 Nguyễn Huệ, Hoàn Kiếm, Hà Nội</p>
<p class="venue-phone">📞 (024) 3838-2828</p>
```

---

### 5️⃣ THAY ĐỔI SỐ ĐIỆN THOẠI XÁC NHẬN
Tìm đoạn này:

```html
<p class="rsvp-contact">
    📱 Linh: 0987-654-321<br>
    📱 Minh: 0912-345-678<br>
    📧 Email: linh.minh@wedding.vn
</p>
```

**Ví dụ:**
```html
<p class="rsvp-contact">
    📱 Thu Hương: 0981-234-567<br>
    📱 Anh Tuấn: 0908-765-432<br>
    📧 Email: thuhoa@gmail.com
</p>
```

---

### 6️⃣ THAY ĐỔI NGÀY XÁC NHẬN TRƯỚC
Tìm đoạn này:

```html
<p class="rsvp-text">Vui lòng xác nhận tham dự trước ngày 10 tháng 12</p>
```

**Ví dụ:**
```html
<p class="rsvp-text">Vui lòng xác nhận tham dự trước ngày 15 tháng 11</p>
```

---

### 7️⃣ THAY ĐỔI LỜI NGỎ
Tìm đoạn này:

```html
<div class="message-card">
    <p class="message-text">
        Trải qua những năm tháng bên nhau, chúng tôi đã học được rằng tình yêu thực sự 
        là sự chia sẻ từng khoảnh khắc, từng nụ cười và từng trái tim. 
        Hôm nay, chúng tôi muốn chia sẻ niềm vui này cùng những người thân yêu nhất.
    </p>
    <p class="message-text">
        Sự hiện diện của bạn sẽ là điều tuyệt vời nhất với chúng tôi.
    </p>
</div>
```

**Bạn có thể thay đổi toàn bộ nội dung lời ngỏ!**

---

### 8️⃣ THAY ĐỔI FONT CHỮ (NÂNG CAO)
Mở file `styles.css` tìm:

```css
:root {
    --primary-color: #d4a5a5;      /* Màu hồng */
    --accent-color: #ff69b4;       /* Màu hồng đậm */
    --gold-color: #d4af37;         /* Vàng kim */
}
```

**Thay đổi mã màu HEX để có màu tùy thích:**
- Hồng nhạt: `#ffb6c1`
- Tím nhạt: `#dda0dd`
- Lam nhạt: `#87ceeb`

---

### 9️⃣ THÊM ẢNH NỀN (NÂNG CAO)
Mở file `styles.css` tìm:

```css
body {
    background: linear-gradient(135deg, #fff9f7 0%, #fff0f5 50%, #ffe0ec 100%);
}
```

Thay bằng:
```css
body {
    background-image: url('path/to/your/image.jpg');
    background-size: cover;
    background-attachment: fixed;
}
```

---

## 🎵 THÊM NHẠC NỀN

### Cách Đơn Giản:
1. Tải file nhạc MP3 (YouTube, Spotify, etc.)
2. Đặt tên: `background-music.mp3`
3. Đặt vào thư mục `wedding/` cùng với `index.html`
4. Xong! Mở trang web sẽ có nhạc 🎵

---

## 📋 DANH SÁCH KIỂM TRA

Trước khi gửi thiệp cho khách:

- [ ] Tên cô dâu và chú rể chính xác
- [ ] Ngày và giờ tiệc chính xác
- [ ] Địa điểm tiệc chính xác
- [ ] Số điện thoại xác nhận chính xác
- [ ] Email chính xác
- [ ] Lời ngỏ đẹp và ý nghĩa
- [ ] Nhạc nền đã thêm (nếu muốn)
- [ ] Kiểm tra trên mobile đã đẹp
- [ ] Share link thử xem có lỗi gì không

---

## 🚀 CÁCH SHARE THIỆP

### 1️⃣ **Upload Lên Web Hosting:**
- Tải lên hosting miễn phí (Netlify, Vercel, GitHub Pages)
- Share link cho khách mời qua email/SMS

### 2️⃣ **Tạo QR Code:**
- Dùng trang như: qr-code-generator.com
- Tạo QR code từ link trang web
- In QR code trên thiệp in để khách quét

### 3️⃣ **Share File Trực Tiếp:**
- Nén folder `wedding/` thành `.zip`
- Gửi cho khách để họ mở trong trình duyệt

### 4️⃣ **In Thiệp Kỹ Thuật Số:**
- Screenshot trang web
- Tạo PDF từ trang
- In và gửi cho khách

---

## 💡 MẸO THÊM

### Thêm Countdown Timer:
Mở `script.js`, tìm `startCountdown();` và bỏ comment (#)

### Thay Đổi Số Lượng Hiệu Ứng:
- Giảm tuyết: Tìm `snowflakeCount = 30` → đổi số
- Giảm pháo hoa: Tìm `setInterval(randomFireworks, 3000)` → tăng số milliseconds

### Tắt/Bật Hiệu Ứng:
- Tắt tuyết: Mở script.js, comment dòng `createSnowflakes();`
- Tắt lá bay: Comment dòng `createFloatingLeaves();`
- Tắt trái tim: Comment dòng `createHeartChain();`

---

## ❓ CÂU HỎI THƯỜNG GẶP

**Q: Nhạc không phát?**
A: Kiểm tra tên file là `background-music.mp3`, đặt cùng thư mục với `index.html`

**Q: Hiệu ứng giật lag?**
A: Giảm số lượng tuyết, pháo hoa. Dùng trình duyệt khác.

**Q: Có thể xóa một số hiệu ứng không?**
A: Có! Mở `script.js`, comment các dòng tạo hiệu ứng mà bạn không muốn.

**Q: Tương thích iPhone không?**
A: Có! Mở bằng Safari trên iPhone, tất cả hiệu ứng sẽ hoạt động.

---

**Chúc mừng bạn đã có một thiệp cưới tuyệt đẹp! 💒💕**

*Nếu có vấn đề, mở Console (F12) để xem lỗi.*

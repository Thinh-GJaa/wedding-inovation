(function ($){
    $(document).ready(function(){
        let slider_content = `
        <h4 style="white-space: pre;"><br><br>Thành Đông   &   Vũ Mây</h4>
        <p style="white-space: pre;">              13 - 07 - 2025</p>
        `
        $('.slider-content--inner').html(slider_content);
 
         // Đọc parameter 'name' từ URL và hiển thị lời chào
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
 
        if (name) {
            const decodedName = decodeURIComponent(name);
            const greetingElement = document.getElementById('myguest');
            const contentElement = document.getElementById('mycontent');
             const bankElement = document.getElementById('mybank');
            if (greetingElement) {
                greetingElement.innerText = `Thân mời: ${decodedName}!`;
                contentElement.innerText = `Sẽ thật hạnh phúc khi được gặp gỡ và đón tiếp ${decodedName} trong ngày trọng đại của chúng tôi (em). Xin gửi đến ${decodedName} lời cảm ơn chân thành và sâu sắc nhất - sự hiện diện của ${decodedName} là niềm vui và là món quà vô cùng ý nghĩa đối với chúng tôi (em)!`;
                bankElement.innerText = `Cảm ơn ${decodedName} vì đã trở thành một phần quan trọng trong ngày đặc biệt của chúng tôi (em)!`
            }
        }
    });
})(jQuery)

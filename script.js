// Dữ liệu câu hỏi và câu trả lời
const responses = [
    { question: "CNTT là gì", answer: "CNTT (Công nghệ Thông tin) là ngành học và lĩnh vực liên quan đến máy tính, phần mềm, mạng và dữ liệu." },
    { question: "lập trình viên là gì", answer: "Lập trình viên là người viết và phát triển phần mềm hoặc ứng dụng bằng cách sử dụng các ngôn ngữ lập trình." },
    { question: "mã nguồn mở là gì", answer: "Mã nguồn mở là phần mềm có mã nguồn được công khai, cho phép mọi người chỉnh sửa, phát triển và phân phối lại." },
    { question: "trí tuệ nhân tạo là gì", answer: "Trí tuệ nhân tạo (AI) là lĩnh vực của CNTT giúp máy móc có thể học tập và suy luận giống con người." },
    
    // Ngôn ngữ lập trình
    { question: "ngôn ngữ lập trình phổ biến", answer: "Một số ngôn ngữ lập trình phổ biến gồm Python, Java, C++, JavaScript, PHP, C#." },
    { question: "học lập trình nên bắt đầu từ đâu", answer: "Bạn có thể bắt đầu với HTML, CSS, JavaScript nếu thích Web, hoặc Python nếu muốn học lập trình cơ bản." },
    { question: "sự khác nhau giữa python và java", answer: "Python là ngôn ngữ thông dịch, dễ học và dùng cho AI, còn Java là ngôn ngữ biên dịch, phổ biến trong ứng dụng doanh nghiệp." },

    // Web Development
    { question: "front-end là gì", answer: "Front-end là phần giao diện người dùng của website, được xây dựng bằng HTML, CSS, JavaScript." },
    { question: "back-end là gì", answer: "Back-end là phần xử lý dữ liệu phía máy chủ của website, thường dùng PHP, Node.js, Java, Python." },
    { question: "full-stack developer là gì", answer: "Full-stack developer là người có thể làm cả Front-end và Back-end của ứng dụng web." },

    // Bảo mật
    { question: "bảo mật web là gì", answer: "Bảo mật web là các phương pháp bảo vệ website khỏi tấn công như SQL Injection, XSS, CSRF." },
    { question: "tấn công ddos là gì", answer: "DDoS (Tấn công từ chối dịch vụ) là hình thức tấn công làm quá tải server khiến nó ngừng hoạt động." },

    // Công nghệ mới
    { question: "blockchain là gì", answer: "Blockchain là công nghệ chuỗi khối giúp lưu trữ dữ liệu một cách bảo mật, thường được dùng trong tiền điện tử." },
    { question: "cloud computing là gì", answer: "Cloud Computing (Điện toán đám mây) là công nghệ cho phép lưu trữ và xử lý dữ liệu trên internet thay vì máy tính cá nhân." },

    // AI & Machine Learning
    { question: "học máy là gì", answer: "Học máy (Machine Learning) là một nhánh của AI giúp máy tính có thể học từ dữ liệu và đưa ra quyết định." },
    { question: "deep learning là gì", answer: "Deep Learning là một kỹ thuật học máy sử dụng mạng nơ-ron nhân tạo mô phỏng hoạt động của não người." },
    
    // Phát triển phần mềm
    { question: "quy trình phát triển phần mềm", answer: "Quy trình phát triển phần mềm gồm các bước: Phân tích, Thiết kế, Lập trình, Kiểm thử, Triển khai và Bảo trì." },
    { question: "scrum là gì", answer: "Scrum là một phương pháp quản lý dự án Agile giúp phát triển phần mềm theo từng giai đoạn ngắn." },

    // Hệ điều hành
    { question: "hệ điều hành là gì", answer: "Hệ điều hành (OS) là phần mềm quản lý phần cứng và phần mềm trên máy tính, như Windows, Linux, macOS." },
    { question: "linux có gì khác windows", answer: "Linux là hệ điều hành mã nguồn mở, bảo mật hơn, còn Windows dễ dùng và phổ biến hơn." },

    // Tổng hợp
    { question: "cách trở thành lập trình viên giỏi", answer: "Bạn cần luyện tập viết code thường xuyên, học từ tài liệu, tham gia dự án thực tế và luôn cập nhật công nghệ mới." },
    { question: "tôi nên học ngôn ngữ lập trình nào", answer: "Tùy vào mục tiêu của bạn! Web thì học JavaScript, AI thì học Python, ứng dụng di động thì học Java/Kotlin hoặc Swift." },
    { question: "tại sao nên học lập trình", answer: "Học lập trình giúp bạn có tư duy logic, tạo ra sản phẩm công nghệ, có nhiều cơ hội việc làm và lương cao." },
    { question: "thủ đô việt nam", answer: "Thủ đô của Việt Nam là Hà Nội." },
    { question: "thành phố lớn nhất việt nam", answer: "Thành phố lớn nhất Việt Nam là Thành phố Hồ Chí Minh." },
    { question: "việt nam có bao nhiêu tỉnh thành", answer: "Việt Nam có 63 tỉnh thành." },
    { question: "ngọn núi cao nhất việt nam", answer: "Ngọn núi cao nhất Việt Nam là Fansipan, cao 3.147,3 mét." },
    { question: "sông dài nhất việt nam", answer: "Sông dài nhất Việt Nam là sông Mekong." },

    // Văn hóa - Lịch sử
    { question: "tết nguyên đán là gì", answer: "Tết Nguyên Đán là dịp lễ quan trọng nhất của người Việt Nam, đánh dấu sự khởi đầu của năm mới theo Âm lịch." },
    { question: "việt nam từng bị đô hộ bao lâu", answer: "Việt Nam từng bị đô hộ hơn 1000 năm bởi phong kiến phương Bắc, 80 năm bởi thực dân Pháp và 21 năm bởi đế quốc Mỹ." },
    { question: "ai là vị vua đầu tiên của việt nam", answer: "Vị vua đầu tiên của Việt Nam là Đinh Tiên Hoàng (Đinh Bộ Lĩnh), người sáng lập nhà Đinh." },
    { question: "bác hồ sinh năm bao nhiêu", answer: "Chủ tịch Hồ Chí Minh sinh năm 1890 và mất năm 1969." },
    { question: "ngày quốc khánh việt nam", answer: "Ngày Quốc khánh Việt Nam là ngày 2/9 hàng năm." },

    // Ẩm thực
    { question: "món ăn nổi tiếng của việt nam", answer: "Việt Nam nổi tiếng với nhiều món ăn như Phở, Bánh Mì, Bún Chả, Gỏi Cuốn, Cơm Tấm." },
    { question: "phở có nguồn gốc từ đâu", answer: "Phở có nguồn gốc từ miền Bắc Việt Nam, đặc biệt là Hà Nội." },
    { question: "cà phê việt nam có gì đặc biệt", answer: "Cà phê Việt Nam có vị đậm đà, thường được pha bằng phin và có thể kết hợp với sữa đặc." },

    // Du lịch
    { question: "địa điểm du lịch nổi tiếng ở việt nam", answer: "Những địa điểm nổi tiếng ở Việt Nam gồm Vịnh Hạ Long, Phố cổ Hội An, Đà Nẵng, Sapa, Nha Trang, Đà Lạt." },
    { question: "biển đẹp nhất việt nam", answer: "Những bãi biển đẹp nhất Việt Nam gồm Mỹ Khê (Đà Nẵng), Nha Trang, Phú Quốc, Côn Đảo, Mũi Né." },

    // Kinh tế - Xã hội
    { question: "đồng tiền việt nam là gì", answer: "Đồng tiền của Việt Nam là Việt Nam Đồng (VND)." },
    { question: "ngành kinh tế chính của việt nam", answer: "Ngành kinh tế chính của Việt Nam bao gồm Nông nghiệp, Công nghiệp và Dịch vụ." },
    { question: "việt nam xuất khẩu gì nhiều nhất", answer: "Việt Nam xuất khẩu nhiều mặt hàng như gạo, cà phê, hải sản, dệt may, điện tử và linh kiện điện thoại." },

    // Tổng hợp
    { question: "việt nam có bao nhiêu dân số", answer: "Dân số Việt Nam hiện nay khoảng hơn 100 triệu người." },
    { question: "việt nam có mấy mùa", answer: "Miền Bắc Việt Nam có 4 mùa Xuân, Hạ, Thu, Đông, còn miền Nam có 2 mùa Mưa và Nắng." },
    { question: "ngày giải phóng miền nam", answer: "Ngày Giải phóng miền Nam, thống nhất đất nước là ngày 30/4/1975." },
    { question: "1+1 bằng", answer: "1 + 1 = 2" },
    { question: "lồnn", answer: "Chửi cái l dmm" },
    { question: "ai đáng yêu nhất", answer: "đương nhiên là Bùi Thị Kiều Anh" },
    { question: "ai đyeu nhất", answer: "đương nhiên là Bùi Thị Kiều Anh" },
    { question: "gọi phạm tiến đạt ra đây", answer: "gọi cái lồn ý mà gọi" },
    { question: "lồn", answer: "Chửi cái l dmm" },
    { question: "lồnnn", answer: "Chửi cái l dmm" },
    { question: "2+2 bằng", answer: "2 + 2 = 4" },
    { question: "5-3", answer: "5 - 3 = 2" },
    { question: "10/2", answer: "10 / 2 = 5" },
    { question: "3*4", answer: "3 × 4 = 12" },
    { question: "căn bậc hai của 16", answer: "Căn bậc hai của 16 là 4" },
    { question: "giá trị của pi", answer: "Giá trị của π (pi) xấp xỉ 3.14159" },
    { question: "100+200", answer: "100 + 200 = 300" },
    { question: "xin chào", answer: "Chào bạn! Tôi có thể giúp gì cho bạn?" },
    { question: "bạn tên là gì", answer: "Tôi là trợ lý ảo của bạn!" },
    { question: "bạn có thể làm gì", answer: "Tôi có thể trả lời câu hỏi, giúp bạn học tập, giải trí và nhiều thứ khác!" },
    { question: "hôm nay ngày bao nhiêu", answer: `Hôm nay là ${new Date().toLocaleDateString()}` },
    { question: "mấy giờ rồi", answer: `Bây giờ là ${new Date().toLocaleTimeString()}` },
    { question: "lập trình là gì", answer: "Lập trình là quá trình viết mã nguồn để điều khiển máy tính thực hiện các tác vụ." },
    { question: "học lập trình như thế nào", answer: "Bạn có thể bắt đầu với Python, JavaScript hoặc Java tùy vào sở thích của mình!" },
    { question: "ngôn ngữ lập trình nào phổ biến nhất", answer: "Python, JavaScript, Java, và C++ là những ngôn ngữ phổ biến nhất hiện nay." },
    { question: "bộ phim nào hay nhất", answer: "Có rất nhiều bộ phim hay, bạn thích thể loại nào?" },
    { question: "ai là cầu thủ bóng đá giỏi nhất", answer: "Hiện tại có nhiều cầu thủ giỏi như Messi, Ronaldo, Mbappe..." },
    { question: "đội bóng mạnh nhất thế giới", answer: "Real Madrid, Manchester City, Bayern Munich là những đội bóng rất mạnh." },
    { question: "bài hát hay nhất hiện nay", answer: "Bạn có thể xem bảng xếp hạng trên Billboard hoặc Spotify để biết bài hát hot nhất." },
    { question: "làm sao để học giỏi", answer: "Bạn cần lập kế hoạch học tập rõ ràng, ôn tập thường xuyên và tập trung khi học." },
    { question: "cách ghi nhớ nhanh", answer: "Hãy thử phương pháp ghi nhớ qua hình ảnh, sơ đồ tư duy và học theo từng nhóm nhỏ." },
    { question: "làm sao để ngủ ngon", answer: "Bạn nên tránh sử dụng điện thoại trước khi ngủ, tạo không gian thoải mái và ngủ đúng giờ." },
    { question: "làm sao để giảm cân", answer: "Bạn có thể tập thể dục thường xuyên, ăn uống lành mạnh và kiểm soát lượng calo." },
    { question: "ai là người giàu nhất thế giới", answer: "Elon Musk, Jeff Bezos và Bernard Arnault là những người giàu nhất hiện nay." },
    { question: "thành phố nào đẹp nhất thế giới", answer: "Paris, New York, Tokyo, Venice là những thành phố tuyệt đẹp." },
    { question: "tại sao bầu trời có màu xanh", answer: "Do hiện tượng tán xạ ánh sáng của các phân tử khí trong khí quyển." },
    { question: "tại sao nước biển có vị mặn", answer: "Do trong nước biển có chứa nhiều muối khoáng hoà tan từ đất đá." },
    { question: "tại sao con người cần ngủ", answer: "Giúp cơ thể phục hồi, tái tạo năng lượng và cải thiện trí nhớ." },
    { question: "tại sao tôi hay mệt mỏi", answer: "Có thể do thiếu ngủ, chế độ ăn uống không hợp lý hoặc căng thẳng." },
    { question: "ai là tổng thống Mỹ", answer: "Hiện tại bạn có thể kiểm tra thông tin mới nhất trên Google!" },
    { question: "tôi nên đọc sách gì", answer: "Bạn có thể thử 'Đắc nhân tâm', 'Nhà giả kim', '7 thói quen hiệu quả'." },
    { question: "làm sao để kiếm tiền online", answer: "Bạn có thể thử viết blog, kinh doanh online, làm freelancer..." },
    { question: "ai đã phát minh ra bóng đèn", answer: "Thomas Edison là người phát minh ra bóng đèn điện hiện đại." },
    { question: "ai là người đầu tiên đặt chân lên mặt trăng", answer: "Neil Armstrong vào năm 1969." },
    { question: "tôi có nên đầu tư vào tiền điện tử không", answer: "Đầu tư luôn có rủi ro, hãy nghiên cứu kỹ trước khi quyết định!" },
    { question: "tại sao máy bay có thể bay", answer: "Do lực nâng của cánh máy bay tạo ra khi không khí đi qua." },
    { question: "công thức tính diện tích hình tròn", answer: "S = πr² (với r là bán kính của hình tròn)." },
    { question: "công thức tính chu vi hình vuông", answer: "C = 4 × cạnh." },
    { question: "cách học tiếng Anh hiệu quả", answer: "Luyện nghe, nói thường xuyên, đọc sách tiếng Anh và xem phim có phụ đề." },
    { question: "tôi bị stress phải làm sao", answer: "Hãy thư giãn, tập thể dục, trò chuyện với bạn bè hoặc thiền định." },
    { question: "làm sao để tự tin hơn", answer: "Hãy luyện tập kỹ năng giao tiếp, suy nghĩ tích cực và cải thiện bản thân mỗi ngày." },
    { question: "cách để có động lực", answer: "Hãy đặt mục tiêu rõ ràng, theo dõi tiến trình và tìm cảm hứng từ những người thành công." },
    { question: "làm sao để bớt lười", answer: "Bạn có thể chia nhỏ công việc, lập kế hoạch và tự đặt phần thưởng cho bản thân." },
    { question: "ai là nhà khoa học vĩ đại nhất", answer: "Albert Einstein, Isaac Newton, Nikola Tesla là những nhà khoa học vĩ đại." },
    { question: "vì sao con người cần ăn uống", answer: "Để cung cấp năng lượng và dưỡng chất cho cơ thể hoạt động." },
    { question: "làm sao để có sức khỏe tốt", answer: "Ăn uống lành mạnh, tập thể dục đều đặn và ngủ đủ giấc." },
    { question: "công thức tính vận tốc", answer: "V = S / t (Vận tốc = Quãng đường chia cho thời gian)." },
    { question: "cách làm giàu nhanh nhất", answer: "Không có cách làm giàu nhanh chóng, hãy làm việc chăm chỉ và đầu tư thông minh." },
    { question: "tại sao tôi cảm thấy buồn", answer: "Có thể do căng thẳng, thiếu ngủ hoặc gặp chuyện không vui. Hãy thử thư giãn và trò chuyện với bạn bè!" },
    { question: "ai đã sáng lập Facebook", answer: "Mark Zuckerberg là người sáng lập Facebook vào năm 2004." },
    { question: "viết một đoạn code python in ra hello world", answer: "Dưới đây là đoạn code Python:\n```python\nprint('Hello, World!')\n```" },
    { question: "viết một vòng lặp for trong javascript", answer: "Dưới đây là ví dụ về vòng lặp `for` trong JavaScript:\n```javascript\nfor (let i = 0; i < 5; i++) {\n    console.log('Số:', i);\n}\n```" },
    { question: "cách khai báo biến trong java", answer: "Dưới đây là cách khai báo biến trong Java:\n```java\nint soNguyen = 10;\ndouble soThuc = 5.5;\nString chuoi = \"Xin chào\";\n```" },
    { question: "viết một function trong python", answer: "Đây là cách viết một hàm trong Python:\n```python\ndef chao():\n    print('Xin chào!')\n\nchao()\n```" },
    { question: "viết chương trình nhập xuất trong C++", answer: "Đây là chương trình nhập và xuất dữ liệu trong C++:\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int so;\n    cout << \"Nhập số: \";\n    cin >> so;\n    cout << \"Bạn vừa nhập: \" << so << endl;\n    return 0;\n}\n```" },
    { question: "viết một class trong java", answer: "Dưới đây là ví dụ về class trong Java:\n```java\nclass Nguoi {\n    String ten;\n    int tuoi;\n    \n    public Nguoi(String ten, int tuoi) {\n        this.ten = ten;\n        this.tuoi = tuoi;\n    }\n    \n    void hienThi() {\n        System.out.println(\"Tên: \" + ten + \", Tuổi: \" + tuoi);\n    }\n}\n```" },
    { question: "viết trang web đơn giản bằng html và css", answer: "Dưới đây là một trang web đơn giản với HTML và CSS:\n```html\n<!DOCTYPE html>\n<html lang='vi'>\n<head>\n    <meta charset='UTF-8'>\n    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n    <title>Trang Web Đơn Giản</title>\n    <style>\n        body { font-family: Arial, sans-serif; text-align: center; margin: 50px; }\n        h1 { color: blue; }\n        .container { background: #f4f4f4; padding: 20px; border-radius: 10px; }\n    </style>\n</head>\n<body>\n    <div class='container'>\n        <h1>Chào mừng bạn đến với trang web của tôi!</h1>\n        <p>Đây là một trang web đơn giản sử dụng HTML & CSS.</p>\n    </div>\n</body>\n</html>\n```" },
    
    { question: "tạo form đăng nhập bằng html và css", answer: "Dưới đây là một form đăng nhập đơn giản:\n```html\n<!DOCTYPE html>\n<html lang='vi'>\n<head>\n    <meta charset='UTF-8'>\n    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n    <title>Form Đăng Nhập</title>\n    <style>\n        body { font-family: Arial, sans-serif; text-align: center; }\n        .login-form { width: 300px; margin: auto; padding: 20px; background: #f4f4f4; border-radius: 10px; }\n        input { display: block; width: 100%; margin: 10px 0; padding: 10px; }\n    </style>\n</head>\n<body>\n    <div class='login-form'>\n        <h2>Đăng Nhập</h2>\n        <input type='text' placeholder='Tên đăng nhập'>\n        <input type='password' placeholder='Mật khẩu'>\n        <button>Đăng nhập</button>\n    </div>\n</body>\n</html>\n```" },
    { question: "thế giới sẽ ra sao trong tương lai", answer: "Chúng ta có thể mong đợi công nghệ phát triển hơn, AI thông minh hơn và sự thay đổi về môi trường." }
];


// Cấu hình Fuse.js (Tìm kiếm mờ)
const fuse = new Fuse(responses, {
    keys: ["question"],
    threshold: 0.4 // Mức độ tìm kiếm mờ (càng thấp càng chính xác)
});

// Gửi tin nhắn
function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    addMessage("Bạn", userInput, "user");

    // Tìm câu trả lời gần đúng
    let result = fuse.search(userInput);
    let aiResponse = result.length ? result[0].item.answer : "Xin lỗi, tôi không hiểu câu hỏi của bạn.";

    setTimeout(() => addMessage("AI", aiResponse, "ai"), 500);
    document.getElementById("user-input").value = ""; // Xóa ô nhập sau khi gửi
}

// Hiển thị tin nhắn
function addMessage(sender, message, type) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("p");
    messageElement.classList.add(type);
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Cuộn xuống cuối cùng
}

// Xử lý khi nhấn Enter
function handleKeyPress(event) {
    if (event.key === "Enter") sendMessage();
}

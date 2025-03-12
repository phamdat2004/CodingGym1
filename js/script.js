document.addEventListener("DOMContentLoaded", function() {
    // Hiệu ứng hover phóng to card
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Cuộn mượt mà khi nhấp vào các liên kết trong menu
    document.querySelectorAll("nav .nav-link, aside .list-group-item a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Thêm hiệu ứng hiện dần (fade-in) khi cuộn trang
    const elements = document.querySelectorAll(".card");
    function fadeInOnScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        productCards.forEach(card => {
            const title = card.querySelector(".card-title").innerText.toLowerCase();
            const description = card.querySelector(".card-text").innerText.toLowerCase();

            if (title.includes(searchText) || description.includes(searchText)) {
                card.parentElement.style.display = "block"; // Hiển thị sản phẩm
            } else {
                card.parentElement.style.display = "none"; // Ẩn sản phẩm
            }
        });
    });
});

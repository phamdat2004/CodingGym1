document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let keyword = document.getElementById("searchInput").value.toLowerCase();
        if (keyword.trim() === "") return;

        // Chuyển hướng sang trang tìm kiếm
        window.location.href = "search.html?q=" + encodeURIComponent(keyword);
    });
});

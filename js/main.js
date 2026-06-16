// TrePav Whitepaper - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 初始化導航活躍狀態
    updateActiveNav();
    
    // 搜尋功能
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    // 平滑滾動
    setupSmoothScroll();
});

// 更新導航活躍狀態
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .sidebar-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 搜尋功能
function handleSearch() {
    const query = prompt('搜尋內容：');
    if (query) {
        alert('搜尋功能即將推出：' + query);
    }
}

// 平滑滾動
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 移動設備側邊欄切換
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('mobile-open');
    }
}

// 頁面加載時設置
window.addEventListener('load', function() {
    // 添加加載完成的視覺反饋
    document.body.style.opacity = '1';
});

// Ambil elemen yang diperlukan
let videoBg = document.getElementById('video-bg');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', function () {
  let value = window.scrollY;

  // Animasi teks
  text.style.opacity = 1 - value / 500;
  text.style.transform = `translateY(${value * 0.5}px)`;

  // Animasi tombol
  btn.style.opacity = 1 - value / 500;
  btn.style.transform = `translateY(${value * 0.5}px)`;
});
document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan semua link
    const links = document.querySelectorAll('header nav ul li a');
  
    // Menghapus kelas 'active' dari semua link
    links.forEach(link => link.classList.remove('active'));
  
    // Menambahkan kelas 'active' pada link yang sesuai dengan halaman
    const currentPage = window.location.pathname.split('/').pop(); // Mendapatkan nama file dari URL
  
    links.forEach(link => {
      const linkHref = link.getAttribute('href').split('/').pop();
      if (currentPage === linkHref) {
        link.classList.add('active');
      }
    });
  });
  
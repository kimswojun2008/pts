// Fungsi untuk menampilkan halaman Home
function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'none';
}

// Fungsi untuk menampilkan halaman Tentang Kami
function showAbout() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'block';
}

// Fungsi untuk menangani submit form
function submitForm(event) {
    event.preventDefault(); // Mencegah reload halaman saat submit

    const puas = document.getElementById('puas').checked;
    const tidakPuas = document.getElementById('tidakPuas').checked;

    if (puas && tidakPuas) {
        alert("Pilih salah satu: puas atau tidak puas.");
    } else if (puas || tidakPuas) {
        // Tampilkan pesan terima kasih
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.style.display = 'block';

        // Reset form (uncheck all checkboxes)
        document.getElementById('feedbackForm').reset();

        // Hilangkan pesan setelah 3 detik dengan animasi
        setTimeout(() => {
            thankYouMessage.classList.add('fade-out');
        }, 3000); // Tampilkan selama 3 detik

        // Sembunyikan pesan sepenuhnya setelah animasi selesai
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
            thankYouMessage.classList.remove('fade-out'); // Reset animasi untuk penggunaan selanjutnya
        }, 4500);
    } else {
        alert("Silakan pilih apakah Anda puas atau tidak.");
    }
}

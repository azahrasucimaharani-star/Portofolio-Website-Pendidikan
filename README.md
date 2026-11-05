# BelajarKuy!

BelajarKuy! adalah demo portofolio pendidikan berbentuk website statis multi-halaman. Beranda membantu memilih metode, sedangkan empat alat belajar tersedia pada halaman kerja masing-masing.

Identitas visual memakai emblem logo yang diberikan pemilik proyek dan foto meja belajar original untuk background hero Beranda (`assets/images/`).

## Halaman

- `index.html` — landing page, metode belajar, rekomendasi sederhana, cara kerja, dan privasi.
- `fitur.html` — pusat fitur dan tautan ke alat.
- `panduan.html` — tips belajar, pemilih metode, dan FAQ.
- `tentang.html` — cerita demo, prinsip, dan privasi.
- `kontak.html` — placeholder kontak berlabel jelas dan FAQ; tidak ada formulir palsu.
- `flashcard.html`, `kuis.html`, `planner.html`, `pomodoro.html` — alat belajar terpisah.

Navbar memiliki tepat lima menu utama di seluruh halaman. Empat halaman alat menandai “Fitur & Layanan” aktif dan menyediakan breadcrumb.

## Menjalankan

Buka `index.html` di browser modern. HTML memakai skrip `defer` biasa dan path relatif; tidak ada build step atau framework. Data belajar berada di `localStorage` pada kunci kompatibel `belajarkuy:v1`. Data tidak disinkronkan ke server/perangkat lain; membersihkan penyimpanan situs dapat menghapus progres.

## Fitur belajar

- Flashcard dengan flip 3D dan penjadwalan Leitner (1, 2, 4, 7, 14 hari).
- Kuis Matematika, IPA, dan Bahasa Inggris dengan timer, pembahasan, skor, dan review.
- Planner mingguan dengan CRUD tugas, HTML5 drag-and-drop, alternatif pindah hari, dan progress.
- Pomodoro dengan timer berbasis timestamp, pengaturan durasi, label sesi, statistik, dan grafik SVG tujuh hari.

## Struktur

```text
index.html, fitur.html, panduan.html, tentang.html, kontak.html
flashcard.html, kuis.html, planner.html, pomodoro.html
css/style.css, css/responsive.css
js/data.js, js/store.js, js/main.js
js/flashcard.js, js/quiz.js, js/planner.js, js/pomodoro.js
```

Bank soal dan seed data ada di `js/data.js`. `js/store.js` menyimpan dan memuat state. Saat pertama dibuka, contoh disiapkan; state pengguna yang tersimpan tidak ditimpa. Kontak di halaman Kontak adalah placeholder, bukan kanal yang dapat dihubungi. Konten ini adalah demo portofolio dan tidak mengklaim afiliasi dengan institusi.

## Leitner

Kartu baru berada di kotak 0. Penilaian “Hafal” menaikkan kotak (maksimum 5) dan menjadwalkan interval berdasarkan kotak baru. “Belum Hafal” mengembalikan kartu ke kotak 1, menetapkan jatuh tempo besok, lalu memasukkan kartu ke akhir antrean aktif. Tanggal menggunakan kalender lokal `YYYY-MM-DD`.

## Status rilis

Belum dideploy ke layanan hosting. Sebelum rilis publik, ganti placeholder kontak dengan informasi yang valid, uji di browser sasaran dan ukuran layar yang tercantum di PRD, serta jalankan Lighthouse.

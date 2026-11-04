# Educourse

Website statis multi-halaman untuk portofolio kursus online. Teknologi yang digunakan hanya HTML5, CSS3, dan Vanilla JavaScript.

## Menjalankan

Buka `index.html` langsung di browser, atau gunakan static server lokal. Tidak ada build step, backend, database, login, pembayaran, maupun LMS.

## Struktur

- 7 halaman utama dan 2 halaman detail berbasis query `id`
- `assets/css/` berisi token, komponen, dan breakpoint responsif
- `assets/js/data/` berisi data demo kelas, program, dan mentor
- `assets/js/` berisi shell global, katalog, serta detail kelas

## Alur halaman

- `index.html` adalah beranda dan memuat pilihan kelas, program, serta mentor dari data demo.
- `kelas.html` memfilter `assets/js/data/courses.js`, kemudian setiap kartu menuju `detail-kelas.html?id=...`.
- `program.html` memuat jalur belajar dari `assets/js/data/programs.js`, kemudian menuju `detail-program.html?id=...`.
- `mentor.html` dan `tentang.html` adalah halaman informasi pendukung.
- `jadwal.html` dan `tutor.html` dipertahankan sebagai rute kompatibilitas dan mengarahkan ke halaman Educourse yang benar.

## Catatan data demo

Seluruh nama, foto, kelas, mentor, durasi, harga/status, institusi, dan copy pada situs ini bersifat fiktif untuk kebutuhan portofolio. Pendaftaran tidak dibuka dan tidak ada kanal pembayaran atau akun sosial yang diklaim nyata.

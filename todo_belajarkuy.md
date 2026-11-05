# TODO — BelajarKuy! Multi-Page (PRD v3.0)

> Checklist implementasi untuk OpenCode. Tandai `[x]` hanya setelah pekerjaan dibuat **dan diuji**. Prioritaskan P0, kemudian P1, lalu P2.

> **Catatan QA eksekusi:** Sembilan halaman sudah dimuat di browser; masing-masing memiliki satu H1 dan tepat lima tautan navbar. Target tautan lokal tidak ada yang gagal. Overflow horizontal diuji pada 360, 768, 1024, dan 1440px (tidak ditemukan); hamburger dan rekomendasi metode diuji. Smoke test juga memeriksa flip kartu, feedback kuis, grid/dialog planner, mode timer, dan grafik. Uji browser lintas vendor, Lighthouse, skenario lengkap CRUD, timer sampai selesai, dan deploy masih perlu dilakukan.

## 0. Audit dan setup
- [x] Baca `prd_belajarkuy_multipage.md` dan audit proyek/PRD lama.
- [x] Pastikan tidak menghapus data pengguna pada kunci `belajarkuy:v1`.
- [x] Buat struktur 9 file HTML, CSS, JS modular, folder gambar, dan README.
- [x] Siapkan data demo dan bank soal lokal.

## 1. Design system (P0)
- [x] Definisikan CSS tokens teal/biru, tipografi DM Serif Display + Plus Jakarta Sans, spacing, radius, dan glass surface.
- [x] Buat navbar sticky **tepat 5 menu**, aria-current, hover, focus-visible.
- [x] Buat hamburger mobile aksesibel; Escape menutup menu.
- [x] Buat footer bersama dengan kontak placeholder dan label demo.
- [x] Buat komponen button, editorial section, feature card, form, empty state, toast, dialog, accordion.
- [ ] Audit kontras AA secara terukur; target sentuh ≥44px dan reduced motion sudah ditambahkan, tetapi belum diverifikasi menyeluruh.

## 2. Halaman utama (P0)
- [x] `index.html`: hero editorial dengan ilustrasi lokal CSS, CTA ke fitur/panduan.
- [x] Beranda: empat metode belajar, rekomendasi metode sederhana, cara kerja, privasi, CTA akhir.
- [x] `fitur.html`: empat fitur dengan manfaat, preview, CTA ke masing-masing halaman alat.
- [x] `panduan.html`: tips active recall, spaced repetition, latihan, perencanaan, fokus; pemilih metode dan FAQ.
- [x] `tentang.html`: cerita produk demo, misi/prinsip, privasi, CTA.
- [x] `kontak.html`: placeholder kontak jelas, FAQ; tanpa form pengiriman palsu.
- [x] Tidak ada statistik/testimoni/akreditasi fiktif yang disajikan sebagai fakta.

## 3. State dan data (P0)
- [x] Implementasikan `js/store.js` membaca/menulis `belajarkuy:v1` secara kompatibel.
- [x] Seed data contoh hanya pada instalasi pertama; jangan menimpa data yang ada.
- [x] Implementasikan fallback dan pesan saat storage rusak, penuh, atau tidak tersedia.
- [x] Simpan bank soal dan contoh di `js/data.js`.

## 4. Flashcard — `flashcard.html` (P0)
- [ ] CRUD dek dan kartu, validasi input, konfirmasi hapus.
- [ ] Flip 3D dan penilaian Hafal/Belum Hafal.
- [ ] Leitner kotak 0–5 dengan interval 1/2/4/7/14 hari dan tanggal lokal.
- [ ] Antrean due + maksimal 10 kartu baru/hari; ulangi Belum Hafal pada sesi aktif.
- [ ] Progress dan ringkasan akhir sesi.
- [ ] [P1] Shortcut keyboard dan statistik dek.
- [ ] [P1] Ekspor/impor JSON dengan validasi.

## 5. Kuis — `kuis.html` (P0)
- [ ] Bank soal minimal 10 soal per topik (Matematika, IPA, Bahasa Inggris).
- [ ] Pilih topik; acak soal/opsi; satu soal per layar.
- [ ] Timer 30 detik per soal; timeout = salah.
- [ ] Feedback benar/salah + pembahasan, tombol Lanjut.
- [ ] Hasil skor, benar/salah, durasi, ulangi.
- [ ] [P1] Review jawaban dan skor terbaik per topik.
- [ ] [P2] Kuis otomatis dari dek flashcard.

## 6. Planner — `planner.html` (P0)
- [ ] Grid mingguan Senin–Minggu, sorot hari ini.
- [ ] CRUD tugas, mapel/warna, hari, jam opsional, selesai.
- [ ] Drag & drop antar hari.
- [ ] Alternatif pindah hari untuk keyboard dan mobile.
- [ ] Progress mingguan, terlambat, toast pengingat selama halaman terbuka.
- [ ] [P1] Reset status tugas untuk minggu baru dengan konfirmasi.
- [ ] [P2] Notifikasi browser opt-in.

## 7. Pomodoro — `pomodoro.html` (P0)
- [ ] Mode fokus 25, istirahat 5, panjang 15 menit setelah 4 sesi.
- [ ] Mulai, jeda, reset, lewati; progress ring SVG.
- [ ] Hitung berdasarkan timestamp; uji tab background.
- [ ] Simpan sesi fokus selesai, statistik pribadi, grafik SVG 7 hari.
- [ ] [P1] Durasi kustom, label mapel, bunyi, judul tab.
- [ ] [P2] Hubungkan sesi fokus ke tugas planner.

## 8. Integrasi & QA
- [x] Navigasi antar-9 halaman berfungsi; tepat lima menu utama di setiap navbar.
- [x] Di halaman alat, menu Fitur & Layanan aktif dan breadcrumb benar.
- [ ] LocalStorage sinkron setelah berpindah halaman dan reload (mekanisme kompatibel dibuat, skenario lintas halaman belum diverifikasi penuh).
- [ ] Uji semua empty/error/success states; tidak ada link `href="#"` tanpa fungsi.
- [ ] Uji keyboard, fokus, dialog, menu mobile, accordion, reduced-motion.
- [x] Uji lebar 360, 768, 1024, 1440px; tidak ada overflow atau tombol tertutup.
- [ ] Uji Chrome/Firefox/Edge/Safari bila tersedia.
- [ ] Uji metadata SEO, alt, gambar berlisensi, lazy loading, dan performance.
- [ ] Uji file lokal (`index.html`) dan deploy statis.
- [ ] Dokumentasikan cara menjalankan, batasan localStorage, dan aset di README.

## 9. Selesai jika
- [ ] Seluruh kriteria penerimaan pada PRD v3.0 terpenuhi.
- [ ] Tidak ada framework, backend, database, login, atau form palsu.
- [ ] UI semua halaman terasa satu brand, profesional, dan tidak repetitif.

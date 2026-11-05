# PRD — BelajarKuy! | Multi-Page Learning Platform

**Versi:** 3.0 | **Status:** Spesifikasi implementasi | **Platform:** Website statis multi-page | **Teknologi:** HTML5, CSS3, Vanilla JavaScript | **Tujuan:** Portofolio frontend pendidikan.

## 1. Ringkasan produk
BelajarKuy! membantu pelajar menemukan metode belajar yang sesuai dengan kebutuhan: menghafal lewat Flashcard dengan spaced repetition, menguji pemahaman lewat Kuis, mengatur tugas dengan Planner, dan menjaga fokus lewat Pomodoro. **Perubahan dari PRD v2.0:** bukan lagi satu halaman panjang. Beranda adalah landing page promosi yang mengajak pengguna memilih metode belajar; setiap fitur memiliki halaman kerja sendiri. Semua data pengguna disimpan lokal di browser, tanpa backend, database, login, atau akun.

## 2. Sasaran dan prinsip
- Pengguna: siswa SMA, mahasiswa, dan pengunjung portofolio.
- Beranda menjelaskan manfaat, bukan menampilkan seluruh alat sekaligus.
- Maksimal dua langkah dari Beranda ke alat belajar yang dipilih.
- Tidak mengklaim statistik, testimoni, kemitraan, atau prestasi fiktif sebagai fakta.
- Target kualitas: Lighthouse Performance dan Accessibility >90 (sasaran, bukan jaminan), tampilan 360/768/1024/1440 px, keyboard usable.

## 3. Sitemap dan navigasi — TEPAT 5 menu utama
| Menu navbar | File | Isi |
|---|---|---|
| Beranda | `index.html` | Hero ajakan belajar, empat metode, cara kerja, rekomendasi sederhana, CTA |
| Fitur & Layanan | `fitur.html` | Pusat empat alat belajar, penjelasan, kartu akses fitur |
| Panduan Belajar | `panduan.html` | Tips praktis, pemilihan metode, FAQ belajar |
| Tentang Kami | `tentang.html` | Cerita produk, misi, prinsip, privasi |
| Kontak | `kontak.html` | Kontak placeholder, FAQ, tautan kanal valid |

**Halaman turunan (tidak muncul di navbar):** `flashcard.html`, `kuis.html`, `planner.html`, `pomodoro.html`. Semua halaman menampilkan navbar yang sama persis dengan lima menu di atas. Di halaman turunan, menu **Fitur & Layanan** berstatus aktif (`aria-current="page"`). Jangan menambah menu keenam, login, atau dropdown navigasi utama. Footer boleh mengulang lima menu dan menampilkan tautan alat belajar terpisah dengan label yang jelas.

**Alur:** Beranda → Fitur & Layanan → Pilih alat → Gunakan alat → Kembali ke Fitur. Alternatif: Beranda → Panduan Belajar → rekomendasi alat → halaman fitur. Tautan antardokumen menggunakan path relatif (`fitur.html`, bukan `#fitur`).

## 4. Arah UI/UX — Modern EdTech Editorial, ANTI AI SLOP
### Identitas visual
Terasa bersahabat, meyakinkan, modern, tenang, dan profesional. Hero memakai komposisi asimetris: teks kiri, foto pelajar yang natural atau ilustrasi SVG fungsional di kanan. Foto hanya dari sumber berlisensi dan kredit dicatat; sediakan placeholder visual yang elegan jika aset belum tersedia. Jangan mengarang foto kegiatan asli BelajarKuy!.

### Design tokens (CSS variables)
| Token | Warna | Kegunaan |
|---|---|---|
| `--bg` | `#FAF9F5` | Latar ivory |
| `--soft` | `#EAF2F5` | Panel pendukung biru pucat |
| `--ink` | `#172A3A` | Teks utama |
| `--mut` | `#586875` | Teks sekunder |
| `--line` | `#DCE4E7` | Divider |
| `--acc` | `#287C88` | Aksen teal untuk elemen interaktif (periksa kontras) |
| `--dark` | `#112B40` | Hero, navbar, CTA, footer |
| `--white` | `#FFFFFF` | Surface |
| `--warm` | `#E7AE78` | Aksen hangat terbatas |

Gunakan `DM Serif Display` untuk heading editorial dan `Plus Jakarta Sans` untuk body/UI, dengan fallback lokal. Maksimum container 1200px, gutter desktop 40px/mobile 20px, spacing antar-section 72–96px, radius 8–10px, shadow minimal. H1 hero `clamp(2.7rem,5vw,4.5rem)`, H2 `clamp(1.9rem,3vw,2.8rem)`, body minimal 16px. Teks panjang maksimal ~70 karakter per baris. Hindari gradient ungu-biru, glow, glassmorphism, blob acak, ikon 3D, emoji dekoratif, floating badge, semua judul rata tengah, card identik di setiap section, animasi berlebihan.

### Komponen bersama
- Navbar sticky ~76px: logo BelajarKuy!, tepat lima tautan, active underline, focus-visible; hamburger mobile dengan `aria-expanded`, `aria-controls`, Escape, dan tutup saat klik link.
- Button primer navy/ivory, sekunder outline, min. target 44px, radius 8px; jangan pakai `href="#"` tanpa fungsi.
- Card fitur: ikon SVG sederhana, judul, manfaat singkat, CTA nyata ke halaman alat.
- Form: label eksplisit, validasi dan feedback teks; empty/error/success states.
- Footer: brand, lima menu, catatan penyimpanan lokal, kontak placeholder, copyright, penanda demo portofolio.
- Microinteraction 150–250ms; flip flashcard sekitar 500ms; dukung `prefers-reduced-motion`.

## 5. Spesifikasi per halaman
### 5.1 Beranda — `index.html`
1. **Hero:** eyebrow “Belajar dengan caramu”, H1 “Belajar lebih mudah, dengan cara yang paling cocok buatmu.”, deskripsi singkat; CTA utama “Jelajahi Fitur” → `fitur.html`, sekunder “Cari Metode Belajar” → `panduan.html`. Foto pelajar natural di sisi kanan atau SVG editorial bila foto belum tersedia.
2. **Empat cara belajar:** daftar editorial 2×2 atau 4 kolom berisi Flashcard, Kuis, Planner, Pomodoro dengan deskripsi manfaat, bukan aplikasi interaktif penuh.
3. **Temukan metode yang cocok:** pemilih sederhana berbasis kebutuhan (menghafal / latihan soal / mengatur jadwal / fokus) yang menampilkan rekomendasi alat dan tautan. Tidak mengklaim diagnosis atau personalisasi AI.
4. **Cara kerja:** tiga langkah — pilih kebutuhan, gunakan alat, lanjutkan belajar.
5. **Privasi dan kemudahan:** data tetap di browser, tanpa login; jelaskan risiko kehilangan data bila storage dibersihkan.
6. **CTA akhir:** “Mulai dari cara belajar yang cocok untukmu” → `fitur.html`.
**Tidak perlu angka statistik fiktif, testimoni palsu, atau dashboard besar di hero.** Ringkasan belajar pribadi opsional di bawah fold hanya bila data lokal sudah ada, tidak menambah scope wajib.

### 5.2 Fitur & Layanan — `fitur.html`
Hero ringkas, empat fitur utama dengan layout bervariasi (alternating editorial rows atau dua kolom), tiap fitur punya manfaat, preview statis ringan, dan CTA ke halaman tersendiri. Tambahkan perbandingan “Kapan pakai fitur ini?” tanpa tabel kompleks. Tidak perlu fitur berbayar, akun, atau halaman turunan di navbar.

### 5.3 Panduan Belajar — `panduan.html`
Konten singkat yang benar-benar berguna: active recall, spaced repetition, latihan soal, perencanaan mingguan, dan sesi fokus/istirahat. Buat **pemilih metode belajar** dengan empat pilihan kebutuhan; hasil mengarahkan ke salah satu alat. Tambahkan FAQ accordion aksesibel dan CTA menuju Fitur. Hindari klaim ilmiah berlebihan dan tes gaya belajar yang menyatakan pengguna memiliki satu gaya tetap.

### 5.4 Tentang Kami — `tentang.html`
Hero editorial, cerita produk (konten demo), masalah yang diselesaikan, empat prinsip (sederhana, fleksibel, mandiri, privat), penjelasan penyimpanan lokal, CTA ke fitur. Tidak mengarang pendiri, tim, kemitraan, atau pencapaian nyata.

### 5.5 Kontak — `kontak.html`
Hero singkat, email `[email@contoh.id]`, WhatsApp `[Nomor WhatsApp]`, alamat `[Alamat]` sebagai placeholder jelas. Jangan membuat form pengiriman yang berpura-pura berhasil tanpa backend; bila ada form demo, jelaskan tidak mengirim pesan dan lebih baik gunakan mailto hanya setelah alamat valid. FAQ accordion dan CTA kembali ke fitur.

## 6. Empat halaman alat belajar — pertahankan logika PRD v2.0
### 6.1 Flashcard — `flashcard.html`
- CRUD dek (nama, warna) dan kartu (depan, belakang), konfirmasi penghapusan.
- Flip 3D CSS dengan klik/Spasi; tombol **Belum Hafal** dan **Hafal** setelah dibalik.
- Antrean: kartu jatuh tempo + maksimal 10 kartu baru per hari; kartu Belum Hafal kembali ke akhir sesi.
- Progress bar, sisa kartu, ringkasan sesi; shortcut Spasi, panah kiri/kanan jika tidak sedang mengetik.
- **Leitner:** kotak 0 baru, 1=1 hari, 2=2 hari, 3=4 hari, 4=7 hari, 5=14 hari. Hafal naik satu kotak (maks. 5); Belum Hafal kembali ke 1 dan dijadwalkan besok tetapi diulang di sesi aktif. Tanggal `YYYY-MM-DD` berdasarkan waktu lokal.
- P1: statistik dek, ekspor/impor JSON dengan validasi dan konfirmasi impor (berguna karena tanpa akun).

### 6.2 Kuis — `kuis.html`
- Bank soal lokal minimal 10 soal per topik: Matematika, IPA, Bahasa Inggris (konten demo).
- Pilih topik, satu soal per layar, empat opsi, timer 30 detik per soal; habis waktu dihitung salah.
- Setelah jawaban: status benar/salah + pembahasan, lalu tombol lanjut.
- Akhir sesi: skor, benar/salah, total waktu, ulangi, review jawaban.
- Acak soal dan pilihan; simpan skor terbaik per topik. P2: kuis dari dek flashcard jika waktu memungkinkan.

### 6.3 Planner — `planner.html`
- Grid Senin–Minggu, sorot hari ini.
- CRUD tugas: judul, mapel/warna, hari, jam opsional; tandai selesai.
- Drag & drop HTML5 antarkolom; **wajib** alternatif tombol “Pindah ke hari” untuk sentuh dan keyboard.
- Progress mingguan; sorot tugas hari ini dan keterlambatan; toast pengingat hanya ketika halaman terbuka.
- P1: reset centang untuk minggu baru dengan konfirmasi; P2: Notification API opt-in.

### 6.4 Pomodoro — `pomodoro.html`
- Mode Fokus 25 menit, Istirahat Pendek 5 menit, Istirahat Panjang 15 menit setelah empat sesi fokus.
- Tombol Mulai, Jeda, Reset, Lewati; progress ring SVG.
- Hitung waktu dengan timestamp target agar tetap akurat ketika tab tidak aktif.
- Simpan hanya sesi fokus yang benar-benar selesai (tanggal, menit, label).
- Statistik pribadi: menit belajar hari ini, total sesi, grafik batang 7 hari berbasis SVG; **ini bukan statistik promosi fiktif**.
- P1: pengaturan durasi, label mapel, bunyi pengingat opsional, judul tab berisi sisa waktu.

## 7. Data, state, dan penyimpanan
- Pertahankan satu kunci `localStorage`: `belajarkuy:v1` untuk kompatibilitas data PRD lama, jangan reset otomatis.
- Skema inti: `decks[]`, `cards[]`, `quizHistory[]`, `tasks[]`, `pomodoroSessions[]`, `settings{focus,shortBreak,longBreak,newCardsPerDay}`. Simpan tambahan best score dan metadata secara kompatibel bila dibutuhkan.
- Bank soal dan data contoh di `js/data.js`, bukan di storage permanen sebagai sumber kebenaran.
- Saat pertama kali buka: seed data demo seperlunya; jangan menimpa data pengguna yang sudah ada.
- Seluruh halaman memakai `store.js` yang sama; perubahan di halaman fitur terbaca di halaman lainnya saat dibuka.
- Tangani storage penuh/nonaktif, data rusak, dan tanggal lokal; berikan pesan ramah. Jangan mengirim data ke server.

## 8. Struktur proyek
```text
belajarkuy/
├── index.html
├── fitur.html
├── panduan.html
├── tentang.html
├── kontak.html
├── flashcard.html
├── kuis.html
├── planner.html
├── pomodoro.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── data.js
│   ├── store.js
│   ├── main.js
│   ├── flashcard.js
│   ├── quiz.js
│   ├── planner.js
│   └── pomodoro.js
├── assets/
│   └── images/
└── README.md
```
Gunakan `<script defer>` biasa (bukan ES modules) dan path relatif agar bisa dibuka langsung via `index.html`; tidak perlu build step. Setiap skrip fitur memeriksa keberadaan elemen target sebelum inisialisasi. Untuk gambar, prioritaskan file lokal WebP berlisensi atau placeholder SVG.

## 9. Persyaratan teknis dan aksesibilitas
- HTML semantik, satu H1 per halaman, `title`/meta description/Open Graph unik, alt text, breadcrumb pada halaman alat (di luar navbar), `aria-current="page"`.
- Keyboard: menu, dialog, flashcard, accordion, drag alternative; focus-visible jelas dan target ≥44px.
- WCAG 2.1 AA untuk teks, state tidak hanya warna, `aria-live` untuk status kuis/timer secukupnya.
- Responsive 360, 768, 1024, 1440px tanpa overflow; planner boleh scroll horizontal dengan petunjuk atau daftar hari di mobile.
- Loading cepat, gambar di bawah fold lazy-load, `width`/`height` untuk mengurangi layout shift, reduced motion.
- Jangan gunakan framework, library, database, backend, autentikasi, form palsu, atau tautan tidak berfungsi.
- Hosting statis: Vercel/Netlify/GitHub Pages. Uji file:// dan deploy URL.

## 10. Prioritas dan fase
- **P0:** 5 menu dan 9 halaman; shared design system; empat fitur dasar bekerja; localStorage; responsive; aksesibilitas utama.
- **P1:** keyboard shortcuts, review kuis, pengaturan timer, rekomendasi metode, impor/ekspor data, peningkatan UI.
- **P2:** kuis dari dek, browser notification, hubungan sesi Pomodoro dengan tugas.
- Fase: (1) audit & design tokens, (2) navbar/footer dan 5 halaman utama, (3) store + data demo, (4) empat halaman fitur, (5) QA & deploy.

## 11. Acceptance criteria
- [ ] Tepat lima menu navbar: Beranda, Fitur & Layanan, Panduan Belajar, Tentang Kami, Kontak.
- [ ] Halaman fitur terpisah, bukan section anchor satu halaman; semua tautan internal berfungsi.
- [ ] Hero Beranda mengajak belajar sesuai kebutuhan, dengan foto legal atau placeholder profesional.
- [ ] Semua halaman konsisten secara visual tetapi layout tidak repetitif.
- [ ] Flashcard CRUD + flip + Leitner + progress bekerja.
- [ ] Kuis bertimer + skor + pembahasan bekerja.
- [ ] Planner CRUD + drag-drop + alternatif sentuh/keyboard + progress bekerja.
- [ ] Pomodoro timestamp + riwayat + grafik pribadi bekerja.
- [ ] Data tetap ada setelah reload dan berpindah halaman; data lama tidak dihapus otomatis.
- [ ] Semua CTA valid; placeholder kontak diberi label; tidak ada klaim institusi palsu.
- [ ] Tidak overflow pada 360/768/1024/1440px; navigasi keyboard dan reduced-motion berfungsi.
- [ ] Tidak ada framework/backend/database; dapat dibuka dari index.html.

## 12. Risiko dan mitigasi
- Banyak halaman dan fitur: kerjakan P0 dulu, gunakan komponen CSS bersama.
- LocalStorage dibersihkan: jelaskan keterbatasan, tambah ekspor/impor JSON (P1).
- Drag & drop mobile: alternatif “Pindah ke hari”.
- Timer tab background: timestamp target.
- Gambar eksternal gagal dimuat: placeholder lokal, tanpa ketergantungan gambar untuk fungsi inti.
- Saran tambahan berbiaya rendah: indikator halaman aktif, breadcrumb di halaman alat, empty states, rekomendasi metode berbasis pilihan sederhana, dan tombol kembali ke pusat fitur.

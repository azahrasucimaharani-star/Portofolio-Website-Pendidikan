# PRD — KELASIA | Premium Online Learning Website

**Versi:** 2.0 — Approved UI Revision  
**Jenis:** Website statis multi-page, frontend-only  
**Teknologi:** HTML5, CSS3, Vanilla JavaScript  
**Tujuan:** Portofolio website PT  
**Status konten:** Seluruh data kelas, program, dan mentor adalah data demo/fiktif dan wajib diberi penanda yang jelas.

## 1. Ringkasan Produk

KELASIA adalah website kursus online untuk memperkenalkan kelas, jalur belajar terstruktur, dan mentor. Pengunjung dapat mencari serta memfilter kelas, melihat detail kurikulum, mengeksplorasi program, dan menuju kanal pendaftaran eksternal yang valid bila tersedia.

Website ini **bukan** platform LMS penuh. Di luar cakupan: login, dashboard pengguna, pembayaran, streaming video, sertifikat, pelacakan progres, database, dan pendaftaran internal.

### Tujuan
- Membantu pengunjung menemukan kelas berdasarkan minat dan level.
- Menyediakan informasi kelas dan program yang jelas.
- Memamerkan kualitas desain frontend yang responsif dan interaktif tanpa framework.
- Menghadirkan identitas premium, modern, minimalis, editorial, dan **anti AI slop**.

## 2. Sitemap dan Navigasi

**Tepat lima menu utama:**

| Menu | File |
|---|---|
| Beranda | `index.html` |
| Jelajahi Kelas | `kelas.html` |
| Program Belajar | `program.html` |
| Mentor | `mentor.html` |
| Tentang Kami | `tentang.html` |

Halaman turunan (tidak masuk navbar):
- `detail-kelas.html?id=slug`
- `detail-program.html?id=slug`

**Alur utama:** Beranda → Jelajahi Kelas → Cari/Filter → Detail Kelas → CTA pendaftaran eksternal (jika URL valid).  
**Alur alternatif:** Beranda → Program Belajar → Detail Program → Detail Kelas.

## 3. Acuan Desain yang Disetujui

**Acuan visual utama:** mockup Beranda KELASIA terakhir, dengan navbar navy, hero teks di kiri dan foto pelajar di kanan, diikuti langsung oleh section **Kelas Populer** berisi empat card kelas.

**Perubahan eksplisit yang mengesampingkan PRD v1.1:**
- Hapus **seluruh trust strip/statistics section** dari Beranda.
- Jangan tampilkan angka peserta, mentor, jumlah kelas, program, atau container statistik.
- Setelah hero, langsung tampilkan **Kelas Populer**.
- Data jumlah modul/durasi pada **card kelas** tetap boleh ditampilkan karena merupakan informasi kelas, bukan statistik promosi.

Acuan visual berlaku konsisten untuk seluruh halaman, tetapi komposisi tiap halaman harus berbeda sesuai fungsi.

## 4. Identitas Visual dan Design Tokens

**Arah:** Premium Modern EdTech × Editorial Learning Platform. Photography-driven, elegan, profesional, hangat, clean, dan minimalis.

```css
:root {
  --navy-950: #0B1C30;
  --navy-900: #10263E;
  --navy-800: #182A3A;
  --navy-700: #234765;
  --navy-600: #315F84;
  --ivory: #F8F6F1;
  --white: #FFFFFF;
  --sand: #F1EEE6;
  --text-primary: #13263D;
  --text-secondary: #555E68;
  --border: #E2E5E8;
  --accent: #E89A79;
  --accent-dark: #8A4A2D;
}
```

- Navy: navbar, hero, banner program, CTA, footer.
- Ivory: latar section konten utama.
- White: permukaan card.
- Coral: aksen seperlunya; jangan digunakan untuk teks kecil pada ivory.
- Tidak menggunakan gradient ungu, neon, glow, glassmorphism acak, atau dekorasi abstrak yang tidak bermakna.
- Pastikan kontras teks minimal WCAG AA.

### Tipografi
- **DM Serif Display:** headline hero, judul halaman, judul section, kutipan editorial.
- **Plus Jakarta Sans:** body, navigasi, tombol, label, form, metadata.
- Hero H1: `clamp(2.8rem, 5vw, 4.5rem)`, line-height ±1.08.
- Page H1: `clamp(2.5rem, 4vw, 3.5rem)`.
- Section H2: `clamp(2rem, 3vw, 2.75rem)`.
- Body: minimum 16px, line-height ±1.7.

### Grid dan Spacing
- Container maksimum 1200px.
- Gutter desktop 40px, mobile 20px.
- Jarak antar section sekitar 80px desktop, disesuaikan pada mobile.
- Gap card 20–24px.
- Radius card sekitar 8–12px; tombol sekitar 6px.
- Katalog: 3 kolom desktop, 2 tablet, 1 mobile.
- Kelas Populer Beranda: 4 kolom desktop, 2 tablet, 1 mobile.

## 5. Komponen Global

### Navbar
- Tinggi desktop sekitar 76px, navy gelap.
- Kiri: logo KELASIA dan subteks “Kursus Online”.
- Tengah: lima menu utama.
- Kanan: CTA “Jelajahi Kelas” menuju `kelas.html`.
- Active state berupa underline halus; hover/focus jelas.
- Sticky jika tidak mengganggu konten.
- Mobile: hamburger aksesibel, bisa ditutup dengan Escape.

### Tombol dan Link
- Primary: navy dengan teks ivory, tinggi minimal 44px.
- Secondary: outline navy atau transparan pada hero gelap dengan kontras memadai.
- CTA hero: “Jelajahi Kelas” dan “Lihat Program”.
- Semua tombol/link harus memiliki tujuan nyata, tidak menggunakan `href="#"` tanpa fungsi.

### Course Card
- Thumbnail konsisten, kategori kecil di atas gambar, judul, level, durasi/modul, mentor, harga/status bila relevan, tautan detail.
- Card putih, border tipis, radius moderat, shadow minimal.
- Foto mentor kecil; tombol panah bulat di bagian bawah.
- Gunakan komponen visual yang sama di Beranda dan Katalog.

### Footer
- Latar navy, tiga kolom: brand, navigasi, kontak placeholder.
- Copyright dan label demo.
- Tidak mengarang informasi kontak asli.

## 6. Spesifikasi Halaman

### 6.1 Beranda — `index.html`

**Urutan section final:** Navbar → Hero → Kelas Populer → Program Belajar → Mentor Pilihan → CTA Penutup → Footer.

**Hero:**
- Full-width dark navy, teks kiri dan foto pelajar belajar menggunakan laptop di kanan.
- Komposisi lengkung navy subtil seperti mockup; tidak ada elemen mengambang.
- Eyebrow: “PLATFORM KURSUS ONLINE”.
- H1: “Belajar Keterampilan untuk Masa Depanmu”.
- Deskripsi: “Kelas online interaktif dengan materi terstruktur, mentor berpengalaman, dan topik yang relevan dengan kebutuhan industri.”
- CTA “Jelajahi Kelas” → `kelas.html`; “Lihat Program” → `program.html`.

**Kelas Populer:**
- Langsung setelah hero, **tanpa container statistik**.
- Background ivory; label “KELAS POPULER”.
- Heading “Kelas Favorit Pilihan Peserta”.
- Link kanan “Lihat Semua Kelas” → `kelas.html`.
- Empat card kelas dari data lokal, menggunakan gaya mockup terakhir.

**Program Belajar:**
- Bidang navy editorial dua kolom: judul dan deskripsi di kiri; tiga indexed learning paths di kanan.
- Contoh: Frontend Developer, UI/UX Fundamentals, Data Analyst Starter.
- Link menuju `program.html` dan detail program terkait.

**Mentor Pilihan:**
- Latar ivory, tiga mentor unggulan dengan portrait natural, nama, bidang, pengalaman singkat, tautan kelas terkait.

**CTA Penutup:**
- Navy, heading “Mulai Perjalanan Belajarmu.”, deskripsi singkat, CTA “Temukan Kelas” → `kelas.html`.

### 6.2 Jelajahi Kelas — `kelas.html`
- Header editorial ivory dengan breadcrumb, H1 “Temukan Kelas yang Tepat Untukmu”, deskripsi, dan jumlah hasil yang dinamis.
- Filter bar: pencarian kata kunci, kategori, level, urutan (terbaru/alfabetis), Reset; setiap input memiliki label.
- Grid kelas 3/2/1 kolom sesuai breakpoint.
- Hasil berubah secara langsung berdasarkan filter dan urutan.
- Empty state “Tidak ada kelas yang ditemukan” dengan tombol Reset.
- Setiap card menuju `detail-kelas.html?id=slug`.

### 6.3 Detail Kelas — `detail-kelas.html`
- Query parameter `id` menentukan kelas dari `courses.js`.
- Breadcrumb, kategori, H1, ringkasan, level, durasi, modul, format, harga/status.
- Konten utama: tujuan belajar, persyaratan, kurikulum accordion, profil mentor.
- Panel informasi di samping pada desktop jika sesuai; stack pada mobile.
- CTA pendaftaran aktif hanya jika `enrollmentUrl` valid; jika kosong tampil “Pendaftaran belum dibuka”.
- ID tidak ditemukan: pesan ramah dan link kembali ke `kelas.html`.

### 6.4 Program Belajar — `program.html`
- Header editorial ivory dengan H1 “Belajar Lebih Terarah.”
- Minimal tiga learning paths dari `programs.js`.
- Daftar editorial dengan nomor urut, judul, level, estimasi durasi, target kemampuan, jumlah kelas, dan CTA “Lihat Program”.
- Divider tipis, layout tidak didominasi card mengambang.
- Satu program boleh ditonjolkan pada section navy tanpa mengarang capaian.

### 6.5 Detail Program — `detail-program.html`
- Query parameter `id` menentukan program.
- Breadcrumb, judul, ringkasan, level, estimasi durasi, jumlah kelas.
- Timeline vertikal berisi urutan kelas, ringkasan, level, durasi, link ke detail kelas.
- CTA menuju kelas pertama yang relevan.
- ID tidak ditemukan: pesan dan link ke `program.html`.

### 6.6 Mentor — `mentor.html`
- Header editorial ivory dengan H1 “Kenali Mentor Kami.”
- Featured mentor: foto besar dan informasi dalam layout dua kolom.
- Grid mentor lain dengan portrait, nama, bidang, pengalaman, dan kelas yang diajar.
- Minimal empat mentor dari `mentors.js`.
- Tidak membuat akun sosial atau kredensial palsu yang disajikan sebagai fakta.

### 6.7 Tentang Kami — `tentang.html`
- Intro editorial dua kolom.
- Cerita singkat KELASIA dan foto belajar natural.
- Visi dan misi sebagai dua kolom teks, bukan card berlebihan.
- Proses belajar bernomor: Jelajahi Kelas → Pelajari Detail → Pilih Jalur Belajar → Akses Kanal Pendaftaran.
- CTA navy “Temukan Kelas untuk Langkah Berikutnya.” menuju `kelas.html`.
- Seluruh cerita institusi fiktif diberi label demo.

## 7. Data Lokal

Gunakan:
- `assets/js/data/courses.js`
- `assets/js/data/programs.js`
- `assets/js/data/mentors.js`

Minimal 8 kelas, 3 program, dan 4 mentor. Hubungan ID harus konsisten.

**Kelas:** `id`, `title`, `category`, `level`, `durationHours`, `modules`, `mentorId`, `image`, `summary`, `syllabus`, `priceLabel`, `enrollmentUrl` (opsional).

**Program:** `id`, `title`, `level`, `outcomes`, `courseIds`, `estimatedDuration`.

**Mentor:** `id`, `name`, `specialty`, `experience`, `photo`, `courseIds`.

Gunakan data demo yang jelas; jangan menyamarkan statistik, harga, mentor, atau pencapaian fiktif sebagai fakta.

## 8. Aset Visual

- Foto natural dan relevan dengan pembelajaran; gunakan aset berlisensi Unsplash/Pexels atau aset lokal yang tersedia.
- Jika aset final belum tersedia, gunakan placeholder yang jelas dan mudah diganti.
- Hero menempatkan foto pelajar di kanan, teks di kiri.
- Gunakan `object-fit: cover`, crop terarah, dan ukuran gambar konsisten.
- Lazy-load gambar di bawah fold, sertakan dimensi untuk mengurangi layout shift.
- Hindari ilustrasi AI generik dan foto korporat yang tidak relevan.

## 9. Interaksi, Responsif, dan Aksesibilitas

- Vanilla JS untuk menu mobile, pencarian/filter/sort, query parameter, accordion, dan state kosong/error.
- Microinteraction sekitar 150–250ms; hindari animasi berlebihan.
- Dukung `prefers-reduced-motion`.
- Uji viewport 360px, 768px, 1024px, 1440px.
- Tidak boleh ada horizontal overflow atau heading terpotong.
- Target sentuh minimal 44px; focus-visible jelas; keyboard navigation berfungsi.
- Gunakan HTML semantik, label input, alt text, dan hierarki heading benar.
- SEO dasar: title unik, meta description, Open Graph.

## 10. Struktur Proyek

```text
kelasia/
├── index.html
├── kelas.html
├── detail-kelas.html
├── program.html
├── detail-program.html
├── mentor.html
├── tentang.html
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── main.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   ├── catalog.js
│   │   ├── detail.js
│   │   └── data/
│   │       ├── courses.js
│   │       ├── programs.js
│   │       └── mentors.js
│   └── images/
└── README.md
```

## 11. Tahapan Implementasi

1. Baca PRD dan audit file proyek yang sudah ada; jangan menimpa fungsi yang bekerja tanpa alasan.
2. Bangun/refine design tokens dan komponen global.
3. Implementasikan Beranda **mengikuti mockup terakhir tanpa statistik**.
4. Implementasikan katalog dan detail kelas beserta filter, query parameter, dan error state.
5. Implementasikan program dan detail program dengan timeline.
6. Implementasikan Mentor dan Tentang Kami.
7. Periksa keseragaman UI semua halaman.
8. QA responsif, aksesibilitas, tautan, dan deploy statis.

## 12. Aturan Anti AI Slop

**Dilarang:** gradient ungu, glow, glassmorphism, ikon 3D mengambang, blob acak, kartu berulang di semua section, shadow berat, badge dekoratif, statistik promosi, ilustrasi AI generik, semua judul center, CTA redundan, dan animasi mengganggu.

**Wajib:** tipografi kuat, foto natural, layout editorial bervariasi, whitespace terukur, kontras memadai, elemen bermakna, dan konsistensi antarhalaman.

## 13. Acceptance Criteria

- [ ] Tepat 5 menu utama dan 7 file HTML berfungsi.
- [ ] Beranda sesuai mockup KELASIA terakhir.
- [ ] **Tidak ada trust strip, container statistik, atau angka peserta/mentor/kelas/program pada Beranda.**
- [ ] Kelas Populer langsung menyusul Hero.
- [ ] Seluruh halaman memakai satu identitas navy–ivory yang konsisten.
- [ ] Pencarian, filter, sort, reset, dan jumlah hasil katalog berfungsi.
- [ ] Detail kelas/program membaca query `id` dan menangani ID salah.
- [ ] Accordion kurikulum aksesibel.
- [ ] Semua CTA menuju URL valid; tidak ada pendaftaran palsu.
- [ ] Minimal 8 kelas, 3 program, 4 mentor, berlabel demo.
- [ ] Responsif di 360/768/1024/1440px tanpa overflow.
- [ ] Keyboard, focus-visible, reduced motion, SEO dasar berfungsi.
- [ ] Hanya HTML, CSS, dan JavaScript tanpa framework/backend/database.
- [ ] Tidak ada pola visual AI slop yang dilarang.

---

**Prioritas akhir:** Implementasikan desain Beranda yang disetujui secara akurat, lalu turunkan design system tersebut ke enam halaman lainnya tanpa membuat semuanya tampak identik.

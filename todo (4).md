# TODO — KELASIA (berdasarkan PRD v2.0 — Approved UI Revision)

> Daftar tugas ini diturunkan langsung dari PRD v2.0 tanpa mengubah isinya. Jika ada perbedaan, **PRD adalah acuan utama**.
> Tech stack: HTML5, CSS3, Vanilla JavaScript. Tanpa framework, backend, dan database.

**Aturan kunci yang harus selalu diingat**
- Tepat 5 menu utama, 7 file HTML.
- Beranda **tanpa trust strip / statistik / angka peserta, mentor, kelas, program**.
- Setelah Hero langsung **Kelas Populer**.
- Semua data kelas, program, mentor = **demo**, wajib diberi penanda jelas.
- Tidak ada `href="#"` tanpa fungsi; tidak ada pendaftaran palsu.
- Anti AI slop (lihat PRD bagian 12).

---

## Fase 0 — Persiapan
- [ ] Baca PRD v2.0 sampai tuntas
- [ ] Audit file proyek yang sudah ada (jangan timpa fungsi yang sudah bekerja tanpa alasan)
- [ ] Buat struktur folder sesuai PRD bagian 10
- [ ] Kumpulkan aset foto (Unsplash/Pexels atau lokal); siapkan placeholder bila belum ada
- [ ] Siapkan foto: hero (pelajar + laptop), tentang kami, 4+ potret mentor, thumbnail 8+ kelas

```text
kelasia/
├── index.html, kelas.html, detail-kelas.html
├── program.html, detail-program.html
├── mentor.html, tentang.html
├── assets/css/   (tokens.css, main.css, responsive.css)
├── assets/js/    (main.js, catalog.js, detail.js, data/)
├── assets/images/
└── README.md
```

## Fase 1 — Data Lokal
- [ ] `assets/js/data/courses.js` — minimal 8 kelas
  - Field: `id`, `title`, `category`, `level`, `durationHours`, `modules`, `mentorId`, `image`, `summary`, `syllabus`, `priceLabel`, `enrollmentUrl` (opsional)
- [ ] `assets/js/data/programs.js` — minimal 3 program
  - Field: `id`, `title`, `level`, `outcomes`, `courseIds`, `estimatedDuration`
  - Contoh: Frontend Developer, UI/UX Fundamentals, Data Analyst Starter
- [ ] `assets/js/data/mentors.js` — minimal 4 mentor
  - Field: `id`, `name`, `specialty`, `experience`, `photo`, `courseIds`
- [ ] Pastikan relasi ID konsisten (`mentorId`, `courseIds`, dan sebaliknya)
- [ ] Beri label demo pada data fiktif; tidak ada statistik, harga, atau pencapaian palsu yang disamarkan sebagai fakta

## Fase 2 — Design System
- [ ] `tokens.css`: semua variabel warna (`--navy-950` s.d. `--navy-600`, `--ivory`, `--white`, `--sand`, `--text-primary`, `--text-secondary`, `--border`, `--accent`, `--accent-dark`)
- [ ] Impor font: DM Serif Display (headline) dan Plus Jakarta Sans (body, UI)
- [ ] Skala tipografi
  - [ ] Hero H1 `clamp(2.8rem, 5vw, 4.5rem)`, line-height ±1.08
  - [ ] Page H1 `clamp(2.5rem, 4vw, 3.5rem)`
  - [ ] Section H2 `clamp(2rem, 3vw, 2.75rem)`
  - [ ] Body minimal 16px, line-height ±1.7
- [ ] Container maksimum 1200px; gutter 40px desktop, 20px mobile
- [ ] Spacing antar section ±80px desktop; gap card 20–24px
- [ ] Radius card 8–12px, tombol ±6px
- [ ] Cek kontras teks minimal WCAG AA (coral tidak dipakai untuk teks kecil di ivory)
- [ ] Style tombol: primary, secondary (outline / transparan di hero gelap)
- [ ] Style `:focus-visible` jelas dan target sentuh minimal 44px
- [ ] Transisi 150–250ms dan dukungan `prefers-reduced-motion`

## Fase 3 — Komponen Global
- [ ] **Navbar**
  - [ ] Tinggi ±76px, latar navy gelap
  - [ ] Kiri: logo KELASIA + subteks "Kursus Online"
  - [ ] Tengah: 5 menu (Beranda, Jelajahi Kelas, Program Belajar, Mentor, Tentang Kami)
  - [ ] Kanan: CTA "Jelajahi Kelas" → `kelas.html`
  - [ ] Active state underline halus; hover/focus jelas
  - [ ] Sticky (jika tidak mengganggu konten)
  - [ ] Mobile: hamburger aksesibel (`aria-expanded`, `aria-controls`), tutup dengan Escape
- [ ] **Course Card** (dipakai sama di Beranda dan Katalog)
  - [ ] Thumbnail konsisten, kategori kecil di atas gambar
  - [ ] Judul, level, durasi/modul, mentor (foto kecil), harga/status
  - [ ] Tombol panah bulat di bawah, tautan ke detail
  - [ ] Card putih, border tipis, radius moderat, shadow minimal
- [ ] **Footer**: latar navy, 3 kolom (brand, navigasi, kontak placeholder), copyright + label demo, tanpa kontak asli
- [ ] **Page header editorial** (ivory) dengan breadcrumb, dipakai di halaman dalam
- [ ] Script `main.js`: render navbar/footer bersama (atau include konsisten), toggle menu mobile, penanda menu aktif

## Fase 4 — Beranda (`index.html`)
Urutan final: Navbar → Hero → Kelas Populer → Program Belajar → Mentor Pilihan → CTA Penutup → Footer
- [ ] **Hero** navy full-width, teks kiri, foto pelajar + laptop kanan, lengkung navy subtil, tanpa elemen mengambang
  - [ ] Eyebrow "PLATFORM KURSUS ONLINE"
  - [ ] H1 "Belajar Keterampilan untuk Masa Depanmu"
  - [ ] Deskripsi sesuai PRD
  - [ ] CTA "Jelajahi Kelas" → `kelas.html`; "Lihat Program" → `program.html`
- [ ] **Kelas Populer** langsung setelah hero, **tanpa container statistik**
  - [ ] Latar ivory, label "KELAS POPULER", heading "Kelas Favorit Pilihan Peserta"
  - [ ] Link "Lihat Semua Kelas" → `kelas.html`
  - [ ] 4 card dari `courses.js`; grid 4 / 2 / 1 kolom
- [ ] **Program Belajar**: bidang navy 2 kolom (judul + deskripsi kiri, 3 indexed learning paths kanan), tertaut ke `program.html` dan detail program
- [ ] **Mentor Pilihan**: ivory, 3 mentor (portrait natural, nama, bidang, pengalaman singkat, tautan kelas terkait)
- [ ] **CTA Penutup**: navy, "Mulai Perjalanan Belajarmu.", tombol "Temukan Kelas" → `kelas.html`
- [ ] Verifikasi: tidak ada trust strip atau angka statistik

## Fase 5 — Jelajahi Kelas (`kelas.html`, `catalog.js`)
- [ ] Header editorial ivory: breadcrumb, H1 "Temukan Kelas yang Tepat Untukmu", deskripsi, jumlah hasil dinamis
- [ ] Filter bar dengan label di setiap input: pencarian kata kunci, kategori, level, urutan (terbaru/alfabetis), tombol Reset
- [ ] Grid 3 kolom desktop / 2 tablet / 1 mobile
- [ ] Hasil berubah langsung saat filter/sort/search berubah
- [ ] Empty state "Tidak ada kelas yang ditemukan" + tombol Reset
- [ ] Card menuju `detail-kelas.html?id=slug`

## Fase 6 — Detail Kelas (`detail-kelas.html`, `detail.js`)
- [ ] Baca query `id` dari URL, ambil data dari `courses.js`
- [ ] Breadcrumb, kategori, H1, ringkasan, level, durasi, modul, format, harga/status
- [ ] Konten: tujuan belajar, persyaratan, kurikulum (accordion aksesibel), profil mentor
- [ ] Panel info samping di desktop; stack di mobile
- [ ] CTA pendaftaran aktif hanya jika `enrollmentUrl` valid; jika kosong tampil "Pendaftaran belum dibuka"
- [ ] ID tidak ditemukan: pesan ramah + link kembali ke `kelas.html`
- [ ] Accordion: keyboard (Enter/Space), `aria-expanded`, `aria-controls`

## Fase 7 — Program Belajar (`program.html`)
- [ ] Header editorial ivory, H1 "Belajar Lebih Terarah."
- [ ] Minimal 3 learning path dari `programs.js`
- [ ] Daftar editorial: nomor urut, judul, level, estimasi durasi, target kemampuan, jumlah kelas, CTA "Lihat Program"
- [ ] Divider tipis; hindari layout card mengambang
- [ ] Opsional: satu program ditonjolkan di section navy (tanpa capaian karangan)

## Fase 8 — Detail Program (`detail-program.html`)
- [ ] Baca query `id`, ambil dari `programs.js`
- [ ] Breadcrumb, judul, ringkasan, level, estimasi durasi, jumlah kelas
- [ ] Timeline vertikal urutan kelas (ringkasan, level, durasi, link ke detail kelas)
- [ ] CTA menuju kelas pertama yang relevan
- [ ] ID tidak ditemukan: pesan + link ke `program.html`

## Fase 9 — Mentor (`mentor.html`)
- [ ] Header editorial ivory, H1 "Kenali Mentor Kami."
- [ ] Featured mentor: foto besar + info, layout 2 kolom
- [ ] Grid mentor lain: portrait, nama, bidang, pengalaman, kelas yang diajar
- [ ] Minimal 4 mentor dari `mentors.js`
- [ ] Tidak ada akun sosial atau kredensial palsu yang disajikan sebagai fakta

## Fase 10 — Tentang Kami (`tentang.html`)
- [ ] Intro editorial 2 kolom
- [ ] Cerita singkat KELASIA + foto belajar natural
- [ ] Visi dan misi sebagai dua kolom teks (bukan card berlebihan)
- [ ] Proses bernomor: Jelajahi Kelas → Pelajari Detail → Pilih Jalur Belajar → Akses Kanal Pendaftaran
- [ ] CTA navy "Temukan Kelas untuk Langkah Berikutnya." → `kelas.html`
- [ ] Semua cerita institusi fiktif diberi label demo

## Fase 11 — Aset, Performa, dan SEO
- [ ] Gambar `object-fit: cover`, crop terarah, ukuran konsisten
- [ ] Lazy-load gambar di bawah fold; atribut `width`/`height` untuk mengurangi layout shift
- [ ] Alt text relevan di semua gambar
- [ ] Title unik, meta description, Open Graph dasar di setiap halaman
- [ ] Hierarki heading benar (satu H1 per halaman)

## Fase 12 — Responsif dan Aksesibilitas
- [ ] Uji 360px, 768px, 1024px, 1440px
- [ ] Tidak ada horizontal overflow; tidak ada heading terpotong
- [ ] Navigasi keyboard penuh; `focus-visible` terlihat
- [ ] HTML semantik (`header`, `nav`, `main`, `section`, `footer`), label input benar
- [ ] `prefers-reduced-motion` berfungsi
- [ ] Semua tombol/link punya tujuan nyata; tidak ada `href="#"` kosong

## Fase 13 — QA Akhir
- [ ] Cek keseragaman UI di 7 halaman (satu identitas navy–ivory, komposisi tiap halaman tetap berbeda)
- [ ] Uji semua tautan internal, query parameter, dan state kosong/error
- [ ] Uji filter, sort, reset, dan jumlah hasil katalog
- [ ] Audit anti AI slop: tidak ada gradient ungu, glow, glassmorphism, ikon 3D, blob acak, shadow berat, badge dekoratif, statistik promosi, ilustrasi AI generik; tidak semua judul center
- [ ] Pastikan tidak ada framework/backend/database
- [ ] Tulis `README.md` (cara menjalankan, struktur, catatan data demo)
- [ ] Deploy statis dan cek semua halaman di URL publik

---

## Acceptance Criteria (Checklist Final dari PRD)
- [ ] Tepat 5 menu utama dan 7 file HTML berfungsi
- [ ] Beranda sesuai mockup KELASIA terakhir
- [ ] **Tidak ada trust strip, container statistik, atau angka peserta/mentor/kelas/program di Beranda**
- [ ] Kelas Populer langsung menyusul Hero
- [ ] Seluruh halaman memakai satu identitas navy–ivory yang konsisten
- [ ] Pencarian, filter, sort, reset, dan jumlah hasil katalog berfungsi
- [ ] Detail kelas/program membaca query `id` dan menangani ID salah
- [ ] Accordion kurikulum aksesibel
- [ ] Semua CTA menuju URL valid; tidak ada pendaftaran palsu
- [ ] Minimal 8 kelas, 3 program, 4 mentor, berlabel demo
- [ ] Responsif di 360/768/1024/1440px tanpa overflow
- [ ] Keyboard, focus-visible, reduced motion, SEO dasar berfungsi
- [ ] Hanya HTML, CSS, dan JavaScript tanpa framework/backend/database
- [ ] Tidak ada pola visual AI slop yang dilarang

**Prioritas akhir (PRD):** implementasikan desain Beranda yang disetujui secara akurat, lalu turunkan design system ke enam halaman lain tanpa membuatnya tampak identik.

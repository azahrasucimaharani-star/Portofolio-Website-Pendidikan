# PRD — Website Universitas Dewata Nusantara

## 1. Ringkasan

| Item | Keterangan |
|---|---|
| Nama proyek | Website Resmi Universitas Dewata Nusantara |
| Jenis | Website company profile universitas, multi page |
| Teknologi | HTML5, CSS3, JavaScript (vanilla). **Tanpa framework/library** |
| Menu utama | **Tepat 5, tidak boleh lebih** |
| Bahasa | Indonesia |
| Gaya visual | Emas & hijau, nuansa alam, classy, ±30% terinspirasi gaya Hogwarts/Harry Potter |

**Tujuan:** menampilkan Universitas Dewata Nusantara sebagai institusi yang kredibel, hangat, dan berkarakter, sekaligus memudahkan calon mahasiswa menemukan informasi dan mendaftar.

**Target pengguna:** calon mahasiswa, orang tua, mahasiswa aktif, dosen/staf, mitra dan alumni.

---

## 2. Struktur Navigasi

Logo di kiri bersifat tautan ke Beranda (bukan item menu). Menu utama hanya 5, masing-masing dengan dropdown/mega menu.

| # | Menu Utama | Halaman | Submenu (anchor/section) |
|---|---|---|---|
| 1 | Tentang Kami | `tentang.html` | Sejarah, Visi & Misi, Sambutan Rektor, Struktur Organisasi, Akreditasi, Fasilitas, Kontak & Lokasi |
| 2 | Akademik | `akademik.html` | Fakultas & Program Studi, Kalender Akademik, Dosen, Perpustakaan, Kurikulum |
| 3 | Penerimaan | `penerimaan.html` | Jalur Masuk, Syarat, Biaya Kuliah, Beasiswa, Jadwal Seleksi, Cara Daftar, FAQ |
| 4 | Kehidupan Kampus | `kehidupan-kampus.html` | Organisasi Mahasiswa, Kegiatan, Prestasi, Asrama, Olahraga, Alumni & Karier |
| 5 | Berita & Informasi | `berita.html` | Berita, Pengumuman, Agenda, Galeri, Penelitian & Pengabdian |

**Elemen tambahan di header (bukan menu utama):**
- Tombol CTA **Daftar Sekarang** (emas)
- Tautan **Login SIAKAD**
- Ikon pencarian (membuka overlay pencarian sederhana)

**Halaman pendukung:** `index.html` (Beranda), `berita-detail.html` (template detail berita).

---

## 3. Struktur Folder

```
/
├── index.html
├── tentang.html
├── akademik.html
├── penerimaan.html
├── kehidupan-kampus.html
├── berita.html
├── berita-detail.html
├── css/
│   ├── variables.css      (warna, font, spacing)
│   ├── base.css           (reset, tipografi)
│   ├── components.css     (navbar, button, card, footer, dll)
│   └── pages.css          (gaya khusus per halaman)
├── js/
│   ├── main.js            (navbar, mobile menu, scroll effect)
│   ├── slider.js          (hero slider & testimoni)
│   ├── tabs-accordion.js  (tab, FAQ accordion)
│   ├── filter.js          (filter berita/galeri, pencarian)
│   └── data.js            (data konten dalam objek JS)
└── assets/
    ├── img/               (hero, fakultas, kampus, kegiatan, dosen, berita)
    └── icons/             (SVG ornamen, logo)
```

---

## 4. Desain Visual (Design System)

### 4.1 Palet Warna

| Peran | Nama | Hex |
|---|---|---|
| Primer | Hijau Hutan | `#1F3D2B` |
| Primer gelap | Hijau Malam | `#122219` |
| Aksen | Emas Klasik | `#C9A24B` |
| Aksen terang | Emas Cerah | `#E3C474` |
| Latar terang | Perkamen | `#F7F1E1` |
| Latar sekunder | Krem Lembut | `#EFE6CF` |
| Teks utama | Arang Hijau | `#1B1F1A` |
| Teks pada latar gelap | Krem | `#F4EBD3` |

### 4.2 Tipografi

- **Heading:** serif klasik bernuansa Harry Potter, misalnya *Cinzel* atau *Cormorant Garamond* (Google Fonts), huruf kapital pada judul besar, letter-spacing sedikit renggang.
- **Body:** sans-serif bersih dan terbaca, misalnya *Lora* atau *Inter*.
- Ukuran body 16–18px, line-height 1.7, kontras teks minimal WCAG AA.
- Hierarki jelas: H1 48–64px, H2 36–40px, H3 22–26px.

### 4.3 Konsep "30% Harry Potter" (halus, tidak berlebihan)

- Ornamen garis emas ganda dan pemisah section berbentuk motif daun/bintang kecil.
- Kartu seperti perkamen: latar krem, border emas tipis, sudut sedikit membulat.
- Lambang universitas berbentuk perisai (crest) dengan emas dan hijau.
- Overlay gradasi hijau gelap pada gambar hero, efek cahaya hangat seperti lilin (glow emas lembut).
- Heading dengan font serif bergaya manuskrip, inisial kapital dekoratif pada sambutan rektor.
- Efek partikel emas halus (CSS/JS ringan) pada hero.
- Nuansa alam: daun, pepohonan, kabut tipis, tekstur kertas sangat halus.
- **Batas:** tidak memakai nama, karakter, atau logo dari franchise manapun.

### 4.4 Komponen UI

**Button (wajib transisi):**
- Primary: latar emas, teks hijau gelap; hover: gradasi emas cerah, naik 2px, bayangan emas, `transition: all .3s ease`.
- Secondary: outline emas, latar transparan; hover: terisi emas.
- Dark: latar hijau, teks krem; hover: emas.
- Efek tambahan: garis/shine bergerak saat hover, state `:focus-visible` jelas.

**Navbar:** sticky, transparan di atas hero lalu berubah hijau gelap saat scroll; dropdown/mega menu dengan animasi fade + slide; versi mobile berupa hamburger dengan drawer.

**Card:** border emas tipis, hover terangkat dan bayangan lembut.

**Footer:** hijau gelap, ornamen emas di atas, 4 kolom (tentang, tautan cepat, kontak, media sosial) dan baris hak cipta.

---

## 5. Kebutuhan Gambar

| Lokasi | Kebutuhan | Keterangan |
|---|---|---|
| Beranda, section 1 (**wajib**) | Foto hero kampus | Bangunan kampus/gerbang dikelilingi pepohonan, resolusi min. 1920×1080 |
| Beranda, Fakultas | 6 foto kecil | Satu per fakultas |
| Beranda, Berita | 3 foto | Thumbnail berita |
| Tentang, Sejarah & Rektor | Foto gedung lama dan potret rektor | Tampilan formal |
| Tentang, Fasilitas | 4–6 foto | Perpustakaan, lab, aula, masjid/pura/tempat ibadah umum, taman |
| Akademik | Foto per fakultas dan foto dosen | Potret profesional |
| Penerimaan | 1 banner dan foto mahasiswa | Suasana wisuda atau orientasi |
| Kehidupan Kampus | Galeri 8–12 foto | UKM, olahraga, asrama, wisuda |
| Berita | Foto tiap berita | Rasio 16:9 |

**Aturan gambar:** format WebP/JPG, `loading="lazy"` (kecuali hero), atribut `alt` deskriptif, `object-fit: cover`, rasio konsisten. Sumber boleh stok gratis (Unsplash/Pexels) yang disimpan lokal di `assets/img/`.

---

## 6. Spesifikasi Halaman

### 6.1 Beranda (`index.html`)

1. **Hero (section 1, wajib gambar):** foto kampus fullscreen dengan overlay hijau gelap, headline "Universitas Dewata Nusantara", tagline, 2 tombol (*Daftar Sekarang*, *Jelajahi Program Studi*), partikel emas halus, indikator scroll.
2. **Statistik:** counter animasi (mahasiswa aktif, program studi, dosen, mitra, alumni).
3. **Sambutan singkat:** foto rektor dan kutipan, tombol "Selengkapnya".
4. **Fakultas unggulan:** grid 6 kartu berfoto.
5. **Jalur penerimaan:** 3–4 kartu ringkas dan CTA.
6. **Berita & pengumuman terbaru:** 3 kartu berita dan daftar pengumuman.
7. **Kehidupan kampus:** galeri mosaik singkat.
8. **Testimoni alumni:** slider.
9. **Banner CTA** penutup dan footer.

### 6.2 Tentang Kami (`tentang.html`)
Sejarah (timeline vertikal), visi & misi, sambutan rektor, struktur organisasi (bagan sederhana), akreditasi (kartu lencana), fasilitas (galeri/tab), kontak & lokasi (form kontak dan peta embed atau gambar peta).

### 6.3 Akademik (`akademik.html`)
Daftar fakultas (tab/accordion) dengan program studi masing-masing, kalender akademik (tabel), dosen (kartu dengan filter fakultas), perpustakaan (info jam layanan dan koleksi), kurikulum.

### 6.4 Penerimaan (`penerimaan.html`)
Jalur masuk (tab), syarat, tabel biaya kuliah per prodi, beasiswa (kartu), jadwal seleksi (timeline), langkah pendaftaran (stepper 1–5), FAQ (accordion), CTA daftar.

### 6.5 Kehidupan Kampus (`kehidupan-kampus.html`)
Organisasi mahasiswa (UKM/BEM), kegiatan, prestasi (kartu dan penghargaan), asrama, fasilitas olahraga, alumni & karier (info bursa kerja dan testimoni), galeri.

### 6.6 Berita & Informasi (`berita.html` dan `berita-detail.html`)
Daftar berita dengan filter kategori dan pencarian, pengumuman, agenda (kalender daftar), galeri foto, penelitian & pengabdian masyarakat. Detail berita: gambar utama, judul, tanggal, isi, berita terkait.

---

## 7. Data Konten

Data disimpan di `js/data.js` dan/atau ditulis langsung di HTML. Semua ditulis seolah data nyata, **tanpa label atau keterangan dummy/demo**.

### 7.1 Identitas
- Nama: **Universitas Dewata Nusantara**
- Berdiri: 1985
- Akreditasi institusi: **Unggul**
- Alamat: Jl. Raya Kampus Nusantara No. 1, Denpasar, Bali
- Telepon: (0361) 555-0100 · Email: info@undn.ac.id
- Rektor: Prof. Dr. I Made Surya Wiguna, M.Sc.
- Motto: *"Berilmu, Berbudaya, Berkelanjutan"*

### 7.2 Fakultas dan Program Studi

| Fakultas | Program Studi |
|---|---|
| Fakultas Teknik dan Teknologi | Teknik Informatika, Teknik Sipil, Teknik Elektro, Arsitektur |
| Fakultas Ekonomi dan Bisnis | Manajemen, Akuntansi, Bisnis Digital |
| Fakultas Pariwisata dan Budaya | Pariwisata, Perhotelan, Sastra dan Budaya Nusantara |
| Fakultas Pertanian dan Kelautan | Agroteknologi, Ilmu Kelautan, Teknologi Pangan |
| Fakultas Kesehatan | Keperawatan, Kesehatan Masyarakat, Gizi |
| Fakultas Ilmu Lingkungan dan Kehutanan | Ilmu Lingkungan, Kehutanan, Konservasi Sumber Daya Alam |

### 7.3 Statistik Beranda
18.500 mahasiswa · 21 program studi · 920 dosen · 75 mitra kerja sama · 42.000 alumni

### 7.4 Jalur Penerimaan
Jalur Prestasi (rapor), Jalur Tes Tulis, Jalur Beasiswa, Jalur Pindahan. Pendaftaran gelombang 1 (Januari–Maret), gelombang 2 (April–Juni), gelombang 3 (Juli–Agustus).

### 7.5 Biaya Kuliah (contoh per semester)
Teknik Rp 8.500.000 · Ekonomi dan Bisnis Rp 7.000.000 · Pariwisata dan Budaya Rp 6.500.000 · Pertanian dan Kelautan Rp 6.500.000 · Kesehatan Rp 9.000.000 · Ilmu Lingkungan Rp 6.500.000

### 7.6 Beasiswa
Beasiswa Prestasi Akademik, Beasiswa Dewata Cemerlang (daerah 3T), Beasiswa Atlet dan Seniman, Beasiswa Yatim dan Dhuafa.

### 7.7 Organisasi Kampus
BEM Universitas, Mapala Dewata, UKM Seni Tari dan Gamelan, UKM Paduan Suara, UKM Robotika, UKM Fotografi, UKM Bela Diri, UKM Debat dan Bahasa.

### 7.8 Berita (minimal 6)
1. Dewata Nusantara Raih Akreditasi Unggul
2. Mahasiswa Teknik Juara Nasional Kompetisi Robotik
3. Program Penanaman 5.000 Pohon di Kawasan Kampus
4. Pembukaan Penerimaan Mahasiswa Baru Gelombang 1
5. Kerja Sama Internasional dengan Universitas Mitra di Asia
6. Wisuda ke-38: 1.250 Lulusan Dilepas

### 7.9 Pengumuman dan Agenda
Libur akademik, jadwal ujian tengah semester, seminar nasional, open house kampus, jadwal tes seleksi.

---

## 8. Kebutuhan Fungsional (JavaScript)

| ID | Fitur |
|---|---|
| F1 | Navbar sticky dan berubah warna saat scroll |
| F2 | Mega menu/dropdown pada 5 menu utama (hover desktop, klik mobile) |
| F3 | Hamburger menu dan drawer untuk mobile |
| F4 | Hero slider/efek fade dan partikel emas ringan |
| F5 | Counter statistik animasi saat terlihat (IntersectionObserver) |
| F6 | Scroll reveal pada section |
| F7 | Tab dan accordion (fakultas, jalur masuk, FAQ) |
| F8 | Filter kategori dan pencarian berita/dosen |
| F9 | Lightbox galeri foto |
| F10 | Slider testimoni |
| F11 | Validasi form kontak (client-side) |
| F12 | Tombol kembali ke atas |
| F13 | Overlay pencarian situs sederhana |

---

## 9. Kebutuhan Non-Fungsional

- **Responsif:** desktop (≥1200px), tablet (768–1199px), mobile (<768px).
- **Performa:** gambar dioptimalkan, CSS/JS dipisah dan ringan, skor Lighthouse target ≥ 85.
- **Aksesibilitas:** HTML semantik (`header`, `nav`, `main`, `section`, `footer`), atribut `alt`, kontras memadai, navigasi keyboard, `aria-label` pada navigasi.
- **SEO dasar:** `title` dan `meta description` unik per halaman, heading berurutan.
- **Kompatibilitas:** Chrome, Firefox, Edge, Safari versi terbaru.
- **Konsistensi:** header dan footer identik di semua halaman.

---

## 10. Kriteria Penerimaan

- [ ] Menu utama **tepat 5** di semua halaman
- [ ] Section 1 Beranda menampilkan foto/gambar hero
- [ ] Hanya HTML, CSS, JS tanpa framework atau library
- [ ] Palet emas dan hijau konsisten, nuansa alam dan elegan
- [ ] Elemen bergaya "Harry Potter" tampil halus (ornamen, serif, perkamen) tanpa meniru IP
- [ ] Semua tombol memiliki transisi hover dan focus
- [ ] Teks jelas, rapi, kontras baik, mudah dibaca
- [ ] Tidak ada keterangan "dummy/demo/contoh" di halaman manapun
- [ ] Responsif di desktop, tablet, dan mobile
- [ ] Semua tautan internal berfungsi, tidak ada halaman kosong

---

## 11. Rencana Pengerjaan

1. Setup struktur folder, variabel CSS, dan komponen dasar (navbar, footer, button)
2. Beranda
3. Tentang Kami dan Akademik
4. Penerimaan dan Kehidupan Kampus
5. Berita & Informasi dan detail berita
6. Interaksi JS, responsif, dan optimasi
7. Pengujian dan perapian akhir

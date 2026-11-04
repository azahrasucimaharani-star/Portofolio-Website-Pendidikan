# PRD — Bimbelku | Website Bimbingan Belajar

**Versi:** 1.0 — Draf untuk konfirmasi  
**Status:** Belum disetujui  
**Kategori:** Pendidikan / Bimbingan Belajar  
**Jenis:** Website informasi dan katalog program bimbel statis, multi-page  
**Teknologi:** HTML5, CSS3, Vanilla JavaScript tanpa framework  
**Target deployment:** Vercel static hosting  
**Status data:** Seluruh nama, angka, harga, jadwal, profil, testimoni, alamat, dan kontak dalam draf ini adalah **DEMO** sampai diganti dengan informasi resmi.

## 1. Ringkasan Produk

Bimbelku adalah konsep website bimbingan belajar untuk siswa SD, SMP, SMA/SMK, serta peserta persiapan UTBK dan ujian masuk. Website membantu siswa dan orang tua memahami pilihan program, mata pelajaran, metode belajar, tutor, jadwal, kapasitas kelas, dan biaya sebelum menghubungi kanal pendaftaran eksternal.

Website berfungsi sebagai katalog informasi. MVP tidak menyediakan akun, pembayaran online, absensi, kelas video, rapor otomatis, penyimpanan progres, atau database. Pendaftaran hanya diarahkan ke kanal eksternal yang benar-benar tersedia, seperti WhatsApp resmi.

## 2. Positioning Produk

### 2.1 Positioning

> Bimbingan belajar terarah dengan kelas kecil, evaluasi berkala, dan laporan perkembangan yang mudah dipahami siswa maupun orang tua.

### 2.2 Nilai utama

- Program disusun berdasarkan jenjang dan kebutuhan belajar siswa.
- Kapasitas kelas dibatasi agar tutor dapat memberi perhatian yang memadai.
- Evaluasi dilakukan secara berkala untuk mengukur penguasaan materi.
- Try out digunakan pada program persiapan ujian.
- Orang tua memperoleh informasi perkembangan belajar secara terstruktur.
- Jadwal, format kelas, kapasitas, dan biaya ditampilkan dengan jelas sebelum pendaftaran.

### 2.3 Istilah produk

Gunakan istilah berikut secara konsisten:

- Program bimbel
- Mata pelajaran
- Jenjang
- Kelas reguler
- Kelas intensif
- Tutor
- Jadwal
- Try out
- Paket belajar
- Evaluasi berkala
- Laporan perkembangan

Jangan menggunakan istilah kursus keterampilan, e-learning, learning path, bootcamp karier, atau istilah yang mengarah ke pelatihan profesional.

## 3. Tujuan Produk

### 3.1 Tujuan pengguna

- Menemukan program yang sesuai dengan jenjang dan kebutuhan siswa.
- Membandingkan format, jadwal, kapasitas kelas, dan biaya.
- Memahami materi dan target hasil belajar sebelum mendaftar.
- Mengetahui pengalaman tutor dan program yang mereka ajar.
- Menghubungi kanal pendaftaran resmi tanpa melalui formulir palsu.

### 3.2 Tujuan bisnis

- Menjelaskan layanan bimbel dengan bahasa yang meyakinkan dan mudah dipahami.
- Mengarahkan pengunjung ke program yang relevan.
- Mengurangi pertanyaan dasar dengan informasi jadwal, biaya, dan FAQ yang lengkap.
- Mendorong calon siswa atau orang tua menghubungi kanal pendaftaran resmi.

### 3.3 Indikator keberhasilan MVP

Karena MVP tidak memakai analitik atau backend, keberhasilan awal dinilai melalui QA fungsional:

- Pengunjung dapat menemukan program berdasarkan jenjang, mata pelajaran, dan format.
- Informasi jadwal dan biaya dapat ditemukan tanpa membuka banyak halaman.
- Detail program dapat dibuka melalui ID yang valid.
- Semua CTA memiliki tujuan nyata atau menampilkan status belum dibuka.
- Seluruh halaman berfungsi di desktop dan mobile.

## 4. Target Pengguna

### 4.1 Siswa SD

- Membutuhkan penguatan materi dasar dan pendampingan tugas.
- Keputusan utama dibuat oleh orang tua.
- Informasi harus ringkas, aman, dan mudah dibandingkan.

### 4.2 Siswa SMP

- Membutuhkan penguatan konsep dan persiapan evaluasi sekolah.
- Mulai memiliki preferensi mata pelajaran dan format belajar.
- Tetap melibatkan orang tua dalam pemilihan program.

### 4.3 Siswa SMA/SMK

- Membutuhkan pendalaman mata pelajaran, persiapan ujian, atau peningkatan nilai.
- Memerlukan jadwal yang jelas agar tidak berbenturan dengan sekolah.

### 4.4 Peserta UTBK dan ujian masuk

- Membutuhkan program intensif, try out, pembahasan, dan evaluasi terukur.
- Membandingkan cakupan materi, frekuensi pertemuan, dan biaya.

### 4.5 Orang tua

- Merupakan pengambil keputusan utama, khususnya untuk siswa SD dan SMP.
- Membutuhkan kejelasan metode, keamanan, jadwal, tutor, kapasitas kelas, biaya, kebijakan pembayaran, serta laporan perkembangan.
- Bahasa website harus tenang, informatif, dan tidak membuat janji hasil yang tidak dapat dijamin.

## 5. Identitas Brand

### 5.1 Nama kerja

**Bimbelku** — nama fiktif sementara dan berstatus **DEMO**.

Nama ini harus diganti atau dikonfirmasi sebelum produksi. Jangan mencampurnya dengan nama KELASIA, EduLearn, atau brand lain.

### 5.2 Arah komunikasi

- Jelas dan menenangkan.
- Meyakinkan tanpa klaim berlebihan.
- Berorientasi pada kebutuhan siswa dan orang tua.
- Menghindari bahasa hiperbolis seperti “pasti lulus”, “nilai dijamin naik”, atau “nomor satu”.

### 5.3 Contoh pesan utama

**Heading:** Pendampingan Belajar yang Lebih Terarah  
**Deskripsi:** Program bimbel untuk SD, SMP, SMA/SMK, dan persiapan UTBK dengan kelas kecil serta evaluasi berkala.  
**CTA utama:** Lihat Program  
**CTA sekunder:** Cek Jadwal

## 6. Identitas Visual

### 6.1 Token utama

| Token | Nilai | Penggunaan |
|---|---:|---|
| Deep Navy | `#182A3A` | Header, heading, CTA utama |
| Warm Ivory | `#F8F6F1` | Latar utama |
| Muted Coral | `#E89A79` | Aksen terkontrol |
| Charcoal | `#252525` | Teks isi |
| Border | `#E2E1DB` | Garis pemisah, input, kartu |
| Font UI | Plus Jakarta Sans | Navigasi, isi, tombol, label |
| Font aksen | DM Serif Display | Heading editorial terbatas |

### 6.2 Prinsip desain

- Lebar konten maksimal 1200px.
- Ruang kosong luas dan hierarki informasi jelas.
- Foto utama menampilkan siswa belajar secara natural.
- Kartu program menampilkan informasi yang berguna, bukan dekorasi berlebihan.
- Maksimal satu atau dua motif visual khas.
- Radius, shadow, dan aksen digunakan secara konsisten dan ringan.
- Microinteraction berlangsung sekitar 150–250ms.
- Semua animasi menghormati `prefers-reduced-motion`.

### 6.3 Larangan visual

- Gradient ungu-biru.
- Glow dekoratif.
- Glassmorphism acak.
- Emoji dekoratif sebagai ikon utama.
- Floating badge berlebihan.
- Kolase ilustrasi generik.
- Animasi terus-menerus atau mengganggu.
- Klaim angka atau testimoni tanpa label DEMO atau sumber resmi.

## 7. Sitemap — Tepat 5 Menu Utama

1. **Beranda** — `index.html`
2. **Program Bimbel** — `program.html`
3. **Jadwal & Biaya** — `jadwal.html`
4. **Tutor** — `tutor.html`
5. **Tentang Kami** — `tentang.html`

Halaman turunan, bukan menu utama:

- `detail-program.html?id=slug`

Tidak boleh ada menu utama keenam. Tombol CTA navbar **Lihat Program** tidak dihitung sebagai menu utama karena merupakan aksi yang mengarah ke `program.html`.

## 8. User Flow

### 8.1 Alur utama siswa/orang tua

```text
Beranda
→ Program Bimbel
→ Cari atau filter program
→ Detail Program
→ Periksa materi, jadwal, kapasitas, tutor, dan biaya
→ CTA pendaftaran eksternal jika tersedia
```

### 8.2 Alur berdasarkan jadwal

```text
Beranda
→ Jadwal & Biaya
→ Filter jenjang
→ Pilih jadwal atau paket
→ Detail Program terkait
→ Hubungi kanal pendaftaran resmi
```

### 8.3 Alur berdasarkan tutor

```text
Beranda
→ Tutor
→ Lihat mata pelajaran dan pengalaman tutor
→ Buka program yang diajar
→ Detail Program
```

### 8.4 Alur ID tidak valid

```text
Detail Program dengan ID salah
→ Pesan “Program tidak ditemukan”
→ Tautan kembali ke Program Bimbel
```

## 9. Kebutuhan Halaman

## 9.1 Beranda — `index.html`

### Navbar

- Logo Bimbelku di kiri.
- Tepat lima menu utama.
- CTA **Lihat Program** di kanan.
- Active state pada menu Beranda.
- Mobile menu menggunakan tombol dengan `aria-expanded`.
- Mobile menu dapat ditutup dengan tombol Escape.

### Hero editorial

- Heading tentang hasil dan keteraturan proses belajar, bukan janji nilai.
- Deskripsi satu sampai dua kalimat untuk siswa dan orang tua.
- CTA utama **Lihat Program** menuju `program.html`.
- CTA sekunder **Cek Jadwal** menuju `jadwal.html`.
- Satu foto siswa belajar yang natural.
- Heading, deskripsi, dan CTA utama terlihat pada viewport desktop tanpa scroll.

### Trust strip

Tampilkan tiga atau empat angka yang semuanya berlabel **Data DEMO**, misalnya:

- 8 program tersedia — Data DEMO
- 6 tutor — Data DEMO
- Maksimal 12 siswa per kelas — Data DEMO
- Evaluasi setiap bulan — Data DEMO

Angka harus berasal dari dataset bila memungkinkan. Angka operasional harus diganti sebelum produksi.

### Program unggulan

- Empat kartu program.
- Informasi minimum: jenjang, judul, mata pelajaran, format, pertemuan per minggu, kapasitas, biaya, tutor, dan CTA detail.
- Tautan **Lihat Semua Program** menuju `program.html`.

### Keunggulan metode belajar

Empat poin utama:

1. Kelas kecil.
2. Evaluasi berkala.
3. Try out untuk program ujian.
4. Laporan perkembangan bagi orang tua.

Setiap poin menggunakan penjelasan konkret dan tidak menjanjikan hasil tertentu.

### Tutor pilihan

- Tampilkan tiga atau empat tutor.
- Informasi: foto, nama, mata pelajaran, dan ringkasan pengalaman.
- Tautan ke halaman Tutor dan program terkait.

### Testimoni contoh

- Testimoni harus jelas diberi label **Contoh testimoni — DEMO**.
- Jangan menggunakan nama lengkap, sekolah nyata, atau foto orang tanpa izin.
- Maksimal dua atau tiga testimoni.
- Hilangkan seluruh testimoni sebelum produksi bila belum ada testimoni resmi.

### CTA penutup

- Ajakan membandingkan program atau mengecek jadwal.
- CTA harus mengarah ke `program.html` atau `jadwal.html`.
- Jangan membuat tombol daftar jika kanal pendaftaran belum tersedia.

### Footer

- Logo dan deskripsi singkat.
- Navigasi utama.
- Kontak placeholder berlabel DEMO.
- Alamat placeholder berlabel DEMO.
- Copyright.

## 9.2 Program Bimbel — `program.html`

### Header

- Judul halaman.
- Deskripsi singkat.
- Jumlah program dihitung dari dataset.

### Pencarian dan filter

- Pencarian berdasarkan judul, mata pelajaran, atau ringkasan.
- Filter jenjang: SD, SMP, SMA/SMK, UTBK.
- Filter mata pelajaran.
- Filter format: Tatap muka, Online, Hybrid.
- Urutan: alfabetis atau terbaru.
- Tombol reset filter.

### Grid

- Tiga kolom desktop.
- Dua kolom tablet.
- Satu kolom mobile.

### Kartu program

Setiap kartu menampilkan:

- Jenjang.
- Nama program.
- Mata pelajaran.
- Format.
- Jumlah pertemuan per minggu.
- Kapasitas siswa per kelas.
- Biaya per bulan.
- Tutor.
- CTA **Lihat Detail**.

### Empty state

- Pesan bahwa program tidak ditemukan.
- Saran mengubah kata kunci atau filter.
- Tombol reset filter.

## 9.3 Detail Program — `detail-program.html?id=slug`

### Informasi utama

- Breadcrumb.
- Nama program.
- Jenjang.
- Mata pelajaran.
- Format.
- Ringkasan program.
- Foto relevan.

### Ringkasan program

- Durasi sesi.
- Jumlah pertemuan per minggu.
- Kapasitas kelas.
- Biaya.
- Jadwal yang tersedia.
- Tutor pengajar.

### Materi dan silabus

- Silabus dikelompokkan per bulan.
- Ditampilkan menggunakan accordion.
- Accordion dapat digunakan dengan mouse dan keyboard.
- State terbuka memiliki `aria-expanded` yang benar.

### Target hasil belajar

- Menjelaskan kemampuan yang dilatih.
- Tidak menjamin kenaikan nilai atau kelulusan.

### Siapa yang cocok

- Menjelaskan kelas atau profil siswa yang sesuai.
- Menyebut prasyarat jika ada.

### Jadwal

- Menampilkan jadwal yang berelasi dengan program.
- Memuat hari, waktu, dan ruang atau format.

### Tutor

- Foto.
- Nama.
- Mata pelajaran.
- Pengalaman singkat.

### FAQ singkat

Minimal mencakup:

- Apakah tersedia kelas percobaan?
- Bagaimana jika siswa tidak dapat hadir?
- Apakah materi mengikuti kurikulum sekolah?
- Bagaimana laporan perkembangan disampaikan?

Semua jawaban kebijakan diberi label DEMO sampai dikonfirmasi.

### CTA pendaftaran

- Jika `enrollmentUrl` berisi URL valid, tampilkan CTA menuju kanal tersebut.
- Untuk WhatsApp, gunakan URL `https://wa.me/<nomor>` yang benar-benar tersedia.
- Tautan eksternal dibuka secara aman dan menjelaskan tujuannya.
- Jika URL kosong, tampilkan **Pendaftaran belum dibuka** tanpa tombol palsu.

### Error state

- Jika ID tidak ditemukan, tampilkan pesan yang jelas.
- Sediakan tautan kembali ke `program.html`.

## 9.4 Jadwal & Biaya — `jadwal.html`

### Pengantar

- Menjelaskan bahwa jadwal dan biaya masih berstatus DEMO sampai dikonfirmasi.
- Menyediakan filter jenjang.

### Jadwal kelas

- Tampilan tabel pada desktop dan kartu pada mobile bila diperlukan.
- Informasi: program, jenjang, hari, waktu, ruang atau format.
- Filter per jenjang: SD, SMP, SMA/SMK, UTBK.
- Tautan nama program menuju detail program.

### Paket belajar

Minimal tiga paket:

1. Reguler.
2. Intensif.
3. Persiapan UTBK.

Setiap paket menampilkan:

- Nama.
- Deskripsi.
- Fitur utama.
- Harga.
- Sasaran peserta.
- CTA melihat program terkait.

### Perbandingan paket

Bandingkan secara ringkas:

- Pertemuan per minggu.
- Durasi sesi.
- Kapasitas kelas.
- Evaluasi.
- Try out.
- Laporan perkembangan.

### Alur pendaftaran

1. Pilih program.
2. Periksa jadwal dan biaya.
3. Hubungi kanal resmi.
4. Konfirmasi ketersediaan kelas.

### FAQ pembayaran dan kelas percobaan

- Metode pembayaran.
- Waktu pembayaran.
- Kebijakan pengembalian dana.
- Kelas percobaan.
- Perubahan jadwal.

Seluruh kebijakan harus berlabel **Contoh kebijakan — DEMO** sampai tersedia informasi resmi.

## 9.5 Tutor — `tutor.html`

### Hero

- Menjelaskan pendekatan tutor: membantu siswa memahami konsep, bukan sekadar menghafal jawaban.
- Hindari klaim tutor terbaik atau berprestasi tanpa bukti.

### Grid tutor

Minimal enam tutor, masing-masing menampilkan:

- Foto.
- Nama.
- Mata pelajaran.
- Pengalaman singkat.
- Program yang diajar.
- Tautan ke program terkait.

Jangan membuat profil LinkedIn, Instagram, sertifikasi, atau institusi palsu.

## 9.6 Tentang Kami — `tentang.html`

### Konten

- Cerita singkat Bimbelku.
- Visi.
- Misi.
- Metode belajar.
- Fasilitas.
- Lokasi.
- Kontak.
- CTA menuju Program Bimbel.

### Label data

- Seluruh cerita organisasi, fasilitas, alamat, dan kontak diberi label DEMO.
- Jangan menyatakan telah berdiri sejak tahun tertentu tanpa data resmi.
- Jangan menampilkan izin, akreditasi, mitra sekolah, atau penghargaan palsu.

## 10. Dataset Lokal

Gunakan ES modules dalam folder `assets/js/data/`.

## 10.1 Program — `programs.js`

Setiap program memiliki:

```js
{
  id,
  title,
  level,
  subjects,
  format,
  meetingsPerWeek,
  sessionDuration,
  classCapacity,
  priceLabel,
  tutorIds,
  image,
  summary,
  syllabus,
  targetOutcomes,
  suitableFor,
  enrollmentUrl,
  createdAt
}
```

Minimal delapan program DEMO:

1. Matematika SD Dasar.
2. IPA SMP Reguler.
3. Matematika SMA Intensif.
4. Fisika SMA Reguler.
5. Kimia SMA Reguler.
6. Bahasa Inggris SMP–SMA.
7. Persiapan UTBK Saintek.
8. Persiapan UTBK Soshum.

Program dapat ditambah bila diperlukan, tetapi seluruh data harus konsisten dengan jadwal, tutor, dan paket.

## 10.2 Tutor — `tutors.js`

Setiap tutor memiliki:

```js
{
  id,
  name,
  subjects,
  experience,
  photo,
  programIds
}
```

Minimal enam tutor DEMO. Nama dan pengalaman harus jelas diberi status DEMO. Foto menggunakan aset berizin atau placeholder lokal yang layak.

## 10.3 Jadwal — `schedules.js`

Setiap jadwal memiliki:

```js
{
  id,
  programId,
  day,
  time,
  room,
  format
}
```

Semua `programId` harus merujuk ke program yang tersedia.

## 10.4 Paket — `packages.js`

Setiap paket memiliki:

```js
{
  id,
  name,
  description,
  features,
  priceLabel,
  targetLevels,
  programIds
}
```

Minimal tiga paket DEMO: Reguler, Intensif, dan Persiapan UTBK.

## 11. Interaksi

### 11.1 Navigasi

- Active state berdasarkan halaman saat ini.
- Menu mobile dapat dibuka dan ditutup.
- Escape menutup menu dan mengembalikan fokus ke tombol pemicu.
- Tidak ada tautan `href="#"` tanpa fungsi.

### 11.2 Katalog

- Pencarian dan filter bekerja seluruhnya di sisi klien.
- Perubahan filter langsung memperbarui hasil dan jumlah program.
- Reset mengembalikan seluruh filter ke state awal.
- Filter dapat menerima query parameter bila diterapkan.

### 11.3 Detail

- Data detail dibaca dari query parameter `id`.
- Accordion silabus dan FAQ dapat digunakan dengan keyboard.
- ID salah tidak menyebabkan halaman kosong atau error JavaScript.

### 11.4 Jadwal

- Filter jenjang memperbarui jadwal.
- Nama program mengarah ke ID detail yang valid.

## 12. Persyaratan Teknis

### 12.1 Teknologi

- HTML5 semantik.
- CSS3 dengan CSS variables.
- Grid dan Flexbox.
- Vanilla JavaScript.
- ES modules bila sesuai.
- Tanpa framework frontend.
- Tanpa backend dan database.

### 12.2 Responsivitas

Harus diuji pada:

- 360px.
- 768px.
- 1024px.
- 1440px.

Tidak boleh ada horizontal overflow, teks terpotong, atau kontrol yang tidak dapat dijangkau.

### 12.3 Aksesibilitas

- Satu `h1` per halaman.
- Heading tidak melompati tingkat.
- Landmarks semantik.
- Skip link ke konten utama.
- Label terlihat untuk input.
- Focus indicator jelas.
- Navigasi keyboard lengkap.
- Alt text relevan.
- Target sentuh minimal sesuai WCAG 2.2 AA.
- Kontras teks normal minimal 4.5:1.
- `prefers-reduced-motion` diterapkan.

### 12.4 SEO

- Title unik setiap halaman.
- Meta description unik.
- Open Graph dasar.
- Heading hierarchy benar.
- URL internal konsisten.
- Alt text gambar.

### 12.5 Performa

- Gambar di bawah fold menggunakan lazy loading.
- Gambar memiliki `width` dan `height`.
- Gunakan WebP atau AVIF bila tersedia.
- Hindari JavaScript yang memblokir render.
- Hindari layout shift.

### 12.6 Deployment

- Dapat dijalankan melalui static server lokal.
- Dapat di-deploy ke Vercel tanpa build backend.
- Query parameter halaman detail berfungsi pada URL publik.

## 13. Struktur Proyek

```text
cendekia-prima/
├── index.html
├── program.html
├── detail-program.html
├── jadwal.html
├── tutor.html
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
│   │   ├── schedule.js
│   │   └── data/
│   │       ├── programs.js
│   │       ├── tutors.js
│   │       ├── schedules.js
│   │       └── packages.js
│   └── images/
└── README.md
```

## 14. Tahapan Implementasi Setelah PRD Disetujui

1. Konfirmasi nama brand, nomor WhatsApp, alamat, kebijakan, dan aset foto.
2. Audit proyek lama dan tentukan file yang diganti atau dihapus.
3. Susun dataset program, tutor, jadwal, dan paket.
4. Bangun token desain dan global shell.
5. Bangun Beranda.
6. Bangun katalog Program Bimbel dan filter.
7. Bangun Detail Program dinamis.
8. Bangun Jadwal & Biaya.
9. Bangun Tutor dan Tentang Kami.
10. Lakukan QA fungsi, aksesibilitas, responsivitas, visual, dan performa.
11. Siapkan README deployment statis.
12. Deploy setelah kanal pendaftaran dan data produksi dikonfirmasi.

## 15. Acceptance Criteria

- [ ] Tepat lima menu utama berfungsi di desktop dan mobile.
- [ ] Seluruh positioning berfokus pada bimbingan belajar pelajar.
- [ ] Tidak ada konten pelatihan karier, coding, UI/UX, data analyst, atau kursus keterampilan.
- [ ] Tidak ada istilah e-learning, learning path, atau kursus dalam konten pengguna.
- [ ] Beranda memuat hero, trust strip DEMO, program unggulan, metode belajar, tutor, testimoni DEMO, CTA, dan footer.
- [ ] Minimal delapan program tersedia dan konsisten dengan tutor serta jadwal.
- [ ] Minimal enam tutor tersedia.
- [ ] Minimal tiga paket belajar tersedia.
- [ ] Pencarian, filter, urutan, empty state, dan reset bekerja tanpa backend.
- [ ] Detail program menampilkan data sesuai ID.
- [ ] ID tidak valid ditangani dengan pesan dan tautan kembali.
- [ ] Jadwal dapat difilter berdasarkan jenjang.
- [ ] Semua CTA memiliki tujuan valid.
- [ ] Pendaftaran hanya aktif bila ada URL eksternal resmi.
- [ ] Semua data fiktif diberi label DEMO.
- [ ] Tidak ada tautan atau tombol palsu.
- [ ] Tidak ada horizontal overflow pada 360px, 768px, 1024px, dan 1440px.
- [ ] Keyboard navigation, focus visible, alt text, dan reduced motion berfungsi.
- [ ] Setiap halaman memiliki title dan meta description unik.
- [ ] Website dapat di-deploy sebagai static site di Vercel.

## 16. Bukan Bagian MVP

- Login siswa, orang tua, tutor, atau admin.
- Dashboard pengguna.
- Pembayaran online dan checkout.
- Absensi digital.
- Kelas video atau streaming.
- Rapor otomatis.
- Tracking progres tersimpan.
- Database.
- Notifikasi otomatis.
- Form pendaftaran internal.
- Penjadwalan tutor secara real-time.

## 17. Asumsi yang Memerlukan Konfirmasi

1. **Nama brand:** Bimbelku adalah nama kerja DEMO.
2. **Pendaftaran:** belum ada nomor WhatsApp resmi; seluruh `enrollmentUrl` akan dikosongkan sampai nomor diberikan.
3. **Harga dan jadwal:** seluruhnya DEMO.
4. **Tutor:** nama, pengalaman, dan foto masih DEMO.
5. **Testimoni:** hanya contoh berlabel DEMO dan sebaiknya dihapus bila belum ada data resmi.
6. **Alamat dan kontak:** menggunakan placeholder berlabel DEMO.
7. **Kebijakan:** pembayaran, kelas percobaan, penggantian jadwal, dan pengembalian dana masih contoh DEMO.
8. **Format kelas:** dataset akan mencakup tatap muka, online, dan hybrid untuk menunjukkan fungsi filter.
9. **Kurikulum:** materi disusun sebagai contoh umum dan belum mengacu pada silabus internal lembaga tertentu.

## 18. Keputusan yang Dibutuhkan Sebelum Implementasi

- Setujui atau ganti nama **Bimbelku**.
- Setujui struktur enam halaman utama/turunan dalam sitemap.
- Konfirmasi apakah semua program tetap berstatus DEMO pada versi pertama.
- Berikan nomor WhatsApp resmi bila CTA pendaftaran harus aktif.
- Berikan logo, foto siswa, dan foto tutor asli bila tersedia.
- Berikan alamat, kontak, jam operasional, harga, jadwal, dan kebijakan resmi bila konten DEMO harus diganti.

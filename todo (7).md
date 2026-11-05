# TODO — Website Universitas Dewata Nusantara

Acuan: `prd.md`. Centang `[x]` jika sudah selesai.

---

## Fase 0 — Persiapan

- [x] Buat struktur folder (`css/`, `js/`, `assets/img/`, `assets/icons/`)
- [x] Buat file: `index.html`, `tentang.html`, `akademik.html`, `penerimaan.html`, `kehidupan-kampus.html`, `berita.html`, `berita-detail.html`
- [x] Pilih dan pasang Google Fonts (heading serif klasik + body sans/serif)
- [ ] Kumpulkan dan optimalkan gambar (hero, fakultas, fasilitas, kegiatan, berita, dosen, rektor)
- [x] Buat logo perisai (crest) emas-hijau dalam format SVG
- [x] Siapkan ornamen SVG (pemisah section, motif daun/bintang, sudut border)

---

## Fase 1 — Fondasi CSS

- [x] `variables.css`: palet warna, font, spacing, radius, bayangan
- [x] `base.css`: reset, tipografi, container, utilitas
- [x] `components.css`: button (primary, secondary, dark) dengan transisi hover/focus
- [x] `components.css`: card bergaya perkamen (border emas tipis, hover terangkat)
- [x] `components.css`: navbar, dropdown/mega menu, drawer mobile
- [x] `components.css`: footer 4 kolom dengan ornamen emas
- [x] `components.css`: section title dengan pemisah ornamen
- [x] Media query: desktop, tablet, mobile

---

## Fase 2 — Komponen Bersama (semua halaman)

- [x] Navbar dengan **tepat 5 menu utama** tanpa menu atau aksi tambahan di header
- [x] Logo mengarah ke Beranda (bukan item menu)
- [x] Navbar sticky, transparan lalu hijau gelap saat scroll
- [x] Footer identik di semua halaman
- [x] Tombol kembali ke atas
- [x] Overlay pencarian dihapus sesuai arahan final

---

## Fase 3 — Beranda (`index.html`)

- [ ] Hero section 1 dengan **foto kampus**, overlay hijau gelap, headline, tagline, 2 tombol
- [ ] Efek partikel emas halus pada hero
- [ ] Statistik dengan counter animasi
- [ ] Sambutan singkat rektor
- [ ] Grid 6 fakultas berfoto
- [ ] Ringkasan jalur penerimaan
- [ ] Berita dan pengumuman terbaru
- [ ] Galeri kehidupan kampus (mosaik)
- [ ] Slider testimoni alumni
- [ ] Banner CTA penutup

---

## Fase 4 — Tentang Kami (`tentang.html`)

- [ ] Banner halaman
- [ ] Sejarah (timeline vertikal)
- [ ] Visi dan misi
- [ ] Sambutan rektor (foto, inisial kapital dekoratif)
- [ ] Struktur organisasi
- [ ] Akreditasi (kartu lencana)
- [ ] Fasilitas (galeri/tab)
- [ ] Kontak dan lokasi (form dan peta)

---

## Fase 5 — Akademik (`akademik.html`)

- [ ] Daftar fakultas dan program studi (tab/accordion)
- [ ] Kalender akademik (tabel)
- [ ] Dosen (kartu dan filter fakultas)
- [ ] Perpustakaan
- [ ] Kurikulum

---

## Fase 6 — Penerimaan (`penerimaan.html`)

- [ ] Jalur masuk (tab)
- [ ] Syarat pendaftaran
- [ ] Tabel biaya kuliah per prodi
- [ ] Beasiswa (kartu)
- [ ] Jadwal seleksi (timeline)
- [ ] Langkah pendaftaran (stepper 1-5)
- [ ] FAQ (accordion)
- [ ] CTA daftar

---

## Fase 7 — Kehidupan Kampus (`kehidupan-kampus.html`)

- [ ] Organisasi mahasiswa (UKM/BEM)
- [ ] Kegiatan
- [ ] Prestasi
- [ ] Asrama
- [ ] Fasilitas olahraga
- [ ] Alumni dan karier
- [ ] Galeri foto dengan lightbox

---

## Fase 8 — Berita & Informasi (`berita.html`, `berita-detail.html`)

- [ ] Daftar berita (minimal 6) dengan filter kategori dan pencarian
- [ ] Pengumuman
- [ ] Agenda
- [ ] Galeri
- [ ] Penelitian dan pengabdian masyarakat
- [ ] Template detail berita (gambar utama, isi, berita terkait)

---

## Fase 9 — JavaScript

- [ ] `main.js`: navbar scroll, mobile menu, mega menu, back to top
- [ ] `slider.js`: hero dan testimoni
- [ ] `tabs-accordion.js`: tab dan FAQ
- [ ] `filter.js`: filter dan pencarian berita/dosen
- [ ] Counter statistik dan scroll reveal (IntersectionObserver)
- [ ] Lightbox galeri
- [ ] Validasi form kontak
- [ ] `data.js`: data berita, dosen, fakultas, biaya

---

## Fase 10 — Pengujian dan Finalisasi

- [ ] Menu utama tepat 5 di semua halaman
- [ ] Semua tautan internal berfungsi
- [ ] Tidak ada teks "dummy/demo/contoh" di halaman manapun
- [ ] Uji responsif: desktop, tablet, mobile
- [ ] Uji browser: Chrome, Firefox, Edge, Safari
- [ ] Cek kontras dan keterbacaan teks
- [ ] Cek transisi hover/focus semua tombol
- [ ] Atribut `alt` pada semua gambar, `loading="lazy"` kecuali hero
- [ ] `title` dan `meta description` unik per halaman
- [ ] Cek performa (target Lighthouse ≥ 85)
- [ ] Rapikan kode dan hapus file tak terpakai

---

## Urutan Prioritas

1. Fase 0-2 (fondasi)
2. Fase 3 (Beranda)
3. Fase 4-8 (halaman lain)
4. Fase 9 (JS, dikerjakan bertahap bersamaan dengan halaman)
5. Fase 10 (pengujian)

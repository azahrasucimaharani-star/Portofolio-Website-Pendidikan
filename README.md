# EduPrestige Academy

Website profil SMA fiktif untuk portofolio, dibuat dengan HTML5, CSS3, dan JavaScript native tanpa framework, backend, atau database.

> **Penting:** seluruh nama, alamat, kontak, jadwal, statistik, prestasi, dan informasi PPDB adalah **data dummy**. Ganti dan verifikasi sebelum digunakan untuk produksi. Gambar dimuat dari Unsplash untuk kebutuhan contoh dummy.

## Menjalankan secara lokal

Karena website menggunakan JavaScript, jalankan melalui server HTTP lokal:

```bash
python -m http.server 8000
```

Buka `http://localhost:8000` di browser. Alternatif: gunakan ekstensi Live Server pada editor.

## Struktur

- `index.html` — Beranda
- `profil.html` — Profil sekolah
- `akademik.html` — Program akademik
- `berita.html` — Daftar dan filter berita
- `detail-berita.html?id=...` — Detail berita berbasis data lokal
- `ppdb.html` — Informasi PPDB dan FAQ
- `assets/css/` — design system dan responsive style
- `assets/js/` — navigasi, interaksi global, berita, dan FAQ

## Deployment

Unggah seluruh isi folder ke hosting statis seperti GitHub Pages, Netlify, atau Cloudflare Pages. Tidak diperlukan proses build. Sebelum deployment produksi:

1. Ganti seluruh data dummy dan kontak `example.com`/nomor dummy.
2. Unduh dan optimalkan gambar dengan izin penggunaan yang sesuai.
3. Verifikasi jadwal, biaya, statistik, dan tujuan CTA PPDB.
4. Uji tautan, keyboard, browser, dan perangkat target.

## Catatan privasi

Website tidak memiliki formulir dan tidak menyimpan data pengguna. CTA PPDB hanya membuka email atau WhatsApp eksternal.

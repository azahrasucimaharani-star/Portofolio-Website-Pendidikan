# PROJECT_DESIGN — Universitas Dewata Nusantara

## Product context

- **Product:** situs resmi universitas, multi-halaman.
- **Target users:** calon mahasiswa, orang tua, mahasiswa aktif, staf, mitra, dan alumni.
- **Primary job:** menemukan informasi akademik dan penerimaan dengan cepat.
- **Technical constraints:** HTML, CSS, dan JavaScript vanilla; tanpa framework.
- **Navigation constraint:** logo menuju Beranda dan tepat lima menu utama. Tidak ada Login SIAKAD, pencarian, atau CTA di header.

## Existing UI read

- **Preserve:** hijau hutan, emas klasik, perkamen, crest, serif Cormorant Garamond, foto kampus, serta struktur konten tiap halaman.
- **Evolve:** ritme spacing, skala heading, grid kartu, tabel, tab, form, drawer mobile, dan konsistensi state.
- **Remove:** header yang padat, glyph rusak, efek shine, hover seragam, `transition: all`, label kapital berjarak lebar, dan konten yang bergantung pada JavaScript agar terlihat.

## Taste direction

- **Direction:** institutional editorial polish.
- **Tone:** kredibel, hangat, teratur, tenang.
- **Avoid:** visual reset, glassmorphism, glow, gradient dekoratif, kartu berlapis, ikon emoji, dan motion berlebihan.
- **Distinctive cue:** kombinasi crest, hijau hutan, garis emas, serif klasik, dan permukaan perkamen.

## Reference synthesis

- **Notion:** hanya prinsip warm-neutral, garis tipis, dan kedalaman yang tenang.
- **IBM/Carbon:** hanya disiplin grid, alignment, tabel, dan state komponen.
- **Swiss Modernism 2.0:** hanya struktur grid dan hierarki; warna biru serta font rekomendasi tidak digunakan.

## System rules

- Satu container maksimum `1160px` dengan gutter responsif.
- Spacing memakai skala 4, 8, 12, 16, 24, 40, 64, 96, dan 128px.
- Heading tetap serif; UI dan body memakai sans.
- Aksen emas berfungsi sebagai sinyal, bukan bidang dominan.
- Card menggunakan border atau perubahan permukaan, bukan border dan shadow sekaligus.
- Motion hanya opacity/transform, singkat, dan memiliki reduced-motion fallback.
- Semua target interaktif minimum 44px dan memiliki focus-visible.

## Responsive behavior

- **Desktop:** lima menu tampil horizontal.
- **Tablet/mobile:** lima menu masuk ke drawer tunggal; tidak ada item tambahan.
- Grid 3 dan 4 kolom turun secara bertahap tanpa horizontal overflow.
- CTA menjadi satu kolom dan lebar penuh pada layar kecil.
- Tab bergulir horizontal; tabel tetap dapat digulir tanpa memotong halaman.

## Verification

- Periksa pada 375, 768, 1024, dan 1440px.
- Hitung tepat lima link top-level pada setiap header.
- Jalankan syntax check JavaScript.
- Periksa glyph rusak, overflow horizontal, focus-visible, reduced motion, dan konsistensi konten tanpa JavaScript.

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.querySelector('[data-detail]');
  if (!mount) return;
  const course = courseById(new URLSearchParams(location.search).get('id'));
  if (!course) {
    document.title = 'Kelas tidak ditemukan — Educourse';
    mount.innerHTML = '<div class="container error-page"><div class="empty-state"><span class="eyebrow">Masih banyak yang bisa dipelajari</span><h1>Kelas tidak ditemukan.</h1><p>Tautan ini belum mengarah ke kelas yang tersedia. Temukan topik lain di katalog.</p><a class="btn btn--primary" href="kelas.html">Kembali ke Jelajahi Kelas</a></div></div>';
    return;
  }
  document.title = `${course.title} — Educourse`;
  const mentor = mentorById(course.mentorId);
  if (!mentor) {
    mount.innerHTML = '<div class="container error-page"><div class="empty-state"><h1>Data mentor belum tersedia.</h1><p>Detail kelas ini belum dapat ditampilkan dengan lengkap.</p><a class="btn btn--primary" href="kelas.html">Kembali ke Jelajahi Kelas</a></div></div>';
    return;
  }
  let enrollmentUrl;
  try {
    const url = new URL(course.enrollmentUrl);
    if (['https:', 'http:'].includes(url.protocol)) enrollmentUrl = url.href;
  } catch { /* Demo courses have no external enrollment destination. */ }
  const enrollment = enrollmentUrl
    ? `<a class="btn btn--primary" href="${enrollmentUrl.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}" target="_blank" rel="noopener noreferrer">Ke kanal pendaftaran ${icon('arrow')}</a>`
    : '<button class="btn btn--primary" disabled>Pendaftaran belum dibuka</button>';

  mount.innerHTML = `
    <header class="page-header"><div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Beranda</a><span aria-hidden="true">/</span><a href="kelas.html">Jelajahi Kelas</a><span aria-hidden="true">/</span><span aria-current="page">${course.title}</span></nav>
      <span class="eyebrow">${course.category} · Kelas demo</span><h1>${course.title}</h1><p class="lede">${course.summary}</p>
    </div></header>
    <section class="section"><div class="container detail-layout">
      <div>
        <div class="facts"><div class="fact"><strong>Level</strong><span>${course.level}</span></div><div class="fact"><strong>Durasi</strong><span>${course.durationHours} jam</span></div><div class="fact"><strong>Modul</strong><span>${course.modules} bagian</span></div><div class="fact"><strong>Format</strong><span>Online demo</span></div></div>
        <section class="detail-section" aria-labelledby="outcomes-title"><span class="eyebrow">Tujuan belajar</span><h2 id="outcomes-title">Dari memahami<br> menjadi mencoba.</h2><ul class="learning-list">${course.syllabus.map((topic) => `<li>Memahami dan mempraktikkan ${topic.toLowerCase()}.</li>`).join('')}</ul></section>
        <section class="detail-section" aria-labelledby="requirements-title"><span class="eyebrow">Sebelum memulai</span><h2 id="requirements-title">Yang perlu disiapkan.</h2><p>Laptop atau komputer, koneksi internet, dan waktu untuk latihan mandiri.${course.level === 'Menengah' ? ' Pemahaman dasar pada topik kelas akan membantu mengikuti materi.' : ' Materi diperkenalkan mulai dari konsep dasar.'}</p><p class="demo-note">Persyaratan dan tujuan belajar merupakan contoh untuk kelas demo.</p></section>
        <section class="detail-section" aria-labelledby="syllabus-title"><span class="eyebrow">Kurikulum</span><h2 id="syllabus-title">Materi yang terarah.</h2><p>Gambaran topik dari materi demo. Buka setiap bagian untuk melihat ringkasannya.</p>
          <div class="syllabus">${course.syllabus.map((topic, index) => `<div class="accordion"><h3 class="accordion-heading"><button type="button" id="lesson-button-${index}" aria-expanded="${index === 0}" aria-controls="lesson-${index}">${topic}${icon('plus')}</button></h3><div id="lesson-${index}" class="accordion-panel" role="region" aria-labelledby="lesson-button-${index}" ${index ? 'hidden' : ''}>Penjelasan dan latihan praktik untuk topik ${topic.toLowerCase()}.</div></div>`).join('')}</div>
        </section>
        <section class="detail-section" aria-labelledby="mentor-title"><span class="eyebrow">Kenali mentormu</span><h2 id="mentor-title">Belajar dari perspektif baru.</h2><div class="mentor-profile"><img src="${mentor.photo}" alt="Foto ilustrasi mentor demo" width="72" height="72" loading="lazy"><div><h3>${mentor.name}</h3><p class="mentor-specialty">${mentor.specialty}</p><p>${mentor.experience}</p><a class="section-link" href="mentor.html">Kenali para mentor ${icon('arrow')}</a></div></div></section>
      </div>
      <aside class="detail-sidebar" aria-label="Informasi kelas dan pendaftaran">
        <img class="detail-cover" src="${course.image}" alt="Ilustrasi ${course.title}" width="900" height="600">
        <span class="eyebrow">Pilihan belajarmu</span><h2>${course.title}</h2><p class="sidebar-summary">${course.priceLabel}</p>
        <ul class="sidebar-list"><li>${icon('book')}${course.modules} modul · ${course.durationHours} jam</li><li>${icon('level')}Level ${course.level.toLowerCase()}</li><li>${icon('check')}Materi terstruktur · Data demo</li></ul>
        ${enrollment}<p class="demo-note">${enrollmentUrl ? 'Pendaftaran dilakukan melalui kanal eksternal.' : 'Kelas ini merupakan demo portofolio. Kanal pendaftaran belum tersedia.'}</p>
      </aside>
    </div></section>`;
  mount.querySelectorAll('.accordion button').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });
});

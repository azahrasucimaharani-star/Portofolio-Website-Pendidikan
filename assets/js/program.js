document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#program-list');
  if (list) {
    list.innerHTML = programs.map((program, index) => `
      <article class="program-row">
        <span class="index">0${index + 1}</span>
        <div><h2>${program.title}</h2><p>${program.outcomes}</p>
          <div class="program-meta"><span>${icon('level')}${program.level}</span><span>${program.estimatedDuration}</span><span>${icon('book')}${program.courseIds.length} kelas</span></div>
        </div>
        <a class="btn btn--outline" href="detail-program.html?id=${program.id}" aria-label="Lihat program ${program.title}">Lihat Program ${icon('arrow')}</a>
      </article>`).join('');
  }

  const mount = document.querySelector('#program-detail');
  if (!mount) return;
  const program = programs.find((item) => item.id === new URLSearchParams(location.search).get('id'));
  if (!program) {
    document.title = 'Program tidak ditemukan — Educourse';
    mount.innerHTML = '<div class="container error-page"><div class="empty-state"><span class="eyebrow">Mari temukan jalur yang lain</span><h1>Program tidak ditemukan.</h1><p>Tautan ini belum mengarah ke program yang tersedia.</p><a class="btn btn--primary" href="program.html">Kembali ke Program</a></div></div>';
    return;
  }
  document.title = `${program.title} — Educourse`;
  const sequence = program.courseIds.map(courseById).filter(Boolean);
  mount.innerHTML = `
    <header class="page-header"><div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Beranda</a><span aria-hidden="true">/</span><a href="program.html">Program Belajar</a><span aria-hidden="true">/</span><span aria-current="page">${program.title}</span></nav>
      <span class="eyebrow">Jalur belajar · Data demo</span><h1>${program.title}</h1><p class="lede">${program.outcomes}</p>
      <div class="program-meta"><span>${icon('level')}${program.level}</span><span>${program.estimatedDuration}</span><span>${icon('book')}${sequence.length} kelas</span></div>
    </div></header>
    <section class="section"><div class="container detail-layout">
      <div><span class="eyebrow">Urutan belajar</span><h2>Ikuti langkahnya<br> satu per satu.</h2>
        <div class="timeline">${sequence.map((course, index) => `
          <article class="timeline-item"><span class="timeline-index">0${index + 1}</span><span class="meta-label">${course.level}</span><h3>${course.title}</h3><p>${course.summary}</p><div class="program-meta"><span>${course.durationHours} jam</span><span>${course.modules} modul</span></div><a class="section-link" href="detail-kelas.html?id=${course.id}" aria-label="Lihat detail ${course.title}">Lihat detail kelas ${icon('arrow')}</a></article>`).join('')}
        </div>
      </div>
      <aside class="detail-sidebar" aria-label="Ringkasan program">
        <span class="eyebrow">Rencana belajarmu</span><h2>${program.title}</h2><p class="sidebar-summary">Mulai dari fondasi, lalu lanjutkan sesuai ritme belajarmu.</p>
        <ul class="sidebar-list"><li>${icon('book')}${sequence.length} kelas terstruktur</li><li>${icon('level')}${program.level}</li><li>${icon('check')}Estimasi ${program.estimatedDuration}</li></ul>
        <a class="btn btn--primary" href="detail-kelas.html?id=${sequence[0].id}">Lihat kelas pertama ${icon('arrow')}</a><p class="demo-note">Program demo untuk eksplorasi. Tidak ada pendaftaran internal.</p>
      </aside>
    </div></section>`;
});

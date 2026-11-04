<<<<<<< HEAD
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
=======
import{programs}from'./data/programs.js';import{tutors}from'./data/tutors.js';import{schedules}from'./data/schedules.js';
const root=document.querySelector('#detail-root'),program=programs.find(p=>p.id===new URLSearchParams(location.search).get('id'));
if(!program){root.innerHTML='<section class="section container"><h1>Program tidak ditemukan</h1><p>Program yang Anda cari tidak tersedia atau tautannya telah berubah.</p><a class="button button-primary" href="program.html">Kembali ke Program Bimbel</a></section>'}else{const teachers=program.tutorIds.map(id=>tutors.find(t=>t.id===id)).filter(Boolean),times=schedules.filter(s=>s.programId===program.id);document.title=`${program.title} — Bimbelku`;root.innerHTML=`<div class="breadcrumb container"><a href="index.html">Beranda</a> / <a href="program.html">Program Bimbel</a> / ${program.title}</div><section class="section container detail-hero"><div><div class="badge-row"><span class="badge badge-accent">${program.level}</span><span class="badge">${program.format}</span></div><h1>${program.title}</h1><p>${program.summary}</p><div class="meta"><span>${program.subjects.join(', ')}</span><span>${program.meetingsPerWeek}x per minggu</span><span>${program.sessionDuration}</span></div></div><img src="${program.image}" width="720" height="480" alt="Kegiatan belajar ${program.title}"></section><section class="section container detail-layout"><div><h2 class="content-title">Target hasil belajar</h2><ul>${program.targetOutcomes.map(x=>`<li>${x}</li>`).join('')}</ul><h2 class="content-title">Materi per bulan</h2><div class="accordion">${program.syllabus.map((m,i)=>`<div><button type="button" aria-expanded="${i===0}" aria-controls="month-${i}">${m.month}</button><div class="accordion-panel" id="month-${i}" ${i?'hidden':''}><ul>${m.topics.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`).join('')}</div><h2 class="content-title">Siapa yang cocok?</h2><p>${program.suitableFor}</p><h2 class="content-title">FAQ</h2><div class="accordion">${[['Apakah tersedia kelas percobaan?','Kelas percobaan dapat dijadwalkan berdasarkan ketersediaan kelas.'],['Bagaimana jika siswa tidak dapat hadir?','Siswa dapat meminta materi dan jadwal pengganti sesuai kebijakan kelas.'],['Apakah materi mengikuti sekolah?','Tutor menyesuaikan pembahasan dengan materi sekolah dan kebutuhan siswa.'],['Bagaimana laporan perkembangan diberikan?','Ringkasan perkembangan disampaikan secara berkala kepada siswa dan orang tua.']].map((x,i)=>`<div><button type="button" aria-expanded="false" aria-controls="faq-${i}">${x[0]}</button><div class="accordion-panel" id="faq-${i}" hidden>${x[1]}</div></div>`).join('')}</div></div><aside><div class="detail-panel"><h2>Ringkasan program</h2><p><strong>${program.priceLabel}</strong></p><p>${program.meetingsPerWeek} pertemuan per minggu<br>${program.sessionDuration} per sesi<br>Maksimal ${program.classCapacity} siswa</p><p class="status">Pendaftaran belum dibuka</p></div><div class="detail-panel"><h2>Jadwal tersedia</h2>${times.map(s=>`<p><strong>${s.day}</strong><br>${s.time}<br>${s.room}</p>`).join('')}</div><div class="detail-panel"><h2>Tutor pengajar</h2>${teachers.map(t=>`<p><strong>${t.name}</strong><br>${t.subjects.join(', ')}<br>${t.experience}</p>`).join('')}</div></aside></section>`;root.querySelectorAll('.accordion button').forEach(button=>button.addEventListener('click',()=>{const panel=document.getElementById(button.getAttribute('aria-controls')),open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));panel.hidden=open}))}
>>>>>>> 2fbe8a9fa74b2b2a9462d9e50c1d9085ad7158cb

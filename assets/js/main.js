<<<<<<< HEAD
function mentorById(id) { return mentors.find((mentor) => mentor.id === id); }
function courseById(id) { return courses.find((course) => course.id === id); }

function icon(name) {
  const paths = {
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    level: '<path d="M5 19v-5m7 5V9m7 10V4"/>',
    book: '<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    plus: '<path d="M5 12h14M12 5v14"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
}

function brandMarkup() {
  return '<img class="brand-logo" src="assets/images/educourse-mark.png" alt="" width="334" height="284"><span class="brand-name">Educourse<span class="brand-dot">.</span></span>';
}

// One full-card link, shared by the homepage and filtered catalog.
function card(course) {
  const mentor = mentorById(course.mentorId);
  return `<article class="home-course">
    <a class="home-course__link" href="detail-kelas.html?id=${course.id}" aria-labelledby="course-${course.id}">
      <div class="home-course__media"><img src="${course.image}" alt="" width="900" height="600" loading="lazy"></div>
      <div class="home-course__body">
        <span class="home-course__category">${course.category}</span>
        <h3 id="course-${course.id}">${course.title}</h3>
        <div class="home-course__meta"><span>${icon('level')}${course.level}</span><span>${icon('book')}${course.modules} modul</span></div>
        <div class="home-course__footer"><img src="${mentor.photo}" alt="" width="36" height="36" loading="lazy"><div><strong>${mentor.name}</strong><small>${mentor.specialty}</small></div><span class="home-course__arrow">${icon('arrow')}</span></div>
      </div>
    </a>
  </article>`;
}

function renderShell() {
  const page = document.body.dataset.page;
  const navigation = [
    ['index.html', 'Beranda', 'home'],
    ['kelas.html', 'Jelajahi Kelas', 'kelas'],
    ['program.html', 'Program Belajar', 'program'],
    ['mentor.html', 'Mentor', 'mentor'],
    ['tentang.html', 'Tentang Kami', 'tentang'],
  ];
  document.querySelector('[data-navbar]').innerHTML = `
    <div class="container nav">
      <a class="brand brand--educourse" href="index.html" aria-label="Educourse — Beranda">${brandMarkup()}</a>
      <button class="menu-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="main-menu">${icon('menu')}</button>
      <nav id="main-menu" class="nav-links" aria-label="Navigasi utama">${navigation.map(([href, label, key]) => `<a href="${href}" ${page === key ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
    </div>`;
  document.querySelector('[data-footer]').innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div><a class="brand brand--educourse" href="index.html" aria-label="Educourse — Beranda">${brandMarkup()}</a><p>Ruang belajar demo untuk keterampilan yang relevan dengan masa depan.</p></div>
        <div><h3>Jelajahi</h3><div class="footer-links"><a href="kelas.html">Semua Kelas</a><a href="program.html">Program Belajar</a><a href="mentor.html">Mentor</a></div></div>
        <div><h3>Catatan</h3><p>Seluruh konten, mentor, dan institusi pada situs ini adalah data demo untuk portofolio.</p></div>
      </div>
      <div class="container footer-bottom"><span>© 2026 Educourse — Demo portfolio</span><span>Frontend-only · Tanpa pendaftaran internal</span></div>
    </footer>`;

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#main-menu');
  function setMenu(open, returnFocus = false) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    toggle.innerHTML = icon(open ? 'close' : 'menu');
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false, true);
  });
  document.addEventListener('click', (event) => {
    // The toggle replaces its SVG; the original target may already be detached.
    if (!event.composedPath().includes(document.querySelector('.site-header'))) setMenu(false);
  });
  document.querySelector('.site-header').addEventListener('focusout', (event) => {
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setMenu(false);
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', () => setMenu(false));
}

document.addEventListener('DOMContentLoaded', renderShell);
=======
const current=location.pathname.split('/').pop()||'index.html';
function bindNav(){document.querySelectorAll('[data-nav]').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('.nav-links');if(toggle&&menu){const close=()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')};toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});menu.addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){close();toggle.focus()}})}}
export function shell(){queueMicrotask(bindNav);return `<a class="skip-link" href="#main">Lewati ke konten</a><header class="site-header"><nav class="nav container" aria-label="Navigasi utama"><a class="brand" href="index.html" aria-label="Bimbelku, beranda"><img class="brand-icon" src="assets/images/bimbel-icon.png" width="44" height="44" alt=""><span>Bimbelku</span></a><ul class="nav-links"><li><a data-nav href="index.html">Beranda</a></li><li><a data-nav href="program.html">Program Bimbel</a></li><li><a data-nav href="jadwal.html">Jadwal &amp; Biaya</a></li><li><a data-nav href="tutor.html">Tutor</a></li><li><a data-nav href="tentang.html">Tentang Kami</a></li></ul><button class="menu-toggle" type="button" aria-expanded="false" aria-label="Buka menu">Menu</button></nav></header><a class="floating-program-cta" href="program.html" aria-label="Lihat semua program bimbel"><span>Lihat Program</span><span aria-hidden="true">&rarr;</span></a>`}
export function footer(){return `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="index.html"><img class="brand-icon" src="assets/images/bimbel-icon.png" width="44" height="44" alt=""><span>Bimbelku</span></a><p>Bimbingan belajar untuk membantu siswa memahami konsep dan membangun kebiasaan belajar yang terarah.</p></div><div><strong>Navigasi</strong><ul class="footer-links"><li><a href="program.html">Program Bimbel</a></li><li><a href="jadwal.html">Jadwal &amp; Biaya</a></li><li><a href="tutor.html">Tutor</a></li></ul></div><div><strong>Kontak</strong><ul class="footer-links"><li>info@bimbelku.id</li><li>Jl. Pendidikan No. 25, Jakarta</li><li>Senin–Sabtu, 09.00–20.00</li></ul></div></div><div class="footer-bottom">© 2026 Bimbelku. Seluruh hak dilindungi.</div></div></footer>`}
export function programCard(program,tutors){const names=program.tutorIds.map(id=>tutors.find(t=>t.id===id)?.name).filter(Boolean).join(', ');return `<article class="program-card"><a href="detail-program.html?id=${program.id}"><img class="card-image" src="${program.image}" width="640" height="400" loading="lazy" alt="Siswa mengikuti ${program.title}"></a><div class="card-body"><div class="badge-row"><span class="badge badge-accent">${program.level}</span><span class="badge">${program.format}</span></div><h3><a href="detail-program.html?id=${program.id}">${program.title}</a></h3><p class="program-subjects">${program.subjects.join(', ')}</p><div class="meta"><span>${program.meetingsPerWeek}x per minggu</span><span>Maks. ${program.classCapacity} siswa</span></div><p>Tutor: ${names}</p><div class="card-foot"><span class="price">${program.priceLabel}</span><a class="text-link" href="detail-program.html?id=${program.id}">Lihat Detail</a></div></div></article>`}
export function tutorCard(tutor){return `<article class="tutor-card"><img class="card-image" src="${tutor.photo}" width="480" height="560" loading="lazy" alt="${tutor.name}, tutor ${tutor.subjects.join(' dan ')}"><div class="card-body"><h3>${tutor.name}</h3><p><strong>${tutor.subjects.join(', ')}</strong></p><p>${tutor.experience}</p></div></article>`}
>>>>>>> 2fbe8a9fa74b2b2a9462d9e50c1d9085ad7158cb

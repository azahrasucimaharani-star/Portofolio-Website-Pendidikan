// Home-only content; brand, navigation, icons, and course cards are shared.
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page !== 'home') return;

  const selected = ['html-css-fondasi', 'ui-ux-fundamentals', 'excel-untuk-analisis', 'presentasi-profesional'];
  document.querySelector('#popular-courses').innerHTML = selected.map(courseById).map(card).join('');

  document.querySelector('#home-programs').innerHTML = programs.map((program, index) => `
    <a class="path-item" href="detail-program.html?id=${program.id}">
      <span class="path-number">0${index + 1}</span><div><h3>${program.title}</h3><small>${program.level} · ${program.estimatedDuration}</small></div><span class="path-arrow">${icon('arrow')}</span>
    </a>`).join('');

  document.querySelector('#home-mentors').innerHTML = mentors.slice(0, 3).map((mentor) => `
    <article class="mentor-card">
      <img src="${mentor.photo}" alt="Foto ilustrasi untuk profil mentor demo ${mentor.name}" width="700" height="600" loading="lazy">
      <div class="mentor-card__info"><div><h3>${mentor.name}</h3><p>${mentor.specialty}</p></div><a class="mentor-link" href="detail-kelas.html?id=${mentor.courseIds[0]}" aria-label="Lihat kelas ${mentor.name}">${icon('arrow')}</a></div>
      <p class="demo-note">Profil mentor demo</p>
    </article>`).join('');
});

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.querySelector('#mentor-content');
  if (!mount) return;
  const links = (mentor) => `<div class="mentor-course-links">${mentor.courseIds.map((id) => `<a href="detail-kelas.html?id=${id}">${courseById(id).title}${icon('arrow')}</a>`).join('')}</div>`;
  const featured = mentors[0];
  mount.innerHTML = `
    <article class="featured-mentor">
      <img src="${featured.photo}" alt="Foto ilustrasi untuk profil mentor demo ${featured.name}" width="700" height="600">
      <div><span class="eyebrow">Mentor pilihan</span><h2>${featured.name}</h2><p class="mentor-specialty">${featured.specialty}</p><p>${featured.experience}</p>${links(featured)}<p class="demo-note">Profil fiktif untuk kebutuhan demo.</p></div>
    </article>
    <section class="mentor-directory" aria-labelledby="other-mentors-title"><h2 id="other-mentors-title">Kenali perspektif lainnya.</h2><div class="mentor-list">
      ${mentors.slice(1).map((mentor) => `<article class="mentor-card"><img src="${mentor.photo}" alt="Foto ilustrasi untuk profil mentor demo ${mentor.name}" width="700" height="600" loading="lazy"><h3>${mentor.name}</h3><p class="mentor-specialty">${mentor.specialty}</p><p>${mentor.experience}</p>${links(mentor)}<p class="demo-note">Profil mentor demo</p></article>`).join('')}
    </div></section>`;
});

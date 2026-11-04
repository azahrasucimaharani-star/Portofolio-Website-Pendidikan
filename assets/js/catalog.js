document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#catalog-grid');
  if (!grid) return;
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const level = document.querySelector('#level');
  const sort = document.querySelector('#sort');
  const count = document.querySelector('#result-count');
  const reset = document.querySelector('#reset');

  [...new Set(courses.map((course) => course.category))].forEach((value) => category.add(new Option(value, value)));
  [...new Set(courses.map((course) => course.level))].forEach((value) => level.add(new Option(value, value)));
  document.querySelector('#catalog-filters').addEventListener('submit', (event) => event.preventDefault());

  function render() {
    const query = search.value.trim().toLocaleLowerCase('id');
    const list = courses.filter((course) =>
      (!query || `${course.title} ${course.summary} ${course.category}`.toLocaleLowerCase('id').includes(query)) &&
      (!category.value || course.category === category.value) &&
      (!level.value || course.level === level.value)
    );
    if (sort.value === 'title') list.sort((a, b) => a.title.localeCompare(b.title, 'id'));
    count.textContent = `Menampilkan ${list.length} kelas demo`;
    grid.innerHTML = list.length ? list.map(card).join('') : '<div class="empty-state"><span class="eyebrow">Coba sudut pandang lain</span><h2>Tidak ada kelas yang ditemukan</h2><p>Coba ubah kata kunci atau reset filter untuk melihat semua kelas.</p><button class="btn btn--primary" id="empty-reset" type="button">Reset filter</button></div>';
    grid.querySelector('#empty-reset')?.addEventListener('click', () => { clear(); search.focus(); });
  }
  function clear() {
    search.value = '';
    category.value = '';
    level.value = '';
    sort.value = '';
    render();
  }
  [search, category, level, sort].forEach((input) => input.addEventListener('input', render));
  reset.addEventListener('click', clear);
  render();
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-group').forEach((group) => {
    const tabs = [...group.querySelectorAll('[data-tab]')];
    const panels = [...group.querySelectorAll('[role="tabpanel"], .tab-panel')];

    const activate = (tab, moveFocus = false) => {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      panels.forEach((panel) => panel.classList.toggle('active', panel.id === tab.dataset.tab));
      if (moveFocus) tab.focus();
    };

    tabs.forEach((tab, index) => {
      tab.type = 'button';
      tab.setAttribute('role', 'tab');
      if (!tab.id) tab.id = `tab-${tab.dataset.tab}`;
      tab.setAttribute('aria-controls', tab.dataset.tab);
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        let nextIndex = index;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;
        activate(tabs[nextIndex], true);
      });
    });

    panels.forEach((panel) => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `tab-${panel.id}`);
    });

    const selectedTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
    if (selectedTab) activate(selectedTab);
  });

  document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
    trigger.type = 'button';
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const open = item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(open));
      const indicator = trigger.querySelector('span');
      if (indicator) indicator.textContent = open ? '−' : '+';
    });
  });
});

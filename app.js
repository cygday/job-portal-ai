let jobs = [
  { id: 1, title: 'Senior Product Designer', company: 'Khalti', location: 'Lalitpur', category: 'Creative / Graphics / Designing', type: 'Full-time', salary: 145000, salaryLabel: 'NPR 100–145k', time: '2h ago', initial: 'K', description: 'Shape the next generation of digital payments for millions of people across Nepal. You will partner with product and engineering to make complex financial tools feel simple.' },
  { id: 2, title: 'Backend Engineer, Payments', company: 'F1Soft International', location: 'Kathmandu', category: 'Information Technology (IT)', type: 'Full-time', salary: 180000, salaryLabel: 'NPR 130–180k', time: '5h ago', initial: 'F', description: 'Build reliable services at the heart of Nepal’s digital finance ecosystem. We are looking for a thoughtful engineer who cares about performance, observability and clean APIs.' },
  { id: 3, title: 'Growth Marketing Lead', company: 'Pathao Nepal', location: 'Kathmandu', category: 'Marketing / Sales / Advertising', type: 'Full-time', salary: 125000, salaryLabel: 'NPR 90–125k', time: '1d ago', initial: 'P', description: 'Lead campaigns that make everyday life easier for riders, eaters and merchants. Bring sharp ideas, strong execution and a deep curiosity about Kathmandu.' },
  { id: 4, title: 'Operations Associate', company: 'CloudFactory', location: 'Remote', category: 'General Mgmt / Administration / Operations', type: 'Full-time', salary: 90000, salaryLabel: 'NPR 65–90k', time: '1d ago', initial: 'C', description: 'Help distributed teams deliver high-quality work for global customers. This role sits at the intersection of people, process and the details that make systems hum.' },
  { id: 5, title: 'Frontend Developer', company: 'LogPoint', location: 'Bhaktapur', category: 'Information Technology (IT)', type: 'Full-time', salary: 155000, salaryLabel: 'NPR 110–155k', time: '2d ago', initial: 'L', description: 'Create clear, fast interfaces for a world-class cybersecurity platform. You will work with a collaborative product team and contribute to a mature design system.' },
  { id: 6, title: 'People & Culture Partner', company: 'Fusemachines', location: 'Kathmandu', category: 'General Mgmt / Administration / Operations', type: 'Full-time', salary: 115000, salaryLabel: 'NPR 80–115k', time: '3d ago', initial: 'F', description: 'Build the employee experience at an ambitious AI company. You will bring empathy, structure and excellent communication to every stage of the team journey.' }
];

const categories = [
  ['Accounting / Audit', 5, 'https://rollingnexus.com/jobs/category/Accounting-Audit'],
  ['Administrative / Clerical', 1, 'https://rollingnexus.com/jobs/category/Administrative-Clerical'],
  ['Agriculture/Forestry', 0, 'https://rollingnexus.com/jobs/category/Agriculture-Forestry'],
  ['Architecture / Interior Design', 0, 'https://rollingnexus.com/jobs/category/Architecture-Interior-Design'],
  ['Banks/ Insurance/ Finance', 0, 'https://rollingnexus.com/jobs/category/Banks-Insurance-Finance'],
  ['Business Development', 0, 'https://rollingnexus.com/jobs/category/Business-Development'],
  ['Cleaner', 0, 'https://rollingnexus.com/jobs/category/Cleaner'],
  ['Commercial / Logistics / Supply Chain', 0, 'https://rollingnexus.com/jobs/category/Commercial-Logistics-Supply%20Chain'],
  ['Communications and Public Affairs', 0, 'https://rollingnexus.com/jobs/category/Communications%20and%20Public%20Affairs'],
  ['Community Health Mobilizer', 0, 'https://rollingnexus.com/jobs/category/Community-Health-Mobilizer-678899'],
  ['Construction Skilled Staff', 0, 'https://rollingnexus.com/jobs/category/Construction-Skilled-Staff'],
  ['Construction/ Engineering', 0, 'https://rollingnexus.com/jobs/category/Construction-Engineering'],
  ['Consulting', 0, 'https://rollingnexus.com/jobs/category/Consulting'],
  ['Creative / Graphics / Designing', 0, 'https://rollingnexus.com/jobs/category/Creative-Graphics-Designing'],
  ['Customer Relation / Public Relations', 2, 'https://rollingnexus.com/jobs/category/Customer%20Relation-Public%20Relations'],
  ['Development Sector', 0, 'https://rollingnexus.com/jobs/category/Development-Sector'],
  ['Domestic Help', 0, 'https://rollingnexus.com/jobs/category/Domestic-Help'],
  ['Driving', 0, 'https://rollingnexus.com/jobs/category/Driving'],
  ['Engineer', 0, 'https://rollingnexus.com/jobs/category/Engineer'],
  ['Entertainment', 0, 'https://rollingnexus.com/jobs/category/Entertainment'],
  ['Factory Worker', 0, 'https://rollingnexus.com/jobs/category/Factory-Worker'],
  ['Fashion / Textile Designing', 0, 'https://rollingnexus.com/jobs/category/Fashion-Textile%20Designing'],
  ['Food & Beverages/Liquor/FMCG', 0, 'https://rollingnexus.com/jobs/category/FoodBeveragesLiquorFMCG'],
  ['General Mgmt / Administration / Operations', 2, 'https://rollingnexus.com/jobs/category/General%20Mgmt-Administration-Operations'],
  ['Healthcare / Pharmaceuticals / Medical', 14, 'https://rollingnexus.com/jobs/category/Healthcare-Pharmaceuticals-Medical'],
  ['Helper/Labour', 0, 'https://rollingnexus.com/jobs/category/Helper-Labour'],
  ['Hospitality', 0, 'https://rollingnexus.com/jobs/category/Hospitality-'],
  ['Hotel Staff', 0, 'https://rollingnexus.com/jobs/category/Hotel-Staff'],
  ['Human Resource / Org. Development', 0, 'https://rollingnexus.com/jobs/category/Human-Resource-Org-Development'],
  ['Hydro', 0, 'https://rollingnexus.com/jobs/category/Hydro'],
  ['Information Technology (IT)', 0, 'https://rollingnexus.com/jobs/category/Information-Technology-(IT)'],
  ['Journalism / Editor / Media', 0, 'https://rollingnexus.com/jobs/category/Journalism-Editor-Media'],
  ['Legal Services', 0, 'https://rollingnexus.com/jobs/category/Legal-Services'],
  ['Management', 0, 'https://rollingnexus.com/jobs/category/Management'],
  ['Marketing / Sales / Advertising', 7, 'https://rollingnexus.com/jobs/category/Marketing-Sales-Advertising'],
  ['Merchandising / Purchasing / Retail', 0, 'https://rollingnexus.com/jobs/category/Merchandising-Purchasing-Retail'],
  ['Others', 14, 'https://rollingnexus.com/jobs/category/Others'],
  ['Procurements / General Services', 0, 'https://rollingnexus.com/jobs/category/Procurements-General%20Services'],
  ['Production / Maintenance / Quality', 0, 'https://rollingnexus.com/jobs/category/Production-Maintenance-Quality'],
  ['Programming / Database', 0, 'https://rollingnexus.com/jobs/category/Programming-Database'],
  ['Protective / Security Services', 0, 'https://rollingnexus.com/jobs/category/Protective-Security%20Services'],
  ['Quality Analyst / Business Analyst', 0, 'https://rollingnexus.com/jobs/category/Quality%20Analyst-Business%20Analyst'],
  ['Real Estate', 0, 'https://rollingnexus.com/jobs/category/Real-Estate'],
  ['Research and Development', 0, 'https://rollingnexus.com/jobs/category/Research-and-Development'],
  ['Restaurant/Cafe Staff', 0, 'https://rollingnexus.com/jobs/category/Restaurant-Cafe-Staff'],
  ['Sales/ Public Relations', 0, 'https://rollingnexus.com/jobs/category/Sales-Public-Relations'],
  ['Secretarial / Front / Reception', 0, 'https://rollingnexus.com/jobs/category/Secretarial-Front-Reception'],
  ['Security Guard', 0, 'https://rollingnexus.com/jobs/category/Security-Guard'],
  ['Senior Management', 0, 'https://rollingnexus.com/jobs/category/Senior-Management'],
  ['Sports', 0, 'https://rollingnexus.com/jobs/category/Sports'],
  ['Support Staff', 0, 'https://rollingnexus.com/jobs/category/Support-Staff'],
  ['Teaching / Education', 2, 'https://rollingnexus.com/jobs/category/Teaching%20-Education'],
  ['Technical', 0, 'https://rollingnexus.com/jobs/category/Technical'],
  ['Telecommunication', 0, 'https://rollingnexus.com/jobs/category/Telecommunication']
];
const categoryAliases = { Design: 'Creative / Graphics / Designing', Technology: 'Information Technology (IT)', Marketing: 'Marketing / Sales / Advertising', Operations: 'General Mgmt / Administration / Operations', Finance: 'Accounting / Audit', Healthcare: 'Healthcare / Pharmaceuticals / Medical', Education: 'Teaching / Education' };

const state = { category: 'All', keyword: '', location: 'Kathmandu', sort: 'recent', matching: false, saved: new Set(JSON.parse(localStorage.getItem('saved') || '[]')), profile: JSON.parse(localStorage.getItem('profile') || 'null') };
const jobsList = document.querySelector('#jobsList');
const resultCount = document.querySelector('#resultCount');
const savedCount = document.querySelector('#savedCount');
const modalBackdrop = document.querySelector('#modalBackdrop');
const modalContent = document.querySelector('#modalContent');
const refreshStatus = document.querySelector('#refreshStatus');
const refreshButton = document.querySelector('#refreshButton');
const matchButton = document.querySelector('#matchButton');
const accountButton = document.querySelector('#accountButton');
const alertsButton = document.querySelector('#alertsButton');
const accountBackdrop = document.querySelector('#accountBackdrop');
const alertsBackdrop = document.querySelector('#alertsBackdrop');
const refreshInterval = 60 * 1000;

function renderCategoryFilters() {
  document.querySelector('#categoryFilters').innerHTML = [
    '<button class="filter-pill active" data-category="All" type="button">All roles</button>',
    ...categories.map(([name, count, url]) => `<span class="category-filter"><button class="filter-pill" data-category="${name}" type="button">${name} <small>(${count})</small></button><a href="${url}" target="_blank" rel="noopener" aria-label="View ${name} on Rolling Nexus" title="View ${name} on Rolling Nexus">↗</a></span>`)
  ].join('');
}

function formatRefreshTime(date) {
  return `updated ${new Intl.DateTimeFormat('en-NP', { hour: 'numeric', minute: '2-digit' }).format(date)}`;
}

async function refreshJobs({ silent = false } = {}) {
  if (!silent) refreshButton.disabled = true;
  try {
    const response = await fetch(`jobs.json?refresh=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Listings request failed: ${response.status}`);
    const feed = await response.json();
    jobs = feed.jobs.map((job) => ({ ...job, category: categoryAliases[job.category] || job.category }));
    refreshStatus.textContent = formatRefreshTime(new Date(feed.updatedAt));
    renderJobs();
  } catch (error) {
    refreshStatus.textContent = 'using saved listings';
    if (!silent) console.error(error);
  } finally {
    refreshButton.disabled = false;
  }
}

function filteredJobs() {
  const query = state.keyword.toLowerCase();
  const result = jobs.filter((job) => {
    const matchesCategory = state.category === 'All' || job.category === state.category;
    const matchesLocation = !state.location || job.location === state.location;
    const matchesQuery = !query || `${job.title} ${job.company} ${job.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesLocation && matchesQuery;
  });
  if (state.sort === 'salary') return result.sort((a, b) => b.salary - a.salary);
  if (state.sort === 'match' || state.matching) return result.sort((a, b) => scoreJob(b) - scoreJob(a));
  return result;
}

function scoreJob(job) {
  if (!state.profile?.skills) return 0;
  const terms = state.profile.skills.toLowerCase().split(/[\s,]+/).filter((term) => term.length > 2);
  const searchable = `${job.title} ${job.category} ${job.description}`.toLowerCase();
  const matches = terms.filter((term) => searchable.includes(term)).length;
  return matches ? Math.min(98, 58 + matches * 12) : 0;
}

function renderJobs() {
  const visibleJobs = filteredJobs();
  resultCount.textContent = visibleJobs.length;
  savedCount.textContent = state.saved.size;
  jobsList.innerHTML = visibleJobs.length ? visibleJobs.map((job) => `
    <article class="job-card" data-id="${job.id}">
      <div class="company-logo" aria-hidden="true">${job.initial}</div>
      <div>${state.matching && scoreJob(job) ? `<span class="match-score">${scoreJob(job)}% match</span>` : ''}<h3 class="job-title">${job.title}</h3><div class="job-company">${job.company} · ${job.location}</div><div class="job-tags"><span class="job-tag">${job.category}</span><span class="job-tag">${job.type}</span><span class="job-tag">${job.salaryLabel}</span><span class="job-tag">${job.source}</span></div></div>
      <div class="job-time"><div>${job.time}</div><button class="job-save ${state.saved.has(job.id) ? 'saved' : ''}" data-save="${job.id}" type="button" aria-label="${state.saved.has(job.id) ? 'Remove from saved jobs' : 'Save job'}">${state.saved.has(job.id) ? '★' : '☆'}</button></div>
    </article>`).join('') : '<div class="empty-state">No roles match that search. Try a broader term or location.</div>';
}

function openJob(id) {
  const job = jobs.find((item) => item.id === id);
  modalContent.innerHTML = `<span class="modal-kicker">${job.category} · ${job.location}</span><h2 id="modalTitle">${job.title}</h2><p class="modal-company">${job.company} · ${job.type} · ${job.source}</p><p class="modal-copy">${job.description}</p><div class="modal-footer"><strong>${job.salaryLabel}</strong><a class="apply-button" href="${job.sourceUrl}" target="_blank" rel="noopener">View on ${job.source} ↗</a></div>`;
  modalBackdrop.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() { modalBackdrop.hidden = true; document.body.style.overflow = ''; }
function closeFeature(backdrop) { backdrop.hidden = true; document.body.style.overflow = ''; }
function openFeature(backdrop) { backdrop.hidden = false; document.body.style.overflow = 'hidden'; }

renderCategoryFilters();

function hydrateProfile() {
  if (!state.profile) return;
  document.querySelector('#profileName').value = state.profile.name || '';
  document.querySelector('#profileEmail').value = state.profile.email || '';
  document.querySelector('#profileSkills').value = state.profile.skills || '';
  document.querySelector('#profileExperience').value = state.profile.experience || 'Entry level';
  accountButton.textContent = state.profile.name ? state.profile.name.split(' ')[0] : 'Profile';
}

document.querySelector('#searchForm').addEventListener('submit', (event) => { event.preventDefault(); state.keyword = document.querySelector('#keywordInput').value.trim(); state.location = document.querySelector('#locationSelect').value; renderJobs(); document.querySelector('#jobs').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#sortSelect').addEventListener('change', (event) => { state.sort = event.target.value; renderJobs(); });
document.querySelectorAll('.filter-pill').forEach((button) => button.addEventListener('click', () => { document.querySelector('.filter-pill.active').classList.remove('active'); button.classList.add('active'); state.category = button.dataset.category; renderJobs(); }));
jobsList.addEventListener('click', (event) => { const saveButton = event.target.closest('[data-save]'); if (saveButton) { const id = Number(saveButton.dataset.save); state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id); localStorage.setItem('saved', JSON.stringify([...state.saved])); renderJobs(); return; } const card = event.target.closest('.job-card'); if (card) openJob(Number(card.dataset.id)); });
document.querySelector('#modalClose').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (event) => { if (event.target === modalBackdrop) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
document.querySelector('#savedToggle').addEventListener('click', () => { state.keyword = ''; state.location = ''; state.category = 'All'; document.querySelector('#keywordInput').value = ''; document.querySelector('#locationSelect').value = ''; document.querySelectorAll('.filter-pill').forEach((button) => button.classList.toggle('active', button.dataset.category === 'All')); const savedJobs = jobs.filter((job) => state.saved.has(job.id)); jobsList.innerHTML = savedJobs.length ? savedJobs.map((job) => `<article class="job-card" data-id="${job.id}"><div class="company-logo">${job.initial}</div><div><h3 class="job-title">${job.title}</h3><div class="job-company">${job.company} · ${job.location}</div><div class="job-tags"><span class="job-tag">Saved role</span><span class="job-tag">${job.salaryLabel}</span></div></div><div class="job-time">Saved<button class="job-save saved" data-save="${job.id}" type="button" aria-label="Remove from saved jobs">★</button></div></article>`).join('') : '<div class="empty-state">Your saved roles will appear here.</div>'; document.querySelector('#jobs').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#postJobButton').addEventListener('click', () => { window.location.href = 'post-job.html'; });
accountButton.addEventListener('click', () => { hydrateProfile(); openFeature(accountBackdrop); });
alertsButton.addEventListener('click', () => openFeature(alertsBackdrop));
document.querySelectorAll('[data-close-feature]').forEach((button) => button.addEventListener('click', () => closeFeature(button.closest('.modal-backdrop'))));
[accountBackdrop, alertsBackdrop].forEach((backdrop) => backdrop.addEventListener('click', (event) => { if (event.target === backdrop) closeFeature(backdrop); }));
document.querySelector('#accountForm').addEventListener('submit', (event) => { event.preventDefault(); state.profile = { name: document.querySelector('#profileName').value.trim(), email: document.querySelector('#profileEmail').value.trim(), skills: document.querySelector('#profileSkills').value.trim(), experience: document.querySelector('#profileExperience').value }; localStorage.setItem('profile', JSON.stringify(state.profile)); accountButton.textContent = state.profile.name.split(' ')[0]; matchButton.classList.add('active'); closeFeature(accountBackdrop); renderJobs(); });
document.querySelector('#alertsForm').addEventListener('submit', (event) => { event.preventDefault(); localStorage.setItem('alert', JSON.stringify({ email: document.querySelector('#alertEmail').value, keywords: document.querySelector('#alertKeywords').value, location: document.querySelector('#alertLocation').value, frequency: document.querySelector('#alertFrequency').value })); document.querySelector('#alertStatus').textContent = 'Alert saved in this browser. Email delivery will connect to the ASP.NET notification service.'; document.querySelector('#alertStatus').classList.add('success'); });
matchButton.addEventListener('click', () => { if (!state.profile) { openFeature(accountBackdrop); return; } state.matching = !state.matching; matchButton.classList.toggle('active', state.matching); if (state.matching) state.sort = 'match'; document.querySelector('#sortSelect').value = state.matching ? 'match' : 'recent'; renderJobs(); });
refreshButton.addEventListener('click', () => refreshJobs());
renderJobs();
refreshJobs();
setInterval(() => refreshJobs({ silent: true }), refreshInterval);
hydrateProfile();

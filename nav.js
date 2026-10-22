// nav.js - FounderCalculators
// Edit the two lists below (calculators, guides). The desktop and mobile menus are built from them.

document.addEventListener('DOMContentLoaded', function () {
  const GUIDES_INDEX = '/guides.html'; // guides.html lives in the repo root

  const calculators = [
    {
      group: 'Finance &amp; Funding',
      items: [
        ['/burn-rate-runway.html', 'Burn &amp; Runway'],
        ['/saas-valuation.html', 'SaaS Valuation'],
        ['/unit-economics.html', 'Unit Economics'],
        ['/equity-dilution.html', 'Equity Dilution'],
        ['/convertible-note.html', 'Convertible Note / SAFE'],
        ['/berkus-valuation.html', 'Berkus Method'],
        ['/rule-of-40.html', 'Rule of 40'],
        ['/breakeven-analysis.html', 'Breakeven Point'],
        ['/debt-repayment.html', 'Debt Repayment'],
        ['/cac-payback.html', 'CAC Payback Period'],
        ['/co-founder-equity-split.html', 'Co-Founder Equity Split']
      ]
    },
    {
      group: 'Growth &amp; Marketing',
      items: [
        ['/mrr-projector.html', 'MRR Projector'],
        ['/mrr-expansion-churn.html', 'MRR Expansion + Churn'],
        ['/cac-ltv-ratio.html', 'CAC to LTV'],
        ['/viral-coefficient.html', 'Viral Coefficient'],
        ['/roas-calculator.html', 'ROAS Calculator'],
        ['/churn-impact.html', 'Churn Impact'],
        ['/referral-roi.html', 'Referral ROI'],
        ['/email-roi.html', 'Email Marketing ROI']
      ]
    },
    {
      group: 'Operations &amp; Scaling',
      items: [
        ['/employee-cost.html', 'Burdened Cost'],
        ['/app-store-tax.html', 'App Store Tax'],
        ['/freelance-to-agency.html', 'Agency Scaler'],
        ['/consulting-rate.html', 'Consulting Rate']
      ]
    }
  ];

  // File names must match the files in the lowercase /guides/ folder exactly.
  const guides = [
    ['/guides/what-mrr-actually-tells-you.html', 'What MRR Actually Tells You'],
    ['/guides/healthy-churn-benchmarks-by-saas-stage.html', 'Healthy Churn Benchmarks'],
    ['/guides/ltv-cac-real-math.html', 'How to Interpret LTV:CAC'],
    ['/guides/cac-payback-meaning.html', 'CAC Payback: 12 Months Magic'],
    ['/guides/rule-of-40-explained.html', 'Rule of 40 Explained'],
    ['/guides/nrr-what-it-really-means.html', 'NRR: Metric That Predicts Survival'],
    ['/guides/burn-multiple-when-safe.html', 'Burn Multiple: Safe vs Deadly'],
    ['/guides/metrics-before-10k-mrr.html', 'Metrics Before $10k MRR'],
    ['/guides/from-50k-to-250k-mrr.html', 'From $50k to $250k MRR'],
    ['/guides/gross-margin-benchmarks-by-industry.html', 'Gross Margin by Industry 2026']
  ];

  const chevron = '<svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>';
  const dropdownClasses = 'absolute left-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150 z-50 max-h-[70vh] overflow-y-auto';

  // ----- Desktop: calculators dropdown -----
  const calcDesktop = calculators.map((g, i) => `
    <div class="px-4 py-2 border-b border-slate-100 ${i > 0 ? 'mt-2' : ''}">
      <p class="font-bold text-slate-900 uppercase text-xs tracking-wider">${g.group}</p>
    </div>
    ${g.items.map(([href, label]) => `<a href="${href}" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">${label}</a>`).join('')}
  `).join('');

  // ----- Desktop: guides dropdown -----
  const guidesDesktop = guides.map(([href, label]) =>
    `<a href="${href}" class="block px-2 py-1 hover:bg-slate-50 text-slate-700">${label}</a>`
  ).join('');

  // ----- Mobile -----
  const calcMobile = calculators.map(g => `
    <div class="space-y-3">
      <div class="font-bold uppercase text-xs text-slate-500">${g.group}</div>
      ${g.items.map(([href, label]) => `<a href="${href}" class="block text-base hover:text-blue-600 transition">${label}</a>`).join('')}
    </div>
  `).join('');

  const guidesMobile = guides.map(([href, label]) =>
    `<a href="${href}" class="block text-base hover:text-blue-600 transition">${label}</a>`
  ).join('');

  const navHTML = `
    <nav class="bg-white border-b py-4 px-6 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto flex justify-between items-center">

        <!-- Brand -->
        <a href="/index.html" class="font-bold text-xl tracking-tight text-slate-900">
          Founder<span class="text-blue-600">Calculators</span>
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">

          <!-- Calculators dropdown -->
          <div class="relative group">
            <button class="hover:text-blue-600 transition flex items-center focus:outline-none">
              Calculators ${chevron}
            </button>
            <div class="${dropdownClasses}">
              ${calcDesktop}
              <div class="px-4 py-3 border-t border-slate-100 mt-2">
                <a href="/index.html" class="text-blue-600 hover:underline text-sm block text-center">View All Calculators →</a>
              </div>
            </div>
          </div>

          <!-- Guides dropdown -->
          <div class="relative group">
            <button class="hover:text-blue-600 transition flex items-center focus:outline-none">
              Guides ${chevron}
            </button>
            <div class="${dropdownClasses}">
              <div class="px-4 py-2">
                <input type="text" id="guideSearch" placeholder="Search guides..." class="w-full p-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div id="guidesList" class="px-4 py-2 space-y-2">
                <a href="${GUIDES_INDEX}" data-keep="true" class="block px-2 py-1 hover:bg-slate-50 text-blue-600 font-semibold">All Guides</a>
                ${guidesDesktop}
              </div>
              <div class="px-4 py-3 border-t border-slate-100 mt-2">
                <a href="${GUIDES_INDEX}" class="text-blue-600 hover:underline text-sm block text-center">Explore All Guides →</a>
              </div>
            </div>
          </div>

          <a href="/about.html" class="hover:text-blue-600 transition">About</a>
          <a href="/contact.html" class="hover:text-blue-600 transition">Contact</a>
        </div>

        <!-- Hamburger button (mobile only) -->
        <button id="mobile-menu-btn" class="md:hidden text-slate-600 focus:outline-none" aria-label="Open menu">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden overflow-y-auto">
      <div class="flex justify-between items-center p-6 border-b">
        <a href="/index.html" class="font-bold text-xl text-slate-900">
          Founder<span class="text-blue-600">Calculators</span>
        </a>
        <button id="close-menu" class="text-slate-600 focus:outline-none" aria-label="Close menu">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="p-6 space-y-8 text-lg font-medium text-slate-700">
        <a href="/index.html" class="block hover:text-blue-600 transition">Home</a>

        ${calcMobile}

        <div class="space-y-3">
          <div class="font-bold uppercase text-xs text-slate-500">Guides &amp; Benchmarks</div>
          <a href="${GUIDES_INDEX}" class="block text-base font-semibold text-blue-600">All Guides</a>
          ${guidesMobile}
        </div>

        <a href="/about.html" class="block hover:text-blue-600 transition">About</a>
        <a href="/contact.html" class="block hover:text-blue-600 transition">Contact</a>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // ----- Mobile menu toggle -----
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    document.body.style.overflow = '';
  }

  if (menuBtn && closeBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', closeMenu);
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) closeMenu();
    });
  }

  // ----- Guides search (inside Guides dropdown) -----
  const guideSearch = document.getElementById('guideSearch');
  const guidesList = document.getElementById('guidesList');

  if (guideSearch && guidesList) {
    guideSearch.addEventListener('input', (e) => {
      const filter = e.target.value.toLowerCase().trim();
      Array.from(guidesList.getElementsByTagName('a')).forEach(link => {
        const keep = link.getAttribute('data-keep') === 'true';
        const match = link.textContent.toLowerCase().includes(filter);
        link.style.display = (keep || match) ? 'block' : 'none';
      });
    });
  }
});

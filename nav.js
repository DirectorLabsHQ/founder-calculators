// nav.js (with separate "Guides" top-level dropdown)
document.addEventListener('DOMContentLoaded', function() {
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
              Calculators
              <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="absolute left-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 max-h-[70vh] overflow-y-auto">
              
              <div class="px-4 py-2 border-b border-slate-100">
                <p class="font-bold text-slate-900 uppercase text-xs tracking-wider">Finance & Funding</p>
              </div>
              <a href="/burn-rate-runway.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Burn & Runway</a>
              <a href="/saas-valuation.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">SaaS Valuation</a>
              <a href="/unit-economics.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Unit Economics</a>
              <a href="/equity-dilution.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Equity Dilution</a>
              <a href="/convertible-note.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Convertible Note / SAFE</a>
              <a href="/berkus-valuation.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Berkus Method</a>
              <a href="/rule-of-40.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Rule of 40</a>
              <a href="/breakeven-analysis.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Breakeven Point</a>
              <a href="/debt-repayment.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Debt Repayment</a>
              <a href="/cac-payback.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">CAC Payback Period</a>
              <a href="/co-founder-equity-split.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Co-Founder Equity Split</a>

              <div class="px-4 py-2 border-b border-slate-100 mt-2">
                <p class="font-bold text-slate-900 uppercase text-xs tracking-wider">Growth & Marketing</p>
              </div>
              <a href="/mrr-projector.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">MRR Projector</a>
              <a href="/mrr-expansion-churn.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">MRR Expansion + Churn</a>
              <a href="/cac-ltv-ratio.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">CAC to LTV</a>
              <a href="/viral-coefficient.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Viral Coefficient</a>
              <a href="/roas-calculator.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">ROAS Calculator</a>
              <a href="/churn-impact.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Churn Impact</a>
              <a href="/referral-roi.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Referral ROI</a>
              <a href="/email-roi.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Email Marketing ROI</a>

              <div class="px-4 py-2 border-b border-slate-100 mt-2">
                <p class="font-bold text-slate-900 uppercase text-xs tracking-wider">Operations & Scaling</p>
              </div>
              <a href="/employee-cost.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Burdened Cost</a>
              <a href="/app-store-tax.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">App Store Tax</a>
              <a href="/freelance-to-agency.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Agency Scaler</a>
              <a href="/consulting-rate.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">Consulting Rate</a>

              <div class="px-4 py-3 border-t border-slate-100 mt-2">
                <a href="/index.html" class="text-blue-600 hover:underline text-sm block text-center">View All Calculators →</a>
              </div>
            </div>
          </div>

          <!-- New separate Guides dropdown -->
          <div class="relative group">
            <button class="hover:text-blue-600 transition flex items-center focus:outline-none">
              Guides
              <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <a href="/guides/guides.html" class="block px-4 py-2 hover:bg-slate-50 text-blue-600 font-semibold">All Guides</a>
              <!-- Optional: add direct links to popular guides here if you want -->
              <!-- <a href="/guides/what-mrr-actually-tells-you.html" class="block px-4 py-2 hover:bg-slate-50 text-slate-700">What MRR Really Means</a> -->
              <!-- ... -->
              <div class="px-4 py-3 border-t border-slate-100 mt-2">
                <a href="/guides/guides.html" class="text-blue-600 hover:underline text-sm block text-center">Explore All Guides →</a>
              </div>
            </div>
          </div>

          <a href="/about.html" class="hover:text-blue-600 transition">About</a>
          <a href="/contact.html" class="hover:text-blue-600 transition">Contact</a>
        </div>

        <!-- Hamburger button (mobile only) -->
        <button id="mobile-menu-btn" class="md:hidden text-slate-600 focus:outline-none">
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
        <button id="close-menu" class="text-slate-600 focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="p-6 space-y-8 text-lg font-medium text-slate-700">
        <a href="/index.html" class="block hover:text-blue-600 transition">Home</a>

        <div class="space-y-6">
          <div class="font-bold uppercase text-xs text-slate-500">Calculators</div>
          <a href="/burn-rate-runway.html" class="block hover:text-blue-600 transition">Burn & Runway</a>
          <!-- ... add your calculator links here if you want them flat in mobile ... -->
          <!-- or keep it simple and just link to index.html for all calculators -->
        </div>

        <div class="space-y-6">
          <div class="font-bold uppercase text-xs text-slate-500">Guides & Benchmarks</div>
          <a href="/guides/guides.html" class="block hover:text-blue-600 transition">All Guides</a>
        </div>

        <a href="/about.html" class="block hover:text-blue-600 transition">About</a>
        <a href="/contact.html" class="block hover:text-blue-600 transition">Contact</a>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Mobile menu toggle logic
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = '';
    });

    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
      }
    });
  }
});

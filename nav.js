// nav.js (root level)
document.addEventListener('DOMContentLoaded', function() {
  const navHTML = `
    <nav class="bg-white border-b py-4 px-6 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        
        <!-- Logo on the left -->
        <a href="/index.html" class="flex items-center flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="FounderCalculators Logo" 
            class="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-transform duration-200 hover:scale-105"
          >
        </a>

        <!-- Desktop menu with dropdown -->
        <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <!-- Calculators Dropdown -->
          <div class="relative group">
            <button class="hover:text-blue-600 transition flex items-center focus:outline-none">
              Calculators
              <svg class="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="absolute left-0 mt-3 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-[75vh] overflow-y-auto">
              
              <div class="px-5 py-2 border-b border-slate-100">
                <p class="font-bold text-slate-900 uppercase text-xs tracking-wider">Finance & Funding</p>
              </div>
              <a href="/burn-rate-runway.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Burn & Runway</a>
              <a href="/saas-valuation.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">SaaS Valuation</a>
              <a href="/unit-economics.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Unit Economics</a>
              <a href="/equity-dilution.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Equity Dilution</a>
              <a href="/convertible-note.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Convertible Note / SAFE</a>
              <a href="/berkus-valuation.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Berkus Method</a>
              <a href="/rule-of-40.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Rule of 40</a>
              <a href="/breakeven-analysis.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Breakeven Point</a>
              <a href="/debt-repayment.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Debt Repayment</a>

              <div class="px-5 py-2 border-b border-slate-100 mt-3">
                <p class="font-bold text-slate-900 uppercase text-xs tracking-wider">Growth & Marketing</p>
              </div>
              <a href="/mrr-projector.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">MRR Projector</a>
              <a href="/cac-ltv-ratio.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">CAC to LTV</a>
              <a href="/viral-coefficient.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Viral Coefficient</a>
              <a href="/roas-calculator.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">ROAS Calculator</a>
              <a href="/churn-impact.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Churn Impact</a>
              <a href="/referral-roi.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Referral ROI</a>
              <a href="/email-roi.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Email Marketing ROI</a>

              <div class="px-5 py-2 border-b border-slate-100 mt-3">
                <p class="font-bold text-slate-900 uppercase text-xs tracking-wider">Operations & Scaling</p>
              </div>
              <a href="/employee-cost.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Burdened Cost</a>
              <a href="/app-store-tax.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">App Store Tax</a>
              <a href="/freelance-to-agency.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Agency Scaler</a>
              <a href="/consulting-rate.html" class="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 transition-colors">Consulting Rate</a>

              <div class="px-5 py-4 border-t border-slate-100 mt-3">
                <a href="/index.html" class="text-blue-600 hover:underline text-sm block text-center font-medium">View All Calculators →</a>
              </div>
            </div>
          </div>

          <a href="/about.html" class="hover:text-blue-600 transition">About</a>
          <a href="/contact.html" class="hover:text-blue-600 transition">Contact</a>
        </div>

        <!-- Mobile menu button placeholder (you can add hamburger logic later) -->
        <button class="md:hidden text-slate-700 focus:outline-none">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
});

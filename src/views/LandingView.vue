<template>
    <div class="landing">
        <!-- Top navbar -->
        <header class="top-nav">
            <div class="nav-inner">
                <router-link to="/" class="brand" @click="resetNav">
                    <img src="../assets/NovaGoLogo.png" alt="NovaGO logo" class="brand-logo" />
                </router-link>

                <!-- Mobile hamburger -->
                <button class="nav-toggle" type="button" @click="toggleMobileMenu" aria-label="Toggle navigation">
                    <span :class="['nav-toggle-bar', { open: isMobileMenuOpen }]"></span>
                    <span :class="['nav-toggle-bar', { open: isMobileMenuOpen }]"></span>
                    <span :class="['nav-toggle-bar', { open: isMobileMenuOpen }]"></span>
                </button>

                <nav class="nav-links" :class="{ 'nav-links--open': isMobileMenuOpen }">
                    <!-- 2nd NAV: SOLUTIONS -->
                    <div class="nav-item has-mega" @mouseenter="openMenuDesktop('solutions')">
                        <button class="nav-link" :class="{ active: activeMenu === 'solutions' }" type="button"
                            @click="toggleDropdown('solutions')">
                            Custom Solutions
                        </button>

                        <div v-if="activeMenu === 'solutions'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                            <div class="mega mega--narrow">
                                <div class="mega-left mega-left--2">
                                    <!-- By use case -->
                                    <div class="mega-column">
                                        <p class="mega-heading">By use case</p>

                                        <router-link class="mega-link" to="/dashboard" @click="closeAllNav">
                                            Corporate booking
                                            <span>Seamlessly book corporate rides from your portal.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/rental-collection-summary"
                                            @click="closeAllNav">
                                            Rental collection
                                            <span>Track rental payments in 1 view. Invoice generation.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/payroll" @click="closeAllNav">
                                            Payroll
                                            <span>Simplified/view all salary related payments in one.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/" @click="closeAllNav">
                                            CMS
                                            <span>Customize your very own web design with our CMS.</span>
                                        </router-link>
                                    </div>

                                    <!-- By industry -->
                                    <div class="mega-column">
                                        <p class="mega-heading">By industry</p>

                                        <router-link class="mega-link" to="/" @click="closeAllNav">
                                            Transport
                                            <span>For fleets, delivery and ride-hailing operations.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/" @click="closeAllNav">
                                            Travel
                                            <span>Support business travel and trip-linked spending.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/" @click="closeAllNav">
                                            Automotive
                                            <span>Leasing, workshops and vehicle management.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/" @click="closeAllNav">
                                            SMEs
                                            <span>Everyday financial workflows for growing businesses.</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 1st NAV: PRODUCTS -->
                    <div class="nav-item has-mega" @mouseenter="openMenuDesktop('products')">
                        <button class="nav-link" :class="{ active: activeMenu === 'products' }" type="button"
                            @click="toggleDropdown('products')">
                            Business Banking
                        </button>

                        <div v-if="activeMenu === 'products'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                            <div class="mega mega--narrow">
                                <div class="mega-left mega-left--2">
                                    <!-- Business banking -->
                                    <div class="mega-column">
                                        <p class="mega-heading">Business banking</p>

                                        <router-link class="mega-link" to="/global-multi-currency-account"
                                            @click="closeAllNav">
                                            Global Multi Currency Account
                                            <span>Multi-currency accounts to receive funds.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/global-card-issuance" @click="closeAllNav">
                                            Global Card Issuance
                                            <span>Physical and virtual cards for real-time payments.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/global-payout" @click="closeAllNav">
                                            Global Payout
                                            <span>Send payouts to 190+ countries via local currencies and
                                                methods.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/fx-conversion-acceptance"
                                            @click="closeAllNav">
                                            FX Conversion &amp; Acceptance
                                            <span>Multi-currency, borderless transactions.</span>
                                        </router-link>
                                    </div>

                                    <!-- Spend -->
                                    <div class="mega-column">
                                        <p class="mega-heading">Spend</p>

                                        <router-link class="mega-link" to="/corporate-cards" @click="closeAllNav">
                                            Corporate Cards
                                            <span>Multi-currency company and employee cards.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/expense-management" @click="closeAllNav">
                                            Expense Management
                                            <span>Expense and reimbursement management.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/bill-pay" @click="closeAllNav">
                                            Bill Pay
                                            <span>Automated accounts payable management.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/payouts" @click="closeAllNav">
                                            Payouts
                                            <span>Programmatic, cost-effective global payouts.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/remittance" @click="closeAllNav">
                                            Remittance
                                            <span>Cross-border payments.</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3rd NAV: BENEFITS -->
                    <div class="nav-item has-mega" @mouseenter="openMenuDesktop('benefits')">
                        <button class="nav-link" :class="{ active: activeMenu === 'benefits' }" type="button"
                            @click="toggleDropdown('benefits')">
                            Benefits
                        </button>

                        <div v-if="activeMenu === 'benefits'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                            <div class="mega mega--small">
                                <div class="mega-left mega-left--2">
                                    <div class="mega-column">
                                        <p class="mega-heading">Benefits marketplace</p>

                                        <router-link class="mega-link" to="/benefits/shell" @click="closeAllNav">
                                            Shell
                                            <span>Fuel benefits and rewards for your drivers.</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 4th NAV: PARTNERSHIPS -->
                    <div class="nav-item has-mega" @mouseenter="openMenuDesktop('partnerships')">
                        <button class="nav-link" :class="{ active: activeMenu === 'partnerships' }" type="button"
                            @click="toggleDropdown('partnerships')">
                            Partnerships
                        </button>

                        <div v-if="activeMenu === 'partnerships'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                            <div class="mega mega--small mega--partnership">
                                <div class="partnership-card">
                                    <p class="mega-heading">Partnership programme</p>

                                    <h3 class="partnership-title">Work with NovaGO</h3>

                                    <p class="partnership-text">
                                        Bundle NovaGO with your product or offer Shell fuel benefits to your
                                        users. Talk to our partnership department to explore co-created
                                        solutions.
                                    </p>

                                    <button class="btn-primary partnership-btn" type="button"
                                        @click="() => { scrollToSection('contact'); closeAllNav(); }">
                                        Talk to our partnership team
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 5th NAV: ABOUT US -->
                    <div class="nav-item has-mega" @mouseenter="openMenuDesktop('company')">
                        <button class="nav-link" :class="{ active: activeMenu === 'company' }" type="button"
                            @click="toggleDropdown('company')">
                            About Us
                        </button>

                        <div v-if="activeMenu === 'company'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                            <div class="mega mega--small">
                                <div class="mega-left mega-left--2">
                                    <div class="mega-column">
                                        <p class="mega-heading">About NovaGO</p>

                                        <button class="mega-link" type="button"
                                            @click="() => { scrollToSection('who-we-are'); closeAllNav(); }">
                                            Why NovaGO?
                                            <span>See how we simplify financial operations for SMEs.</span>
                                        </button>

                                        <button class="mega-link" type="button"
                                            @click="() => { scrollToSection('testimonies'); closeAllNav(); }">
                                            Testimonies
                                            <span>Hear from businesses using NovaGO.</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Move login inside nav for mobile -->
                    <div class="nav-right-actions nav-right-actions--inline">
                        <button class="nav-link login-link" @click="handleLoginClick">
                            Log in
                        </button>
                    </div>
                </nav>

                <!-- Desktop-only login button -->
                <div class="nav-right-actions nav-right-actions--desktop">
                    <button class="nav-link login-link" @click="goToLogin">
                        Log in
                    </button>
                </div>
            </div>
        </header>

        <!-- Hero -->
        <section class="hero">
            <div class="hero-inner">
                <!-- Left -->
                <div class="hero-left">
                    <p class="hero-pill">SME • Banking • Rewards</p>

                    <h1 class="hero-title">
                        <img src="../assets/NovaGoLogo.png" alt="NovaGO" class="hero-logo" />
                    </h1>

                    <p class="hero-tagline">Operate. Bank. Get Rewarded. </p>
                    <p class="hero-subtitle">
                        Scale smarter: manage operations, control finances, and reward your team with ease — all with
                        NovaGo.
                    </p>

                    <div class="hero-actions">
                        <button class="btn-primary" @click="scrollToSection('contact')">
                            Get Started
                        </button>
                        <button class="btn-secondary" @click="scrollToSection('contact')">
                            Book a Demo
                        </button>
                    </div>
                </div>

                <!-- Right: abstract “dashboard” art -->
                <div class="hero-right">
                    <div class="hero-art">
                        <div class="hero-art-card hero-art-card--one">
                            <div class="hero-art-header">
                                <span class="hero-art-dot"></span>
                                <span class="hero-art-dot"></span>
                                <span class="hero-art-dot"></span>
                            </div>
                            <div class="hero-art-bars">
                                <div class="hero-art-bar hero-art-bar--1"></div>
                                <div class="hero-art-bar hero-art-bar--2"></div>
                                <div class="hero-art-bar hero-art-bar--3"></div>
                            </div>
                            <div class="hero-art-badge">Real-time balances</div>
                        </div>

                        <div class="hero-art-card hero-art-card--two">
                            <div class="hero-art-pill"></div>
                            <div class="hero-art-meta">
                                <span>NovaDollar (NGS)</span>
                                <span class="hero-art-meta-value">+3,240 today</span>
                            </div>
                        </div>

                        <div class="hero-art-glow hero-art-glow--a"></div>
                        <div class="hero-art-glow hero-art-glow--b"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Interactive showcase / slider -->
        <section id="showcase" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title">How NovaGO helps you</h2>
                <p class="section-text">
                    We custom solutions for you to operate, bank, and get rewarded all in one platform.
                </p>
                <p class="section-text">
                    Switch between views to see how NovaGO supports payroll, rental collection,
                    and corporate banking operations.
                </p>

                <div class="showcase">
                    <button class="showcase-arrow left" type="button" @click="prevSlide">
                        ‹
                    </button>

                    <div class="showcase-content">
                        <div v-for="(slide, index) in showcaseSlides" :key="slide.title"
                            :class="['showcase-slide', { active: index === currentSlide }]">
                            <p class="showcase-tag">{{ slide.tag }}</p>
                            <h3 class="showcase-title">{{ slide.title }}</h3>
                            <p class="showcase-text">{{ slide.text }}</p>

                            <ul class="showcase-list">
                                <li v-for="item in slide.points" :key="item">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button class="showcase-arrow right" type="button" @click="nextSlide">
                        ›
                    </button>
                </div>

                <div class="showcase-dots">
                    <button v-for="(slide, index) in showcaseSlides" :key="slide.title + '-dot'"
                        :class="['showcase-dot', { active: index === currentSlide }]" @click="currentSlide = index"
                        type="button"></button>
                </div>
            </div>
        </section>

        <!-- What We Can Offer -->
        <section id="offer" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title">What We Can Offer</h2>

                <!-- Employee Benefits -->
                <div class="section-block">
                    <h3 class="subheading">Employee benefits</h3>
                    <div class="card-grid">
                        <div class="info-card">
                            <div class="card-icon">SH</div>
                            <h4>Shell: Petrol discount</h4>
                            <p>
                                Give your drivers access to Shell fuel discounts and rewards.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">CB</div>
                            <h4>Curated benefits</h4>
                            <p>
                                Offer employees a range of curated perks and rewards all in one place.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Business Benefits -->
                <div class="section-block">
                    <h3 class="subheading">Business benefits</h3>
                    <div class="card-grid business-grid">
                        <div class="info-card">
                            <div class="card-icon">CB</div>
                            <h4>Corporate banking</h4>
                            <p>
                                Get full control of your business accounts, payments, and transactions
                                from a unified dashboard.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">VA</div>
                            <h4>Virtual Debit Cards &amp; Accounts</h4>
                            <p>
                                Simplify operations with virtual debit cards and dedicated
                                corporate accounts for your business.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">PR</div>
                            <h4>Payroll &amp; Payments</h4>
                            <p>
                                Automate payroll, payments, and reconciliation to save time
                                and minimise errors.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">FX</div>
                            <h4>Foreign Exchange (FX)</h4>
                            <p>
                                Conduct seamless multi-currency transactions with competitive
                                exchange rates.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">AR</div>
                            <h4>Automated Reconciliation</h4>
                            <p>
                                Gain full cash flow visibility with smart reconciliation tools
                                integrated into your operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Corporate Processes -->
                <div class="section-block">
                    <h3 class="subheading">Corporate processes</h3>
                    <div class="card-grid business-grid">
                        <div class="info-card">
                            <div class="card-icon">CB</div>
                            <h4>Corporate booking</h4>
                            <p>
                                Manage ride and trip bookings from a single portal with no manual claims.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">RC</div>
                            <h4>Rental collection</h4>
                            <p>
                                Track rentals, invoices, and payment status to keep cash flow predictable.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">PY</div>
                            <h4>Payroll</h4>
                            <p>
                                Run payroll with approvals, automated payouts, and better cost visibility.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">CMS</div>
                            <h4>CMS</h4>
                            <p>
                                Centralise rentals, payroll, and balances into a single control centre.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="card-icon">TM</div>
                            <h4>TOMs</h4>
                            <p>
                                Standardise and streamline your Target Operating Models with NovaGO.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact / Demo -->
        <section id="contact" class="section section-muted">
            <div class="section-inner narrow">
                <h2 class="section-title">Interested? Demo with Us Now</h2>
                <p class="section-text">
                    Ready to experience seamless SME banking and rewards integration?
                    Fill in your details below, and our team will reach out to schedule
                    a personalized demo.
                </p>

                <form class="contact-form" @submit.prevent="fakeSubmit">
                    <div class="form-row">
                        <div class="field">
                            <label for="name">Full name</label>
                            <input id="name" type="text" placeholder="Jane Tan" />
                        </div>
                        <div class="field">
                            <label for="company">Company</label>
                            <input id="company" type="text" placeholder="Nova Logistics Pte Ltd" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="field">
                            <label for="email">Work email</label>
                            <input id="email" type="email" placeholder="you@company.com" />
                        </div>
                        <div class="field">
                            <label for="size">Company size</label>
                            <select id="size">
                                <option value="">Select</option>
                                <option>1–10 employees</option>
                                <option>11–50 employees</option>
                                <option>51–200 employees</option>
                                <option>200+ employees</option>
                            </select>
                        </div>
                    </div>

                    <div class="field">
                        <label for="message">What would you like to explore?</label>
                        <textarea id="message" rows="4"
                            placeholder="e.g. Payroll for drivers, rental collection for car fleet, expense cards for staff..."></textarea>
                    </div>

                    <button type="submit" class="btn-primary form-submit">
                        Submit interest
                    </button>
                </form>
            </div>
        </section>

        <!-- Footer -->
        <footer class="site-footer">
            <div class="footer-inner">
                <span>© {{ new Date().getFullYear() }} NovaGO. All rights reserved.</span>
                <div class="footer-links">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                </div>
            </div>
        </footer>

        <!-- ✅ Floating WhatsApp button -->
        <a href="https://wa.me/6591234567" class="whatsapp-float" target="_blank" rel="noopener">
            <img :src="whatsappIcon" alt="Chat with us on WhatsApp" class="whatsapp-icon-img" />
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import whatsappIcon from '../assets/whatsapp_icon.png'

const router = useRouter()

const activeMenu = ref(null)
const isMobileMenuOpen = ref(false)

const openMenuDesktop = (name) => {
    // Only use hover behaviour on larger screens
    if (window.innerWidth >= 960) {
        activeMenu.value = name
    }
}

const closeMenuDesktop = () => {
    if (window.innerWidth >= 960) {
        activeMenu.value = null
    }
}

const toggleDropdown = (name) => {
    // Works for both desktop (click) and mobile (accordion-style)
    activeMenu.value = activeMenu.value === name ? null : name
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    if (!isMobileMenuOpen.value) {
        activeMenu.value = null
    }
}

const resetNav = () => {
    activeMenu.value = null
    isMobileMenuOpen.value = false
}

const closeAllNav = () => {
    activeMenu.value = null
    isMobileMenuOpen.value = false
}

const showcaseSlides = [
    {
        tag: 'Payroll',
        title: 'Goodbye to multiple platforms. Hello to one unified, seamless platform.',
        text: 'Run salaries, set approval flows, view total payroll costs, and generate payslips.',
        points: [
            'Bulk upload salary files',
            'Role-based approvals',
            'Holistic financial visibility',
            'Automatic payslip generation'
        ]
    },
    {
        tag: 'Rental Collection',
        title: 'Get rent paid on time, every time.',
        text: 'Track every vehicle, invoice, and payment status from a single view.',
        points: [
            'Overdue rental alerts',
            'Automated reminders to drivers',
            'Live paid/unpaid status',
            'Generate statement of accounts'
        ]
    },
    {
        tag: 'Corporate booking',
        title: 'Frictionless ride bookings',
        text: 'Book ahead and manage every business trip from your own portal—using your corporate card with no claims required.',
        points: [
            'In-portal booking and payment',
            'Seamless approval flow',
            'Centralized booking records'
        ]
    },
    {
        tag: 'Corporate banking',
        title: 'For your business and the people behind it.',
        text: 'Get full control of your corporate accounts, payments, and transactions.',
        points: [
            'Unified dashboard',
            'Multi-account management',
            'Corporate card issuance',
            'Instant payment tracking'
        ]
    }
]


const currentSlide = ref(0)

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % showcaseSlides.length
}
const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + showcaseSlides.length) % showcaseSlides.length
}

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const goToLogin = () => {
    closeAllNav()
    router.push('/login')
}

const handleLoginClick = () => {
    goToLogin()
}

const fakeSubmit = () => {
    alert('Demo request submitted. (Placeholder action)')
}
</script>

<style scoped>
.landing {
    min-height: 100vh;
    width: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #0f172a;
    background: #f3f4fd;
}

/* Top nav */
.top-nav {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #e5e7eb;
}

.nav-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0.9rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
}

.brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
}

.brand-logo {
    height: 56px;
    width: auto;
    display: block;
}

.brand:hover {
    text-decoration: none;
}

/* Mobile hamburger */
.nav-toggle {
    display: none;
    margin-left: auto;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0.25rem;
}

.nav-toggle-bar {
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: #4b5563;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav-toggle-bar+.nav-toggle-bar {
    margin-top: 4px;
}

.nav-toggle-bar.open:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.nav-toggle-bar.open:nth-child(2) {
    opacity: 0;
}

.nav-toggle-bar.open:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}

.nav-links {
    margin-left: 2rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
}

.nav-links--open {
    /* used only on mobile via media query */
}

.nav-link.active {
    color: #1d4ed8;
}

.nav-link.active::after {
    width: 100%;
}

.nav-right-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.nav-right-actions--inline {
    display: none;
}

.nav-right-actions--desktop {
    display: flex;
}

.nav-link {
    border: none;
    background: none;
    padding: 0;
    font-size: 0.88rem;
    color: #4b5563;
    cursor: pointer;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #2563eb, #38bdf8);
    border-radius: 999px;
    transition: width 0.15s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.login-link {
    font-size: 0.86rem;
}

.nav-cta {
    padding: 0.55rem 1.1rem;
    border-radius: 999px;
    border: 1px solid #2563eb;
    background: #2563eb;
    color: #ffffff;
    font-size: 0.82rem;
    cursor: pointer;
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.3);
}

/* Mega menu */
.nav-item {
    position: static;
}

.mega-wrapper {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    width: 860px;
    max-width: 90vw;
    z-index: 30;
}

.mega {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 1.5rem;
    padding: 1.4rem 1.6rem;
    background: #ffffff;
    border-radius: 0.9rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
}

/* variants */
.mega--narrow {
    grid-template-columns: 1fr;
}

.mega--small {
    grid-template-columns: 1fr;
}

.mega-left {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.2rem;
}

.mega-left--3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.mega-left--2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.mega-column {
    font-size: 0.84rem;
}

.mega-heading {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9ca3af;
    margin-bottom: 0.4rem;
}

.mega-link {
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    background: none;
    padding: 0.45rem 0.4rem;
    border-radius: 0.6rem;
    cursor: pointer;
    color: #111827;
    font-size: 0.86rem;
    text-decoration: none;
}

.mega-link span {
    display: block;
    font-size: 0.76rem;
    color: #6b7280;
}

.mega-link:hover {
    background: #f3f4ff;
}

.mega-right {
    display: flex;
    align-items: stretch;
}

.mega-feature {
    padding: 1rem 1.1rem 1.1rem;
    border-radius: 0.9rem;
    background: #f3f4ff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.mega-feature-title {
    font-size: 0.88rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
}

.mega-feature-text {
    font-size: 0.8rem;
    color: #4b5563;
}

/* Hero */
.hero {
    padding: 4.2rem 1.25rem 4rem;
    background: radial-gradient(circle at top left, #e0ecff, #f9fafb 55%);
}

.hero-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: 2.6rem;
    align-items: center;
}

.hero-left {
    max-width: 540px;
}

.hero-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.85rem;
    border-radius: 999px;
    border: 1px solid #c7d2fe;
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #4f46e5;
    background: #eef2ff;
    margin-bottom: 1rem;
}

.hero-title {
    margin-bottom: 0.3rem;
}

.hero-logo {
    height: 95px;
    width: auto;
    display: block;
}

.hero-tagline {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
    color: #111827;
}

.hero-subtitle {
    font-size: 1rem;
    color: #4b5563;
    margin-bottom: 1.8rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

/* Buttons */
.btn-primary,
.btn-secondary {
    border-radius: 999px;
    padding: 0.7rem 1.6rem;
    font-size: 0.92rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease,
        color 0.12s ease;
}

.btn-primary {
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    border-color: #2563eb;
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.4);
}

.btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 36px rgba(37, 99, 235, 0.55);
}

.btn-secondary {
    background: #ffffff;
    color: #2563eb;
    border-color: #2563eb;
}

.btn-secondary:hover {
    background: #e5edff;
}

/* Hero right abstract art */
.hero-right {
    display: flex;
    justify-content: center;
}

.hero-art {
    position: relative;
    width: 100%;
    max-width: 380px;
    height: 260px;
}

.hero-art-card {
    position: absolute;
    border-radius: 1.1rem;
    background: #ffffff;
    border: 1px solid #dbe3ff;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.4);
    padding: 1rem 1.1rem;
}

.hero-art-card--one {
    top: 0;
    left: 0;
    right: 70px;
}

.hero-art-card--two {
    bottom: 0;
    right: 0;
    left: 120px;
    padding: 0.9rem 1rem;
}

.hero-art-header {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 0.6rem;
}

.hero-art-dot {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #e5e7eb;
}

.hero-art-bars {
    margin-bottom: 0.5rem;
}

.hero-art-bar {
    height: 8px;
    border-radius: 999px;
    background: linear-gradient(90deg, #2563eb, #38bdf8);
    margin-bottom: 0.3rem;
}

.hero-art-bar--1 {
    width: 70%;
}

.hero-art-bar--2 {
    width: 50%;
}

.hero-art-bar--3 {
    width: 35%;
}

.hero-art-badge {
    display: inline-flex;
    margin-top: 0.2rem;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    background: #e0ebff;
    font-size: 0.76rem;
    color: #1d4ed8;
}

.hero-art-pill {
    width: 46px;
    height: 46px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    margin-bottom: 0.5rem;
}

.hero-art-meta {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    color: #4b5563;
}

.hero-art-meta-value {
    font-weight: 600;
    color: #1d4ed8;
}

/* Glows */
.hero-art-glow {
    position: absolute;
    border-radius: 999px;
    filter: blur(24px);
    opacity: 0.8;
}

.hero-art-glow--a {
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.55), transparent 60%);
    top: -40px;
    right: -30px;
}

.hero-art-glow--b {
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(147, 197, 253, 0.6), transparent 60%);
    bottom: -30px;
    left: -20px;
}

/* Sections */
.section {
    padding: 3.8rem 1.25rem;
}

.section-muted {
    background: #f9fafb;
}

.section-inner {
    max-width: 1100px;
    margin: 0 auto;
}

.section-inner.narrow {
    max-width: 720px;
}

.section-title {
    text-align: center;
    font-size: 1.7rem;
    color: #1d4ed8;
    margin-bottom: 1.4rem;
}

.section-text {
    font-size: 1rem;
    color: #4b5563;
    text-align: center;
}

/* Showcase slider */
.showcase {
    margin-top: 2.2rem;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 0.8rem;
}

.showcase-content {
    position: relative;
    min-height: 210px;
}

.showcase-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateX(8px);
    transition: opacity 0.25s ease, transform 0.25s ease;
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.4rem 1.5rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 14px 30px rgba(148, 163, 184, 0.35);
}

.showcase-slide.active {
    opacity: 1;
    transform: translateX(0);
}

.showcase-tag {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6366f1;
    margin-bottom: 0.4rem;
}

.showcase-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #111827;
}

.showcase-text {
    font-size: 0.9rem;
    color: #4b5563;
    margin-bottom: 0.7rem;
}

.showcase-list {
    font-size: 0.86rem;
    color: #4b5563;
    padding-left: 1.1rem;
}

.showcase-list li {
    margin-bottom: 0.2rem;
}

.showcase-arrow {
    border-radius: 999px;
    width: 32px;
    height: 32px;
    border: 1px solid #d1d5db;
    background: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: #4b5563;
}

.showcase-arrow:hover {
    background: #eef2ff;
    color: #1d4ed8;
}

.showcase-dots {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 0.4rem;
}

.showcase-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    border: none;
    background: #d1d5db;
    cursor: pointer;
}

.showcase-dot.active {
    background: #2563eb;
}

/* Offer blocks */
.section-block {
    margin-top: 2rem;
}

.subheading {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #111827;
}

/* Cards */
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
}

.business-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card-grid.two-col {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.info-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.4rem 1.4rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 14px 30px rgba(148, 163, 184, 0.35);
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    min-height: 160px;
}

.info-card h4 {
    font-size: 0.98rem;
    margin-bottom: 0.5rem;
    color: #111827;
}

.info-card p {
    font-size: 0.86rem;
    color: #4b5563;
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 38px rgba(148, 163, 184, 0.5);
    border-color: #c7d2fe;
}

/* Card icon – all white text */
.card-icon {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    color: #ffffff;
    margin-bottom: 0.9rem;
}

/* Contact form */
.contact-form {
    margin-top: 2.1rem;
    background: #ffffff;
    border-radius: 1.1rem;
    padding: 1.8rem 1.8rem 2rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.4);
}

.form-row {
    display: flex;
    gap: 1.2rem;
    margin-bottom: 1.1rem;
}

.field {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.field label {
    font-size: 0.82rem;
    color: #4b5563;
}

.field input,
.field select,
.field textarea {
    border-radius: 0.7rem;
    border: 1px solid #d1d5db;
    padding: 0.65rem 0.75rem;
    font-size: 0.9rem;
    outline: none;
    background: #f9fafb;
    color: #111827;
}

.field input::placeholder,
.field textarea::placeholder {
    color: #9ca3af;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.35);
    background: #ffffff;
}

.form-submit {
    margin-top: 1.1rem;
}

/* Footer */
.site-footer {
    border-top: 1px solid #e5e7eb;
    background: #ffffff;
    padding: 1rem 1.25rem;
}

.footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    font-size: 0.8rem;
    color: #6b7280;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-links {
    display: flex;
    gap: 1rem;
}

.footer-links a {
    color: #6b7280;
    text-decoration: none;
}

.footer-links a:hover {
    color: #1d4ed8;
}

/* ✅ Floating WhatsApp button styles */
.whatsapp-float {
    position: fixed;
    right: 24px;
    bottom: 24px;
    width: 54px;
    height: 54px;
    border-radius: 999px;
    background: #25d366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    z-index: 50;
    text-decoration: none;
}

.whatsapp-icon {
    font-size: 26px;
    color: #ffffff;
}

.whatsapp-icon-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

/* Partnerships mega – full card look */
.mega--partnership {
    grid-template-columns: 1fr;
    justify-content: center;

    /* make the mega container “invisible” */
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
}

.partnership-card {
    width: 100%;
    margin: 0 auto;
    padding: 1.6rem 1.9rem 1.8rem;
    border-radius: 1rem;
    background: #ffffff;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.15);
}

.partnership-title {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #111827;
}

.partnership-text {
    font-size: 0.9rem;
    color: #4b5563;
    line-height: 1.55;
    margin-bottom: 1.2rem;
}

.partnership-btn {
    align-self: flex-start;
    padding-inline: 1.8rem;
}

/* Responsive */
@media (max-width: 1024px) {
    .card-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .business-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 960px) {
    .nav-inner {
        padding: 0.8rem 1rem;
    }

    .nav-toggle {
        display: block;
    }

    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin-left: 0;
        padding: 0.75rem 1rem 1rem;
        background: #ffffff;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transform: translateY(-4px);
        transition: max-height 0.22s ease, opacity 0.18s ease, transform 0.18s ease;
    }

    .nav-links--open {
        max-height: 75vh;
        overflow-y: auto;
        opacity: 1;
        transform: translateY(0);
    }

    .nav-item {
        width: 100%;
    }

    .nav-link {
        width: 100%;
        text-align: left;
        padding: 0.4rem 0;
    }

    .nav-link::after {
        display: none;
    }

    /* Mega menus become inline under each nav item */
    .mega-wrapper {
        position: static;
        transform: none;
        width: 100%;
        margin-top: 0.25rem;
    }

    .mega {
        box-shadow: none;
        border-radius: 0.6rem;
        padding: 0.9rem 0.9rem 0.95rem;
    }

    .mega-left {
        grid-template-columns: 1fr;
    }

    .nav-right-actions--desktop {
        display: none;
    }

    .nav-right-actions--inline {
        display: flex;
        margin-left: 0;
        margin-top: 0.4rem;
        justify-content: flex-start;
    }

    .hero {
        padding-top: 3.4rem;
    }

    .hero-inner {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .hero-right {
        order: -1;
        margin-bottom: 0.5rem;
    }

    .card-grid,
    .business-grid,
    .card-grid.two-col {
        grid-template-columns: 1fr;
    }

    .form-row {
        flex-direction: column;
    }

    .showcase {
        grid-template-columns: 1fr;
    }

    .showcase-arrow {
        display: none;
    }

    .showcase-content {
        min-height: 220px;
    }

    .whatsapp-float {
        right: 16px;
        bottom: 16px;
        width: 48px;
        height: 48px;
    }

    .whatsapp-icon {
        font-size: 22px;
    }

    .footer-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}

@media (max-width: 480px) {
    .hero-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .section {
        padding-inline: 1rem;
    }
}
</style>

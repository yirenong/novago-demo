<template>
    <div class="landing">
        <!-- Top navbar (same structure & behaviour as Landing page) -->
        <header class="top-nav" @mouseleave="closeMenuDesktop">
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
                    <!-- 1st NAV: PRODUCTS -->
                    <div class="nav-item has-mega" @mouseenter="openMenuDesktop('products')">
                        <button class="nav-link" :class="{ active: activeMenu === 'products' }" type="button"
                            @click="toggleDropdown('products')">
                            Products
                        </button>

                        <div v-if="activeMenu === 'products'" class="mega-wrapper">
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

                    <!-- 2nd NAV: SOLUTIONS -->
                    <div class="nav-item has-mega" @mouseenter="openMenuDesktop('solutions')">
                        <button class="nav-link" :class="{ active: activeMenu === 'solutions' }" type="button"
                            @click="toggleDropdown('solutions')">
                            Solutions
                        </button>

                        <div v-if="activeMenu === 'solutions'" class="mega-wrapper">
                            <div class="mega mega--narrow">
                                <div class="mega-left mega-left--2">
                                    <!-- By use case -->
                                    <div class="mega-column">
                                        <p class="mega-heading">By use case</p>

                                        <router-link class="mega-link" to="/dashboard" @click="closeAllNav">
                                            Corporate booking &amp; jobs
                                            <span>Manage bookings, jobs and driver payouts.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/rental-collection-summary" @click="closeAllNav">
                                            Rental collection
                                            <span>Track invoices and incoming rental payments.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/payroll" @click="closeAllNav">
                                            Payroll
                                            <span>Automate monthly salary runs and approvals.</span>
                                        </router-link>

                                        <button class="mega-link" type="button"
                                            @click="() => { scrollToSection('overview'); closeAllNav(); }">
                                            CMS
                                            <span>Centralise rentals, payroll and account balances in one view.</span>
                                        </button>
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

                    <!-- 3rd NAV: BENEFITS -->
                    <div class="nav-item has-mega" @mouseenter="openMenuDesktop('benefits')">
                        <button class="nav-link" :class="{ active: activeMenu === 'benefits' }" type="button"
                            @click="toggleDropdown('benefits')">
                            Benefits
                        </button>

                        <div v-if="activeMenu === 'benefits'" class="mega-wrapper">
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

                        <div v-if="activeMenu === 'partnerships'" class="mega-wrapper">
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

                        <div v-if="activeMenu === 'company'" class="mega-wrapper">
                            <div class="mega mega--small">
                                <div class="mega-left mega-left--2">
                                    <div class="mega-column">
                                        <p class="mega-heading">About NovaGO</p>

                                        <button class="mega-link" type="button"
                                            @click="() => { scrollToSection('overview'); closeAllNav(); }">
                                            Why NovaGO?
                                            <span>See how we simplify rental and financial operations.</span>
                                        </button>

                                        <button class="mega-link" type="button"
                                            @click="() => { scrollToSection('features'); closeAllNav(); }">
                                            Features
                                            <span>Explore how Rental Collection supports your team.</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile inline login -->
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

        <!-- HERO -->
        <section class="hero">
            <div class="hero-inner">
                <div class="hero-left">
                    <p class="hero-pill">Rental • Fleets • SMEs</p>

                    <h1 class="hero-title">Rental Collection, Simplified.</h1>
                    <p class="hero-tagline">
                        Turn monthly rental into predictable cash flow.
                    </p>
                    <p class="hero-subtitle">
                        NovaGO helps you track every contract, invoice, and payment in one
                        place – so operations and finance always see the same numbers.
                    </p>

                    <div class="hero-actions">
                        <button class="btn-primary" @click="scrollToSection('contact')">
                            Talk to us
                        </button>
                    </div>

                    <div class="hero-chips">
                        <button class="hero-chip" type="button" @click="scrollToSection('overview')">
                            <span>Overview</span>
                        </button>
                        <button class="hero-chip" type="button" @click="scrollToSection('how-it-works')">
                            <span>How it works</span>
                        </button>
                        <button class="hero-chip" type="button" @click="scrollToSection('features')">
                            <span>Features</span>
                        </button>
                    </div>
                </div>

                <!-- Right: abstract art -->
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
                            <div class="hero-art-badge">92% rent collected this month</div>
                        </div>

                        <div class="hero-art-card hero-art-card--two">
                            <div class="hero-art-pill"></div>
                            <div class="hero-art-meta">
                                <span>Overdue contracts</span>
                                <span class="hero-art-meta-value">6 flagged for follow-up</span>
                            </div>
                        </div>

                        <div class="hero-art-glow hero-art-glow--a"></div>
                        <div class="hero-art-glow hero-art-glow--b"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- OVERVIEW -->
        <section id="overview" class="section section-muted">
            <div class="section-inner narrow">
                <h2 class="section-title">Overview</h2>
                <p class="section-text">
                    NovaGO’s Rental Collection module gives you one place to manage contracts,
                    invoices and rental payments. Instead of checking bank portals, WhatsApp
                    chats and spreadsheets separately, your team sees a single, updated view of
                    who has paid, who is overdue, and what is coming up next.
                </p>

                <div class="card-grid overview-grid">
                    <div class="info-card">
                        <h4>Single source of truth</h4>
                        <p>
                            Every contract, vehicle or unit and rental schedule lives in one system,
                            so operations and finance work off the same data.
                        </p>
                    </div>
                    <div class="info-card">
                        <h4>Clear status for every contract</h4>
                        <p>
                            Each due rental is tracked as paid, partially paid or overdue, making it
                            easy to see where follow-up is needed.
                        </p>
                    </div>
                    <div class="info-card">
                        <h4>Built for rental-heavy businesses</h4>
                        <p>
                            Designed for fleets, leasing companies and SMEs that rely on recurring
                            rental income, not just one-off invoices.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- HOW IT WORKS (with visuals) -->
        <section id="how-it-works" class="section">
            <div class="section-inner">
                <h2 class="section-title">How it works</h2>
                <p class="section-text">
                    From onboarding a driver to closing the month, NovaGO keeps your rental
                    lifecycle structured and traceable.
                </p>

                <div class="how-grid">
                    <!-- Steps -->
                    <div class="how-steps">
                        <div class="how-step">
                            <div class="how-step-number">1</div>
                            <h4>Set up contracts once</h4>
                            <p>
                                Create profiles, link vehicles or units, set rental amount and frequency.
                                NovaGO generates the schedule for you.
                            </p>
                        </div>
                        <div class="how-step">
                            <div class="how-step-number">2</div>
                            <h4>Track invoices &amp; payments</h4>
                            <p>
                                Each due date becomes an invoice with live status – paid, partially paid or
                                overdue – so your team knows who is up to date.
                            </p>
                        </div>
                        <div class="how-step">
                            <div class="how-step-number">3</div>
                            <h4>Act on overdue items</h4>
                            <p>
                                Log reminders and follow-up actions in one view, so chasing payments is
                                structured instead of ad-hoc.
                            </p>
                        </div>
                    </div>

                    <!-- Visual mock dashboard -->
                    <div class="how-visual">
                        <div class="how-card how-card--top">
                            <div class="how-card-header">
                                <span class="how-card-title">Rental dashboard</span>
                                <span class="how-card-pill">This month</span>
                            </div>
                            <div class="how-card-metrics">
                                <div class="how-metric">
                                    <span class="how-metric-label">Expected</span>
                                    <span class="how-metric-value">$120,500</span>
                                </div>
                                <div class="how-metric">
                                    <span class="how-metric-label">Collected</span>
                                    <span class="how-metric-value how-metric-value--ok">$110,060</span>
                                </div>
                                <div class="how-metric">
                                    <span class="how-metric-label">Overdue</span>
                                    <span class="how-metric-value how-metric-value--warn">$10,440</span>
                                </div>
                            </div>
                            <div class="how-card-bars">
                                <div class="how-bar-row">
                                    <span class="how-bar-label">On-time</span>
                                    <div class="how-bar">
                                        <div class="how-bar-fill how-bar-fill--ok" style="width: 78%;"></div>
                                    </div>
                                    <span class="how-bar-value">78%</span>
                                </div>
                                <div class="how-bar-row">
                                    <span class="how-bar-label">Overdue</span>
                                    <div class="how-bar">
                                        <div class="how-bar-fill how-bar-fill--warn" style="width: 22%;"></div>
                                    </div>
                                    <span class="how-bar-value">22%</span>
                                </div>
                            </div>
                        </div>

                        <div class="how-card how-card--bottom">
                            <p class="how-card-subtitle">Overdue contracts</p>
                            <div class="how-table-row">
                                <span class="how-table-name">Driver 102 - Car #SFP1234G</span>
                                <span class="how-table-tag how-table-tag--overdue">7 days overdue</span>
                            </div>
                            <div class="how-table-row">
                                <span class="how-table-name">Driver 214 - Car #SMD8891K</span>
                                <span class="how-table-tag how-table-tag--overdue">14 days overdue</span>
                            </div>
                            <div class="how-table-row">
                                <span class="how-table-name">Driver 341 - Car #SLX4412P</span>
                                <span class="how-table-tag how-table-tag--due">Due this week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FEATURES -->
        <section id="features" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title">Features</h2>
                <p class="section-text">
                    Key capabilities that make rental collection clearer and easier to manage.
                </p>

                <div class="card-grid features-grid">
                    <div class="info-card">
                        <h4>Real-time visibility</h4>
                        <p>
                            See, at a glance, how much rental is expected, collected and overdue.
                            Filter by driver, vehicle, or contract type so everyone works off the
                            same live numbers.
                        </p>
                    </div>

                    <div class="info-card">
                        <h4>Structured follow-up</h4>
                        <p>
                            Log calls, messages and reminders against each contract. Your team can
                            see what has already been done and what next step is needed, instead of
                            guessing from chats.
                        </p>
                    </div>

                    <div class="info-card">
                        <h4>Finance-ready data</h4>
                        <p>
                            Export clean rental data for reconciliation, month-end closing and
                            management reports. No more rebuilding spreadsheets from scratch every
                            cycle.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CONTACT -->
        <section id="contact" class="section section-muted">
            <div class="section-inner narrow">
                <h2 class="section-title">Interested in the Rental Collection module?</h2>
                <p class="section-text">
                    Share a bit about your fleet or rental business, and we’ll walk you
                    through how NovaGO can plug into your existing operations.
                </p>

                <form class="contact-form" @submit.prevent="fakeSubmit">
                    <div class="form-row">
                        <div class="field">
                            <label for="name">Full name</label>
                            <input id="name" type="text" placeholder="Jane Tan" />
                        </div>
                        <div class="field">
                            <label for="company">Company</label>
                            <input id="company" type="text" placeholder="Nova Leasing Pte Ltd" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="field">
                            <label for="email">Work email</label>
                            <input id="email" type="email" placeholder="you@company.com" />
                        </div>
                        <div class="field">
                            <label for="size">Fleet / units size</label>
                            <select id="size">
                                <option value="">Select</option>
                                <option>1–20</option>
                                <option>21–100</option>
                                <option>101–300</option>
                                <option>300+</option>
                            </select>
                        </div>
                    </div>

                    <div class="field">
                        <label for="message">Current process</label>
                        <textarea id="message" rows="4"
                            placeholder="e.g. Excel tracking, WhatsApp reminders, manual reconciliation from bank statements..."></textarea>
                    </div>

                    <button type="submit" class="btn-primary form-submit">
                        Submit &amp; request demo
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
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeMenu = ref(null)
const isMobileMenuOpen = ref(false)

const openMenuDesktop = (name) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 960) {
        activeMenu.value = name
    }
}
const closeMenuDesktop = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 960) {
        activeMenu.value = null
    }
}

const toggleDropdown = (name) => {
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

/* Partnerships mega */
.mega--partnership {
    grid-template-columns: 1fr;
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
    font-size: 2.8rem;
    font-weight: 700;
    color: #1d4ed8;
    margin-bottom: 0.3rem;
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
    transition:
        transform 0.12s ease,
        box-shadow 0.12s ease,
        background 0.12s ease,
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

/* Hero chips */
.hero-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
}

.hero-chip {
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    border: 1px solid #d1d5db;
    background: #ffffff;
    font-size: 0.8rem;
    color: #4b5563;
    cursor: pointer;
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

/* Cards */
.card-grid {
    display: grid;
    gap: 1.2rem;
}

.overview-grid {
    margin-top: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.info-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.4rem 1.4rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 14px 30px rgba(148, 163, 184, 0.35);
    transition:
        transform 0.15s ease,
        box-shadow 0.15s ease,
        border-color 0.15s ease;
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

/* HOW IT WORKS layout */
.how-grid {
    margin-top: 2.2rem;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: 2rem;
    align-items: flex-start;
}

.how-steps {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
}

.how-step {
    background: #ffffff;
    border-radius: 0.9rem;
    padding: 1rem 1.1rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 10px 22px rgba(148, 163, 184, 0.25);
}

.how-step-number {
    width: 26px;
    height: 26px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    font-weight: 600;
    color: #ffffff;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    margin-bottom: 0.5rem;
}

.how-step h4 {
    font-size: 0.98rem;
    margin-bottom: 0.35rem;
    color: #111827;
}

.how-step p {
    font-size: 0.86rem;
    color: #4b5563;
}

/* Visual mockups */
.how-visual {
    position: relative;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
}

.how-card {
    border-radius: 1rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 16px 32px rgba(148, 163, 184, 0.45);
    padding: 1rem 1.1rem;
}

.how-card--top {
    margin-bottom: 1rem;
}

.how-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.7rem;
}

.how-card-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #111827;
}

.how-card-pill {
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: #eef2ff;
    font-size: 0.72rem;
    color: #4f46e5;
}

.how-card-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.7rem;
    margin-bottom: 0.8rem;
}

.how-metric-label {
    display: block;
    font-size: 0.7rem;
    color: #6b7280;
}

.how-metric-value {
    display: block;
    font-size: 0.88rem;
    font-weight: 600;
    color: #111827;
}

.how-metric-value--ok {
    color: #15803d;
}

.how-metric-value--warn {
    color: #b45309;
}

.how-card-bars {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.how-bar-row {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.4rem;
    align-items: center;
}

.how-bar-label {
    font-size: 0.76rem;
    color: #4b5563;
}

.how-bar {
    height: 6px;
    border-radius: 999px;
    background: #e5e7eb;
    overflow: hidden;
}

.how-bar-fill {
    height: 100%;
    border-radius: 999px;
}

.how-bar-fill--ok {
    background: linear-gradient(90deg, #22c55e, #16a34a);
}

.how-bar-fill--warn {
    background: linear-gradient(90deg, #f97316, #ea580c);
}

.how-bar-value {
    font-size: 0.76rem;
    color: #4b5563;
}

/* Overdue list card */
.how-card--bottom {
    margin-top: 0.4rem;
}

.how-card-subtitle {
    font-size: 0.84rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
}

.how-table-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    padding: 0.35rem 0;
}

.how-table-name {
    color: #374151;
}

.how-table-tag {
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
    font-size: 0.7rem;
}

.how-table-tag--overdue {
    background: #fef2f2;
    color: #b91c1c;
}

.how-table-tag--due {
    background: #eff6ff;
    color: #1d4ed8;
}

/* Features */
.features-grid {
    margin-top: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
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

/* Responsive */
@media (max-width: 1024px) {

    .overview-grid,
    .features-grid {
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
        transition:
            max-height 0.22s ease,
            opacity 0.18s ease,
            transform 0.18s ease;
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
        margin-bottom: 1.5rem;
    }

    .overview-grid,
    .features-grid {
        grid-template-columns: 1fr;
    }

    .how-grid {
        grid-template-columns: 1fr;
    }

    .how-visual {
        max-width: 100%;
    }

    .form-row {
        flex-direction: column;
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

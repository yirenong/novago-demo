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

                                    <!-- For SMEs -->
                                    <div class="mega-column">
                                        <p class="mega-heading">For SMEs</p>

                                        <router-link class="mega-link" to="/dashboard" @click="closeAllNav">
                                            Corporate booking
                                            <span>Seamlessly book corporate rides from your portal.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/expense-management" @click="closeAllNav">
                                            Expense management
                                            <span>Track and manage business expenses with ease.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/payroll" @click="closeAllNav">
                                            Payroll
                                            <span>Simplified salary-related payments in one place.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/" @click="closeAllNav">
                                            CMS
                                            <span>Customize your very own web design with our CMS.</span>
                                        </router-link>
                                    </div>

                                    <!-- By use cases -->
                                    <div class="mega-column">
                                        <p class="mega-heading">By use cases</p>

                                        <router-link class="mega-link" to="/toms" @click="closeAllNav">
                                            Transport Operator Management System (TOMs)
                                            <span>Simplify the management of vehicles, drivers and jobs — moving beyond
                                                manual processes.</span>
                                        </router-link>

                                        <router-link class="mega-link" to="/rental-collection-summary"
                                            @click="closeAllNav">
                                            Rental collection
                                            <span>Track rental payments in one view. Invoice generation.</span>
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
                                        <router-link class="mega-link" to="/benefits/shell" @click="closeAllNav">
                                            Curated Benefits
                                            <span>Customize benefits specific to your company.</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PARTNERSHIPS -->
                    <div class="nav-item has-mega nav-item--partnerships" @mouseenter="openMenuDesktop('partnerships')">
                        <button class="nav-link" :class="{ active: activeMenu === 'partnerships' }" type="button"
                            @click="toggleDropdown('partnerships')">
                            Partnerships
                        </button>

                        <div v-if="activeMenu === 'partnerships'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                            <div class="mega mega--small mega--partnerships">
                                <div class="mega-left mega-left--partnerships">
                                    <div class="mega-column">
                                        <p class="mega-heading">Partnership programme</p>

                                        <h3 class="partnership-title">Work with NovaGO</h3>

                                        <p class="partnership-text">
                                            Bundle NovaGO with your product or offer Shell fuel benefits to your
                                            users. <br>Talk to our partnership department to explore co-created
                                            solutions.
                                        </p>

                                        <button class="btn-primary partnership-btn" type="button"
                                            @click="() => { scrollToSection('contact'); closeAllNav(); }">
                                            Talk to our partnership team
                                        </button>

                                        <!-- ✅ Current partners with scrolling logos -->
                                        <div class="partners-section">
                                            <p class="partners-label">Current partners</p>

                                            <div class="partners-marquee">
                                                <div class="partners-track">
                                                    <!-- First loop -->
                                                    <div class="partner-item" v-for="partner in partners"
                                                        :key="'a-' + partner.name">
                                                        <img v-if="partner.logo" :src="partner.logo"
                                                            :alt="partner.name + ' logo'" class="partner-logo" />
                                                        <span class="partner-name">{{ partner.name }}</span>
                                                    </div>

                                                    <!-- Duplicate loop for seamless scroll -->
                                                    <div class="partner-item" v-for="partner in partners"
                                                        :key="'b-' + partner.name">
                                                        <img v-if="partner.logo" :src="partner.logo"
                                                            :alt="partner.name + ' logo'" class="partner-logo" />
                                                        <span class="partner-name">{{ partner.name }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end partners-section -->
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

        <!-- What We Can Offer (TABBED) -->
        <section id="offer" class="section section-offer">
            <div class="section-inner">
                <h2 class="section-title">What We Can Offer</h2>
                <p class="section-text">
                    Support your people and your operations with one connected platform.
                </p>

                <!-- Tabs -->
                <div class="offer-tabs">
                    <button type="button" class="offer-tab"
                        :class="{ 'offer-tab--active': activeOfferTab === 'employee' }"
                        @click="activeOfferTab = 'employee'">
                        Employee benefits
                    </button>
                    <button type="button" class="offer-tab"
                        :class="{ 'offer-tab--active': activeOfferTab === 'business' }"
                        @click="activeOfferTab = 'business'">
                        Business benefits
                    </button>
                </div>

                <!-- Employee benefits panel -->
                <div v-if="activeOfferTab === 'employee'" class="offer-panel">
                    <h3 class="subheading subheading--center">
                        Employee benefits
                    </h3>
                    <p class="offer-panel-text">
                        Reward and retain your teams with fuel savings and curated perks.
                    </p>

                    <div class="card-grid card-grid--2">
                        <div class="info-card">
                            <div class="info-card-header">
                                <div class="card-icon" aria-hidden="true">
                                    <i class="fa-solid fa-gas-pump"></i>
                                </div>
                                <h4>Shell: Petrol discount</h4>
                            </div>
                            <p>
                                Unlock exclusive Shell fuel discounts and rewards for your drivers.
                            </p>
                        </div>
                        <div class="info-card">
                            <div class="info-card-header">
                                <div class="card-icon" aria-hidden="true">
                                    <i class="fa-solid fa-gift"></i>
                                </div>
                                <h4>Curated benefits</h4>
                            </div>
                            <p>
                                Provide employees with a variety of curated perks and rewards, conveniently in one
                                platform.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Business benefits panel -->
                <div v-else class="offer-panel">
                    <h3 class="subheading subheading--center">
                        Business benefits
                    </h3>
                    <p class="offer-panel-text">
                        Run banking, payments, and key corporate processes from one control centre.
                    </p>

                    <div class="business-layout">
                        <!-- Column 1: Corporate banking -->
                        <div class="business-column">
                            <p class="offer-group-title offer-group-title--left">Corporate banking</p>
                            <div class="card-grid card-grid--banking">
                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-building-columns"></i>
                                        </div>
                                        <h4>Global Multi Currency Account</h4>
                                    </div>
                                    <p>
                                        Streamline cross-border finance, helping your business move with agility and act
                                        locally anywhere.
                                    </p>
                                </div>

                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-credit-card"></i>
                                        </div>
                                        <h4>Global Card Issuance</h4>
                                    </div>
                                    <p>
                                        Transform your expense management and empower your teams with a flexible card
                                        issuance platform.
                                    </p>
                                </div>

                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-sack-dollar"></i>
                                        </div>
                                        <h4>Global Payouts</h4>
                                    </div>
                                    <p>
                                        Simplify your entire payout process with automated, accurate, and globally
                                        scalable
                                        payments.
                                    </p>
                                </div>

                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-globe"></i>
                                        </div>
                                        <h4>Foreign Exchange (FX)</h4>
                                    </div>
                                    <p>
                                        Enjoy seamless currency conversion with low fees, live rates, and multi-currency
                                        holding. Accept international payments with ease and simplify your global
                                        operations.
                                    </p>
                                </div>

                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-chart-line"></i>
                                        </div>
                                        <h4>Automated Reconciliation</h4>
                                    </div>
                                    <p>
                                        Achieve instant, accurate reconciliation with automated matching and live data
                                        syncing, streamlining your financial workflows end-to-end.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Column 2: Corporate processes -->
                        <div class="business-column">
                            <p class="offer-group-title offer-group-title--left">Corporate processes</p>
                            <div class="card-grid card-grid--processes">
                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-car-side"></i>
                                        </div>
                                        <h4>Corporate booking</h4>
                                    </div>
                                    <p>
                                        Seamlessly book corporate rides directly from your portal.
                                    </p>
                                </div>

                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-file-invoice-dollar"></i>
                                        </div>
                                        <h4>Rental collection</h4>
                                    </div>
                                    <p>
                                        Track all rental payments in one place and generate invoices with ease.
                                    </p>
                                </div>

                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-people-group"></i>
                                        </div>
                                        <h4>Payroll</h4>
                                    </div>
                                    <p>
                                        Run payroll with approvals, automated payouts, and better cost visibility.
                                    </p>
                                </div>

                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-table-columns"></i>
                                        </div>
                                        <h4>CMS</h4>
                                    </div>
                                    <p>
                                        Customize your very own web design with our CMS.
                                    </p>
                                </div>

                                <div class="info-card">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-gears"></i>
                                        </div>
                                        <h4>TOMs</h4>
                                    </div>
                                    <p>
                                        Track, assign, and oversee vehicles, drivers, and jobs seamlessly — reducing
                                        operational friction.
                                    </p>
                                </div>
                            </div>
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
import primeGroupLogo from '../assets/partners/prime-group.png'
import veepLogo from '../assets/partners/veep.png'
import gojekLogo from '../assets/partners/gojek.png'
import transtarLogo from '../assets/partners/transtar.png'
import shellLogo from '../assets/partners/shell.png'
import bestPetrolLogo from '../assets/partners/best-petrol.png'
import zoqqLogo from '../assets/partners/zoqq.png'

const router = useRouter()

const activeMenu = ref(null)
const isMobileMenuOpen = ref(false)
const activeOfferTab = ref('employee')

const openMenuDesktop = (name) => {
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

const partners = [
    { name: 'Prime Group', logo: primeGroupLogo },
    { name: 'Veep', logo: veepLogo },
    { name: 'Gojek', logo: gojekLogo },
    { name: 'Transtar', logo: transtarLogo },
    { name: 'Shell', logo: shellLogo },
    { name: 'Best Petrol', logo: bestPetrolLogo },
    { name: 'ZOQQ', logo: zoqqLogo }
]

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
    max-width: 1300px;
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

/* ========== Mega menu ========== */
.nav-item {
    position: relative;
}

/* default mega: align left with nav item */
.mega-wrapper {
    position: absolute;
    top: 100%;
    margin-top: 0.5rem;
    width: 860px;
    max-width: 90vw;
    z-index: 30;
    left: 0;
    right: auto;
    transform: none;
}

/* Partnerships (last mega item) – align panel to the right so it stays in view */
.nav-item.has-mega:last-of-type .mega-wrapper {
    left: auto;
    right: 0;
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

/* ✅ Partnerships: use full width, one column */
.mega-left--partnership {
    grid-template-columns: 1fr;
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

/* Hero */
.hero {
    padding: 4.2rem 1.25rem 4rem;
    background: radial-gradient(circle at top left, #e0ecff, #f9fafb 55%);
}

.hero-inner {
    max-width: 1300px;
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
    max-width: 1300px;
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

/* ===== What We Can Offer – tabs & panels ===== */

.section-offer {
    background: radial-gradient(circle at top, #eef2ff, #f9fafb 65%);
}

.offer-tabs {
    margin-top: 1.4rem;
    display: inline-flex;
    padding: 0.2rem;
    border-radius: 999px;
    background: #e5e7eb80;
    gap: 0.2rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.offer-tab {
    border: none;
    background: transparent;
    padding: 0.4rem 1.5rem;
    font-size: 0.86rem;
    border-radius: 999px;
    cursor: pointer;
    color: #4b5563;
    transition: background 0.16s ease, color 0.16s ease, box-shadow 0.16s ease;
    white-space: nowrap;
}

.offer-tab--active {
    background: #ffffff;
    color: #1d4ed8;
    box-shadow: 0 6px 14px rgba(148, 163, 184, 0.45);
}

.offer-panel {
    max-width: 1300px;
    margin: 2rem auto 0;
}

.offer-panel-text {
    text-align: center;
    font-size: 0.95rem;
    color: #4b5563;
    margin-bottom: 1.6rem;
}

.subheading {
    font-size: 1rem;
    margin-bottom: 0.75rem;
    color: #111827;
}

.subheading--center {
    text-align: center;
}

/* Business sections */
.business-section {
    margin-top: 2rem;
}

.business-layout {
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 2rem;
    align-items: flex-start;
    margin-top: 2rem;
}

.business-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Reuse existing style but left-align for columns */
.offer-group-title--left {
    text-align: left;
}

/* 2-column grids inside each column on desktop */
.card-grid--banking {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.4rem;
}

.card-grid--processes {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.4rem;
}

/* Responsiveness */
@media (max-width: 1024px) {
    .business-layout {
        grid-template-columns: 1fr;
    }

    .card-grid--3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

.offer-group-title {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #6b7280;
    margin-bottom: 0.9rem;
    text-align: center;
}

/* Cards & grid */
.card-grid {
    display: grid;
    gap: 1.4rem;
    max-width: 960px;
    margin: 0 auto;
}

.card-grid--2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card-grid--3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card-grid--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card-grid--5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
}

/* New cleaner card design */
.info-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.3rem 1.2rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 12px 30px rgba(148, 163, 184, 0.3);
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    min-height: 150px;
}

.info-card p {
    font-size: 0.86rem;
    color: #4b5563;
}

.info-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.45);
    border-color: #c7d2fe;
}

/* Header row: icon left, title pushed to right side of the card */
.info-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.4rem;
}

/* Make the title hug the right and stay on one line if needed */
.info-card h4 {
    font-size: 0.98rem;
    margin: 0;
    color: #111827;
    text-align: left;
    flex: 1;
}

/* Icon stays on the left, no extra bottom margin */
.card-icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    border: 1px solid #d1e0ff;
    background: #eff6ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #2563eb;
    margin: 0;
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
    max-width: 1300px;
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

.whatsapp-icon-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

/* Partnership text styles */
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

.partners-section {
    margin-top: 1.2rem;
    border-top: 1px solid #e5e7eb;
    padding-top: 0.9rem;
}

.partners-label {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9ca3af;
    margin-bottom: 0.4rem;
}

/* Outer container – hides overflow */
.partners-marquee {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 0.2rem 0;
}

/* Inner track – scrolls horizontally */
.partners-track {
    display: inline-flex;
    align-items: center;
    gap: 1.5rem;
    animation: partners-scroll 25s linear infinite;
}

/* Pause scroll on hover */
.partners-marquee:hover .partners-track {
    animation-play-state: paused;
}

.partner-item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: #eef2ff;
    border: 1px solid #e5e7eb;
    white-space: nowrap;
}

/* ✅ Bigger logos */
.partner-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 6px;
}

.partner-name {
    font-size: 0.82rem;
    color: #111827;
}

/* Infinite scroll keyframes */
@keyframes partners-scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* Responsive */
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

    /* Mega behaviour on mobile: full width, stacked */
    .mega-wrapper {
        position: static;
        transform: none;
        width: 100%;
        margin-top: 0.25rem;
        left: 0;
        right: auto;
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

    .card-grid--3,
    .card-grid--2 {
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
        min-height: 255px;
    }

    .whatsapp-float {
        right: 16px;
        bottom: 16px;
        width: 48px;
        height: 48px;
    }

    .footer-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .offer-tabs {
        flex-wrap: wrap;
        max-width: 100%;
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

/* 🔧 1) Make the Partnerships panel use one column (full width of the card) */
.nav-item.has-mega:last-of-type .mega-left {
    grid-template-columns: 1fr;
    /* instead of the default 2 columns */
}

/* 🔧 2) Prevent any content (logos track) from sticking out of the white card */
.nav-item.has-mega:last-of-type .mega {
    overflow: hidden;
    /* clips the scrolling partner chips */
}

/* (optional but nice) keep the card inside the viewport on smaller screens */
.nav-item.has-mega:last-of-type .mega-wrapper {
    right: 0;
    left: auto;
}

/* ✅ Partnerships dropdown: use a single full-width column */
.mega-left--partnerships {
    display: grid;
    grid-template-columns: 1fr;   /* no empty second column */
}

/* ✅ Partnerships mega: same width as others & clip scroller inside */
.mega--partnerships {
    width: 860px;
    max-width: 90vw;
    overflow: hidden;             /* stops the partner chips from hanging out */
}

/* ✅ Keep the partnerships dropdown aligned with the tab */
.nav-item--partnerships .mega-wrapper {
    left: 0;
    right: auto;
}

</style>

<template>
    <div class="landing">
        <!-- Modular nav -->
        <NavBar :is-logged-in="isLoggedIn" @scrollTo="scrollToSection" @logout="handleLogout" />

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
                        Scale smarter: manage operations, control finances, and reward your team with ease — all
                        with NovaGo.
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
                    Switch between views to see how NovaGO supports payroll, rental collection, and corporate
                    banking operations.
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

                    <!-- Sub-tabs for Business panel -->
                    <div class="offer-subtabs">
                        <button type="button" class="offer-subtab"
                            :class="{ 'offer-subtab--active': activeBusinessTab === 'banking' }"
                            @click="activeBusinessTab = 'banking'">
                            Corporate banking
                        </button>
                        <button type="button" class="offer-subtab"
                            :class="{ 'offer-subtab--active': activeBusinessTab === 'processes' }"
                            @click="activeBusinessTab = 'processes'">
                            Corporate processes
                        </button>
                    </div>

                    <div class="business-layout">
                        <!-- Column 1: Corporate banking -->
                        <div v-if="activeBusinessTab === 'banking'" class="business-column">
                            <p class="offer-group-title offer-group-title--left">Corporate banking</p>
                            <div class="card-grid card-grid--banking">
                                <div class="info-card info-card--link"
                                    @click="router.push('/global-multi-currency-account')">
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


                                <div class="info-card info-card--link" @click="router.push('/global-card-issuance')">
                                    <div class="info-card-header">
                                        <div class="card-icon" aria-hidden="true">
                                            <i class="fa-solid fa-credit-card"></i>
                                        </div>
                                        <h4>Global Card Issuance</h4>
                                    </div>
                                    <p>
                                        Transform your expense management and empower your teams with a flexible
                                        card issuance platform.
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
                                        scalable payments.
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
                        <div v-if="activeBusinessTab === 'processes'" class="business-column">
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

        <!-- Floating WhatsApp button -->
        <a href="https://wa.me/6591234567" class="whatsapp-float" target="_blank" rel="noopener">
            <img :src="whatsappIcon" alt="Chat with us on WhatsApp" class="whatsapp-icon-img" />
        </a>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/MainscreenNavBar.vue'
import whatsappIcon from '../assets/whatsapp_icon.png'

/** Simple login state example – adjust to your real auth setup */
const router = useRouter()
const token = ref(localStorage.getItem('access_token') || null)
const isLoggedIn = computed(() => !!token.value)

const handleLogout = () => {
    token.value = null
    localStorage.removeItem('access_token')
    router.push('/') // optional redirect on logout
}

const activeOfferTab = ref('employee')
const activeBusinessTab = ref('banking')

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

/* What We Can Offer */
.section-offer {
    background: radial-gradient(circle at top, #eef2ff, #f9fafb 85%);
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

.business-layout {
    display: grid;
    gap: 2rem;
    align-items: flex-start;
    margin-top: 2rem;
}

.business-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.offer-group-title {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #6b7280;
    margin-bottom: 0.9rem;
    text-align: center;
}

.offer-group-title--left {
    text-align: center;
}

/* Business grids */
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

.card-grid--banking,
.card-grid--processes {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 310px));
    gap: 1.4rem;
    justify-content: center;
}

/* Cards */
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

.info-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.4rem;
}

.info-card h4 {
    font-size: 0.98rem;
    margin: 0;
    color: #111827;
    text-align: left;
    flex: 1;
}

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

/* Floating WhatsApp button */
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

/* Business sub-tabs */
.offer-subtabs {
    margin-top: 1.4rem;
    display: inline-flex;
    padding: 0.18rem;
    border-radius: 999px;
    background: #e5e7eb80;
    gap: 0.2rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.offer-subtab {
    border: none;
    background: transparent;
    padding: 0.35rem 1.4rem;
    font-size: 0.82rem;
    border-radius: 999px;
    cursor: pointer;
    color: #4b5563;
    transition: background 0.16s ease, color 0.16s ease, box-shadow 0.16s ease;
    white-space: nowrap;
}

.offer-subtab--active {
    background: #ffffff;
    color: #0f172a;
    box-shadow: 0 5px 12px rgba(148, 163, 184, 0.4);
}

/* Responsive */
@media (max-width: 1024px) {
    .business-layout {
        grid-template-columns: 1fr;
    }

    .card-grid--3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 960px) {
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

    .offer-subtabs {
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
</style>

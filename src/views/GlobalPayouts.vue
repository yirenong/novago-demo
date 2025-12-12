<template>
    <div class="gp-page">
        <!-- NavBar -->
        <NavBar :is-logged-in="isLoggedIn" @scrollTo="scrollToSection" @logout="handleLogout" />

        <!-- Hero -->
        <section class="hero hero--gp">
            <div class="hero-inner">
                <div class="hero-left">
                    <p class="hero-pill">NovaGO • Global Payouts</p>
                    <h1 class="hero-title-text">Global Payouts, Without The Drag</h1>
                    <p class="hero-subtitle">
                        Turn mass payouts into a seamless, lightning-fast, highly precise operation.<br></br>
                        Move funds across borders with confidence—at scale, in minutes, and with full visibility from
                        initiation to delivery.
                    </p>
                    <div class="hero-actions">
                        <button class="btn-primary" @click="scrollToSection('contact')">
                            Talk to our team
                        </button>
                        <button class="btn-secondary" @click="scrollToSection('overview')">
                            See how it works
                        </button>
                    </div>
                </div>

                <div class="hero-right">
                    <div class="gp-hero-visual">

                        <!-- Central payout orb -->
                        <div class="gp-orb">
                            <div class="gp-orb-inner">
                                <div class="gp-orb-title">Payouts</div>
                                <div class="gp-orb-sub">Global Engine</div>
                            </div>
                            <div class="gp-orb-ring"></div>
                            <div class="gp-orb-glow"></div>
                        </div>

                        <!-- Floating stats -->
                        <div class="gp-chip gp-chip--left">
                            190+ Countries
                        </div>

                        <div class="gp-chip gp-chip--right">
                            95% fewer failures
                        </div>

                        <div class="gp-chip gp-chip--bottom">
                            Minutes, not days
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- Overview -->
        <section id="overview" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title section-title--left">Overview</h2>
                <p class="section-text section-text--left">
                    NovaGO’s Global Payouts transforms mass payments into a smooth, reliable engine for your business.
                    Move funds across borders with precision—every single time.
                </p>

                <div class="card-grid card-grid--3 overview-grid">
                    <div v-for="pill in overviewPillars" :key="pill.title" class="info-card overview-card">
                        <div class="overview-icon" :class="'overview-icon--' + pill.accent">
                            <i :class="pill.icon" aria-hidden="true"></i>
                        </div>

                        <h3 class="info-card-title">{{ pill.title }}</h3>
                        <p>{{ pill.text }}</p>
                    </div>
                </div>

            </div>
        </section>

        <!-- How it works (interactive summary) -->
        <section id="how-it-works" class="section">
            <div class="section-inner">
                <h2 class="section-title section-title--left">How it works</h2>
                <p class="section-text section-text--left">
                    A payout engine that helps you pay people faster, cheaper, and with full control—no matter where
                    they are.
                </p>

                <!-- Pills row -->
                <div class="how-tabs">
                    <button v-for="item in howItems" :key="item.id" type="button" class="how-tab"
                        :class="{ 'how-tab--active': item.id === activeHowId }" @click="activeHowId = item.id">
                        {{ item.label }}
                    </button>
                </div>

                <!-- Detail panel -->
                <div v-if="activeHow" class="how-panel">
                    <div class="how-panel-body">
                        <!-- Left side: main copy -->
                        <div class="how-panel-main">
                            <span class="how-panel-badge">{{ activeHow.badge }}</span>
                            <h3 class="how-panel-title">{{ activeHow.title }}</h3>
                            <p class="how-panel-lede">{{ activeHow.lede }}</p>
                        </div>

                        <!-- Right side: points list -->
                        <div class="how-panel-points">
                            <div v-for="(point, idx) in activeHow.points" :key="point.highlight" class="how-point-row"
                                :class="{ 'how-point-row--last': idx === activeHow.points.length - 1 }">
                                <div class="how-point-dot" aria-hidden="true"></div>
                                <div class="how-point-content">
                                    <h4 class="how-point-title">{{ point.highlight }}</h4>
                                    <p class="how-point-text">{{ point.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Features -->
        <section id="features" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title section-title--left">Key Features</h2>

                <div class="feature-grid">
                    <div v-for="feature in featureHighlights" :key="feature.title" class="info-card feature-card">
                        <span class="feature-tag">{{ feature.tag }}</span>
                        <h3 class="feature-title">{{ feature.title }}</h3>
                        <p class="feature-text">{{ feature.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact / Demo -->
        <section id="contact" class="section">
            <div class="section-inner narrow">
                <h2 class="section-title">Interested? Demo with Us Now</h2>
                <p class="section-text">
                    Ready to streamline mass payouts across 190+ countries?
                    Share a few details and our team will reach out with a personalized walkthrough.
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
                            placeholder="e.g. Mass vendor payouts, creator payments, gig worker disbursements, real-time cross-border payroll..."></textarea>
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
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/MainscreenNavBar.vue'

const router = useRouter()
const token = ref(localStorage.getItem('access_token') || null)
const isLoggedIn = computed(() => !!token.value)

const handleLogout = () => {
    token.value = null
    localStorage.removeItem('access_token')
    router.push('/')
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

/** Overview – high-level pillars (less wordy) */
const overviewPillars = [
    {
        title: 'Massive Cost Savings',
        text: 'Reduce FX and intermediary fees by leveraging local rails and intelligent routing.',
        accent: 'save',
        icon: 'fa-solid fa-piggy-bank'
    },
    {
        title: 'Blazing Fast Delivery',
        text: 'Deliver funds in minutes or hours—not days—with real-time, adaptive routing.',
        accent: 'speed',
        icon: 'fa-solid fa-bolt'
    },
    {
        title: 'Precision & Visibility',
        text: 'Minimize errors and track every payout with smart validation and live status updates.',
        accent: 'control',
        icon: 'fa-solid fa-crosshairs'
    }
]


/** How it works – interactive pills with grouped concepts */
const howItems = [
    {
        id: 'cost',
        label: 'Save on FX & fees',
        badge: 'Cost efficiency',
        title: 'Make every payout cost less',
        lede: 'Cut fees without cutting corners by using smarter FX and local payment rails.',
        points: [
            {
                highlight: 'Use local rails first',
                text: 'Route payouts through local networks to avoid unnecessary correspondent and intermediary bank fees.'
            },
            {
                highlight: 'Smarter FX paths',
                text: 'Optimise routes and rates so you can save up to 70% compared to traditional cross-border transfers.'
            }
        ]
    },
    {
        id: 'speed',
        label: 'Move money faster',
        badge: 'Speed',
        title: 'Money that lands in minutes',
        lede: 'Keep your workers, partners, and vendors paid on time with near real-time payouts.',
        points: [
            {
                highlight: 'Real-time processing',
                text: 'Adaptive routing automatically chooses the fastest available corridor for each payout.'
            },
            {
                highlight: 'Predictable payout times',
                text: 'Run payroll, creator payouts, and vendor disbursements on a reliable, repeatable schedule.'
            }
        ]
    },
    {
        id: 'precision',
        label: 'Reduce failed payouts',
        badge: 'Accuracy',
        title: 'Payouts that land right the first time',
        lede: 'Stop money bouncing back because of small mistakes in account details.',
        points: [
            {
                highlight: 'Upfront data checks',
                text: 'Validate account formats and key fields before money leaves your account.'
            },
            {
                highlight: 'Smart routing rules',
                text: 'Built-in logic helps reduce failed or returned payments by up to 95% across markets.'
            }
        ]
    },
    {
        id: 'automation',
        label: 'Automate workflows',
        badge: 'Automation',
        title: 'Workflows that run themselves',
        lede: 'Configure once, then let NovaGO handle the repetitive payout tasks for you.',
        points: [
            {
                highlight: 'End-to-end automation',
                text: 'Automate initiation, approvals, disbursements, and reconciliation in one place.'
            },
            {
                highlight: 'Fewer manual files',
                text: 'Replace spreadsheets and file uploads with scheduled and rules-based payouts.'
            }
        ]
    },
    {
        id: 'scale',
        label: 'Scale globally',
        badge: 'Scalability',
        title: 'Built to handle your next million payouts',
        lede: 'Grow from one country to hundreds without rebuilding your payout stack.',
        points: [
            {
                highlight: '190+ countries',
                text: 'Send payouts across global markets from a single platform as your business expands.'
            },
            {
                highlight: 'Volume-ready engine',
                text: 'Handle millions of transactions without adding extra load to your finance or ops teams.'
            }
        ]
    },
    {
        id: 'transparency',
        label: 'Track every payout',
        badge: 'Transparency',
        title: 'Every payout, fully traceable',
        lede: 'Know where your money is at all times, from send to settle.',
        points: [
            {
                highlight: 'End-to-end tracking',
                text: 'Follow each transaction with clear statuses—from created, to in-flight, to delivered.'
            },
            {
                highlight: 'Audit-ready reporting',
                text: 'Detailed logs and reports give finance, compliance, and auditors exactly what they need.'
            }
        ]
    }
]

const activeHowId = ref(howItems[0].id)

const activeHow = computed(() =>
    howItems.find((i) => i.id === activeHowId.value)
)

/** Features – short, non-wordy cards */
const featureHighlights = [
    {
        tag: 'Speed',
        title: 'Lightning speed',
        text: 'Global transfers completed in minutes, not days—so you can pay workers, partners, and vendors on time.'
    },
    {
        tag: 'Accuracy',
        title: 'Precision targeting',
        text: 'Intelligent routing and verification reduce errors and ensure payouts arrive in the right account.'
    },
    {
        tag: 'Visibility',
        title: 'Complete transparency',
        text: 'End-to-end, real-time tracking for every transaction, with clear status at a glance.'
    },
    {
        tag: 'Reach',
        title: 'Global reach',
        text: 'Payout to 190+ countries from a single platform, without stitching together multiple providers.'
    }
]
</script>

<style scoped>
.gp-page {
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

.hero-title-text {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #111827;
}

.hero-tagline {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
    color: #111827;
}

.hero-subtitle {
    font-size: 0.98rem;
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

/* Hero right art */
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
    padding: 3.2rem 1.25rem;
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

.section-title--left {
    text-align: center;
}

.section-text {
    font-size: 1rem;
    color: #4b5563;
    text-align: center;
}

.section-text--left {
    text-align: center;
}

/* Grids & cards */
.card-grid {
    display: grid;
    gap: 1.4rem;
    max-width: 1100px;
    margin: 1.6rem auto 0;
}

.card-grid--3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.info-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.3rem 1.2rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 12px 30px rgba(148, 163, 184, 0.3);
    transition:
        transform 0.15s ease,
        box-shadow 0.15s ease,
        border-color 0.15s ease,
        background 0.15s ease;
}

.info-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.4);
    border-color: #c7d2fe;
}

.info-card-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.45rem;
    color: #111827;
}

.info-card p {
    font-size: 0.9rem;
    color: #4b5563;
    line-height: 1.5;
}

/* Overview cards */
/* Overview cards – same style as Global Card Issuance */
.overview-grid {
    margin-top: 2rem;
}

/* main card */
.overview-card {
    position: relative;
    padding-top: 1.6rem;
    padding-bottom: 1.4rem;
    background: radial-gradient(circle at top left, #eef2ff, #ffffff 60%);
    border: 1px solid #dbeafe;
    box-shadow: 0 18px 42px rgba(129, 140, 248, 0.3);
    overflow: hidden;
}

/* subtle top highlight bar */
.overview-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border-top: 3px solid #2563eb;
    opacity: 0.9;
    pointer-events: none;
}

/* icon bubble */
.overview-icon {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.7rem;
}

/* default gradient (if no accent class is applied) */
.overview-icon {
    background: linear-gradient(135deg, #2563eb, #38bdf8);
}

/* accent variations, reusing your old colours */
.overview-icon--save {
    background: radial-gradient(circle, #22c55e, #15803d);
}

.overview-icon--speed {
    background: radial-gradient(circle, #38bdf8, #0ea5e9);
}

.overview-icon--control {
    background: radial-gradient(circle, #a855f7, #7e22ce);
}

/* tighten text inside these cards */
.overview-card .info-card-title {
    margin-bottom: 0.35rem;
}

.overview-card p {
    font-size: 0.85rem;
    line-height: 1.5;
}

/* stronger hover like GCI */
.overview-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 52px rgba(79, 70, 229, 0.5);
    border-color: #818cf8;
}


/* How it works */
.how-tabs {
    margin: 2rem auto 0;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.how-tab {
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    padding: 0.35rem 1.2rem;
    font-size: 0.86rem;
    cursor: pointer;
    color: #4b5563;
    transition:
        background 0.15s ease,
        border-color 0.15s ease,
        color 0.15s ease,
        box-shadow 0.15s ease;
}

.how-tab--active {
    background: #2563eb;
    border-color: #2563eb;
    color: #ffffff;
    box-shadow: 0 10px 22px rgba(37, 99, 235, 0.45);
}

.how-panel {
    max-width: 1000px;
    margin: 1.8rem auto 0;
    padding: 1.6rem 1.6rem 1.8rem;
    border-radius: 1.1rem;
    background: #eef2ff;
    border: 1px solid #c7d2fe;
}

.how-panel-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #111827;
}

.how-panel-lede {
    font-size: 0.94rem;
    color: #4b5563;
    margin-bottom: 1.1rem;
}

.how-panel-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.how-point-title {
    font-size: 0.92rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #111827;
}

.how-point-text {
    font-size: 0.88rem;
    color: #4b5563;
}

/* Features */
.feature-grid {
    max-width: 1100px;
    margin: 2rem auto 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.4rem;
}

.feature-card {
    padding: 1.1rem 1.2rem 1.2rem;
    min-height: auto;
}

.feature-tag {
    display: inline-flex;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.18rem 0.6rem;
    border-radius: 999px;
    background: #eef2ff;
    color: #4f46e5;
    margin-bottom: 0.5rem;
}

.feature-title {
    font-size: 0.98rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
    color: #111827;
}

.feature-text {
    font-size: 0.88rem;
    color: #4b5563;
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

/* Responsive */
@media (max-width: 1100px) {
    .card-grid--3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .feature-grid {
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

    .card-grid--3 {
        grid-template-columns: 1fr;
    }

    .how-panel-grid {
        grid-template-columns: 1fr;
    }

    .section {
        padding-inline: 1rem;
    }

    .feature-grid {
        grid-template-columns: 1fr;
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

.how-panel {
    max-width: 1100px;
    margin: 1.8rem auto 0;
    padding: 1.6rem 1.8rem 1.8rem;
    border-radius: 1rem;
    background: #eef3ff;
    border: 1px solid #c7d2fe;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.25);
}

/* Title + lede spacing */
.how-panel-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
}

.how-panel-lede {
    font-size: 0.95rem;
    color: #4b5563;
    margin: 0 0 1.3rem;
    /* <-- adds breathing room before the two columns */
    line-height: 1.6;
}

/* Two-column layout */
.how-panel-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.5rem;
    /* more gap between left/right */
    row-gap: 0.9rem;
}

/* Each bullet block */
.how-point-title {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    /* space from title to paragraph */
    color: #111827;
}

.how-point-text {
    font-size: 0.88rem;
    color: #4b5563;
    margin: 0;
    line-height: 1.55;
    /* looser line spacing */
}

/* Stack on mobile */
@media (max-width: 768px) {
    .how-panel {
        padding: 1.3rem 1.3rem 1.5rem;
    }

    .how-panel-grid {
        grid-template-columns: 1fr;
        row-gap: 0.8rem;
    }
}

/* How it works */
.how-tabs {
    margin: 2rem auto 0;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.how-tab {
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    padding: 0.35rem 1.2rem;
    font-size: 0.86rem;
    cursor: pointer;
    color: #4b5563;
    transition:
        background 0.15s ease,
        border-color 0.15s ease,
        color 0.15s ease,
        box-shadow 0.15s ease;
}

.how-tab--active {
    background: #2563eb;
    border-color: #2563eb;
    color: #ffffff;
    box-shadow: 0 10px 22px rgba(37, 99, 235, 0.45);
}

.how-panel {
    max-width: 1100px;
    margin: 1.8rem auto 0;
    padding: 1.6rem 1.8rem 1.8rem;
    border-radius: 1rem;
    background: #eef3ff;
    border: 1px solid #c7d2fe;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.22);
}

/* two-column body */
.how-panel-body {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.4fr);
    column-gap: 2.4rem;
    row-gap: 1.4rem;
}

/* left side */
.how-panel-badge {
    display: inline-flex;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.18rem 0.6rem;
    border-radius: 999px;
    background: #e0ecff;
    color: #1d4ed8;
    margin-bottom: 0.6rem;
}

.how-panel-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.4rem;
}

.how-panel-lede {
    font-size: 0.95rem;
    color: #4b5563;
    margin: 0;
    line-height: 1.6;
}

/* right side: point list */
.how-panel-points {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.how-point-row {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: 0.8rem;
    padding-bottom: 0.7rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.4);
}

.how-point-row--last {
    border-bottom: none;
    padding-bottom: 0;
}

.how-point-dot {
    width: 9px;
    height: 9px;
    border-radius: 999px;
    background: #2563eb;
    margin-top: 0.4rem;
}

.how-point-title {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #111827;
}

.how-point-text {
    font-size: 0.88rem;
    color: #4b5563;
    margin: 0;
    line-height: 1.55;
}

/* Stack columns on smaller screens */
@media (max-width: 768px) {
    .how-panel {
        padding: 1.4rem 1.3rem 1.6rem;
    }

    .how-panel-body {
        grid-template-columns: 1fr;
        row-gap: 1.1rem;
    }
}

.overview-icon i {
    color: #ffffff;
    font-size: 0.95rem;
}

.overview-icon {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
}

/* GP Hero visual (same language as GCI) */
.gp-hero-visual {
    position: relative;
    width: 100%;
    max-width: 420px;
    height: 420px;
    border-radius: 28px;
    background:
        radial-gradient(circle at 30% 25%, rgba(56, 189, 248, 0.18), transparent 55%),
        radial-gradient(circle at 70% 65%, rgba(99, 102, 241, 0.18), transparent 55%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.35));
    border: 1px solid rgba(199, 210, 254, 0.75);
    box-shadow: 0 24px 60px rgba(148, 163, 184, 0.45);
    overflow: hidden;
}

/* Logo */
.gp-logo {
    position: absolute;
    top: 22px;
    left: 22px;
}

.gp-logo img {
    height: 28px;
    opacity: 0.95;
}

/* Orb */
.gp-orb {
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);
    width: 210px;
    height: 210px;
    border-radius: 999px;
    background: radial-gradient(circle at 30% 25%, #ffffff, #eef2ff 60%, #dbeafe);
    border: 1px solid #c7d2fe;
    box-shadow: 0 20px 55px rgba(37, 99, 235, 0.25);
}

.gp-orb-inner {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    text-align: center;
    z-index: 2;
}

.gp-orb-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1d4ed8;
}

.gp-orb-sub {
    font-size: 0.85rem;
    color: #4b5563;
}

/* Orb ring */
.gp-orb-ring {
    position: absolute;
    inset: -16px;
    border-radius: 999px;
    border: 2px dashed rgba(37, 99, 235, 0.35);
    animation: gpSpin 18s linear infinite;
}

.gp-orb-glow {
    position: absolute;
    inset: -36px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.22), transparent 60%);
    filter: blur(10px);
}

@keyframes gpSpin {
    to {
        transform: rotate(360deg);
    }
}

/* Floating chips */
.gp-chip {
    position: absolute;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #e5e7eb;
    font-size: 0.8rem;
    font-weight: 600;
    color: #111827;
    box-shadow: 0 12px 28px rgba(148, 163, 184, 0.3);
    backdrop-filter: blur(8px);
}

.gp-chip--left {
    left: 24px;
    top: 120px;
}

.gp-chip--right {
    right: 24px;
    top: 90px;
}

.gp-chip--bottom {
    left: 50%;
    bottom: 28px;
    transform: translateX(-50%);
}

/* Responsive */
@media (max-width: 960px) {
    .gp-hero-visual {
        height: 360px;
    }

    .gp-orb {
        width: 180px;
        height: 180px;
    }
}

/* Logo */
.gp-logo {
    position: absolute;
    top: 22px;
    left: 22px;
}

.gp-logo img {
    height: 28px;
    opacity: 0.95;
}
</style>

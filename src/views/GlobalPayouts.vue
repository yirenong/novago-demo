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
                        Turn mass payouts into a seamless, lightning-fast, highly precise operation.<br />
                        Move funds across borders with confidence—at scale, in minutes, and with full visibility from
                        initiation to
                        delivery.
                    </p>

                    <div class="hero-actions">
                        <button class="btn-primary" @click="scrollToSection('contact')">Talk to our team</button>
                        <button class="btn-secondary" @click="scrollToSection('overview')">See how it works</button>
                    </div>

                    <!-- NEW: Section navigation buttons right under hero actions -->
                    <div class="hero-nav">
                        <button class="hero-nav-btn" type="button"
                            @click="scrollToSection('overview')">Overview</button>
                        <button class="hero-nav-btn" type="button" @click="scrollToSection('how-it-works')">How it
                            works</button>
                        <button class="hero-nav-btn" type="button" @click="scrollToSection('features')">Key
                            Features</button>
                        <button class="hero-nav-btn" type="button" @click="scrollToSection('contact')">Contact</button>
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
                        <div class="gp-chip gp-chip--left">190+ Countries</div>
                        <div class="gp-chip gp-chip--right">95% fewer failures</div>
                        <div class="gp-chip gp-chip--bottom">Minutes, not days</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Overview -->
        <section id="overview" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title section-title--left">Overview</h2>
                <p class="section-text section-text--left">
                    NovaGo’s Global Payout transforms mass payments into a seamless, lightning-fast, highly precise
                    operation. Move
                    funds across borders with absolute confidence - every single time.
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

        <!-- How it works -->
        <section id="how-it-works" class="section">
            <div class="section-inner">
                <h2 class="section-title section-title--left">How it works</h2>
                <p class="section-text section-text--left">Mass payouts, simplified into six core advantages.</p>

                <div class="how-tabs">
                    <button v-for="item in howItems" :key="item.id" type="button" class="how-tab"
                        :class="{ 'how-tab--active': item.id === activeHowId }" @click="activeHowId = item.id">
                        {{ item.label }}
                    </button>
                </div>

                <div v-if="activeHow" class="how-panel">
                    <div class="how-panel-body">
                        <div class="how-panel-main">
                            <span class="how-panel-badge">{{ activeHow.badge }}</span>
                            <h3 class="how-panel-title">{{ activeHow.title }}</h3>
                        </div>

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
                    Ready to streamline mass payouts across 190+ countries? Share a few details and our team will reach
                    out with a
                    personalized walkthrough.
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

                    <button type="submit" class="btn-primary form-submit">Submit interest</button>
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

        <!-- NEW: Floating action buttons -->
        <button class="fab fab--top" type="button" aria-label="Scroll to top" :class="{ 'is-visible': showTop }"
            @click="scrollToTop">
            ↑
        </button>

        <a class="fab fab--whatsapp" aria-label="Chat with us on WhatsApp" href="https://wa.me/6591234567"
            target="_blank" rel="noopener">
            <img :src="whatsappIcon" alt="" class="fab-whatsapp-img" />
        </a>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/MainscreenNavBar.vue'
import whatsappIcon from '../assets/whatsapp_icon.png'

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
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const fakeSubmit = () => alert('Demo request submitted. (Placeholder action)')

/** NEW: scroll-to-top visibility + action */
const showTop = ref(false)
const onScroll = () => {
    showTop.value = window.scrollY > 400
}
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

/** Overview */
const overviewPillars = [
    { title: 'Massive Cost Savings', text: 'Reduce FX and intermediary fees by leveraging local rails and intelligent routing.', accent: 'save', icon: 'fa-solid fa-piggy-bank' },
    { title: 'Blazing Fast Delivery', text: 'Deliver funds in minutes or hours—not days—with real-time, adaptive routing.', accent: 'speed', icon: 'fa-solid fa-bolt' },
    { title: 'Precision & Visibility', text: 'Minimize errors and track every payout with smart validation and live status updates.', accent: 'control', icon: 'fa-solid fa-crosshairs' }
]

const howItems = [
    {
        id: 'cost', label: 'Massive Cost Savings', badge: 'Massive Cost Savings', title: 'Massive Cost Savings', points: [
            { highlight: 'Save up to 70%', text: 'Save up to 70% on traditional transfer expenses through intelligent routing and localized payout rails' },
            { highlight: 'Reduce FX fees and intermediary fees', text: 'Reduce FX fees and intermediary fees by leveraging local payment networks' }
        ]
    },
    {
        id: 'speed', label: 'Blazing Fast Delivery', badge: 'Blazing Fast Delivery', title: 'Blazing Fast Delivery', points: [
            { highlight: 'Delivering funds', text: 'Deliver funds to recipients in minutes or hours, not days.' },
            { highlight: 'Real-time routing', text: 'Real-time processing and adaptive routing ensure the fastest possible payout times.' }
        ]
    },
    {
        id: 'precision', label: 'Unrivaled Precision', badge: 'Unrivaled Precision', title: 'Unrivaled Precision', points: [
            { highlight: 'Minimize errors and failed payments', text: 'Minimize errors and failed payments with smart routing and verification.' },
            { highlight: '95% fewer failures', text: 'Advanced validation and smart routing reduces failed payments by 95%.' }
        ]
    },
    {
        id: 'automation', label: 'Effortless Automation', badge: 'Effortless Automation', title: 'Effortless Automation', points: [
            { highlight: 'Automated complex payment', text: 'Automate complex payment workflows and reclaim hours of manual effort.' },
            { highlight: 'Set it and forget it', text: 'Set it and forget it - automated workflows handle everything from initiation to reconciliation.' }
        ]
    },
    {
        id: 'scale', label: 'Global Scalability', badge: 'Global Scalability', title: 'Global Scalability', points: [
            { highlight: 'Expand into new markets', text: 'Confidently expand into new markets with a payout engine built to scale.' },
            { highlight: '190+ countries', text: 'Handle millions of transactions across 190+ countries without breaking a sweat.' }
        ]
    },
    {
        id: 'transparency', label: 'Enhanced Transparency', badge: 'Enhanced Transparency', title: 'Enhanced Transparency', points: [
            { highlight: 'Track payments', text: 'Track every payment in real-time, from initiation to delivery.' },
            { highlight: 'Full visibility', text: 'Gain full visibility with detailed reporting, live status updates, and audit-ready trails.' }
        ]
    }
]

const activeHowId = ref(howItems[0].id)
const activeHow = computed(() => howItems.find((i) => i.id === activeHowId.value))

const featureHighlights = [
    { tag: 'Speed', title: 'Lightning speed', text: 'Global transfers completed in minutes, not days' },
    { tag: 'Accuracy', title: 'Precision targeting', text: 'Intelligent routing for optimal, error free delivery' },
    { tag: 'Visibility', title: 'Complete transparency', text: 'End to end, real time tracking for every transaction' },
    { tag: 'Reach', title: 'Global reach', text: 'Payout to 190+ countries at your fingertips' }
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
    background: radial-gradient(circle at top left, #cbdfff, #f9fafb 55%);
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

.hero-subtitle {
    font-size: 0.98rem;
    color: #4b5563;
    margin-bottom: 1.2rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.9rem;
}

/* NEW: hero nav buttons */
.hero-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
}

.hero-nav-btn {
    border-radius: 999px;
    border: 1px solid #d1d5db;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.36rem 0.9rem;
    font-size: 0.84rem;
    cursor: pointer;
    color: #334155;
    transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}

.hero-nav-btn:hover {
    transform: translateY(-1px);
    background: #ffffff;
    border-color: #c7d2fe;
    box-shadow: 0 10px 22px rgba(148, 163, 184, 0.25);
}

/* Buttons */
.btn-primary,
.btn-secondary {
    border-radius: 999px;
    padding: 0.7rem 1.6rem;
    font-size: 0.92rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease, color 0.12s ease;
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

/* Hero right */
.hero-right {
    display: flex;
    justify-content: center;
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
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, background 0.15s ease;
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
.overview-grid {
    margin-top: 2rem;
}

.overview-card {
    position: relative;
    padding-top: 1.6rem;
    padding-bottom: 1.4rem;
    background: radial-gradient(circle at top left, #eef2ff, #ffffff 60%);
    border: 1px solid #dbeafe;
    box-shadow: 0 18px 42px rgba(129, 140, 248, 0.3);
    overflow: hidden;
}

.overview-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border-top: 3px solid #2563eb;
    opacity: 0.9;
    pointer-events: none;
}

.overview-icon {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.7rem;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
}

.overview-icon[data-v-a254fc6f] {
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

.overview-icon i {
    color: #fff;
    font-size: 0.95rem;
}

.overview-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 52px rgba(79, 70, 229, 0.5);
    border-color: #818cf8;
}

/* How it works */
.how-tabs {
    margin: 2rem auto 0;
    max-width: 1200px;
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
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
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

.how-panel-body {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.4fr);
    column-gap: 2.4rem;
    row-gap: 1.4rem;
}

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

/* NEW: Floating buttons */
.fab {
    position: fixed;
    right: 24px;
    width: 54px;
    height: 54px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(209, 213, 219, 0.9);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
    z-index: 60;
    cursor: pointer;
    text-decoration: none;
    background: #ffffff;
    color: #111827;
}

.fab--whatsapp {
    bottom: 24px;
    background: #25d366;
    border-color: rgba(0, 0, 0, 0.06);
}

.fab-whatsapp-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

.fab--top {
    bottom: 90px;
    /* sits above WhatsApp */
    opacity: 0;
    pointer-events: none;
    transform: translateY(6px);
    transition: opacity 0.18s ease, transform 0.18s ease;
}

.fab--top.is-visible {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
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

    .fab {
        right: 16px;
        width: 48px;
        height: 48px;
    }

    .fab--whatsapp {
        bottom: 16px;
    }

    .fab--top {
        bottom: 76px;
    }
}

@media (max-width: 768px) {
    .how-panel-body {
        grid-template-columns: 1fr;
        row-gap: 1.1rem;
    }
}

/* GP Hero visual */
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

@media (max-width: 960px) {
    .gp-hero-visual {
        height: 360px;
    }

    .gp-orb {
        width: 180px;
        height: 180px;
    }
}

</style>

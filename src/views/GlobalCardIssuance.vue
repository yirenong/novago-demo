<template>
    <div class="gci-page">
        <!-- NavBar -->
        <NavBar :is-logged-in="isLoggedIn" @scrollTo="scrollToSection" @logout="handleLogout" />

        <!-- Hero -->
        <section class="hero hero--gci">
            <div class="hero-inner">
                <div class="hero-left">
                    <p class="hero-pill">NovaGO • Global Card Issuance</p>
                    <h1 class="hero-title-text">Issue Your Own Branded Cards</h1>
                    <p class="hero-subtitle">
                        NovaGo Corporate Cards give you a smarter way to spend locally and globally, while putting your
                        brand on every card. Instantly create multi currency Visa corporate cards with your logo and
                        built in controls, then track every purchase from one dashboard in real time.
                    </p>
                    <div class="hero-actions">
                        <button class="btn-primary" @click="scrollToSection('contact')">
                            Talk to our team
                        </button>
                        <button class="btn-secondary" @click="scrollToSection('contact')">
                            View features
                        </button>
                    </div>
                    <div class="hero-nav">
                        <button class="hero-nav-btn" type="button"
                            @click="scrollToSection('overview')">How it works</button>
                        <button class="hero-nav-btn" type="button"
                            @click="scrollToSection('features')">Features</button>
                        <button class="hero-nav-btn" type="button" @click="scrollToSection('contact')">Contact</button>
                    </div>

                </div>

                <div class="hero-right">
                    <div class="gci-card-stack">
                        <div class="gci-card gci-card--front">
                            <div class="gci-card-brand">NovaGO</div>
                            <div class="gci-card-chip"></div>
                            <div class="gci-card-number">•••• 4821</div>
                            <div class="gci-card-type">Virtual Card</div>
                        </div>

                        <div class="gci-card gci-card--middle">
                            <div class="gci-card-brand">NovaGO</div>
                            <div class="gci-card-chip"></div>
                            <div class="gci-card-number">•••• 9024</div>
                            <div class="gci-card-type">Corporate</div>
                        </div>

                        <div class="gci-card gci-card--back">
                            <div class="gci-card-brand">NovaGO</div>
                            <div class="gci-card-chip"></div>
                            <div class="gci-card-number">•••• 1176</div>
                            <div class="gci-card-type">Physical</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Overview / Value pillars -->
        <section id="overview" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title section-title--left">How it works</h2>
                <p class="section-text section-text--left">
                    Our Global Card Issuance platform gives you full control of your payment ecosystem—so you can build
                    card programs that drive loyalty, efficiency, and new revenue.
                </p>

                <div class="card-grid card-grid--4">
                    <div v-for="pill in overviewPillars" :key="pill.title" class="info-card overview-card">
                        <div class="overview-icon">
                            <i :class="pill.icon" aria-hidden="true"></i>
                        </div>
                        <h3 class="info-card-title">{{ pill.title }}</h3>
                        <p>{{ pill.text }}</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Features (split layout like screenshot) -->
        <section id="features" class="section features-section">
            <div class="section-inner features-inner">
                <!-- Left: list of feature types -->
                <div class="features-left">
                    <h2 class="section-title section-title--left">
                        Features
                    </h2>

                    <div class="feature-list">
                        <button v-for="(tab, index) in featureTabs" :key="tab.id" type="button"
                            class="feature-list-item"
                            :class="{ 'feature-list-item--active': tab.id === activeFeatureTab }"
                            @click="activeFeatureTab = tab.id">
                            <div class="feature-list-main">
                                <div class="feature-list-label">{{ tab.label }}</div>
                            </div>
                            <div class="feature-list-number">
                                {{ (index + 1).toString().padStart(2, '0') }}
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Right: active feature details -->
                <div class="features-right" v-if="activeFeature">
                    <div class="feature-detail-card">
                        <div class="feature-detail-pill">
                            {{ (activeFeatureIndex + 1).toString().padStart(2, '0') }}
                        </div>

                        <h3 class="feature-detail-title">
                            {{ activeFeature.heading }}
                        </h3>
                        <div class="feature-detail-grid">
                            <div v-for="card in activeFeature.cards" :key="card.subtitle"
                                class="feature-detail-mini-card">
                                <h4 class="feature-detail-mini-title">
                                    {{ card.subtitle }}
                                </h4>
                                <p class="feature-detail-mini-text">
                                    {{ card.text }}
                                </p>
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
                    Ready to design your own global card program?
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
                            placeholder="e.g. Virtual cards for gig payouts, branded corporate cards, spend controls for teams..."></textarea>
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
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const fakeSubmit = () => {
    alert('Demo request submitted. (Placeholder action)')
}

const showTop = ref(false)

const onScroll = () => {
    showTop.value = window.scrollY > 400
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

/** Overview – value pillars */
const overviewPillars = [
    {
        title: 'Brand elevation and worldwide acceptance',
        text: 'Create cards with your brand logo, so users can spend in local currencies wherever Visa is accepted, online or in store.',
        icon: 'fa-solid fa-star'
    },
    {
        title: 'Smart multi currency spend',
        text: 'Spend directly from your held balances and auto convert only when needed at competitive FX rates.',
        icon: 'fa-solid fa-money-bill'
    },
    {
        title: 'Lower fees, cleaner costs',
        text: 'Skip international transaction fees and reduce unnecessary conversion charges when your team spends overseas.',
        icon: 'fa-solid fa-arrow-trend-up'
    },
    {
        title: 'Operational precision in one view',
        text: 'Issue employee cards quickly, automate disbursements and manage expenses with real time tracking in one dashboard.',
        icon: 'fa-solid fa-sliders'
    }
]

/** Features – Virtual / Physical / Multi-currency / Controls */
const featureTabs = ref([
    {
        id: 'virtual',
        label: 'Virtual Cards',
        heading: 'Virtual Cards',
        lead: 'Instant, digital cards you can issue on demand for payouts, subscriptions, and controlled online spend.',
        cards: [
            {
                subtitle: 'Instant issuance',
                text: 'Generate secure digital cards in seconds for immediate use.'
            },
            {
                subtitle: 'Fast Controls',
                text: 'Create, freeze or cancel cards instantly when plans change. '
            }
        ]
    },
    {
        id: 'physical',
        label: 'Physical Cards',
        heading: 'Physical Cards',
        lead: 'Custom plastic cards your customers and teams can use at stores and ATMs.',
        cards: [
            {
                subtitle: 'Branded cards',
                text: 'Custom plastic cards suited for in-store purchases and ATM transactions.'
            },
            {
                subtitle: 'Everyday usability',
                text: 'Spend anywhere Visa is accepted, with clearer tracking per card.'
            }
        ]
    },
    {
        id: 'multi-currency',
        label: 'Multi-currency support',
        heading: 'Multi-currency support',
        lead: 'Let users spend in local currencies while you keep FX costs predictable.',
        cards: [
            {
                subtitle: 'Global currencies',
                text: 'Support major world currencies and local payment methods.'
            },
            {
                subtitle: 'Less conversion fees',
                text: 'Reduce unnecessary conversion fees with smarter routing and auto conversion when needed.'
            }
        ]
    },
    {
        id: 'controls',
        label: 'Customizable controls',
        heading: 'Customizable controls',
        lead: 'Configure limits and rules so every card stays aligned to your policies.',
        cards: [
            {
                subtitle: 'Spending limits',
                text: 'Set daily, monthly, or transaction-specific spending caps.'
            },
            {
                subtitle: 'Category control',
                text: 'Restrict spending on specific merchant categories or types.'
            }
        ]
    }
])

const activeFeatureTab = ref('virtual')

const activeFeature = computed(() =>
    featureTabs.value.find((t) => t.id === activeFeatureTab.value)
)

const activeFeatureIndex = computed(() =>
    featureTabs.value.findIndex((t) => t.id === activeFeatureTab.value)
)

</script>

<style scoped>
.gci-page {
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

.card-grid--2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card-grid--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
        border-color 0.15s ease;
    min-height: 150px;
}

.info-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.4);
    border-color: #c7d2fe;
}

.info-card-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #111827;
}

.info-card-subtitle {
    font-size: 0.94rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #111827;
}

.info-card p {
    font-size: 0.88rem;
    color: #4b5563;
}

/* Overview cards */
.overview-card {
    min-height: 160px;
}

/* Feature tabs */
.feature-tabs {
    margin-top: 1.4rem;
    display: inline-flex;
    padding: 0.22rem;
    border-radius: 999px;
    background: #e5e7eb80;
    gap: 0.25rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.feature-tab {
    border: none;
    background: transparent;
    padding: 0.4rem 1.4rem;
    font-size: 0.86rem;
    border-radius: 999px;
    cursor: pointer;
    color: #4b5563;
    white-space: nowrap;
    transition:
        background 0.16s ease,
        color 0.16s ease,
        box-shadow 0.16s ease;
}

.feature-tab--active {
    background: #ffffff;
    color: #1d4ed8;
    box-shadow: 0 6px 14px rgba(148, 163, 184, 0.45);
}

.feature-panel {
    max-width: 1100px;
    margin: 2rem auto 0;
}

.feature-heading {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    text-align: center;
    margin-bottom: 1.4rem;
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
@media (max-width: 1200px) {
    .card-grid--4 {
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

    .card-grid--2,
    .card-grid--4 {
        grid-template-columns: 1fr;
    }

    .section {
        padding-inline: 1rem;
    }

    .feature-tabs {
        flex-wrap: wrap;
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

/* Overview cards – upgraded look */
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
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
}

/* tighten text for these cards */
.overview-card .info-card-title {
    margin-bottom: 0.35rem;
}

.overview-card p {
    font-size: 0.85rem;
    line-height: 1.5;
}

/* slightly stronger hover for overview tiles */
.overview-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 52px rgba(79, 70, 229, 0.5);
    border-color: #818cf8;
}

/* Key Features – tighter cards */
.feature-panel .info-card {
    /* override the generic card size */
    min-height: auto;
    padding: 2.1rem 1.4rem 2.1rem;
    /* a bit less padding, more compact */
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    /* consistent spacing between subtitle & text */
}

/* Slightly larger gap under the subtitle */
.feature-panel .info-card-subtitle {
    margin-bottom: 0.2rem;
    /* was 0.3 but gap is now handled by `gap` */
}

/* Optional: slightly smaller body text so it feels lighter */
.feature-panel .info-card p {
    font-size: 0.86rem;
    line-height: 1.5;
}

/* Features section – two-column layout like reference */
.features-section {
    padding-top: 3.4rem;
}

.features-inner {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
    gap: 2.5rem;
    align-items: stretch;
}

.features-left .section-title--left {
    text-align: center;
}

.features-left .section-text--left {
    text-align: left;
    max-width: 540px;
}

.features-intro {
    margin-bottom: 1.8rem;
}

/* Left list */
.feature-list {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}

.feature-list-item {
    width: 100%;
    text-align: left;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 0.95rem 1.2rem;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;
    transition:
        background 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.18s ease,
        transform 0.12s ease;
}

.feature-list-item--active {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    border-color: #4f46e5;
    box-shadow: 0 18px 40px rgba(99, 102, 241, 0.55);
    transform: translateY(-2px);
}

.feature-list-main {
    flex: 1;
}

.feature-list-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #111827;
}

.feature-list-summary {
    margin-top: 0.2rem;
    font-size: 0.86rem;
    color: #6b7280;
}

.feature-list-item--active .feature-list-label,
.feature-list-item--active .feature-list-summary {
    color: #f9fafb;
}

.feature-list-number {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 999px;
    border: 2px solid rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    font-weight: 600;
    color: #4f46e5;
    background: #f9fafb;
}

.feature-list-item--active .feature-list-number {
    background: #f9fafb;
    color: #4f46e5;
    border-color: #f9fafb;
}

/* Right detail panel */
.features-right {
    display: flex;
    align-items: stretch;
    justify-content: center;
}

.feature-detail-card {
    position: relative;
    width: 100%;
    border-radius: 1.8rem;
    padding: 2.2rem 2.4rem 2.3rem;
    background: radial-gradient(circle at 0% 0%, #6d4aff, #5036f4 45%, #3b2ac4 85%);
    color: #f9fafb;
    box-shadow: 0 28px 70px rgba(15, 23, 42, 0.85);
    overflow: hidden;
}

/* soft spotlight + arc in background */
.feature-detail-card::before,
.feature-detail-card::after {
    content: '';
    position: absolute;
    pointer-events: none;
}

.feature-detail-card::before {
    width: 280px;
    height: 280px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.18), transparent 60%);
    top: -90px;
    left: -80px;
    opacity: 0.9;
}

.feature-detail-card::after {
    width: 520px;
    height: 520px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    bottom: -260px;
    right: -160px;
}

/* small pill top-left */
.feature-detail-pill {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 1rem;
    border-radius: 999px;
    background: rgba(6, 8, 20, 0.9);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
}

/* main heading */
.feature-detail-title {
    position: relative;
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
}

/* inner cards */
.feature-detail-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.2rem;
}

/* lighter mini cards inside purple panel */
.feature-detail-mini-card {
    border-radius: 1.3rem;
    padding: 1.15rem 1.3rem;
    background: rgba(249, 250, 251, 0.96);
    /* very light */
    border: 1px solid rgba(209, 213, 219, 0.9);
    box-shadow: 0 14px 32px rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    transform: translateY(0);
    transition:
        transform 0.16s ease,
        box-shadow 0.16s ease,
        border-color 0.16s ease,
        background 0.16s ease;
}

.feature-detail-mini-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 44px rgba(15, 23, 42, 0.45);
    border-color: rgba(129, 140, 248, 0.9);
    background: #ffffff;
}

.feature-detail-mini-title {
    font-size: 0.94rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
    color: #111827;
    /* dark title for readability */
}

.feature-detail-mini-text {
    font-size: 0.86rem;
    color: #4b5563;
    /* mid-grey body text */
    line-height: 1.5;
}


/* CTA button inside panel (if you add one later) */
.feature-detail-cta {
    position: relative;
    margin-top: 1.6rem;
    box-shadow: 0 14px 32px rgba(129, 212, 250, 0.9);
}

.feature-detail-card .btn-primary {
    border-color: transparent;
}

/* responsive tweaks */
@media (max-width: 960px) {
    .features-inner {
        grid-template-columns: 1fr;
    }

    .features-right {
        order: -1;
    }

    .feature-detail-grid {
        grid-template-columns: 1fr;
    }
}

/* Card stack container */
.gci-card-stack {
    position: relative;
    width: 380px;
    height: 260px;
}

/* Base card */
.gci-card {
    position: absolute;
    width: 280px;
    height: 175px;
    border-radius: 18px;
    padding: 1.2rem 1.4rem;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    box-shadow: 0 26px 60px rgba(37, 99, 235, 0.45);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
}

/* Card layers */
.gci-card--front {
    z-index: 3;
    transform: translateY(0) rotate(-2deg);
}

.gci-card--middle {
    z-index: 2;
    background: linear-gradient(135deg, #6366f1, #818cf8);
    transform: translate(40px, 30px) rotate(3deg);
    opacity: 0.95;
}

.gci-card--back {
    z-index: 1;
    background: linear-gradient(135deg, #22c55e, #16a34a);
    transform: translate(80px, 60px) rotate(-4deg);
    opacity: 0.9;
}

/* Brand */
.gci-card-brand {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

/* Chip */
.gci-card-chip {
    width: 42px;
    height: 30px;
    border-radius: 6px;
    background: linear-gradient(135deg,
            #facc15,
            #fde047);
    margin-top: 1rem;
}

/* Number */
.gci-card-number {
    font-size: 1rem;
    letter-spacing: 0.15em;
    margin-top: auto;
}

/* Type */
.gci-card-type {
    font-size: 0.75rem;
    opacity: 0.85;
}

/* Hover lift (optional but nice) */
.gci-card-stack:hover .gci-card--front {
    transform: translateY(-6px) rotate(-2deg);
}

.gci-card-stack:hover .gci-card--middle {
    transform: translate(40px, 22px) rotate(3deg);
}

.gci-card-stack:hover .gci-card--back {
    transform: translate(80px, 52px) rotate(-4deg);
}

/* Hero nav buttons (under hero actions) */
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

/* Floating buttons */
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
    /* above WhatsApp */
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

/* Responsive FAB */
@media (max-width: 960px) {
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
</style>

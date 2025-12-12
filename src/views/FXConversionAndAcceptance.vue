<template>
    <div class="fx-page">
        <!-- NavBar -->
        <NavBar :is-logged-in="isLoggedIn" @scrollTo="scrollToSection" @logout="handleLogout" />

        <!-- Hero -->
        <section class="hero hero--fx">
            <div class="hero-inner">
                <div class="hero-left">
                    <p class="hero-pill">NovaGO • FX Conversion & Global Acceptance</p>
                    <h1 class="hero-title-text">FX & Payments Built For Global Scale</h1>
                    <p class="hero-subtitle">
                        Give customers their preferred local payment methods, reduce FX costs, and streamline treasury
                        operations across every market you serve.
                    </p>
                    <div class="hero-actions">
                        <button class="btn-primary" @click="scrollToSection('contact')">
                            Talk to our team
                        </button>
                        <button class="btn-secondary" @click="scrollToSection('overview')">
                            Learn more
                        </button>
                    </div>
                </div>

                <div class="hero-right">
                    <div class="hero-visual">
                        <!-- Big FX Orb -->
                        <div class="fx-orb">
                            <div class="fx-orb-inner">
                                <div class="fx-orb-title">FX</div>
                                <div class="fx-orb-sub">Conversion Engine</div>
                            </div>
                            <div class="fx-orb-ring"></div>
                            <div class="fx-orb-glow"></div>
                        </div>

                        <!-- Currency chips -->
                        <div class="fx-chip fx-chip--usd">$ USD</div>
                        <div class="fx-chip fx-chip--eur">€ EUR</div>
                        <div class="fx-chip fx-chip--gbp">£ GBP</div>
                        <div class="fx-chip fx-chip--jpy">¥ JPY</div>

                        <!-- Route line -->
                        <svg class="fx-route" viewBox="0 0 520 240" fill="none" aria-hidden="true">
                            <path d="M30 170 C 140 60, 240 220, 330 120 C 380 65, 430 85, 490 40" stroke="url(#grad)"
                                stroke-width="4" stroke-linecap="round" stroke-dasharray="8 10" />
                            <circle cx="30" cy="170" r="7" fill="#2563eb" />
                            <circle cx="490" cy="40" r="7" fill="#38bdf8" />
                            <defs>
                                <linearGradient id="grad" x1="30" y1="170" x2="490" y2="40"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#2563eb" />
                                    <stop offset="1" stop-color="#38bdf8" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <!-- Stat pill -->
                        <div class="fx-stat">
                            <div class="fx-stat-top">Global coverage</div>
                            <div class="fx-stat-big">190+</div>
                            <div class="fx-stat-bottom">markets supported</div>
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
                    Accept payments in 150+ currencies, process transactions worldwide, and offer customers their
                    preferred local payment methods—all from a single platform.
                </p>

                <div class="card-grid overview-grid">
                    <div v-for="pill in overviewPillars" :key="pill.title" class="info-card overview-card">
                        <div class="overview-icon" :class="'overview-icon--' + pill.accent">
                            <i :class="pill.icon" aria-hidden="true"></i>
                        </div>

                        <h3 class="info-card-title">{{ pill.title }}</h3>
                        <p class="info-card-text">{{ pill.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How it works -->
        <section id="how-it-works" class="section">
            <div class="section-inner">
                <h2 class="section-title section-title--left">How it works</h2>
                <div v-if="activeFxMode" class="fx-how-panel">
                    <div class="fx-how-split">
                        <!-- Left: 2 mode cards -->
                        <div class="fx-how-side">
                            <button v-for="mode in fxModes" :key="mode.id" type="button" class="fx-mode-card"
                                :class="{ 'fx-mode-card--active': mode.id === activeFxModeId }"
                                @click="activeFxModeId = mode.id">
                                <div class="fx-mode-card-top">
                                    <span class="fx-mode-dot"></span>
                                    <span class="fx-mode-label">{{ mode.label }}</span>
                                </div>

                                <div class="fx-mode-hint">View processes →</div>
                            </button>
                        </div>

                        <!-- Right: mode details -->
                        <div class="fx-how-content">
                            <h3 class="fx-how-title">{{ activeFxMode.title }}</h3>

                            <!-- Processes header -->
                            <div class="fx-process-header">
                                <div class="fx-process-label">Processes</div>
                                <div class="fx-process-count">
                                    {{ activeFxMode.points.length }} total
                                </div>
                            </div>

                            <!-- Process list -->
                            <div class="fx-process-list">
                                <div v-for="point in activeFxMode.points" :key="point.label" class="fx-process-item">
                                    <div class="fx-process-mark"></div>

                                    <div class="fx-process-copy">
                                        <h4 class="fx-process-title">{{ point.label }}</h4>
                                        <p class="fx-process-text">{{ point.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /right -->
                    </div>
                </div>
            </div>
        </section>



        <!-- Key Features -->
        <section id="features" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title section-title--left">Key Features</h2>

                <!-- Feature tabs -->
                <div class="feature-tabs">
                    <button v-for="tab in featureTabs" :key="tab.id" type="button" class="feature-tab"
                        :class="{ 'feature-tab--active': tab.id === activeFeatureId }"
                        @click="activeFeatureId = tab.id">
                        {{ tab.label }}
                    </button>
                </div>

                <!-- Feature panel -->
                <div v-if="activeFeature" class="feature-panel">
                    <div class="feature-panel-header">
                        <div class="feature-panel-text">
                            <p class="feature-tagline">{{ activeFeature.tagline }}</p>
                            <h3 class="feature-heading">{{ activeFeature.title }}</h3>
                        </div>
                        <div class="feature-pill-meta" v-if="activeFeature.pills && activeFeature.pills.length">
                            <span v-for="pill in activeFeature.pills" :key="pill" class="feature-meta-chip">
                                {{ pill }}
                            </span>
                        </div>
                    </div>

                    <div class="feature-body">
                        <div class="feature-column">
                            <div v-for="card in leftFeatureCards" :key="card.subtitle" class="feature-row">
                                <span class="feature-row-dot"></span>
                                <div class="feature-row-copy">
                                    <h4 class="feature-row-title">{{ card.subtitle }}</h4>
                                    <p class="feature-row-text">{{ card.text }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-column">
                            <div v-for="card in rightFeatureCards" :key="card.subtitle" class="feature-row">
                                <span class="feature-row-dot"></span>
                                <div class="feature-row-copy">
                                    <h4 class="feature-row-title">{{ card.subtitle }}</h4>
                                    <p class="feature-row-text">{{ card.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact / Demo -->
        <section id="contact" class="section">
            <div class="section-inner narrow">
                <h2 class="section-title">Interested? Demo with Us Now</h2>
                <p class="section-text">
                    Want to unify FX and global acceptance in a single platform? Share your details and our team will
                    walk you through what’s possible.
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
                            placeholder="e.g. Multi-currency checkout, FX optimization, treasury automation..."></textarea>
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

/* -------------------------------
   Overview
-------------------------------- */
const overviewPillars = [
    {
        title: 'Global Acceptance',
        text: 'Accept payments in 150+ currencies and support preferred local payment methods worldwide.',
        accent: 'accept',
        icon: 'fa-solid fa-credit-card'
    },
    {
        title: 'Unified FX Control',
        text: 'Centralize FX, reduce costs, and gain command over currency exposures in one place.',
        accent: 'fx',
        icon: 'fa-solid fa-arrow-right-arrow-left'
    },
    {
        title: 'Global Reach',
        text: 'Process and settle payments from customers in new geographies without extra complexity.',
        accent: 'reach',
        icon: 'fa-solid fa-globe'
    }
]


/* -------------------------------
   How it works – FX + Processing
-------------------------------- */
const fxModes = [
    {
        id: 'global-fx',
        label: 'Global FX',
        title: 'Global FX',
        points: [
            {
                label: 'Maximise savings',
                text: 'Reduce FX cost versus traditional banks by leveraging real-time rates and smarter execution paths.'
            },
            {
                label: 'Minimise risk',
                text: 'Protect margins from currency fluctuations with better timing and optional rate strategies.'
            },
            {
                label: 'Accelerate operations',
                text: 'Convert and move funds quickly so treasury and ops teams aren’t waiting on slow FX cycles.'
            },
            {
                label: 'Gain control',
                text: 'Get full visibility and command over currency exposures instead of scattered bank portals.'
            },
            {
                label: 'Simplified treasury',
                text: 'Consolidate FX and payment management into one platform for easier decision-making.'
            }
        ],
        benefits: [
            'Lower FX and intermediary fees',
            'Clearer view of multi-currency cash',
            'Faster decision-making for treasury'
        ]
    },
    {
        id: 'global-processing',
        label: 'Global Processing',
        title: 'Global processing',
        points: [
            {
                label: 'Reduce cost',
                text: 'Lower transaction fees and optimise FX on cross-border payments with smarter routing.'
            },
            {
                label: 'Increase conversions',
                text: 'Offer preferred local payment methods and currencies to reduce checkout drop-off.'
            },
            {
                label: 'Expand market reach',
                text: 'Accept payments from customers in new geographies without rebuilding your stack.'
            },
            {
                label: 'Streamline operations',
                text: 'Consolidate processing, reporting, and reconciliation in one place for your teams.'
            },
            {
                label: 'Minimise fraud',
                text: 'Use built-in fraud prevention and compliance controls across markets.'
            },
            {
                label: 'Accelerate growth',
                text: 'Spend less time fixing payment issues and more time launching in new markets.'
            }
        ],
        benefits: [
            'Higher payment approval rates',
            'Simpler reporting across regions',
            'Faster launches in new markets'
        ]
    }
]

const activeFxModeId = ref(fxModes[0].id)

const activeFxMode = computed(() =>
    fxModes.find((m) => m.id === activeFxModeId.value)
)

const openHowIdx = ref(0) // first item open by default

/* -------------------------------
   Features – tabs
-------------------------------- */
const featureTabs = [
    { id: 'fx', label: 'Global FX' },
    { id: 'processing', label: 'Global Processing' }
]

const featureDetails = {
    fx: {
        title: 'Global FX features',
        tagline: 'Tools that help treasury and product teams treat FX as a strategic lever, not a cost centre.',
        pills: ['Real-time rates', '150+ currencies', 'API-first'],
        cards: [
            {
                subtitle: 'Real-time rates',
                text: 'Access live, interbank FX rates with no hidden markups.'
            },
            {
                subtitle: 'Global reach',
                text: 'Leverage an extensive payment network across 150+ currencies and 190+ countries.'
            },
            {
                subtitle: 'Flexible options',
                text: 'Execute immediate conversions or lock in rates to hedge against volatility.'
            },
            {
                subtitle: 'API-driven FX',
                text: 'Integrate FX directly into your systems and automate treasury workflows.'
            }
        ]
    },
    processing: {
        title: 'Global processing features',
        tagline: 'Make every checkout feel local while keeping risk, reporting, and settlement under control.',
        pills: ['Local methods', 'Higher approvals', 'Built-in risk'],
        cards: [
            {
                subtitle: 'Multi-currency support',
                text: 'Handle, convert, settle, or hold funds in 150+ currencies as needed.'
            },
            {
                subtitle: 'Global payment methods',
                text: 'Support major cards, local payment methods, and bank transfers with intelligent routing.'
            },
            {
                subtitle: 'Real-time processing & insights',
                text: 'Instant processing paired with real-time reporting and settlement visibility.'
            },
            {
                subtitle: 'Advanced risk & compliance',
                text: 'PCI DSS infrastructure, integrated fraud detection, and global AML/KYC standards.'
            }
        ]
    }
}

const activeFeatureId = ref('fx')

const activeFeature = computed(() => featureDetails[activeFeatureId.value])

// Split active feature cards into 2 columns for nicer layout
const leftFeatureCards = computed(() => {
    if (!activeFeature.value) return []
    const half = Math.ceil(activeFeature.value.cards.length / 2)
    return activeFeature.value.cards.slice(0, half)
})

const rightFeatureCards = computed(() => {
    if (!activeFeature.value) return []
    const half = Math.ceil(activeFeature.value.cards.length / 2)
    return activeFeature.value.cards.slice(half)
})
</script>

<style scoped>
.fx-page {
    min-height: 100vh;
    width: 100%;
    background: #f3f4fd;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #0f172a;
}

/* HERO */
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
    margin-bottom: 0.6rem;
    color: #111827;
}

.hero-subtitle {
    font-size: 0.96rem;
    color: #4b5563;
    margin-bottom: 1.8rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
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

/* Cards & grids */
.card-grid {
    display: grid;
    gap: 1.4rem;
    max-width: 1100px;
    margin: 1.8rem auto 0;
}

.overview-grid {
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
        border-color 0.15s ease;
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

.info-card-text {
    font-size: 0.9rem;
    color: #4b5563;
    line-height: 1.55;
}

/* Overview icons */
.overview-card {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.overview-icon {
    width: 26px;
    height: 26px;
    border-radius: 999px;
    margin-bottom: 0.3rem;
}

.overview-icon--accept {
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
}

.overview-icon--fx {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
}

.overview-icon--reach {
    background: linear-gradient(135deg, #34d399, #059669);
}

/* How it works – FX page */
.fx-how-toggle {
    margin: 2rem auto 0;
    max-width: 420px;
    padding: 0.2rem;
    border-radius: 999px;
    background: #e5e7eb80;
    display: flex;
    gap: 0.25rem;
}

.fx-how-pill {
    flex: 1;
    border-radius: 999px;
    border: none;
    padding: 0.45rem 0.8rem;
    font-size: 0.86rem;
    background: transparent;
    cursor: pointer;
    color: #4b5563;
    transition:
        background 0.16s ease,
        color 0.16s ease,
        box-shadow 0.16s ease;
}

.fx-how-pill--active {
    background: #ffffff;
    color: #1d4ed8;
    box-shadow: 0 8px 20px rgba(148, 163, 184, 0.5);
}

.fx-how-panel {
    max-width: 1100px;
    margin: 2rem auto 0;
    padding: 1.8rem 1.8rem 1.9rem;
    border-radius: 1.1rem;
    background: #eef3ff;
    border: 1px solid #c7d2fe;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.25);
}

.fx-how-main {
    display: grid;
    gap: 1.8rem;
}

.fx-how-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    color: #1d4ed8;
    /* tie in to your brand blue */
    margin-bottom: 0.7rem;
}

.fx-how-title::before {
    content: '';
    width: 6px;
    height: 24px;
    border-radius: 999px;
    background: linear-gradient(180deg, #2563eb, #38bdf8);
    flex-shrink: 0;
}

.fx-how-lede {
    font-size: 1rem;
    color: #111827;
    margin-bottom: 1.4rem;
    line-height: 1.7;
    padding: 0.75rem 0.95rem;
    border-radius: 0.8rem;
    background: #f9fafb;
    border-left: 3px solid #2563eb;
}

.fx-how-point-label {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #111827;
}

.fx-how-point-text {
    font-size: 0.86rem;
    color: #4b5563;
    line-height: 1.55;
}

/* Aside block */
.fx-how-aside {
    background: #ffffff;
    border-radius: 0.9rem;
    padding: 1rem 1rem 1.1rem;
    border: 1px solid #e5e7eb;
}

.fx-how-aside-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 0.84rem;
    color: #4b5563;
    flex: 1;
    /* use remaining height */
}

.fx-how-aside-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.45rem;
    padding: 0.55rem 0.65rem;
    border-radius: 0.7rem;
    background: #f9fafb;
    /* subtle fill so it doesn’t look empty */
    border: 1px solid transparent;
    transition:
        background 0.15s ease,
        border-color 0.15s ease,
        transform 0.12s ease;
}

.fx-how-aside-list li:hover {
    background: #eef2ff;
    border-color: #c7d2fe;
    transform: translateY(-1px);
}

.fx-check-dot {
    margin-top: 0.25rem;
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: #22c55e;
    flex-shrink: 0;
}

.fx-how-aside-title {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #111827;
}

.fx-how-aside-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 0.84rem;
    color: #4b5563;
}

.fx-how-aside-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
}

.fx-check-dot {
    margin-top: 0.3rem;
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: #22c55e;
}

/* Features */
.feature-tabs {
    margin-top: 1.6rem;
    display: inline-flex;
    padding: 0.22rem;
    border-radius: 999px;
    background: #e5e7eb80;
    gap: 0.3rem;
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
    padding: 1.7rem 1.8rem 1.9rem;
    border-radius: 1.1rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.25);
}

.feature-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
}

.feature-tagline {
    font-size: 0.85rem;
    color: #6b7280;
    margin-bottom: 0.35rem;
}

.feature-heading {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
}

.feature-pill-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    justify-content: flex-end;
}

.feature-meta-chip {
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: #eef2ff;
    color: #4f46e5;
}

.feature-body {
    margin-top: 1.4rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem 1.4rem;
}

.feature-column {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.feature-row {
    display: flex;
    gap: 0.6rem;
    padding: 0.7rem 0.8rem;
    border-radius: 0.8rem;
    background: #f9fafb;
    border: 1px solid transparent;
    transition:
        background 0.15s ease,
        border-color 0.15s ease,
        transform 0.12s ease;
}

.feature-row:hover {
    background: #eef2ff;
    border-color: #c7d2fe;
    transform: translateY(-1px);
}

.feature-row-dot {
    margin-top: 0.3rem;
    width: 9px;
    height: 18px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    flex-shrink: 0;
}

.feature-row-title {
    font-size: 0.94rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #111827;
}

.feature-row-text {
    font-size: 0.86rem;
    color: #4b5563;
    line-height: 1.55;
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
    .overview-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .feature-body {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 1024px) {
    .fx-how-main {
        grid-template-columns: minmax(0, 1fr);
    }

    .fx-how-grid {
        grid-template-columns: 1fr;
    }

    .feature-panel-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .feature-pill-meta {
        justify-content: flex-start;
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

    .overview-grid {
        grid-template-columns: 1fr;
    }

    .section {
        padding-inline: 1rem;
    }

    .form-row {
        flex-direction: column;
    }

    .footer-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .feature-tabs {
        flex-wrap: wrap;
        max-width: 100%;
    }
}

.fx-how-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.2rem;
    row-gap: 1.1rem;
    /* slightly more breathing room */
}

/* New HOW IT WORKS flow */
.fx-how-flow {
    margin-top: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    position: relative;
    padding-left: 2.2rem;
}

/* Vertical guide line */
.fx-how-flow::before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg,
            rgba(0, 151, 139, 0.15),
            rgba(0, 151, 139, 0.6),
            rgba(0, 151, 139, 0.15));
}

/* Each step */
.fx-how-step {
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
}

/* Number marker */
.fx-how-step-index {
    width: 26px;
    height: 26px;
    border-radius: 999px;
    background: #00978b;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 700;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    box-shadow: 0 6px 14px rgba(0, 151, 139, 0.35);
}

/* Text content */
.fx-how-step-content {
    max-width: 720px;
}

.fx-how-step-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
}

.fx-how-step-text {
    font-size: 0.88rem;
    line-height: 1.65;
    color: #4b5563;
}


.fx-how-point::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background: radial-gradient(circle at top left, rgba(129, 140, 248, 0.12), transparent 55%);
    transition: opacity 0.18s ease;
}

.fx-how-point:hover {
    background: #ffffff;
    border-color: #c7d2fe;
    box-shadow: 0 10px 22px rgba(148, 163, 184, 0.3);
    transform: translateY(-2px);
}

.fx-how-point:hover::before {
    opacity: 1;
}

.fx-how-point-label {
    position: relative;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #111827;
}

.fx-how-point-text {
    position: relative;
    font-size: 0.86rem;
    color: #4b5563;
    line-height: 1.55;
}

/* Remove box styles entirely */
.fx-how-point {
    padding-left: 1rem;
    border-left: 3px solid #00978b;
    border-radius: 0;
    background: none;
    transition: border-color 0.2s ease, transform 0.15s ease;
}

.fx-how-point:hover {
    border-color: #00978b;
    transform: translateX(3px);
}

.fx-how-point-label {
    font-size: 0.92rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #111827;
}

.fx-how-point-text {
    font-size: 0.86rem;
    color: #4b5563;
    line-height: 1.55;
}

.overview-icon {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.7rem;
}

.overview-icon i {
    color: #ffffff;
    font-size: 0.95rem;
}

/* HERO bigger */
.hero.hero--fx {
    padding: 0.2rem 1.25rem 6rem;
    /* bigger */
}

.hero-inner {
    min-height: 560px;
    /* gives hero presence */
    align-items: center;
}

.hero-left {
    max-width: 620px;
    /* more breathing room */
}

.hero-title-text {
    font-size: 2rem;
    /* bigger title */
    line-height: 1.1;
    letter-spacing: -0.02em;
}

.hero-subtitle {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 560px;
}

/* Hero visual area (replaces boxes) */
.hero-visual {
    position: relative;
    width: 100%;
    max-width: 520px;
    height: 420px;
    border-radius: 28px;
    background: radial-gradient(circle at 30% 25%, rgba(56, 189, 248, 0.18), transparent 55%),
        radial-gradient(circle at 70% 65%, rgba(99, 102, 241, 0.18), transparent 55%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.35));
    border: 1px solid rgba(199, 210, 254, 0.75);
    box-shadow: 0 24px 60px rgba(148, 163, 184, 0.45);
    overflow: hidden;
}

/* FX Orb */
.fx-orb {
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 220px;
    border-radius: 999px;
    background: radial-gradient(circle at 30% 25%, #ffffff, #eef2ff 55%, #dbeafe 100%);
    border: 1px solid rgba(199, 210, 254, 0.9);
    box-shadow: 0 20px 55px rgba(37, 99, 235, 0.25);
}

.fx-orb-inner {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 0 1.2rem;
    z-index: 2;
}

.fx-orb-title {
    font-weight: 800;
    font-size: 3rem;
    color: #1d4ed8;
    line-height: 1;
}

.fx-orb-sub {
    margin-top: 0.35rem;
    font-size: 0.9rem;
    color: #4b5563;
}

.fx-orb-ring {
    position: absolute;
    inset: -18px;
    border-radius: 999px;
    border: 2px dashed rgba(37, 99, 235, 0.35);
    animation: fxSpin 18s linear infinite;
}

.fx-orb-glow {
    position: absolute;
    inset: -40px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.22), transparent 60%);
    filter: blur(10px);
    z-index: 1;
}

@keyframes fxSpin {
    to {
        transform: rotate(360deg);
    }
}

/* Currency chips */
.fx-chip {
    position: absolute;
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(203, 213, 225, 0.9);
    font-size: 0.82rem;
    font-weight: 600;
    color: #111827;
    box-shadow: 0 12px 28px rgba(148, 163, 184, 0.3);
    backdrop-filter: blur(8px);
}

.fx-chip--usd {
    top: 42px;
    left: 36px;
}

.fx-chip--eur {
    top: 88px;
    right: 38px;
}

.fx-chip--gbp {
    bottom: 72px;
    left: 56px;
}

.fx-chip--jpy {
    bottom: 46px;
    right: 52px;
}

/* Route line */
.fx-route {
    position: absolute;
    left: 0;
    top: 0;
    width: 520px;
    height: 240px;
    opacity: 0.9;
    pointer-events: none;
    transform: translate(0, 90px);
}

/* Stat pill */
.fx-stat {
    position: absolute;
    right: 26px;
    top: 26px;
    padding: 0.75rem 0.9rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(199, 210, 254, 0.75);
    box-shadow: 0 18px 38px rgba(148, 163, 184, 0.35);
    backdrop-filter: blur(8px);
    min-width: 160px;
}

.fx-stat-top {
    font-size: 0.78rem;
    color: #6b7280;
}

.fx-stat-big {
    font-size: 2rem;
    font-weight: 800;
    color: #1d4ed8;
    line-height: 1.1;
    margin-top: 0.15rem;
}

.fx-stat-bottom {
    font-size: 0.78rem;
    color: #4b5563;
}

/* Responsive hero sizing */
@media (max-width: 960px) {
    .hero.hero--fx {
        padding: 4.2rem 1rem 4rem;
    }

    .hero-title-text {
        font-size: 2.3rem;
    }

    .hero-visual {
        max-width: 520px;
        height: 360px;
    }

    .fx-orb {
        width: 190px;
        height: 190px;
    }

    .fx-route {
        width: 520px;
        transform: translate(0, 70px);
    }
}

.fx-how-list {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    margin-top: 0.6rem;
}

.fx-how-item {
    width: 100%;
    text-align: left;
    border: none;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(199, 210, 254, 0.65);
    border-radius: 14px;
    padding: 0.85rem 0.95rem;
    cursor: pointer;
    box-shadow: 0 10px 22px rgba(148, 163, 184, 0.14);
    transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease;
}

.fx-how-item:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(148, 163, 184, 0.20);
}

.fx-how-item--open {
    background: #ffffff;
    border-color: #c7d2fe;
}

.fx-how-item-head {
    display: flex;
    align-items: center;
    gap: 0.7rem;
}

.fx-how-item-bar {
    width: 10px;
    height: 18px;
    border-radius: 999px;
    background: #00978b;
    /* uses your accent */
    flex-shrink: 0;
}

.fx-how-chevron {
    font-size: 1.4rem;
    color: #2563eb;
    transform: rotate(90deg);
    transition: transform .15s ease;
    line-height: 1;
}

.fx-how-item--open .fx-how-chevron {
    transform: rotate(-90deg);
}

.fx-how-item-body {
    margin-top: 0.55rem;
    padding-left: 1.7rem;
    /* lines up with bar */
}

/* Panel container (keep your existing if you already like it) */
.fx-how-panel {
    max-width: 1100px;
    margin: 2rem auto 0;
    padding: 1.8rem 1.8rem 1.9rem;
    border-radius: 1.1rem;
    background: #eef3ff;
    border: 1px solid #c7d2fe;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.25);
}

/* Layout: left selector + right detail */
.fx-how-split {
    display: grid;
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 1.6rem;
    align-items: start;
}

/* Left side */
.fx-how-side {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}

/* Selectable “mode cards” */
.fx-mode-card {
    width: 100%;
    text-align: left;
    border: none;
    cursor: pointer;
    border-radius: 16px;
    padding: 1rem 1rem 1.05rem;
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid rgba(199, 210, 254, 0.75);
    box-shadow: 0 12px 26px rgba(148, 163, 184, 0.18);
    transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease;
}

.fx-mode-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 34px rgba(148, 163, 184, 0.24);
}

.fx-mode-card--active {
    background: #ffffff;
    border-color: rgba(0, 151, 139, 0.55);
    box-shadow: 0 18px 40px rgba(0, 151, 139, 0.12);
}

.fx-mode-card-top {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 0.6rem;
}

.fx-mode-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #00978b;
    box-shadow: 0 6px 14px rgba(0, 151, 139, 0.35);
}

.fx-mode-label {
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
    font-weight: 650;
}

.fx-mode-title {
    font-size: 1rem;
    font-weight: 750;
    color: #111827;
    line-height: 1.25;
}

.fx-mode-preview {
    margin-top: 0.45rem;
    font-size: 0.86rem;
    line-height: 1.55;
    color: #4b5563;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.fx-mode-hint {
    margin-top: 0.7rem;
    font-size: 0.86rem;
    color: #2563eb;
    opacity: 0.9;
}

/* Right content */
.fx-how-content {
    padding-top: 0.1rem;
}

.fx-how-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
    font-weight: 800;
    color: #1d4ed8;
    margin-bottom: 0.7rem;
}

.fx-how-title::before {
    content: '';
    width: 6px;
    height: 24px;
    border-radius: 999px;
    background: linear-gradient(180deg, #2563eb, #38bdf8);
    flex-shrink: 0;
}

.fx-how-lede {
    font-size: 1rem;
    color: #111827;
    margin-bottom: 1.2rem;
    line-height: 1.7;
    padding: 0.75rem 0.95rem;
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.75);
    border-left: 3px solid #2563eb;
}

/* Flow list */
.fx-how-flow {
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    position: relative;
    padding-left: 2.2rem;
}

.fx-how-flow::before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg,
            rgba(0, 151, 139, 0.15),
            rgba(0, 151, 139, 0.6),
            rgba(0, 151, 139, 0.15));
}

.fx-how-step {
    display: flex;
    gap: 1.1rem;
    align-items: flex-start;
}

.fx-how-step-index {
    width: 26px;
    height: 26px;
    border-radius: 999px;
    background: #00978b;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 800;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    box-shadow: 0 6px 14px rgba(0, 151, 139, 0.35);
}

.fx-how-step-content {
    max-width: 760px;
}

.fx-how-step-title {
    font-size: 0.95rem;
    font-weight: 750;
    color: #111827;
    margin-bottom: 0.25rem;
}

.fx-how-step-text {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.65;
    color: #4b5563;
}

/* Responsive */
@media (max-width: 960px) {
    .fx-how-split {
        grid-template-columns: 1fr;
    }
}

.fx-how-panel {
    max-width: 1100px;
    margin: 2rem auto 0;
    padding: 1.8rem 1.8rem 1.9rem;
    border-radius: 1.1rem;
    background: #eef3ff;
    border: 1px solid #c7d2fe;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.25);
}

.fx-how-split {
    display: grid;
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 1.6rem;
    align-items: start;
}

/* Left cards */
.fx-how-side {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}

.fx-mode-card {
    width: 100%;
    text-align: left;
    border: none;
    cursor: pointer;
    border-radius: 16px;
    padding: 1rem 1rem 1.05rem;
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid rgba(199, 210, 254, 0.75);
    box-shadow: 0 12px 26px rgba(148, 163, 184, 0.18);
    transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease;
}

.fx-mode-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 34px rgba(148, 163, 184, 0.24);
}

.fx-mode-card--active {
    background: #ffffff;
    border-color: rgba(0, 151, 139, 0.55);
    box-shadow: 0 18px 40px rgba(0, 151, 139, 0.12);
}

.fx-mode-card-top {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 0.6rem;
}

.fx-mode-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #00978b;
    box-shadow: 0 6px 14px rgba(0, 151, 139, 0.35);
}

.fx-mode-label {
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
    font-weight: 650;
}

.fx-mode-title {
    font-size: 1rem;
    font-weight: 750;
    color: #111827;
    line-height: 1.25;
}

.fx-mode-preview {
    margin-top: 0.45rem;
    font-size: 0.86rem;
    line-height: 1.55;
    color: #4b5563;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.fx-mode-hint {
    margin-top: 0.7rem;
    font-size: 0.86rem;
    color: #2563eb;
    opacity: 0.9;
}

/* Right content */
.fx-how-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
    font-weight: 800;
    color: #1d4ed8;
    margin-bottom: 0.7rem;
}

.fx-how-title::before {
    content: '';
    width: 6px;
    height: 24px;
    border-radius: 999px;
    background: linear-gradient(180deg, #2563eb, #38bdf8);
    flex-shrink: 0;
}

.fx-how-lede {
    font-size: 1rem;
    color: #111827;
    margin-bottom: 1.2rem;
    line-height: 1.7;
    padding: 0.75rem 0.95rem;
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.75);
    border-left: 3px solid #2563eb;
}

/* Processes header */
.fx-process-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(199, 210, 254, 0.8);
}

.fx-process-label {
    font-size: 0.9rem;
    font-weight: 750;
    color: #111827;
}

.fx-process-count {
    font-size: 0.82rem;
    color: #64748b;
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(199, 210, 254, 0.8);
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
}

/* Process list (no boxes) */
.fx-process-list {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
}

.fx-process-item {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
    padding: 0.2rem 0;
}

.fx-process-mark {
    width: 10px;
    height: 18px;
    border-radius: 999px;
    background: #00978b;
    box-shadow: 0 6px 14px rgba(0, 151, 139, 0.25);
    flex-shrink: 0;
    margin-top: 0.25rem;
}

.fx-process-title {
    font-size: 0.95rem;
    font-weight: 750;
    color: #111827;
    margin-bottom: 0.25rem;
}

.fx-process-text {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.65;
    color: #4b5563;
}

/* Responsive */
@media (max-width: 960px) {
    .fx-how-split {
        grid-template-columns: 1fr;
    }
}
</style>

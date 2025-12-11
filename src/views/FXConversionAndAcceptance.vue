<template>
    <div class="fx-page">
        <!-- NavBar -->
        <NavBar :is-logged-in="isLoggedIn" @scrollTo="scrollToSection" @logout="handleLogout" />

        <!-- Hero -->
        <section class="hero hero--fx">
            <div class="hero-inner">
                <div class="hero-left">
                    <p class="hero-pill">NovaGO • FX Conversion & Global Acceptance</p>
                    <h1 class="hero-title-text">FX and payments built for global scale</h1>
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
                            <div class="hero-art-badge">150+ currencies supported</div>
                        </div>

                        <div class="hero-art-card hero-art-card--two">
                            <div class="hero-art-pill"></div>
                            <div class="hero-art-meta">
                                <span>Global coverage</span>
                                <span class="hero-art-meta-value">190+ payout & acceptance markets</span>
                            </div>
                        </div>

                        <div class="hero-art-glow hero-art-glow--a"></div>
                        <div class="hero-art-glow hero-art-glow--b"></div>
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
                        <div class="overview-icon" :class="'overview-icon--' + pill.accent"></div>
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
                <p class="section-text section-text--left">
                    Two engines working together: one for smarter FX, one for global payment acceptance.
                </p>

                <!-- Toggle pills -->
                <div class="fx-how-toggle">
                    <button v-for="mode in fxModes" :key="mode.id" type="button" class="fx-how-pill"
                        :class="{ 'fx-how-pill--active': mode.id === activeFxModeId }"
                        @click="activeFxModeId = mode.id">
                        {{ mode.label }}
                    </button>
                </div>

                <!-- Detail panel -->
                <div v-if="activeFxMode" class="fx-how-panel">
                    <div class="fx-how-main">
                        <div class="fx-how-text">
                            <h3 class="fx-how-title">{{ activeFxMode.title }}</h3>
                            <p class="fx-how-lede">{{ activeFxMode.lede }}</p>

                            <div class="fx-how-grid">
                                <div v-for="point in activeFxMode.points" :key="point.label" class="fx-how-point">
                                    <h4 class="fx-how-point-label">{{ point.label }}</h4>
                                    <p class="fx-how-point-text">{{ point.text }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="fx-how-aside">
                            <h4 class="fx-how-aside-title">What this helps you do</h4>
                            <ul class="fx-how-aside-list">
                                <li v-for="item in activeFxMode.benefits" :key="item">
                                    <span class="fx-check-dot"></span>
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                        </div>
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
        accent: 'accept'
    },
    {
        title: 'Unified FX Control',
        text: 'Centralize FX, reduce costs, and gain command over currency exposures in one place.',
        accent: 'fx'
    },
    {
        title: 'Global Reach',
        text: 'Process and settle payments from customers in new geographies without extra complexity.',
        accent: 'reach'
    }
]

/* -------------------------------
   How it works – FX + Processing
-------------------------------- */
const fxModes = [
    {
        id: 'global-fx',
        label: 'Global FX',
        title: 'Global FX – make every conversion work harder',
        lede: 'Turn FX into a controlled lever: save on cost, protect margins, and keep currency exposure visible.',
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
        title: 'Global processing – more approvals, less complexity',
        lede: 'Process payments worldwide, offer local methods, and keep everything aligned for finance and ops.',
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
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 1.8rem;
}

.fx-how-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.45rem;
}

.fx-how-lede {
    font-size: 0.95rem;
    color: #4b5563;
    margin-bottom: 1.2rem;
    line-height: 1.6;
}

.fx-how-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.2rem;
    row-gap: 0.9rem;
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
</style>

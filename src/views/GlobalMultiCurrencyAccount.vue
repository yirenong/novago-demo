<template>
    <div class="gmc-page">
        <!-- NavBar -->
        <NavBar :is-logged-in="isLoggedIn" @scrollTo="scrollToSection" @logout="handleLogout" />

        <!-- Hero -->
        <section class="hero hero--gmc">
            <div class="hero-inner">
                <div class="hero-left">
                    <p class="hero-pill">NovaGO • Global Multi Currency Account</p>
                    <h1 class="hero-title-text">Your Borderless Financial Hub</h1>
                    <p class="hero-subtitle">
                        NovaGo's Multi Currency Accounts aim to unlock a new level of growth for you by simplifying
                        global
                        finances,
                        protecting your margins, and helping you operate like a local in every market.
                    </p>
                    <div class="hero-actions">
                        <button class="btn-primary" @click="scrollToSection('contact')">
                            Talk to our team
                        </button>
                        <button class="btn-secondary" @click="scrollToSection('contact')">
                            View features
                        </button>
                    </div>
                </div>

                <div class="hero-right">
                    <div class="gmc-account-stack">
                        <!-- Main account -->
                        <div class="gmc-account-card gmc-account-card--primary">
                            <div class="gmc-account-header">
                                <span class="gmc-brand">NovaGO</span>
                                <span class="gmc-badge">Multi-Currency</span>
                            </div>

                            <div class="gmc-balance">
                                <span class="gmc-currency">USD</span>
                                <span class="gmc-amount">$128,420.50</span>
                            </div>

                            <div class="gmc-meta">
                                <span>Local account • US</span>
                                <span>Available balance</span>
                            </div>
                        </div>

                        <!-- Secondary balances -->
                        <div class="gmc-account-card gmc-account-card--secondary">
                            <span class="gmc-currency">EUR</span>
                            <span class="gmc-amount">€42,180.10</span>
                        </div>

                        <div class="gmc-account-card gmc-account-card--secondary gmc-account-card--alt">
                            <span class="gmc-currency">SGD</span>
                            <span class="gmc-amount">S$63,900.00</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Challenges of Global Businesses -->
        <section id="challenges" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title section-title--left">
                    Challenges of Global Businesses
                </h2>
                <!-- Added tagline below the title -->
                <p class="section-text section-text--left" style="margin-top: -0.4rem; margin-bottom: 1.6rem;">
                    Say goodbye to financial friction and hello to new opportunities, more revenue, and unstoppable
                    momentum.
                </p>
                <!-- Interactive challenge cards -->
                <div class="card-grid card-grid--3">
                    <div v-for="challenge in challenges" :key="challenge.id" class="info-card challenge-card"
                        :class="{ 'challenge-card--active': challenge.id === activeChallengeId }"
                        @click="activeChallengeId = challenge.id">
                        <h3 class="info-card-title">{{ challenge.title }}</h3>
                        <span class="challenge-chip">
                            {{ challenge.chipLabel }}
                        </span>
                        <span class="challenge-hint">Click to learn more</span>
                    </div>
                </div>

                <!-- Detail panel for selected challenge -->
                <div v-if="activeChallenge" class="challenge-detail">
                    <h3 class="challenge-detail-title">
                        {{ activeChallenge.title }} – why it matters
                    </h3>
                    <p class="challenge-detail-text">
                        {{ activeChallenge.detail }}
                    </p>
                </div>
            </div>
        </section>

        <!-- How it works (styled like GCI Overview) -->
        <section id="how-it-works" class="section">
            <div class="section-inner">
                <h2 class="section-title section-title--left">How it works</h2>
                <p class="section-text section-text--left">
                    A unified platform that supports you from setup to day-to-day operations.
                </p>

                <div class="card-grid card-grid--4">
                    <div v-for="item in howItems" :key="item.title" class="info-card overview-card">
                        <div class="overview-icon">
                            <i :class="item.icon" aria-hidden="true"></i>
                        </div>

                        <h3 class="info-card-title">{{ item.title }}</h3>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section id="features" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title section-title--left">Features</h2>
                <p class="section-text section-text--left">
                    Powerful capabilities designed to help you operate globally with confidence.
                </p>

                <div class="feature-grid">
                    <div v-for="(tab, index) in featureTabs" :key="tab.id" class="feature-slide-card">
                        <!-- Top (always visible) -->
                        <div class="feature-slide-top">
                            <div class="feature-slide-icon">
                                {{ (index + 1).toString().padStart(2, '0') }}
                            </div>

                            <h3 class="feature-slide-title">{{ tab.label }}</h3>
                            <p class="feature-slide-text">{{ tab.heading }}</p>
                        </div>

                        <!-- Bottom (slides down) -->
                        <div class="feature-slide-bottom">
                            <div v-for="card in tab.cards" :key="card.subtitle" class="feature-slide-item">
                                <strong>{{ card.subtitle }}</strong>
                                <p>{{ card.text }}</p>
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
                            placeholder="e.g. Global payouts, FX optimisation, local accounts in new markets..."></textarea>
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
    router.push('/') // same pattern as landing page
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

const openFeatureId = ref(null)

const toggleFeature = (id) => {
    openFeatureId.value = openFeatureId.value === id ? null : id
}

// --- Interactive Challenges ---
const challenges = ref([
    {
        id: 'fx',
        title: 'High FX Costs',
        summary:
            'Unnecessary losses on global payments due to weak FX rates and hidden costs eat directly into your margins and slow expansion.',
        chipLabel: 'Finance',
        detail:
            'Unnecessary losses on global payments due to weak FX rates and hidden costs.'
    },
    {
        id: 'transfers',
        title: 'Slow Transfers',
        summary:
            'Delayed international transfers affect cash flow, disrupt operational rhythm, and make it harder to move at the speed of your business.',
        chipLabel: 'Cash flow',
        detail:
            'Delayed international transfers affecting cash flow and operational rhythm.'
    },
    {
        id: 'reconciliation',
        title: 'Complex Reconciliation',
        summary:
            'Multiple bank accounts across markets create manual work, errors, and reconciliation headaches for your finance and operations teams.',
        chipLabel: 'Operations',
        detail:
            'Multiple bank accounts across markets create manual work, errors, and reconciliation headaches.'
    },
    {
        id: 'local-presence',
        title: 'Limited Local Presence',
        summary:
            'Without local payment capabilities, entering new markets becomes harder and weakens customer confidence, making global growth more expensive.',
        chipLabel: 'Market entry',
        detail:
            'Without local payment capabilities, entering new markets becomes harder and weakens customer confidence.'
    }
])

const activeChallengeId = ref(challenges.value[0].id)

const activeChallenge = computed(() =>
    challenges.value.find((c) => c.id === activeChallengeId.value)
)

const howItems = [
    {
        icon: 'fa-solid fa-globe',
        category: 'Global finances',
        title: 'Simplify Global Finances',
        text:
            'Use a single platform equipped with everything you need to manage, simplify, and scale your international operations.'
    },
    {
        icon: 'fa-solid fa-sliders',
        category: 'Control & Pricing',
        title: 'Better Rates, Better Control',
        text:
            'Accept payments in local currencies, make fast transfers, and protect margins with interbank FX rates and zero hidden fees.'
    },
    {
        icon: 'fa-solid fa-wand-magic-sparkles',
        category: 'Workflows',
        title: 'AI-Powered Workflows',
        text:
            'Remove repetitive manual tasks so your team saves hours each week on bookkeeping, approvals, and reconciliation.'
    },
    {
        icon: 'fa-solid fa-bolt',
        category: 'Operations',
        title: 'Seamless Global Operations',
        text:
            'Access local payment networks worldwide so you can open accounts and move money at high speed, operating like a local anywhere you go.'
    }
]


const featureTabs = ref([
    {
        id: 'fx',
        label: 'FX & Conversions',
        heading: 'Competitive FX Rates & Real-time Conversions',
        cards: [
            {
                subtitle: 'Maximize your margins',
                text:
                    'Access competitive interbank FX rates to minimize conversion losses and protect profitability across every transaction.'
            },
            {
                subtitle: 'Instant control',
                text:
                    'Convert currencies in real time within your account, giving you full control over your funds and helping you hedge against volatility.'
            }
        ]
    },
    {
        id: 'payments',
        label: 'Global Payments',
        heading: 'Seamless global payments',
        cards: [
            {
                subtitle: 'Faster settlements',
                text:
                    'Receive funds quickly from global marketplaces and partners, improving your cash flow and keeping your operations moving smoothly.'
            },
            {
                subtitle: 'Simplified reconciliation',
                text:
                    'All collection flows into a single dashboard, making tracking, reporting, and reconciliation effortless for your finance team.'
            }
        ]
    },
    {
        id: 'local-accounts',
        label: 'Local Accounts',
        heading: 'Local Accounts in Key Markets',
        cards: [
            {
                subtitle: 'Receive like a local',
                text:
                    'Collect payments as if you were a domestic business—strengthening customer trust and removing barriers to market entry.'
            },
            {
                subtitle: 'Expand your reach',
                text:
                    'Establish a local presence globally without needing physical banking infrastructure in every country, so you can scale faster with less overhead.'
            }
        ]
    }
])

</script>

<style scoped>
.gmc-page {
    min-height: 100vh;
    width: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #0f172a;
    background: #f3f4fd;
}

/* Reuse hero feel from landing */
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
    max-width: 1000px;
    margin: 1.6rem auto 0;
}

.card-grid--2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card-grid--3 {
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
        border-color 0.15s ease,
        background 0.15s ease;
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

/* Interactive challenge cards */
.challenge-card {
    position: relative;
    cursor: pointer;
    overflow: hidden;
}

.challenge-chip {
    display: block;
    /* was inline */
    margin-top: 0.8rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: #eff6ff;
    color: #1d4ed8;
    padding: 0.18rem 0.65rem;
    border-radius: 999px;
    width: fit-content;
    /* keeps pill tight */
}

.challenge-hint {
    display: block;
    /* force on its own line */
    margin-top: 0.4rem;
    font-size: 0.75rem;
    color: #6b7280;
}


.challenge-card--active {
    border-color: #2563eb;
    background: radial-gradient(circle at top left, #e0ecff, #ffffff 60%);
    box-shadow: 0 18px 40px rgba(37, 99, 235, 0.45);
    transform: translateY(-4px);
}

/* Challenge detail panel */
.challenge-detail {
    max-width: 1000px;
    margin: 1.8rem auto 0;
    padding: 1.3rem 1.4rem;
    border-radius: 1rem;
    background: #eef2ff;
    border: 1px solid #c7d2fe;
}

.challenge-detail-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #111827;
}

.challenge-detail-text {
    font-size: 0.9rem;
    color: #4b5563;
}

/* Features */
.feature-group {
    margin-top: 2.2rem;
}

.feature-heading {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    text-align: center;
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
@media (max-width: 1024px) {
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
}

/* How it works – highlight cards */
.how-grid {
    max-width: 1100px;
    margin: 2rem auto 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.2rem;
}

.how-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.4rem 1.3rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 14px 32px rgba(148, 163, 184, 0.3);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    transition:
        transform 0.15s ease,
        box-shadow 0.15s ease,
        border-color 0.15s ease;
}

.how-card:hover {
    transform: translateY(-4px);
    border-color: #c7d2fe;
    box-shadow: 0 20px 42px rgba(129, 140, 248, 0.45);
}

.how-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.18rem 0.6rem;
    border-radius: 999px;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: #eef2ff;
    color: #4f46e5;
    width: fit-content;
}

.how-card-title {
    font-size: 0.98rem;
    font-weight: 600;
    color: #111827;
}

.how-card-text {
    font-size: 0.88rem;
    color: #4b5563;
    line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
    .how-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .how-grid {
        grid-template-columns: 1fr;
    }
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

/* Feature content panel */
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

@media (max-width: 960px) {
    .feature-tabs {
        flex-wrap: wrap;
        max-width: 100%;
    }
}

/* KEY FEATURES – upgraded modern cards */
.feature-panel .info-card {
    border-radius: 1.2rem;
    padding: 1.5rem 1.4rem;
    background: rgba(255, 255, 255, 0.95);
    /* soft white glassy */
    border: 1px solid rgba(209, 213, 219, 0.75);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.15);
    backdrop-filter: blur(10px);

    display: flex;
    flex-direction: column;
    gap: 0.55rem;

    transition:
        transform 0.16s ease,
        box-shadow 0.16s ease,
        border-color 0.16s ease,
        background 0.16s ease;
}

.feature-panel .info-card:hover {
    transform: translateY(-4px);
    background: #ffffff;
    border-color: rgba(129, 140, 248, 0.8);
    box-shadow: 0 20px 48px rgba(79, 70, 229, 0.25);
}

/* Title inside each feature card */
.feature-panel .info-card-subtitle {
    font-size: 0.98rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
    color: #1e293b;
    /* very readable dark navy */
}

/* Body text */
.feature-panel .info-card p {
    font-size: 0.9rem;
    color: #4b5563;
    /* soft gray, readable */
    line-height: 1.5;
}

/* === Features section – same layout as Global Card Issuance === */
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

.feature-list-item--active .feature-list-label {
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

/* soft spotlight + arc */
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

/* pill + heading */
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

.feature-detail-title {
    position: relative;
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
}

/* inner feature cards – light boxes */
.feature-detail-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
}

.feature-detail-mini-card {
    border-radius: 1.3rem;
    padding: 1.15rem 1.3rem;
    background: rgba(249, 250, 251, 0.96);
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
}

.feature-detail-mini-text {
    font-size: 0.86rem;
    color: #4b5563;
    line-height: 1.5;
}

/* responsive */
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

/* Overview-style cards (reuse from GCI) */
.overview-card {
    position: relative;
    padding-top: 1.6rem;
    padding-bottom: 1.4rem;
    background: radial-gradient(circle at top left, #eef2ff, #ffffff 60%);
    border: 1px solid #dbeafe;
    box-shadow: 0 18px 42px rgba(129, 140, 248, 0.3);
    overflow: hidden;
    min-height: 160px;
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
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
}

.overview-card .info-card-title {
    margin-bottom: 0.35rem;
}

.overview-card p {
    font-size: 0.85rem;
    line-height: 1.5;
}

.overview-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 52px rgba(79, 70, 229, 0.5);
    border-color: #818cf8;
}

.card-grid--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

@media (max-width: 1200px) {
    .card-grid--4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .card-grid--4 {
        grid-template-columns: 1fr;
    }
}

/* Stack container */
.gmc-account-stack {
    position: relative;
    width: 380px;
    height: 260px;
}

/* Base account card */
.gmc-account-card {
    position: absolute;
    border-radius: 1.4rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 24px 56px rgba(15, 23, 42, 0.25);
    padding: 1.3rem 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Primary account */
.gmc-account-card--primary {
    width: 300px;
    height: 185px;
    z-index: 3;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
}

/* Header */
.gmc-account-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.gmc-brand {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.gmc-badge {
    font-size: 0.65rem;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.2);
}

/* Balance */
.gmc-balance {
    margin-top: auto;
}

.gmc-currency {
    font-size: 0.75rem;
    opacity: 0.9;
}

.gmc-amount {
    font-size: 1.45rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

/* Meta */
.gmc-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.65rem;
    opacity: 0.85;
}

/* Secondary cards */
.gmc-account-card--secondary {
    width: 220px;
    height: 90px;
    background: #ffffff;
    z-index: 2;
    top: 110px;
    left: 130px;
    padding: 0.9rem 1rem;
}

.gmc-account-card--alt {
    top: 160px;
    left: 40px;
    z-index: 1;
    opacity: 0.95;
}

/* Secondary text */
.gmc-account-card--secondary .gmc-currency {
    font-size: 0.7rem;
    color: #6b7280;
}

.gmc-account-card--secondary .gmc-amount {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
}

/* Hover polish */
.gmc-account-stack:hover .gmc-account-card--primary {
    transform: translateY(-6px);
    box-shadow: 0 32px 70px rgba(37, 99, 235, 0.45);
}

.gmc-account-stack:hover .gmc-account-card--secondary {
    transform: translateY(-3px);
}

/* Wrapper */
.feature-accordion {
    border-radius: 1rem;
    overflow: hidden;
}

/* Hidden by default */
.feature-expand {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 1.2rem;
    background: #f9fafb;
    border-left: 3px solid #6366f1;
    transition:
        max-height 0.4s ease,
        opacity 0.25s ease,
        padding 0.25s ease;
}

/* Reveal on hover */
.feature-accordion:hover .feature-expand {
    max-height: 500px;
    opacity: 1;
    padding: 1rem 1.2rem 1.4rem;
}

/* Heading */
.feature-expand-title {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    color: #1e293b;
}

/* Grid inside */
.feature-expand-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
}

/* Mini cards */
.feature-expand-card {
    background: #ffffff;
    border-radius: 0.9rem;
    padding: 0.9rem 1rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 10px 24px rgba(148, 163, 184, 0.25);
}

.feature-expand-card strong {
    display: block;
    font-size: 0.85rem;
    color: #111827;
    margin-bottom: 0.25rem;
}

.feature-expand-card p {
    font-size: 0.82rem;
    color: #4b5563;
    line-height: 1.45;
}

/* Mobile: stack cards */
@media (max-width: 640px) {
    .feature-expand-grid {
        grid-template-columns: 1fr;
    }
}

/* Feature grid */
.feature-grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.6rem;
}

/* Feature card */
.feature-card {
    background: #ffffff;
    border-radius: 1.4rem;
    padding: 1.4rem 1.4rem 1.2rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 16px 36px rgba(148, 163, 184, 0.3);
    cursor: pointer;
    transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.18s ease;
}

/* Header */
.feature-card-header {
    display: flex;
    align-items: center;
    gap: 0.9rem;
}

.feature-card-number {
    width: 38px;
    height: 38px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
}

.feature-card-title {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
}

/* Expandable content (hidden) */
.feature-expand {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    margin-top: 0;
    transition:
        max-height 0.4s ease,
        opacity 0.25s ease,
        margin-top 0.25s ease;
}

/* Reveal on hover */
.feature-card:hover .feature-expand {
    max-height: 420px;
    opacity: 1;
    margin-top: 1rem;
}

/* Inner content */
.feature-expand-heading {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.7rem;
}

.feature-expand-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
}

.feature-expand-item {
    background: #f9fafb;
    border-radius: 0.9rem;
    padding: 0.9rem 1rem;
    border: 1px solid #e5e7eb;
}

.feature-expand-item strong {
    display: block;
    font-size: 0.85rem;
    color: #111827;
    margin-bottom: 0.25rem;
}

.feature-expand-item p {
    font-size: 0.82rem;
    color: #4b5563;
    line-height: 1.45;
}

/* Hover polish */
.feature-card:hover {
    transform: translateY(-5px);
    border-color: #818cf8;
    box-shadow: 0 22px 52px rgba(79, 70, 229, 0.45);
}

/* Responsive */
@media (max-width: 1024px) {
    .feature-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .feature-grid {
        grid-template-columns: 1fr;
    }

    .feature-expand-grid {
        grid-template-columns: 1fr;
    }
}

/* the container that holds the 3 feature cards */
.feature-grid {
    align-items: start;
    /* key line */
    grid-auto-rows: min-content;
    /* prevents forced equal row height */
}

.feature-card {
    align-self: start;
    /* extra safety */
    height: fit-content;
    /* optional */
}

.feature-grid {
    align-items: flex-start;
}

/* ===== BENEFITS / FEATURES (Global Payout style) ===== */

.feature-grid {
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.8rem;
}

/* Card */
.benefit-card {
    position: relative;
    background: #ffffff;
    border-radius: 1.4rem;
    padding: 1.6rem 1.6rem 1.8rem;
    min-height: 220px;
    border: 1px solid #eef2ff;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.25);
    overflow: hidden;
    transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.18s ease;
}

.benefit-card:hover {
    transform: translateY(-6px);
    border-color: #c7d2fe;
    box-shadow: 0 26px 60px rgba(79, 70, 229, 0.35);
}

/* Icon bubble */
.benefit-icon {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 1rem;
}

/* Text */
.benefit-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.35rem;
}

.benefit-text {
    font-size: 0.9rem;
    color: #4b5563;
    line-height: 1.55;
}

/* ===== Hover slide-up panel ===== */

.benefit-hover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.95),
            #ffffff);

    padding: 1.2rem 1.4rem 1.4rem;
    border-top: 1px solid #e5e7eb;

    transform: translateY(100%);
    opacity: 0;

    transition:
        transform 0.35s ease,
        opacity 0.25s ease;
}

.benefit-card:hover .benefit-hover {
    transform: translateY(0);
    opacity: 1;
}

/* Hover items */
.benefit-hover-item {
    margin-bottom: 0.75rem;
}

.benefit-hover-item strong {
    display: block;
    font-size: 0.88rem;
    color: #111827;
    margin-bottom: 0.15rem;
}

.benefit-hover-item p {
    font-size: 0.82rem;
    color: #4b5563;
    line-height: 1.45;
}

/* Responsive */
@media (max-width: 1024px) {
    .feature-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .feature-grid {
        grid-template-columns: 1fr;
    }
}

/* ===== Sliding Feature Cards (expand downward) ===== */

.feature-grid {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.8rem;
  align-items: start;
}

/* Card */
.feature-slide-card {
  background: #ffffff;
  border-radius: 1.4rem;
  border: 1px solid #eef2ff;
  box-shadow: 0 18px 40px rgba(148, 163, 184, 0.25);
  overflow: hidden;
  transition:
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.feature-slide-card:hover {
  border-color: #c7d2fe;
  box-shadow: 0 26px 60px rgba(79, 70, 229, 0.35);
}

/* Top section */
.feature-slide-top {
  padding: 1.6rem;
}

/* Icon */
.feature-slide-icon {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

/* Text */
.feature-slide-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.35rem;
}

.feature-slide-text {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.55;
}

/* Bottom sliding section */
.feature-slide-bottom {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0 1.6rem;
  border-top: 1px solid #e5e7eb;

  transition:
    max-height 0.45s ease,
    opacity 0.25s ease,
    padding 0.25s ease;
}

/* Expand on hover */
.feature-slide-card:hover .feature-slide-bottom {
  max-height: 400px; /* adjust if needed */
  opacity: 1;
  padding: 1.2rem 1.6rem 1.6rem;
}

/* Inner items */
.feature-slide-item + .feature-slide-item {
  margin-top: 0.9rem;
}

.feature-slide-item strong {
  display: block;
  font-size: 0.88rem;
  color: #111827;
  margin-bottom: 0.15rem;
}

.feature-slide-item p {
  margin: 0;
  font-size: 0.82rem;
  color: #4b5563;
  line-height: 1.45;
}

/* Responsive */
@media (max-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}

</style>

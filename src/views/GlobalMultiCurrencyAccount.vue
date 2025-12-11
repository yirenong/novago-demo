<template>
    <div class="gmc-page">
        <!-- NavBar -->
        <NavBar :is-logged-in="isLoggedIn" @scrollTo="scrollToSection" @logout="handleLogout" />

        <!-- Hero -->
        <section class="hero hero--gmc">
            <div class="hero-inner">
                <div class="hero-left">
                    <p class="hero-pill">NovaGO • Global Multi Currency Account</p>
                    <h1 class="hero-title-text">Unlock growth with global accounts</h1>
                    <p class="hero-tagline">
                        Say goodbye to financial friction and hello to new opportunities, more revenue, and unstoppable
                        momentum.
                    </p>
                    <p class="hero-subtitle">
                        Our Multi Currency Accounts aim to unlock a new level of growth for you by simplifying global
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
                            <div class="hero-art-badge">Multi-currency balances</div>
                        </div>

                        <div class="hero-art-card hero-art-card--two">
                            <div class="hero-art-pill"></div>
                            <div class="hero-art-meta">
                                <span>FX savings this month</span>
                                <span class="hero-art-meta-value">+2.4% margin protected</span>
                            </div>
                        </div>

                        <div class="hero-art-glow hero-art-glow--a"></div>
                        <div class="hero-art-glow hero-art-glow--b"></div>
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

        <!-- How it works -->
        <section id="how-it-works" class="section">
            <div class="section-inner">
                <h2 class="section-title section-title--left">How it works</h2>
                <p class="section-text section-text--left">
                    A unified platform that supports you from setup to day-to-day operations.
                </p>

                <div class="how-grid">
                    <div v-for="item in howItems" :key="item.title" class="how-card">
                        <span class="how-pill">{{ item.category }}</span>
                        <h3 class="how-card-title">{{ item.title }}</h3>
                        <p class="how-card-text">
                            {{ item.text }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Features -->
        <section id="features" class="section section-muted">
            <div class="section-inner">
                <h2 class="section-title section-title--left">Key Features</h2>

                <!-- Tabs -->
                <div class="feature-tabs">
                    <button v-for="tab in featureTabs" :key="tab.id" type="button" class="feature-tab"
                        :class="{ 'feature-tab--active': tab.id === activeFeatureTab }"
                        @click="activeFeatureTab = tab.id">
                        {{ tab.label }}
                    </button>
                </div>

                <!-- Active panel -->
                <div v-if="activeFeature" class="feature-panel">
                    <h3 class="feature-heading">
                        {{ activeFeature.heading }}
                    </h3>

                    <div class="card-grid card-grid--2">
                        <div v-for="card in activeFeature.cards" :key="card.subtitle" class="info-card">
                            <h4 class="info-card-subtitle">{{ card.subtitle }}</h4>
                            <p>{{ card.text }}</p>
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

// --- Interactive Challenges ---
const challenges = ref([
    {
        id: 'fx',
        title: 'High FX Costs',
        summary:
            'Unnecessary losses on global payments due to weak FX rates and hidden costs eat directly into your margins and slow expansion.',
        chipLabel: 'Finance',
        detail:
            'When every cross-border payment leaks margin, your cost of expansion increases. NovaGO helps you access competitive interbank rates and remove hidden charges so more of every payout reaches the destination.'
    },
    {
        id: 'transfers',
        title: 'Slow Transfers',
        summary:
            'Delayed international transfers affect cash flow, disrupt operational rhythm, and make it harder to move at the speed of your business.',
        chipLabel: 'Cash flow',
        detail:
            'Waiting days for funds to clear means delayed inventory, delayed payroll, and delayed growth. With faster settlement rails, you keep your operating rhythm tight and predictable.'
    },
    {
        id: 'reconciliation',
        title: 'Complex Reconciliation',
        summary:
            'Multiple bank accounts across markets create manual work, errors, and reconciliation headaches for your finance and operations teams.',
        chipLabel: 'Operations',
        detail:
            'Teams end up in spreadsheets, manually matching payments and payouts. NovaGO centralises flows into one dashboard so reconciliation becomes a daily habit instead of a monthly fire-fight.'
    },
    {
        id: 'local-presence',
        title: 'Limited Local Presence',
        summary:
            'Without local payment capabilities, entering new markets becomes harder and weakens customer confidence, making global growth more expensive.',
        chipLabel: 'Market entry',
        detail:
            'Customers prefer to pay like a local. Local accounts and rails help you feel native on day one, improving trust, reducing friction, and opening doors in each new market you enter.'
    }
])

const activeChallengeId = ref(challenges.value[0].id)

const activeChallenge = computed(() =>
    challenges.value.find((c) => c.id === activeChallengeId.value)
)

const howItems = [
    {
        category: 'Global finances',
        title: 'Simplify global finances',
        text:
            'Use a single platform equipped with everything you need to manage, simplify, and scale your international operations.'
    },
    {
        category: 'Control & pricing',
        title: 'Better rates, better control',
        text:
            'Accept payments in local currencies, make fast transfers, and protect margins with interbank FX rates and zero hidden fees.'
    },
    {
        category: 'Workflows',
        title: 'AI-powered workflows',
        text:
            'Remove repetitive manual tasks so your team saves hours each week on bookkeeping, approvals, and reconciliation.'
    },
    {
        category: 'Operations',
        title: 'Seamless global operations',
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

const activeFeatureTab = ref(featureTabs.value[0].id)

const activeFeature = computed(() =>
    featureTabs.value.find((t) => t.id === activeFeatureTab.value)
)

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
</style>

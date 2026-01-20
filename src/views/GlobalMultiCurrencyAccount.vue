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
                        global finances,
                        protecting your margins, and helping you operate like a local in every market.
                    </p>

                    <div class="hero-actions">
                        <button class="btn-primary" @click="scrollToSection('contact')">Talk to our team</button>
                        <button class="btn-secondary" @click="scrollToSection('features')">View features</button>
                    </div>

                    <!-- Quick navigation buttons (right below hero actions) -->
                    <div class="hero-quicknav" aria-label="Quick navigation">
                        <button class="hero-quicknav-btn" type="button" @click="scrollToSection('challenges')">
                            Challenges
                        </button>
                        <button class="hero-quicknav-btn" type="button" @click="scrollToSection('how-it-works')">
                            How it works
                        </button>
                        <button class="hero-quicknav-btn" type="button" @click="scrollToSection('features')">
                            Features
                        </button>
                        <button class="hero-quicknav-btn" type="button" @click="scrollToSection('contact')">
                            Contact
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
                <h2 class="section-title section-title--left">Challenges of Global Businesses</h2>
                <p class="section-text section-text--left" style="margin-top: -0.4rem; margin-bottom: 1.6rem;">
                    Say goodbye to financial friction and hello to new opportunities, more revenue, and unstoppable
                    momentum.
                </p>

                <div class="card-grid card-grid--3">
                    <div v-for="challenge in challenges" :key="challenge.id" class="info-card challenge-card"
                        :class="{ 'challenge-card--active': challenge.id === activeChallengeId }"
                        @click="activeChallengeId = challenge.id">
                        <h3 class="info-card-title">{{ challenge.title }}</h3>
                        <span class="challenge-chip">{{ challenge.chipLabel }}</span>
                        <span class="challenge-hint">Click to learn more</span>
                    </div>
                </div>

                <div v-if="activeChallenge" class="challenge-detail">
                    <h3 class="challenge-detail-title">{{ activeChallenge.title }} – why it matters</h3>
                    <p class="challenge-detail-text">{{ activeChallenge.detail }}</p>
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
                        <div class="feature-slide-top">
                            <div class="feature-slide-icon">
                                {{ (index + 1).toString().padStart(2, '0') }}
                            </div>

                            <h3 class="feature-slide-title">{{ tab.label }}</h3>
                            <p class="feature-slide-text">{{ tab.heading }}</p>
                        </div>

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

        <!-- Floating actions: Scroll-to-top + WhatsApp (bottom-right) -->
        <div class="fab-stack" aria-label="Quick actions">
            <!-- Scroll to top (above WhatsApp) -->
            <button type="button" class="fab fab--top" aria-label="Scroll to top"
                :class="{ 'fab--show': showScrollTop }" @click="scrollToTop">
                ↑
            </button>

            <!-- WhatsApp (bottom-right) -->
            <a class="fab fab--whatsapp" aria-label="Chat with us on WhatsApp" href="https://wa.me/6591234567"
                target="_blank" rel="noopener">
                <img :src="whatsappIcon" alt="" class="fab-whatsapp-img" />
            </a>

        </div>
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

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const fakeSubmit = () => {
    alert('Demo request submitted. (Placeholder action)')
}

/** Show scroll-to-top only after user scrolls a bit */
const showScrollTop = ref(false)
const onScroll = () => {
    showScrollTop.value = window.scrollY > 500
}

onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})

// --- Interactive Challenges ---
const challenges = ref([
    {
        id: 'fx',
        title: 'High FX Costs',
        chipLabel: 'Finance',
        detail: 'Unnecessary losses on global payments due to weak FX rates and hidden costs.'
    },
    {
        id: 'transfers',
        title: 'Slow Transfers',
        chipLabel: 'Cash flow',
        detail: 'Delayed international transfers affecting cash flow and operational rhythm.'
    },
    {
        id: 'reconciliation',
        title: 'Security and fraud',
        chipLabel: 'Security',
        detail: 'Managing payments across platforms and borders can increase the risk of unauthorised access, fraud and data leaks.'
    },
    {
        id: 'local-presence',
        title: 'Limited Local Presence',
        chipLabel: 'Market entry',
        detail: 'Without local payment capabilities, entering new markets becomes harder and weakens customer confidence.'
    }
])

const activeChallengeId = ref(challenges.value[0].id)

const activeChallenge = computed(() =>
    challenges.value.find((c) => c.id === activeChallengeId.value)
)

const howItems = [
    {
        icon: 'fa-solid fa-globe',
        title: 'Skip the extra bank charges',
        text:
            'No account opening fees, no monthly maintenance charges and no minimum transaction requirements.'
    },
    {
        icon: 'fa-solid fa-sliders',
        title: 'Better Rates, Better Control',
        text:
            'Accept payments in local currencies, make fast transfers, and protect margins with interbank FX rates and zero hidden fees.'
    },
    {
        icon: 'fa-solid fa-wand-magic-sparkles',
        title: 'Sleep easy, your funds are protected',
        text: 'Your money is secured with end to end encryption and bank level security.'
    },
    {
        icon: 'fa-solid fa-bolt',
        title: 'Seamless Global Operations',
        text:
            'Access local payment networks worldwide. From opening accounts to moving money at high speed, NovaGo helps you operate like a local business anywhere you go.'
    }
]

const featureTabs = ref([
    {
        id: 'fx',
        label: 'FX & Conversions',
        heading: 'Competitive FX Rates & Real-time Conversions',
        cards: [
            {
                subtitle: 'Keep more of every transaction',
                text:
                    'Access competitive interbank FX rates to minimize conversion losses and protect profitability.'
            },
            {
                subtitle: 'Stay in control, instantly',
                text:
                    'Convert currencies in real time within your account, providing you full control over your funds and hedging against volatility.'
            }
        ]
    },
    {
        id: 'payments',
        label: 'Global Payments',
        heading: 'Seamless global payments',
        cards: [
            {
                subtitle: 'Get paid faster',
                text:
                    'Receive funds quickly from global marketplaces.'
            },
            {
                subtitle: 'Keep everything tidy',
                text:
                    'All collection flows into a single dashboard, making tracking and reconciliation effortless.'
            }
        ]
    },
    {
        id: 'local-accounts',
        label: 'Local Accounts',
        heading: 'Local Accounts in Key Markets',
        cards: [
            {
                subtitle: 'Get paid like a local',
                text:
                    'Collect payments as a domestic business would, building trust and removing barriers to entry.'
            },
            {
                subtitle: 'Grow without the extra setup',
                text:
                    'Establish a local presence globally without needing physical banking infrastructure in every country.'
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
    margin-bottom: 1.8rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.7rem;
}

/* Quick nav (below hero actions) */
.hero-quicknav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 0.7rem;
}

.hero-quicknav-btn {
    border: 1px solid #dbe3ff;
    background: rgba(255, 255, 255, 0.75);
    color: #1d4ed8;
    padding: 0.38rem 0.85rem;
    border-radius: 999px;
    font-size: 0.82rem;
    cursor: pointer;
    transition: transform 0.12s ease, background 0.12s ease, box-shadow 0.12s ease;
}

.hero-quicknav-btn:hover {
    transform: translateY(-1px);
    background: #ffffff;
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.18);
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
    max-width: 1000px;
    margin: 1.6rem auto 0;
}

.card-grid--3 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, background 0.15s ease;
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

.info-card p {
    font-size: 0.88rem;
    color: #4b5563;
}

/* Challenge cards */
.challenge-card {
    position: relative;
    cursor: pointer;
    overflow: hidden;
}

.challenge-chip {
    display: block;
    margin-top: 0.8rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: #eff6ff;
    color: #1d4ed8;
    padding: 0.18rem 0.65rem;
    border-radius: 999px;
    width: fit-content;
}

.challenge-hint {
    display: block;
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

/* Challenge detail */
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

/* Overview cards */
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

.overview-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 52px rgba(79, 70, 229, 0.5);
    border-color: #818cf8;
}

/* Account stack */
.gmc-account-stack {
    position: relative;
    width: 380px;
    height: 260px;
}

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

.gmc-account-card--primary {
    width: 300px;
    height: 185px;
    z-index: 3;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
}

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

.gmc-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.65rem;
    opacity: 0.85;
}

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

.gmc-account-card--secondary .gmc-currency {
    font-size: 0.7rem;
    color: #6b7280;
}

.gmc-account-card--secondary .gmc-amount {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
}

.gmc-account-stack:hover .gmc-account-card--primary {
    transform: translateY(-6px);
    box-shadow: 0 32px 70px rgba(37, 99, 235, 0.45);
}

.gmc-account-stack:hover .gmc-account-card--secondary {
    transform: translateY(-3px);
}

/* Features sliding cards */
.feature-grid {
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.8rem;
    align-items: start;
}

.feature-slide-card {
    background: #ffffff;
    border-radius: 1.4rem;
    border: 1px solid #eef2ff;
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.25);
    overflow: hidden;
    transition: box-shadow 0.18s ease, border-color 0.18s ease;
}

.feature-slide-card:hover {
    border-color: #c7d2fe;
    box-shadow: 0 26px 60px rgba(79, 70, 229, 0.35);
}

.feature-slide-top {
    padding: 1.6rem;
}

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

.feature-slide-bottom {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 1.6rem;
    border-top: 1px solid #e5e7eb;
    transition: max-height 0.45s ease, opacity 0.25s ease, padding 0.25s ease;
}

.feature-slide-card:hover .feature-slide-bottom {
    max-height: 400px;
    opacity: 1;
    padding: 1.2rem 1.6rem 1.6rem;
}

.feature-slide-item+.feature-slide-item {
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

/* Floating action buttons (standard: bottom-right stack) */
.fab-stack {
    position: fixed;
    right: 18px;
    bottom: 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2000;
}

/* Shared FAB styles */
.fab {
    width: 54px;
    height: 54px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    user-select: none;
}

/* Scroll-to-top: hidden until scroll */
.fab--top {
    background: #ffffff;
    color: #111827;
    opacity: 0;
    pointer-events: none;
    transform: translateY(6px);
    transition: opacity 0.18s ease, transform 0.18s ease;
}

.fab--top.fab--show {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

/* WhatsApp */
.fab--whatsapp {
    background: #25d366;
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 0.02em;
}

/* Responsive */
@media (max-width: 1024px) {
    .card-grid--3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .card-grid--4 {
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

    .form-row {
        flex-direction: column;
    }

    .footer-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .fab-stack {
        right: 14px;
        bottom: 14px;
    }

    .fab {
        width: 48px;
        height: 48px;
    }
}

@media (max-width: 640px) {
    .card-grid--4 {
        grid-template-columns: 1fr;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }
}

.fab-whatsapp-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}
</style>

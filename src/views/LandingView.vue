<template>
    <div class="landing">
        <!-- Modular nav -->
        <NavBar :is-logged-in="isLoggedIn" @scrollTo="scrollToSection" @scrollOperate="scrollToOperateAndOpen"
            @logout="handleLogout" />


        <!-- =========================
         SECTION 1: HERO
    ========================== -->
        <section class="hero hero--ref" id="hero">
            <div class="shape shape-a" aria-hidden="true"></div>
            <div class="shape shape-b" aria-hidden="true"></div>

            <div class="hero-inner hero-inner--ref">
                <!-- Left -->
                <div class="hero-left hero-left--ref">
                    <p class="hero-pill hero-pill--ref">
                        <span class="hero-pill-icon">
                            <i class="fas fa-bolt fas-ico"></i>
                        </span>
                        Unified operations + banking
                    </p>

                    <h2 class="hero-headline">
                        A Single, Unified<br />
                        Platform
                    </h2>

                    <p class="hero-lede">
                        <span class="hero-lede-sub">
                            We custom solutions for you to operate, bank, and get rewarded all in one platform.
                        </span>
                    </p>

                    <div class="hero-actions hero-actions--ref">
                        <button class="btn-primary btn-primary" @click="scrollToSection('contact')">
                            Book a demo <span class="btn-arrow">→</span>
                        </button>
                        <button class="btn-secondary btn-secondary--light" @click="scrollToSection('operate')">
                            See solutions
                        </button>
                    </div>

                    <!-- Small supporting glass card -->
                    <div class="hero-support-card hero-support-card--ref">
                        <p class="hero-support-title">One control centre</p>
                        <p class="hero-support-text">
                            Keep operations, business banking, and rewards in one place — so your team stays fast and
                            aligned.
                        </p>
                    </div>
                </div>

                <!-- Right: dashboard mock -->
                <div class="hero-right hero-right--ref" aria-hidden="true">
                    <div class="hero-dashboard">
                        <div class="hd-top">
                            <div>
                                <p class="hd-title">Dashboard</p>
                                <p class="hd-sub">Operations • Banking • Rewards</p>
                            </div>
                            <span class="hd-live">Live</span>
                        </div>

                        <div class="hd-card">
                            <div class="hd-card-header">
                                <span class="hd-icon">▦</span>
                                <p class="hd-card-title">Business Overview</p>
                            </div>

                            <div class="hd-metrics">
                                <div class="hd-metric">
                                    <p class="hd-metric-label">Bookings</p>
                                    <div class="hd-metric-line"></div>
                                </div>
                                <div class="hd-metric">
                                    <p class="hd-metric-label">Cash Flow</p>
                                    <div class="hd-metric-line"></div>
                                </div>
                                <div class="hd-metric">
                                    <p class="hd-metric-label">Payouts</p>
                                    <div class="hd-metric-line"></div>
                                </div>
                            </div>
                        </div>

                        <div class="hd-card">
                            <div class="hd-card-header">
                                <span class="hd-icon">⛭</span>
                                <p class="hd-card-title">Ops Shortcuts</p>
                            </div>

                            <div class="hd-shortcuts">
                                <div class="hd-shortcut">Collections</div>
                                <div class="hd-shortcut">Expenses</div>
                                <div class="hd-shortcut">Payroll</div>
                                <div class="hd-shortcut">CMS</div>
                            </div>
                        </div>

                        <div class="hd-card hd-card--rewards">
                            <div class="hd-rewards-head">
                                <p class="hd-card-title">Rewards</p>
                                <p class="hd-rewards-sub">Earn as you operate</p>
                            </div>
                            <div class="hd-rewards-body">
                                <p class="hd-metric-label">Points balance</p>
                                <div class="hd-metric-line hd-metric-line--wide"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- =========================
         SECTION 2: OPERATE + BANK
    ========================== -->
        <section id="operate" class="section section-muted">
            <div class="shape shape-c" aria-hidden="true"></div>

            <div class="section-inner">
                <header class="section-head">
                    <h2 class="section-title">Operate and Bank in One Control Centre</h2>
                    <p class="section-text">
                        NovaGo allows you to run your daily operations seamlessly from a single platform.
                    </p>
                </header>

                <div class="accordion">
                    <div class="acc-card">
                        <button class="acc-header" type="button" @click="toggleAcc('industry')">
                            <div class="acc-left">
                                <div class="acc-title">Unique to Transport, Travel, &amp; Automotive Industry</div>
                                <div class="acc-subtitle">
                                    Built for the realities of transport and travel operations, from fleet management to
                                    finance.
                                </div>
                            </div>
                            <span class="chev" :class="{ open: openAcc === 'industry' }">⌄</span>
                        </button>

                        <div class="acc-body" v-show="openAcc === 'industry'">
                            <div class="pill-grid">
                                <div v-for="(item, idx) in industryPoints" :key="`ind-${idx}`"
                                    class="pill pill--detail">
                                    <div class="pill-title">{{ item.title }}</div>
                                    <ul class="pill-points">
                                        <li v-for="(p, i) in item.points" :key="i">
                                            <span class="pill-tick">✓</span>
                                            <span>{{ p }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div class="mini-glass">
                                <div class="mini-title">Why this matters</div>
                                <div class="mini-text">
                                    Transport businesses run on tight margins and fast-moving operations. By connecting
                                    fleet, rentals, and payments in one system, you reduce friction, improve
                                    accountability, and strengthen cash flow control.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="acc-card">
                        <button class="acc-header" type="button" @click="toggleAcc('sme')">
                            <div class="acc-left">
                                <div class="acc-title">For SME</div>
                                <div class="acc-subtitle">
                                    Essential tools that simplify daily operations while giving SMEs better visibility
                                    and control over finances.
                                </div>
                            </div>
                            <span class="chev" :class="{ open: openAcc === 'sme' }">⌄</span>
                        </button>

                        <div class="acc-body" v-show="openAcc === 'sme'">
                            <div class="pill-grid">
                                <div v-for="(item, idx) in smePoints" :key="`sme-${idx}`" class="pill pill--detail">
                                    <div class="pill-title">{{ item.title }}</div>
                                    <ul class="pill-points">
                                        <li v-for="(p, i) in item.points" :key="i">
                                            <span class="pill-tick">✓</span>
                                            <span>{{ p }}</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>


                            <div class="mini-glass">
                                <div class="mini-title">Why this matters</div>
                                <div class="mini-text">
                                    Start with essential modules like payroll and expenses, and expand as your business
                                    needs evolve.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section-cta-row">
                    <button class="btn-primary" @click="scrollToSection('banking')">
                        Explore banking <span class="btn-arrow">→</span>
                    </button>
                    <button class="btn-secondary" @click="scrollToSection('contact')">Talk to us</button>
                </div>
            </div>
        </section>

        <!-- =========================
 SECTION 3: BUSINESS BANKING (CLEAN)
========================== -->
        <section id="banking" class="section banking-v3">
            <!-- background layers intentionally kept but made transparent via CSS -->
            <div class="banking-v3-bg" aria-hidden="true"></div>
            <div class="banking-v3-grid" aria-hidden="true"></div>

            <div class="section-inner">
                <!-- Header -->
                <header class="banking-v3-head">
                    <h2 class="section-title">Business Banking, Simplified</h2>
                    <p class="section-text">
                        With NovaGo, you can now transact with ease — and get rewarded as you bank.
                    </p>
                </header>

                <!-- Main shell -->
                <div class="banking-v3-shell">
                    <!-- Left: modules nav -->
                    <aside class="banking-v3-nav">
                        <div class="nav-top">
                            <div class="nav-title">Explore modules</div>
                            <div class="nav-sub">Pick one to view details</div>
                        </div>

                        <button v-for="f in bankingFeatures" :key="f.id" type="button" class="nav-item"
                            :class="{ active: activeBankFeature === f.id }" @click="activeBankFeature = f.id">
                            <div class="nav-ico">
                                <i :class="['fas', f.icon, 'fas-ico']" aria-hidden="true"></i>
                            </div>

                            <div class="nav-main">
                                <div class="nav-h">{{ f.title }}</div>
                                <div class="nav-t">{{ f.tag }}</div>
                            </div>

                            <div class="nav-arrow">→</div>
                        </button>

                        <div class="nav-footer">
                            <div class="footer-pill">
                                <span class="fp-dot"></span>
                                Simple, scalable, modular
                            </div>
                            <div class="footer-note">
                                Enable only what you need — expand anytime.
                            </div>
                        </div>
                    </aside>

                    <!-- Right: detail panel -->
                    <div class="banking-v3-show">
                        <div class="show-top">
                            <div class="show-badge">
                                <span class="sb-dot"></span>
                                Selected module
                            </div>

                            <button class="show-btn" type="button" @click="scrollToSection('contact')">
                                Book a demo →
                            </button>
                        </div>

                        <!-- Feature card -->
                        <div class="feature-card">
                            <div class="feature-head">
                                <div class="feature-ico">
                                    <i :class="['fas', activeFeature.icon, 'fas-ico']"></i>
                                </div>

                                <div>
                                    <div class="feature-title">{{ activeFeature.title }}</div>
                                    <div class="feature-sub">{{ activeFeature.sub }}</div>
                                </div>
                            </div>

                            <div class="keyword-row">
                                <div v-for="(k, idx) in activeFeature.keywords" :key="`kw-${idx}`" class="keyword-chip">
                                    <span class="kw-dot"></span>
                                    {{ k }}
                                </div>
                            </div>

                            <div class="feature-mini">
                                <div class="mini-block">
                                    <div class="mini-k">What you get</div>
                                    <div class="mini-v">{{ activeFeature.benefit }}</div>
                                </div>

                                <div class="mini-block">
                                    <div class="mini-k">Best for</div>
                                    <div class="mini-v">{{ activeFeature.bestFor }}</div>
                                </div>
                            </div>
                            <div class="feature-actions">
                                <button class="feature-link-btn" type="button"
                                    @click="router.push(activeFeature.route)">
                                    Learn more →
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- =========================
         SECTION 4: REWARDS
    ========================== -->
        <section id="rewards" class="section section-muted">
            <div class="shape shape-e" aria-hidden="true"></div>

            <div class="section-inner">
                <header class="section-head">
                    <h2 class="section-title">Turn Everyday Operations into Rewards</h2>
                    <p class="section-text">
                        Engage and retain employees and customers with benefits accumulated effortlessly while you
                        operate and bank.
                    </p>
                </header>

                <div class="rewards-grid">
                    <!-- Drivers -->
                    <div class="reward-box glass">
                        <div class="reward-top">
                            <div class="reward-ico">
                                <i class="fas fa-car-side fas-ico" aria-hidden="true"></i>
                            </div>
                            <div class="reward-h">For Drivers</div>
                        </div>

                        <p class="reward-subtext">{{ driverRewardsIntro }}</p>

                        <ul class="bullet-list">
                            <li v-for="(p, idx) in driverRewards" :key="`dr-${idx}`" class="reward-li">
                                <span class="tick-badge" aria-hidden="true">✓</span>
                                <div class="bullet-text">
                                    <div class="bullet-title">{{ p.title }}</div>
                                    <div class="bullet-desc">{{ p.desc }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Employees -->
                    <div class="reward-box glass">
                        <div class="reward-top">
                            <div class="reward-ico">
                                <i class="fas fa-user-tie fas-ico" aria-hidden="true"></i>
                            </div>
                            <div class="reward-h">For Employees</div>
                        </div>

                        <p class="reward-subtext">{{ employeeRewardsIntro }}</p>

                        <ul class="bullet-list">
                            <li v-for="(p, idx) in employeeRewards" :key="`er-${idx}`" class="reward-li">
                                <span class="check">✓</span>
                                <div class="bullet-text">
                                    <div class="bullet-title">{{ p.title }}</div>
                                    <div class="bullet-desc">{{ p.desc }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Team -->
                    <div class="reward-box glass">
                        <div class="reward-top">
                            <div class="reward-ico">
                                <i class="fas fa-gift fas-ico" aria-hidden="true"></i>
                            </div>
                            <div class="reward-h">For Your Team</div>
                        </div>

                        <p class="reward-subtext">{{ teamRewardsIntro }}</p>

                        <ul class="bullet-list">
                            <li v-for="(p, idx) in teamRewards" :key="`tr-${idx}`" class="reward-li">
                                <span class="check">✓</span>
                                <div class="bullet-text">
                                    <div class="bullet-title">{{ p.title }}</div>
                                    <div class="bullet-desc">{{ p.desc }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="section-cta-row">
                    <button class="btn-primary" @click="scrollToSection('contact')">
                        Book a demo <span class="btn-arrow">→</span>
                    </button>
                    <button class="btn-secondary" @click="scrollToSection('partner')">Partnership</button>
                </div>
            </div>
        </section>

        <!-- =========================
         Contact / Demo
    ========================== -->
        <section id="contact" class="section">
            <div class="section-inner narrow">
                <h2 class="section-title">Interested? Demo with Us Now</h2>
                <p class="section-text">
                    Ready to experience seamless SME banking and rewards integration? Fill in your details below,
                    and our team will reach out to schedule a personalized demo.
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

                    <button type="submit" class="btn-primary form-submit">Submit interest</button>
                </form>
            </div>
        </section>

        <footer class="site-footer">
            <div class="footer-inner">
                <span>© {{ new Date().getFullYear() }} NovaGO. All rights reserved.</span>
                <div class="footer-links">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                </div>
            </div>
        </footer>

        <button v-show="showScrollTop" class="scroll-top" type="button" aria-label="Scroll to top" @click="scrollToTop">
            ↑
        </button>

        <a href="https://wa.me/6589112217" class="whatsapp-float" target="_blank" rel="noopener">
            <img :src="whatsappIcon" alt="Chat with us on WhatsApp" class="whatsapp-icon-img" />
        </a>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '../components/MainscreenNavBar.vue'
import whatsappIcon from '../assets/whatsapp_icon.png'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()
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

const fakeSubmit = () => {
    alert('Demo request submitted. (Placeholder action)')
}

const showScrollTop = ref(false)
const onScroll = () => {
    showScrollTop.value = window.scrollY > 300
}
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})

/** Section 2 accordion */
const openAcc = ref('industry')
const toggleAcc = (key) => {
    openAcc.value = openAcc.value === key ? '' : key
}

const scrollToOperateAndOpen = (key) => {
    const el = document.getElementById('operate')
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // delay slightly so scroll finishes before state change
    setTimeout(() => {
        openAcc.value = key
    }, 300)
}


const industryPoints = ref([
    {
        title: 'Transport Operator Management System (TOMs)',
        points: [
            'Track, assign, and oversee vehicles, drivers, and jobs seamlessly.',
            'Reduce manual coordination while maintaining full visibility over daily operations and performance.'
        ]
    },
    {
        title: 'Rental Collection',
        points: [
            'Automate rental tracking, billing, and invoicing across your fleet.',
            'Ensure timely collections and clearer oversight of recurring and ad-hoc rental payments.'
        ]
    }
])

const smePoints = ref([
    {
        title: 'Transport Expense Management System (TEMs)',
        points: [
            'Centralize corporate ride bookings and transport expenses through a single portal.',
            'Improve tracking, approvals, and cost transparency across teams.'
        ]
    },
    {
        title: 'Expense Management',
        points: [
            'Track, categorize, and control business spending in real time.',
            'Eliminate manual claims and gain clearer insights into where your money goes.'
        ]
    },
    {
        title: 'Payroll',
        points: [
            'Run payroll with built-in approvals and automated payouts.',
            'Reduce administrative workload while ensuring accurate and timely payments.'
        ]
    },
    {
        title: 'Content Management System (CMS)',
        points: [
            'Easily customize and manage your business website without technical complexity.',
            'Maintain control over your digital presence as your business grows.'
        ]
    }
])

/**
 * Banking modules:
 * - title + sub uses your copywriting exactly
 * - keywords chips show the key words
 */
const bankingFeatures = ref([
    {
        id: 'multi',
        icon: 'fa-globe',
        title: 'Global Multi Currency Account',
        tag: 'Hold + move currencies',
        sub: 'Streamline cross-border finance, helping your business move with agility and act locally anywhere.',
        keywords: ['Cross-border', 'Multi-currency', 'Hold funds', 'Local agility'],
        benefit: 'Multi-currency holding and smoother cross-border operations.',
        bestFor: 'Businesses operating across regions and vendors.',
        route: '/global-multi-currency-account'
    },
    {
        id: 'cards',
        icon: 'fa-credit-card',
        title: 'Global Card Issuance',
        tag: 'Flexible card controls',
        sub: 'Transform your expense management and empower your teams with a flexible card issuance platform.',
        keywords: ['Expense control', 'Team spend', 'Issuance', 'Visibility'],
        benefit: 'Issue cards with clearer controls and tracking.',
        bestFor: 'Teams managing business spend and expenses.',
        route: '/global-card-issuance'
    },
    {
        id: 'payouts',
        icon: 'fa-bolt',
        title: 'Global Payouts',
        tag: 'Fast payouts at scale',
        sub: 'Simplify your entire payout process with automated, accurate, and globally scalable payments.',
        keywords: ['Automated', 'Accurate', 'Global scale', 'Batch payouts'],
        benefit: 'Automate payout workflows with fewer manual steps.',
        bestFor: 'Companies paying drivers, vendors, or partners.',
        route: '/global-payouts'
    },
    {
        id: 'fx',
        icon: 'fa-chart-line',
        title: 'Foreign Exchange (FX)',
        tag: 'Live rates + low fees',
        sub: 'Enjoy seamless currency conversion with low fees, live rates, and multi-currency holding. Accept international payments with ease and simplify your global operations.',
        keywords: ['Live rates', 'Low fees', 'Conversion', 'International payments'],
        benefit: 'Convert currencies with less friction and clearer rates.',
        bestFor: 'Businesses with frequent FX and overseas payments.',
        route: '/fx-conversion-and-acceptance'
    },
])


const activeBankFeature = ref('multi')
const activeFeature = computed(() => {
    return bankingFeatures.value.find((x) => x.id === activeBankFeature.value) || bankingFeatures.value[0]
})

const driverRewardsIntro = ref('Drive smarter, earn more, and save on the road.')

const driverRewards = ref([
    { title: 'Job Opportunities', desc: 'Discover new gigs directly through our partner platform.' },
    { title: 'Fuel Discounts', desc: 'Keep more of your earnings with savings every time you fill up.' },
    { title: 'Rental Promotions', desc: 'Enjoy exclusive deals from trusted vehicle rental partners.' },
    { title: 'Workshop Discounts', desc: 'Cut maintenance costs with preferred rates at trusted workshops.' }
])

const employeeRewardsIntro = ref('Reward your team with perks that go beyond salary')

const employeeRewards = ref([
    { title: 'Exclusive Partner Deals', desc: 'Unlock savings on Grab rides, FairPrice groceries, Shopee vouchers, and more.' },
    { title: 'Hassle-Free', desc: 'Benefits are seamlessly available within the platform – no manual claims or tracking required.' },
    { title: 'Perks for Drivers', desc: 'Enjoy fuel discounts, workshop savings, and more!' }
])

const teamRewardsIntro = ref('One platform to manage and deliver meaningful employee perks')

const teamRewards = ref([
    { title: 'Centralized Perks Hub', desc: 'Provide your team with a single place hub to discover curated rewards.' },
    { title: 'Less admin, More Impact', desc: 'Reduce paperwork while boosting visibility, usage, and overall employee satisfaction.' },
    { title: 'Flexible and Scalable', desc: 'Seamlessly add new perks and partners as your team grows – no system changes required.' }
])

watch(
    () => route.query,
    (q) => {
        // open accordion in Operate section
        if (q.open === 'industry' || q.open === 'sme') {
            scrollToOperateAndOpen(q.open)
        }

        // scroll to a normal section
        if (q.section) {
            scrollToSection(q.section)
        }

        // optional: clean the URL after handling
        if (q.open || q.section) {
            setTimeout(() => router.replace({ query: {} }), 600)
        }
    },
    { immediate: true }
)
</script>

<style scoped>
/* Standard FAS icon color (one place to control everything) */
.landing {
    --fasColor: #2563eb;
}

.fas-ico {
    color: var(--fasColor);
}

/* =========================
   Base
========================= */
.landing {
    min-height: 100vh;
    width: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #0f172a;
    background: #f3f4fd;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Typography */
.hero-headline,
.section-title {
    font-weight: 650;
    letter-spacing: -0.02em;
}

.hero-pill--ref,
.hd-title,
.hero-support-title,
.hd-card-title,
.acc-title,
.reward-h,
.mini-title {
    font-weight: 600;
}

.section-text,
.hero-lede-sub,
.hero-support-text,
.acc-subtitle,
.mini-text,
.reward-desc,
.hint,
.hd-sub,
.hd-metric-label {
    font-weight: 400;
    color: #475569;
}

/* Sections */
.section {
    position: relative;
    padding: 3.8rem 15%;
}

.section-muted {
    background: #f9fafb;
}

.section-inner {
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.section-inner.narrow {
    max-width: 720px;
}

.section-head {
    margin-bottom: 1.35rem;
}

.section-title {
    text-align: left;
    font-size: clamp(1.85rem, 2.6vw, 2.25rem);
    line-height: 1.15;
    color: #1d4ed8;
    margin: 0 0 0.85rem;
}

.section-text {
    text-align: left;
    max-width: 72ch;
    font-size: 1.02rem;
    line-height: 1.65;
    margin: 0 0 0.25rem;
}

/* Hero */
.hero.hero--ref {
    position: relative;
    padding: 4.6rem 1.25rem 4.2rem;
    background: radial-gradient(circle at top left, #eaf2ff 0%, #ffffff 55%);
}

.hero-inner--ref {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: 3.6rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-left--ref {
    max-width: 640px;
    position: relative;
}

.hero-pill--ref {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.35rem 0.95rem;
    border-radius: 999px;
    border: 1px solid rgba(226, 232, 240, 0.95);
    background: rgba(255, 255, 255, 0.72);
    color: #0f172a;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
}

.hero-pill-icon {
    display: inline-flex;
    width: 18px;
    height: 18px;
    border-radius: 999px;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
}

.hero-headline {
    margin: 0.9rem 0 0;
    font-size: clamp(2.35rem, 4.4vw, 3.45rem);
    line-height: 1.05;
    color: #1d4ed8;
    max-width: 16ch;
}

.hero-lede {
    margin-top: 0.95rem;
    max-width: 56ch;
    line-height: 1.65;
}

.hero-lede-sub {
    display: block;
    font-size: 1.02rem;
}

.hero-actions--ref {
    display: flex;
    gap: 1rem;
    margin-top: 1.25rem;
    flex-wrap: wrap;
}

.hero-support-card--ref {
    margin-top: 1.1rem;
    border-radius: 1.1rem;
    background: rgba(255, 255, 255, 0.74);
    border: 1px solid rgba(226, 232, 240, 0.95);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
    padding: 0.95rem 1.05rem;
    max-width: 560px;
}

.hero-support-title {
    margin: 0 0 0.4rem;
    font-size: 0.92rem;
}

.hero-support-text {
    margin: 0;
    line-height: 1.6;
    font-size: 0.92rem;
}

/* Buttons */
.btn-primary,
.btn-secondary {
    border-radius: 999px;
    padding: 0.75rem 1.6rem;
    font-size: 0.92rem;
    cursor: pointer;
    border: 1px solid transparent;
    font-weight: 550;
    letter-spacing: 0.01em;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease, color 0.12s ease;
}

.btn-primary {
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    border-color: #2563eb;
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.28);
}

.btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 36px rgba(37, 99, 235, 0.35);
}

.btn-secondary {
    background: #ffffff;
    color: #2563eb;
    border-color: rgba(37, 99, 235, 0.6);
}

.btn-secondary:hover {
    background: #eef2ff;
}

.btn-primary--dark {
    background: #0f172a;
    border-color: #0f172a;
    color: #ffffff;
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.14);
}

.btn-primary--dark:hover {
    transform: translateY(-1px);
    box-shadow: 0 22px 48px rgba(15, 23, 42, 0.18);
}

.btn-secondary--light {
    background: rgba(255, 255, 255, 0.9);
    color: #0f172a;
    border-color: rgba(226, 232, 240, 0.95);
}

.btn-secondary--light:hover {
    background: #f8fafc;
}

.btn-arrow {
    display: inline-block;
    margin-left: 0.5rem;
    transform: translateY(-1px);
}

/* Right side dashboard mock */
.hero-right--ref {
    display: flex;
    justify-content: center;
}

.hero-dashboard {
    width: min(520px, 100%);
    border-radius: 1.5rem;
    border: 1px solid rgba(226, 232, 240, 0.95);
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 22px 60px rgba(15, 23, 42, 0.1);
    padding: 1.2rem;
    backdrop-filter: blur(8px);
}

.hd-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.2rem 0.15rem 0.9rem;
}

.hd-title {
    margin: 0;
    color: #0f172a;
    font-size: 0.95rem;
}

.hd-sub {
    margin: 0.15rem 0 0;
    font-size: 0.8rem;
}

.hd-live {
    font-size: 0.75rem;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    border: 1px solid rgba(226, 232, 240, 0.95);
    background: rgba(255, 255, 255, 0.85);
    color: #0f172a;
}

.hd-card {
    border-radius: 1.1rem;
    border: 1px solid rgba(226, 232, 240, 0.95);
    background: rgba(255, 255, 255, 0.88);
    padding: 0.95rem;
    margin-bottom: 0.85rem;
}

.hd-card-header {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 0.75rem;
}

.hd-icon {
    width: 28px;
    height: 28px;
    border-radius: 10px;
    border: 1px solid rgba(226, 232, 240, 0.95);
    display: grid;
    place-items: center;
    color: #2563eb;
    background: rgba(239, 246, 255, 0.9);
    font-size: 0.9rem;
}

.hd-card-title {
    margin: 0;
    font-size: 0.9rem;
    color: #0f172a;
}

.hd-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.7rem;
}

.hd-metric {
    border-radius: 0.95rem;
    background: rgba(248, 250, 252, 0.9);
    border: 1px solid rgba(226, 232, 240, 0.95);
    padding: 0.85rem;
}

.hd-metric-label {
    margin: 0 0 0.55rem;
    font-size: 0.75rem;
}

.hd-metric-line {
    height: 10px;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.12);
}

.hd-metric-line--wide {
    height: 12px;
    width: 70%;
}

.hd-shortcuts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
}

.hd-shortcut {
    border-radius: 0.95rem;
    background: rgba(248, 250, 252, 0.9);
    border: 1px solid rgba(226, 232, 240, 0.95);
    padding: 0.85rem;
    font-size: 0.82rem;
    font-weight: 550;
    color: #0f172a;
}

.hd-card--rewards {
    margin-bottom: 0;
}

.hd-rewards-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.6rem;
}

.hd-rewards-sub {
    margin: 0;
    font-size: 0.78rem;
}

.hd-rewards-body {
    border-radius: 0.95rem;
    background: rgba(248, 250, 252, 0.9);
    border: 1px solid rgba(226, 232, 240, 0.95);
    padding: 0.85rem;
}

/* Futuristic shapes */
.shape {
    position: absolute;
    width: 420px;
    height: 420px;
    border-radius: 999px;
    filter: blur(55px);
    opacity: 0.36;
    pointer-events: none;
    z-index: 0;
}

.shape-a {
    top: -160px;
    left: -160px;
    background: rgba(37, 99, 235, 0.22);
}

.shape-b {
    top: -140px;
    right: -180px;
    background: rgba(56, 189, 248, 0.2);
}

.shape-c {
    top: 40px;
    right: -180px;
    background: rgba(16, 185, 129, 0.14);
}

.shape-e {
    top: 30px;
    right: -200px;
    background: rgba(244, 63, 94, 0.09);
}

/* Glass helper */
.glass {
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(226, 232, 240, 0.95);
    border-radius: 1.35rem;
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.09);
    backdrop-filter: blur(10px);
}

/* Accordion */
.accordion {
    margin-top: 1.8rem;
    display: grid;
    gap: 0.95rem;
    max-width: 1050px;
}

.acc-card {
    border-radius: 1.35rem;
    border: 1px solid rgba(226, 232, 240, 0.95);
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.07);
    overflow: hidden;
}

.acc-header {
    width: 100%;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    padding: 1.1rem 1.15rem;
    cursor: pointer;
    border: none;
    background: transparent;
    color: inherit;
}

.acc-title {
    font-size: 1.02rem;
    color: #0f172a;
    margin-bottom: 0.35rem;
}

.acc-subtitle {
    font-size: 0.95rem;
    line-height: 1.6;
}

.chev {
    font-size: 18px;
    opacity: 0.75;
    transform: rotate(0deg);
    transition: transform 0.15s ease;
    align-self: start;
    padding-top: 4px;
}

.chev.open {
    transform: rotate(180deg);
}

.acc-body {
    padding: 0 1.15rem 1.15rem;
    border-top: 1px solid rgba(226, 232, 240, 0.85);
}

.pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 12px;
}

.pill {
    border-radius: 12px;
    padding: 0.62rem 0.85rem;
    border: 1px solid rgba(37, 99, 235, 0.18);
    background: rgba(239, 246, 255, 0.85);
    font-weight: 550;
    font-size: 0.86rem;
    color: #0f172a;
}

.mini-glass {
    margin-top: 1rem;
    border-radius: 1.05rem;
    border: 1px solid rgba(226, 232, 240, 0.95);
    background: rgba(248, 250, 252, 0.85);
    padding: 0.9rem 0.95rem;
}

.mini-glass--tight {
    margin-top: 0.85rem;
}

.mini-title {
    color: #0f172a;
    font-size: 0.92rem;
    margin-bottom: 0.25rem;
}

.mini-text {
    font-size: 0.92rem;
    line-height: 1.55;
}

.section-cta-row {
    margin-top: 1.6rem;
    display: flex;
    gap: 0.9rem;
    flex-wrap: wrap;
}

/* =========================
   BANKING REFINED (NEW)
========================= */
.banking-refined {
    overflow: hidden;
    background:
        radial-gradient(circle at 15% 10%, rgba(37, 99, 235, 0.14), transparent 45%),
        radial-gradient(circle at 85% 0%, rgba(56, 189, 248, 0.14), transparent 45%),
        linear-gradient(180deg, #f7f9ff, #ffffff 60%);
}

.banking-bg {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(15, 23, 42, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(15, 23, 42, 0.035) 1px, transparent 1px);
    background-size: 56px 56px;
    opacity: 0.32;
    pointer-events: none;
}

.banking-head {
    max-width: 920px;
    margin-bottom: 1.35rem;
    position: relative;
    z-index: 1;
}

.banking-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(226, 232, 240, 0.9);
    background: rgba(255, 255, 255, 0.75);
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #0f172a;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--fasColor);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
}

.banking-title {
    margin: 0.75rem 0 0.55rem;
    font-size: clamp(2.1rem, 3.2vw, 2.55rem);
    line-height: 1.1;
    color: #0f172a;
    font-weight: 600;
    letter-spacing: -0.03em;
}

.banking-sub {
    margin: 0;
    max-width: 70ch;
    color: #64748b;
    font-size: 1.02rem;
    line-height: 1.65;
    font-weight: 400;
}

.banking-shell {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 1.2rem;
    max-width: 1180px;
    align-items: start;
}

/* Left nav */
.banking-nav {
    border-radius: 1.75rem;
    border: 1px solid rgba(226, 232, 240, 0.85);
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 24px 70px rgba(15, 23, 42, 0.1);
    backdrop-filter: blur(10px);
    padding: 1rem;
    display: grid;
    gap: 0.7rem;
    align-content: start;
}

.nav-head {
    padding: 0.35rem 0.35rem 0.85rem;
    border-bottom: 1px solid rgba(226, 232, 240, 0.75);
}

.nav-title {
    margin: 0;
    color: #0f172a;
    font-weight: 600;
    letter-spacing: -0.02em;
}

.nav-sub {
    margin: 0.25rem 0 0;
    color: #64748b;
    font-size: 0.9rem;
}

.nav-item {
    position: relative;
    border: none;
    cursor: pointer;
    width: 100%;
    display: grid;
    grid-template-columns: 4px 44px 1fr auto;
    gap: 0.85rem;
    align-items: center;
    padding: 0.8rem 0.85rem;
    border-radius: 1.2rem;
    background: rgba(248, 250, 252, 0.5);
    border: 1px solid rgba(226, 232, 240, 0.7);
    transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease, background 0.12s ease;
    text-align: left;
}

.nav-item:hover {
    transform: translateY(-1px);
    border-color: rgba(37, 99, 235, 0.22);
    box-shadow: 0 18px 40px rgba(37, 99, 235, 0.1);
    background: rgba(239, 246, 255, 0.52);
}

.nav-item.active {
    background: linear-gradient(180deg, rgba(239, 246, 255, 0.92), rgba(255, 255, 255, 0.7));
    border-color: rgba(37, 99, 235, 0.3);
    box-shadow: 0 22px 55px rgba(37, 99, 235, 0.14);
}

.nav-indicator {
    width: 4px;
    height: 100%;
    border-radius: 999px;
    background: transparent;
}

.nav-item.active .nav-indicator {
    background: linear-gradient(180deg, rgba(37, 99, 235, 0.95), rgba(56, 189, 248, 0.95));
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.nav-icon {
    width: 44px;
    height: 44px;
    border-radius: 16px;
    display: grid;
    place-items: center;
    font-size: 1.05rem;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(226, 232, 240, 0.8);
}

.nav-text {
    min-width: 0;
}

.nav-h {
    color: #0f172a;
    font-weight: 600;
    letter-spacing: -0.01em;
    font-size: 0.98rem;
}

.nav-t {
    margin-top: 0.2rem;
    color: #64748b;
    font-size: 0.86rem;
}

.nav-arrow {
    color: rgba(15, 23, 42, 0.40);
    font-weight: 700;
}

.nav-footer {
    margin-top: 0.2rem;
    padding: 0.95rem 0.35rem 0.35rem;
    border-top: 1px solid rgba(226, 232, 240, 0.75);
}

.footer-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.38rem 0.7rem;
    border-radius: 999px;
    background: rgba(239, 246, 255, 0.75);
    border: 1px solid rgba(37, 99, 235, 0.18);
    color: #0f172a;
    font-weight: 700;
    font-size: 0.82rem;
}

.fp-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--fasColor);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
}

.footer-note {
    margin-top: 0.55rem;
    color: #64748b;
    line-height: 1.55;
    font-size: 0.92rem;
}

/* Right side */
.banking-v3-show {
    display: grid;
    gap: 0.85rem;
    align-content: start;
}

.show-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.show-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    border: 1px solid rgba(226, 232, 240, 0.9);
    background: rgba(255, 255, 255, 0.78);
    color: #0f172a;
    font-size: 0.85rem;
    font-weight: 500;
}

.sb-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--fasColor);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.14);
}

.show-btn {
    border: 1px solid rgba(226, 232, 240, 0.9);
    background: rgba(255, 255, 255, 0.78);
    border-radius: 999px;
    padding: 0.6rem 0.95rem;
    cursor: pointer;
    font-weight: 750;
    color: #0f172a;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}

.show-btn:hover {
    transform: translateY(-1px);
    background: rgba(239, 246, 255, 0.9);
    box-shadow: 0 16px 34px rgba(15, 23, 42, 0.10);
}

.feature-card {
    position: relative;
    overflow: hidden;
    border-radius: 1.8rem;
    border: 1px solid rgba(226, 232, 240, 0.85);
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 22px 70px rgba(15, 23, 42, 0.12);
    backdrop-filter: blur(12px);
    padding: 1.25rem 1.25rem;
}

.feature-glow {
    position: absolute;
    inset: -70px -40px auto -40px;
    height: 240px;
    background:
        radial-gradient(circle at 18% 25%, rgba(37, 99, 235, 0.22), transparent 60%),
        radial-gradient(circle at 70% 35%, rgba(56, 189, 248, 0.18), transparent 62%);
    filter: blur(14px);
    opacity: 0.95;
    pointer-events: none;
}

.feature-head {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
}

.feature-ico {
    width: 52px;
    height: 52px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    font-size: 1.15rem;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(226, 232, 240, 0.85);
}

.feature-title {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #0f172a;
}

.feature-sub {
    margin-top: 0.35rem;
    color: #64748b;
    line-height: 1.7;
    font-size: 0.98rem;
    max-width: 72ch;
}

.keyword-row {
    position: relative;
    z-index: 1;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.keyword-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.55rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(37, 99, 235, 0.18);
    background: rgba(239, 246, 255, 0.75);
    color: #0f172a;
    font-weight: 650;
    font-size: 0.86rem;
}

.kw-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--fasColor);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
}

.feature-mini {
    position: relative;
    z-index: 1;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
}

.mini-block {
    border-radius: 1.2rem;
    border: 1px solid rgba(226, 232, 240, 0.78);
    background: rgba(248, 250, 252, 0.75);
    padding: 0.9rem 0.95rem;
}

.mini-k {
    color: #64748b;
    font-size: 0.82rem;
    font-weight: 650;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.mini-v {
    margin-top: 0.25rem;
    color: #0f172a;
    font-weight: 750;
    letter-spacing: -0.01em;
    line-height: 1.35;
}

.support-strip {
    border-radius: 1.6rem;
    border: 1px solid rgba(226, 232, 240, 0.85);
    background: rgba(255, 255, 255, 0.78);
    box-shadow: 0 18px 60px rgba(15, 23, 42, 0.10);
    backdrop-filter: blur(10px);
    padding: 1.05rem 1.15rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: center;
}

.strip-h {
    color: #0f172a;
    font-weight: 800;
    letter-spacing: -0.02em;
}

.strip-t {
    margin-top: 0.25rem;
    color: #64748b;
    line-height: 1.55;
    font-size: 0.92rem;
}

.strip-cta {
    border-radius: 999px;
    padding: 0.75rem 1.05rem;
    cursor: pointer;
    border: 1px solid rgba(226, 232, 240, 0.85);
    background: rgba(239, 246, 255, 0.85);
    color: #0f172a;
    font-weight: 800;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}

.strip-cta:hover {
    transform: translateY(-1px);
    background: rgba(239, 246, 255, 1);
    box-shadow: 0 16px 34px rgba(15, 23, 42, 0.10);
}

/* Rewards */
.rewards-grid {
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    max-width: 1200px;
}

.reward-box {
    padding: 1.2rem 1.2rem;
}

.reward-top {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.85rem;
}

.reward-ico {
    width: 44px;
    height: 44px;
    border-radius: 16px;
    border: 1px solid rgba(37, 99, 235, 0.18);
    background: rgba(239, 246, 255, 0.9);
    display: grid;
    place-items: center;
    font-size: 1rem;
}

.reward-h {
    color: #0f172a;
    font-size: 1rem;
}

.reward-desc {
    margin: 0;
    line-height: 1.65;
}

.bullet-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.65rem;
}

.bullet-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    color: #0f172a;
    font-weight: 450;
}

.check {
    width: 20px;
    height: 20px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.75rem;
    color: #2563eb;
    background: rgba(239, 246, 255, 0.95);
    box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.20);
    flex: 0 0 auto;
}

.hint {
    margin-top: 0.75rem;
    font-size: 0.88rem;
}

/* Contact / footer / whatsapp / scroll top (unchanged) */
.contact-form {
    margin-top: 2.1rem;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 1.1rem;
    padding: 1.8rem 1.8rem 2rem;
    border: 1px solid rgba(226, 232, 240, 0.95);
    box-shadow: 0 18px 40px rgba(148, 163, 184, 0.30);
    backdrop-filter: blur(10px);
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
    color: #475569;
    font-weight: 500;
}

.field input,
.field select,
.field textarea {
    border-radius: 0.75rem;
    border: 1px solid rgba(203, 213, 225, 0.9);
    padding: 0.7rem 0.85rem;
    font-size: 0.92rem;
    outline: none;
    background: rgba(248, 250, 252, 0.95);
    color: #0f172a;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
    border-color: rgba(37, 99, 235, 0.85);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    background: #ffffff;
}

.form-submit {
    margin-top: 1.1rem;
}

.site-footer {
    border-top: 1px solid #e5e7eb;
    background: #ffffff;
    padding: 1rem 1.25rem;
}

.footer-inner {
    max-width: 1300px;
    margin: 0 auto;
    font-size: 0.8rem;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-links {
    display: flex;
    gap: 1rem;
}

.footer-links a {
    color: #64748b;
    text-decoration: none;
}

.footer-links a:hover {
    color: #1d4ed8;
}

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

.scroll-top {
    position: fixed;
    right: 24px;
    bottom: calc(24px + 54px + 14px);
    width: 54px;
    height: 54px;
    border-radius: 999px;
    border: 1px solid rgba(209, 213, 219, 0.9);
    background: #ffffff;
    color: #111827;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    z-index: 51;
    display: grid;
    place-items: center;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}

.scroll-top:hover {
    transform: translateY(-2px);
    background: #eef2ff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.22);
}

/* Responsive */
@media (max-width: 1060px) {
    .banking-v3-shell {
        grid-template-columns: 1fr;
    }

    .feature-mini {
        grid-template-columns: 1fr;
    }

    .support-strip {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 960px) {
    .hero-inner--ref {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .hero-right--ref {
        order: -1;
        margin-bottom: 0.5rem;
    }

    .rewards-grid {
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

@media (max-width: 480px) {
    .hero-actions--ref {
        flex-direction: column;
        align-items: stretch;
    }

    .section {
        padding-inline: 1rem;
    }

    .whatsapp-float {
        right: 16px;
        bottom: 16px;
        width: 48px;
        height: 48px;
    }

    .scroll-top {
        right: 16px;
        bottom: calc(16px + 48px + 12px);
    }
}

/* =========================
   Business Banking – soften typography
   (reduce font-weight ~200)
========================= */

.banking-v3-title {
    font-weight: 550;
    /* was 750 */
}

.banking-v3-sub {
    font-weight: 400;
    /* keep normal */
}

.banking-v3-kicker,
.show-badge {
    font-weight: 500;
    /* was 650 */
}

/* Left nav */
.nav-title {
    font-weight: 550;
    /* was 650 */
}

.nav-h {
    font-weight: 500;
    /* was 650 */
}

.nav-t {
    font-weight: 400;
}

/* Feature card */
.feature-title {
    font-weight: 600;
    /* was 800 */
}

.feature-sub {
    font-weight: 400;
}

/* Keyword chips */
.keyword-chip {
    font-weight: 500;
    /* was 650 */
}

/* Mini blocks */
.mini-k {
    font-weight: 500;
    /* was 650 */
}

.mini-v {
    font-weight: 550;
    /* was 750 */
}

/* Support strip */
.strip-h {
    font-weight: 600;
    /* was 800 */
}

.strip-t {
    font-weight: 400;
}

/* =========================
   BANKING V3 – CLEAN / NO BACKGROUND
========================= */

.banking-v3 {
    position: relative;
    background: transparent;
    /* ✅ removed section background */
}

/* disable background layers */
.banking-v3-bg,
.banking-v3-grid {
    display: none;
}

/* Header */
.banking-v3-head {
    max-width: 900px;
    margin-bottom: 1.4rem;
}

.banking-v3-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: transparent;
    font-size: 0.78rem;
    text-transform: uppercase;
}

.k-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--fasColor);
}

.banking-v3-title {
    margin: 0.75rem 0 0.45rem;
    font-size: clamp(2rem, 3vw, 2.6rem);
    font-weight: 600;
    letter-spacing: -0.03em;
}

.banking-v3-sub {
    color: #64748b;
    max-width: 70ch;
}

/* Layout */
.banking-v3-shell {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 1.2rem;
}

/* =========================
   LEFT NAV – BORDER ONLY
========================= */
.banking-v3-nav {
    border-radius: 1.4rem;
    border: 1px solid #e5e7eb;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.82);
    /* ✅ removed card background */
}

.nav-top {
    padding-bottom: 0.85rem;
    border-bottom: 1px solid #e5e7eb;
}

.nav-item {
    margin-top: 0.75rem;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
    display: grid;
    grid-template-columns: 44px 1fr auto;
    gap: 0.75rem;
    background: transparent;
    cursor: pointer;
    transition: border-color 0.15s ease, transform 0.15s ease;
}

.nav-item:hover {
    border-color: #2563eb;
    transform: translateY(-1px);
}

.nav-item.active {
    border-color: #2563eb;
}

.nav-ico {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    border: 1px solid #e5e7eb;
    display: grid;
    place-items: center;
}

.nav-h {
    font-weight: 550;
}

.nav-t {
    font-size: 0.86rem;
    color: #64748b;
}

.nav-footer {
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid #e5e7eb;
}

/* =========================
   RIGHT SIDE – CLEAN PANEL
========================= */
.banking-v3-show {
    display: grid;
    gap: 1rem;
}

.show-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.show-badge {
    font-size: 0.85rem;
    color: #475569;
}

.show-btn {
    border: 1px solid #0f172a;
    background: transparent;
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;
}

/* Feature card – border only */
.feature-card {
    border-radius: 1.4rem;
    border: 1px solid #e5e7eb;
    padding: 1.2rem;
    background: rgba(255, 255, 255, 0.72);
    /* ✅ removed background */
}

/* Feature content */
.feature-head {
    display: flex;
    gap: 0.85rem;
}

.feature-ico {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    display: grid;
    place-items: center;
}

.feature-title {
    font-size: 1.2rem;
    font-weight: 600;
}

.feature-sub {
    margin-top: 0.35rem;
    color: #64748b;
    line-height: 1.6;
}

/* Chips */
.keyword-row {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.keyword-chip {
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    padding: 0.4rem 0.7rem;
    font-size: 0.85rem;
    background: transparent;
}

/* What you get / Best for */
.feature-mini {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.mini-block {
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 1.75rem;
}

.mini-k {
    font-size: 0.78rem;
    text-transform: uppercase;
    color: #64748b;
}

.mini-v {
    margin-top: 0.25rem;
    font-weight: 600;
}

/* Responsive */
@media (max-width: 960px) {
    .banking-v3-shell {
        grid-template-columns: 1fr;
    }

    .feature-mini {
        grid-template-columns: 1fr;
    }
}

/* =========================
   Limit height of selected module (right side)
========================= */

/* Right column container */
.banking-v3-show {
    max-height: 520px;
    /* adjust as needed */
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Keep header + CTA fixed */
.show-top {
    flex-shrink: 0;
}

/* Scroll only the content card */
.feature-card {
    flex: 1;
    overflow-y: auto;
    max-height: 100%;
}

/* Optional: nicer scrollbar */
.feature-card::-webkit-scrollbar {
    width: 6px;
}

.feature-card::-webkit-scrollbar-thumb {
    background: rgba(15, 23, 42, 0.25);
    border-radius: 999px;
}

.feature-card::-webkit-scrollbar-track {
    background: transparent;
}

/* =========================
   Make right feature card feel filled (no empty bottom)
========================= */

.feature-card {
    /* keep your existing border/radius */
    display: flex;
    flex-direction: column;
    height: 100%;
    /* important */
    min-height: 360px;
    /* adjust: makes card visually tall enough */
}

/* Keep top section normal */
.feature-head {
    flex: 0 0 auto;
}

/* Chips stay under text */
.keyword-row {
    flex: 0 0 auto;
}

/* Push mini blocks to bottom */
.feature-mini {
    margin-top: auto;
    /* THIS is the key */
    padding-top: 1rem;
    /* gives breathing room before bottom row */
}

.feature-mini {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(226, 232, 240, 0.9);
}

/* =========================
   Fill the middle: make chips area expand + look intentional
========================= */

/* Ensure the card is a column layout */
.feature-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 420px;
    /* adjust */
}

/* Make keyword row take remaining space */
.keyword-row {
    flex: 1;
    /* 👈 fills the middle */
    align-content: start;
    /* keep chips at top of that region */
    margin-top: 1rem;

    /* nicer layout so it doesn't look sparse */
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* 2 columns */
    gap: 0.6rem 0.75rem;
    padding: 0.9rem;
    border: 1px solid rgba(226, 232, 240, 0.9);
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.35);
    /* very light, optional */
}

/* Chips become full-width rows inside grid */
.keyword-chip {
    width: 100%;
    justify-content: flex-start;
    padding: 0.45rem 0.7rem;
    font-size: 0.86rem;
}

/* Bottom stays anchored */
.feature-mini {
    margin-top: 1rem;
    /* no longer auto because keyword-row expands */
}

/* =========================
   Pill with subtext (Operate & Bank)
========================= */

.pill--detail {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem 0.9rem;
}

.pill-title {
    font-weight: 600;
    font-size: 0.9rem;
    color: #0f172a;
    line-height: 1.3;
}

.pill-desc {
    font-size: 0.82rem;
    line-height: 1.45;
    color: #64748b;
}

.pill-desc {
    white-space: pre-line;
}


/* =========================
   SME boxes – 2x2 grid
========================= */

/* Target only SME section */
.acc-card .pill-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* 2x2 */
    gap: 0.75rem;
}

/* Make pills fill grid cells evenly */
.pill--detail {
    height: 100%;
    justify-content: flex-start;
    padding: 0.85rem 0.95rem;
    border-radius: 0.85rem;
}

/* Slightly tighten text so grid feels balanced */
.pill-title {
    font-size: 0.88rem;
}

.pill-desc {
    font-size: 0.8rem;
    line-height: 1.45;
}

@media (max-width: 640px) {
    .acc-card .pill-grid {
        grid-template-columns: 1fr;
        /* 1x4 on mobile */
    }
}

/* Reduce the right column height slightly */
.banking-v3-show {
    max-height: 480px;
    /* was 520px */
}

/* Keep the card scroll if needed */
.feature-card {
    min-height: 98%;
    /* was 420px */
}

/* Button area pinned at bottom */
.feature-actions {
    margin-top: 0.9rem;
    padding-top: 0.9rem;
    border-top: 1px solid rgba(226, 232, 240, 0.9);
    display: flex;
    justify-content: flex-end;
}

.feature-link-btn {
    border: 1px solid #2563eb;
    background: transparent;
    color: #2563eb;
    padding: 0.5rem 0.95rem;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
}

.feature-link-btn:hover {
    background: rgba(37, 99, 235, 0.08);
}

/* Mobile: let the right panel expand normally (no inner scrollbar) */
@media (max-width: 640px) {
    .banking-v3-show {
        max-height: none;
        /* remove your 520px clamp */
        display: block;
    }

    .feature-card {
        max-height: none;
        /* remove scroll container sizing */
        overflow: visible;
        /* no inner scroll */
        min-height: auto;
        /* stop forcing tall card */
    }

    /* Make chips not look cramped */
    .keyword-row {
        display: grid;
        grid-template-columns: 1fr;
        /* 1 column on mobile */
        padding: 0.75rem;
    }

    /* Fix the huge padding on mini blocks for mobile */
    .mini-block {
        padding: 0.9rem;
        /* was 3.75rem */
    }

    .feature-mini {
        grid-template-columns: 1fr;
        /* stack "What you get" and "Best for" */
    }
}

#operate .accordion {
    max-width: none;
    /* remove the limit */
    width: 100%;
    margin: 1.8rem auto 0;
}

.reward-subtext {
    margin: 0 0 0.9rem;
    color: #64748b;
    line-height: 1.6;
    font-size: 0.92rem;
}

.bullet-title {
    font-weight: 650;
    color: #0f172a;
}

.bullet-desc {
    color: #475569;
    font-weight: 400;
}

.pill-points {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.pill-points li {
    display: flex;
    align-items: flex-start;
    gap: 0.45rem;
    font-size: 0.82rem;
    line-height: 1.45;
    color: #64748b;
}

.pill-tick {
    color: #2563eb;
    /* matches your primary blue */
    font-size: 0.75rem;
    line-height: 1.4;
    margin-top: 2px;
    flex-shrink: 0;
}

/* ===== Rewards section polish ===== */
#rewards .section-head {
    margin-bottom: 1.6rem;
}

#rewards .section-text {
    max-width: 68ch;
}

/* Cards: equal structure */
.rewards-grid {
    margin-top: 1.8rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
    max-width: 1200px;
    align-items: stretch;
}

.reward-box {
    padding: 1.25rem 1.25rem 1.15rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    min-height: 320px;
    /* makes them feel consistent */
}

/* Header row */
.reward-top {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 0.1rem;
}

.reward-ico {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    border: 1px solid rgba(37, 99, 235, 0.18);
    background: rgba(239, 246, 255, 0.95);
    display: grid;
    place-items: center;
    font-size: 1rem;
}

.reward-h {
    color: #0f172a;
    font-size: 1rem;
    font-weight: 650;
}

/* Subtext under title */
.reward-subtext {
    margin: 0;
    color: #64748b;
    line-height: 1.6;
    font-size: 0.92rem;
}

/* List: clean spacing */
.bullet-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.85rem;
}

/* Each bullet row: tick + stacked text */
.reward-li {
    display: grid;
    grid-template-columns: 22px 1fr;
    gap: 0.7rem;
    align-items: start;
}

/* Tick badge (looks premium vs plain ✓) */
.tick-badge {
    width: 20px;
    height: 20px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.72rem;
    color: #2563eb;
    background: rgba(37, 99, 235, 0.10);
    box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.20);
    margin-top: 2px;
    /* baseline align */
}

.bullet-text {
    display: grid;
    gap: 0.18rem;
}

.bullet-title {
    font-weight: 650;
    color: #0f172a;
    line-height: 1.25;
    font-size: 0.92rem;
}

.bullet-desc {
    color: #475569;
    font-weight: 400;
    line-height: 1.55;
    font-size: 0.90rem;
}

/* CTA row alignment (optional nicer spacing) */
#rewards .section-cta-row {
    margin-top: 1.8rem;
}

@media (max-width: 960px) {

    /* Rewards: stack nicely on mobile */
    .rewards-grid {
        grid-template-columns: 1fr;
        max-width: 560px;
        margin-inline: auto;
        gap: 1rem;
    }

    .reward-box {
        min-height: auto;
        /* ✅ remove fixed height */
        padding: 1.05rem 1.05rem;
        /* tighter padding */
        gap: 0.8rem;
    }

    .reward-top {
        gap: 0.65rem;
    }

    .reward-ico {
        width: 40px;
        height: 40px;
        border-radius: 14px;
    }

    .reward-h {
        font-size: 0.98rem;
    }

    .reward-subtext {
        font-size: 0.9rem;
        margin: 0;
    }

    .bullet-list {
        gap: 0.75rem;
    }

    .reward-li {
        grid-template-columns: 20px 1fr;
        gap: 0.6rem;
    }

    .tick-badge {
        width: 18px;
        height: 18px;
        font-size: 0.68rem;
    }

    .bullet-title {
        font-size: 0.9rem;
    }

    .bullet-desc {
        font-size: 0.88rem;
    }
}
</style>

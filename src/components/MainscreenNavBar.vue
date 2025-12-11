<template>
    <header class="top-nav">
        <div class="nav-inner">
            <!-- Brand -->
            <router-link to="/" class="brand" @click="resetNav">
                <img src="../assets/NovaGoLogo.png" alt="NovaGO logo" class="brand-logo" />
            </router-link>

            <!-- Mobile hamburger -->
            <button class="nav-toggle" type="button" @click="toggleMobileMenu" aria-label="Toggle navigation">
                <span :class="['nav-toggle-bar', { open: isMobileMenuOpen }]"></span>
                <span :class="['nav-toggle-bar', { open: isMobileMenuOpen }]"></span>
                <span :class="['nav-toggle-bar', { open: isMobileMenuOpen }]"></span>
            </button>

            <!-- Main nav -->
            <nav class="nav-links" :class="{ 'nav-links--open': isMobileMenuOpen }">
                <!-- Custom Solutions -->
                <div class="nav-item has-mega" @mouseenter="openMenuDesktop('solutions')">
                    <button class="nav-link" :class="{ active: activeMenu === 'solutions' }" type="button"
                        @click="toggleDropdown('solutions')">
                        Custom Solutions
                    </button>

                    <div v-if="activeMenu === 'solutions'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                        <div class="mega mega--narrow">
                            <div class="mega-left mega-left--2">
                                <!-- By use cases -->
                                <div class="mega-column">
                                    <p class="mega-heading">By use cases</p>

                                    <router-link class="mega-link" to="/toms" @click="closeAllNav">
                                        Transport Operator Management System (TOMs)
                                        <span>
                                            Simplify the management of vehicles, drivers and jobs — moving beyond manual
                                            processes.
                                        </span>
                                    </router-link>

                                    <router-link class="mega-link" to="/rental-collection-summary" @click="closeAllNav">
                                        Rental collection
                                        <span>Track rental payments in one view. Invoice generation.</span>
                                    </router-link>
                                </div>
                                <!-- For SMEs -->
                                <div class="mega-column">
                                    <p class="mega-heading">For SMEs</p>

                                    <router-link class="mega-link" to="/dashboard" @click="closeAllNav">
                                        Corporate booking
                                        <span>Seamlessly book corporate rides from your portal.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/expense-management" @click="closeAllNav">
                                        Expense management
                                        <span>Track and manage business expenses with ease.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/payroll" @click="closeAllNav">
                                        Payroll
                                        <span>Simplified salary-related payments in one place.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/" @click="closeAllNav">
                                        CMS
                                        <span>Customize your very own web design with our CMS.</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Business Banking -->
                <div class="nav-item has-mega" @mouseenter="openMenuDesktop('products')">
                    <button class="nav-link" :class="{ active: activeMenu === 'products' }" type="button"
                        @click="toggleDropdown('products')">
                        Business Banking
                    </button>

                    <div v-if="activeMenu === 'products'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                        <div class="mega mega--narrow">
                            <div class="mega-left mega-left--2">
                                <!-- Business banking -->
                                <div class="mega-column">
                                    <p class="mega-heading">Business banking</p>

                                    <router-link class="mega-link" to="/global-multi-currency-account"
                                        @click="closeAllNav">
                                        Global Multi Currency Account
                                        <span>Multi-currency accounts to receive funds.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/global-card-issuance" @click="closeAllNav">
                                        Global Card Issuance
                                        <span>Physical and virtual cards for real-time payments.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/global-payout" @click="closeAllNav">
                                        Global Payout
                                        <span>Send payouts to 190+ countries via local currencies and methods.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/fx-conversion-acceptance" @click="closeAllNav">
                                        FX Conversion &amp; Acceptance
                                        <span>Multi-currency, borderless transactions.</span>
                                    </router-link>
                                </div>

                                <!-- Spend -->
                                <div class="mega-column">
                                    <p class="mega-heading">Spend</p>

                                    <router-link class="mega-link" to="/corporate-cards" @click="closeAllNav">
                                        Corporate Cards
                                        <span>Multi-currency company and employee cards.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/expense-management" @click="closeAllNav">
                                        Expense Management
                                        <span>Expense and reimbursement management.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/bill-pay" @click="closeAllNav">
                                        Bill Pay
                                        <span>Automated accounts payable management.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/payouts" @click="closeAllNav">
                                        Payouts
                                        <span>Programmatic, cost-effective global payouts.</span>
                                    </router-link>

                                    <router-link class="mega-link" to="/remittance" @click="closeAllNav">
                                        Remittance
                                        <span>Cross-border payments.</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Benefits -->
                <div class="nav-item has-mega" @mouseenter="openMenuDesktop('benefits')">
                    <button class="nav-link" :class="{ active: activeMenu === 'benefits' }" type="button"
                        @click="toggleDropdown('benefits')">
                        Benefits
                    </button>

                    <div v-if="activeMenu === 'benefits'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                        <div class="mega mega--small">
                            <div class="mega-left mega-left--2">
                                <div class="mega-column">
                                    <p class="mega-heading">Benefits marketplace</p>

                                    <router-link class="mega-link" to="/benefits/shell" @click="closeAllNav">
                                        Shell
                                        <span>Fuel benefits and rewards for your drivers.</span>
                                    </router-link>
                                    <router-link class="mega-link" to="/benefits/shell" @click="closeAllNav">
                                        Curated Benefits
                                        <span>Customize benefits specific to your company.</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Partnerships -->
                <div class="nav-item has-mega nav-item--partnerships" @mouseenter="openMenuDesktop('partnerships')">
                    <button class="nav-link" :class="{ active: activeMenu === 'partnerships' }" type="button"
                        @click="toggleDropdown('partnerships')">
                        Partnerships
                    </button>

                    <div v-if="activeMenu === 'partnerships'" class="mega-wrapper" @mouseleave="closeMenuDesktop">
                        <div class="mega mega--small mega--partnerships">
                            <div class="mega-left mega-left--partnerships">
                                <div class="mega-column-partnership">
                                    <p class="mega-heading">Partnership programme</p>

                                    <h3 class="partnership-title">Work with NovaGO</h3>

                                    <p class="partnership-text">
                                        Bundle NovaGO with your product or offer Shell fuel benefits to your users. Talk
                                        to our partnership
                                        department to explore co-created solutions.
                                    </p>

                                    <button class="btn-primary partnership-btn" type="button"
                                        @click="handlePartnershipClick">
                                        Talk to our partnership team
                                    </button>

                                    <!-- Current partners marquee -->
                                    <div class="partners-section">
                                        <p class="partners-label">Current partners</p>

                                        <div class="partners-marquee">
                                            <div class="partners-track">
                                                <!-- First loop -->
                                                <div class="partner-item" v-for="partner in partners"
                                                    :key="'a-' + partner.name">
                                                    <img v-if="partner.logo" :src="partner.logo"
                                                        :alt="partner.name + ' logo'" class="partner-logo" />
                                                    <span class="partner-name">{{ partner.name }}</span>
                                                </div>

                                                <!-- Duplicate loop -->
                                                <div class="partner-item" v-for="partner in partners"
                                                    :key="'b-' + partner.name">
                                                    <img v-if="partner.logo" :src="partner.logo"
                                                        :alt="partner.name + ' logo'" class="partner-logo" />
                                                    <span class="partner-name">{{ partner.name }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end partners-section -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile actions (inside nav) -->
                <div class="nav-right-actions nav-right-actions--inline">
                    <template v-if="!isLoggedIn">
                        <button class="nav-link login-link" @click="handleLoginClick">
                            Log in
                        </button>
                    </template>

                    <template v-else>
                        <button class="nav-link login-link" @click="handlePortalClick">
                            Portal
                        </button>
                        <button class="nav-link login-link" @click="handleLogoutClick">
                            Log out
                        </button>
                    </template>
                </div>
            </nav>

            <!-- Desktop actions -->
            <div class="nav-right-actions nav-right-actions--desktop">
                <template v-if="!isLoggedIn">
                    <button class="nav-link login-link" @click="handleLoginClick">
                        Log in
                    </button>
                </template>

                <template v-else>
                    <button class="nav-link login-link" @click="handlePortalClick">
                        Portal
                    </button>
                    <button class="nav-link login-link" @click="handleLogoutClick">
                        Log out
                    </button>
                </template>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import primeGroupLogo from '../assets/partners/prime-group.png'
import veepLogo from '../assets/partners/veep.png'
import gojekLogo from '../assets/partners/gojek.png'
import transtarLogo from '../assets/partners/transtar.png'
import shellLogo from '../assets/partners/shell.png'
import bestPetrolLogo from '../assets/partners/best-petrol.png'
import zoqqLogo from '../assets/partners/zoqq.png'

const props = defineProps({
    isLoggedIn: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['scrollTo', 'logout'])

const router = useRouter()

const activeMenu = ref(null)
const isMobileMenuOpen = ref(false)

const partners = [
    { name: 'Prime Group', logo: primeGroupLogo },
    { name: 'Veep', logo: veepLogo },
    { name: 'Gojek', logo: gojekLogo },
    { name: 'Transtar', logo: transtarLogo },
    { name: 'Shell', logo: shellLogo },
    { name: 'Best Petrol', logo: bestPetrolLogo },
    { name: 'ZOQQ', logo: zoqqLogo }
]

const openMenuDesktop = (name) => {
    if (window.innerWidth >= 960) {
        activeMenu.value = name
    }
}

const closeMenuDesktop = () => {
    if (window.innerWidth >= 960) {
        activeMenu.value = null
    }
}

const toggleDropdown = (name) => {
    activeMenu.value = activeMenu.value === name ? null : name
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    if (!isMobileMenuOpen.value) {
        activeMenu.value = null
    }
}

const resetNav = () => {
    activeMenu.value = null
    isMobileMenuOpen.value = false
}

const closeAllNav = () => {
    activeMenu.value = null
    isMobileMenuOpen.value = false
}

const handlePartnershipClick = () => {
    emit('scrollTo', 'contact')
    closeAllNav()
}

const handleLoginClick = () => {
    closeAllNav()
    router.push('/login')
}

const handlePortalClick = () => {
    closeAllNav()
    router.push('/dashboard')
}

const handleLogoutClick = () => {
    closeAllNav()
    emit('logout')
}
</script>

<style scoped>
.top-nav {
    position: sticky;
    top: 0;
    z-index: 60;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #e5e7eb;
}

.nav-inner {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0.9rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    /* anchor for absolute mega */
}

.brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
}

.brand-logo {
    height: 56px;
    width: auto;
    display: block;
}

/* Mobile hamburger */
.nav-toggle {
    display: none;
    margin-left: auto;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0.25rem;
}

.nav-toggle-bar {
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: #4b5563;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav-toggle-bar+.nav-toggle-bar {
    margin-top: 4px;
}

.nav-toggle-bar.open:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.nav-toggle-bar.open:nth-child(2) {
    opacity: 0;
}

.nav-toggle-bar.open:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}

/* Main nav */
.nav-links {
    flex: 1;
    /* brand | nav-links (center) | right-actions */
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.25rem;
}

.nav-right-actions {
    margin-left: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.nav-right-actions--inline {
    display: none;
}

.nav-right-actions--desktop {
    display: flex;
}

.nav-link {
    border: none;
    background: none;
    padding: 0;
    font-size: 0.88rem;
    color: #4b5563;
    cursor: pointer;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #2563eb, #38bdf8);
    border-radius: 999px;
    transition: width 0.15s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link.active {
    color: #1d4ed8;
}

.nav-link.active::after {
    width: 100%;
}

.login-link {
    font-size: 0.86rem;
}

.nav-item {
    position: static;
    /* let mega be anchored to nav-inner instead */
}

/* --- Mega base --- */
.mega-wrapper {
    display: flex;
    justify-content: center;
    pointer-events: auto;
    margin-top: 0.4rem;
    z-index: 80;
    /* above hero */
}

.mega {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 1.5rem;
    padding: 1.4rem 1.6rem;
    background: #ffffff;
    border-radius: 0.9rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
    width: 860px;
    max-width: 90vw;
}

.mega--narrow,
.mega--small {
    grid-template-columns: 1fr;
}

.mega-left {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.2rem;
}

.mega-left--3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.mega-left--2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.mega-left--partnerships {
    display: grid;
    grid-template-columns: 1fr;
}

.mega-column {
    font-size: 0.84rem;
}

.mega-column-partnership {
    font-size: 0.84rem;
    width: 48.8%;
}

.mega-heading {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9ca3af;
    margin-bottom: 0.4rem;
}

.mega-link {
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    background: none;
    padding: 0.45rem 0.4rem;
    border-radius: 0.6rem;
    cursor: pointer;
    color: #111827;
    font-size: 0.86rem;
    text-decoration: none;
}

.mega-link span {
    display: block;
    font-size: 0.76rem;
    color: #6b7280;
}

.mega-link:hover {
    background: #f3f4ff;
}

/* Partnerships tweaks */
.nav-item.has-mega:last-of-type .mega-left {
    grid-template-columns: 1fr;
}

.nav-item.has-mega:last-of-type .mega {
    overflow: hidden;
}

.mega--partnerships {
    width: 860px;
    max-width: 90vw;
    overflow: hidden;
}

.partnership-title {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #111827;
}

.partnership-text {
    font-size: 0.9rem;
    color: #4b5563;
    line-height: 1.55;
    margin-bottom: 1.2rem;
}

.partnership-btn {
    align-self: flex-start;
    padding-inline: 1.8rem;
}

/* Partners marquee */
.partners-section {
    margin-top: 1.2rem;
    border-top: 1px solid #e5e7eb;
    padding-top: 0.9rem;
}

.partners-label {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9ca3af;
    margin-bottom: 0.4rem;
}

.partners-marquee {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 0.2rem 0;
}

.partners-track {
    display: inline-flex;
    align-items: center;
    gap: 1.5rem;
    animation: partners-scroll 25s linear infinite;
}

.partners-marquee:hover .partners-track {
    animation-play-state: paused;
}

.partner-item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: #eef2ff;
    border: 1px solid #e5e7eb;
    white-space: nowrap;
}

.partner-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 6px;
}

.partner-name {
    font-size: 0.82rem;
    color: #111827;
}

@keyframes partners-scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* Button used inside nav */
.btn-primary {
    border-radius: 999px;
    padding: 0.7rem 1.6rem;
    font-size: 0.92rem;
    cursor: pointer;
    border: 1px solid transparent;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    border-color: #2563eb;
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.3);
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease,
        color 0.12s ease;
}

.btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 36px rgba(37, 99, 235, 0.55);
}

/* ---------- DESKTOP: center mega under whole navbar ---------- */
@media (min-width: 961px) {
    .mega-wrapper {
        position: absolute;
        top: 100%;
        /* directly under nav-inner */
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        /* match nav-inner width */
        max-width: 1300px;
        /* same as .nav-inner */
        margin-top: 0;
    }

    .mega {
        width: 100%;
        max-width: 1040px;
        /* card itself stays nice and narrow */
        margin: 0 auto;
    }
}


/* ---------- MOBILE ---------- */
@media (max-width: 960px) {
    .nav-inner {
        padding: 0.8rem 1rem;
    }

    .nav-toggle {
        display: block;
    }

    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin-left: 0;
        padding: 0.75rem 1rem 1rem;
        background: #ffffff;
        border-bottom: 1px solid #e5e7eb;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;

        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transform: translateY(-4px);
        transition: max-height 0.22s ease, opacity 0.18s ease, transform 0.18s ease;
        z-index: 55;
    }

    .nav-links--open {
        max-height: 75vh;
        overflow-y: auto;
        opacity: 1;
        transform: translateY(0);
    }

    .nav-item {
        width: 100%;
    }

    .nav-link {
        width: 100%;
        text-align: left;
        padding: 0.4rem 0;
    }

    .nav-link::after {
        display: none;
    }

    /* On mobile, mega is just block content */
    .mega-wrapper {
        display: flex;
        justify-content: center;
        pointer-events: auto;
        margin-top: 0;
        /* no gap by default */
        z-index: 80;
    }


    .mega {
        box-shadow: none;
        border-radius: 0.6rem;
        padding: 0.9rem 0.9rem 0.95rem;
    }

    .mega-left {
        grid-template-columns: 1fr;
    }

    .nav-right-actions--desktop {
        display: none;
    }

    .nav-right-actions--inline {
        display: flex;
        margin-left: 0;
        margin-top: 0.4rem;
        justify-content: flex-start;
    }
}
</style>

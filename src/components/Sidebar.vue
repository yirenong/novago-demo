<template>
    <aside :class="['app-sidebar', { collapsed }]">
        <div class="sidebar-inner">
            <!-- Logo / brand -->
            <div class="logo-section">
                <div class="logo-mark">
                    <span>N</span>
                </div>
                <div class="logo-text" v-if="!collapsedOnDesktop">
                    <span class="logo-name">NovaGo</span>
                    <span class="logo-tagline">Control Center</span>
                </div>
            </div>

            <!-- Close button on mobile only -->
            <button class="close-btn" @click="emit('toggle-sidebar')">&times;</button>

            <nav>
                <div class="menu-section">
                    <span class="menu-title" v-if="!collapsedOnDesktop">MENU</span>
                    <ul class="menu">
                        <li>
                            <router-link to="/" class="menu-link" @click="handleLinkClick">
                                <i class="fas fa-home"></i>
                                <span class="link-text" v-if="!collapsedOnDesktop">Dashboard</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="menu-section">
                    <span class="menu-title" v-if="!collapsedOnDesktop">FINANCE MODULES</span>
                    <ul class="menu">
                        <li>
                            <router-link to="/payroll" class="menu-link" @click="handleLinkClick">
                                <i class="fas fa-users"></i>
                                <span class="link-text" v-if="!collapsedOnDesktop">Payroll</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/rental-collection" class="menu-link" @click="handleLinkClick">
                                <i class="fas fa-car-side"></i>
                                <span class="link-text" v-if="!collapsedOnDesktop">Rental Collection</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/corporate-banking" class="menu-link" @click="handleLinkClick">
                                <i class="fas fa-university"></i>
                                <span class="link-text" v-if="!collapsedOnDesktop">Corporate Banking</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </aside>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ collapsed: Boolean })
const emit = defineEmits(['toggle-sidebar'])

// On desktop, "collapsed" = narrow icon-only; on mobile, text always visible when open
const collapsedOnDesktop = computed(() => {
    if (window.innerWidth <= 768) return false
    return props.collapsed
})

const handleLinkClick = () => {
    // Only auto-close / toggle sidebar on mobile
    if (window.innerWidth <= 768) {
        emit('toggle-sidebar')
    }
}
</script>

<style scoped>
.app-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 15%;
    background: #ffffff;
    color: #111827;
    padding-top: 16px;
    border-right: 1px solid #e5e7eb;
    box-shadow: 2px 0 8px rgba(15, 23, 42, 0.04);
    transition: width 0.3s, transform 0.3s;
    overflow: hidden;
    z-index: 20;
}

.app-sidebar.collapsed {
    width: 5%;
}

.sidebar-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
}

/* Logo */

.logo-section {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 16px 20px;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 16px;
}

.logo-mark {
    width: 32px;
    height: 32px;
    border-radius: 12px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 0.95rem;
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
}

.logo-name {
    font-size: 0.9rem;
    font-weight: 600;
}

.logo-tagline {
    font-size: 0.72rem;
    color: #9ca3af;
}

/* Menu */

.menu-section {
    margin-bottom: 24px;
}

.menu-title {
    display: block;
    margin-left: 16px;
    margin-bottom: 8px;
    font-size: 11px;
    letter-spacing: 1px;
    color: #9ca3af;
    text-transform: uppercase;
}

.menu {
    list-style: none;
    margin: 0;
    padding: 0;
}

.menu li {
    margin: 4px 0;
}

.menu-link {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    color: inherit;
    text-decoration: none;
    border-radius: 999px;
    margin: 0 8px;
    gap: 10px;
    font-size: 0.9rem;
    transition: background 0.2s, color 0.2s, transform 0.1s;
}

.menu-link i {
    font-size: 16px;
    width: 18px;
    text-align: center;
}

.menu-link:hover {
    background: #eef2ff;
    color: #2563eb;
}

.router-link-active {
    background: #e0ebff;
    color: #1d4ed8;
}

/* Collapsed styles (desktop) */

.app-sidebar.collapsed .menu-section {
    margin-bottom: 16px;
}

.app-sidebar.collapsed .menu-link {
    justify-content: center;
    padding: 10px 0;
    margin: 0;
}

/* Close button (mobile) */

.close-btn {
    display: none;
    position: absolute;
    top: 10px;
    right: 12px;
    background: none;
    border: none;
    color: #6b7280;
    font-size: 24px;
    cursor: pointer;
}

/* Mobile */

@media (max-width: 768px) {
    .app-sidebar {
        transform: translateX(-100%);
        width: 0;
        z-index: 1000;
    }

    .app-sidebar.collapsed {
        transform: translateX(0);
        width: 70%;
        max-width: 280px;
    }

    .close-btn {
        display: block;
    }

    .logo-section {
        padding-right: 40px;
    }

    .menu-title,
    .link-text {
        display: inline-block !important;
    }

    .app-sidebar.collapsed .menu-link {
        justify-content: flex-start;
        padding: 12px 18px;
        margin: 0 4px;
    }
}
</style>

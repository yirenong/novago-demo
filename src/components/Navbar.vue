<template>
    <header :class="['app-header', { collapsed }]">
        <!-- Left side: hamburger + brand -->
        <div class="header-left">
            <button class="icon-button hamburger-menu" @click="$emit('toggle-sidebar')">
                <i class="fas fa-bars"></i>
            </button>

            <div class="brand">
                <div class="brand-mark">N</div>
                <div class="brand-text">
                    <span class="brand-name">NovaGo</span>
                    <span class="brand-subtitle">Finance Console</span>
                </div>
            </div>
        </div>

        <div class="flex-spacer"></div>

        <!-- Right side: role + actions + logout -->
        <div class="header-right">
            <div v-if="role" class="role-chip">
                <span class="role-dot"></span>
                <span class="role-label">{{ roleLabel }}</span>
            </div>

            <button class="icon-button" @click="toggleFullScreen" title="Toggle fullscreen">
                <i class="fas fa-expand"></i>
            </button>

            <button class="icon-button" @click="toggleTheme" title="Toggle theme">
                <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
            </button>

            <div class="user-pill">
                <div class="user-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-meta">
                    <span class="user-name">Signed in</span>
                    <span class="user-role">{{ roleLabel }}</span>
                </div>
            </div>

            <button class="logout-button" @click="handleLogout">
                <i class="fas fa-sign-out-alt"></i>
                <span class="logout-text">Logout</span>
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({ collapsed: Boolean })

const isDarkMode = ref(false)
const role = ref('')
const router = useRouter()

onMounted(() => {
    const storedRole = sessionStorage.getItem('novago_role')
    if (storedRole) role.value = storedRole

    isDarkMode.value = document.body.classList.contains('dark-mode')
})

const roleLabel = computed(() => {
    if (!role.value) return 'User'
    return role.value === 'admin' ? 'Admin' : 'User'
})

function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
    document.body.classList.toggle('dark-mode', isDarkMode.value)
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.()
    } else {
        document.exitFullscreen?.()
    }
}

function handleLogout() {
    // Clear session
    sessionStorage.removeItem('novago_loggedIn')
    sessionStorage.removeItem('novago_role')
    sessionStorage.removeItem('novago_lastActive')

    // Go back to login route
    router.push({ name: 'login' })
}
</script>

<style scoped>
.app-header {
    position: fixed;
    top: 0;
    left: 15%;
    width: calc(100% - 15%);
    height: 60px;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    padding: 0 20px;
    transition: left 0.3s, width 0.3s;
    z-index: 10;
    box-shadow: 0 4px 10px rgba(15, 23, 42, 0.06);
}

.app-header.collapsed {
    left: 5%;
    width: calc(100% - 5%);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
}

.brand-mark {
    width: 28px;
    height: 28px;
    border-radius: 9px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 700;
    color: #ffffff;
}

.brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
}

.brand-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #111827;
}

.brand-subtitle {
    font-size: 0.72rem;
    color: #9ca3af;
}

.flex-spacer {
    flex: 1;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* Icon buttons */

.icon-button {
    background: none;
    border: none;
    cursor: pointer;
    color: #6b7280;
    font-size: 18px;
    padding: 6px;
    border-radius: 999px;
    transition: background 0.2s, color 0.2s;
}

.icon-button:hover {
    background: #eef2ff;
    color: #2563eb;
}

.hamburger-menu {
    font-size: 20px;
}

/* Role chip */

.role-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid #d1d5db;
    background: #f9fafb;
    font-size: 0.74rem;
    color: #4b5563;
}

.role-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #22c55e;
}

/* User pill */

.user-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 10px;
    border-radius: 999px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
}

.user-avatar {
    width: 26px;
    height: 26px;
    border-radius: 999px;
    background: #2563eb;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
}

.user-meta {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
}

.user-name {
    font-size: 0.78rem;
    color: #111827;
}

.user-role {
    font-size: 0.7rem;
    color: #6b7280;
}

/* Logout button */

.logout-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #ef4444;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, box-shadow 0.15s;
}

.logout-button i {
    font-size: 14px;
}

.logout-button:hover {
    background: #fee2e2;
    color: #b91c1c;
    box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.2);
}

.logout-text {
    display: inline-block;
}

/* Mobile */

@media (max-width: 768px) {
    .app-header {
        left: 0 !important;
        width: 100% !important;
        padding: 0 10px;
    }

    .brand-text {
        display: none;
    }

    .user-meta {
        display: none;
    }

    .logout-text {
        display: none;
    }
}
</style>

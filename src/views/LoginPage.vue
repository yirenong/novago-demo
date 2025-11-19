<template>
    <div class="auth-layout">
        <!-- Left brand / marketing side (65%) -->
        <section class="brand-panel">
            <div class="brand-inner">
                <div class="brand-logo">
                    <div class="logo-mark">N</div>
                    <span class="logo-text">NovaGo</span>
                </div>

                <h1 class="brand-title">
                    Finance operations, simplified.
                </h1>
                <p class="brand-subtitle">
                    NovaGo brings payroll, rental collection, and corporate banking into one clean workspace
                    built for SMEs and car leasing fleets.
                </p>

                <div class="brand-grid">
                    <div class="brand-card">
                        <p class="card-label">Payroll</p>
                        <p class="card-text">Run salaries on time with clear approval flows.</p>
                    </div>
                    <div class="brand-card">
                        <p class="card-label">Rental collection</p>
                        <p class="card-text">Track leases, invoices, and paid / unpaid status.</p>
                    </div>
                    <div class="brand-card">
                        <p class="card-label">Corporate banking</p>
                        <p class="card-text">See balances and payouts across linked accounts.</p>
                    </div>
                </div>

                <p class="brand-footnote">
                    NovaGo uses role-based access and detailed audit logs to keep your finance data safe.
                </p>
            </div>
        </section>

        <!-- Right login form side (35%) -->
        <section class="form-panel">
            <div class="form-card">
                <header class="form-header">
                    <h2>Sign in to NovaGo</h2>
                    <p>For authorised users only.</p>
                </header>

                <form @submit.prevent="handleSubmit" class="form-body" novalidate>
                    <!-- Company ID -->
                    <div class="field">
                        <label for="companyId">Company ID</label>
                        <input id="companyId" v-model.trim="companyId" type="text" autocomplete="organization"
                            placeholder="e.g. novago-sg" required />
                    </div>

                    <!-- Email -->
                    <div class="field">
                        <label for="email">Work email</label>
                        <input id="email" v-model.trim="email" type="email" autocomplete="email"
                            placeholder="you@company.com" required />
                    </div>

                    <!-- Password + toggle -->
                    <div class="field">
                        <div class="field-label-row">
                            <label for="password">Password</label>
                            <button type="button" class="link-button" @click="showPassword = !showPassword">
                                {{ showPassword ? 'Hide' : 'Show' }}
                            </button>
                        </div>
                        <input id="password" :type="showPassword ? 'text' : 'password'" v-model="password"
                            autocomplete="current-password" required />
                    </div>

                    <!-- Remember + Forgot -->
                    <div class="form-row">
                        <label class="checkbox">
                            <input type="checkbox" v-model="rememberMe" />
                            <span>Remember this device</span>
                        </label>

                        <button type="button" class="link-button">
                            Forgot password?
                        </button>
                    </div>

                    <!-- Error -->
                    <p v-if="error" class="error-text">
                        {{ error }}
                    </p>

                    <!-- Submit -->
                    <button class="primary-button" type="submit" :disabled="!canSubmit || isSubmitting">
                        <span v-if="!isSubmitting">Sign in</span>
                        <span v-else>Signing in…</span>
                    </button>
                </form>

                <div class="form-footer">
                    <p>
                        Want extra protection?
                        <button type="button" class="link-button">
                            Enable multi-factor authentication
                        </button>
                    </p>
                </div>
            </div>

            <footer class="legal-footer">
                <span>© {{ new Date().getFullYear() }} NovaGo</span>
                <span>•</span>
                <button type="button" class="link-button">Security</button>
                <button type="button" class="link-button">Privacy</button>
            </footer>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const companyId = ref('')
const email = ref('')
const password = ref('')
const rememberMe = ref(true)
const showPassword = ref(false)
const isSubmitting = ref(false)
const error = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const canSubmit = computed(() => {
    return (
        companyId.value.trim().length > 2 &&
        emailRegex.test(email.value.trim()) &&
        password.value.length >= 8
    )
})

const handleSubmit = async () => {
    if (!canSubmit.value || isSubmitting.value) return

    isSubmitting.value = true
    error.value = ''

    try {
        // TODO: call your real login API here if you have one
        await new Promise(resolve => setTimeout(resolve, 600))

        // Simple role logic (you can replace with real backend data)
        let role = 'user'
        if (email.value.toLowerCase().includes('admin') || companyId.value.toLowerCase() === 'admin') {
            role = 'admin'
        }

        const now = Date.now()

        // Store session info
        sessionStorage.setItem('novago_loggedIn', 'true')
        sessionStorage.setItem('novago_role', role)
        sessionStorage.setItem('novago_lastActive', String(now))

        // Go to dashboard
        router.push({ name: 'dashboard' })
    } catch (e) {
        error.value = 'Invalid credentials. Please check your details and try again.'
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
/* === Layout === */

.auth-layout {
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 65% 35%;
    background: #f4f5fb;
    color: #111827;
}

/* Left brand panel (65%) */
.brand-panel {
    padding: 3.5rem 3rem;
    display: flex;
    align-items: center;
    border-right: 1px solid rgba(148, 163, 184, 0.4);
    background: radial-gradient(circle at top left, #ffffff, #e5edff);
}

.brand-inner {
    max-width: 560px;
}

.brand-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 2.5rem;
}

.logo-mark {
    width: 32px;
    height: 32px;
    border-radius: 11px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
    color: #ffffff;
}

.logo-text {
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-size: 0.78rem;
    color: #64748b;
}

.brand-title {
    font-size: 2.1rem;
    line-height: 1.15;
    margin-bottom: 0.9rem;
    color: #0f172a;
}

.brand-subtitle {
    font-size: 0.98rem;
    color: #64748b;
    margin-bottom: 2rem;
}

.brand-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.brand-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0.9rem;
    padding: 0.9rem 1rem;
    border: 1px solid rgba(148, 163, 184, 0.4);
}

.card-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.3rem;
}

.card-text {
    font-size: 0.78rem;
    color: #6b7280;
}

.brand-footnote {
    font-size: 0.8rem;
    color: #6b7280;
}

/* Right form panel (35%) */

.form-panel {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2.3rem 1.8rem;
}

.form-card {
    max-width: 420px;
    width: 100%;
    margin: auto;
    background: #ffffff;
    border-radius: 1.1rem;
    border: 1px solid rgba(148, 163, 184, 0.6);
    padding: 2.1rem 2rem 1.8rem;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

.form-header h2 {
    font-size: 1.4rem;
    margin-bottom: 0.25rem;
    color: #0f172a;
}

.form-header p {
    font-size: 0.88rem;
    color: #6b7280;
}

.form-body {
    margin-top: 1.7rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
}

/* === Fields === */

.field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.field label {
    font-size: 0.82rem;
    color: #4b5563;
}

.field input {
    border-radius: 0.7rem;
    border: 1px solid #d1d5db;
    background: #f9fafb;
    padding: 0.65rem 0.8rem;
    color: #111827;
    font-size: 0.9rem;
    outline: none;
    transition: border 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}

.field input::placeholder {
    color: #9ca3af;
}

.field input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.35);
    background: #ffffff;
}

.field-label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Row under password */

.form-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8rem;
}

/* Controls */

.checkbox {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    cursor: pointer;
    user-select: none;
    color: #6b7280;
}

.checkbox input {
    width: 14px;
    height: 14px;
    accent-color: #2563eb;
}

.link-button {
    border: none;
    background: none;
    padding: 0;
    font-size: 0.8rem;
    color: #2563eb;
    cursor: pointer;
    text-decoration: none;
}

.link-button:hover {
    text-decoration: underline;
}

/* Error */

.error-text {
    font-size: 0.8rem;
    color: #dc2626;
}

/* Primary button */

.primary-button {
    margin-top: 0.4rem;
    border: none;
    width: 100%;
    border-radius: 0.9rem;
    padding: 0.75rem 1rem;
    font-weight: 500;
    font-size: 0.92rem;
    cursor: pointer;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.12s ease, box-shadow 0.12s ease, opacity 0.15s ease;
}

.primary-button:hover:enabled {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
}

.primary-button:disabled {
    opacity: 0.6;
    cursor: default;
    box-shadow: none;
}

/* Footer */

.form-footer {
    margin-top: 1.2rem;
    font-size: 0.78rem;
    color: #6b7280;
    text-align: center;
}

.legal-footer {
    margin-top: auto;
    padding-top: 1.2rem;
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 0.76rem;
    color: #9ca3af;
}

/* === Responsive === */

@media (max-width: 960px) {
    .auth-layout {
        grid-template-columns: 1fr;
    }

    .brand-panel {
        display: none;
    }

    .form-panel {
        padding: 2rem 1.5rem 1.5rem;
    }

    .form-card {
        max-width: 100%;
    }
}
</style>

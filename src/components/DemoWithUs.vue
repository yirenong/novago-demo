<template>
    <section :id="sectionId" class="section">
        <div class="section-inner narrow">
            <h2 class="section-title">{{ title }}</h2>
            <p class="section-text">{{ subtitle }}</p>

            <form class="contact-form" @submit.prevent="submitInterest">
                <div class="form-row">
                    <div class="field">
                        <label for="name">Full name</label>
                        <input id="name" v-model.trim="form.name" type="text" placeholder="Jane Tan" required />
                    </div>
                    <div class="field">
                        <label for="company">Company</label>
                        <input id="company" v-model.trim="form.company" type="text" placeholder="Nova Logistics Pte Ltd"
                            required />
                    </div>
                </div>

                <div class="form-row">
                    <div class="field">
                        <label for="email">Work email</label>
                        <input id="email" v-model.trim="form.email" type="email" placeholder="you@company.com"
                            required />
                    </div>
                    <div class="field">
                        <label for="size">Company size</label>
                        <select id="size" v-model="form.size" required>
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
                    <textarea id="message" v-model.trim="form.message" rows="4" :placeholder="messagePlaceholder"
                        required></textarea>
                </div>

                <button type="submit" class="btn-primary form-submit" :disabled="isSubmitting">
                    {{ isSubmitting ? 'Submitting...' : buttonText }}
                </button>
            </form>
        </div>

        <!-- Modal -->
        <teleport to="body">
            <div v-if="modalOpen" class="modal-backdrop" @click.self="closeModal">
                <div class="modal-card" role="dialog" aria-modal="true">

                    <div class="modal-top">
                        <div class="modal-iconwrap" :class="`is-${submitState}`" aria-hidden="true">
                            <!-- Loading -->
                            <svg v-if="submitState === 'loading'" class="modal-icon modal-icon--spin"
                                viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"
                                    opacity="0.25" />
                                <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" stroke-width="2" />
                            </svg>

                            <!-- Success -->
                            <svg v-else-if="submitState === 'success'" class="modal-icon" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9.0 16.2 4.8 12l-1.4 1.4L9.0 19 21 7l-1.4-1.4z" />
                            </svg>

                            <!-- Error -->
                            <svg v-else class="modal-icon" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z" />
                            </svg>
                        </div>

                        <button class="modal-x" type="button" @click="closeModal" aria-label="Close">✕</button>
                    </div>

                    <div class="modal-body">
                        <h3 class="modal-title">
                            <span v-if="submitState === 'loading'">Submitting your request</span>
                            <span v-else-if="submitState === 'success'">Request received</span>
                            <span v-else>Submission failed</span>
                        </h3>

                        <p class="modal-sub">
                            <span v-if="submitState === 'loading'">Hang tight — we’re sending your details to the
                                team.</span>
                            <span v-else-if="submitState === 'success'">{{ successMessage }}</span>
                            <span v-else>{{ submitError || errorMessage }}</span>
                        </p>

                        <div v-if="submitState === 'success'" class="modal-mini">
                            <div class="mini-row">
                                <span class="mini-dot"></span>
                                <span>We’ll contact you via email.</span>
                            </div>
                            <div class="mini-row">
                                <span class="mini-dot"></span>
                                <span>You can close this anytime, your submission had been submitted.</span>
                            </div>
                        </div>
                    </div>

                    <div class="modal-actions">
                        <button v-if="submitState !== 'loading'" type="button" class="btn-primary" @click="closeModal">
                            OK
                        </button>

                        <button v-else type="button" class="btn-secondary" @click="closeModal">
                            Hide
                        </button>
                    </div>

                </div>
            </div>
        </teleport>

    </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
    // UI text
    sectionId: { type: String, default: 'contact' },
    title: { type: String, default: 'Interested? Demo with Us Now' },
    subtitle: {
        type: String,
        default:
            'Ready to streamline mass payouts across 190+ countries? Share a few details and our team will reach out with a personalized walkthrough.'
    },
    buttonText: { type: String, default: 'Submit interest' },
    messagePlaceholder: {
        type: String,
        default:
            'e.g. Mass vendor payouts, creator payments, gig worker disbursements, real-time cross-border payroll...'
    },

    // tracking + API
    source: { type: String, default: 'Landing Page' },
    endpoint: { type: String, default: '/gs' }, // ✅ Vite proxy route
    successMessage: {
        type: String,
        default: 'Thanks! Our team will reach out to you shortly.'
    },
    errorMessage: {
        type: String,
        default: 'Submission failed. Please try again.'
    }
})

const form = ref({
    name: '',
    company: '',
    email: '',
    size: '',
    message: ''
})

const isSubmitting = ref(false)
const modalOpen = ref(false)
const submitState = ref('loading') // loading | success | error
const submitError = ref('')

const openModal = (state) => {
    submitState.value = state
    modalOpen.value = true
}

const closeModal = () => {
    modalOpen.value = false
}

const submitInterest = async () => {
    submitError.value = ''
    isSubmitting.value = true
    openModal('loading')

    const payload = {
        name: form.value.name,
        company: form.value.company,
        email: form.value.email,
        size: form.value.size,
        message: form.value.message,
        source: props.source
    }

    try {
        await axios.post(props.endpoint, payload, {
            headers: { 'Content-Type': 'application/json' }
        })

        // clear form
        form.value = { name: '', company: '', email: '', size: '', message: '' }
        openModal('success') // ✅ stays open until user closes
    } catch (err) {
        submitError.value = err?.message || ''
        openModal('error') // ✅ stays open until user closes
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
/* Uses your same page styles (section, section-inner, contact-form, etc.)
   Add only modal styles here. */

.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.55);
    display: grid;
    place-items: center;
    padding: 18px;
    z-index: 9999;
}

.modal-card {
    width: min(560px, 92vw);
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid rgba(229, 231, 235, 1);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
    overflow: hidden;
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid #e5e7eb;
}

.modal-title {
    font-weight: 700;
    color: #111827;
}

.modal-x {
    border: 0;
    background: transparent;
    font-size: 16px;
    cursor: pointer;
    color: #6b7280;
}

.modal-body {
    padding: 16px;
}

.modal-row {
    display: flex;
    gap: 12px;
    align-items: center;
    color: #374151;
    line-height: 1.5;
}

.modal-actions {
    padding: 14px 16px 16px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.spinner {
    width: 18px;
    height: 18px;
    border-radius: 999px;
    border: 2px solid rgba(17, 24, 39, 0.2);
    border-top-color: rgba(37, 99, 235, 1);
    animation: spin 0.8s linear infinite;
}

.btn-secondary {
    border-radius: 999px;
    padding: 0.7rem 1.2rem;
    font-size: 0.92rem;
    cursor: pointer;
    border: 1px solid #2563eb;
    background: #ffffff;
    color: #2563eb;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.55);
    display: grid;
    place-items: center;
    padding: 18px;
    z-index: 9999;
}

.modal-card {
    width: min(560px, 92vw);
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid rgba(229, 231, 235, 1);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
    overflow: hidden;
}

.modal-top {
    position: relative;
    padding: 18px 18px 8px;
    display: flex;
    justify-content: center;
}

.modal-x {
    position: absolute;
    right: 14px;
    top: 12px;
    border: 0;
    background: rgba(243, 244, 246, 0.9);
    width: 34px;
    height: 34px;
    border-radius: 999px;
    font-size: 14px;
    cursor: pointer;
    color: #6b7280;
    display: grid;
    place-items: center;
    transition: transform 0.12s ease, background 0.12s ease;
}

.modal-x:hover {
    transform: translateY(-1px);
    background: #eef2ff;
}

.modal-iconwrap {
    width: 62px;
    height: 62px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(229, 231, 235, 1);
    box-shadow: 0 14px 30px rgba(148, 163, 184, 0.28);
}

.modal-iconwrap.is-loading {
    background: radial-gradient(circle at top left, #e0f2fe, #ffffff 60%);
    color: #2563eb;
}

.modal-iconwrap.is-success {
    background: radial-gradient(circle at top left, #dcfce7, #ffffff 60%);
    color: #16a34a;
}

.modal-iconwrap.is-error {
    background: radial-gradient(circle at top left, #fee2e2, #ffffff 60%);
    color: #dc2626;
}

.modal-icon {
    width: 28px;
    height: 28px;
}

.modal-icon--spin {
    animation: spin 0.85s linear infinite;
    transform-origin: center;
}

.modal-body {
    padding: 10px 18px 6px;
    text-align: center;
}

.modal-title {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 750;
    color: #111827;
}

.modal-sub {
    margin: 8px 0 0;
    color: #4b5563;
    line-height: 1.55;
    font-size: 0.95rem;
}

.modal-mini {
    margin: 14px auto 0;
    text-align: left;
    max-width: 440px;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 12px 12px;
}

.mini-row {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    color: #374151;
    font-size: 0.9rem;
    line-height: 1.45;
}

.mini-row+.mini-row {
    margin-top: 8px;
}

.mini-dot {
    width: 9px;
    height: 9px;
    border-radius: 999px;
    margin-top: 6px;
    background: #2563eb;
    flex: 0 0 auto;
}

.modal-actions {
    padding: 14px 18px 18px;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.btn-secondary {
    border-radius: 999px;
    padding: 0.7rem 1.2rem;
    font-size: 0.92rem;
    cursor: pointer;
    border: 1px solid #2563eb;
    background: #ffffff;
    color: #2563eb;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>

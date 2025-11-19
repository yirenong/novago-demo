<template>
    <div class="chart-card">
        <div class="chart-header">
            <h3 class="chart-title">{{ title }}</h3>
            <div class="chart-actions">
                <slot name="actions" />
            </div>
        </div>

        <div class="chart-body">
            <canvas ref="canvas"></canvas>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Chart } from 'chart.js/auto'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    chartData: {
        type: Object,
        required: true
    }
})

const canvas = ref(null)
let chartInstance = null

const createChart = () => {
    if (!canvas.value) return

    const ctx = canvas.value.getContext('2d')
    if (chartInstance) {
        chartInstance.destroy()
    }

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: props.chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false, // <- key so height follows .chart-body
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: '#6b7280'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e5e7eb'
                    },
                    ticks: {
                        font: { size: 11 },
                        color: '#6b7280'
                    }
                }
            }
        }
    })
}

onMounted(() => {
    createChart()
})

onBeforeUnmount(() => {
    if (chartInstance) {
        chartInstance.destroy()
    }
})

// If chartData changes (even though yours is hardcoded now), update nicely
watch(
    () => props.chartData,
    () => {
        createChart()
    },
    { deep: true }
)
</script>

<style scoped>
.chart-card {
    background: #ffffff;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 0.9rem 1rem 1rem;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.03);
    display: flex;
    flex-direction: column;
}

/* Header */
.chart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.6rem;
}

.chart-title {
    font-size: 0.98rem;
    font-weight: 600;
    color: #111827;
}

.chart-actions {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

/* Chart area */
.chart-body {
    position: relative;
    width: 100%;
    height: 220px;
    /* <- adjust this to control height */
}

/* Make canvas fill that area */
.chart-body canvas {
    width: 100% !important;
    height: 100% !important;
}
</style>

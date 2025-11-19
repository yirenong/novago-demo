<template>
    <div class="page">
        <header class="page-header">
            <div>
                <h1>Overview</h1>
                <p class="subtitle">
                    Snapshot of payroll, rental collection, and corporate banking for NovaGo.
                </p>
            </div>
        </header>

        <!-- Top KPIs -->
        <section class="kpi-grid">
            <div class="kpi-card">
                <p class="kpi-label">Payroll this month</p>
                <p class="kpi-value">$128,450</p>
                <p class="kpi-meta">142 employees • 96% completed</p>
            </div>
            <div class="kpi-card">
                <p class="kpi-label">Rental collected</p>
                <p class="kpi-value">$64,320</p>
                <p class="kpi-meta">118 active leases • 92% on time</p>
            </div>
            <div class="kpi-card">
                <p class="kpi-label">Corporate balance</p>
                <p class="kpi-value">$842,910</p>
                <p class="kpi-meta">3 bank accounts • 2 upcoming payouts</p>
            </div>
        </section>

        <!-- Proper Chart.js bar chart -->
        <section class="chart-row">
            <BarChartCard title="Monthly totals by module" :chartData="moduleBarData">
                <template #actions>
                    <span class="chip">This month</span>
                </template>
            </BarChartCard>
        </section>

        <!-- Three-column summary -->
        <section class="grid-3">
            <div class="panel">
                <div class="panel-header">
                    <div>
                        <h2>Payroll</h2>
                        <p class="panel-subtitle">Recent runs</p>
                    </div>
                    <router-link to="/payroll" class="link-button">
                        View payroll
                    </router-link>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Run name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th class="align-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nov 2025 • SG staff</td>
                            <td>15 Nov</td>
                            <td><span class="badge badge-success">Completed</span></td>
                            <td class="align-right">$98,340</td>
                        </tr>
                        <tr>
                            <td>Nov 2025 • MY staff</td>
                            <td>14 Nov</td>
                            <td><span class="badge badge-success">Completed</span></td>
                            <td class="align-right">$21,560</td>
                        </tr>
                        <tr>
                            <td>Contractors • APAC</td>
                            <td>Upcoming</td>
                            <td><span class="badge badge-pending">Scheduled</span></td>
                            <td class="align-right">$8,550</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <div>
                        <h2>Rental collection</h2>
                        <p class="panel-subtitle">Car leasing portfolio</p>
                    </div>
                    <router-link to="/rental-collection" class="link-button">
                        View rentals
                    </router-link>
                </div>
                <ul class="list">
                    <li>
                        <div>
                            <p class="list-title">On-time payments</p>
                            <p class="list-meta">92% of leases paid by due date</p>
                        </div>
                        <span class="list-value">+3.2%</span>
                    </li>
                    <li>
                        <div>
                            <p class="list-title">Overdue amount</p>
                            <p class="list-meta">12 contracts overdue > 7 days</p>
                        </div>
                        <span class="list-value warning">$4,820</span>
                    </li>
                    <li>
                        <div>
                            <p class="list-title">Average monthly rental</p>
                            <p class="list-meta">Per active vehicle</p>
                        </div>
                        <span class="list-value">$545</span>
                    </li>
                </ul>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <div>
                        <h2>Corporate banking</h2>
                        <p class="panel-subtitle">Cash snapshot</p>
                    </div>
                    <router-link to="/corporate-banking" class="link-button">
                        View accounts
                    </router-link>
                </div>
                <ul class="list">
                    <li>
                        <div>
                            <p class="list-title">Operating account</p>
                            <p class="list-meta">Daily expenses & payroll</p>
                        </div>
                        <span class="list-value">$420,300</span>
                    </li>
                    <li>
                        <div>
                            <p class="list-title">Rental collections</p>
                            <p class="list-meta">Dedicated account for leases</p>
                        </div>
                        <span class="list-value">$230,110</span>
                    </li>
                    <li>
                        <div>
                            <p class="list-title">Reserve / savings</p>
                            <p class="list-meta">Buffer for 3 months OPEX</p>
                        </div>
                        <span class="list-value">$192,500</span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import BarChartCard from '../components/BarChartCard.vue'

const moduleBarData = ref({
    labels: ['Payroll', 'Rental', 'Banking'],
    datasets: [
        {
            label: 'Monthly total (SGD)',
            data: [128450, 64320, 842910],
            backgroundColor: ['#2563eb', '#22c55e', '#eab308'],
            borderRadius: 8
        }
    ]
})
</script>

<style scoped>
.page {
    padding: 4px;
    color: #111827;
}

.page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.page-header h1 {
    font-size: 1.4rem;
    margin-bottom: 0.2rem;
}

.subtitle {
    font-size: 0.9rem;
    color: #6b7280;
}

/* KPI row */

.kpi-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 1.2rem;
}

.kpi-card {
    background: #ffffff;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 1rem 1.2rem;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.03);
}

.kpi-label {
    font-size: 0.8rem;
    color: #6b7280;
    margin-bottom: 0.3rem;
}

.kpi-value {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
}

.kpi-meta {
    font-size: 0.78rem;
    color: #9ca3af;
}

/* Chart row */

.chart-row {
    margin-bottom: 1.4rem;
}

/* Panels */

.grid-3 {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 1rem;
}

.panel {
    background: #ffffff;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 1rem 1.1rem 1rem;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.03);
}

.panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.9rem;
}

.panel-header h2 {
    font-size: 0.98rem;
    margin-bottom: 0.1rem;
}

.panel-subtitle {
    font-size: 0.78rem;
    color: #9ca3af;
}

.link-button {
    font-size: 0.78rem;
    color: #2563eb;
    text-decoration: none;
}

/* Table */

.table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8rem;
}

.table th,
.table td {
    padding: 0.45rem 0.2rem;
}

.table th {
    text-align: left;
    color: #6b7280;
    font-weight: 500;
    border-bottom: 1px solid #e5e7eb;
}

.table tbody tr:nth-child(odd) {
    background: #f9fafb;
}

.align-right {
    text-align: right;
}

/* Badges */

.badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 0.7rem;
}

.badge-success {
    background: #dcfce7;
    color: #166534;
}

.badge-pending {
    background: #fef3c7;
    color: #92400e;
}

/* List cards */

.list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}

.list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.list-title {
    font-size: 0.84rem;
}

.list-meta {
    font-size: 0.76rem;
    color: #9ca3af;
}

.list-value {
    font-size: 0.84rem;
    font-weight: 600;
    color: #16a34a;
}

.list-value.warning {
    color: #dc2626;
}

/* Little pill above chart */

.chip {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 999px;
    background: #eef2ff;
    color: #4f46e5;
    font-size: 0.72rem;
}

/* Responsive */

@media (max-width: 960px) {

    .kpi-grid,
    .grid-3 {
        grid-template-columns: 1fr;
    }

    .page-header {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>

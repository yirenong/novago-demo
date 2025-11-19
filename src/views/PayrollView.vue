<template>
    <div class="page">
        <header class="page-header">
            <div>
                <h1>Payroll</h1>
                <p class="subtitle">
                    Overview of payroll runs and key employee payouts.
                </p>
            </div>
        </header>

        <section class="kpi-grid">
            <div class="kpi-card">
                <p class="kpi-label">Employees</p>
                <p class="kpi-value">142</p>
                <p class="kpi-meta">Full-time and contract</p>
            </div>
            <div class="kpi-card">
                <p class="kpi-label">This month’s payroll</p>
                <p class="kpi-value">$128,450</p>
                <p class="kpi-meta">96% processed</p>
            </div>
            <div class="kpi-card">
                <p class="kpi-label">Next payroll run</p>
                <p class="kpi-value">30 Nov 2025</p>
                <p class="kpi-meta">Monthly salaries (SG)</p>
            </div>
        </section>

        <section class="grid-2">
            <!-- Left: Line chart -->
            <LineChartCard title="Last 6 months payroll" :chartData="payrollTrendData">
                <template #actions>
                    <span class="chip">SGD</span>
                </template>
            </LineChartCard>

            <!-- Right: recent runs -->
            <div class="panel">
                <div class="panel-header">
                    <h2>Recent payroll runs</h2>
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
                            <td>Scheduled</td>
                            <td><span class="badge badge-pending">Scheduled</span></td>
                            <td class="align-right">$8,550</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Employees panel -->
        <section class="panel panel-spacing">
            <div class="panel-header">
                <h2>Key employees</h2>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th class="align-right">Net pay</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aaron Lim</td>
                        <td>Operations</td>
                        <td><span class="badge badge-success">Paid</span></td>
                        <td class="align-right">$4,200</td>
                    </tr>
                    <tr>
                        <td>Chloe Tan</td>
                        <td>Sales</td>
                        <td><span class="badge badge-success">Paid</span></td>
                        <td class="align-right">$5,100</td>
                    </tr>
                    <tr>
                        <td>Dev Contractor Team</td>
                        <td>IT</td>
                        <td><span class="badge badge-pending">Pending</span></td>
                        <td class="align-right">$7,800</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import LineChartCard from '../components/LineChartCard.vue'

const payrollTrendData = ref({
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
        {
            label: 'Total payroll (SGD)',
            data: [112000, 118000, 121000, 125000, 127000, 128450],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.12)',
            tension: 0.3,
            fill: true,
            pointRadius: 3,
            pointBackgroundColor: '#2563eb'
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

.kpi-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.kpi-card {
    background: #ffffff;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 1rem 1.2rem;
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

.grid-2 {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.panel {
    background: #ffffff;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 1rem 1.1rem;
}

.panel-spacing {
    margin-top: 0.5rem;
}

.panel-header {
    margin-bottom: 0.9rem;
}

.panel-header h2 {
    font-size: 0.98rem;
}

.panel-subtitle {
    font-size: 0.78rem;
    color: #9ca3af;
}

/* Table & badges */

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

/* Small chip */

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
    .grid-2 {
        grid-template-columns: 1fr;
    }
}
</style>

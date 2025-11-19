<template>
    <div class="page">
        <header class="page-header">
            <div>
                <h1>Rental Collection</h1>
                <p class="subtitle">
                    Monitor lease payments and overdue balances for your car fleet.
                </p>
            </div>
        </header>

        <section class="kpi-grid">
            <div class="kpi-card">
                <p class="kpi-label">Active leases</p>
                <p class="kpi-value">118</p>
                <p class="kpi-meta">Fleet-wide</p>
            </div>
            <div class="kpi-card">
                <p class="kpi-label">On-time collection rate</p>
                <p class="kpi-value">92%</p>
                <p class="kpi-meta">Last 30 days</p>
            </div>
            <div class="kpi-card">
                <p class="kpi-label">Overdue balance</p>
                <p class="kpi-value">$4,820</p>
                <p class="kpi-meta">12 contracts overdue</p>
            </div>
        </section>

        <section class="panel">
            <div class="panel-header">
                <h2>Lease payments (sample)</h2>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Contract</th>
                        <th>Vehicle</th>
                        <th>Customer</th>
                        <th>Due date</th>
                        <th>Status</th>
                        <th class="align-right">Monthly rent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>LC-2025-001</td>
                        <td>SGX 1234 A</td>
                        <td>Prime Logistics Pte Ltd</td>
                        <td>05 Nov</td>
                        <td><span class="badge badge-success">Paid</span></td>
                        <td class="align-right">$780</td>
                    </tr>
                    <tr>
                        <td>LC-2025-014</td>
                        <td>SGX 8899 T</td>
                        <td>UrbanDrive Rentals</td>
                        <td>01 Nov</td>
                        <td><span class="badge badge-warning">Overdue 6 days</span></td>
                        <td class="align-right">$620</td>
                    </tr>
                    <tr>
                        <td>LC-2025-020</td>
                        <td>SGX 4422 K</td>
                        <td>CarShare Co.</td>
                        <td>10 Nov</td>
                        <td><span class="badge badge-pending">Upcoming</span></td>
                        <td class="align-right">$540</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup>
// all hardcoded for now
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

.panel {
    background: #ffffff;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 1rem 1.1rem;
}

.panel-header {
    margin-bottom: 0.9rem;
}

.panel-header h2 {
    font-size: 0.98rem;
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

.badge-warning {
    background: #fee2e2;
    color: #b91c1c;
}

.badge-pending {
    background: #fef3c7;
    color: #92400e;
}

/* Responsive */

@media (max-width: 960px) {
    .kpi-grid {
        grid-template-columns: 1fr;
    }

    .table {
        font-size: 0.76rem;
    }
}
</style>

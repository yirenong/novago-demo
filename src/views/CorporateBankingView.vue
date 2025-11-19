<template>
    <div class="page">
        <header class="page-header">
            <div>
                <h1>Corporate Banking</h1>
                <p class="subtitle">
                    Overview of NovaGo’s linked bank accounts and balances.
                </p>
            </div>
        </header>

        <section class="kpi-grid">
            <div class="kpi-card">
                <p class="kpi-label">Linked accounts</p>
                <p class="kpi-value">3</p>
                <p class="kpi-meta">Operating, rentals, reserves</p>
            </div>
            <div class="kpi-card">
                <p class="kpi-label">Total balance</p>
                <p class="kpi-value">$842,910</p>
                <p class="kpi-meta">As of today</p>
            </div>
            <div class="kpi-card">
                <p class="kpi-label">Upcoming payouts</p>
                <p class="kpi-value">2</p>
                <p class="kpi-meta">$34,700 scheduled this week</p>
            </div>
        </section>

        <section class="panel">
            <div class="panel-header">
                <h2>Accounts</h2>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Bank</th>
                        <th>Purpose</th>
                        <th>Status</th>
                        <th class="align-right">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Operating account</td>
                        <td>DBS</td>
                        <td>Payroll & daily expenses</td>
                        <td><span class="badge badge-success">Active</span></td>
                        <td class="align-right">$420,300</td>
                    </tr>
                    <tr>
                        <td>Rental collections</td>
                        <td>UOB</td>
                        <td>Car lease payments</td>
                        <td><span class="badge badge-success">Active</span></td>
                        <td class="align-right">$230,110</td>
                    </tr>
                    <tr>
                        <td>Reserve / savings</td>
                        <td>OCBC</td>
                        <td>3-month OPEX buffer</td>
                        <td><span class="badge badge-info">Limited access</span></td>
                        <td class="align-right">$192,500</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup>
// hardcoded snapshot only
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

.badge-info {
    background: #e0f2fe;
    color: #075985;
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

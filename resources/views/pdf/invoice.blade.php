<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Invoice {{ $invoice->invoice_number }} — DRAYBOND LIMITED</title>
    <style>
        @page {
            margin: 30px 40px;
            size: a4 portrait;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #1a1e2b;
            font-size: 13px;
            line-height: 1.45;
            background: #ffffff;
            margin: 0;
            padding: 0;
        }
        .header-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 15px;
        }
        .logo-title {
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: #090d16;
            text-transform: uppercase;
        }
        .logo-sub {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #d97706;
            font-weight: 700;
            margin-top: 2px;
        }
        .company-meta {
            font-size: 11px;
            color: #475569;
            line-height: 1.35;
            text-align: right;
        }
        .invoice-banner {
            width: 100%;
            margin-bottom: 25px;
        }
        .invoice-title {
            font-size: 20px;
            font-weight: 700;
            color: #0f172a;
            letter-spacing: -0.5px;
        }
        .badge-paid {
            display: inline-block;
            background-color: #059669;
            color: #ffffff;
            font-size: 10px;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .meta-box {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        .meta-col {
            width: 50%;
            vertical-align: top;
        }
        .meta-heading {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #64748b;
            margin-bottom: 6px;
        }
        .client-name {
            font-size: 14px;
            font-weight: 700;
            color: #0f172a;
        }
        .client-info {
            font-size: 11px;
            color: #334155;
            line-height: 1.4;
        }
        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
        }
        .items-table th {
            background-color: #0f172a;
            color: #f8fafc;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding: 10px 12px;
            text-align: left;
        }
        .items-table th.text-right {
            text-align: right;
        }
        .items-table td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 12px;
            color: #1e293b;
        }
        .items-table td.text-right {
            text-align: right;
        }
        .items-table tr:nth-child(even) td {
            background-color: #f8fafc;
        }
        .totals-table {
            width: 45%;
            margin-left: auto;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        .totals-table td {
            padding: 6px 12px;
            font-size: 12px;
        }
        .totals-table .total-row td {
            border-top: 2px solid #0f172a;
            border-bottom: 2px solid #0f172a;
            font-size: 14px;
            font-weight: 800;
            color: #0f172a;
            padding: 10px 12px;
        }
        .tax-note {
            background-color: #f1f5f9;
            border-left: 3px solid #d97706;
            padding: 10px 14px;
            font-size: 10px;
            color: #475569;
            line-height: 1.4;
            margin-bottom: 35px;
        }
        .stamp-container {
            margin-top: 15px;
            text-align: right;
        }
        .official-stamp {
            display: inline-block;
            border: 2px solid #059669;
            color: #059669;
            padding: 6px 14px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            border-radius: 4px;
            transform: rotate(-3deg);
        }
        .footer {
            position: fixed;
            bottom: 20px;
            left: 40px;
            right: 40px;
            text-align: center;
            font-size: 9px;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            padding-top: 10px;
        }
    </style>
</head>
<body>

    <!-- Header / Brand -->
    <table class="header-table">
        <tr>
            <td style="vertical-align: top;">
                <div class="logo-title">MACIX AI</div>
                <div class="logo-sub">Executive Boardroom Intelligence</div>
            </td>
            <td class="company-meta">
                <strong>DRAYBOND LIMITED</strong><br>
                Company Number: 16021806<br>
                Academy House, 11 Dunraven Place<br>
                Bridgend, Mid Glamorgan, CF31 1JF<br>
                United Kingdom<br>
                Email: info@macix.co.uk
            </td>
        </tr>
    </table>

    <!-- Invoice Details Banner -->
    <table class="invoice-banner">
        <tr>
            <td>
                <div class="invoice-title">OFFICIAL TAX INVOICE</div>
                <div style="font-size: 12px; color: #64748b; margin-top: 3px;">Invoice No: <strong>{{ $invoice->invoice_number }}</strong></div>
            </td>
            <td style="text-align: right; vertical-align: middle;">
                <span class="badge-paid">PAID &amp; SETTLED</span>
            </td>
        </tr>
    </table>

    <!-- Client & Billing Meta -->
    <table class="meta-box">
        <tr>
            <td class="meta-col">
                <div class="meta-heading">Billed To (Client):</div>
                <div class="client-name">{{ $invoice->customer_company ?: $invoice->customer_name }}</div>
                <div class="client-info">
                    Attn: {{ $invoice->customer_name }}<br>
                    Email: {{ $invoice->customer_email }}<br>
                    @if($invoice->customer_vat)
                        VAT / Tax ID: {{ $invoice->customer_vat }}<br>
                    @endif
                    @if($invoice->customer_address)
                        Address: {{ $invoice->customer_address }}<br>
                    @endif
                </div>
            </td>
            <td class="meta-col" style="text-align: right;">
                <div class="meta-heading">Invoice Meta:</div>
                <div class="client-info">
                    <strong>Issue Date:</strong> {{ \Carbon\Carbon::parse($invoice->issued_at)->format('d M Y, H:i') }} UTC<br>
                    <strong>Payment Method:</strong> Prepaid Wallet / Instant Clearance<br>
                    <strong>Currency:</strong> Euro (€ / EUR)<br>
                    <strong>Transaction Reference:</strong> {{ $invoice->transaction ? $invoice->transaction->reference : 'DIRECT-SETTLEMENT' }}<br>
                </div>
            </td>
        </tr>
    </table>

    <!-- Line Items Table -->
    <table class="items-table">
        <thead>
            <tr>
                <th style="width: 55%;">Description &amp; Service Particulars</th>
                <th style="width: 15%; text-align: center;">Qty</th>
                <th style="width: 15%;" class="text-right">Unit Price</th>
                <th style="width: 15%;" class="text-right">Amount (EUR)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong>{{ $invoice->service_name }}</strong><br>
                    <span style="font-size: 10px; color: #64748b;">
                        Executive B2B AI Boardroom Services &amp; Deliberation Suite by DRAYBOND LIMITED.
                    </span>
                </td>
                <td style="text-align: center;">1</td>
                <td class="text-right">€{{ number_format($invoice->subtotal_eur, 2) }}</td>
                <td class="text-right">€{{ number_format($invoice->subtotal_eur, 2) }}</td>
            </tr>
        </tbody>
    </table>

    <!-- Totals Table -->
    <table class="totals-table">
        <tr>
            <td style="color: #64748b;">Subtotal:</td>
            <td style="text-align: right; font-weight: 600;">€{{ number_format($invoice->subtotal_eur, 2) }}</td>
        </tr>
        <tr>
            <td style="color: #64748b;">VAT (0% Reverse Charge):</td>
            <td style="text-align: right; font-weight: 600;">€{{ number_format($invoice->vat_amount_eur, 2) }}</td>
        </tr>
        <tr class="total-row">
            <td>TOTAL PAID:</td>
            <td style="text-align: right;">€{{ number_format($invoice->total_eur, 2) }}</td>
        </tr>
    </table>

    <!-- Tax Compliance Note -->
    <div class="tax-note">
        <strong>VAT &amp; Legal Compliance:</strong> B2B Cross-border service. Value Added Tax (VAT) rate 0.00% under Reverse Charge Mechanism.
        Issued pursuant to UK and international corporate invoicing standards by DRAYBOND LIMITED (Company No. 16021806).
    </div>

    <!-- Official Stamp -->
    <div class="stamp-container">
        <div class="official-stamp">
            ✓ DRAYBOND LTD &bull; PAID &amp; VERIFIED &bull; {{ \Carbon\Carbon::parse($invoice->issued_at)->format('Y-m-d') }}
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        DRAYBOND LIMITED &bull; Registered in England and Wales &bull; Company No: 16021806<br>
        Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF &bull; info@macix.co.uk
    </div>

</body>
</html>

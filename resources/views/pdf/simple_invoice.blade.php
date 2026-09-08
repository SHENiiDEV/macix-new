<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $invoiceNumber }}</title>
    <style>
        @page {
            size: a4 portrait;
            margin: 25mm 20mm 20mm 20mm;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #111827;
            font-size: 12.5px;
            line-height: 1.5;
            margin: 0;
            padding: 0;
            background: #ffffff;
        }
        .header-container {
            margin-bottom: 25px;
            border-bottom: 2px solid #111827;
            padding-bottom: 18px;
        }
        .doc-title {
            font-size: 24px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: -0.5px;
            color: #111827;
            margin: 0 0 4px 0;
        }
        .doc-subtitle {
            font-size: 11.5px;
            color: #6b7280;
            margin: 0;
        }
        .meta-grid {
            margin-top: 16px;
        }
        .meta-item {
            margin-bottom: 4px;
            font-size: 12px;
        }
        .meta-label {
            color: #6b7280;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: inline-block;
            width: 120px;
        }
        .meta-value {
            font-weight: 600;
            color: #111827;
        }
        .status-tag {
            display: inline-block;
            background: #ecfdf5;
            color: #065f46;
            border: 1px solid #a7f3d0;
            padding: 2px 8px;
            border-radius: 4px;
            font-weight: 700;
            font-size: 10.5px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }
        .parties-grid {
            width: 100%;
            margin-bottom: 25px;
        }
        .party-col {
            width: 48%;
            display: inline-block;
            vertical-align: top;
        }
        .party-title {
            font-size: 9.5px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #6b7280;
            margin-bottom: 6px;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 3px;
        }
        .party-name {
            font-size: 13.5px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 3px;
        }
        .party-details {
            color: #4b5563;
            font-size: 11.5px;
            line-height: 1.45;
        }
        .line-items {
            margin-top: 15px;
            margin-bottom: 25px;
            border-top: 1px solid #e5e7eb;
            border-bottom: 1px solid #e5e7eb;
            padding: 16px 0;
        }
        .line-item-header {
            font-size: 9.5px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #6b7280;
            margin-bottom: 10px;
        }
        .item-name {
            font-size: 13px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 3px;
        }
        .item-description {
            font-size: 11.5px;
            color: #4b5563;
            line-height: 1.5;
            margin-bottom: 8px;
        }
        .item-amount-row {
            font-size: 12px;
            color: #111827;
            font-weight: 600;
            margin-top: 4px;
        }
        .totals-block {
            margin-top: 15px;
            text-align: right;
        }
        .totals-row {
            font-size: 12px;
            margin-bottom: 4px;
        }
        .totals-label {
            display: inline-block;
            width: 170px;
            color: #6b7280;
        }
        .totals-val {
            display: inline-block;
            width: 110px;
            font-weight: 600;
            color: #111827;
            text-align: right;
        }
        .grand-total {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 2px solid #111827;
            font-size: 15px;
            font-weight: 800;
            color: #111827;
        }
        .grand-total .totals-val {
            font-size: 16.5px;
            color: #111827;
        }
        .note-block {
            margin-top: 25px;
            padding: 12px 14px;
            background: #f9fafb;
            border-left: 3px solid #111827;
            font-size: 11px;
            color: #374151;
            line-height: 1.45;
        }
        .footer-note {
            margin-top: 35px;
            font-size: 10px;
            color: #9ca3af;
            text-align: center;
            border-top: 1px solid #f3f4f6;
            padding-top: 12px;
            line-height: 1.4;
        }
    </style>
</head>
<body>

    <!-- Header -->
    <div class="header-container">
        <div class="doc-title">{{ $type ?? 'INVOICE' }}</div>
        <div class="doc-subtitle">{{ $issuerName }} &bull; Official Business Document</div>
        
        <div class="meta-grid">
            <div class="meta-item">
                <span class="meta-label">Invoice Reference:</span>
                <span class="meta-value">{{ $invoiceNumber }}</span>
            </div>
            <div class="meta-item">
                <span class="meta-label">Issue Date:</span>
                <span class="meta-value">{{ $issueDate }}</span>
            </div>
            <div class="meta-item">
                <span class="meta-label">Payment Status:</span>
                <span class="status-tag">{{ $status ?? 'PAID &amp; SETTLED' }}</span>
            </div>
            @if(!empty($poNumber))
            <div class="meta-item">
                <span class="meta-label">PO / Order Ref:</span>
                <span class="meta-value">{{ $poNumber }}</span>
            </div>
            @endif
        </div>
    </div>

    <!-- Parties Grid (Sender & Recipient) -->
    <div class="parties-grid">
        <div class="party-col">
            <div class="party-title">FROM (ISSUER / SUPPLIER)</div>
            <div class="party-name">{{ $issuerName }}</div>
            <div class="party-details">
                @if(!empty($issuerAddress))
                    {!! nl2br(e($issuerAddress)) !!}<br>
                @endif
                @if(!empty($issuerCompanyNo))
                    Company No: {{ $issuerCompanyNo }}<br>
                @endif
                @if(!empty($issuerVatNo))
                    VAT Reg: {{ $issuerVatNo }}<br>
                @endif
                @if(!empty($issuerWebsite))
                    Website: {{ $issuerWebsite }}<br>
                @endif
                @if(!empty($issuerEmail))
                    Email: {{ $issuerEmail }}
                @endif
            </div>
        </div>
        <div class="party-col" style="margin-left: 3%;">
            <div class="party-title">TO (BILLED CLIENT)</div>
            <div class="party-name">{{ $clientName }}</div>
            <div class="party-details">
                @if(!empty($clientAddress))
                    {!! nl2br(e($clientAddress)) !!}<br>
                @endif
                @if(!empty($clientCompanyNo))
                    Company No: {{ $clientCompanyNo }}<br>
                @endif
                @if(!empty($clientVatNo))
                    VAT / Tax ID: {{ $clientVatNo }}<br>
                @endif
                @if(!empty($clientEmail))
                    Email: {{ $clientEmail }}<br>
                @endif
                @if(!empty($clientProject))
                    Project: {{ $clientProject }}
                @endif
            </div>
        </div>
    </div>

    <!-- Line Items Section -->
    <div class="line-items">
        <div class="line-item-header">DESCRIPTION OF SERVICES / DELIVERABLES</div>
        @foreach($items as $item)
            <div style="margin-bottom: 12px;">
                <div class="item-name">{{ $item['name'] }}</div>
                <div class="item-description">{{ $item['description'] }}</div>
                <div class="item-amount-row">
                    Qty: {{ $item['qty'] ?? 1 }} &bull; Amount: {{ $currencySymbol ?? '£' }}{{ number_format($item['amount'], 2) }}
                </div>
            </div>
        @endforeach
    </div>

    <!-- Summary & Totals -->
    <div class="totals-block">
        <div class="totals-row">
            <span class="totals-label">Subtotal:</span>
            <span class="totals-val">{{ $currencySymbol ?? '£' }}{{ number_format($subtotal, 2) }}</span>
        </div>
        <div class="totals-row">
            <span class="totals-label">VAT / Tax ({{ $vatRate ?? '0.00%' }}):</span>
            <span class="totals-val">{{ $currencySymbol ?? '£' }}{{ number_format($vatAmount ?? 0, 2) }}</span>
        </div>
        <div class="totals-row grand-total">
            <span class="totals-label">Total Paid ({{ $currencyCode ?? 'GBP' }}):</span>
            <span class="totals-val">{{ $currencySymbol ?? '£' }}{{ number_format($total, 2) }}</span>
        </div>
    </div>

    <!-- Notes & Settlement Terms -->
    <div class="note-block">
        <strong>Notes &amp; Compliance Terms:</strong><br>
        {{ $notes ?? 'Payment cleared in full. Services rendered in accordance with agreed B2B terms of service. UK VAT applied in compliance with HMRC regulations.' }}
    </div>

    <!-- Footer -->
    <div class="footer-note">
        {{ $issuerName }} &bull; Registered in England &amp; Wales &bull; {{ $issuerWebsite ?? 'https://macix.co.uk' }}<br>
        Thank you for your business.
    </div>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Official VAT Invoice & Board Resolution Unlocked — Macix AI</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #07090e;
            color: #f1f5f9;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            -webkit-text-size-adjust: 100%;
        }
        table {
            border-spacing: 0;
        }
        td {
            padding: 0;
        }
        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #07090e;
            padding-bottom: 40px;
        }
        .main-card {
            background-color: #0d121f;
            margin: 30px auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
            color: #cbd5e1;
            border-radius: 16px;
            border: 1px solid #1e293b;
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #111827 0%, #0d121f 100%);
            padding: 36px 30px;
            text-align: center;
            border-bottom: 1px solid #1e293b;
        }
        .logo-badge {
            background: #f59e0b;
            color: #07090e;
            font-size: 16px;
            font-weight: 900;
            padding: 8px 16px;
            border-radius: 8px;
            display: inline-block;
            letter-spacing: 1.5px;
            margin-bottom: 12px;
        }
        .content {
            padding: 36px 30px;
            font-size: 14px;
            line-height: 1.65;
            color: #94a3b8;
        }
        .content h2 {
            color: #ffffff;
            font-size: 20px;
            font-weight: 800;
            margin: 0 0 16px 0;
        }
        .amount-badge {
            background: #0f172a;
            border: 1px solid #1e293b;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            margin: 20px 0;
        }
        .amount-val {
            font-size: 32px;
            font-weight: 900;
            color: #38bdf8;
            font-family: 'Courier New', monospace;
        }
        .receipt-table {
            width: 100%;
            margin: 20px 0;
            border-collapse: collapse;
            font-size: 12.5px;
        }
        .receipt-table td {
            padding: 8px 0;
            border-bottom: 1px solid #1e293b;
        }
        .receipt-table .label {
            color: #64748b;
        }
        .receipt-table .value {
            text-align: right;
            font-weight: bold;
            color: #ffffff;
            font-family: monospace;
        }
        .attachment-alert {
            background-color: #0c1c2e;
            border: 1px solid #0369a1;
            border-radius: 10px;
            padding: 12px 16px;
            margin: 20px 0;
            font-size: 12px;
            color: #7dd3fc;
        }
        .btn-container {
            text-align: center;
            margin: 28px 0 10px 0;
        }
        .btn {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: #07090e !important;
            font-weight: 800;
            font-size: 14px;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 10px;
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .footer {
            background: #090d16;
            padding: 24px 30px;
            text-align: center;
            font-size: 11px;
            color: #64748b;
            border-top: 1px solid #1e293b;
            line-height: 1.5;
        }
        .footer a {
            color: #f59e0b;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <table class="main-card">
            <!-- Header -->
            <tr>
                <td class="header">
                    <div class="logo-badge">MACIX AI</div>
                    <div style="font-size: 11px; color: #94a3b8; font-family: monospace; letter-spacing: 1px; text-transform: uppercase;">
                        Official Board Deliberation &bull; INCHWARD LIMITED
                    </div>
                </td>
            </tr>

            <!-- Content -->
            <tr>
                <td class="content">
                    <h2>Board Resolution Unlocked &amp; Paid</h2>
                    <p>
                        Dear {{ $user->name }}, the Board of AI Advisors has completed deliberation on your strategic brief. Your prepaid wallet was debited, and the official B2B VAT Invoice is attached to this email.
                    </p>

                    <div class="amount-badge">
                        <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold; letter-spacing: 1px; margin-bottom: 4px;">Service Fee Charged</div>
                        <div class="amount-val">€{{ number_format((float)($transaction->amount_eur ?? $invoice->total_eur ?? 149), 2) }}</div>
                        <div style="font-size: 11px; color: #38bdf8; margin-top: 4px; font-weight: 600;">
                            {{ $transaction->service_name ?? $invoice->service_description ?? 'Strategic Board Deliberation' }}
                        </div>
                    </div>

                    <table class="receipt-table">
                        <tr>
                            <td class="label">Invoice Reference:</td>
                            <td class="value">{{ $invoice->invoice_number ?? $transaction->reference }}</td>
                        </tr>
                        <tr>
                            <td class="label">Session Title:</td>
                            <td class="value" style="font-family: inherit;">{{ $session->title ?? 'Executive Strategic Dilemma' }}</td>
                        </tr>
                        <tr>
                            <td class="label">Remaining Wallet Balance:</td>
                            <td class="value">€{{ number_format((float)$user->wallet_balance, 2) }}</td>
                        </tr>
                        <tr>
                            <td class="label">Tax (0% B2B Reverse Charge):</td>
                            <td class="value">€0.00</td>
                        </tr>
                        <tr>
                            <td class="label">Date &amp; Time:</td>
                            <td class="value">{{ now()->format('d M Y, H:i') }} UTC</td>
                        </tr>
                    </table>

                    <div class="attachment-alert">
                        <strong>📄 Official PDF Tax Invoice Attached:</strong><br>
                        Your official UK VAT Invoice from <strong>INCHWARD LIMITED</strong> has been rendered and attached to this email (<code>Invoice_{{ $invoice->invoice_number ?? 'INV' }}.pdf</code>).
                    </div>

                    <div class="btn-container">
                        @if(isset($session->id))
                            <a href="{{ url('/board/' . $session->id . '/resolution') }}" class="btn">View &amp; Download Resolution Minutes</a>
                        @else
                            <a href="{{ url('/dashboard') }}" class="btn">Access Executive Dashboard</a>
                        @endif
                    </div>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td class="footer">
                    <strong>INCHWARD LIMITED</strong> &bull; Company No. 16021412<br>
                    Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, United Kingdom<br>
                    Contact: <a href="mailto:info@voltoria.co.uk">info@voltoria.co.uk</a> &bull; <a href="{{ url('/privacy') }}">Privacy Policy</a> &bull; <a href="{{ url('/terms') }}">Terms of Service</a>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>

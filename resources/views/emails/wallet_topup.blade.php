<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Wallet Top-Up Confirmation</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0f17; color: #e2e8f0; margin: 0; padding: 0; }
        .wrapper { width: 100%; max-width: 600px; margin: 0 auto; background-color: #111726; border-radius: 8px; overflow: hidden; border: 1px solid #1e293b; margin-top: 30px; margin-bottom: 30px; }
        .header { background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); padding: 30px 24px; text-align: center; border-bottom: 2px solid #059669; }
        .logo { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; text-transform: uppercase; }
        .badge { display: inline-block; background: #059669; color: #ffffff; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 4px; letter-spacing: 1px; text-transform: uppercase; margin-top: 6px; }
        .content { padding: 30px 26px; font-size: 14px; line-height: 1.6; color: #cbd5e1; }
        .amount-box { background-color: #0b1120; border: 1px solid #059669; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0; }
        .amount { font-size: 32px; font-weight: 800; color: #34d399; }
        .table-meta { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
        .table-meta td { padding: 8px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; }
        .table-meta td.val { text-align: right; color: #f1f5f9; font-weight: 600; }
        .footer { padding: 20px; text-align: center; font-size: 11px; color: #64748b; background-color: #090d16; border-top: 1px solid #1e293b; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <div class="logo">MACIX AI</div>
            <div class="badge">Payment Cleared &bull; Funds Added</div>
        </div>
        <div class="content">
            <h2 style="color: #ffffff; margin-top: 0; font-size: 18px;">Funds Successfully Added to Wallet</h2>
            <p>Dear {{ $user->name }}, your prepaid balance has been updated with immediate clearance.</p>

            <div class="amount-box">
                <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Amount Credited</div>
                <div class="amount">+€{{ number_format($transaction->amount_eur, 2) }}</div>
                <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px;">New Wallet Balance: <strong>€{{ number_format($transaction->balance_after, 2) }}</strong></div>
            </div>

            <table class="table-meta">
                <tr>
                    <td>Transaction Reference:</td>
                    <td class="val">{{ $transaction->reference }}</td>
                </tr>
                <tr>
                    <td>Service Particulars:</td>
                    <td class="val">{{ $transaction->service_name }}</td>
                </tr>
                <tr>
                    <td>Cleared Date:</td>
                    <td class="val">{{ $transaction->created_at->format('d M Y, H:i') }} UTC</td>
                </tr>
                <tr>
                    <td>Invoice Attached:</td>
                    <td class="val">{{ $invoice->invoice_number }}.pdf</td>
                </tr>
            </table>

            <p style="font-size: 13px; color: #94a3b8;">
                An official VAT-compliant PDF invoice issued by <strong>DRAYBOND LIMITED</strong> is attached to this email for your accounting records. You can also re-download it anytime in your Billing history.
            </p>
        </div>
        <div class="footer">
            DRAYBOND LIMITED &bull; Company No. 16021806<br>
            Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF
        </div>
    </div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Board Resolution Completed</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0f17; color: #e2e8f0; margin: 0; padding: 0; }
        .wrapper { width: 100%; max-width: 600px; margin: 0 auto; background-color: #111726; border-radius: 8px; overflow: hidden; border: 1px solid #1e293b; margin-top: 30px; margin-bottom: 30px; }
        .header { background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); padding: 30px 24px; text-align: center; border-bottom: 2px solid #3b82f6; }
        .logo { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; text-transform: uppercase; }
        .badge { display: inline-block; background: #3b82f6; color: #ffffff; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 4px; letter-spacing: 1px; text-transform: uppercase; margin-top: 6px; }
        .content { padding: 30px 26px; font-size: 14px; line-height: 1.6; color: #cbd5e1; }
        .box { background-color: #0b1120; border: 1px solid #1e293b; border-radius: 8px; padding: 18px; margin: 20px 0; }
        .btn { display: inline-block; background: #f59e0b; color: #090d16 !important; font-weight: 700; font-size: 13px; padding: 12px 24px; text-decoration: none; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 12px; }
        .table-meta { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
        .table-meta td { padding: 8px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; }
        .table-meta td.val { text-align: right; color: #f1f5f9; font-weight: 600; }
        .footer { padding: 20px; text-align: center; font-size: 11px; color: #64748b; background-color: #090d16; border-top: 1px solid #1e293b; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <div class="logo">MACIX AI</div>
            <div class="badge">Boardroom Resolution Finalized</div>
        </div>
        <div class="content">
            <h2 style="color: #ffffff; margin-top: 0; font-size: 18px;">Your Board of Advisors Has Adjourned</h2>
            <p>Dear {{ $user->name }}, your virtual Board of Advisors has completed their multi-perspective strategic deliberation.</p>

            <div class="box">
                <div style="font-weight: 700; color: #ffffff; font-size: 15px; margin-bottom: 4px;">{{ $session->title ?: 'Executive Strategy Session' }}</div>
                <div style="font-size: 12px; color: #94a3b8;">Tier: <strong style="color: #f59e0b;">{{ strtoupper($session->tier) }} BOARD</strong> &bull; Cost: €{{ number_format($session->cost_eur, 2) }}</div>
                
                <table class="table-meta">
                    <tr>
                        <td>Service Settled:</td>
                        <td class="val">{{ $transaction->service_name }}</td>
                    </tr>
                    <tr>
                        <td>Consensus Alignment:</td>
                        <td class="val">{{ $resolution->consensus_score }}%</td>
                    </tr>
                    <tr>
                        <td>Risk Assessment:</td>
                        <td class="val" style="color: #f59e0b;">{{ $resolution->risk_score }}</td>
                    </tr>
                    <tr>
                        <td>Strategic Verdict:</td>
                        <td class="val">{{ $resolution->strategic_verdict }}</td>
                    </tr>
                </table>

                <div style="text-align: center;">
                    <a href="{{ url('/board/' . $session->id . '/resolution') }}" class="btn">View Full Resolution &amp; Action Plan</a>
                </div>
            </div>

            <p style="font-size: 13px; color: #94a3b8;">
                You can also export the official Board Minutes PDF anytime from the resolution screen or share it with your co-founders and investors.
            </p>
        </div>
        <div class="footer">
            DRAYBOND LIMITED &bull; Company No. 16021806<br>
            Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF
        </div>
    </div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to Macix AI</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0f17; color: #e2e8f0; margin: 0; padding: 0; }
        .wrapper { width: 100%; max-width: 600px; margin: 0 auto; background-color: #111726; border-radius: 8px; overflow: hidden; border: 1px solid #1e293b; margin-top: 30px; margin-bottom: 30px; }
        .header { background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); padding: 32px 24px; text-align: center; border-bottom: 2px solid #f59e0b; }
        .logo { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; text-transform: uppercase; }
        .sublogo { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #f59e0b; font-weight: 700; margin-top: 4px; }
        .content { padding: 32px 28px; font-size: 14px; line-height: 1.6; color: #cbd5e1; }
        .greeting { font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 16px; }
        .card { background-color: #0b1120; border: 1px solid #1e293b; border-radius: 6px; padding: 18px; margin: 20px 0; }
        .btn { display: inline-block; background: #f59e0b; color: #090d16 !important; font-weight: 700; font-size: 14px; padding: 12px 28px; text-decoration: none; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 10px; }
        .footer { padding: 24px; text-align: center; font-size: 11px; color: #64748b; background-color: #090d16; border-top: 1px solid #1e293b; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <div class="logo">MACIX AI</div>
            <div class="sublogo">Personal Board of AI Advisors</div>
        </div>
        <div class="content">
            <div class="greeting">Welcome to the Executive Suite, {{ $user->name }}</div>
            <p>You have unlocked on-demand access to your private virtual <strong>Board of AI Advisors</strong>. Never face high-stakes strategic dilemmas alone again.</p>
            
            <div class="card">
                <div style="font-weight: 700; color: #f59e0b; margin-bottom: 8px;">Your Boardroom Roster:</div>
                <ul style="margin: 0; padding-left: 20px; color: #94a3b8; font-size: 13px;">
                    <li><strong>The Ruthless Investor</strong> — ROI, runway extension, strict capital discipline.</li>
                    <li><strong>The Empathic Mentor</strong> — Culture, founder mental resilience, team cohesion.</li>
                    <li><strong>The Pragmatic Operator</strong> — Execution velocity, metrics, process bottlenecks.</li>
                    <li><strong>The Devil's Advocate</strong> — Relentless stress-testing, critical blindspot detection.</li>
                    <li><strong>The Chairman</strong> — Executive synthesis and 30-day prioritized action plans.</li>
                </ul>
            </div>

            <p>To convene your first board meeting, top up your prepaid balance or explore available tiers in your executive console.</p>

            <div style="text-align: center; margin: 28px 0;">
                <a href="{{ url('/dashboard') }}" class="btn">Enter The Boardroom</a>
            </div>

            <p style="font-size: 12px; color: #64748b;">
                Need assistance or bespoke Enterprise Retainer onboarding? Contact our executive desk at <a href="mailto:info@macix.co.uk" style="color: #f59e0b;">info@macix.co.uk</a>.
            </p>
        </div>
        <div class="footer">
            DRAYBOND LIMITED &bull; Company No. 16021806<br>
            Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF
        </div>
    </div>
</body>
</html>

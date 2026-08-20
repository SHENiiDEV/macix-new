<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Macix AI — Your Personal Board of AI Advisors</title>
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
        img {
            border: 0;
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
        .feature-box {
            background: #111827;
            border: 1px solid #1f293d;
            border-radius: 12px;
            padding: 16px 20px;
            margin: 20px 0;
        }
        .feature-item {
            margin-bottom: 10px;
            font-size: 13px;
            color: #e2e8f0;
        }
        .feature-item:last-child {
            margin-bottom: 0;
        }
        .btn-container {
            text-align: center;
            margin: 30px 0 10px 0;
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
                        Executive Decision Intelligence &bull; INCHWARD LIMITED
                    </div>
                </td>
            </tr>

            <!-- Content -->
            <tr>
                <td class="content">
                    <h2>Welcome to Macix AI, {{ $user->name }}</h2>
                    <p>
                        Your executive account has been established. You now have on-demand access to a virtual <strong>Board of AI Advisors</strong> designed to stress-test your strategic dilemmas across 4 specialized personas:
                    </p>

                    <div class="feature-box">
                        <div class="feature-item">
                            <strong style="color: #f59e0b;">&bull; The Ruthless Investor:</strong> Capital preservation, unit economics, runway maximization, and valuation protection.
                        </div>
                        <div class="feature-item">
                            <strong style="color: #38bdf8;">&bull; The Empathic Mentor:</strong> Organizational culture, leadership trust, founder mental endurance, and team morale.
                        </div>
                        <div class="feature-item">
                            <strong style="color: #34d399;">&bull; The Pragmatic Operator:</strong> Operational friction, execution bottlenecks, KPI alignment, and systemic scale.
                        </div>
                        <div class="feature-item">
                            <strong style="color: #f43f5e;">&bull; The Devil's Advocate:</strong> Cognitive bias breakdown, blind spots, and catastrophic downside modeling.
                        </div>
                    </div>

                    <p>
                        Every session culminates in an authoritative <strong>Chairman Synthesis</strong> and a prioritized <strong>30-day Action Roadmap</strong>, exportable to official PDF Board Minutes.
                    </p>

                    <div class="btn-container">
                        <a href="{{ url('/board/new') }}" class="btn">Convene Your First Boardroom Brief</a>
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

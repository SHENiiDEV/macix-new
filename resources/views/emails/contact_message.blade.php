<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Executive Support Ticket</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #07090e;
            color: #f1f5f9;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        .wrapper {
            width: 100%;
            padding: 30px 15px;
            background-color: #07090e;
        }
        .card {
            background-color: #0d121f;
            margin: 0 auto;
            max-width: 600px;
            border-radius: 16px;
            border: 1px solid #1e293b;
            overflow: hidden;
        }
        .header {
            background: #111827;
            padding: 24px 30px;
            border-bottom: 1px solid #1e293b;
        }
        .badge {
            background: #f59e0b;
            color: #07090e;
            font-size: 11px;
            font-weight: 900;
            padding: 4px 10px;
            border-radius: 6px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: inline-block;
        }
        .content {
            padding: 30px;
            font-size: 14px;
            line-height: 1.6;
            color: #cbd5e1;
        }
        .field-group {
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid #1e293b;
        }
        .label {
            font-size: 11px;
            color: #64748b;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .val {
            color: #f8fafc;
            font-size: 14px;
            font-weight: 600;
        }
        .message-box {
            background: #090d16;
            border: 1px solid #1e293b;
            border-radius: 12px;
            padding: 16px 20px;
            margin-top: 10px;
            color: #e2e8f0;
            white-space: pre-wrap;
            font-family: inherit;
        }
        .footer {
            background: #080b12;
            padding: 20px 30px;
            font-size: 11px;
            color: #64748b;
            border-top: 1px solid #1e293b;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="card">
            <div class="header">
                <div class="badge">Support Ticket</div>
                <h2 style="color: #ffffff; margin: 10px 0 0 0; font-size: 18px;">Executive Client Inquiry</h2>
            </div>
            <div class="content">
                <div class="field-group">
                    <div class="label">Sender Name</div>
                    <div class="val">{{ $data['name'] }}</div>
                </div>

                <div class="field-group">
                    <div class="label">Sender Email</div>
                    <div class="val">{{ $data['email'] }}</div>
                </div>

                <div class="field-group">
                    <div class="label">Subject</div>
                    <div class="val">{{ $data['subject'] }}</div>
                </div>

                <div class="field-group" style="border-bottom: none; margin-bottom: 0; padding-bottom: 0;">
                    <div class="label">Client Message</div>
                    <div class="message-box">{{ $data['message'] }}</div>
                </div>
            </div>
            <div class="footer">
                <strong>{{ env('COMPANY_NAME', 'CHANGE IT UP SERVICES LTD') }}</strong> &bull; Company No. {{ env('COMPANY_NUMBER', '16107295') }}<br>
                {{ env('COMPANY_ADDRESS', '14 Broadway, Nottingham, United Kingdom, NG1 1PS') }}<br>
                <em>Target Resolution SLA: {{ env('SUPPORT_SLA', '24-48 hours') }}</em>
            </div>
        </div>
    </div>
</body>
</html>

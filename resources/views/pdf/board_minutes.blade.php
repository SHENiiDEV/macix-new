<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Board Minutes — {{ $session->title ?: 'Executive Resolution' }} — Macix AI</title>
    <style>
        @page {
            margin: 30px 35px;
            size: a4 portrait;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #1e293b;
            font-size: 11px;
            line-height: 1.45;
            background: #ffffff;
            margin: 0;
            padding: 0;
        }
        .header-table {
            width: 100%;
            border-collapse: collapse;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 12px;
            margin-bottom: 16px;
        }
        .brand-title {
            font-size: 20px;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: #090d16;
            text-transform: uppercase;
        }
        .brand-sub {
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #d97706;
            font-weight: 700;
        }
        .doc-badge {
            display: inline-block;
            background: #0f172a;
            color: #f8fafc;
            font-size: 9px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 3px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .meta-grid {
            width: 100%;
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 16px;
        }
        .meta-grid td {
            font-size: 10px;
            color: #475569;
            padding: 3px 6px;
        }
        .meta-grid td strong {
            color: #0f172a;
        }
        .section-title {
            font-size: 12px;
            font-weight: 800;
            color: #0f172a;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1.5px solid #cbd5e1;
            padding-bottom: 4px;
            margin-top: 14px;
            margin-bottom: 8px;
        }
        .brief-box {
            background: #fffbeb;
            border-left: 3px solid #f59e0b;
            padding: 8px 12px;
            font-size: 10.5px;
            color: #78350f;
            line-height: 1.4;
            margin-bottom: 14px;
        }
        .verdict-box {
            background-color: #0f172a;
            color: #ffffff;
            padding: 10px 14px;
            border-radius: 4px;
            margin-bottom: 16px;
        }
        .verdict-title {
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 0.5px;
            color: #fbbf24;
        }
        .advisor-card {
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            padding: 8px 10px;
            margin-bottom: 10px;
            background: #ffffff;
            page-break-inside: avoid;
        }
        .advisor-header {
            font-size: 11px;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .advisor-investor { border-top: 3px solid #0284c7; }
        .advisor-mentor { border-top: 3px solid #10b981; }
        .advisor-operator { border-top: 3px solid #f59e0b; }
        .advisor-devil { border-top: 3px solid #ef4444; }

        .advisor-quote {
            font-style: italic;
            color: #475569;
            font-size: 10px;
            margin-bottom: 6px;
            border-left: 2px solid #cbd5e1;
            padding-left: 6px;
        }
        .plan-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8px;
            margin-bottom: 16px;
        }
        .plan-table th {
            background-color: #1e293b;
            color: #ffffff;
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 6px 8px;
            text-align: left;
        }
        .plan-table td {
            padding: 6px 8px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 9.5px;
            color: #334155;
            vertical-align: top;
        }
        .plan-table tr:nth-child(even) td {
            background-color: #f8fafc;
        }
        .disclaimer {
            font-size: 8px;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            padding-top: 8px;
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

    <!-- Header -->
    <table class="header-table">
        <tr>
            <td>
                <div class="brand-title">MACIX AI &bull; BOARD OF ADVISORS</div>
                <div class="brand-sub">Confidential Executive Board Minutes</div>
            </td>
            <td style="text-align: right;">
                <span class="doc-badge">OFFICIAL RESOLUTION</span>
            </td>
        </tr>
    </table>

    <!-- Session Meta -->
    <table class="meta-grid">
        <tr>
            <td style="width: 25%;"><strong>Company / User:</strong> {{ $session->user->company_name ?: $session->user->name }}</td>
            <td style="width: 25%;"><strong>Tier:</strong> {{ strtoupper($session->tier) }} BOARD</td>
            <td style="width: 25%;"><strong>Consensus:</strong> {{ $resolution->consensus_score }}% Alignment</td>
            <td style="width: 25%;"><strong>Risk Level:</strong> {{ $resolution->risk_score }}</td>
        </tr>
        <tr>
            <td><strong>Session ID:</strong> #MCX-{{ str_pad($session->id, 5, '0', STR_PAD_LEFT) }}</td>
            <td><strong>Deliberation Date:</strong> {{ $session->created_at->format('d M Y, H:i') }} UTC</td>
            <td><strong>Issuing Entity:</strong> DRAYBOND LIMITED</td>
            <td><strong>Security:</strong> UK GDPR / Confidential</td>
        </tr>
    </table>

    <!-- The Problem Brief -->
    <div class="section-title">1. Executive Dilemma Brief</div>
    <div class="brief-box">
        <strong>Executive Submission:</strong><br>
        {{ $session->brief_text }}
        @if($session->company_context)
            <div style="margin-top: 6px; font-size: 9.5px; color: #92400e;">
                <strong>Context / Financial Baseline:</strong> {{ $session->company_context }}
            </div>
        @endif
    </div>

    <!-- Strategic Verdict -->
    <div class="verdict-box">
        <div style="font-size: 9px; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px;">Chairman's Strategic Verdict:</div>
        <div class="verdict-title">{{ $resolution->strategic_verdict }}</div>
    </div>

    <!-- Executive Summary -->
    <div class="section-title">2. Chairman's Executive Summary &amp; Synthesis</div>
    <div style="font-size: 10.5px; color: #334155; margin-bottom: 14px; text-align: justify;">
        {!! nl2br(e($resolution->chairman_summary)) !!}
    </div>

    <!-- 4 Advisor Opinions -->
    <div class="section-title">3. Individual Advisor Positions &amp; Friction Analysis</div>

    <!-- Investor -->
    <div class="advisor-card advisor-investor">
        <div class="advisor-header" style="color: #0369a1;">
            💼 The Ruthless Investor — Focus: ROI, Runway &amp; Capital Protection
        </div>
        <div class="advisor-quote">"{{ $resolution->investor_opinion['quote'] ?? 'Capital preservation is non-negotiable.' }}"</div>
        <p style="margin: 0; font-size: 10px;">{{ $resolution->investor_opinion['analysis'] ?? '' }}</p>
        @if(!empty($resolution->investor_opinion['recommendations']))
            <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 9.5px;">
                @foreach($resolution->investor_opinion['recommendations'] as $rec)
                    <li>{{ $rec }}</li>
                @endforeach
            </ul>
        @endif
    </div>

    <!-- Mentor -->
    <div class="advisor-card advisor-mentor">
        <div class="advisor-header" style="color: #047857;">
            🌱 The Empathic Mentor — Focus: Culture, Founder Resilience &amp; Team Morale
        </div>
        <div class="advisor-quote">"{{ $resolution->mentor_opinion['quote'] ?? 'People define the enterprise enduring value.' }}"</div>
        <p style="margin: 0; font-size: 10px;">{{ $resolution->mentor_opinion['analysis'] ?? '' }}</p>
        @if(!empty($resolution->mentor_opinion['recommendations']))
            <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 9.5px;">
                @foreach($resolution->mentor_opinion['recommendations'] as $rec)
                    <li>{{ $rec }}</li>
                @endforeach
            </ul>
        @endif
    </div>

    <!-- Operator -->
    <div class="advisor-card advisor-operator">
        <div class="advisor-header" style="color: #b45309;">
            ⚙️ The Pragmatic Operator — Focus: Systems, Metrics &amp; Execution Scalability
        </div>
        <div class="advisor-quote">"{{ $resolution->operator_opinion['quote'] ?? 'Strategy without disciplined execution is hallucination.' }}"</div>
        <p style="margin: 0; font-size: 10px;">{{ $resolution->operator_opinion['analysis'] ?? '' }}</p>
        @if(!empty($resolution->operator_opinion['recommendations']))
            <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 9.5px;">
                @foreach($resolution->operator_opinion['recommendations'] as $rec)
                    <li>{{ $rec }}</li>
                @endforeach
            </ul>
        @endif
    </div>

    <!-- Devil's Advocate -->
    <div class="advisor-card advisor-devil">
        <div class="advisor-header" style="color: #b91c1c;">
            🔥 The Devil's Advocate — Focus: Stress-Testing, Blindspots &amp; Worst-Case Scenarios
        </div>
        <div class="advisor-quote">"{{ $resolution->devil_opinion['quote'] ?? 'Every unexamined assumption is an impending crisis.' }}"</div>
        <p style="margin: 0; font-size: 10px;">{{ $resolution->devil_opinion['analysis'] ?? '' }}</p>
        @if(!empty($resolution->devil_opinion['recommendations']))
            <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 9.5px;">
                @foreach($resolution->devil_opinion['recommendations'] as $rec)
                    <li>{{ $rec }}</li>
                @endforeach
            </ul>
        @endif
    </div>

    <!-- 30-Day Action Plan -->
    <div class="section-title">4. Strategic 30-Day Execution Roadmap</div>
    <table class="plan-table">
        <thead>
            <tr>
                <th style="width: 15%;">Timeline</th>
                <th style="width: 20%;">Owner / Lead</th>
                <th style="width: 45%;">Mandatory Action Item</th>
                <th style="width: 20%;">Target Milestone</th>
            </tr>
        </thead>
        <tbody>
            @foreach($resolution->action_plan as $item)
                <tr>
                    <td><strong>{{ $item['timeline'] ?? 'Day 1-7' }}</strong></td>
                    <td>{{ $item['owner'] ?? 'CEO / Founder' }}</td>
                    <td>{{ $item['action'] ?? '' }}</td>
                    <td><span style="color: #047857; font-weight: 600;">{{ $item['milestone'] ?? 'Completed' }}</span></td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <!-- Legal Disclaimer -->
    <div class="disclaimer">
        CONFIDENTIAL &amp; PROPRIETARY &bull; GENERATED BY MACIX AI PLATFORM &bull; DRAYBOND LIMITED (Company No. 16021806)<br>
        Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF.<br>
        <em>Disclaimer: This resolution is an AI-powered advisory simulation designed for executive decision-support. Final legal and fiduciary responsibility resides with the executive management.</em>
    </div>

</body>
</html>

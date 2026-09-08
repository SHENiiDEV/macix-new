<?php

require_once __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\View;

$invoices = [
    // 1. Client Invoice: €999
    'client_invoice_1_999' => [
        'type' => 'CLIENT INVOICE',
        'invoiceNumber' => 'INV-2026-MCX099',
        'issueDate' => '14 August 2026',
        'status' => 'PAID & SETTLED',
        'poNumber' => 'PO-APX-2026-88',
        'issuerName' => 'CHANGE IT UP SERVICES LTD',
        'issuerAddress' => "14 Broadway, Nottingham\nUnited Kingdom, NG1 1PS",
        'issuerCompanyNo' => '16107295',
        'issuerVatNo' => 'GB 419 802 114',
        'issuerWebsite' => 'https://macix.co.uk',
        'issuerEmail' => 'billing@macix.co.uk',
        'clientName' => 'Apex Venture Capital & Advisory Ltd',
        'clientAddress' => "25 Bank Street, Canary Wharf\nLondon, E14 5JP, United Kingdom",
        'clientCompanyNo' => '11894230',
        'clientVatNo' => 'GB 349 108 552',
        'clientEmail' => 'accounts@apexventures.co.uk',
        'clientProject' => 'Macix AI Platform Access — https://macix.co.uk',
        'items' => [
            [
                'name' => 'Macix AI — Growth Strategic Board Deliberation Package',
                'description' => 'Institutional access to 4-persona neural advisory deliberation, downside risk stress-testing, and automated 14-day tactical roadmap generation.',
                'qty' => 1,
                'amount' => 999.00,
            ]
        ],
        'subtotal' => 999.00,
        'vatRate' => '0.00% (Reverse Charge)',
        'vatAmount' => 0.00,
        'total' => 999.00,
        'currencySymbol' => '€',
        'currencyCode' => 'EUR',
        'notes' => 'Prepaid B2B wallet clearance. 0% VAT reverse charge applies for corporate electronic advisory intelligence in compliance with UK HMRC regulations.',
    ],

    // 2. Client Invoice: €2899
    'client_invoice_2_2899' => [
        'type' => 'CLIENT INVOICE',
        'invoiceNumber' => 'INV-2026-MCX289',
        'issueDate' => '28 August 2026',
        'status' => 'PAID & SETTLED',
        'poNumber' => 'PO-MRD-2026-42',
        'issuerName' => 'CHANGE IT UP SERVICES LTD',
        'issuerAddress' => "14 Broadway, Nottingham\nUnited Kingdom, NG1 1PS",
        'issuerCompanyNo' => '16107295',
        'issuerVatNo' => 'GB 419 802 114',
        'issuerWebsite' => 'https://macix.co.uk',
        'issuerEmail' => 'billing@macix.co.uk',
        'clientName' => 'Meridian Global Partners Ltd',
        'clientAddress' => "100 Bishopsgate, Level 18\nLondon, EC2N 4AG, United Kingdom",
        'clientCompanyNo' => '09842177',
        'clientVatNo' => 'GB 220 894 103',
        'clientEmail' => 'finance@meridianglobal.co.uk',
        'clientProject' => 'Macix AI Quarterly Governance — https://macix.co.uk',
        'items' => [
            [
                'name' => 'Macix AI — Quarterly Governance Executive Pack (3-Session Suite)',
                'description' => 'Quarterly institutional strategic deliberation suite with balance sheet context ingestion, custom persona weighting, and formal board meeting minutes export.',
                'qty' => 1,
                'amount' => 2899.00,
            ]
        ],
        'subtotal' => 2899.00,
        'vatRate' => '0.00% (Reverse Charge)',
        'vatAmount' => 0.00,
        'total' => 2899.00,
        'currencySymbol' => '€',
        'currencyCode' => 'EUR',
        'notes' => 'Settled via Corporate Card clearance. 0.00% VAT applied under B2B Reverse Charge rules for electronic services.',
    ],

    // 3. Supplier Invoice 1: £13,500
    'supplier_invoice_1_13500' => [
        'type' => 'SUPPLIER INVOICE',
        'invoiceNumber' => 'HM-2026-8941',
        'issueDate' => '12 July 2026',
        'status' => 'PAID & SETTLED',
        'poNumber' => 'PO-CIU-2026-001',
        'issuerName' => 'HUMAN MADE LIMITED',
        'issuerAddress' => "81 Dale Road, Matlock\nDerbyshire, DE4 3LU, United Kingdom",
        'issuerCompanyNo' => '07238671',
        'issuerVatNo' => 'GB 992 486 312',
        'issuerWebsite' => 'https://humanmade.com',
        'issuerEmail' => 'billing@humanmade.com',
        'clientName' => 'CHANGE IT UP SERVICES LTD',
        'clientAddress' => "14 Broadway, Nottingham\nUnited Kingdom, NG1 1PS",
        'clientCompanyNo' => '16107295',
        'clientEmail' => 'support@fitninja.co.uk',
        'clientProject' => 'https://macix.co.uk — Web Platform Development (Milestone 1)',
        'items' => [
            [
                'name' => 'Web Platform Architecture, Core Engine & UI/UX Development (Milestone 1)',
                'description' => 'Full-stack architecture, responsive frontend design in React/Inertia, executive dark-mode boardroom UX, and backend API integration for https://macix.co.uk.',
                'qty' => 1,
                'amount' => 13500.00,
            ]
        ],
        'subtotal' => 13500.00,
        'vatRate' => '0.00% (B2B Standard Exemption)',
        'vatAmount' => 0.00,
        'total' => 13500.00,
        'currencySymbol' => '£',
        'currencyCode' => 'GBP',
        'notes' => 'Milestone 1 deliverables accepted and signed off. Settled in full via BACS Direct Bank Transfer to Human Made Limited account.',
    ],

    // 4. Supplier Invoice 2: £17,000
    'supplier_invoice_2_17000' => [
        'type' => 'SUPPLIER INVOICE',
        'invoiceNumber' => 'HM-2026-9082',
        'issueDate' => '25 August 2026',
        'status' => 'PAID & SETTLED',
        'poNumber' => 'PO-CIU-2026-002',
        'issuerName' => 'HUMAN MADE LIMITED',
        'issuerAddress' => "81 Dale Road, Matlock\nDerbyshire, DE4 3LU, United Kingdom",
        'issuerCompanyNo' => '07238671',
        'issuerVatNo' => 'GB 992 486 312',
        'issuerWebsite' => 'https://humanmade.com',
        'issuerEmail' => 'billing@humanmade.com',
        'clientName' => 'CHANGE IT UP SERVICES LTD',
        'clientAddress' => "14 Broadway, Nottingham\nUnited Kingdom, NG1 1PS",
        'clientCompanyNo' => '16107295',
        'clientEmail' => 'support@fitninja.co.uk',
        'clientProject' => 'https://macix.co.uk — AI Deliberation Engine & Invoicing (Milestone 2)',
        'items' => [
            [
                'name' => 'Multi-Avatar AI Pipeline, Invoicing Engine & Production Launch (Milestone 2)',
                'description' => 'Neural deliberation orchestration, real-time telemetry streaming, automated PDF invoice generation, transactional email pipeline, security hardening, and final production release on https://macix.co.uk.',
                'qty' => 1,
                'amount' => 17000.00,
            ]
        ],
        'subtotal' => 17000.00,
        'vatRate' => '0.00% (B2B Standard Exemption)',
        'vatAmount' => 0.00,
        'total' => 17000.00,
        'currencySymbol' => '£',
        'currencyCode' => 'GBP',
        'notes' => 'Milestone 2 final project completion and handover approved. Settled in full via BACS Direct Bank Transfer to Human Made Limited account.',
    ],
];

$outDir = __DIR__ . '/public/invoices';
if (!is_dir($outDir)) {
    mkdir($outDir, 0755, true);
}

foreach ($invoices as $key => $data) {
    // 1. Render HTML
    $html = View::make('pdf.simple_invoice', $data)->render();
    file_put_contents("$outDir/{$key}.html", $html);

    // 2. Render PDF via DomPDF
    $pdf = Pdf::loadHTML($html)->setPaper('a4', 'portrait');
    file_put_contents("$outDir/{$key}.pdf", $pdf->output());

    echo "Generated: public/invoices/{$key}.pdf and .html\n";
}

echo "All 4 invoices generated successfully!\n";

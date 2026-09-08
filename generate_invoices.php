<?php

require_once __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\View;
use Carbon\Carbon;

$outDir = __DIR__ . '/public/invoices';
if (!is_dir($outDir)) {
    mkdir($outDir, 0755, true);
}

// -------------------------------------------------------------
// 1. Client Invoice 1 (€999) — Macix AI Official Platform Style
// -------------------------------------------------------------
$clientInvoice1 = (object) [
    'id' => 99,
    'invoice_number' => 'INV-2026-MCX099',
    'service_description' => 'Macix AI — Growth Strategic Board Deliberation Package',
    'subtotal_eur' => 999.00,
    'tax_eur' => 0.00,
    'total_eur' => 999.00,
    'vat_rate_percent' => 0.00,
    'status' => 'PAID',
    'customer_name' => 'Alexander Vance',
    'customer_email' => 'alex@apexventures.co.uk',
    'customer_company' => 'Apex Venture Capital & Advisory Ltd',
    'customer_vat' => 'GB 349 108 552',
    'customer_address' => '25 Bank Street, Canary Wharf, London, E14 5JP, United Kingdom',
    'created_at' => Carbon::create(2026, 8, 14, 11, 30, 0),
];

$htmlClient1 = View::make('pdf.wallet_invoice', [
    'invoice' => $clientInvoice1,
    'user' => (object) [
        'name' => $clientInvoice1->customer_name,
        'email' => $clientInvoice1->customer_email,
        'company_name' => $clientInvoice1->customer_company,
        'vat_number' => $clientInvoice1->customer_vat,
        'billing_address' => $clientInvoice1->customer_address,
    ],
])->render();

file_put_contents("$outDir/client_invoice_1_999.html", $htmlClient1);
$pdfClient1 = Pdf::loadHTML($htmlClient1)->setPaper('a4', 'portrait');
file_put_contents("$outDir/client_invoice_1_999.pdf", $pdfClient1->output());
echo "Generated Client Invoice 1 (€999.00) in Macix AI style.\n";


// -------------------------------------------------------------
// 2. Client Invoice 2 (€2899) — Macix AI Official Platform Style
// -------------------------------------------------------------
$clientInvoice2 = (object) [
    'id' => 289,
    'invoice_number' => 'INV-2026-MCX289',
    'service_description' => 'Macix AI — Quarterly Governance Executive Pack (3-Session Suite)',
    'subtotal_eur' => 2899.00,
    'tax_eur' => 0.00,
    'total_eur' => 2899.00,
    'vat_rate_percent' => 0.00,
    'status' => 'PAID',
    'customer_name' => 'Julian Montgomery',
    'customer_email' => 'j.montgomery@meridianglobal.co.uk',
    'customer_company' => 'Meridian Global Partners Ltd',
    'customer_vat' => 'GB 220 894 103',
    'customer_address' => '100 Bishopsgate, Level 18, London, EC2N 4AG, United Kingdom',
    'created_at' => Carbon::create(2026, 8, 28, 14, 45, 0),
];

$htmlClient2 = View::make('pdf.wallet_invoice', [
    'invoice' => $clientInvoice2,
    'user' => (object) [
        'name' => $clientInvoice2->customer_name,
        'email' => $clientInvoice2->customer_email,
        'company_name' => $clientInvoice2->customer_company,
        'vat_number' => $clientInvoice2->customer_vat,
        'billing_address' => $clientInvoice2->customer_address,
    ],
])->render();

file_put_contents("$outDir/client_invoice_2_2899.html", $htmlClient2);
$pdfClient2 = Pdf::loadHTML($htmlClient2)->setPaper('a4', 'portrait');
file_put_contents("$outDir/client_invoice_2_2899.pdf", $pdfClient2->output());
echo "Generated Client Invoice 2 (€2,899.00) in Macix AI style.\n";


// -------------------------------------------------------------
// 3. Supplier Invoice 1 (£13,500) — Human Made Limited
// -------------------------------------------------------------
$supplierData1 = [
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
];

$htmlSupplier1 = View::make('pdf.simple_invoice', $supplierData1)->render();
file_put_contents("$outDir/supplier_invoice_1_13500.html", $htmlSupplier1);
$pdfSupplier1 = Pdf::loadHTML($htmlSupplier1)->setPaper('a4', 'portrait');
file_put_contents("$outDir/supplier_invoice_1_13500.pdf", $pdfSupplier1->output());
echo "Generated Supplier Invoice 1 (£13,500.00).\n";


// -------------------------------------------------------------
// 4. Supplier Invoice 2 (£17,000) — Human Made Limited
// -------------------------------------------------------------
$supplierData2 = [
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
];

$htmlSupplier2 = View::make('pdf.simple_invoice', $supplierData2)->render();
file_put_contents("$outDir/supplier_invoice_2_17000.html", $htmlSupplier2);
$pdfSupplier2 = Pdf::loadHTML($htmlSupplier2)->setPaper('a4', 'portrait');
file_put_contents("$outDir/supplier_invoice_2_17000.pdf", $pdfSupplier2->output());
echo "Generated Supplier Invoice 2 (£17,000.00).\n";

echo "All 4 invoices generated successfully!\n";

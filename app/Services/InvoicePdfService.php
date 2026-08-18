<?php

namespace App\Services;

use App\Models\BoardSession;
use App\Models\Invoice;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Response;

class InvoicePdfService
{
    /**
     * Download or stream Invoice PDF
     */
    public function downloadInvoice(Invoice $invoice): Response
    {
        $pdf = Pdf::loadView('pdf.invoice', [
            'invoice' => $invoice,
        ])->setPaper('a4', 'portrait');

        return $pdf->download("Invoice-{$invoice->invoice_number}.pdf");
    }

    /**
     * Stream or download Board Minutes PDF
     */
    public function downloadBoardMinutes(BoardSession $session): Response
    {
        $session->load(['resolution', 'user']);

        $pdf = Pdf::loadView('pdf.board_minutes', [
            'session' => $session,
            'resolution' => $session->resolution,
        ])->setPaper('a4', 'portrait');

        $slug = \Illuminate\Support\Str::slug($session->title ?: 'Board-Minutes-' . $session->id);
        return $pdf->download("Macix-Board-Minutes-{$slug}.pdf");
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\BoardSession;
use App\Models\Invoice;
use App\Services\InvoicePdfService;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function __construct(protected InvoicePdfService $pdfService)
    {
    }

    /**
     * Download Tax Invoice PDF
     */
    public function download(Request $request, int $id)
    {
        $invoice = Invoice::where('user_id', $request->user()->id)->findOrFail($id);

        return $this->pdfService->downloadInvoice($invoice);
    }

    /**
     * Export Board Minutes PDF
     */
    public function exportMinutes(Request $request, int $sessionId)
    {
        $session = BoardSession::where('user_id', $request->user()->id)->findOrFail($sessionId);

        return $this->pdfService->downloadBoardMinutes($session);
    }
}

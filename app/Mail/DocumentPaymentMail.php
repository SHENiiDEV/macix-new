<?php

namespace App\Mail;

use App\Models\BoardSession;
use App\Models\Invoice;
use App\Models\Transaction;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Attachment;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DocumentPaymentMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public User $user,
        public ?BoardSession $session,
        public ?Invoice $invoice,
        public ?Transaction $transaction
    ) {
    }

    public function envelope(): Envelope
    {
        $amount = $this->transaction->amount_eur ?? $this->invoice->total_eur ?? 559;
        return new Envelope(
            from: new Address(config('mail.from.address', 'info@voltoria.co.uk'), config('mail.from.name', 'Macix AI | INCHWARD LIMITED')),
            subject: 'Macix AI — Official Invoice & Board Resolution Unlocked (€' . number_format((float)$amount, 2) . ')',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.document_payment',
        );
    }

    public function attachments(): array
    {
        if (!$this->invoice) {
            return [];
        }

        $pdf = Pdf::loadView('pdf.wallet_invoice', [
            'invoice' => $this->invoice,
            'user' => $this->user,
            'payment' => $this->transaction,
        ]);

        $invoiceRef = $this->invoice->invoice_number ?: ('INV-' . $this->invoice->id);

        return [
            Attachment::fromData(fn () => $pdf->output(), "Invoice_{$invoiceRef}.pdf")
                ->withMime('application/pdf'),
        ];
    }
}

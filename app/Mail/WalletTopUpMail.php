<?php

namespace App\Mail;

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

class WalletTopUpMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public User $user,
        public Transaction $transaction,
        public Invoice $invoice
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address', 'info@macix.co.uk'), config('mail.from.name', 'Macix AI | DRAYBOND LIMITED')),
            subject: 'Receipt & VAT Invoice: Wallet Top-Up €' . number_format($this->transaction->amount_eur, 2) . ' — ' . $this->invoice->invoice_number,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.wallet_topup',
        );
    }

    public function attachments(): array
    {
        $pdf = Pdf::loadView('pdf.invoice', ['invoice' => $this->invoice]);
        
        return [
            Attachment::fromData(fn () => $pdf->output(), $this->invoice->invoice_number . '.pdf')
                ->withMime('application/pdf'),
        ];
    }
}

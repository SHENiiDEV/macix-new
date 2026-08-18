<?php

namespace App\Mail;

use App\Models\BoardResolution;
use App\Models\BoardSession;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public User $user,
        public BoardSession $session,
        public BoardResolution $resolution,
        public Transaction $transaction
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address', 'info@macix.co.uk'), config('mail.from.name', 'Macix AI | DRAYBOND LIMITED')),
            subject: 'Board Resolution Ready: ' . $this->transaction->service_name,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.order_confirmation',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}

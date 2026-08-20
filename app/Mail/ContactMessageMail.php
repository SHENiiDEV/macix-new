<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessageMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public array $data
    ) {
    }

    public function envelope(): Envelope
    {
        $companyName = env('COMPANY_NAME', 'CHANGE IT UP SERVICES LTD');
        $fromEmail = config('mail.from.address', 'support@fitninja.co.uk');

        return new Envelope(
            from: new Address($fromEmail, "Macix AI | " . $companyName),
            replyTo: [
                new Address($this->data['email'], $this->data['name'])
            ],
            subject: 'New Executive Support Ticket: ' . ($this->data['subject'] ?? 'Inquiry') . ' [' . ($this->data['name'] ?? 'Client') . ']',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact_message',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}

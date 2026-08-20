<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WelcomeUserMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public User $user
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address', 'info@voltoria.co.uk'), config('mail.from.name', 'Macix AI | INCHWARD LIMITED')),
            subject: 'Welcome to Macix AI — Your Personal Board of AI Advisors',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.welcome_user',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}

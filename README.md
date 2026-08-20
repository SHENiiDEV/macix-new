# 🧠 Macix AI: Your Personal Board of AI Advisors

**Macix AI** is a premium B2B SaaS platform providing founders, CEOs, and executive leaders with an on-demand virtual **Board of AI Advisors**.

The system orchestrates multi-perspective strategic deliberations (*The Ruthless Investor*, *The Empathic Mentor*, *The Pragmatic Operator*, *The Devil's Advocate*) and delivers comprehensive executive resolutions synthesized by *The Chairman of the Board* with a prioritized **30-day Action Roadmap**.

---

## 🏛 Legal Entity & Corporate Invoicing
All financial, invoicing, and legal infrastructure is strictly branded under:
- **Operating Entity**: `CHANGE IT UP SERVICES LTD`
- **Company Number**: `16107295`
- **Registered Address**: `14 Broadway, Nottingham, United Kingdom, NG1 1PS`
- **Support Desk**: `support@fitninja.co.uk` (Target SLA: 24-48 hours)
- **Tax Policy**: 0.00% VAT Reverse Charge for B2B

---

## ⚡ Key Features

- **Prepaid Internal Wallet**: High-ticket prepaid architecture in EUR (€) eliminating chargebacks.
- **Official VAT PDF Invoices**: Auto-generated A4 invoices bearing the `PAID & VERIFIED` official stamp.
- **Macix AI Multi-Avatar Engine**: Parallel executive persona reasoning with live dynamic deliberation status.
- **Board Minutes Export**: Official downloadable PDF reports with executive summaries and action plans.
- **Transactional B2B Emails**: Namecheap Private Email SMTP integration with auto-attached PDF invoices.
- **UK Legal Compliance**: Full `/terms`, `/privacy` (UK GDPR Zero-Training Guarantee), and `/refund` policies.

---

## 🛠 Tech Stack

- **Backend**: Laravel 13, PHP 8.4
- **Frontend**: React.js, Inertia.js, Tailwind CSS, Lucide Icons, Magic UI
- **Database**: SQLite
- **PDF Engine**: `barryvdh/laravel-dompdf`
- **AI Inference**: High-Performance Multi-Perspective Reasoning Engine
- **Mail Transport**: Namecheap Private Email (`mail.privateemail.com`, SSL 465)

---

## 🚀 Quick Start

1. **Clone & Install Dependencies**:
   ```bash
   git clone https://github.com/SHENiiDEV/macix-new.git
   cd macix-new
   composer install
   npm install
   ```

2. **Environment Setup**:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Migrate & Seed Demo Data**:
   ```bash
   php artisan migrate:fresh --seed
   ```

4. **Build Assets & Launch Server**:
   ```bash
   npm run build
   php artisan serve --port=4444
   ```

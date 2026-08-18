<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Transactions Table
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('reference')->unique();
            $table->enum('type', ['top_up', 'board_session', 'refund']);
            $table->string('service_name'); // Strict B2B service name e.g. "Pro Custom Board Session (€499)"
            $table->decimal('amount_eur', 12, 2);
            $table->decimal('balance_before', 12, 2)->default(0.00);
            $table->decimal('balance_after', 12, 2)->default(0.00);
            $table->string('status')->default('completed'); // pending, completed, failed
            $table->string('payment_method')->default('wallet_debit'); // card_instant, wire_transfer, wallet_debit
            $table->json('metadata')->nullable();
            $table->timestamps();
        });

        // 2. Invoices Table
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('transaction_id')->nullable()->constrained()->nullOnDelete();
            $table->string('invoice_number')->unique(); // e.g. INV-2026-00101
            $table->string('customer_name');
            $table->string('customer_company')->nullable();
            $table->string('customer_email');
            $table->string('customer_vat')->nullable();
            $table->text('customer_address')->nullable();
            $table->decimal('subtotal_eur', 12, 2);
            $table->decimal('vat_rate_percent', 5, 2)->default(0.00);
            $table->decimal('vat_amount_eur', 12, 2)->default(0.00);
            $table->decimal('total_eur', 12, 2);
            $table->string('service_name');
            $table->string('status')->default('PAID');
            $table->timestamp('issued_at')->useCurrent();
            $table->string('pdf_path')->nullable();
            $table->timestamps();
        });

        // 3. Board Sessions Table
        Schema::create('board_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('tier')->default('starter'); // starter, pro, enterprise
            $table->string('title')->nullable();
            $table->longText('brief_text');
            $table->text('company_context')->nullable(); // Financials, team size, runway
            $table->json('custom_advisors')->nullable(); // For Pro & Enterprise customized personas
            $table->decimal('cost_eur', 12, 2)->default(149.00);
            $table->enum('status', ['pending', 'deliberating', 'completed', 'failed'])->default('pending');
            $table->timestamps();
        });

        // 4. Board Resolutions Table
        Schema::create('board_resolutions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('board_session_id')->constrained()->cascadeOnDelete();
            $table->json('investor_opinion'); // Analysis, concerns, quote, stance
            $table->json('mentor_opinion');
            $table->json('operator_opinion');
            $table->json('devil_opinion');
            $table->longText('chairman_summary');
            $table->string('strategic_verdict')->default('PROCEED WITH CONTINGENCY');
            $table->integer('consensus_score')->default(78); // 1-100%
            $table->string('risk_score')->default('MODERATE'); // LOW, MODERATE, HIGH, CRITICAL
            $table->json('action_plan'); // 30-day chronological action items
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('board_resolutions');
        Schema::dropIfExists('board_sessions');
        Schema::dropIfExists('invoices');
        Schema::dropIfExists('transactions');
    }
};

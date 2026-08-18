<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BoardroomController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\LegalController;
use App\Http\Controllers\WalletController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::get('/', [BoardroomController::class, 'landing'])->name('landing');

// Legal Policies (DRAYBOND LIMITED - UK Jurisdiction)
Route::get('/terms', [LegalController::class, 'terms'])->name('legal.terms');
Route::get('/privacy', [LegalController::class, 'privacy'])->name('legal.privacy');
Route::get('/refund', [LegalController::class, 'refund'])->name('legal.refund');

// Guest Authentication
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});

/*
|--------------------------------------------------------------------------
| Authenticated Executive Suite Routes
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    // Auth & Profile
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('/profile', [AuthController::class, 'updateProfile'])->name('profile.update');

    // Dashboard
    Route::get('/dashboard', [BoardroomController::class, 'dashboard'])->name('dashboard');

    // Boardroom Deliberation & Resolutions
    Route::get('/board/new', [BoardroomController::class, 'create'])->name('board.new');
    Route::post('/board/convene', [BoardroomController::class, 'convene'])->name('board.convene');
    Route::get('/board/{id}/deliberating', [BoardroomController::class, 'deliberating'])->name('board.deliberating');
    Route::get('/board/{id}/resolution', [BoardroomController::class, 'resolution'])->name('board.resolution');
    Route::get('/board/history', [BoardroomController::class, 'history'])->name('board.history');

    // Billing & Wallet
    Route::get('/billing', [WalletController::class, 'index'])->name('billing.index');
    Route::post('/wallet/top-up', [WalletController::class, 'topUp'])->name('wallet.topup');

    // Official PDF Invoices & Minutes Downloads
    Route::get('/invoices/{id}/download', [InvoiceController::class, 'download'])->name('invoices.download');
    Route::get('/board/{id}/export-minutes', [InvoiceController::class, 'exportMinutes'])->name('board.exportMinutes');
});

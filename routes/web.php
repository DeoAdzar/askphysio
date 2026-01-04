<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PhysiotherapyController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
});

// Physiotherapy Routes
Route::prefix('physiotherapy')->name('physiotherapy.')->group(function () {
    Route::get('/', [PhysiotherapyController::class, 'index'])->name('index');
    Route::get('/specialization/{id}', [PhysiotherapyController::class, 'show'])->name('show');
    Route::get('/conditions', [PhysiotherapyController::class, 'conditions'])->name('conditions');
    Route::get('/condition/{id}', [PhysiotherapyController::class, 'conditionDetail'])->name('condition.detail');
});
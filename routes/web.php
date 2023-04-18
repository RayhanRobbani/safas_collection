<?php

use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\CollectionController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/about-me', [HomeController::class, 'about'])->name('about');
Route::get('/gallery', [HomeController::class, 'gallery'])->name('gallery');
Route::get('/gallery-item', [HomeController::class, 'galleryItem'])->name('gallery.item');

Route::get('/dashboard2', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard2');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

    // Route::prefix('collection')->group(function () {
    //     Route::get('create', [CollectionController::class, 'create'])->name('collection.create');
    // });
    Route::resource('collection', CollectionController::class);
});

require __DIR__.'/auth.php';

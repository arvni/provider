<?php

use App\Http\Controllers\Admin\ChangePasswordController;
use App\Http\Controllers\Admin\ConsentController;
use App\Http\Controllers\Admin\DiseaseController;
use App\Http\Controllers\Admin\SampleTypeController;
use App\Http\Controllers\Admin\SymptomController;
use App\Http\Controllers\Admin\SymptomGroupController;
use App\Http\Controllers\Admin\TestController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\DownloadOrderSummaryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderMaterialController;
use App\Models\Order;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::group(["prefix" => "admin", "as" => "admin."], function () {
        Route::resource("symptom-groups", SymptomGroupController::class);
        Route::resource("sample-types", SampleTypeController::class);
        Route::resource("symptoms", SymptomController::class);
        Route::resource("diseases", DiseaseController::class);
        Route::resource("consents", ConsentController::class);
        Route::resource("tests", TestController::class);
        Route::resource("users", UserController::class)->except(["edit", "create"]);
        Route::resource("order-materials", \App\Http\Controllers\Admin\OrderMaterialController::class)->except(["create", "store"]);
        Route::resource("orders", \App\Http\Controllers\Admin\OrderController::class)->except(["edit", "update", "create", "store"]);
        Route::get("orders/{order}/edit/{step}", [\App\Http\Controllers\Admin\OrderController::class, "edit"])->name("orders.edit");
        Route::put("orders/{order}/edit/{step}", [\App\Http\Controllers\Admin\OrderController::class, "update"])->name("orders.update");

    });
    Route::resource("order-materials", OrderMaterialController::class);
    Route::resource("orders", OrderController::class)->except(["edit", "update"]);
    Route::get("orders/{order}/edit/{step}", [OrderController::class, "edit"])->name("orders.edit");
    Route::put("orders/{order}/edit/{step}", [OrderController::class, "update"])->name("orders.update");
    Route::get("order-summary/{order}", DownloadOrderSummaryController::class)->name("order-summary");

    Route::put("/change-password/{user}", ChangePasswordController::class)->name("users.updatePassword");
});

Route::get("/tester/{order}", function (Order $order) {
//    return \App\Http\Resources\UserResource::collection(\App\Models\User::all());
//    $symptomGroups = json_decode(file_get_contents(base_path("data/symptom.json")), true);
//    foreach ($symptomGroups as $sg) {
//        $symptomGroup = SymptomGroup::whereName($sg["name"])->first();
//        if (!$symptomGroup)
//            $symptomGroup = SymptomGroup::factory()->create([
//                "name" => $sg["name"]
//            ]);
//    }
    $order->load(["patient", "samples"]);
    return view("Order", ["order" => $order]);
});


require __DIR__ . '/auth.php';

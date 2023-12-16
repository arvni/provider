<?php

use App\Http\Controllers\Admin\ConsentController;
use App\Http\Controllers\Admin\SampleTypeController;
use App\Http\Controllers\Admin\SymptomController;
use App\Http\Controllers\Admin\SymptomGroupController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Api\LisTestController;
use App\Http\Controllers\Api\ListSampleTypeController;
use App\Http\Controllers\Api\ListSymptomGroupController;
use App\Http\Controllers\Api\ListSymptomsController;
use App\Http\Controllers\Api\ListUserController;
use App\Http\Controllers\DocumentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("users", ListUserController::class)->name("api.users.index");
Route::get("users/{user}", [UserController::class,"show"])->name("api.users.show");
Route::get("/tests", LisTestController::class)->name("api.tests.index");
Route::get("/sample-types/{sampleType}", [SampleTypeController::class, "show"])->name("api.sample-types.show");
Route::get("/sample-types", ListSampleTypeController::class)->name("api.sample-types.index");
Route::get("/symptom-groups/{symptomGroup}", [SymptomGroupController::class, "show"])->name("api.symptom-groups.show");
Route::get("/symptom-groups", ListSymptomGroupController::class)->name("api.symptom-groups.index");
Route::get("/symptoms/{symptom}", [SymptomController::class, "show"])->name("api.symptoms.show");
Route::get("/symptoms", ListSymptomsController::class)->name("api.symptoms.index");
Route::get("/consents/{consent}", [ConsentController::class, "show"])->name("api.consents.show");

//Route::get("/symptom-groups", \App\Http\Controllers\Api\ListSymptomGroupController::class)->name("api.symptom-groups.index");
//Route::get("/scrap/diseases/", function (Request $request) {
//    $size = $request->get("size", 50);
//    $search = $request->get("search", "");
//    return Http::get("https://www.centoportal.com/api/mdm-service/hpo-catalog/search?query=$search&size=$size");
//});
//Route::get("/scrap/symptoms/", function (Request $request) {
////    $size=$request->get("size",50);
////    $search=$request->get("search","");
//    return file_get_contents(base_path("data/symptom.json"));
//});
//Route::get("/scrap/tests/", function (Request $request) {
//    $size = $request->get("size", 50);
//    $search = $request->get("search", "");
////    return file_get_contents(base_path("data/symptom.json"));
//    return Http::get("https://www.centoportal.com/api/mdm-service/portfolio/products?query=&queryType=TEST&filters=&offset=0&size=$size");
//});
//
//
//Route::get("/scrap/test-categories/", function (Request $request) {
////    $size=$request->get("size",50);
////    $search=$request->get("search","");
////    return file_get_contents(base_path("data/symptom.json"));
//    return Http::get("https://www.centoportal.com/api/mdm-service/portfolio/dropdown-data");
//});

Route::post("/upload/{relatedClass}/{relatedId}/{tag}", [DocumentController::class, "upload"])->name("upload");

Route::get("/download/{document}", [DocumentController::class, "download"])->name("download");


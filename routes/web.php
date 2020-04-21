<?php

use Illuminate\Support\Facades\Route;

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
    return view('edit');
});

Route::get('/post/{id}', 'PostController@show');
Route::get('/post/{id}/edit', 'PostController@index');
Route::post('/post/{id}/edit', 'PostController@edit');
Route::post('/post/edit/img', 'PostController@uploadImage');

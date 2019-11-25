<?php

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

//Route::get('/', 'PagesController@gethome');
//Route::get('/about', 'PagesController@getabout');
//Route::get('/contact', 'PagesController@getcontact');
//Route::post('/contact/submit', 'MessagesController@submit');
//Route::get('/messages', 'MessagesController@getmessages');
//Auth::routes();

//Route::get('/', 'HomeController@index')->name('home');

Route::view('/{path?}', 'app');
//Route::get('/', 'TaskController@show');

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');

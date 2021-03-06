'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/register', 'AuthController.register');
Route.post('/login', 'AuthController.login');
Route.post('/logout', 'AuthController.logout').middleware(['auth']);


Route.post('/detect', 'DetectController.detectMusicGenre').middleware(['auth']);
Route.get('/detect', 'DetectController.detectMusicGenre').middleware(['auth']);

Route.post('/upload', 'DetectController.uploadFile').middleware(['auth']);

Route.post('/generate', 'GeneratePlaylistController.generatePlaylist').middleware(['auth']);

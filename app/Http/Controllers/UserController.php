<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function show(Request $request, $id)
  {
    // This default value will be returned if the specified key does not exist in the session
  //  $value = $request->session()->get('key', 'default');

    /*$value = $request->session()->get('key', function () {
      return 'default';
});*/

  }
}

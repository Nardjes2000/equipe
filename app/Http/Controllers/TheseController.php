<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\These;

class TheseController extends Controller
{
    public function create(Request $request)
    {
      $validatedData = $request->validate([
        'title'=> 'required',
        'profsName'=> 'required',
        'studentName'=> 'required',
        'annee'=> 'required',
        'description'=> 'required',
      ]);

        $these = new These;

        $these->title = $validatedData['title'];
        $these->profsName= $validatedData['profsName'];
        $these->studentName= $validatedData['studentName'];
        $these->annee= $validatedData['annee'];
        $these->description = $validatedData['description'];

        $these->save();

      return response()->json('Succes!');

    }
    public function show()
    {
      $these = These::all();
      return $these->toJson();
    }
}

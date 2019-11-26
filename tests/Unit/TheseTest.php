<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\These;
use Carbon\Carbon;

class TheseTest extends TestCase
{

        use RefreshDatabase;
        public function testaddingTest()
      {
          $date = Carbon::now();

          $these= new These();
          $these->title='test_title';
          $these->profsName='test_prof';
          $these->studentName='test_student';
          $these->annee= $date->toDateString();
          $these->description='random testing string';
          $result=$these->save();

          $this->assertTrue($result);
      }


}

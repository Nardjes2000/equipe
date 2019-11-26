<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;



class SignUpTest extends TestCase
{
      use RefreshDatabase;
        public function testsignupTest()
      {
          $user= new User();
          $user->name='test_name';
          $user->email='test_email@esi.dz';
          $user->password=bcrypt($password = 'testing_test');
          $saveduser=$user->save();


          $this->assertTrue($saveduser);
      }
}

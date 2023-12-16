<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if (!User::find(1))
            User::create([
                "id" => 1,
                "name" => "admin",
                "email" => "admin@biongenetic.com",
                "password" => "586545586545",
                "mobile" => "+96878454640",
                "userName" => "admin"
            ]);
//         \App\Models\User::factory(100)->has(Account::factory()->count(1),'Accounts')->create();
        $this->call(
            [
                SampleTypeSeeder::class,
                SymptomSeeder::class,
                TestSeeder::class,
            ]
        );
    }
}

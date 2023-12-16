<?php

namespace Database\Seeders;

use App\Models\SampleType;
use App\Models\Test;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tests = json_decode(file_get_contents(base_path("data/test.json")), true)["content"];
        foreach ($tests as $testDetails) {
            $test = Test::where("name", $testDetails["name"])->first();
            if (!$test)
                $test = Test::create([
                    "name" => Str::replace("cento", "Bion", $testDetails["name"],false),
                    "code" => $testDetails["mappedMdmId"],
                    "shortName" => Str::replace("cento", "Bion", $testDetails["name"],false),
                    "description" => Str::replace("cento", "Bion", $testDetails["description"],false),
                    "turnaroundTime" => $testDetails["tat"],
                ]);
            $test->SampleTypes()->sync(collect($testDetails["sampleRequirements"])
                ->reduce(function($res, $item){
                    if (SampleType::find($item["sample"]["id"]))
                    $res[$item["sample"]["id"]] = [
                            "id" => Str::uuid(),
                            "description" => $item["sample"]["description"] . "(" . $item["quantity"] . $item["sample"]["unit"] . ")"
                        ];
                    return $res;
                }, []));
        }
    }
}

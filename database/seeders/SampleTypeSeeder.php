<?php

namespace Database\Seeders;

use App\Models\SampleType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SampleTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sampleTypes = json_decode(file_get_contents(base_path("data/sampleTypes.json")), true);
        foreach ($sampleTypes as $sampleTypeDetails) {
            $sampleType = SampleType::where("name", $sampleTypeDetails["name"])->first();
            if (!$sampleType)
                SampleType::create([
                    "name" => Str::replace("Cento","Bion",$sampleTypeDetails["name"],false),
                    "sample_id_required" => $sampleTypeDetails["sampleIdRequired"],
                ]);
        }
    }
}

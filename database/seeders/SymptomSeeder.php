<?php

namespace Database\Seeders;

use App\Models\Symptom;
use App\Models\SymptomGroup;
use Illuminate\Database\Seeder;

class SymptomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $symptomGroups = json_decode(file_get_contents(base_path("data/symptom.json")), true);
        foreach ($symptomGroups as $sg) {
            $symptomGroup = SymptomGroup::whereName($sg["name"])->first();
            if (!$symptomGroup)
                $symptomGroup = SymptomGroup::factory()->create([
                    "name" => $sg["name"]
                ]);
           $this->saveSymptoms($symptomGroup,$sg["symptoms"]);
        }
    }
    public function convertToSymptom ($item) {
        $symptom = Symptom::whereName($item["name"])->first();
        if (!$symptom)
            $symptom = new Symptom();
        $symptom->fill([...$item, "family_history" => $item["familyHistory"]]);
        unset($symptom->id);
        unset($symptom->familyHistory);
        unset($symptom->tests);
        return $symptom;
    }
    private function saveSymptoms( SymptomGroup $symptomGroup,array $sgs): void
    {
        $symptoms = array_map(fn($item)=>$this->convertToSymptom($item), $sgs);
        $symptomGroup->Symptoms()->saveMany($symptoms);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Specialization;

class SpecializationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $specializations = [
            [
                'name' => 'FISIOTERAPI NEUROLOGI',
                'image' => '/images/specializations/fisioterapi_neurology.png',
                'description' => 'Gangguan sistem saraf pusat & perifer'
            ],
            [
                'name' => 'FISIOTERAPI OLAHRAGA (SPORT)',
                'image' => '/images/specializations/fisioterapi_sport.png',
                'description' => 'Cedera akibat aktivitas fisik atau latihan'
            ],
            [
                'name' => 'FISIOTERAPI PEDIATRI (ANAK)',
                'image' => '/images/specializations/fisioterapi_pediatri.png',
                'description' => 'Gangguan perkembangan dan neuromuskular anak'
            ],
            [
                'name' => 'FISIOTERAPI GERIATRI (LANSIA)',
                'image' => '/images/specializations/fisioterapi_geriatri.png',
                'description' => 'Gangguan akibat proses degeneratif & penuaan'
            ],
            [
                'name' => 'FISIOTERAPI DISABILITAS',
                'image' => '/images/specializations/fisioterapi_disabilitas.png',
                'description' => 'Gangguan fungsional jangka panjang'
            ],
            [
                'name' => 'FISIOTERAPI MUSKULOSKELETAL',
                'image' => '/images/specializations/fisioterapi_muskuloskeletal.png',
                'description' => 'Gangguan otot, tulang, dan sendi'
            ],
            [
                'name' => 'FISIOTERAPI KARDIOVASKULAR & PULMONAL',
                'image' => '/images/specializations/kardiovaskular_pulmonal.png',
                'description' => 'Gangguan jantung & paru'
            ],
            [
                'name' => 'FISIOTERAPI KESEHATAN WANITA',
                'image' => '/images/specializations/kesehatan_wanita.png',
                'description' => 'Gangguan kesehatan reproduksi & panggul'
            ],
            [
                'name' => 'FISIOTERAPI INTEGUMEN (KULIT & JARINGAN)',
                'image' => '/images/specializations/fisioterapi_integument.png',
                'description' => 'Kasus jaringan lunak & luka'
            ],
            [
                'name' => 'ERGONOMI & K3 (KESELAMATAN KERJA)',
                'image' => '/images/specializations/ergonomi_k3.png',
                'description' => 'Gangguan akibat postur atau beban kerja'
            ],
            [
                'name' => 'OLAHRAGA REKREASI',
                'image' => '/images/specializations/olahraga_rekreasi.png',
                'description' => 'Cedera dari aktivitas fisik santai'
            ],
            [
                'name' => 'PARA SPORT (OLAHRAGA DISABILITAS)',
                'image' => '/images/specializations/para_sport.png',
                'description' => 'Kasus atlet dengan disabilitas'
            ],
            [
                'name' => 'WELLNESS & PREVENTIVE PHYSIOTHERAPY',
                'image' => '/images/specializations/wellness_preventive.png',
                'description' => 'Kasus pencegahan dan peningkatan kualitas hidup'
            ],
        ];

        foreach ($specializations as $specialization) {
            Specialization::create($specialization);
        }
    }
}
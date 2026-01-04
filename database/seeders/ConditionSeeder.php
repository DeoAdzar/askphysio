<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Condition;

class ConditionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $conditions = [
            // FISIOTERAPI NEUROLOGI (specialization_id: 1)
            ['specialization_id' => 1, 'name' => 'Stroke (hemiparesis/hemiplegi)'],
            ['specialization_id' => 1, 'name' => 'Parkinson\'s disease'],
            ['specialization_id' => 1, 'name' => 'Multiple sclerosis'],
            ['specialization_id' => 1, 'name' => 'Spinal cord injury (paraplegi, tetraplegi)'],
            ['specialization_id' => 1, 'name' => 'Guillain-Barré syndrome'],
            ['specialization_id' => 1, 'name' => 'Cerebral palsy (anak & dewasa)'],
            ['specialization_id' => 1, 'name' => 'Peripheral neuropathy (diabetes, trauma)'],
            ['specialization_id' => 1, 'name' => 'Bell\'s palsy (facial nerve palsy)'],
            ['specialization_id' => 1, 'name' => 'Traumatic brain injury (TBI)'],
            ['specialization_id' => 1, 'name' => 'Ataxia cerebelar'],
            ['specialization_id' => 1, 'name' => 'Amyotrophic lateral sclerosis (ALS)'],
            ['specialization_id' => 1, 'name' => 'Neuropati akibat kompresi saraf (carpal tunnel, radikulopati)'],
            ['specialization_id' => 1, 'name' => 'Post-polio syndrome'],
            ['specialization_id' => 1, 'name' => 'Meningitis residual weakness'],
            ['specialization_id' => 1, 'name' => 'Dystonia atau chorea (gangguan gerak involunter)'],

            // FISIOTERAPI OLAHRAGA (specialization_id: 2)
            ['specialization_id' => 2, 'name' => 'Anterior cruciate ligament (ACL) tear'],
            ['specialization_id' => 2, 'name' => 'Meniscus injury'],
            ['specialization_id' => 2, 'name' => 'Hamstring strain'],
            ['specialization_id' => 2, 'name' => 'Quadriceps strain'],
            ['specialization_id' => 2, 'name' => 'Achilles tendinopathy'],
            ['specialization_id' => 2, 'name' => 'Ankle sprain'],
            ['specialization_id' => 2, 'name' => 'Tennis elbow (lateral epicondylitis)'],
            ['specialization_id' => 2, 'name' => 'Golfer\'s elbow (medial epicondylitis)'],
            ['specialization_id' => 2, 'name' => 'Shoulder impingement syndrome'],
            ['specialization_id' => 2, 'name' => 'Rotator cuff tear'],
            ['specialization_id' => 2, 'name' => 'Patellar tendinitis (jumper\'s knee)'],
            ['specialization_id' => 2, 'name' => 'Shin splints'],
            ['specialization_id' => 2, 'name' => 'IT band syndrome'],
            ['specialization_id' => 2, 'name' => 'Low back pain akibat overtraining'],
            ['specialization_id' => 2, 'name' => 'Groin strain'],
            ['specialization_id' => 2, 'name' => 'Muscle fatigue and DOMS'],
            ['specialization_id' => 2, 'name' => 'Stress fracture pada pelari'],
            ['specialization_id' => 2, 'name' => 'Dislokasi bahu'],
            ['specialization_id' => 2, 'name' => 'Patah tulang akibat olahraga kontak'],
            ['specialization_id' => 2, 'name' => 'Overuse injury pada pemain tenis/badminton'],

            // FISIOTERAPI PEDIATRI (specialization_id: 3)
            ['specialization_id' => 3, 'name' => 'Cerebral palsy (spastik/ataksik/diskinetik)'],
            ['specialization_id' => 3, 'name' => 'Down syndrome'],
            ['specialization_id' => 3, 'name' => 'Spina bifida'],
            ['specialization_id' => 3, 'name' => 'Developmental coordination disorder (DCD)'],
            ['specialization_id' => 3, 'name' => 'Torticollis kongenital'],
            ['specialization_id' => 3, 'name' => 'Club foot (talipes equinovarus)'],
            ['specialization_id' => 3, 'name' => 'Muscular dystrophy (Duchenne)'],
            ['specialization_id' => 3, 'name' => 'Autism spectrum disorder (intervensi sensorimotor)'],
            ['specialization_id' => 3, 'name' => 'Delayed motor milestone'],
            ['specialization_id' => 3, 'name' => 'Hypotonia infantil'],
            ['specialization_id' => 3, 'name' => 'Hydrocephalus dengan keterlambatan gerak'],
            ['specialization_id' => 3, 'name' => 'Post meningitis developmental delay'],
            ['specialization_id' => 3, 'name' => 'Arthrogryposis multiplex congenita'],
            ['specialization_id' => 3, 'name' => 'Brachial plexus injury neonatus'],
            ['specialization_id' => 3, 'name' => 'Fragile X syndrome'],

            // FISIOTERAPI GERIATRI (specialization_id: 4)
            ['specialization_id' => 4, 'name' => 'Osteoarthritis (lutut, panggul, bahu)'],
            ['specialization_id' => 4, 'name' => 'Rheumatoid arthritis lanjut usia'],
            ['specialization_id' => 4, 'name' => 'Sarcopenia'],
            ['specialization_id' => 4, 'name' => 'Postural instability (gangguan keseimbangan)'],
            ['specialization_id' => 4, 'name' => 'Risk of falls (pencegahan jatuh)'],
            ['specialization_id' => 4, 'name' => 'Osteoporosis'],
            ['specialization_id' => 4, 'name' => 'Low back pain kronik'],
            ['specialization_id' => 4, 'name' => 'Cervical spondylosis'],
            ['specialization_id' => 4, 'name' => 'Frozen shoulder'],
            ['specialization_id' => 4, 'name' => 'Stroke pada lansia'],
            ['specialization_id' => 4, 'name' => 'Alzheimer dengan gangguan mobilitas'],
            ['specialization_id' => 4, 'name' => 'Fraktur panggul pasca jatuh'],
            ['specialization_id' => 4, 'name' => 'Penyakit Parkinson pada lansia'],
            ['specialization_id' => 4, 'name' => 'Inkontinensia urin'],
            ['specialization_id' => 4, 'name' => 'Post operasi penggantian sendi (total knee/hip replacement)'],

            // FISIOTERAPI DISABILITAS (specialization_id: 5)
            ['specialization_id' => 5, 'name' => 'Amputasi tungkai atas/bawah'],
            ['specialization_id' => 5, 'name' => 'Spinal cord injury (SCI)'],
            ['specialization_id' => 5, 'name' => 'Cerebral palsy berat'],
            ['specialization_id' => 5, 'name' => 'Paraplegi & tetraplegi'],
            ['specialization_id' => 5, 'name' => 'Down syndrome'],
            ['specialization_id' => 5, 'name' => 'Poliomyelitis residual paralysis'],
            ['specialization_id' => 5, 'name' => 'Post stroke dengan defisit motorik berat'],
            ['specialization_id' => 5, 'name' => 'Muscular dystrophy'],
            ['specialization_id' => 5, 'name' => 'Arthrogryposis multiplex congenita'],
            ['specialization_id' => 5, 'name' => 'Autism spectrum disorder dengan disabilitas motorik'],
            ['specialization_id' => 5, 'name' => 'Multiple sclerosis lanjut'],
            ['specialization_id' => 5, 'name' => 'Epilepsi dengan defisit motorik sekunder'],

            // FISIOTERAPI MUSKULOSKELETAL (specialization_id: 6)
            ['specialization_id' => 6, 'name' => 'Low back pain (mekanis, diskogenik)'],
            ['specialization_id' => 6, 'name' => 'Cervical pain'],
            ['specialization_id' => 6, 'name' => 'Scoliosis'],
            ['specialization_id' => 6, 'name' => 'Kyphosis'],
            ['specialization_id' => 6, 'name' => 'Frozen shoulder (adhesive capsulitis)'],
            ['specialization_id' => 6, 'name' => 'Shoulder impingement syndrome'],
            ['specialization_id' => 6, 'name' => 'Carpal tunnel syndrome'],
            ['specialization_id' => 6, 'name' => 'Tennis elbow'],
            ['specialization_id' => 6, 'name' => 'De Quervain syndrome'],
            ['specialization_id' => 6, 'name' => 'Trigger finger'],
            ['specialization_id' => 6, 'name' => 'Hip bursitis'],
            ['specialization_id' => 6, 'name' => 'Piriformis syndrome'],
            ['specialization_id' => 6, 'name' => 'Sciatica'],
            ['specialization_id' => 6, 'name' => 'Fraktur radius pasca gips'],
            ['specialization_id' => 6, 'name' => 'Post ORIF (Open Reduction Internal Fixation)'],
            ['specialization_id' => 6, 'name' => 'Plantar fasciitis'],
            ['specialization_id' => 6, 'name' => 'Postur buruk (forward head posture)'],
            ['specialization_id' => 6, 'name' => 'TMJ dysfunction (temporomandibular joint)'],
            ['specialization_id' => 6, 'name' => 'Genu valgum/varum'],
            ['specialization_id' => 6, 'name' => 'Leg length discrepancy'],

            // FISIOTERAPI KARDIOVASKULAR & PULMONAL (specialization_id: 7)
            ['specialization_id' => 7, 'name' => 'COPD (Chronic Obstructive Pulmonary Disease)'],
            ['specialization_id' => 7, 'name' => 'Asma bronkial'],
            ['specialization_id' => 7, 'name' => 'Pneumonia'],
            ['specialization_id' => 7, 'name' => 'Bronchiectasis'],
            ['specialization_id' => 7, 'name' => 'Emfisema paru'],
            ['specialization_id' => 7, 'name' => 'Post operasi jantung (CABG)'],
            ['specialization_id' => 7, 'name' => 'Congestive heart failure'],
            ['specialization_id' => 7, 'name' => 'Post myocardial infarction (rehabilitasi jantung)'],
            ['specialization_id' => 7, 'name' => 'Covid-19 pulmonary rehabilitation'],
            ['specialization_id' => 7, 'name' => 'Cystic fibrosis'],
            ['specialization_id' => 7, 'name' => 'Atelectasis'],
            ['specialization_id' => 7, 'name' => 'Dyspnea akibat penyakit kronis'],
            ['specialization_id' => 7, 'name' => 'Exercise tolerance test (rehab fase II dan III)'],

            // FISIOTERAPI KESEHATAN WANITA (specialization_id: 8)
            ['specialization_id' => 8, 'name' => 'Nyeri punggung bawah saat kehamilan'],
            ['specialization_id' => 8, 'name' => 'Diastasis recti abdominis'],
            ['specialization_id' => 8, 'name' => 'Inkontinensia urin'],
            ['specialization_id' => 8, 'name' => 'Prolaps organ panggul'],
            ['specialization_id' => 8, 'name' => 'Nyeri panggul kronik'],
            ['specialization_id' => 8, 'name' => 'Disfungsi dasar panggul pasca melahirkan'],
            ['specialization_id' => 8, 'name' => 'Rehabilitasi pasca operasi caesar'],
            ['specialization_id' => 8, 'name' => 'Menopause-related osteoporosis'],
            ['specialization_id' => 8, 'name' => 'Sindrom nyeri haid (dysmenorrhea)'],
            ['specialization_id' => 8, 'name' => 'Rehabilitasi pasca mastektomi'],

            // FISIOTERAPI INTEGUMEN (specialization_id: 9)
            ['specialization_id' => 9, 'name' => 'Luka bakar (burn injury)'],
            ['specialization_id' => 9, 'name' => 'Luka pasca operasi'],
            ['specialization_id' => 9, 'name' => 'Ulkus diabetikum'],
            ['specialization_id' => 9, 'name' => 'Ulkus dekubitus (pressure sore)'],
            ['specialization_id' => 9, 'name' => 'Luka traumatik (robekan jaringan)'],
            ['specialization_id' => 9, 'name' => 'Edema limfatik (lymphedema)'],
            ['specialization_id' => 9, 'name' => 'Post skin graft rehabilitation'],
            ['specialization_id' => 9, 'name' => 'Scar management (pembentukan jaringan parut)'],

            // ERGONOMI & K3 (specialization_id: 10)
            ['specialization_id' => 10, 'name' => 'Carpal tunnel syndrome'],
            ['specialization_id' => 10, 'name' => 'Low back pain akibat duduk lama'],
            ['specialization_id' => 10, 'name' => 'Neck strain akibat posisi komputer'],
            ['specialization_id' => 10, 'name' => 'Shoulder overuse pada pekerja kantoran'],
            ['specialization_id' => 10, 'name' => 'Tendinitis akibat getaran alat industri'],
            ['specialization_id' => 10, 'name' => 'Work-related musculoskeletal disorders (WMSD)'],
            ['specialization_id' => 10, 'name' => 'Eye strain akibat komputer'],
            ['specialization_id' => 10, 'name' => 'Slip and fall injury prevention program'],

            // OLAHRAGA REKREASI (specialization_id: 11)
            ['specialization_id' => 11, 'name' => 'Ankle sprain saat hiking'],
            ['specialization_id' => 11, 'name' => 'Shoulder strain akibat berenang'],
            ['specialization_id' => 11, 'name' => 'Kram otot setelah bersepeda jauh'],
            ['specialization_id' => 11, 'name' => 'Low back pain akibat golf'],
            ['specialization_id' => 11, 'name' => 'Cedera lutut akibat futsal rekreasi'],
            ['specialization_id' => 11, 'name' => 'Cedera bahu akibat panjat tebing rekreasi'],
            ['specialization_id' => 11, 'name' => 'Muscle soreness akibat latihan berlebihan'],

            // PARA SPORT (specialization_id: 12)
            ['specialization_id' => 12, 'name' => 'Overuse shoulder injury pada atlet kursi roda'],
            ['specialization_id' => 12, 'name' => 'Phantom limb pain pada amputee athlete'],
            ['specialization_id' => 12, 'name' => 'Pressure sore prevention'],
            ['specialization_id' => 12, 'name' => 'Overuse elbow injury pada atlet amputasi'],
            ['specialization_id' => 12, 'name' => 'Posture correction pada pemain basket kursi roda'],
            ['specialization_id' => 12, 'name' => 'Muscle imbalance pada atlet paraplegi'],
            ['specialization_id' => 12, 'name' => 'Adaptive training untuk sprinter amputasi'],

            // WELLNESS & PREVENTIVE (specialization_id: 13)
            ['specialization_id' => 13, 'name' => 'Postural correction program'],
            ['specialization_id' => 13, 'name' => 'Core stability training'],
            ['specialization_id' => 13, 'name' => 'Yoga-based flexibility program'],
            ['specialization_id' => 13, 'name' => 'Strength & balance training untuk lansia'],
            ['specialization_id' => 13, 'name' => 'Aerobic exercise untuk penurunan berat badan'],
            ['specialization_id' => 13, 'name' => 'Workplace stretching routine'],
            ['specialization_id' => 13, 'name' => 'Breathing exercise untuk relaksasi'],
            ['specialization_id' => 13, 'name' => 'Prenatal & postnatal exercise class'],
            ['specialization_id' => 13, 'name' => 'Fitness assessment dan monitoring'],
            ['specialization_id' => 13, 'name' => 'Program kebugaran komunitas'],
        ];

        foreach ($conditions as $condition) {
            Condition::create($condition);
        }
    }
}
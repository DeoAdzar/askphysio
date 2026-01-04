<?php

namespace App\Http\Controllers;

use App\Models\Specialization;
use App\Models\Condition;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PhysiotherapyController extends Controller
{
    /**
     * Display a listing of all specializations
     */
    public function index()
    {
        $specializations = Specialization::withCount('conditions')->get();
        return Inertia::render('specializations/index', [
            'specializations' => $specializations
        ]);
    }

    /**
     * Display the specified specialization with its conditions
     */
    public function show($id)
    {
        $specialization = Specialization::with('conditions')->findOrFail($id);
        return Inertia::render('specializations/show', [
            'specialization' => $specialization
        ]);
    }

    /**
     * Show all conditions
     */
    public function conditions()
    {
        $conditions = Condition::with('specialization')->paginate(20);
        return Inertia::render('conditions/index', [
            'conditions' => $conditions
        ]);
    }

    /**
     * Show specific condition detail
     */
    public function conditionDetail($id)
    {
        $condition = Condition::with('specialization')->findOrFail($id);
        return Inertia::render('conditions/show', [
            'condition' => $condition
        ]);
    }
}
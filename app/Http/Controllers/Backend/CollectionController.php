<?php

namespace App\Http\Controllers\Backend;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Backend\Collection;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;


class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Backend/Collection/AddNew');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'category' => ['required'],
            'image_front' => ['required'],
            'image_back' => ['required'],
            'title' => ['required'],
            'denomination' => ['required'],
            'year' => ['required'],
            'country' => ['required'],
            'material' => ['required'],
            'theme' => ['required'],
            'remark' => ['required'],
            'visibility_status' => ['required'],
        ]);

        if ($request->hasFile('image_front')) {
            $extension = $request->image_front->getClientOriginalExtension();
            $name = 'collection_' . time() . '.' . $extension;
            Storage::putFileAs('/public/collection', $request->image_front, $name);
            $image_front = '/storage/public/collection/' . $name;
        }

        if ($request->hasFile('image_back')) {
            $extension = $request->image_back->getClientOriginalExtension();
            $name = 'collection_' . time() . '.' . $extension;
            Storage::putFileAs('/public/collection', $request->image_back, $name);
            $image_back = '/storage/public/collection/' . $name;
        }

        $collection = Collection::create([
            'category' => $request->category,
            'image_front' => $image_front,
            'image_back' => $image_back,
            'title' => $request->title,
            'denomination' => $request->denomination,
            'year' => $request->year,
            'country' => $request->country,
            'material' => $request->material,
            'theme' => $request->theme,
            'remark' => $request->remark,
            'visibility_status' => $request->visibility_status,
        ]);

        if ($collection) {
            return to_route('collection.create')->with('success', 'Added to collection successfully!');
        }

        return to_route('collection.create')->with('error', 'An error occured!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Collection $collection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Collection $collection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Collection $collection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Collection $collection)
    {
        //
    }
}

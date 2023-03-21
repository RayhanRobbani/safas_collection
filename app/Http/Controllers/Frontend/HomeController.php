<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Frontend/Home');
    }

    public function contact()
    {
        return inertia('Frontend/Contact');
    }

    public function about()
    {
        return inertia('Frontend/About');
    }

    public function gallery()
    {
        return inertia('Frontend/Gallery');
    }

    public function galleryItem()
    {
        return inertia('Frontend/GalleryItem');
    }
}

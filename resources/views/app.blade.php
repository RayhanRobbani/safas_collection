<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body>
    @inertia

    {{-- Backend --}}
    <script src="/backend/assets/vendors/js/vendor.bundle.base.js"></script>
    <script src="/backend/assets/vendors/chart.js/Chart.min.js"></script>
    <script src="/backend/assets/vendors/progressbar.js/progressbar.min.js"></script>
    <script src="/backend/assets/vendors/jvectormap/jquery-jvectormap.min.js"></script>
    <script src="/backend/assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
    <script src="/backend/assets/vendors/owl-carousel-2/owl.carousel.min.js"></script>
    <script src="/backend/assets/js/off-canvas.js"></script>
    <script src="/backend/assets/js/hoverable-collapse.js"></script>
    <script src="/backend/assets/js/misc.js"></script>
    <script src="/backend/assets/js/settings.js"></script>
    <script src="/backend/assets/js/todolist.js"></script>
    <script src="/backend/assets/js/dashboard.js"></script>

    {{-- Frontend --}}
    <script src="/frontend/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/frontend/assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="/frontend/assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="/frontend/assets/vendor/aos/aos.js"></script>
    <script src="/frontend/assets/vendor/php-email-form/validate.js"></script>
    <script src="/frontend/assets/js/main.js"></script>
</body>

</html>

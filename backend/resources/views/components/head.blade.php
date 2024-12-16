<head>
    <meta charset="utf-8" />
    <title>{{ $title ?? 'Admin Dashboard' }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ $description ?? 'Default description' }}" />
    <meta name="author" content="{{ $author ?? 'Default author' }}" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('backend/assets/images/favicon.ico') }}">

    <!-- App css -->
    <link href="{{ asset('backend/assets/css/app.min.css') }}" rel="stylesheet" type="text/css" id="app-style" />

    <!-- Icons -->
    <link href="{{ asset('backend/assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />

    <!-- Toastr CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css">

    <!-- Additional styles -->
    {{ $styles ?? '' }}
</head>

@if (Session::has('success'))
    <x-alert type="success" message="{{ Session::get('success') }}" />
@endif

@if (Session::has('error'))
    <x-alert type="error" message="{{ Session::get('error') }}" />
@endif

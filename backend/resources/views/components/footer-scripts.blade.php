<!-- Vendor -->
<script src="{{ asset('backend/assets/libs/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('backend/assets/libs/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('backend/assets/libs/simplebar/simplebar.min.js') }}"></script>
<script src="{{ asset('backend/assets/libs/node-waves/waves.min.js') }}"></script>
<script src="{{ asset('backend/assets/libs/waypoints/lib/jquery.waypoints.min.js') }}"></script>
<script src="{{ asset('backend/assets/libs/jquery.counterup/jquery.counterup.min.js') }}"></script>
<script src="{{ asset('backend/assets/libs/feather-icons/feather.min.js') }}"></script>

<!-- Apexcharts JS -->
<script src="{{ asset('backend/assets/libs/apexcharts/apexcharts.min.js') }}"></script>

<!-- For basic area chart -->
<script src="https://apexcharts.com/samples/assets/stock-prices.js"></script>

<!-- Widgets Init JS -->
<script src="{{ asset('backend/assets/js/pages/analytics-dashboard.init.js') }}"></script>

<!-- App JS -->
<script src="{{ asset('backend/assets/js/app.js') }}"></script>

<script src=" {{ asset('backend/assets/libs/datatables.net/js/jquery.dataTables.min.js') }}"></script>
<!-- dataTables.bootstrap5 -->
<script src=" {{ asset('backend/assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js') }}"></script>
<script src=" {{ asset('backend/assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js') }}"></script>
<!-- Datatable Demo App Js -->
<script src=" {{ asset('backend/assets/js/pages/datatable.init.js') }}"></script>
<!-- Toastr Notifications -->
<x-toaster />

<!-- Datatables js -->
<script src=" {{ asset('backend/assets/libs/datatables.net/js/jquery.dataTables.min.js') }}"></script>

   <!-- dataTables.bootstrap5 -->
<script src=" {{ asset('backend/assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js') }}"></script>
<script src=" {{ asset('backend/assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js') }}"></script>
<!-- Datatable Demo App Js -->
<script src=" {{ asset('backend/assets/js/pages/datatable.init.js') }}"></script>

<!-- Additional Scripts -->
{{ $slot }}

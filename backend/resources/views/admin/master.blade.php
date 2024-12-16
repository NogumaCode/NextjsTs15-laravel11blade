<!DOCTYPE html>
<html lang="ja">

<x-head :title="'Admin dashboard'" :description="'Admin dashboard page'" :author="'Palet-design'" />

<!-- body start -->

<body data-menu-color="light" data-sidebar="default">

    <!-- Begin page -->
    <div id="app-layout">


        <!-- Topbar Start -->
        @include('admin.body.header')
        <!-- end Topbar -->

        <!-- Left Sidebar Start -->
        @include('admin.body.sidebar')
        <!-- Left Sidebar End -->

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="content-page">
            <!-- content -->
            @yield('admin')

            <!-- Footer Start -->
            @include('admin.body.footer')
            <!-- end Footer -->

        </div>
        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->

    </div>
    <!-- END wrapper -->
    <x-footer-scripts />
</body>

</html>

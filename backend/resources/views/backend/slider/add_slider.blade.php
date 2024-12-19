@extends('admin.master')
@section('admin')
    <div class="content">

        <!-- Start Content-->
        <div class="container-xxl">

            <div class="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                <div class="flex-grow-1">
                    <h4 class="fs-18 fw-semibold m-0">All Slider</h4>
                </div>

            </div>

            <!-- Form Validation -->
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">All Slider</h5>
                        </div><!-- end card header -->
                        <div class="card-body">
                            <x-error-messages />
                            <x-session-messages />
                            <form action="{{ route('store.slider') }}" method="post" class="row g-3"
                                enctype="multipart/form-data">
                                @csrf

                                <div class="col-md-6">
                                    <label for="validationDefault01" class="form-label">Slider Heading</label>
                                    <input type="text" name="heading" class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <label for="validationDefault01" class="form-label">Slider Link</label>
                                    <input type="text" name="link" class="form-control">
                                </div>
                                <div class="col-md-12">
                                    <label for="validationDefault01" class="form-label">Slider Description</label>
                                    <textarea name="description" class="form-control" placeholder="Required example textarea"></textarea>
                                </div>
                                <x-image-preview
                                name="image"
                                id="image"
                                previewId="showImage"
                                src="{{ url('upload/no_image.jpg') }}"
                                class="rounded-circle avatar-xxl img-thumbnail float-start"
                                label="Slider Image"
                            />
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Save Changes</button>
                                </div>
                            </form>
                        </div> <!-- end card-body -->
                    </div> <!-- end card-->
                </div> <!-- end col -->

            </div> <!-- container-fluid -->
        </div>
    @endsection

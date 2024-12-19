<div class="col-md-6">
    <label for="{{ $id ?? 'image' }}" class="form-label">{{ $label ?? 'Slider Image' }}</label>
    <input
        type="file"
        name="{{ $name ?? 'image' }}"
        class="form-control"
        id="{{ $id ?? 'image' }}"
    >
</div>
<div class="col-md-6">
    <img
        id="{{ $previewId ?? 'showImage' }}"
        src="{{ $src ?? url('upload/no_image.jpg') }}"
        class="{{ $class ?? 'rounded-circle avatar-xxl img-thumbnail float-start' }}"
        alt="{{ $alt ?? 'image preview' }}"
    >
</div>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const input = document.querySelector('#{{ $id ?? 'image' }}');
        const preview = document.querySelector('#{{ $previewId ?? 'showImage' }}');

        if (input && preview) {
            input.addEventListener('change', function (e) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    preview.src = event.target.result;
                };
                if (e.target.files[0]) {
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }
    });
</script>

@extends('layoutsMentor.app')

@section('style')
@endsection

@section('content')
    <div class="container-fluid mt-4 ">
        <h5 class="header">Daftar Pengajuan Projek</h5>
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="card text-center mb-3">
                    <div class="card-body">
                        <img src="{{ asset('assets/img/avatars/2.png') }}" alt class="h-auto rounded-circle mb-3">
                        <h5 class="card-title">Bang Jefri</h5>
                        <div class="d-flex align-items-center pt-1 mb-3 justify-content-center">
                            <div class="d-flex align-items-center">
                                <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Vinnie Mostowy" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/5.png"
                                            alt="Avatar">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Allen Rieske" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/12.png"
                                            alt="Avatar">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Julee Rossignol" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/6.png"
                                            alt="Avatar">
                                    </li>
                                    <li class="avatar avatar-sm">
                                        <span class="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="8 more">+8</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="#"><span class="badge bg-label-warning mb-3">Big Project</span></a>
                        <p class="card-text">20 Januari 2000</p>
                        <a href="{{ route('detail-pengajuan-projek') }}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card text-center mb-3">
                    <div class="card-body">
                        <img src="{{ asset('assets/img/avatars/2.png') }}" alt class="h-auto rounded-circle mb-3">
                        <h5 class="card-title">Bang Jefri</h5>
                        <div class="d-flex align-items-center pt-1 mb-3 justify-content-center">
                            <div class="d-flex align-items-center">
                                <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Vinnie Mostowy" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/5.png"
                                            alt="Avatar">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Allen Rieske" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/12.png"
                                            alt="Avatar">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Julee Rossignol" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/6.png"
                                            alt="Avatar">
                                    </li>
                                    <li class="avatar avatar-sm">
                                        <span class="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="8 more">+8</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="#"><span class="badge bg-label-warning mb-3">Big Project</span></a>
                        <p class="card-text">20 Januari 2000</p>
                        <a href="{{ route('detail-pengajuan-projek') }}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card text-center mb-3">
                    <div class="card-body">
                        <img src="{{ asset('assets/img/avatars/2.png') }}" alt class="h-auto rounded-circle mb-3">
                        <h5 class="card-title">Bang Jefri</h5>
                        <div class="d-flex align-items-center pt-1 mb-3 justify-content-center">
                            <div class="d-flex align-items-center">
                                <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Vinnie Mostowy" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/5.png"
                                            alt="Avatar">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Allen Rieske" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/12.png"
                                            alt="Avatar">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Julee Rossignol" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/6.png"
                                            alt="Avatar">
                                    </li>
                                    <li class="avatar avatar-sm">
                                        <span class="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="8 more">+8</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="#"><span class="badge bg-label-warning mb-3">Big Project</span></a>
                        <p class="card-text">20 Januari 2000</p>
                        <a href="{{ route('detail-pengajuan-projek') }}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card text-center mb-3">
                    <div class="card-body">
                        <img src="{{ asset('assets/img/avatars/2.png') }}" alt class="h-auto rounded-circle mb-3">
                        <h5 class="card-title">Bang Jefri</h5>
                        <div class="d-flex align-items-center pt-1 mb-3 justify-content-center">
                            <div class="d-flex align-items-center">
                                <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Vinnie Mostowy" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/5.png"
                                            alt="Avatar">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Allen Rieske" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/12.png"
                                            alt="Avatar">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        title="Julee Rossignol" class="avatar avatar-sm pull-up">
                                        <img class="rounded-circle"
                                            src="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/img/avatars/6.png"
                                            alt="Avatar">
                                    </li>
                                    <li class="avatar avatar-sm">
                                        <span class="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="8 more">+8</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="#"><span class="badge bg-label-warning mb-3">Big Project</span></a>
                        <p class="card-text">20 Januari 2000</p>
                        <a href="{{ route('detail-pengajuan-projek') }}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
        </div>

        {{-- pagination --}}
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-end">
                <li class="page-item first">
                    <a class="page-link" href="javascript:void(0);"><i class="ti ti-chevrons-left ti-xs"></i></a>
                </li>
                <li class="page-item prev">
                    <a class="page-link" href="javascript:void(0);"><i class="ti ti-chevron-left ti-xs"></i></a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">2</a>
                </li>
                <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">4</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">5</a>
                </li>
                <li class="page-item next">
                    <a class="page-link" href="javascript:void(0);"><i class="ti ti-chevron-right ti-xs"></i></a>
                </li>
                <li class="page-item last">
                    <a class="page-link" href="javascript:void(0);"><i class="ti ti-chevrons-right ti-xs"></i></a>
                </li>
            </ul>
        </nav>
        {{-- pagination --}}

    </div>
@endsection

@section('script')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="{{ asset('assets/js/forms-editors.js') }}"></script>
    <script>
        jQuery.noConflict();

        jQuery(document).ready(function($) {
            $('#jstabel').DataTable({
                "lengthMenu": [
                    [5, 10, 15, -1],
                    [5, 10, 15, "All"]
                ],
                "pageLength": 5,

                "order": [],

                "ordering": false,

                "language": {
                    "sProcessing": "Sedang memproses...",
                    "sLengthMenu": "Tampilkan _MENU_ data",
                    "sZeroRecords": "Tidak ditemukan Data",
                    "sInfo": "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
                    "sInfoEmpty": "Menampilkan 0 sampai 0 dari 0 data",
                    "sInfoFiltered": "(disaring dari _MAX_ data keseluruhan)",
                    "sInfoPostFix": "",
                    "sSearch": "Cari :",
                    "sUrl": "",
                    "oPaginate": {
                        "sFirst": "Pertama",
                        "sPrevious": "&#8592;",
                        "sNext": "&#8594;",
                        "sLast": "Terakhir"
                    }
                }
            });
        });
    </script>
@endsection

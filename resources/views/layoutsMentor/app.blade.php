<!DOCTYPE html>

<html lang="en" class="light-style layout-compact layout-navbar-fixed layout-menu-fixed   " dir="ltr"
    data-theme="theme-default"
    data-assets-path="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo/assets/"
    data-base-url="https://demos.pixinvent.com/vuexy-html-laravel-admin-template/demo-1" data-framework="laravel"
    data-template="vertical-menu-theme-default-light">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->

<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
    <title>
        Dashboard Mentor
    </title>
    <meta name="description" content="Start your development with a Dashboard for Bootstrap 5" />
    <meta name="keywords" content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5">
    <!-- laravel CRUD token -->
    <meta name="csrf-token" content="y0lzh53YmoH0xFgY2vFjhD4S1TOiq6lE58zbW7ec">
    <!-- Canonical SEO -->
    <link rel="canonical" href="https://1.envato.market/vuexy_admin">
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ url('assets/img/logo.png') }}" />

    <!-- Include Styles -->
    <!-- $isFront is used to append the front layout styles only on the front layout otherwise the variable will be blank -->
    <!-- BEGIN: Theme CSS-->
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
        rel="stylesheet">

    <link rel="stylesheet"
        href="{{ asset('assets/vendor/fonts/tabler-iconsea04.css?id=6ad8bc28559d005d792d577cf02a2116') }}" />
    <link rel="stylesheet"
        href="{{ asset('assets/vendor/fonts/fontawesome8a69.css?id=a2997cb6a1c98cc3c85f4c99cdea95b5') }}" />
    <link rel="stylesheet"
        href="{{ asset('assets/vendor/fonts/flag-icons80a8.css?id=121bcc3078c6c2f608037fb9ca8bce8d') }}" />
    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/rtl/core6cc1.css?id=9dd8321ea008145745a7d78e072a6e36') }}"
        class="template-customizer-core-css" />
    <link rel="stylesheet"
        href="{{ asset('assets/vendor/css/rtl/theme-defaultfc79.css?id=a4539ede8fbe0ee4ea3a81f2c89f07d9') }}"
        class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{ asset('assets/css/demof1ed.css?id=ddd2feb83a604f9e432cdcb29815ed44') }}" />
    <link rel="stylesheet"
        href="{{ asset('assets/vendor/libs/node-waves/node-wavesd178.css?id=aa72fb97dfa8e932ba88c8a3c04641bc') }}" />
    <link rel="stylesheet"
        href="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar7358.css?id=280196ccb54c8ae7e29ea06932c9a4b6') }}" />
    <link rel="stylesheet"
        href="{{ asset('assets/vendor/libs/typeahead-js/typeaheadb5e1.css?id=2603197f6b29a6654cb700bd9367e2a3') }}" />

    <!-- Vendor Styles -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/apex-charts/apex-charts.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}">
    <link rel="stylesheet"
        href="{{ asset('assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/flatpickr/flatpickr.css') }}" />
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/select2/select2.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/tagify/tagify.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/bootstrap-select/bootstrap-select.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/typeahead-js/typeahead.css') }}" />
    <script src="{{ asset('assets/vendor/js/helpers.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/animate-css/animate.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/sweetalert2/sweetalert2.css') }}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('assets/js/config.js') }}"></script>

</head>

@yield('style')

<!-- jQuery Plugin -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

    body {
        font-family: 'Poppins', sans-serif;
        /* Tambahkan z-index di sini */
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    .hidden {
        opacity: 0;
    }

    #loader {
        z-index: 100000000000;
        /* Tambahkan z-index di sini */
        position: fixed;
        width: 100%;
        height: 100%;
        background: #ffffff;
    }

    .preloader {
        position: absolute;
        width: 40px;
        height: 40px;
        left: calc(50% - 20px);
        top: calc(50% - 20px);
        animation: preloader 2s linear infinite;
    }

    .loadBar {
        position: absolute;
        width: 200px;
        height: 2px;
        left: calc(50% - 100px);
        top: calc(50% + 60px);
        background: #7a14c3;
    }

    .progress {
        position: relative;
        width: 0%;
        height: inherit;
        background: #e74c3c;
    }

    .custom-margin {
        margin-top: -95px;
    }

    @keyframes loading {

        0% {
            width: 0%;
        }

        100% {
            width: 100%;
        }

    }

    @keyframes preloader {

        0%,
        100% {
            transform: translateY(0);
        }

        25% {
            transform: translateY(-15px);
        }

        50% {
            transform: translateY(0);
        }

        75% {
            transform: translateY(15px);
        }
    }

    @media (max-width: 767px) {
        #login-sebagai {
            display: none !important;
        }
    }
</style>

<body class="overflow-hidden">
    <script src="https://code.jquery.com/jquery-2.2.3.min.js"
        integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>
    <div id="loader">
        <div class="preloader">
            <div class="d-flex justify-content-center custom-margin max-width">
                <img src="{{ asset('assets/img/hummatask.png') }}" width="240" height="220" alt="Loader Image">
            </div>
        </div>
    </div>
    <script>
        $(window).load(function() {

            var rnd = Math.random() * (1000 - 500) + 500;

            $('.progress').css("animation", "loading " + rnd + "ms linear");

            setTimeout(function() {

                $('#loader').fadeOut();
                $('body').removeClass('overflow-hidden');

            }, rnd);

        });
    </script>
    <!-- Layout Content -->
    <div class=" layout-content-navbar ">
        <div class="layout-container">

            <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">

                <!-- ! Hide app brand if navbar-full -->
                <div class="app-brand demo">
                    <a href="{{ route('dashboard.mentor') }}" class="app-brand-link">
                        <span class="app-brand-logo demo d-flex align-items-center">
                            <img src="{{ url('assets/img/logo.png') }}" class="d-block" width="50" alt=""
                                srcset="">
                        </span>
                        <span class="app-brand-text demo menu-text fw-bold mt-2" style="color: #7367F0;">Humma<span
                                style="color:rgb(8, 8, 50);">Task</span></span>
                    </a>

                    <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto mt-2">
                        <i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
                        <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
                    </a>
                </div>


                <div class="menu-inner-shadow"></div>

                <ul class="menu-inner py-1">
                    <li class="menu-item {{ request()->routeIs('dashboard.mentor') ? 'active' : '' }}">
                        <a href="{{ route('dashboard.mentor') }}" class="menu-link">
                            <i class="menu-icon tf-icons ti ti-smart-home"></i>
                            <div>Dashboard</div>
                        </a>
                    </li>
                    <li class="menu-item {{ request()->routeIs('presentasi.mentor') ? 'active' : '' }}">
                        <a href="{{ route('presentasi.mentor') }}" class="menu-link">
                            <i class="menu-icon tf-icons ti ti-presentation"></i>
                            <div>Presentasi</div>
                        </a>
                    </li>
                    <li
                        class="menu-item {{ request()->routeIs('tim') || request()->routeIs('cari_tim') || request()->routeIs('tim.filter') ? 'active' : '' }}">
                        <a href="{{ route('tim') }}" class="menu-link">
                            <i class="menu-icon tf-icons ti ti-users-group"></i>
                            <div>Tim</div>
                        </a>
                    </li>
                    <li class="menu-item {{ request()->routeIs('pengajuan-projek') ? 'active' : '' }}">
                        <a href="{{ route('pengajuan-projek') }}" class="menu-link">
                            <i class="menu-icon tf-icons ti ti-report-analytics"></i>
                            <div>Pengajuan Project</div>
                        </a>
                    </li>
                    <li class="menu-item {{ request()->routeIs('projek', 'detail-projek') ? 'active' : '' }}">
                        <a href="{{ route('projek') }}" class="menu-link">
                            <i class="menu-icon tf-icons ti ti-folder-cog"></i>
                            <div>Project</div>
                        </a>
                    </li>
                    <li class="menu-item {{ request()->routeIs('pengguna.mentor') ? 'active' : '' }}">
                        <a href="{{ route('pengguna.mentor') }}" class="menu-link">
                            <i class="menu-icon tf-icons ti ti-users-plus"></i>
                            <div>Pengguna</div>
                        </a>
                    </li>
                    <li class="menu-item {{ request()->routeIs('galery') ? 'active' : '' }}">
                        <a href="{{ route('galery') }}" class="menu-link">
                            <i class="menu-icon tf-icons ti ti-photo photo-rounded"></i>
                            <div>Galeri</div>
                        </a>
                    </li>
                    <li class="menu-item {{ request()->routeIs('history.mentor') ? 'active' : '' }}">
                        <a href="{{ route('history.mentor') }}" class="menu-link">
                            <i class="menu-icon tf-icons ti ti-history"></i>
                            <div>Histori</div>
                        </a>
                    </li>
                </ul>
            </aside>

            <!-- Layout page -->
            <div class="layout-page">

                <!-- BEGIN: Navbar-->
                <!-- Navbar -->
                <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                    id="layout-navbar">

                    <!--  Brand demo (display only for navbar-full and hide on below xl) -->

                    <!-- ! Not required for layout-without-menu -->
                    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0  d-xl-none ">
                        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                            <i class="ti ti-menu-2 ti-sm"></i>
                        </a>
                    </div>

                    <div class="navbar-nav-right d-flex align-items-center" id="navbarcollapse">
                        <div class="d-flex align-items-center justify-content-center gap-2" id="login-sebagai">
                            Login sebagai :
                            <span
                                class="py-2 px-3 badge bg-label-primary text-white rounded rounded-full">Mentor</span>
                        </div>
                        <ul class="navbar-nav flex-row align-items-center ms-auto gap-2">
                            <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            </li>
                            <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <i class="ti ti-bell ti-md"></i>
                                    <span class="badge bg-danger rounded-pill badge-notifications"
                                        id="notification-count"></span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end py-0">
                                    <li class="dropdown-menu-header border-bottom">
                                        <div class="dropdown-header d-flex align-items-center py-3">
                                            <h5 class="text-body mb-0 me-auto">Notifikasi</h5>
                                        </div>
                                    </li>
                                    @foreach ($notifikasi as $item)
                                        <li class="dropdown-notifications-list scrollable-container">
                                            <ul class="list-group list-group-flush" id="notification-list">
                                                {{-- <li class="list-group-item" id="notification-list"> --}}
                                                {{-- <div class="d-flex" id="notifikasi-{{ $item->id }}">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar">
                                                            <img src="" alt class="h-auto rounded-circle">
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="mb-1">{{ $item->judul }}</h6>
                                                        <p class="mb-0">{{ $item->body }}</p>
                                                        <small
                                                            class="text-muted">{{ $item->created_at->diffForHumans() }}</small>
                                                    </div>
                                                    <div class="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                            class="dropdown-notifications-read"><span
                                                                class="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                            class="dropdown-notifications-archive"
                                                            onclick="deletenotifikasi({{ $item->id }})"><span
                                                                class="ti ti-x"></span></a>
                                                    </div>
                                                </div> --}}
                                                {{-- </li> --}}
                                            </ul>
                                        </li>
                                    @endforeach
                                </ul>
                            </li>

                            <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                                    data-bs-toggle="dropdown">
                                    <div class="avatar avatar-online">
                                        @if (Auth::user()->avatar)
                                            <img src="{{ asset('storage/' . Auth::user()->avatar) }}"
                                                class="rounded-circle" style="object-fit: cover">
                                        @else
                                            <img src="{{ asset('assets/img/avatars/1.png') }}"
                                                class="h-auto rounded-circle">
                                        @endif
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a class="dropdown-item" href="{{ route('profile-mentor') }}">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 me-3">
                                                    <div class="avatar avatar-online">
                                                        @if (Auth::user()->avatar)
                                                            <img src="{{ asset('storage/' . Auth::user()->avatar) }}"
                                                                class="rounded-circle" style="object-fit: cover">
                                                        @else
                                                            <img src="{{ asset('assets/img/avatars/1.png') }}"
                                                                class="h-auto rounded-circle">
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <span class="fw-medium d-block">
                                                        {{ Auth::user()->username }}
                                                    </span>
                                                    <small class="text-muted">Mentor</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="{{ route('profile-mentor') }}">
                                            <i class="ti ti-user-check me-2 ti-sm"></i>
                                            <span class="align-middle">Profil Saya</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="{{ route('logout') }}">
                                            <i class='ti ti-logout me-2'></i>
                                            <span class="align-middle">Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <!-- / Navbar -->
                <!-- END: Navbar-->


                <!-- Content wrapper -->

                @yield('content')

                <!--/ Content wrapper -->
            </div>
            <!-- / Layout page -->
        </div>

        <!-- Overlay -->
        <div class="layout-overlay layout-menu-toggle"></div>
        <!-- Drag Target Area To SlideIn Menu On Small Screens -->
        <div class="drag-target"></div>
    </div>

    <script src="{{ asset('assets/vendor/libs/jquery/jquery1e84.js?id=0f7eb1f3a93e3e19e8505fd8c175925a') }}"></script>
    <script src="{{ asset('assets/vendor/libs/popper/popper0a73.js?id=baf82d96b7771efbcc05c3b77135d24c') }}"></script>
    <script src="{{ asset('assets/vendor/js/bootstraped84.js?id=9a6c701557297a042348b5aea69e9b76') }}"></script>
    <script src="{{ asset('assets/vendor/libs/node-waves/node-waves259f.js?id=4fae469a3ded69fb59fce3dcc14cd638') }}">
    </script>
    <script
        src="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar6188.js?id=44b8e955848dc0c56597c09f6aebf89a') }}">
    </script>
    <script src="{{ asset('assets/vendor/libs/hammer/hammer2de0.js?id=0a520e103384b609e3c9eb3b732d1be8') }}"></script>
    <script src="{{ asset('assets/vendor/libs/typeahead-js/typeahead60e7.js?id=f6bda588c16867a6cc4158cb4ed37ec6') }}">
    </script>
    <script src="{{ asset('assets/vendor/js/menu2dc9.js?id=c6ce30ded4234d0c4ca0fb5f2a2990d8') }}"></script>
    <script src="{{ asset('assets/vendor/libs/apex-charts/apexcharts.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>

    <script src="{{ asset('assets/vendor/libs/select2/select2.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/tagify/tagify.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/bootstrap-select/bootstrap-select.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/typeahead-js/typeahead.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/bloodhound/bloodhound.js') }}"></script>
    <!-- Flat Picker -->
    <script src="{{ asset('assets/vendor/libs/moment/moment.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/flatpickr/flatpickr.js') }}"></script>

    <!-- END: Page Vendor JS-->
    <!-- BEGIN: Theme JS-->
    <script src="{{ asset('assets/js/mainf696.js?id=8bd0165c1c4340f4d4a66add0761ae8a') }}"></script>

    <!-- END: Theme JS-->
    <!-- Pricing Modal JS-->
    <!-- END: Pricing Modal JS-->
    <!-- BEGIN: Page JS-->
    <script src="{{ asset('assets/js/dashboards-crm.js') }}"></script>
    <script src="{{ asset('assets/js/forms-selects.js') }}"></script>
    <script src="{{ asset('assets/js/forms-tagify.js') }}"></script>
    <script src="{{ asset('assets/js/forms-typeahead.js') }}"></script>
    <script src="{{ asset('assets/js/extended-ui-sweetalert2.js') }}"></script>
    <!-- END: Page JS-->

    <script>
        function deletenotifikasi(id) {
            axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute(
                'content');
            axios.delete(`/tim/notifikasi/${id}`)
                .then(response => {
                    const notifikasiElement = document.getElementById(`notification-list-${id}`);
                    if (notifikasiElement) {
                        notifikasiElement.remove();
                    }
                })
                .catch(error => {
                    console.error('Gagal Menghapus notifikasi:', error);
                });
        }
    </script>
    <script>
        $(document).ready(function() {
            function ambilNotifikasi() {
                $.ajax({
                    url: '/ambil-notifikasi',
                    method: 'GET',
                    success: function(response) {
                        tampilkanNotifikasi(response.notifikasi);
                    },
                    error: function(error) {
                        console.log('Error mengambil notifikasi:', error);
                    }
                });
            }

            function tampilkanNotifikasi(notifikasi) {
                var daftarNotifikasi = $('#notification-list');
                var countBadge = $('#notification-count');

                daftarNotifikasi.empty();

                if (notifikasi.length > 0) {
                    countBadge.text(notifikasi.length);
                } else {
                    countBadge
                        .hide();
                }
                if (notifikasi.length > 0) {
                    countBadge.text(notifikasi.length);
                } else {
                    countBadge
                        .hide();
                }

                notifikasi.reverse();

                notifikasi.forEach(function(item) {
                    var waktuNotifikasi = new Date(item.created_at);
                    var waktuSekarang = new Date();
                    var perbedaanWaktu = Math.floor((waktuSekarang - waktuNotifikasi) /
                        1000);

                    function formatWaktu(detik) {
                        if (detik < 60) {
                            return detik + ' detik yang lalu';
                        } else if (detik < 3600) {
                            return Math.floor(detik / 60) + ' menit yang lalu';
                        } else if (detik < 86400) {
                            return Math.floor(detik / 3600) + ' jam yang lalu';
                        } else {
                            return Math.floor(detik / 86400) + ' hari yang lalu';
                        }
                    }

                    var jenisClass, icon, textClass;

                    switch (item.jenis_notifikasi) {
                        case 'info':
                            jenisClass = 'alert-info';
                            textClass = 'text-info';
                            icon = '<i class="ti ti-info-circle ti-xs"></i>';
                            break;
                        case 'deadline':
                            jenisClass = 'alert-warning';
                            textClass = 'text-warning';
                            icon = '<i class="ti ti-clock ti-xs"></i>';
                            break;
                        case 'pemberitahuan':
                            jenisClass = 'alert-success';
                            textClass = 'text-success';
                            icon = '<i class="ti ti-check ti-xs"></i>';
                            break;
                        default:
                            jenisClass = 'bg-secondary';
                            icon = '<i class="ti ti-alert ti-xs"></i>';
                    }

                    var notifikasiBaru = `
                    <li class="list-group-item" id="notification-list-${item.id}">
                        <div class="d-flex mt-2 mb-2 pl-5">
                            <div class="flex-grow-1">
                                <div class="alert ${jenisClass} d-flex align-items-center justify-content-between" role="alert">
                                    <div>
                                        <span class="alert-icon ${textClass} me-2">
                                            ${icon}
                                        </span>
                                        ${item.judul}
                                    </div>
                                    <a href="javascript:void(0)" class="dropdown-notifications-archive ml-auto ${jenisClass}"
                                        onclick="deletenotifikasi(${item.id})">
                                        <span class="ti ti-x"></span>
                                    </a>
                                </div>
                                <p class="mb-0">${item.body}</p>
                                <small class="text-muted">${formatWaktu(perbedaanWaktu)}</small>
                            </div>
                        </div>
                    </li>
                `;

                    daftarNotifikasi.append(notifikasiBaru);
                });
            }

            ambilNotifikasi();

            setInterval(function() {
                ambilNotifikasi();
            }, 5000);
        });
    </script>
    @yield('script')

    @if (session()->has('unauthorize'))
        <script>
            Swal.fire({
                icon: 'error',
                title: 'Akses Ditolak',
                text: '{{ session('unauthorize') }}', // Teks pesan dari sesi
                showConfirmButton: false,
                timer: 5000,
            });
        </script>
    @elseif (session()->has('success'))
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: '{{ session('success') }}', // Teks pesan dari sesi
                showConfirmButton: false,
                timer: 5000,
            });
        </script>
    @elseif (session()->has('warning'))
        <script>
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan!',
                text: '{{ session('warning') }}', // Teks pesan dari sesi
                showConfirmButton: false,
                timer: 5000,
            });
        </script>
    @endif

</body>

</html>

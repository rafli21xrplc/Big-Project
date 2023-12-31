@extends('layouts.app')
@section('style')
    <style>
        .avatar-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            max-height: 150px;
            overflow-y: auto;
        }

        .avatar-container::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            /* Lebar scroll */
            background-color: #f0f0f0;
        }

        .avatar-container::-webkit-scrollbar-thumb {
            background-color: #7367f0;
            border-radius: 4px;
        }

        .avatar-container::-webkit-scrollbar-thumb:hover {
            background-color: #4838fb;
        }

        .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 5px;
        }

        .icon-text {
            margin-right: 5px;
        }

        .nama-anggota {
            margin-top: 15px;
        }

        @media (min-width: 320px) and (max-width: 499px) {
            .navbar-ul {
                flex-direction: column;
                width: 100%;
                padding-left: 0px;
            }

            .navbar-ul li {
                /* font-size: 10px; */
                display: 'flex';
                justify-content: 'center';
                align-content: 'center';
            }

            .button-document {
                width: 100%;
                margin-bottom: 8px;
            }

            .button-document button {
                width: 100%;
            }

            .image-leader {
                width: 20%;
                hight: 10%;
                border-radius: 20%
                    /* width: 10%;hight:10%;border-radius:20% */
            }

            .image-team {
                width: 100%;
                hight: 100%;
                border-radius: 20%;
                /* width: 80%;hight:80%;border-radius:20% */
            }

            .anggota {
                top: -900px;
                padding-left: 60px;
            }

            .nama-anggota {
                max-width: 70px;
            }

            .anggota-scroll {
                max-width: 200px;
                overflow-x: auto;
            }

            .longor {
                display: flex;
                justify-content: space-between;
            }

            /* Mengubah warna track (latar belakang scroll) */
            .anggota-scroll::-webkit-scrollbar {
                width: 8px;
                height: 8px;
                /* Lebar scroll */
                background-color: #f0f0f0;
                /* Warna latar belakang scroll */
            }

            /* Mengubah tampilan thumb (bagian yang dapat digerakkan) */
            .anggota-scroll::-webkit-scrollbar-thumb {
                background-color: #7367f0;
                /* Warna thumb */
                border-radius: 4px;
                /* Sudut melengkung thumb */
            }

            /* Mengubah tampilan thumb saat digulirkan */
            .anggota-scroll::-webkit-scrollbar-thumb:hover {
                background-color: #4838fb;
                /* Warna thumb saat dihover */
            }
        }

        @media (min-width: 1000px) and (max-width: 2000px) {
            .image-leader {
                width: 15%;
                hight: 10%;
                border-radius: 20%
                    /* width: 10%;hight:10%;border-radius:20% */
            }

            .anggota {
                padding-left: 80px;
            }

            .leader {
                top: 90px;
            }

            .avatar-container {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                /* Mengatur elemen di sebelah kiri */
                max-width: 250px;
                overflow-x: auto;
            }

            .modal-detail {
                width: 450px;
            }
        }

        @media (min-width: 500px) and (max-width: 999px) {
            .image-leader {
                width: 10%;
                hight: -5%;
                border-radius: 10%
                    /* width: 10%;hight:10%;border-radius:20% */
            }

            .anggota {
                padding-left: 70px;
            }

            .leader {
                top: 50px;
            }

            .avatar-container {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                /* Mengatur elemen di sebelah kiri */
                max-width: 240px;
                overflow-x: auto;
            }

            .modal-detail {
                width: 430px;
            }
        }

        @media (min-width: 500px) and (max-width: 768px) {
            .navbar-ul li {
                font-size: 14px;
                display: 'flex';
                justify-content: 'center';
                align-content: 'center';
            }
        }
    </style>
@endsection
@section('content')
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="py-3">
            <span class="text-muted fw-light"></span> History
        </h4>
        <div class="d-flex card flex-md-row align-items-center justify-content-between">
            <div class=" nav nav-pills mb-3 mt-3 d-flex flex-wrap navbar-ul px-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                        type="button" role="tab" aria-controls="pills-home" aria-selected="true" data-tab="1"><i
                            class="fa-solid fa-calendar-xmark icon-text"></i>Telat
                        Deadline</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false" data-tab="2"><i
                            class="fa-solid fa-person-chalkboard icon-text"></i>Selesai
                        Presentasi</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                        type="button" role="tab" aria-controls="pills-contact" aria-selected="false" data-tab="3"><i
                            class="fa-solid fa-user icon-text"></i>Solo</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-team"
                        type="button" role="tab" aria-controls="pills-contact" aria-selected="false" data-tab="4"><i
                            class="fa-solid fa-users icon-text"></i>Team</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-tidak-presentasi"
                        type="button" role="tab" aria-controls="pills-contact" aria-selected="false" data-tab="5"><i
                            class="fa-solid fa-users icon-text"></i>Tidak Presentasi Mingguan</button>
                </li>
            </div>
        </div>
        <div class="tab-content px-0 mt-2" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                tabindex="0">
                    <div class="alert alert-danger alert-dismissible d-flex align-items-baseline" role="alert">
                        <span class="alert-icon alert-icon-lg text-danger me-2">
                            <i class="ti ti-bookmark ti-sm"></i>
                        </span>
                        <div class="d-flex flex-column ps-1">
                            <h5 class="alert-heading mb-2">Tab Telat Deadline</h5>
                            <p class="mb-0">Tab telat deadline berisi data data tim yang sudah melewati batas waktu pengerjaan projek yang telah diberikan</p>
                            </button>
                        </div>
                    </div>
                <div class="card">
                    <div class="card-datatable table-responsive">
                        <table id="jstabel1" class="dt-responsive table">
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">TEAM</th>
                                    <th scope="col">DEADLINE</th>
                                    <th scope="col">PROJECT</th>
                                    <th scope="col">TEMA</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($telatDeadline as $item)
                                    <tr>
                                        <td>{{ $loop->iteration }}.</td>
                                        <td>
                                            <img src="{{asset('storage/'.$item->tim->logo)}}" alt=""
                                                style="width:30px;height:30px;border-radius:50%;cursor: pointer;"
                                                data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                                title="{{ $item->tim->nama }}">
                                        </td>
                                        <td>{{ \Carbon\Carbon::parse($item->deadline)->translatedFormat('l, j F Y') }}</td>
                                        <td>{{ $item->tim->status_tim }}</td>
                                        <td>{{ $item->tema->nama_tema }}</td>
                                    </tr>
                                @empty
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                tabindex="0">
                    <div class="alert alert-primary alert-dismissible d-flex align-items-baseline" role="alert">
                        <span class="alert-icon alert-icon-lg text-primary me-2">
                            <i class="ti ti-bookmark ti-sm"></i>
                        </span>
                        <div class="d-flex flex-column ps-1">
                            <h5 class="alert-heading mb-2">Tab Selesai Presentasi</h5>
                            <p class="mb-0">Tab Selesai Presentasi berisi data data tim yang sudah selesai presentasi mingguan</p>
                            </button>
                        </div>
                    </div>
                <div class="card">
                    <div class="card-datatable table-responsive">
                        <table id="jstabel2" class="dt-responsive table">
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">TEAM</th>
                                    <th scope="col">TANGGAl</th>
                                    <th scope="col">PROJECT</th>
                                    <th scope="col">TEMA</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($presentasiSelesai as $item)
                                    <tr>
                                        <td>{{ $loop->iteration }}.</td>
                                        <td>
                                            <img src="{{asset('storage/'.$item->tim->logo)}}" alt=""
                                                style="width:30px;height:30px;border-radius:50%;cursor: pointer;"
                                                data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                data-bs-placement="top" title="{{ $item->tim->nama }}">
                                        </td>

                                            <td>{{ \Carbon\Carbon::parse($item->created_at)->translatedFormat('l, j F Y') }}
                                            </td>

                                        <td>{{ $item->tim->status_tim }}</td>
                                        @foreach ($item->tim->project as $item)
                                            <td>{{ $item->tema->nama_tema }}</td>
                                        @endforeach
                                    </tr>
                                @empty
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                tabindex="0">
                    <div class="alert alert-success alert-dismissible d-flex align-items-baseline" role="alert">
                        <span class="alert-icon alert-icon-lg text-success me-2">
                            <i class="ti ti-bookmark ti-sm"></i>
                        </span>
                        <div class="d-flex flex-column ps-1">
                            <h5 class="alert-heading mb-2">Tab Solo</h5>
                            <p class="mb-0">Tab Solo berisi data data anak magang yang mengerjakan projeknya secara individu</p>
                            </button>
                        </div>
                    </div>
                <div class="card">
                    <div class="card-datatable table-responsive">
                        <table id="jstabel3" class="dt-responsive table">
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">TEAM</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">PROJECT</th>
                                    <th scope="col">TEMA</th>
                                    <th scope="col">PRESENTASI</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($timSolo as $item)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>
                                            <img src="{{asset('storage/'.$item->logo)}}" alt=""
                                                style="width:30px;height:30px;border-radius:50%; cursor: pointer"
                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                data-popup="tooltip-custom" title="{{ $item->nama }}">
                                        </td>
                                        <td>{{ $item->anggota[0]->user->email }}</td>
                                        <td>{{ $item->status_tim }}</td>
                                        <td>{{ $item->project[0]->tema->nama_tema }}</td>
                                        <td>{{ $item->presentasiSelesai->count() }}</td>
                                    </tr>
                                @empty
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-team" role="tabpanel" aria-labelledby="pills-disabled-tab"
                tabindex="0">
                    <div class="alert alert-success alert-dismissible d-flex align-items-baseline" role="alert">
                        <span class="alert-icon alert-icon-lg text-success me-2">
                            <i class="ti ti-bookmark ti-sm"></i>
                        </span>
                        <div class="d-flex flex-column ps-1">
                            <h5 class="alert-heading mb-2">Tab Team</h5>
                            <p class="mb-0">Tab Team berisi data data siswa magang yang mengerjakan projeknya secara berkelompok atau berteam</p>
                            </button>
                        </div>
                    </div>
                <div class="card">
                    <div class="card-datatable table-responsive">
                        <table id="jstabel4" class="dt-responsive table">
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">TEAM</th>
                                    <th scope="col">KETUA</th>
                                    <th scope="col">ANGGOTA</th>
                                    <th scope="col">PROJECT</th>
                                    <th scope="col">PRESENTASI</th>
                                    <th scope="col">OPSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($timGroup as $item)
                                    @php
                                        $anggotaArray = [];
                                        foreach ($item->anggota as $anggota) {
                                            $anggotaArray[] = [
                                                'name' => $anggota->user->username,
                                                'avatar' => $anggota->user->avatar,
                                                'jabatan' => $anggota->jabatan->nama_jabatan,
                                            ];
                                        }
                                        $anggotaJson = json_encode($anggotaArray);
                                        $tanggalMulai = $item->project[0]->created_at->translatedFormat('Y-m-d');
                                        $tema = isset($item->project[0]->tema) ? $item->project[0]->tema->nama_tema : '';
                                        $deadline = \Carbon\Carbon::parse($item->project[0]->deadline)->translatedFormat('Y-m-d');
                                        $totalDeadline = \Carbon\Carbon::parse($deadline)->diffInDays($tanggalMulai);
                                        $dayLeft = \Carbon\Carbon::parse($deadline)->diffInDays(\Carbon\Carbon::now());
                                        $progressPercentage = $totalDeadline != 0 ? 100 - ($dayLeft / $totalDeadline) * 100 : 0;
                                    @endphp
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>
                                            <img src="{{ asset('storage/' . $item->logo) }}" alt=""
                                                style="width:30px;height:30px;border-radius:50%; cursor: pointer"
                                                data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                data-bs-placement="top" title="{{ $item->nama }}">
                                        </td>
                                        <td>{{ $item->ketuaTim[0]->username }}</td>
                                        <td>
                                            <div class="d-flex align-items-center avatar-group">
                                                @foreach ($item->AnggotaTim as $itemAnggota)
                                                    <div class="avatar pull-up" data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom" data-bs-placement="top"
                                                        title="{{ $itemAnggota->username }}">
                                                        <img src="{{ $itemAnggota->avatar ? asset('storage/' . $itemAnggota->avatar) : asset('assets/img/avatars/1.png') }}"
                                                            alt="Avatar" class="rounded-circle">
                                                    </div>
                                                @endforeach
                                            </div>
                                        </td>
                                        <td>{{ $item->status_tim }}</td>
                                        <td>{{ $item->presentasiSelesai->count() }}</td>
                                        <td> <button type="button" class="btn btn-primary btn-detail"
                                                data-bs-toggle="modal" data-bs-target="#modalCenter"
                                                data-logo="{{ asset('storage/' . $item->logo) }}"
                                                data-namatim="{{ $item->nama }}" data-status="{{ $item->status_tim }}"
                                                data-tema="{{ $tema }}"
                                                data-tglmulai="{{ $item->created_at->translatedFormat('l, j F Y') }}"
                                                data-deadline="{{ \Carbon\Carbon::parse($item->project[0]->deadline)->translatedFormat('l, j F Y') }}"
                                                data-anggota="{{ $anggotaJson }}"
                                                data-deskripsi="{{ $item->deskripsi }}"
                                                data-dayleft="{{ $dayLeft }}"
                                                data-total-deadline="{{ $totalDeadline }}"
                                                data-progress="{{ $progressPercentage }}"
                                                data-repo="{{ $item->repository }}">
                                                Detail
                                            </button></td>
                                    </tr>
                                @empty
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-tidak-presentasi" role="tabpanel" aria-labelledby="pills-disabled-tab"
                tabindex="0">
                <div class="alert alert-warning alert-dismissible d-flex align-items-baseline" role="alert">
                    <span class="alert-icon alert-icon-lg text-warning me-2">
                        <i class="ti ti-bookmark ti-sm"></i>
                    </span>
                    <div class="d-flex flex-column ps-1">
                        <h5 class="alert-heading mb-2">Tab Tidak Presentasi Mingguan</h5>
                        <p class="mb-0">Tab Tidak Presentasi Mingguan berisi data data siswa magang yang masih belum presentasi setiap minggunya</p>
                        </button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-datatable table-responsive">
                        <table id="jstabel5" class="dt-responsive table">
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">NAMA</th>
                                    <th scope="col">STATUS TIM</th>
                                    <th scope="col">MINGGU/BULAN/TAHUN</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($tidakPresentasiMingguan as $i => $item)
                                    <tr>
                                        <td>{{ ++$i }}</td>
                                        @if ($item->status_tim === "solo")
                                            <td>{{ $item->tim->ketuaTim->username }}</td>
                                        @else
                                            <td>{{ $item->tim->nama }}</td>
                                        @endif
                                        <td>
                                            @if ($item->tim->status_tim === "solo")
                                                <span class="badge bg-label-danger">Solo Project</span>
                                                @elseif ($item->tim->status_tim === "pre_mini")
                                                <span class="badge bg-label-warning">Pre Mini Project</span>
                                                @elseif ($item->tim->status_tim === "mini")
                                                <span class="badge bg-label-success">Mini Project</span>
                                                @else
                                                <span class="badge bg-label-primary">Big Project</span>

                                            @endif

                                        </td>
                                        {{-- @dd($item) --}}
                                        <td>{{ $item->historyPresentasi->noMinggu }}/{{ $item->historyPresentasi->bulan }}/{{ $item->historyPresentasi->tahun }}</td>

                                    </tr>
                                @empty
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        {{-- modal detail --}}
        <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCenterTitle">Detail tim</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="col-12">
                                <div class="nav-align-top d-flex justify-between">
                                    <div class="nav nav-pills d-flex justify-content-between my-4" role="tablist">
                                        <div class="d-flex justify-content-between">
                                            <div class="nav-item" role="presentation">
                                                <button type="button" class="nav-link active button-nav" role="tab"
                                                    data-bs-toggle="tab" data-bs-target="#navs-pills-top-home"
                                                    aria-controls="navs-pills-top-home"
                                                    aria-selected="true">Project</button>
                                            </div>
                                            <div class="nav-item button-nav" role="presentation">
                                                <button type="button" class="nav-link" role="tab"
                                                    data-bs-toggle="tab" data-bs-target="#navs-pills-top-profile"
                                                    aria-controls="navs-pills-top-profile" aria-selected="false"
                                                    tabindex="-1">Anggota</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-content bg-transparent pb-0" style="box-shadow: none;">
                                        <div class="tab-pane fade active show" id="navs-pills-top-home" role="tabpanel">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    {{-- card projects --}}
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <div
                                                                class="d-flex flex-row align-items-center justify-content-between">
                                                                <div class="fs-4 text-black">
                                                                    Projek
                                                                </div>
                                                                <div
                                                                    style="display: flex; flex-direction: column; justify-items: center; align-items: left;">

                                                                    <span>Tanggal Mulai : <span id="tglmulai"></span>
                                                                    </span>

                                                                    <span>Tenggat : <span id="deadline"></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr class="my-0">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex flex-row gap-3">
                                                                        <img id="logo-tim" src="" alt='logo tim'
                                                                            class="rounded-circle"
                                                                            style="width: 90px; height: 90px">
                                                                        <div
                                                                            style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                                                                            <span class="d-block text-black fs-5"
                                                                                id="nama-tim">nama tim</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mt-4">
                                                                        <div class="mb-3">Status : <span
                                                                                class="badge bg-label-warning"
                                                                                id="status"></span>
                                                                        </div>

                                                                        <div>Tema : <span class="badge bg-label-warning"
                                                                                id="tema"></span>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="progres-bar">
                                                                        <div class="d-flex justify-content-between">
                                                                            <span>Hari</span>
                                                                            <span><span id="dayLeft"></span> dari <span
                                                                                    id="total"></span> Hari</span>
                                                                        </div>
                                                                        <div
                                                                            class="d-flex flex-grow-1 align-items-center my-1">
                                                                            <div class="progress w-100 me-3"
                                                                                style="height:8px;background-color: gainsboro">
                                                                                <div class="progress-bar bg-primary"
                                                                                    role="progressbar" style="width: 10%"
                                                                                    aria-valuenow="10" aria-valuemin="0"
                                                                                    aria-valuemax="100">
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted"><span
                                                                                    id="textPercent"></span>%</span>
                                                                        </div>
                                                                        <div class="tenggat">
                                                                            <span>Tenggat kurang <span
                                                                                    id="dayleft"></span> hari lagi</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="link mt-2">
                                                                        <div class="title text-dark">
                                                                            Link Repository :
                                                                        </div>
                                                                        <a href="" id="repository"
                                                                            target="_blank"><span class="text-blue"
                                                                                id="text-repo"></span></a>
                                                                    </div>
                                                                    <div class="deskripsi mt-2">
                                                                        <div class="title text-dark">
                                                                            Deskripsi :
                                                                        </div>
                                                                        <div class="isi" id="deskripsi">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {{-- card projects --}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
                                            <div class="container">
                                                <div class="row">
                                                    <div
                                                        class="card cursor-default col-12 d-flex align-items-center justify-content-center">
                                                        <div
                                                            class="card-body d-flex flex-column align-items-center justify-content-center">
                                                            <img id="logo-tim2" width="90px" height="90px"
                                                                class="rounded-circle" src="" alt="">
                                                            <h1 id="nama-tim2" class="mt-2"></h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-2 justify-content-center align-items-center grid"
                                                    id="anggota-list">
                                                    {{-- Anggota --}}
                                                    {{-- Anggota --}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="{{ asset('assets/js/forms-editors.js') }}"></script>
    <script>
        jQuery.noConflict();

        jQuery(document).ready(function($) {
            $('#jstabel1').DataTable({
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

        jQuery(document).ready(function($) {
            $('#jstabel2').DataTable({
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

        jQuery(document).ready(function($) {
            $('#jstabel3').DataTable({
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

        jQuery(document).ready(function($) {
            $('#jstabel4').DataTable({
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
        jQuery(document).ready(function($) {
            $('#jstabel5').DataTable({
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
    {{-- Script detail modal --}}
    <script>
        $(document).ready(function() {
            $('.btn-detail').click(function() {
                var logo = $(this).data('logo');
                var namatim = $(this).data('namatim');
                var status = $(this).data('status');
                var tema = $(this).data('tema');
                var tglmulai = $(this).data('tglmulai');
                var deadline = $(this).data('deadline');
                var anggota = $(this).data('anggota');
                var deskripsi = $(this).data('deskripsi');
                var dayLeft = $(this).data('dayleft');
                var repo = $(this).data('repo');
                var total = $(this).data('total-deadline');
                var progress = $(this).data('progress');
                var progressFormat = Math.round(progress);

                $('#logo-tim').attr('src', logo);
                $('#logo-tim2').attr('src', logo);
                $('#nama-tim').text(namatim);
                $('#nama-tim2').text(namatim);
                $('#status').text(status);
                $('#tema').text(tema);
                $('#tglmulai').text(tglmulai);
                $('#deadline').text(deadline);
                $('#dayLeft').text(dayLeft);
                $('#dayleft').text(dayLeft);
                $('#total').text(total);
                $('#text-repo').text(repo);
                $('#repository').attr('href', repo);
                $('#textPercent').text(progressFormat);
                $('.progress-bar').css('width', progressFormat + '%');
                $('.progress-bar').attr('aria-valuenow', progressFormat);
                if (deskripsi) {
                    $('#deskripsi').text(deskripsi);
                } else {
                    $('#deskripsi').html(
                        '<div class="alert alert-warning d-flex align-items-center mt-3 cursor-pointer" role="alert">' +
                        '<span class="alert-icon text-warning me-2">' +
                        '<i class="ti ti-bell ti-xs"></i>' +
                        '</span>' +
                        'Tim ini belum memiliki deskripsi tema!' +
                        '</div>'
                    );
                }

                var anggotaList = $('#anggota-list');
                anggotaList.empty();

                anggota.forEach(function(anggota, index) {
                    var avatarSrc = anggota.avatar ? '/storage/' + anggota.avatar :
                        '/assets/img/avatars/1.png';

                    var anggotaItem = $('<div class="col-lg-4 p-2" style="box-shadow: none">' +
                        '<div class="card">' +
                        '<div class="card-body d-flex gap-3 align-items-center">' +
                        '<div>' +
                        '<img width="30px" height="30px" class="rounded-circle object-cover" src="' +
                        avatarSrc + '" alt="foto user">' +
                        '</div>' +
                        '<div>' +
                        '<h5 class="mb-0" style="font-size: 15px">' + anggota.name + '</h5>' +
                        '<span class="badge bg-label-warning">' + anggota.jabatan + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');
                    anggotaList.append(anggotaItem);
                });

                $('#modalDetail').modal('show');

            });

            $('[data-tab]').click(function() {
                var historyMentorTab = $(this).attr('data-tab');
                sessionStorage.setItem('historyMentorTab', historyMentorTab);
            });

            var historyMentorTab = sessionStorage.getItem('historyMentorTab');
            if (historyMentorTab) {
                var tabToActivate = document.querySelector('[data-tab="' + historyMentorTab + '"]');
                if (tabToActivate) {
                    tabToActivate.click();
                }
            }
        });
    </script>
    {{-- Script detail modal --}}
@endsection

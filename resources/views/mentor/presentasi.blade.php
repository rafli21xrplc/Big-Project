@extends('layoutsMentor.app')

@section('style')
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/select2/select2.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/flatpickr/flatpickr.css') }}" />
@endsection

@section('content')

{{-- modal --}}


    {{-- Modal Selesai Project --}}

    <div class="modal fade" id="Finish" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <form id="selesaiPresentasiForm" method="post">
                @method('PUT')
                @csrf
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Selesai Presentasi</h5>
                <button type="button" class="btn-close" data-bs-toggle="modal" data-bs-target="#detailPresentasi"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">

                    <div class="col">
                        <span>Status Revisi</span> <br><br>
                        <input type="radio" value="selesai" name="status_revisi" id="selesai">
                        <label for="selesai" >Selesai</label>
                        <input type="radio" value="tidak_selesai" name="status_revisi" id="tidak">
                        <label for="tidak" >Tidak selesai</label>

                        <br>
                        <br>
                        <br>

                        <label for="feedback" class="mb-3">Feedback <span class="badge bg-label-warning">opsional</span> </label>
                        <textarea type="text" class="form-control" id="feedback" placeholder="Beri Feedback Presentasi"
                            style="height: 150px; resize: none"></textarea>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#detailPresentasi" >Kembali</button>
                <button type="submit" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#detailPresentasi">Simpan</button>
            </div>
            </form>
        </div>
    </div>
    </div>

{{-- Modal Selesai Project --}}

  {{-- Modal Tolak Presentasi --}}

  <div class="modal fade" id="Reject" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <form id="tolakPresentasiForm" method="post">
                @csrf
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tolak Presentasi</h5>
                <button type="button" class="btn-close" data-bs-toggle="modal" data-bs-target="#detailPresentasi"  aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="" class="mt-1">Alasan</label>
                <textarea id="alasan" type="text" name="alasan" class="form-control" placeholder="Beri alasan penolakan" style="height: 150px; resize: none"></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#detailPresentasi" >Close</button>
                <button  type="setuju" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#detailPresentasi" >Setuju</button>
            </div>
        </form >
        </div>
    </div>
</div>

{{-- Modal Tolak Presentasi --}}


<div class="modal fade" id="detailPresentasi" tabindex="-1" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen" role="document">
      <div class="modal-content">
        <div class="modal-body">
            <div class="container-fluid mt-3">
                <h5>Presentasi</h5>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <div class="nav-align-top d-flex justify-between">
                                    <div class="nav nav-pills d-flex justify-content-between row" role="tablist">
                                        <div class="nav-item col-lg-3 col-md-6" role="presentation" >
                                            <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                            data-bs-target="#navs-pills-top-home" aria-controls="navs-pills-top-home"
                                            data-bs-toggle="popover" data-bs-placement="top" data-bs-original-title="Tooltip Text"
                                                aria-selected="true"><i class="ti ti-news me-2"></i>Pengajuan</button>
                                        </div>
                                        <div class="nav-item col-lg-3 col-md-6" role="presentation">
                                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                                data-bs-target="#navs-pills-top-profile" aria-controls="navs-pills-top-profile"
                                                aria-selected="false" tabindex="-1"><i
                                                    class="ti ti-presentation-analytics me-2"></i>Presentasi</button>
                                        </div>
                                        <div class="nav-item col-lg-3 col-md-6" role="presentation">
                                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                                data-bs-target="#navs-pills-top-baru" aria-controls="navs-pills-top-profile"
                                                aria-selected="false" tabindex="-1"><i
                                                    class="ti ti-adjustments-horizontal me-2"></i>Belum Presentasi</button>
                                        </div>
                                        <div class="nav-item col-lg-3 col-md-6" role="presentation">
                                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                                data-bs-target="#navs-pills-top-start" aria-controls="navs-pills-top-profile"
                                                aria-selected="false" tabindex="-1"><i
                                                    class="ti ti-clock-exclamation me-2"></i>Telat</button>
                                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content mt-3">
                    <div class="tab-pane fade active show" id="navs-pills-top-home" role="tabpanel">
                        <div class="">
                            <div class="">
                                <div class="table-responsive text-nowrap">
                                    <div class="container">
                                        <div class="row" id="row-persetujuan">

                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>







                    <div class="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
                        <div class="row" id="row-konfirmasi">


                        </div>
                    </div>




                    <div class="tab-pane fade" id="navs-pills-top-baru" role="tabpanel">
                        <div class="card">
                            <div class="card-header">
                                <div class="table-responsive text-nowrap">
                                    <table id="jstabel3" class="table">
                                        <div class="">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama</th>
                                                    <th>Project</th>
                                                    <th>Tema</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            @php
                                                $no = 1;
                                            @endphp
                                            <tbody id="tr-belum-presentasi">

                                            </tbody>
                                        </div>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-pills-top-start" role="tabpanel">
                        <div class="card">
                            <div class="card-header">
                                <div class="table-responsive text-nowrap">
                                    <table id="jstabel4" class="table">
                                        <div class="">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama</th>
                                                    <th>Tanggal</th>
                                                    <th>Hari</th>
                                                    <th>Project</th>
                                                    <th>Tema</th>
                                                </tr>
                                            </thead>
                                            @php
                                                $no = 1;
                                            @endphp
                                            <tbody id="row-telat">

                                            </tbody>
                                        </div>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" data-bs-dismiss="modal" class="btn btn-danger waves-effect">Close</button>
        </div>
      </div>
    </div>
  </div>

{{-- modal --}}


<div class="container mt-3">
    <h2 class="fs-4">Presentasi</h2>
    <div class="row">
        @forelse ( $historyPresentasi as $history )

        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body text-black">
                    @php
                        $date = \Carbon\Carbon::parse($history->created_at);
                        $month = $date->isoFormat('MMMM');
                        $weekOfMonth = ceil($date->day / 7);
                    @endphp
                    <img width="300" height="auto" class="img-fluid" src="{{ asset('assets/img/presentasi.png') }}" alt="">
                    <div class="d-flex justify-content-around align-items-center">
                        <span class="badge bg-label-info">Minggu ke-{{ $weekOfMonth }}</span>
                        <span class="badge bg-label-primary">{{ $month }}</span>
                    </div>
                    <div class="d-flex justify-content-around align-items-center gap-3  mt-3">
                        <button class="btn btn-danger w-75">Hapus</button>
                        <button onclick="tampilkanDetail('{{ $history->code }}')" data-bs-toggle="modal" data-bs-target="#detailPresentasi" class="btn btn-warning w-75">Detail</button>
                    </div>
                </div>
            </div>
        </div>

        @empty

        @endforelse
    </div>
</div>
@endsection

@section('script')
    <script src="{{ asset('assets/js/forms-selects.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/select2/select2.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/flatpickr/flatpickr.js') }}"></script>
    <script src="{{ asset('assets/js/forms-pickers.js') }}"></script>

    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="{{ asset('assets/js/forms-editors.js') }}"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>

        const tampilkanDetail = (code) =>{
            axios.post('tampil-detail-presentasi/' + code)
            .then((res) => {
                let data1 = res.data.presentasi;
                let data2 = res.data.konfirmasi;
                let data3 = res.data.belum_presentasi;
                let data4 = res.data.telat_presentasi;
                console.log(res.data);

                // console.log(Object.keys(data2));

                document.getElementById('row-persetujuan').innerHTML = ''
                Object.keys(data1).forEach( (key) => {
                    let presentasi = data1[key]
                    // console.log(presentasi);
                    let div = document.createElement('div')
                   div.id = "card-persetujuan-"+presentasi.code;
                   div.className = "col-md-6 col-lg-4";
                   let childrend =
                   `
                   <div class="card text-center mb-3">
                        <div class="card-body">
                            <img src="{{ asset('storage/${presentasi.tim.logo}') }}" alt="logo tim" class="rounded-circle mb-3 border-primary border-2" style="width: 150px; height: 150px; object-fit: cover; ">
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <h4 class="card-title text-capitalize">tes</h4>
                                <a href="#"><span class="badge bg-label-warning mb-3">solo</span></a>
                            </div>
                            <p class="card-text">${presentasi.jadwal}</p>

                            <div class="d-flex justify-content-center gap-2">
                                <button onclick="tolakPresentasi('${presentasi.code}')" data-bs-toggle="modal" data-bs-target="#Reject" class="px-3 py-1 btn btn-danger" >Tolak</button>
                                <button onclick="setujuiPresentasi('${presentasi.code}')" class="px-3 py-1 btn btn-success" >Setujui</button>
                            </div>
                        </div>
                    </div>
                `

                   div.innerHTML = childrend;
                   document.getElementById('row-persetujuan').appendChild(div);
                });

                document.getElementById('row-konfirmasi').innerHTML = "";
                Object.keys(data2).forEach(( key ) => {
                    let presentasi = data2[key]
                    let div = document.createElement('div')
                    div.id = "card-konfirmasi-"+presentasi.code;
                    div.className = "col-md-6 col-lg-4";
                    let childrend =
                    `
                    <div class="card text-center mb-3">
                                    <div class="card-body">
                                        <div style="width: 30px; height: 30px; top: -10px; right: -10px;" class="rounded bg-primary d-flex justify-content-center align-items-center text-white position-absolute">
                                          ${presentasi.urutan}
                                        </div>
                                        <img src="{{ asset('storage/${presentasi.tim.logo}') }}" alt="logo tim" class="rounded-circle mb-3 border-primary border-2" style="width: 150px; height: 150px; object-fit: cover; ">
                                        <div class="d-flex justify-content-center align-items-center gap-2">
                                            <h4 class="card-title text-capitalize">${presentasi.tim.nama}</h4>
                                        <a href="#"><span class="badge bg-label-warning mb-3">${presentasi.tim.status_tim}</span></a>
                                        </div>
                                        <div class="card-text">${presentasi.jadwal}</div>
                                       <div class="d-flex justify-content-center gap-2">
                                             <button class="btn btn-primary" >Urutan</button>
                                             <button class="btn btn-success" onclick="sudahPresentasi('${presentasi.code}')" data-bs-toggle="modal" data-bs-target="#Finish" >Konfirmasi</button>
                                       </div>
                                    </div>
                                </div>

                    `
                    div.innerHTML = childrend
                    document.getElementById('row-konfirmasi').appendChild(div)
                })


                document.getElementById('tr-belum-presentasi').innerHTML = ""
                Object.keys(data3).forEach((keys, i) => {
                    let presentasi = data3[keys];
                    let tr = document.createElement('tr');
                    let child;
                    let cell1 = document.createElement('td');
                    cell1.textContent = i + 1;

                    let cell3 = document.createElement('td');
                    cell3.textContent = presentasi.status_tim;

                    let cell4 = document.createElement('td');
                    cell4.textContent = presentasi.project[0].tema.nama_tema;

                    let cell5 = document.createElement('td');
                    cell5.innerHTML = `<span class="badge bg-label-warning">Belum Presentasi</span>`;

                    if (presentasi.status_tim === "solo") {
                      let cell2 = document.createElement('td');
                      cell2.innerHTML = `<img src="{{ asset('assets/${presentasi.user[0].avatar}') }}" alt=""
                          style="border-radius: 50%; width:40px;"> ${presentasi.user[0].username}`;
                      tr.appendChild(cell1);
                      tr.appendChild(cell2);
                      tr.appendChild(cell3);
                      tr.appendChild(cell4);
                      tr.appendChild(cell5);
                    } else {
                      let cell2 = document.createElement('td');
                      cell2.innerHTML = `<img src="{{ asset('assets/${presentasi.logo}') }}" alt=""
                          style="border-radius: 50%; width:40px;"> ${presentasi.user[0].username}`;
                      tr.appendChild(cell1);
                      tr.appendChild(cell2);
                      tr.appendChild(cell3);
                      tr.appendChild(cell4);
                      tr.appendChild(cell5);
                    }

                    document.getElementById('tr-belum-presentasi').appendChild(tr);
                  });


                  document.getElementById('row-telat').innerHTML = "";

                  Object.keys(data4).forEach((keys,i)=>{

                    let presentasi = data4[keys]
                    let tr = document.createElement('tr')
                    let cell1 = document.createElement('td')
                    cell1.textContent = i + 1;

                    const date = new Date(presentasi.jadwal)
                    const day = date.toLocaleString('id-ID',{weekday: 'long',timeZone:'UTC'});


                    let cell6 = document.createElement('td')
                    cell6.textContent = presentasi.jadwal;

                    let cell3 = document.createElement('td')
                    cell3.textContent = day;

                    let cell4 = document.createElement('td')
                    cell4.textContent = presentasi.tim.status_tim;

                    let cell5 = document.createElement('td')
                    cell5.textContent = presentasi.tim.project[0].tema.nama_tema;


                    if(presentasi.tim.status_tim === "solo"){
                        let cell2 = document.createElement('td')
                        cell2.innerHTML = `<img src="{{ asset('assets/${presentasi.tim.logo}') }}" alt="" style="border-radius: 50%; width:40px;"> ${presentasi.tim.user[0].username}</td>`
                        tr.appendChild(cell1)
                        tr.appendChild(cell2)
                        tr.appendChild(cell6)
                        tr.appendChild(cell3)
                        tr.appendChild(cell4)
                        tr.appendChild(cell5)
                    }else{

                        let cell2 = document.createElement('td')
                        cell2.innerHTML = `<img src="{{ asset('assets/${presentasi.tim.logo}') }}" alt="" style="border-radius: 50%; width:40px;"> ${presentasi.tim.nama}</td>`

                        tr.appendChild(cell1)
                        tr.appendChild(cell2)
                        tr.appendChild(cell6)
                        tr.appendChild(cell3)
                        tr.appendChild(cell4)
                        tr.appendChild(cell5)

                    }

                    document.getElementById('row-telat').appendChild(tr)


                  })



            })
            .catch((err) => {
                console.log(err);
            })
        }



        const tolakPresentasi =(code)=>{
            const form = document.getElementById("tolakPresentasiForm")
            form.addEventListener("submit",function(e){
            const alasan = document.getElementById('alasan').value
                e.preventDefault();

                axios.put('penolakan-presentasi/'+code,{alasan})
                .then((response) => {
                    console.log(response.data);

                        if(response.data.error){
                            Swal.fire({
                            icon: 'error',
                            title : 'Error',
                            text : response.data.error
                        })
                        }

                        if(response.data.success){

                        document.getElementById('card-persetujuan-'+code).classList.add('d-none')
                        Swal.fire({
                            icon: 'success',
                            title : 'Sukses',
                            text : 'Berhasil Menolak Presentasi'
                        })
                        }

                })
                .catch((err) => {
                    console.log(err)
                })
            })
        }


        const setujuiPresentasi = (code) => {

    axios.put('persetujuan-presentasi/' + code)
        .then((res) => {
            document.getElementById('card-persetujuan-'+code).classList.add('d-none');

            const newData = res.data;
            console.log({newData});

            const div = document.createElement('div');
            div.className = 'col-md-6 col-lg-4';
            div.id = 'card-konfirmasi-'+code;

            let data = `
                <div class="card text-center mb-3">
                    <div class="card-body">
                        <div style="width: 30px; height: 30px; top: -10px; right: -10px;" class="rounded bg-primary d-flex justify-content-center align-items-center text-white position-absolute">
                            ${newData.urutan}
                        </div>
                        <img src="{{ asset('storage/${newData.tim.logo}' ) }}" alt="logo tim" class="rounded-circle mb-3 border-primary border-2" style="width: 150px; height: 150px; object-fit: cover;">
                        <div class="d-flex justify-content-center align-items-center gap-2">
                            <h4 class="card-title text-capitalize">${newData.tim.nama}</h4>
                            <a href="#"><span class="badge bg-label-warning mb-3">${newData.tim.status_tim}</span></a>
                        </div>
                        <div class="card-text">${newData.jadwal}</div>
                        <div class="d-flex justify-content-center gap-2">
                            <button class="btn btn-primary">Urutan</button>
                            <button class="btn btn-success" onclick="sudahPresentasi('${newData.code}')" data-bs-toggle="modal" data-bs-target="#Finish">Konfirmasi</button>
                        </div
                    </div
                </div>
            `;

            div.innerHTML = data;


            document.getElementById('row-konfirmasi').appendChild(div);

            Swal.fire({
                            icon: 'success',
                            title : 'Sukses',
                            text : 'Berhasil Menolak Presentasi'
                        })


        })
        .catch((err) => {
            console.log(err);
        });
};


        function sudahPresentasi(code){
            const  persetujuan = "selesai"
            const form = document.getElementById('selesaiPresentasiForm')
            form.addEventListener("submit",( e )=>{
                e.preventDefault();
                const feedback = document.getElementById('feedback').value


                try {
                    const status_revisi = document.querySelector("[name='status_revisi']:checked").value

                    axios.put('konfirmasi-presentasi/'+code,{feedback,status_revisi,persetujuan})
                .then((res) => {
                    console.log(res.data.error);
                    document.getElementById('card-konfirmasi-'+code).classList.add('d-none');
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(()=>{
                    const form = document.getElementById('selesaiPresentasiForm').reset()
                })
                } catch (error) {

                    setTimeout(() => {
                        Swal.fire({
                                icon: 'error',
                                title : 'Error',
                                text : 'Status revisi tidak boleh kosong'
                            })
                    }, 400);

                }




                })


        }



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
    </script>
@endsection

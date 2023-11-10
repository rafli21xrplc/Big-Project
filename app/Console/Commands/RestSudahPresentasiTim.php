<?php

namespace App\Console\Commands;

use App\Models\Tim;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class RestSudahPresentasiTim extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:rest-sudah-presentasi-tim';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command ini akan mereset status tim setiap minggu';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        DB::table('tims')->update(['sudah_presentasi'=>false]);

    }
}
function alertError(error){
    if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        console.log(errors);

        let errorMessage = '';
        for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
            errorMessage += `${errors[key]}\n`;
            }
        }
        $("#formTambahTugas").trigger("reset");
        Swal.fire('Validasi gagal', errorMessage, 'error');
    } else {

    console.log(error);

    }

}

module.exports = alertError;

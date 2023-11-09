function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const nik = document.getElementById('nik').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message');

    if (fullName === '' || nik === '' || email === '' || phone === '') {
        message.innerText = 'ANDA HARUS MENGISI DATA DENGAN LENGKAP!';
    } else {
        message.innerText = 'Terimakasih sudah melakukan pendaftaran';
    }
}

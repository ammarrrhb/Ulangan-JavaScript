function hitungKeliling() {
    const sisiA = parseFloat(document.getElementById('sideA').value);
    const sisiB = parseFloat(document.getElementById('sideB').value);
    const sisiC = parseFloat(document.getElementById('sideC').value);
    const sisiD = parseFloat(document.getElementById('sideD').value);


    const keliling = sisiA + sisiB + sisiC + sisiD;

    if (!isNaN(keliling)) {
        document.getElementById('result').innerText = `Keliling trapesium sama kaki adalah: ${keliling}`;
    } else {
        document.getElementById('result').innerText = 'Mohon masukkan nilai sisi yang valid.';
    }
}

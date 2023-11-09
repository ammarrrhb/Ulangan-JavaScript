function calculateTotal() {
    const item = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    let price = 0;

    switch (item) {
        case 'USB':
            price = 20000;
            break;
        case 'Memori':
            price = 50000;
            break;
        case 'Speaker':
            price = 20000;
            break;
        default:
            break;
    }

    const totalPrice = price * quantity;
    document.getElementById('totalPrice').textContent = `Total Harga: Rp${totalPrice.toLocaleString('id-ID')},00`;
}

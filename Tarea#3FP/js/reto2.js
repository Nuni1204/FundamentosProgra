document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const itemSelect = document.getElementById("item");
    const quantityInput = document.getElementById("quantity");
    const addItemButton = document.getElementById("add-item");
    const invoiceTableBody = document.querySelector("#invoice-table tbody");
    const subtotalSpan = document.getElementById("subtotal");
    const ivaSpan = document.getElementById("iva");
    const servicioSpan = document.getElementById("servicio");
    const totalSpan = document.getElementById("total");

    const products = {
        Impresora: 100000,
        Computadora: 200000,
        Monitor: 50000
    };

    let invoiceItems = [];

    addItemButton.addEventListener("click", function() {
        const item = itemSelect.value;
        const price = products[item];
        const quantity = parseInt(quantityInput.value);

        if (item && price && quantity) {
            const subtotal = price * quantity;
            invoiceItems.push({ item, quantity, price, subtotal });

            const newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${item}</td><td>${quantity}</td><td>${price} colones</td><td>${subtotal} colones</td>`;
            invoiceTableBody.appendChild(newRow);

            const subTotalAmount = invoiceItems.reduce((total, item) => total + item.subtotal, 0);
            const iva = subTotalAmount * 0.13;
            const servicio = subTotalAmount * 0.05;
            const total = subTotalAmount + iva + servicio;

            subtotalSpan.textContent = subTotalAmount;
            ivaSpan.textContent = iva;
            servicioSpan.textContent = servicio;
            totalSpan.textContent = total;

            quantityInput.value = "";
        }
    });
});

class Fragrance {
    constructor(name, brand, category) {
    this.name = name
    this.brand = brand
    this.category = category 
   }     
}

class UI {
    addFragrance(fragrance) {
        const list = document.getElementById('fragrance-list')
        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${fragrance.name}</td>
        <td>${fragrance.brand}</td>
        <td>${fragrance.category}</td>
        <td><a href="" class="delete">X</a></td>

        `;
        list.appendChild(row);
    }
    
    showAlert(message, className) {
        const div = document.createElement('div')

        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');

        const form = document.querySelector('#fragrance-form')

        container.insertBefore(div, form);

        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteFragrance(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById('name').value = '';
        document.getElementById('brand').value = '';
        document.getElementById('category').value = '';
    }
}

document.getElementById('fragrance-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value
    const brand = document.getElementById('brand').value 
    const category = document.getElementById('category').value
    
    const newFragrance = new Fragrance(name,brand,category);

    const ui = new UI();

    if (name === '' || brand === '' || category === '') {
        ui.showAlert('Please fill in all fields', 'Error')
    } else {
        ui.addFragrance(newFragrance);

        ui.showAlert('Fragrance Added', 'Success');

        ui.clearFields()
    }
    e.preventDefault();
})

document.getElementById('fragrance-list').addEventListener('click', function(e) {
    const ui = new UI();

    ui.deleteFragrance(e.target);
    ui.showAlert('Fragrance removed', 'Success');

    e.preventDefault()
});

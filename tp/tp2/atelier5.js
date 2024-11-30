function displayMultiplicationTable() {
    const number = parseInt(prompt('Entrez un nombre :'));
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += number + ' x ' + i + ' = ' + (number * i) + '<br>';
    }
    document.write(table);
}

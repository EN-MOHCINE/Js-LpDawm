function checkValue() {
    const value = parseFloat(prompt('Entrez une valeur :'));
    if (value > 0) {
        document.write('La valeur est positive.');
    } else if (value < 0) {
        document.write('La valeur est négative.');
    } else {
        document.write('La valeur est nulle.');
    }
}

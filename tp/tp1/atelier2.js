function calculateCircleMetrics() {
    const radius = parseFloat(prompt('Entrez le rayon du cercle :'));
    const perimeter = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    document.write('Périmètre: ' + perimeter.toFixed(2) + '<br>');
    document.write('Surface: ' + area.toFixed(2));
}

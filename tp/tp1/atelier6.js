function afficheImage(saison) {
    let imageUrl = '';
    switch (saison) {
        case 'printemps':
            imageUrl = 'printemps.jpg';
            break;
        case 'ete':
            imageUrl = 'ete.jpg';
            break;
        case 'automne':
            imageUrl = 'automne.jpg';
            break;
        case 'hiver':
            imageUrl = 'hiver.jpg';
            break;
        default:
            document.write('Saison inconnue');
            return;
    }
    document.getElementById('imageContainer').innerHTML = '<img src="' + imageUrl + '" alt="' + saison + '">';
}

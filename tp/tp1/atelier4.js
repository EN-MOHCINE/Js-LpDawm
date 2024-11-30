function calculateSum() {
    const N = parseInt(prompt('Entrez un entier N :'));
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    document.write('La somme des ' + N + ' premiers entiers est: ' + sum);
}

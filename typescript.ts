
function osszesOszto(szam: number): number[] {
    const osztok: number[] = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}

function parosDarab(szamok: number[]): number {
    let parosSzamok: number = 0;
    for (const szam of szamok) {
        if (szam % 2 === 0) {
            parosSzamok++;
        }
    }
    return parosSzamok;
}

function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    const eredmeny: string = fuggveny();
    const tisztaSzoveg: string = eredmeny.replace(/\s/g, '').toLowerCase();
    const fordítva: string = tisztaSzoveg.split('').reverse().join('');
    return tisztaSzoveg === fordítva;
}

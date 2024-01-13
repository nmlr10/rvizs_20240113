function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    var parosSzamok = 0;
    for (var _i = 0, szamok_1 = szamok; _i < szamok_1.length; _i++) {
        var szam = szamok_1[_i];
        if (szam % 2 === 0) {
            parosSzamok++;
        }
    }
    return parosSzamok;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var eredmeny = fuggveny();
    var tisztaSzoveg = eredmeny.replace(/\s/g, '').toLowerCase();
    var fordítva = tisztaSzoveg.split('').reverse().join('');
    return tisztaSzoveg === fordítva;
}

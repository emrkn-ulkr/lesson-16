// öğrencinin bilgilerini alıp notunu hesaplayan bir program yap
// ad - soyad - numara - cinsiyet - ders adı - not1 - not2 - ortalama - console yazdır. 

const ogrAd = prompt("Öğrenci Adı:");
const ogrSoyad = prompt("Öğrenci Soyadı:");
const ogrNumara = prompt("Öğrenci Numarası:");
const ogrCinsiyet = prompt("Öğrenci Cinsiyeti (ERKEK/KADIN) :");
const dersAd = prompt("Ders Adı:");
const not1 = parseInt(prompt("Not 1:"));
const not2 = parseInt(prompt("Not 2:"));
const ortalama = (not1 + not2) / 2;
let cinsiyetSonuc;
if (ogrCinsiyet.toLocaleLowerCase().trim() == "erkek") {
    cinsiyetSonuc = "Erkek";
}
if (ogrCinsiyet.toLocaleLowerCase().trim() == "kadın" || ogrCinsiyet.toLocaleLowerCase().trim() == "kadin") {
    cinsiyetSonuc = "Kadın";
}
else {
    alert("Lütfen geçerli bir cinsiyet giriniz (ERKEK/KADIN)" + ogrCinsiyet);
    cinsiyetSonuc = " Geçersiz Cinsiyet";
}

console.log(`Öğrenci Bilgileri:
    Ad: ${ogrAd}
    Soyad:${ogrSoyad}
    Numara:${ogrNumara}
    Cinsiyet:${cinsiyetSonuc} 
    Ders Adı:${dersAd}
    Ders Notu 1:${not1}
    Ders Notu 2:${not2}
    Ortalamanız:${ortalama}`);
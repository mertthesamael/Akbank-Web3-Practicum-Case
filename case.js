// Bir sayının Tek mi Çift mi olduğunu belirleyen bir işlev oluşturun. Bir sayı, tüm basamaklarının toplamı tek ise tek, tüm basamaklarının toplamı çift ise bir sayıdır. Bir sayı tek ise, "Odd" döndürün. Aksi takdirde, "Even" değerini döndürün. Örnek olarak:

// oddishOrEvenish(43) ➞ "Odd"
// 4 + 3 = 7
//  7 % 2 = 1

// oddishOrEvenish(373) ➞ "Odd"
//  3 + 7 + 3 = 13
//  13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Even"
//  4 + 4 + 3 + 3 = 14
//  14 % 2 = 0

const oddishOrEvenish = (number) => {
    //Toplam Sonuç;
    let result = 0 ;

    // Basamak sayısı kadar çalışacak loop
    while (number) {
      result += number % 10;
      number = Math.floor(number / 10);
  }

    //Yazdırılacak çıktı kondisyonu
    result % 2 === 0 ? console.log("Even") : console.log("Odd");

  }

console.log(432) // 4 + 3 + 2 == 9 Bu durumda çıktımız 'Odd' olacaktır.
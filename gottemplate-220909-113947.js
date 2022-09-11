/*
A DIZÁJN TERVÉNEK FELVÁZOLÁSA

1. A HTML- és CSS-kód nagy vonalakkal történő megtervezése
- container tulajdonságai
- a legnagyobb mező a karakterekkel (grid vagy flexbox)
- a sidebar elemeinek összegyűjtése
- már ekkor ügyelni arra, hogy reszponzív módszerekkel dolgozzunk

ADATOK LEKÉRÉSE, RENDSZEREZÉSE

2.  Szükségünk van az adatokra, amelyekkel dolgozunk.
Milyen módon kérjük le őket?
- A got.json fájlból az URL és a fetch segítségével
- Figyelünk az aszinkronitásra
- Megvalósítjuk a hibakezelést (try/catch)

3. Rögtön szűrnünk is kell az adatokat, így egy filterrel
eltávolítjuk a JSON tanulmányozása után/segítségével a nem élő karaktereket

4. A karaktereket abc-sorrendben kell felsorakoztatni:
rögtön ezt a metódust is megírjuk: ezt több módszerrel is lehet, esetleg
figyeljünk arra, hogy az angol karakterkészletet használjuk (Intl.Collator)

ADATOK VIZUÁLIS FORMÁBAN TÖRTÉNŐ MEGJELENÍTÉSE

5. A cellák létrehozása (ötletek)
- template literal
- appendChild
- osztálylista hozzáadása
- setAttribute
- innerHTML

6. Menjünk végig a karakterek listáján egy metódus segítségével,
és írassuk ki a szükséges adatokat a dinamikusan generált mezőkbe

SIDEBAR

(A következő pontokat egy vagy több függvénnyel érdemes megvalósítani?
Miért?)

7. Ide a cellák létrehozásához (4.) hasonló módszerrel beolvassuk a képet

8. A leírás megjelenítéséhez az előzőhöz hasonló módszert alkalmazunk

9. A házak megjelenítéséhez az előzőhöz hasonló módszert alkalmazunk
- Ha hiányzik a ház ikonja (feltételvizsgálat),
placeholder image elhelyezésére lesz szükség

10. A sidebar-ban akkor jelennek meg az adatok, ha adott képre kattintunk,
tehát egy eseménykezelő segítségével hívjuk meg a fenti függvényeket
(az aszinkronitásra figyeljünk)

KERESÉS A KARAKTEREK KÖZÖTT

11. Le kell hozzá kérni a karakterek listáját

12. Hogyan tudjuk megvizsgálni, hogy az input mező tartalmával megegyező karakternév
szerepel a listában?
- Végigiterálunk az összes elemen, és elrejtjük azokat,
amelyek nem felelnek meg a feltételeknek (keressünk metódust, amely segít ebben)/
és azokat jelenítjük meg, amelyek megfelelnek a feltételnek
- Alakítsuk kisbetűssé, majd hasonlítsuk össze őket (vagy)
- Használhatjuk a new RegExp-et, nézzünk utána

+ Reszponzivitás kivitelezése

*/

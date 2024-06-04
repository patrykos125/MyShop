package com.myshop.service;

import com.myshop.model.Item;
import com.myshop.model.enums.Category;
import com.myshop.repository.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;
@Bean
    public void prepareRepository(){
//    itemy w bazie danych
//        itemRepository.save(new Item(0,"Buty Nike Air Force 1 '07 CT2302-100 białe 46"
//                ,"Nike Air Force 1'07 CT2302-100 białe AF1 zadebiutowały w 1982 roku – były to pierwsze buty z systemem Air, dzięki czemu zyskały miłośników na całym świecie. Dziś buty Air Force 1 są wierne swoim korzeniom i wciąż bazują na miękkiej, sprężystej amortyzacji, która odmieniła historię sneakersów. materiał: skóra naturalna kolor: biały z czarnymi dodatkami rozmiarówka standardowa"
//                , "46", Category.SHOES,399,"https://a.allegroimg.com/s512/11d65b/dea2e3e64ad79a7f1782b038946d/Buty-Nike-Air-Force-1-07-CT2302-100-biale-46",420,true));
//
//
//
//        itemRepository.save(new Item(0,"PUMA KOSZULKA MĘSKA T-SHIRT ESS LOGO TEE BLACK r.L","Więcej informacji:\n" +
//                "\n" +
//                "Marka: PUMA\n" +
//                "Model: ESS LOGO TEE\n" +
//                "Produkt: męski\n" +
//                "Kod producenta: 586666 01\n" +
//                "Materiał: 100% bawełna\n" +
//                "Kolor: czarny\n" +
//                "Logo: na przodzie naprasowane duże, białe logo oraz napis \"PUMA\", u dołu koszulki po lewej stronie wszyta niewielka metka z logiem\n" +
//                "Krój: regular fit\n" +
//                "Dekolt: okrągły\n" +
//                "Tył koszulki: bez napisów, motywów\n" +
//                "Cechy: wysokiej jakości bawełna zapewnia wysoki komfort użytkowania\n" +
//                "Przeznaczenie: do codziennego użytku", "M", Category.T_SHIRT,65.99,"https://a.allegroimg.com/original/110068/076628394975955a6de747af6c47/PUMA-KOSZULKA-MESKA-T-SHIRT-MESKIE-100-BAWELNA-CZARNY-ESS-LOGO-TEE-L",59.99,false));
//
//        itemRepository.save(new Item(0,"Męska Kurtka Zimowa Pitbull Gunner Parka Ocieplona ","Kurtki zimowe firmy PIT BULL WEST COAST idealnie sprawdzą się późną jesienią, zimą i wczesną wiosną. Najlepsze materiały i jakość wykonania sprawią, że nawet w niskich temperaturach poczujesz się ciepło i wygodnie. W asortymencie męskich i damskich kurtek zimowych marki Pit Bull znajdziesz dłuższe kurtki typu parka, lotnicze kurtki bomber, kurtki puchowe, jak i sportowe pozycje sprawdzające się w trakcie uprawiania wszelkiej aktywności. Kurtki Pitbull z kolekcji jesień-zima mają bogatą kolorystykę oraz mnogość fasonów i grubości tkanin, dzięki czemu zapewnią komfort i styl w codziennym użytkowaniu. ", "M", Category.JACKET,319,"https://image.ceneostatic.pl/data/products/166579247/i-meska-kurtka-zimowa-pitbull-gunner-parka-ocieplona.jpg",319,false));
//        itemRepository.save(new Item(0,"KURTKA DAMSKA SKÓRZANA RAMONESKA PRZEJŚCIOWA SKÓRA","KURTKA DAMSKA SKÓRZANA PRZEJŚCIOWA ECO SKÓRA\n" +
//                "WIOSENNO - JESIENNA RAMONESKA DAMSKA\n" +
//                " Kurtka wykonana z wysokogatunkowej skóry ekologicznej do złudzenia przypominająca skórę naturalną.\n" +
//                "\n" +
//                " Zapinana na srebrny suwak, który wygląda bardzo stylowo. Posiada również ozdobne dodatkowe suwaki.\n" +
//                "\n" +
//                " Posiada podszewkę co ułatwia zakładanie i zwiększa komfort noszenia, w kolorze idealnie pasującym do kurtki.\n" +
//                "\n" +
//                "Kurtka na plecach szyta jest z kilku kawałków skóry aby idealnie przylegała i dzięki temu jest również bardzo wytrzymała.\n" +
//                "\n" +
//                " Zdjęcia są naszego autorstwa, w 100% odzwierciedlają nasz produkt. Nie zezwalamy na ich kopiowanie.\n" +
//                "\n" +
//                " Kurtkę można wykorzystać w każdej stylizacji, zarówno do klasycznych jeansów i białego t-shirtu na codzienne wyjścia, jak i do kobiecych sukienek dodając im rockowego charakteru. Jest to zdecydowany must have w każdej garderobie!", "M", Category.JACKET,12.99,"https://a.allegroimg.com/original/1130d1/fc5f8239464194eaf15a16f12b2a/KURTKA-DAMSKA-SKORZANA-RAMONESKA-PRZEJSCIOWA-SKORA",20,true));
//        itemRepository.save(new Item(0,"KOSZULA MĘSKA GŁADKA BLUZA ELEGANCKA FIT,XL","DOSTĘPNE KOLORY I WZORY WIDOCZNE SĄ WYŁĄCZENIE NA ZDJĘCIACH PONIŻEJ: informacja o swoim wyborze należy umieścić w formularzu sprzedaży lub dostawy lub mailem.\n" +
//                "\n" +
//                "Dostępne kolory: czarny, granatowy, biały\n" +
//                "\n" +
//                "Dostępne rozmiary: S, M, L, XL, 2XL", "M", Category.SHIRT,99.99,"https://a.allegroimg.com/s1024/0c74a1/2e3b75d848dd90384580864a8cc4",119.99,true));
    }

}

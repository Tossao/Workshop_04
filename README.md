# Workshop_04
Warsztaty IV - JavaScript i jQuery: REST 

Cel warsztatów

Celem warsztatów jest napisanie pełnej i funkcjonalnej aplikacji frontendowej do katalogowania książek metodą REST.<br>
Projekt składa się z dwóch części:<br>
Serwer – napisany w Javie z wykorzystaniem Jersey (gotowy, do pobrania z Githuba),<br>
Klient – napisany w HTML-u i JavaScripcie, komunikujący się z serwerem za pomocą AJAX.<br>

Serwer implementuje klasę Book mającą swój identyfikator, isbn, tytuł, autora, wydawcę i gatunek.<br>
Klient ma implementować tylko stronę główną.<br>

Strona ta ma pokazać wszystkie książki stworzone w systemie. Dane mają być wczytane AJAX-em z adresu /books/.
Na górze tej strony ma być też formularz do tworzenia nowych książek wysyłający dane AJAX-em (metoda POST).
Gdy użytkownik kliknie na nazwę książki, pod nią ma się rozwijać div z informacjami na temat tej strony wczytane za pomocą AJAX (GET) z endpointu /books/{id-książki} Div ten ma też zawierać formularz służący do edycji tej książki (AJAX, metoda PUT na endpoincie /books/{id-książki}).
Obok nazwy ma się znajdować guzik służący do usuwania książki (AJAX, metoda DELETE na endpoint /books/{id-książki})


<br>ZADANIE 1

Testowanie api cURL
Wykonaj poniższe polecenia przy uruchomionym serwerze:

Metoda POST - dodanie danych<br>
curl -X POST -i -H "Content-Type: application/json" -d
  '{"isbn":"34321","title":"Thinking in Java",
  "publisher":"Helion","type":"programming",
  "author":"Bruce Eckel"}' http://localhost:8282/books

Metoda PUT - aktualizacja danych<br>
curl -X PUT -i -H "Content-Type: application/json" -d
  '{"id":1,"isbn":"32222","title":"Thinking in Java",
  "publisher":"Helion","type":"programming",
  "author":"Bruce Eckel"}' http://localhost:8282/books/1

Metoda DELETE - usuwanie danych<br>
curl -X DELETE -i  http://localhost:8282/books/1

Po wykonaniu każdego polecenia sprawdzaj wyniki przy użyciu metody GET<br>
Jeżeli kopiujesz polecenie - musi ono być w jednej lini.


<br>ZADANIE 2

Przygotowanie<br>
Przygotuj folder pod aplikację (inny niż serwera książek),
Pamiętaj o tworzeniu commitów (najlepiej co ćwiczenie).
Stwórz plik .gitignore i dodaj do niego elementy ignorowane np. podstawowe pliki projektu (.project, .settings).
Możesz skorzystać z serwisu https://www.gitignore.io/

<br>ZADANIE 3

Stworzenie strony głównej<br>
W katalogu głównym projektu stwórz plik index.html, a w nim podstawowy layout swojej strony.
Użyj JQuery do stworzenia zapytania AJAX do endpointu /books/ metodą GET.
Po otrzymaniu wszystkich danych w formacie JSON wyświetl wszystkie tytuły na stronie.
Pod każdym tytułem zostaw pusty div, w którym później będziemy wyświetlać informacje na temat książki.


<br>ZADANIE 4

Strona główna<br>
W pliku index.html:<br>
Do każdego tytułu książki podepnij funkcję click.
Funkcja ta ma rozwinąć pusty div znajdujący się pod książką, wysłać zapytanie AJAX do serwera na endpoint /books/{id-książki} 
i wyświetlić odebrane informacje.


<br>ZADANIE 5

Strona główna<br>
W pliku index.html:<br>
Stwórz na górze strony formularz służący do tworzenia nowej książki.
Ma on mieć podpiętego AJAX-a, który metodą POST wyśle dane na endpoint /books/.
Po otrzymaniu wiadomości o udanym dodaniu ma on przeładować od nowa wszystkie książki (żeby pokazać tę nowo dodaną).


<br>ZADANIE 6

Strona główna<br>
W pliku index.html:<br>
Obok każdej książki wyświetl link służący do usunięcia książki.
Podepnij do niego funkcję click.
Funkcja ta ma przesyłać AJAX-em zapytanie DELETE na endpoint /books/{id-książki}
Potem ma załadować od nowa wszystkie książki (żeby nie wyświetlać usuniętej).


<br>ZADANIE 7

Strona główna<br>
Przerób teraz całego AJAX-a znajdującego się w aplikacji tak, aby:
W całej aplikacji frontendowej była tylko jedna funkcja AJAX-a.
Funkcja powinna pobierać z datasetów (utwórz je) co ma zrobić (GET, POST, itp.) oraz ewentualne ID książki i wszystkie potrzebne dane z odpowiednich elementów strony,
Na podstawie pobranych danych, komunikuje się z REST API i wysyła / odbiera potrzebne dane.










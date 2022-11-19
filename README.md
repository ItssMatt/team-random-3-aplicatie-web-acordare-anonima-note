# Team Random 3

Plan de proiect

Membrii: Ardeleanu Matei-Alexandru, Andone Rares-Constantin, Adam Alberto.

Framework utilizat pentru front-end: React.JS

///Prima accesare a aplicatiei
Odata intrat pe aplicatie, utilizatorul va vedea o fereastra cu 2 optiuni: Register si Login. In cazul in care DDL-ul pentru livrabile este depasit, la prima accesare a contului va exista doar un buton pentru Evaluare al proiectelor deja existente.

1. Fereastra Register:
Input fields:
Username
Nume, prenume
Email
Parola
Radio button Student/Profesor (Obligatoriu selectata o varianta)
Buton submit

2. Fereastra login
Username
Parola
Buton submit

///Perspectiva cont student
La prima accesare a aplicatiei din perspectiva unui cont de student, acesta nu va apartine niciunui proiect. Astfel, va fi intampinat de 2 butoane (Create si Join).

///Selectare Join
Studentul va avea la dispozitie un Spinner ce contine toate proiectele create pana in momentul respectiv. La selectarea oricarei echipe din Spinner, vor fi afisate informatii precum:
Numele echipei, creatorul echipei, membrii, descrierea proiectului, livrabilele.
De asemenea va avea posibilitatea de a selecta Join, pentru a se alatura echipei selectate.

///Selectare Create
Input fields:
Numele echipei, descrierea proiectului, livrabilele
De asemenea, studentul va avea posibilitatea de a selecta Create.

///Evaluarea proiectelor existente
In aceasta fereastra, va exista un Spinner ce continte toate proiectele create pana in momentul respectiv si un input field pentru un numar (cuprins intre 1 si 10) cu maxim 2 cifre fractionare.
Studentul va putea modifica nota acordata la maximum 24 de ore dupa primul Submit.
Va exista si un buton de "submit vote".

///Sectiune upload
In aceasta sectiune, creatorul fiecarei echipe, in urma consultarii detaliate cu restul membrilor echipei, va putea da upload la un videoclip demonstrativ sau link in cadrul fiecarui livrabil. Aceasta optiune de upload va exista, pentru fiecare livrabil, in functie de DDL.

///Perspectiva cont profesor

Odata logat ca profesor, va fi afisat un tabel cu toate proiectele, iar in dreptul fiecaruia, va fi afisata media notelor acordate proiectului respectiv (omitand MIN si MAX).

///Detalii aplicatie

Aplicatia va avea 3 DDL-uri prestabilite

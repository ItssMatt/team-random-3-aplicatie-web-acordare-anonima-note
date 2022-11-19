# Team Random 3

Plan de proiect

Membrii: Ardeleanu Matei-Alexandru, Andone Rares-Constantin, Adam Alberto.

Framework utilizat: React.JS

Register / Login
Register campuri: Username,Nume,Prenume,Parola,Checkbox Profesor,Buton submit.
Login campuri: Username,Parola,Buton submit.

Toate proiectele au acelasi DDL.

/// STUDENT

Iti apare pagina goala, iti zice ca nu esti in nicio echipa si zice daca vrei sa creezi o echipa sau sa dai join.
Pentru butonul de join la echipa, cand apesi pe el iti apare Spinner cu echipele existente, odata ce ai selectat o echipa,
iti apar informatii jos legate de echipa respectiva (Membrii,Livrabile,Numele,Creatorul,Obiectivele proiectului), 
sub informatii un buton de Submit.
Daca dai create, iti apar niste field uri (Numele,Livrabile,Obiectivele proiectului) si buton de Submit.

Daca te loghezi si esti intr-o echipa, arata datele echipei respective, sectiune de Upload, calendarul cu DDL si un timer.

Exista un buton 'Acorda Nota' care va fi valabil doar dupa expirarea DDL, odata apasat iti arata Spinner cu toate echipele
inafara de a ta, un numeric input pentru nota  ( limit 1.00 - 10.00 ) si un buton Submit.


/// PROFESOR

Cand te-ai logat ca profesor, ai un tabel cu toate echipele si media notelor. Media notelor sa calculeaza fara cea mai mica
si cea mai mare nota. ( o sa scoatem daca avem 1 1 2 3 5 7 10 10, doar un 1 si un 10 )


/// FUNCTII(ONALITATI)

Fiecare student poate vota pentru toate celelalte echipe in care nu e. De asemenea, fiecare student isi poate modifica nota data
pana la un anumit DDL (hard codat).

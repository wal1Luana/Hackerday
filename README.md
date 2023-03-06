### Auftrag entstanden

Am 20.10.2022 hat mich Felix kontaktiert, ob ich ihm helfen kann bei einer Ghost Seite für die Hackdays.
Zuerst war der Auftrag nur, dass ich ihm helfe ein Repository zu erstellen, damit ich einige Komponenten der Ghost Seite löschen kann, wie das Ghost Logo zum Beispiel.

Felix hatte für die Ghost Seite ein Abo erstellt und hatte aber so nicht zugriff auf alle Funktionen von Ghost. Z.B konnte er nicht kostenlos das Theme ändern. Deshalb habe ich mit Dominic W. eine neue Ghost Seite über sein Script erstellt und den Content hineingezogen.

Am Anfang war es angedacht, dass ich Felix nur am Anfang helfe. Felix teilte mir dann aber mit, dass er sich im Code von Ghost nicht zurecht findet, weshalb er mit dann von Zeit zu Zeit immer weitere kleine Anpassungen gegeben hat wie:

- Buttons hinzufügen
- Lupe oben rechts entfernen
- Load more Button löschen
- Logos hinzufügen im Footer
- Texte ändern
- Teaser Seite als Home-Seite verlinken
- Styling / responsive Design

**Domain:** hat Felix über folgende Seite gekauft: one.com

**Übersetzungen:** wurden von Felix mit Weglot gemacht

**Code:** Ich konnte die meisten Sachen über die Datei default.hbs löschen oder hinzufügen. Das Styling habe ich alles über die Datei screen.css geändert welche im Ordner assets/built ist. Einige Probleme wie Verlinkungen auf der Seite konnte ich über die Ghost Benutzeroberfläche ändern.

**Probleme:** Es gab mehrmals ein Problem mit dem URL und das die Website Privat war. Das Problem war, dass es einen Fehler in der Pipeline hatte. So wurde jedes mal wenn eine andere Ghost Seite erstellt wurde die Hackdays Seite aktuallisiert und weil da ein Fehler war ist diese aktualisierung dann fehlgeschlagen. Durch diesen Fehler im Script wurde die Hackdays Seite immer Privat oder sogar unereichbar wenn man eine neue Ghost Seite erstellt hatte. Dominic W. hat diesen Fehler im Script angepasst und seit da ist dieser Fehler nie mehr vorgekommen.

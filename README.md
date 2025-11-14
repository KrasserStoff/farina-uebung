# Farina x krasserstoff.com Übung

## Aufgabe

Die grundsätzliche Aufgabe ist das Erstellen von einem Formular, in dem man aus einer Liste von News eine auswählen kann und dann die News angezeigt bekommt.

Du solltest dafür vor allem folgende Dateien bearbeiten: `NewsForm.tsx` und `index.tsx`.

Folgende Eigenschaften sollten erfüllt sein:

1. `<select>` mit einer Liste aus News. Dafür ist `NewsForm.tsx` bereits erstellt und erhält einen Array von News, der von unserer API kommt. Die Typisierung für die Felder der News ist vorhanden.
2. Beim Auswählen eines Elements sollte sich ein <img> Element verändern.
3. Beim Klick auf Bild soll sich das `href` der News in einem neuen Tab öffnen.
4. Beachte die korrekte Reihenfolge der News
5. Achte auf angemessenes Ladefeedback für die User

Als Hilfestellung, sind die meisten Aufgaben mit `TODO: ` in Kommentaren hinterlegt.

Pushe deine finale Lösung in GitHub

### Bonus

- Passe die Schriftart an krasserstoff.com an
- Passe das Layout in `index.tsx` ein bisschen mehr an krasserstoff.com an
- Zeige das Logo von krasserstoff.com an
- Zeige Titel und Text der News an
- Achte darauf, dass keine Typescript-Fehler vorhanden sind
- Pass das Design weiter nach Belieben an und achte darauf, dass es auch auf Smartphones gut aussieht
- Kommentiere wichtige Stellen im Code

### Hints

- Nutze `useState()` um die Daten zu aktualisieren
- Du kannst alle Designaufgaben mit direktem CSS in den Components lösen. Entweder direkt im HTML (`style:{{"background-color":"green"}}`) oder über CSS-Klassen – für uns ist erst mal beides okay.

## Projekt starten

Um das Projekt zu installieren und zu starten, führe diese Kommandos aus

- `npm install`
- `npm run dev`

Die App sollte dann unter http://localhost:3000 erreichbar sein

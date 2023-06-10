# Esy Website
Hier ist der Code der [Website](esymusic.easymoneymusic.de/) der €$¥-Crew aus Stuttgart gehostet.
Genutzte Technologie ist [Eleventy](https://www.11ty.dev/).

CD ist konfiguriert über Github Actions und watched den `crewbranch`.
# Konventionen
- Bildgröße: 1200px maximale Breite, Höhe entsprechend
- Benennung der Dateien: Snake Case (z.B.: `endlich_arbietslos.md`)
- Bilder abspeichern unter `./assets/images`. Cover für Releses in den Unterordner `/cover`.
- PDFs oder ähnliche Dateien abspeichern unter `./assets/dokumente`
# How To
## Seite Konfigurieren 
...passiert über die Datei `./data/site.yaml`.
Zu finden sind hier solche Daten wie Titel der Seite (steht oben im Tab des Browsers), Email-Addressen oder den Link zu dem Elektronischen Presskit.
## Coming Soon Banner verwalten
### Anpassen
 1. Datei `./_data/comingSoon.yaml` öffnen
 3. `title`, `date` und `imageUrl` anpassen
### An- und Ausschalten
 1. Datei `./_data/comingSoon.yaml` öffnen
 2. wert `aktiv` auf `true` oder `false` setzen 
## Neues Release hinzufügen
 1. Datei `./_vorlagen/release.md` kopieren und in Ordner `./musik` einfügen
 2. Kopierte Datei umbennen in Name des releases, z.B. `endlich_arbeitslos.md`
 3. Kopierte Datei öffnen und alle Werte zwischen _Ab hier editieren_ und _Ab hier nicht mehr editieren_ anpassen 
 4. Beschreibung in Klartext unter die Tennline ( ___ ) einfügen

 Ist der Release ein Tape oder Album mit mehreren Tracks, die trakliste erweitern. Wenn nicht, die Trackliste einfach löschen.

 ## Neuen Artikel oder neues Live Event hinzfügen
  1. Datei `./_vorlagen/news_artikel.md` kopieren und in Ordner `./live` einfügen
 2. Kopierte Datei umbennen in Name des releases, z.B. `flugmodus_live.md`
 3. Kopierte Datei öffnen und alle Werte zwischen _Ab hier editieren_ und _Ab hier nicht mehr editieren_ anpassen 
 4. Beschreibung in Klartext unter die Tennline ( ___ ) einfügen




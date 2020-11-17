# Beskrivelse
Visning av tid og dato som enkelt kan bygges inn i ArcGIS Dashboards.

# URL-parametre
Webappliasjonen støtter ulike url-parametre for å endre utseende

## Themes
Applikasjonen har to innebygde fargetema som matcher ArcGIS Dashboards:
* theme-light (standard)
* theme-dark

Eksempel:
`theme=theme-dark`

## Overstyre fargetema
Det er mulig å angi farger for bakgrunn, tid og dato separat:
```
timeDisplay=D3D3D3
dateDisplay=D3D3D3
bgColor=32a852
```
## Eksempler på bruk av url-parametre
```
https://ingean.github.io/arcgis-clock/index.html?theme=theme-dark

https://ingean.github.io/arcgis-clock/index.html?timeDisplay=000000&dateDisplay=ffffff&bgColor=32a852
```

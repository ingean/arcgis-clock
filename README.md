# Beskrivelse
Visning av tid og dato som enkelt kan bygges inn i ArcGIS Dashboards.

# URL Parametre
Webappliasjonen støtter ulike url-parametre for å endre utseende

## Themes
Applikasjonen har to innebygde fargetema som matcher ArcGIS Dashboards:
* theme-light (standard)
* theme-dark

`theme=theme-dark`

## Det er mulig å overstyre enkelte fargevalg individuelt
Angir farge på teksten som viser tidspunkt, f.eks:
`timeDisplay=D3D3D3`
`dateDisplay=D3D3D3`
`bgColor=32a852`

## Eksempel på bruk av url-parametre
>https://ingean.github.io/arcgis-clock/index.html?theme=theme-dark
>https://ingean.github.io/arcgis-clock/index.html?timeDisplay=000000&dateDisplay=ffffff&bgColor=32a852

# Investigación de Programación bajo plataformas abiertas.

## Doxygen:

### Características:

- Open Source 
- Puede generar la documentación en un archivo html
- El orden en que se forma la documentación está basada en comentarios dentro del código 
- Puede generar documentos en formato LaTex
- ayuda a ver la relación entre las distintas partes del código. 

### Lenguajes:

C++ sources, C, Objective-C, C#, PHP, Java, Python, IDL (Corba, Microsoft, and UNO/OpenOffice flavors), Fortran.

### Formatos:

Html y LaTex.

### Como se utiliza:

Se usa el comando doxygen -g <config-file>. Donde config-file es un archivo con opciones para configurar la documentacion.

### Ejemplo: 

Documentar() 

String Documentar (char * codigo)


## Sphinx:

### Características:

- Crea links para acceder rápidamente a las funciones, clases y glosario de términos.
- Puede usar templating como Jinja2, facilitando la conversión a formato HTML.
- Tiene una gran cantidad de extensiones.
- Genera índices automáticamente.
- Se puede hacer highlight a las partes importantes del texto.

### Lenguajes:

Python, C, C++, JavaScript, mathematics y otros lenguajes más a traves de extensiones.

### Formatos:

HTML, PDF, plain text, EPUB, TeX y manual pages.

### Como se utiliza:

sphinx-build [options] <sourcedir> <outputdir> [filenames …]

Donde sourcedir es la dirección del archivo fuente y outputdir la dirección del archivo de salida.

### Ejemplo:

Documentar (codigo)

Parametros: codigo (string)

Retorno: documentacion (string)


## Latex:

### Características:
- Utiliza comandos para crear archivos de texto como un lenguaje de programación visual.
- Se utiliza ampliamente en la comunidad científica por la diversidad de simbolos que ofrece
- Utiliza un sistema de templates para conseguir modularidad de la misma forma que lo hacen las funciones en un lenguaje de programación.
- Necesita un compilador.
- Se puede transformar a pdf y html.


### Lenguajes:
Utiliza su propio lenguaje llamado LaTex.

### Formatos:
Genera documentos pdf.

### Como se utiliza:

Se escribe comandos que empiezan con \ y las funciones toman valores dentro de corchetes {} 

## Markdown:

### Caracteristicas:

- Se inventó para tener una versión más legible de HTML.
- Aunque no logra reemplazar el html, se puede utilizar para crear rápidamente archivos web sencillos.
- No puede hacer llamadas a funciones con Javascript de la forma en que se hace en html.
- Utiliza comandos para generar archivos tanto pdf como html.
- Utiliza # como para indicar donde empiezan los comandos.

### Lenguajes:
Utiliza el lenguaje Markdown, el cual es un lenguaje propio.

### Formato:
Su formato de salida más común es HTML, también puede transformarse a pdf.

### Como se utiliza:

Se usan comandos que inician con # para crear elementos conocidos de HTML.

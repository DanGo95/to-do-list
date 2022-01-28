# to-do list
Es una aplicación para agregar, editar y eliminar tareas a realizar.

![ScreenShot](https://i.imgur.com/FkTsWVw.png)

## Uso del proyecto

### Pre-requisitos

Se necesita tener instalado:
``` Node.js``` 
``` Angular CLI``` 
``` SQL Server``` 
``` SQL Server Management Studio```
``` Visual Studio```  

### Instalación

Para tener el proyecto funcionando:  

* Primero se debe abrir la carpeta frontend y ejecutar el comando ``` npm install ``` para instalar las dependencias.
* Ir a la carpeta backend y abrir la solución en Visual Studio.
* Una vez abierto la solución, abrir el archivo `appsettings.json` e ingresar su cadena de conexión en la tercer línea de código.
* Dentro de Visual Studio, abrir la consola del Administrador de paquetes, que se encuentra en Herramientas>Administrador de paquetes NuGet>.
* En la consola, ejecutar el comando `update-database` para poder crear las tablas dentro de la base de datos.
* Ejecutar el proyecto con Visual Studio para poder iniciar el backend.
* Abrir con Powershell la carpeta frontend y ejecutar el comando `ng serve` para inicializar el proyecto de Angular.

Una vez realizado estos pasos, podrá acceder a la aplicación desde un navegador web en la dirección `http://localhost:4200/`. 

## Construido con

El proyecto fue construido con las siguientes herramientas de desarrollo:

* [Visual Studio Code](https://code.visualstudio.com) - Editor de codigo fuente
* [Angular](https://angular.io/) - Framework para aplicaciones web desarrollado en TypeScript
* [ASP.Net Core 5.0 web API](https://dotnet.microsoft.com/en-us/apps/aspnet/apis) - Para poder realizar el backend con C#
* [Microsoft SQL Server](https://www.microsoft.com/es-es/sql-server/sql-server-downloads) - Sistema de gestión de base de datos relacional
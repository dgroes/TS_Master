# TypeScript
*Repositorio de aprendizaje de TypeScript*

## Instalación para Compilar
El navegador no entiende **TypeScript**, solo **JavaScript** puro. Entonces `tsc` se encarga de tranformar el código `.ts` en `.js`.
Cuando se instala localmente nos aseguramos que el proyecto siempre use la misma versión de **TypeScript**.


## Uso con herramientas de Build
Herramientas como **Vite**, **Webpack**, **ts-node**, o **esbuild** suelen depender de la versión local de TypeScript, si no está instalada localmente, puede fallar o usar una versión insesperada.


## Fichero tsconfig
Ejecutando el comando `npx tsc --init` generará un fichero llamado `tsconfig.json`, este fichero le dice al compilador de TypeScript cómo debe funcionar, qué archivos debe compilar, a qué versión de JS debe transformarlos, si debe generar archivos `.d.ts`, etc.



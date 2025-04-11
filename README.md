# TypeScript 💙
*Repositorio de aprendizaje de TypeScript*

## 🚀 Instalación para Compilar
El navegador no entiende **TypeScript**, solo **JavaScript** puro. Entonces `tsc` se encarga de tranformar el código `.ts` en `.js`.
Cuando se instala localmente nos aseguramos que el proyecto siempre use la misma versión de **TypeScript**.


## 🏗️Uso con herramientas de Build
Herramientas como **Vite**, **Webpack**, **ts-node**, o **esbuild** suelen depender de la versión local de TypeScript, si no está instalada localmente, puede fallar o usar una versión insesperada.


## ⚙️ Fichero tsconfig
Ejecutando el comando `npx tsc --init` generará un fichero llamado `tsconfig.json`, este fichero le dice al compilador de TypeScript cómo debe funcionar, qué archivos debe compilar, a qué versión de JS debe transformarlos, si debe generar archivos `.d.ts`, etc.

## 📁 Organización y Separación de Archivos TypeScript y JavaScript
Cuando trabajas con TypeScript, es buena práctica **mantener separados los archivos fuente (.ts)** de los archivos compilados (.js). Esto mejora la organización del proyecto y evita confusiones al trabajar con distintos entornos (desarrollo vs producción).

### ⚙️ Configuración en `tsconfig.json`

Para lograrlo, debes configurar dos opciones clave:

```json
{
  "compilerOptions": {
    "rootDir": "./src",     // Carpeta donde están tus archivos .ts
    "outDir": "./dist",     // Carpeta donde se generarán los .js
    "strict": true,         // Recomendado: activa el modo estricto
    "target": "ES6",        // Versión JS a generar
    "module": "ES6",        // Tipo de módulos
    "esModuleInterop": true // Para importar módulos CommonJS
  },
  "include": ["src/**/*"]
}

```

### 🧱 Estructura de Proyecto Recomendada
```css
tu-proyecto/
├── src/           ← tus archivos TypeScript (.ts)
│   └── main.ts
├── dist/          ← se generarán aquí los .js al compilar
├── tsconfig.json
├── package.json

```

## 
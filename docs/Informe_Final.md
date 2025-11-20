# Proyecto Educativo Multimedia – Colegio Mentes Creativas

## Portada
- Nombre del proyecto: Aplicativo Educativo Multimedia (React + Vite)
- Integrantes del grupo: [Completar]
- Profesor: Mg. Gustavo Sánchez Rodríguez
- Programa: [Completar]
- Ciudad: [Completar]
- Fecha de entrega: 11 de noviembre de 2025

## Introducción
- Proyecto base: Frontend React + Vite con TypeScript, Tailwind, pruebas con Jest.
- Propósito: Documentar calidad, pruebas y despliegue siguiendo ISO/IEC 25010.

## Escenario Asignado y Justificación
- Escenario: Aplicación multimedia para estudiantes de 4° y 5° en matemáticas, ciencias naturales y pensamiento lógico.
- Justificación: Interfaz sencilla, recursos multimedia (animación y 3D) y ejercicios prácticos para aprendizaje lúdico.

## Normas y Modelos de Calidad Aplicados
- Modelo: ISO/IEC 25010.
- Característica aplicada: Eficiencia de rendimiento.
- Subatributos:
  - Comportamiento temporal: medir tiempos de respuesta y renderizado.
  - Capacidad: comportamiento bajo carga concurrente.

## Métricas de Calidad Definidas
- TTR (Time To Render) de vistas clave `< 1.5 s` en Vercel.
- P95 de respuesta bajo 20–50 usuarios concurrentes `< 5 s`, error `< 1%`.
- Método: mediciones con Lighthouse/JMeter y registros de CI.

## Proceso de Despliegue en Vercel
- Conectar repositorio GitHub.
- Framework: `Vite`. Comando: `npm run build`. Directorio: `dist`.
- URL pública: [Completar]
- Evidencias: capturas del dashboard de Vercel y sitio operativo.
 - Última actualización de documento: 2025-11-12

## Pruebas Unitarias Implementadas
- Herramientas: Jest + React Testing Library (`jest.config.js:2-9`).
- Archivos clave: `src/setupTests.ts` configura `jest-dom` y mocks.
- Casos agregados:
  - `src/views/Matematicas.test.tsx`: guía, calculadora y tablas.
  - `src/views/Ciencias.test.tsx`: guía y video, fallback 3D en pruebas.
  - `src/views/Logico.test.tsx`: secuencia y puntaje.
- Ejecución: `npm test`. CI: `.github/workflows/unitaria.yml:40-53`.

## Automatización de CI/CD (GitHub Actions)
- Flujo: instalar dependencias (`npm ci`), `type-check`, `lint`, `test --ci`, `build`.
- Matriz Node: 18/20/22.
- Artifact: `dist` publicado.
- Evidencias: capturas de jobs en GitHub Actions.

## Pruebas de Integración con Postman
- Endpoints públicos para contenido educativo:
  - Matemáticas: `http://numbersapi.com/random/math`.
  - Ciencias: `https://api.open-meteo.com/v1/forecast?...`.
  - Sociales: `https://restcountries.com/v3.1/all`.
- Entregable: colección Postman exportada y resultados (latencia/estructura).

## Pruebas de Sistema con JMeter
- Plan: 10/25/50 usuarios, ramp-up 60 s; rutas `/`, `/matematicas`, `/ciencias`, `/logico`.
- Métricas: P50/P95 tiempos, throughput, error %.
- Evidencias: gráficas y CSV; análisis vs métricas definidas.

## Pruebas de Implantación
- Validación del despliegue en producción (Vercel) y funcionamiento de vistas.
- Navegación fluida sin errores de consola.

## Pruebas de Aceptación – Checklist
| ID | Criterio | Cumple | Observaciones |
|---|---|---|---|
| 1 | Despliegue correcto en Vercel | [ ] | |
| 2 | Carga `< 3s` | [ ] | |
| 3 | Endpoints devuelven datos | [ ] | |
| 6 | Navegación fluida | [ ] | |
| 7 | Sin errores visibles en consola | [ ] | |
| 8 | Unitarias pasan en pipeline | [ ] | |
| 9 | Integración Postman exitosa | [ ] | |
| 10 | JMeter dentro de límites | [ ] | |

## Análisis de Resultados
- Resumen de tiempos y estabilidad observada.
- Áreas de mejora y siguientes pasos.

## Conclusiones
- Aprendizajes y evaluación global del proceso.

## Referencias Bibliográficas
- ISO/IEC 25010.
- Documentación React, Vite, Jest, Testing Library, Three.js.

## Evidencia del Flujo de Trabajo (Mermaid)

```mermaid
flowchart TD
    A[Inicio del Proyecto React con Vite] --> B[Aplicar modelo ISO/IEC 25010]
    B --> C[Seleccionar dos subatributos de calidad]
    C --> D[Definir métricas y criterios de aceptación]
    D --> E[Implementar funcionalidades del frontend]
    E --> F[Pruebas Unitarias]
    F --> G[Automatización CI-CD]
    G --> H[Pruebas de Integración]
    H --> I[Pruebas de Sistema]
    I --> J[Pruebas de Implantación]
    J --> K[Pruebas de Aceptación]
    K --> L[Análisis de Resultados y Documentación Final]

    subgraph PU[Pruebas Unitarias]
        F1[Jest y React Testing Library]
        F2[Validación de componentes y funciones individuales]
        F3[Ejecución automática en GitHub Actions]
        F --> F1 --> F2 --> F3
    end

    subgraph CI[Automatización CI-CD]
        G1[Configuración de GitHub Actions]
        G2[Scripts npm install, npm test y npm run build]
        G3[Integración continua y despliegue automático]
        G --> G1 --> G2 --> G3
    end

    subgraph PI[Pruebas de Integración]
        H1[Uso de Postman o APIs simuladas]
        H2[Validación del flujo entre componentes]
        H3[Registro y documentación de resultados]
        H --> H1 --> H2 --> H3
    end

    subgraph PS[Pruebas de Sistema]
        I1[JMeter para carga y rendimiento]
        I2[Simulación de usuarios concurrentes en Vercel]
        I3[Análisis de tiempos de respuesta y errores]
        I --> I1 --> I2 --> I3
    end

    subgraph PIM[Pruebas de Implantación]
        J1[Verificación del despliegue en Vercel]
        J2[Comprobación de funcionalidades en producción]
        J --> J1 --> J2
    end

    subgraph PA[Pruebas de Aceptación]
        K1[Checklist de criterios de aceptación]
        K2[Validación de cumplimiento funcional y de calidad]
        K3[Observaciones y mejoras]
        K --> K1 --> K2 --> K3
    end

    classDef main fill:#0ea5e9,stroke:#0369a1,color:#fff,font-weight:bold;
    classDef sub fill:#f1f5f9,stroke:#64748b,color:#111;
    class A,B,C,D,E,L main;
    class F,G,H,I,J,K,F1,F2,F3,G1,G2,G3,H1,H2,H3,I1,I2,I3,J1,J2,K1,K2,K3 sub;
```

---

## Guía de Uso para Niños – Módulos

### Matemáticas (`src/views/Matematicas.tsx`)
- Objetivo: practicar operaciones y tablas.
- Cómo usar:
  - Escribe dos números y elige la operación.
  - Presiona `Calcular` para ver el resultado.
  - Genera la tabla del número que elijas con `Generar`.

### Ciencias Naturales (`src/views/Ciencias.tsx`)
- Objetivo: explorar formas en 3D y ver un video.
- Cómo usar:
  - Usa los botones para cambiar el color del cubo.
  - Observa el video informativo y comenta qué aprendiste.
  - En pruebas, si no se ve el 3D, aparece un mensaje de guía.

### Pensamiento Lógico (`src/views/Logico.tsx`)
- Objetivo: completar patrones de números.
- Cómo usar:
  - Observa la secuencia y elige el siguiente número.
  - Suma puntos al acertar, se guardan automáticamente.
  - Reinicia para comenzar de nuevo.
## Explicación del Código (para exposición)
- Entrada y enrutamiento
  - `src/App.tsx:6-8`: envuelve la app en `BrowserRouter` y renderiza `AppRoutes`.
  - `src/routes/AppRoutes.tsx:15-20`: define rutas SPA: `/` (Home), `/matematicas`, `/ciencias`, `/logico` dentro del `Layout`.
- Layout y navegación
  - `src/components/Layout.tsx:7-19`: estructura general con `Sidebar`, `Navbar` y `<Outlet />` para cargar cada vista.
  - `src/components/Sidebar.tsx:11-16`: menú con las opciones del proyecto (Inicio, Matemáticas, Ciencias Naturales, Pensamiento Lógico).
  - `src/components/Navbar.tsx:17-23`: botón de tema que alterna modo claro/oscuro y persiste en `localStorage`.
- Home y tarjetas
  - `src/views/HomePage.tsx`: hero con título y descripción; usa `HeroCards`.
  - `src/components/HeroCards.tsx:4-21,23-31`: tarjetas animadas (`framer-motion`), overlay para contraste y enlaces a módulos.
- Matemáticas
  - `src/views/Matematicas.tsx:7-29`: guía rápida y dos bloques: calculadora y tablas.
  - `src/components/CalculadoraBasica.tsx:9-31`: lógica aritmética y validaciones (números válidos, división por cero).
  - `src/components/MultiplicationTable.tsx:8-13,35-47`: genera y muestra la tabla del número elegido.
- Ciencias Naturales (multimedia)
  - `src/views/Ciencias.tsx:22-28,33-35`: video educativo y componente 3D interactivo.
  - `src/views/ThreeDemoView.tsx:61-87`: crea figura según selector (cubo, esfera, cono, toro, plano, tetraedro).
  - `src/views/ThreeDemoView.tsx:93-103`: animación con control de velocidad.
  - `src/views/ThreeDemoView.tsx:125-134`: cambio de color y color aleatorio.
  - `src/views/ThreeDemoView.tsx:171-241`: toolbar, selector de figuras y contenedor del canvas.
- Pensamiento Lógico
  - `src/views/Logico.tsx:10-15,21-28`: calcula la opción correcta, actualiza secuencia y puntaje persistente.
  - `src/views/Logico.tsx:41-55,76-92`: guía y UI de interacción (botones de opciones y reinicio).
- Pruebas unitarias y configuración
  - `src/setupTests.ts:3,15-27,29-37,39-51`: configuración de entorno de pruebas (jest-dom, `matchMedia`, `localStorage`).
  - `src/setupTests.ts:53-60`: mock de `ResizeObserver` para que las pruebas en CI no fallen en jsdom.
- CI/CD (GitHub Actions)
  - `/.github/workflows/unitaria.yml:28-60`: matriz Node 18/20/22; pasos `npm ci`, `type-check`, `lint`, `test --ci`, `build` y publicación de `dist`.
  - `/.github/workflows/ci.yml:23-52`: pipeline paralelo con misma secuencia para evidencias.
- Despliegue (Vercel)
  - `vercel.json`: rewrites SPA para que rutas internas (`/matematicas`, `/ciencias`, `/logico`) funcionen en producción.

---

## Explicación del Código (actual)
- Entrada y enrutamiento
  - `src/App.tsx:1-24`: envuelve la app y renderiza `AppRoutes`.
  - `src/routes/AppRoutes.tsx:15-22`: rutas: `/` (Home), `/matematicas/descomposicion`, `/ciencias-naturales`, `/ciclo-del-agua`, `/ciencias-sociales`.
- Layout y navegación
  - `src/components/Layout.tsx:1-40`: `Navbar`, `Sidebar` y `<Outlet />`.
  - `src/components/Sidebar.tsx:41-101`: acordeón de grupos y enlaces.
  - `src/components/Navbar.tsx:25-47`: branding “API Educativa para Niños · Sebastian Coral & Daniela Torres” y botón de tema.
- Home
  - `src/views/HomePage.tsx:23-49`: autores, botones con rutas y guía para niños.
- Matemáticas
  - `src/views/Descomposicion.tsx:31-149`: selector de figuras, elementos y fórmula de Euler.
- Ciencias Naturales
  - `src/views/CicloDelAgua.tsx`: partículas, controles y simulación.
- Ciencias Sociales
  - `src/views/CienciasSociales.tsx`: globo interactivo y marcadores.
- Pruebas unitarias y configuración
  - `jest.config.js:1-13`: ignora `e2e` y `.migracion_tmp/`.
  - `src/setupTests.ts`: entorno de pruebas y mocks.

# Proyecto Angular - Estructura de Carpetas

Este proyecto está organizado de acuerdo con las buenas prácticas de Angular, dividiendo la lógica en diferentes módulos y componentes. A continuación se describe cada sección de la estructura de carpetas y su propósito.

## Estructura
   ```bash
   src/
   │
   └── app/
      ├── pages/
      │   ├── home/
      │   │   ├── components/
      │   │   │   ├── ui-data-contact/       # Componentes relacionados con la sección de contacto
      │   │   │   ├── ui-form/               # Formulario de la página home
      │   │   ├── home.component.css         # Estilos de la página home
      │   │   ├── home.component.html        # Plantilla de la página home
      │   │   ├── home.component.spec.ts     # Pruebas de la página home
      │   │   ├── home.component.ts          # Lógica de la página home
      │   │   ├── index.ts                   # Exportación de componentes del módulo home
      │   │
      │   └── list/
      │       ├── list.component.css         # Estilos del componente list
      │       ├── list.component.html        # Plantilla del componente list
      │       ├── list.component.spec.ts     # Pruebas del componente list
      │       ├── list.component.ts          # Lógica del componente list
      │       ├── index.ts                   # Exportación del módulo list
      │
      ├── app.component.css                  # Estilos globales de la aplicación
      ├── app.component.html                 # Plantilla principal de la aplicación
      ├── app.component.spec.ts              # Pruebas del componente principal
      ├── app.component.ts                   # Lógica del componente principal
      ├── app.config.ts                      # Configuraciones globales
      ├── app.config.server.ts               # Configuraciones relacionadas con el servidor
      ├── app.routes.ts                      # Configuraciones de rutas
      │
      └── shared/
         ├── constants/                     # Constantes globales
         ├── pipe/                          # Pipes personalizados
         ├── services/                      # Servicios compartidos
         ├── types/                         # Tipos de datos TypeScript
         ├── validators/                    # Validaciones personalizadas


## Descripción de Carpetas y Archivos

### **`app/pages/home/`**
Contiene todos los componentes y la lógica relacionada con la página principal del proyecto. Incluye:

- **`components/ui-data-contact/`**: Componentes específicos para manejar la información de contacto.
- **`components/ui-form/`**: Componentes y lógica relacionados con formularios en la página principal.

### **`app/pages/list/`**
Módulo dedicado a la lista de usuarios u otro tipo de elementos. Contiene los estilos, plantillas y pruebas relacionadas con la funcionalidad de listar elementos.

### **`app/shared/`**
Este directorio contiene todos los recursos compartidos entre diferentes módulos y componentes de la aplicación. Incluye:

- **`constants/`**: Definición de constantes globales.
- **`pipe/`**: Pipes personalizados para la transformación de datos.
- **`services/`**: Servicios que pueden ser inyectados en diferentes partes de la aplicación.
- **`types/`**: Definición de tipos y modelos de datos utilizados en la aplicación.
- **`validators/`**: Validadores personalizados para formularios.

### **Archivos Clave**

- **`app.component.*`**: Define el componente principal que maneja la lógica y la vista global de la aplicación.
- **`app.config.ts` y `app.config.server.ts`**: Contienen las configuraciones generales y específicas del servidor respectivamente.
- **`app.routes.ts`**: Define las rutas de la aplicación utilizando `RouterModule`.


## Cómo ejecutar el proyecto

1. **Instalar las dependencias**:
   ```bash
   npm install

2. **arrancar la app**:
   ```bash
   ng serve
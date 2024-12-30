# Task Manager - Frontend

Este es el frontend del proyecto **Task Manager**, una aplicación para gestionar tareas, desarrollada utilizando **React.js** y **Tailwind CSS**. La interfaz es interactiva, responsiva y permite a los usuarios crear, visualizar, actualizar y eliminar tareas de forma sencilla.

## 🛠️ Tecnologías utilizadas

- **React.js**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de diseño para estilos rápidos y responsivos.
- **React Toastify**: Para notificaciones elegantes y personalizables.
- **SweetAlert2**: Para modales atractivos y funcionales.
- **Vite**: Herramienta para empaquetar la aplicación.

## 🚀 Funcionalidades principales

- **Crear tareas**: Los usuarios pueden agregar nuevas tareas mediante un formulario.
- **Editar tareas**: Actualiza el título o descripción de una tarea.
- **Eliminar tareas**: Elimina tareas seleccionadas con confirmación de acción.
- **Marcar como completada**: Usa un checkbox para cambiar el estado de la tarea (Pendiente/Completada).
- **Filtrar tareas**: Filtra tareas según su estado: Todas, Completadas o Pendientes.
- **Notificaciones**: Usa notificaciones y alertas visuales para mejorar la experiencia del usuario.

## 🌈 Diseño

- Interfaz moderna y minimalista basada en **Tailwind CSS**.
- Diseño responsivo que se adapta a cualquier dispositivo.
- **Card principal**: Incluye un título, opciones de filtro, y un botón para abrir el modal de creación de tareas.
- **Modal**: Para agregar nuevas tareas.

## 🖥️ Instalación y configuración

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/21martisch/taskManager-frontend.git
   cd taskManager-frontend
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta la aplicación en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construye para producción (opcional):**
   ```bash
   npm run build
   ```

##  Estructura del proyecto

```
src/
├── components/
│   ├── TaskForm.jsx      // Formulario para agregar tareas
│   ├── TaskList.jsx      // Lista de tareas
│   ├── TaskItem.jsx      // Componente individual de tarea
│   ├── TaskFilter.jsx    // Filtro para las tareas
├── context/
│   ├── TaskProvider.jsx  // Contexto global para manejar las tareas
├── App.jsx               // Componente principal de la aplicación
├── main.jsx              // Punto de entrada principal
└── styles/
    └── index.css         // Estilos globales
```

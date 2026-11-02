# Plan de implementación PetCare

Plan de trabajo basado en el archivo de Figma y en la estructura actual del proyecto. El orden es completar primero el sistema visual y después avanzar pantalla por pantalla.

## Estado

- [x] **System design / UI kit**: tokens visuales y componentes reutilizables implementados; catálogo disponible en `/ui-kit`.
- [x] **Landing**: portada implementada para escritorio y móvil, con navegación, búsqueda, categorías y sección de confianza.
- [x] **Inventario de pantallas Figma**: landing, login, registro, home tutor, registro de mascota, servicios (`3:1597`, `3:1887`), reservar (`3:2072`, `3:2261`), confirmación (`3:2393`, `3:2486`) y agenda del prestador (`5:2577`, `5:2816`). Cada par corresponde a escritorio y móvil.
- [x] **Plan por pantalla**: una ruta y un commit independiente por pantalla. Orden: login, registro, home tutor, drawer de mascota, home prestador, servicios, reserva y confirmación.
- [x] **Login** (`/login`): formulario responsivo de acceso, mostrar/ocultar contraseña y entrada al dashboard de demostración. Commit: `feat: implement login screen`.
- [x] **Registro** (`/register`): formulario responsivo con selector tutor/prestador, validación y guía de seguridad de contraseña. Commit: `feat: implement register screen`.
- [x] **Home autenticado** (`/dashboard`): navegación de tutor, tarjetas Zeus/Luna, recordatorios de salud y consejo descartable. Commit: `feat: implement authenticated dashboard`.
- [x] **Registrar mascota** (`/dashboard/pets/new`): drawer responsivo sobre el dashboard, con carga local de foto, campos validados y observaciones. Commit: `feat: implement pet registration drawer`.
- [x] **Home de prestador** (`/provider/dashboard`): agenda diaria, estados de citas, acciones y resumen operativo. Commit: `feat: implement provider dashboard`.
- [x] **Servicios** (`/servicios`): filtros, resultados de prestadores, favoritos, ordenamiento y acceso a reservar. Commit: `feat: implement services catalog`.
- [x] **Reservar** (`/reservar`): seleccionar mascota, fecha y hora, y transferir el detalle a confirmación. Commit: `feat: implement booking flow`.
- [x] **Confirmación** (`/confirmacion`): mostrar código, estado, resumen de reserva y acciones de comprobante. Commit: `feat: implement booking confirmation`.
- [x] **Revisión visual final**: las vistas integradas se revisaron en escritorio y móvil.

## Próxima tarea

Las vistas del inventario están integradas en escritorio y móvil y cada flujo tiene un commit independiente.

## Criterio de cierre por pantalla

- La estructura y el contenido corresponden al frame de Figma.
- Reutiliza tokens y componentes existentes cuando aplica.
- Incluye los estados e interacciones visibles del diseño.
- Se revisa visualmente en escritorio y móvil cuando el diseño tiene ambas variantes.

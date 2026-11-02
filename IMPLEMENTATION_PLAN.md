# Plan de implementación PetCare

Plan de trabajo basado en el archivo de Figma y en la estructura actual del proyecto. El orden es completar primero el sistema visual y después avanzar pantalla por pantalla.

## Estado

- [x] **System design / UI kit**: tokens visuales y componentes reutilizables implementados; catálogo disponible en `/ui-kit`.
- [x] **Landing**: portada implementada para escritorio y móvil, con navegación, búsqueda, categorías y sección de confianza.
- [x] **Inventario de pantallas Figma**: login (`1:607`, `1:726`), registro (`1:344`, `1:513`), home tutor (`2:913`, `2:740`), registro de mascota en drawer (`2:315`, `2:564`) y agenda del prestador (`5:2577`, `5:2816`). Cada par corresponde a escritorio y móvil.
- [x] **Plan por pantalla**: una ruta y un commit independiente por pantalla. Orden: login, registro, home tutor, drawer de mascota, home prestador.
- [x] **Login** (`/login`): formulario responsivo de acceso, mostrar/ocultar contraseña y entrada al dashboard de demostración. Commit: `feat: implement login screen`.
- [x] **Registro** (`/register`): formulario responsivo con selector tutor/prestador, validación y guía de seguridad de contraseña. Commit: `feat: implement register screen`.
- [x] **Home autenticado** (`/dashboard`): navegación de tutor, tarjetas Zeus/Luna, recordatorios de salud y consejo descartable. Commit: `feat: implement authenticated dashboard`.
- [x] **Registrar mascota** (`/dashboard/pets/new`): drawer responsivo sobre el dashboard, con carga local de foto, campos validados y observaciones. Commit: `feat: implement pet registration drawer`.
- [ ] **Home de prestador** (`/provider/dashboard`): agenda diaria, estados de citas, acciones y resumen operativo.
- [ ] **Revisión visual final**: comparar cada pantalla implementada con escritorio y móvil y corregir diferencias.

## Próxima tarea

Continuar con home de prestador y guardar un commit independiente.

## Criterio de cierre por pantalla

- La estructura y el contenido corresponden al frame de Figma.
- Reutiliza tokens y componentes existentes cuando aplica.
- Incluye los estados e interacciones visibles del diseño.
- Se revisa visualmente en escritorio y móvil cuando el diseño tiene ambas variantes.

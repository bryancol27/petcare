# PetCare Front

Proyecto web de PetCare construido con Next.js App Router, React y Tailwind CSS 4.

## Estado del proyecto

Consulta el [plan de implementación](IMPLEMENTATION_PLAN.md) para ver las tareas completadas y pendientes.

La landing está en `/`. El catálogo del UI kit está en `/ui-kit`.

## UI kit

El sistema visual de Figma está implementado como tokens globales y componentes React reutilizables. En `/ui-kit` se pueden revisar la paleta, tipografía, botones, controles, chips, estados y tarjetas de datos.

Componentes base en `src/components/ui`:

- `Button`: variantes, tamaños, foco y estado deshabilitado.
- `TextField` y `SelectField`: etiquetas, campos requeridos, ayuda y errores accesibles.
- `Badge` y `StatusBadge`: estados semánticos de citas.
- `Chip` y `ChipGroup`: filtros seleccionables.
- `PetProfileCard` y `ServiceCard`: patrones de tarjeta de datos.

Los colores, tipografías, radios y sombras se definen en `src/app/globals.css`. El ejemplo fotográfico del servicio se guarda localmente en `public/assets`.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la landing. El catálogo del UI kit está en [http://localhost:3000/ui-kit](http://localhost:3000/ui-kit).

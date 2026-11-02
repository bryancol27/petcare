# Validación del prototipo y maquetación inicial — PetCare

## Nota sobre la evidencia de usabilidad

**Este documento no reporta una prueba real.** A la fecha de su elaboración no se han registrado sesiones con usuarios objetivo ni observaciones empíricas. La sección de escenarios simulados es únicamente un ejemplo de cómo documentar hallazgos y mejoras; no debe presentarse como evidencia obtenida. Para el entregable académico, se deben reemplazar esos ejemplos por notas, resultados y decisiones de diseño de sesiones reales.

## Referencias del prototipo

- **Prototipo y pantallas en Figma:** [Pegar aquí el enlace compartible de Figma](PEGAR_AQUI_EL_ENLACE_DE_FIGMA)
- **Guía de estilos UI Kit:** ver [README_UI_KIT.md](README_UI_KIT.md).

## Alcance de las pantallas maquetadas

| Módulo | Ruta local | Propósito |
|---|---|---|
| Landing | `/` | Presentar PetCare e iniciar una búsqueda de servicios. |
| Acceso | `/login` | Mostrar el formulario de inicio de sesión. |
| Registro | `/register` | Elegir tipo de cuenta y completar el registro de demostración. |
| Inicio del tutor | `/dashboard` | Consultar las mascotas y recordatorios de salud. |
| Registro de mascota | `/dashboard/pets/new` | Abrir el formulario de registro desde el panel del tutor. |
| Servicios | `/servicios` | Explorar prestadores y filtrar u ordenar resultados de muestra. |
| Reserva | `/reservar` | Seleccionar mascota, fecha y horario disponibles en el prototipo. |
| Confirmación | `/confirmacion` | Revisar el resumen guardado para la reserva de demostración. |
| Inicio del prestador | `/provider/dashboard` | Consultar una agenda de muestra y representar estados de citas. |

## Pruebas de usabilidad: protocolo propuesto

### Objetivo

Observar si una persona puede completar tareas habituales del MVP sin ayuda, comprender los estados de la interfaz y encontrar cómo continuar o recuperarse de un error.

### Perfiles sugeridos

Invitar personas que correspondan a los perfiles del producto: tutores de mascotas y prestadores de servicios veterinarios o de cuidado animal. Como piloto académico se puede convocar un grupo pequeño y registrar cuántas personas participaron y su perfil general, sin incluir datos personales innecesarios. Esta recomendación no significa que esas sesiones ya se hayan realizado.

### Guion de tareas

| ID | Perfil | Tarea | Criterio observable de éxito | Resultado real |
|---|---|---|---|---|
| T1 | Tutor/a | Encontrar un servicio de cuidado para su mascota en su zona. | Llega al catálogo y reconoce el prestador, servicio y precio. | Pendiente de sesión |
| T2 | Tutor/a | Reservar un horario para Zeus y cambiar la fecha u hora antes de continuar. | Selecciona mascota, fecha y franja, identifica los horarios no disponibles y llega al resumen. | Pendiente de sesión |
| T3 | Tutor/a | Registrar una mascota nueva desde el panel. | Encuentra la acción, comprende los campos requeridos y recibe una respuesta clara al guardar. | Pendiente de sesión |
| T4 | Usuario/a | Iniciar sesión o crear una cuenta de tutor o prestador. | Distingue las opciones, completa los campos y entiende el siguiente paso. | Pendiente de sesión |
| T5 | Prestador/a | Revisar una solicitud y localizar las acciones para responder. | Identifica el estado pendiente y las acciones de confirmar o reprogramar. | Pendiente de sesión |

### Datos que deben recogerse durante sesiones reales

- Tarea completada, completada con ayuda o no completada.
- Tiempo aproximado, errores y retrocesos observados.
- Comentarios textuales relevantes, evitando incluir nombres o datos sensibles.
- Dudas sobre etiquetas, controles, estados o navegación.
- Valoración posterior de facilidad/confianza, si se incluye una pregunta breve.
- Capturas del prototipo solo con autorización de las personas participantes y sin datos identificables.

No se han calculado porcentajes de éxito, tiempos promedio ni puntuaciones SUS: no hay datos de sesiones para respaldarlos.

## Ejemplo de hallazgos simulados — no son resultados reales

La siguiente tabla ilustra cómo convertir observaciones en cambios de diseño. **Los problemas y cambios son hipotéticos; deben confirmarse, corregirse o eliminarse después de probar con usuarios.**

| Observación hipotética | Riesgo para la experiencia | Iteración que se podría evaluar |
|---|---|---|
| Una persona no distingue una franja ocupada de una franja seleccionable. | Podría intentar reservar un horario no disponible. | Combinar texto de estado, patrón visual y estado deshabilitado; revisar contraste y foco. |
| Alguien busca el acceso a “Mis citas” después de confirmar. | Puede no saber dónde consultar la solicitud. | Mantener una acción principal “Ir a Mis Citas” y describir con claridad el estado de la reserva. |
| Una persona no identifica qué campos son obligatorios al registrar una mascota. | Puede enviar un formulario incompleto o abandonar. | Marcar campos requeridos, asociar mensajes de error con el campo y conservar el contenido ingresado. |
| Un prestador confunde una solicitud pendiente con una cita confirmada. | Puede interpretar incorrectamente la agenda. | Reforzar etiquetas y colores de estado, con texto e icono además del color. |

## Cómo cerrar la validación real

1. Reclutar participantes que correspondan a los perfiles de tutor y prestador.
2. Explicar que se evalúa el prototipo, no a la persona; solicitar consentimiento para tomar notas.
3. Dar las tareas sin indicar dónde hacer clic y observar sin dirigir.
4. Registrar los resultados en la columna “Resultado real” y conservar notas anonimizadas.
5. Priorizar problemas por frecuencia, impacto y facilidad de corrección.
6. Iterar el prototipo en Figma y actualizar la maquetación HTML/CSS.
7. Repetir las tareas afectadas y documentar qué cambió y qué evidencia respalda el cambio.

## Maquetación HTML/CSS: explicación técnica

La interfaz está construida con **Next.js App Router y React**. Cada carpeta dentro de `src/app` representa una ruta; los archivos `page.js` componen la pantalla correspondiente. Los elementos reutilizables se encuentran en `src/components`, incluyendo controles visuales, componentes de autenticación y piezas de la landing.

### Organización de estilos y recursos

- `src/app/globals.css` define estilos globales, variables de color, tipografía base y reglas comunes.
- Los estilos de pantallas se mantienen en hojas CSS como `auth.css`, `services.css`, `booking.css`, `confirmation.css`, `dashboard.css` y `provider.css`.
- Los nombres de clase por módulo mantienen prefijos como `services-`, `booking-` o `provider-` para reducir colisiones entre pantallas.
- Los recursos estáticos —fotografías e iconos— viven en `public/assets` y se muestran desde rutas `/assets/...`; las imágenes se integran con `next/image` donde corresponde.
- Los puntos de quiebre con `@media` reorganizan navegación, tarjetas, formularios y paneles para móvil y escritorio.

### Arquitectura de interfaz

```text
src/app/
├── page.js                         Landing
├── layout.js                       Layout global y fuentes
├── login/page.js                   Acceso
├── register/page.js                Registro
├── dashboard/page.js              Panel tutor
├── dashboard/pets/new/page.js     Registro de mascota
├── servicios/page.js              Catálogo
├── reservar/page.js                Selección de reserva
├── confirmacion/page.js            Resumen de confirmación
└── provider/dashboard/page.js      Panel prestador

src/components/
├── landing/                        Cabecera y búsqueda
├── auth/                           Estructura compartida de acceso/registro
└── ui/                             Botones, campos, badges y chips

public/assets/                      Imágenes e iconos
```

### Interacción implementada en esta maqueta

React mantiene estados locales para controles de interfaz como filtros, ordenamiento, favoritos, selección de mascota, fecha y hora, mensajes y estados visuales de citas. El flujo de reserva pasa el prestador, servicio y precio desde el catálogo; los datos seleccionados se guardan en `localStorage` para mostrarlos en la pantalla de confirmación.

**La maqueta no se conecta a un backend.** El inicio de sesión y registro son demostrativos; el catálogo usa datos estáticos; el panel del tutor y el panel del prestador presentan contenido de muestra; la confirmación no crea una cita real ni envía correos. `localStorage` solo conserva la reserva de demostración en el navegador actual. El botón de comprobante abre la opción de impresión del navegador.

## Coherencia con Figma y límites de esta fase

Las pantallas implementadas se compararon visualmente con los frames de escritorio y móvil del archivo de Figma. Esa revisión visual ayuda a comprobar estructura y adaptación, pero no sustituye una prueba de usabilidad con personas objetivo. Las tareas propuestas deben ejecutarse sobre el prototipo navegable; cualquier mejora derivada de las sesiones debe reflejarse tanto en Figma como en la maquetación inicial.

## Lista de cierre para el informe PDF

- [ ] Sustituir el marcador por el enlace real y compartible de Figma.
- [ ] Realizar sesiones de usabilidad con tutores y prestadores reales.
- [ ] Reemplazar la sección de hallazgos hipotéticos con observaciones verificadas.
- [ ] Añadir evidencias autorizadas y anonimizadas de las sesiones.
- [ ] Registrar las iteraciones aplicadas al prototipo y su justificación.
- [ ] Adjuntar este README y la guía UI Kit al documento PDF final.

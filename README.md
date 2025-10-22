# Blog personal — Cundalf

Repositorio con el código fuente de mi blog personal, generado con Hugo. Aquí están las plantillas, el contenido y la configuración.

Qué contiene
- Código fuente del sitio (contenido en `content/`, layouts, partials, etc.).
- Configuración en `config/`.

Comandos básicos (desde la raíz del repo):

```bash
# Servir en local (ver borradores)
hugo server -D

# Generar sitio estático en /public
hugo

# Generar sitio para producción:
hugo --minify

# Para limpiar el proyecto si algo se rompe (ejecutar localmente)
hugo --gc --cleanDestinationDir
```

Licencia
Este proyecto está bajo licencia MIT. Ver `LICENSE`.

Atribución y contenido
- El template original incluyó trabajo de terceros (ver `LICENSE`).
- Si reutilizás contenido de este repositorio (tutoriales, posts), se agradece mantener una mención de autoría a "Cundalf".

Notas adicionales

- Devcontainer: mantengo `.devcontainer/` por mi servidor personal. Si abrís el proyecto en Codespaces o VS Code con Remote Containers, se activará el entorno.

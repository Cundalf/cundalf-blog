---
title: "Vibe Coding: El arte de decirle 'dale' a todo lo que escupe la IA"
description: "Qué es vibe coding, por qué todos hablan de esto, y por qué el tipo que acaba de escribir sobre seguridad en IA tiene sentimientos encontrados."
slug: vibe-coding
date: 2026-04-03 00:00:00+0000
featuredImage: cover.png
featuredImagePreview: cover.png
categories:
    - AI
tags:
    - ai
    - vibe-coding
    - desarrollo
---

## Confesiones de un vibe coder

La otra noche me senté frente a la compu, abrí el editor, le describí a la IA lo que necesitaba y en 20 minutos tenía algo andando. No revisé ni la mitad del código. ¿Saben qué? Funcionaba. Me tomé un mate, lo probé un par de veces, y lo dejé ahí. Satisfecho. Dopamina inyectada directo a la vena.

Ahora, el plot twist: yo soy el mismo tipo que hace una semana les escribió [un post entero sobre seguridad en IA](/seguridad-ai/), hablando de prompt injection, OWASP Top 10 para LLMs, y la importancia de no confiar ciegamente en los modelos. La ironía no se me escapa. De hecho, me río solo mientras escribo esto.

¿Soy un hipócrita? Puede ser. ¿Lo volvería a hacer? Depende. Y de eso se trata este post.

---

## Ponele que te lo explico

Febrero de 2025. **Andrej Karpathy** —cofundador de OpenAI, ex-director de IA en Tesla, y una de las voces más influyentes del mundo AI— tira un tweet que rompe todo:

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."

El tipo básicamente dijo: "Le hablo a la IA, acepto todo lo que genera, ni miro los diffs, y cuando hay un error le pego el stack trace sin comentar nada. Y funciona." El tweet tuvo más de 4.5 millones de vistas y el término fue elegido **Palabra del Año 2025 por el Collins Dictionary**. Así que no, no estamos hablando de un meme: esto ya es un cambio de paradigma con nombre y apellido.

En la práctica: le decís a la IA lo que querés, la IA te escupe código, y vos le das "aceptar" como quien firma los términos y condiciones de una app sin leer un carajo. Eso es vibe coding en su forma más pura. Tu rol cambia: dejás de ser quien escribe cada línea para convertirte en quien **guía, valida e itera**. Es como tener un dev junior extremadamente rápido al lado tuyo: produce mucho, pero necesita dirección.

Las herramientas sobran: **Cursor**, **GitHub Copilot**, **Claude Code**, **ChatGPT**, **Windsurf**, **Replit Agent**, **Lovable**, **Bolt**... y la lista crece cada semana. Algunas te autocompletan líneas, otras te generan archivos enteros, y las más nuevas directamente te arman proyectos de cero si les describís qué querés.

Ahora, hay un espectro. En un extremo tenés al dev que usa la IA como un autocomplete sofisticado (revisa cada sugerencia, entiende lo que acepta). En el otro extremo tenés al vibe coder puro: no toca una línea, no lee el código, si funciona, funciona. La mayoría estamos en algún punto intermedio, aunque no todos lo admitan.

Pero ojo: que Karpathy pueda darse el lujo de "olvidarse que el código existe" no significa que vos también debas hacerlo sin pensar. Él mismo aclaró que lo hacía para "proyectos descartables de fin de semana". El problema es que mucha gente tomó eso como licencia para hacer lo mismo con código productivo, y ahí es donde se pudre todo.

¿Se acuerdan cuando en el [post de Docker](/docker-deja-de-llorar/) les hablé de la gente que hace `docker compose up` sin saber qué hay en el Dockerfile? Bueno, el vibe coding es un poco eso pero a nivel aplicación entera. Y mirá que yo a esa gente la quería educar, ahora resulta que les estoy dando herramientas para que ni siquiera necesiten el Dockerfile. La vida te da sorpresas.

---

## La dopamina de ver algo andar en 5 minutos

No voy a mentirles: la sensación de describir algo y verlo funcionar casi de inmediato es adictiva. Es como ese chop de dopamina que mencioné en el post de Docker, pero multiplicado por diez. Le pedís "haceme una API que haga X" y en minutos tenés endpoints, validaciones, y hasta tests (a veces).

¿Lo mejor? Cosas que antes te llevaban un fin de semana entero ahora son una tarde de sábado. Un script para automatizar algo que te daba paja hacer a mano, una herramienta interna para el equipo, un prototipo para mostrarle al cliente que sí, se puede, y no en tres meses.

Y hay un costado que me parece genuinamente copado: la barrera de entrada bajó. Tu primo que tiene un negocio y quiere una landing page, tu amigo diseñador que quiere automatizar algo, gente que no es dev pero tiene ideas. Ahora pueden construir cosas. ¿Serán las mejores cosas? No necesariamente. Pero la democratización tiene su mérito.

Yo lo usé varias veces para prototipos rápidos, scripts descartables, y esas automatizaciones internas que nadie va a mantener pero que te ahorran horas. Y honestamente, para esos casos... funciona bárbaro. El problema empieza cuando te olvidás de que "funciona" no es sinónimo de "está bien hecho".

---

## Ahora bajemos de la nube

Acá es donde me pongo el sombrero que me puse la semana pasada y vamos a hablar en serio (pero tranquilos, sigo siendo yo, no se me fue la onda).

**No sabés qué pusiste en producción.** Este es el problema fundamental. Si no leíste el código, no lo entendés. Si no lo entendés, no lo podés debuggear. Es como conducir un auto que armaste con los ojos cerrados: puede que arranque y ande... hasta que frene mal en una curva. Cuando algo se rompe (y se va a romper), vas a estar mirando código ajeno que vos mismo "escribiste". La paradoja perfecta.

**Seguridad (sí, otra vez).** Hace una semana les hablé de [prompt injection, OWASP Top 10 para LLMs y toda la movida de seguridad](/seguridad-ai/). Ahora imaginate que ese código que aceptaste sin mirar tiene un SQL injection, un endpoint expuesto sin autenticación, o maneja datos sensibles de tus usuarios con la delicadeza de un elefante en una cristalería. El código generado por IA no viene con auditoría de seguridad incluida. Y las alucinaciones del modelo no solo inventan texto convincente: también inventan código que compila perfecto y tiene vulnerabilidades perfectas.

**Deuda técnica con esteroides.** El código funciona hoy. Mañana necesitás cambiar algo y estás frente a un Frankenstein que ni vos ni la IA que lo generó pueden explicar del todo. Es deuda técnica a créditos UVA: parece manejable al principio, pero las cuotas se te van al carajo cuando menos lo esperás (*si no son argentinos, busquen "créditos UVA Argentina" y van a entender mi dolor*).

**Alucinaciones en forma de código.** Los LLMs alucinan. En texto, eso significa información falsa que suena convincente. En código, eso significa funciones que compilan, pasan un test básico, y tienen un bug sutil que te va a costar tres días encontrar. O peor: que nunca encontrás porque "funciona" y no te enterás hasta que explota en producción.

**La trampa del "funciona".** Que algo pase un test manual o se vea bien en el navegador no significa que sea correcto, seguro, ni performante. Funciona en tu máquina, con tus datos, en tu escenario feliz. ¿Y los edge cases? ¿Y la concurrencia? ¿Y cuando un usuario mete un emoji donde esperabas un número? (*Siempre hay alguien que mete un emoji donde no va*).

---

## Cómo vibear sin explotar

Bueno, ahora que te metí miedo, vamos a lo constructivo. Porque la idea no es que salgas corriendo del vibe coding, sino que lo hagas con criterio. Acá van las prácticas que, al menos en mi experiencia y la de bastante gente en la comunidad, funcionan.

### Planificá antes de promptear

Este es el consejo más repetido y el más ignorado. Antes de abrir el chat con tu IA favorita, tomate 10 minutos y escribí qué querés: qué hace tu app, cuáles son los flujos principales, qué datos maneja, qué edge cases hay. No hace falta un documento de 20 páginas; con un par de párrafos claros alcanza.

¿Por qué? Porque la IA es **tan buena como tu prompt**. Si le pedís "haceme un ecommerce", te va a dar algo genérico y probablemente frágil. Si le decís "necesito un módulo de carrito de compras con validación de stock en tiempo real, que persista en localStorage y sincronice con el backend al hacer checkout vía POST a /api/orders", la cosa cambia radicalmente.

Ese tiempo invertido en planificar te salva del temido **doom loop** del vibe coding: ese ciclo infinito donde la IA rompe algo, lo arreglás, rompe otra cosa, lo arreglás, y así hasta que querés tirar la compu por la ventana. Si alguna vez entraste en ese espiral, sabés exactamente de qué hablo.

### Iterá en pasos chicos

Si le pedís a la IA que te construya toda una feature en un solo prompt, vas a obtener código frágil, difícil de debuggear y casi imposible de mantener. El truco es **descomponer**: primero la autenticación, después el CRUD, después el carrito, después el checkout.

Pensalo como commits atómicos. Cada paso debería hacer una cosa, y deberías poder verificar que esa cosa funciona antes de avanzar. Es la misma lógica que usás en desarrollo tradicional, pero aplicada a prompts.

### Usá control de versiones (esto no es negociable)

Git no es opcional. Cada vez que la IA genera algo que funciona, hacé commit. Con mensajes descriptivos, no "updated code" sino "feat: agrego validación de email en formulario de registro".

¿Por qué es tan importante? Porque la IA puede romper cosas que ya funcionaban. Y si no tenés un punto al cual volver, te vas a encontrar reconstruyendo desde cero. Tratá el código generado por IA como un pull request que tenés que revisar y mergear con cuidado.

### Revisá el código, siempre

Esto va en contra de la filosofía original de Karpathy de "Accept All y no mirar los diffs", pero es la diferencia entre un hobby project y software real. No necesitás entender cada línea en detalle, pero sí deberías poder responder: ¿qué hace esto? ¿Tiene sentido la estructura? ¿Hay algo que me haga ruido a nivel de seguridad?

Un enfoque que funciona bien: revisá enfocándote en tres áreas puntuales: manejo de errores, cobertura de tests, y seguridad. Si la IA genera un endpoint que recibe datos del usuario y los mete en la base sin validar... bueno, eso es una inyección SQL esperando pasar. Y de esas ya hablamos.

### Elegí stacks conocidos y mantené la arquitectura simple

Las IAs funcionan mejor con tecnologías que tienen mucha presencia en sus datos de entrenamiento. React, Next.js, Python, TypeScript, PostgreSQL... esas cosas las manejan bárbaro. Si le pedís que trabaje con un framework hipster que tiene 200 estrellas en GitHub, vas a sufrir.

Además, la IA tiene una tendencia a sobre-engineerear soluciones si no la frenás. No necesitás microservicios, un event bus, y tres capas de abstracción para un CRUD. Mantené las cosas simples.

---

## De TDD a Vibe Coding: la transición que nadie te cuenta

Si venís de un mundo donde TDD era ley, el vibe coding puede sentirse como la anarquía total. Pero no tiene por qué ser un salto al vacío; pensalo más como una evolución de tu flujo de trabajo.

### Lo que no cambia

Los principios fundamentales de la ingeniería de software siguen vigentes. Escribir tests sigue siendo importante. Revisar código sigue siendo importante. Planificar sigue siendo importante. Lo que cambia es **quién ejecuta** y **a qué velocidad**.

En TDD escribías el test primero, después el código que lo hacía pasar, y después refactorizabas. Con vibe coding, el ciclo se transforma: describís lo que querés (incluyendo el comportamiento esperado), la IA genera el código Y los tests, vos revisás que ambos tengan sentido, y después iterás.

### Lo que sí cambia

Tu rol pasa de "artesano del código" a "director técnico". Ya no estás en la cancha pateando, estás en el banco dando indicaciones. Esto no es menos trabajo, es trabajo *diferente*. Necesitás desarrollar habilidades nuevas: escribir buenos prompts, detectar problemas en código que no escribiste, guiar la dirección arquitectónica sin micromanagear cada función.

Un patrón que funciona muy bien: **"planificar como humano, ejecutar con IA, validar como humano"**. Hacés la planificación y el diseño arquitectónico vos (o en diálogo con la IA, pero con vos al volante), dejás que la IA genere el código, y después volvés a tomar el control para revisar, testear, y ajustar.

### El TDD no muere, evoluciona

La mentalidad de TDD es tu mejor aliado en el vibe coding. ¿Por qué? Porque te obliga a pensar en el comportamiento esperado *antes* de pedir el código. Podés describir tus tests como parte del prompt: "necesito una función que haga X, y estos son los casos que tiene que manejar: [caso 1, caso 2, caso edge]". La IA genera todo junto, y vos validás que los tests tengan sentido y que el código los pase.

La diferencia es que pasás de escribir 100 líneas de tests a mano a revisar 100 líneas de tests generados. Sigue siendo tu responsabilidad asegurarte de que la cobertura sea adecuada, pero el trabajo mecánico se reduce drásticamente.

---

## Skills vs Rules: el cierre que tu workflow necesita

Si estás usando **Claude Code** (o empezando a meterte), hay un concepto que va a definir qué tan efectivo sos configurando tu agente: la diferencia entre **Skills** y **Rules**. Y spoiler: no son lo mismo ni deberían usarse indistintamente.

### Rules: el "qué" y el "cuándo"

Las Rules son directivas que le dicen a Claude **cómo reconocer** una situación y qué principios aplicar. Son como las normas de estilo de tu proyecto: siempre presentes, siempre aplicables dentro de su contexto. Viven en `.claude/rules/` y pueden tener filtros por path (por ejemplo, una regla que solo aplica cuando estás tocando archivos de la base de datos).

Pensalas como tu "sistema nervioso consciente": decisiones que tomás deliberadamente sobre cómo debe comportarse tu agente. Son concisas, declarativas, y se enfocan en **reconocimiento de patrones**.

**Ejemplo de una Rule para convenciones de base de datos:**

```markdown
# .claude/rules/database.md
---
description: Convenciones para trabajo con base de datos
globs: ["**/db/**", "**/migrations/**", "**/*.sql"]
---

- Usar snake_case para nombres de tablas y columnas
- Toda tabla debe tener campos created_at y updated_at
- Las migraciones deben ser reversibles
- Nunca hacer DROP TABLE sin confirmación explícita
- Usar transacciones para operaciones que modifiquen múltiples tablas
```

### Skills: el "cómo"

Las Skills son procedimientos completos que le enseñan a Claude **cómo ejecutar** una tarea específica. Son como recetas de cocina (*guiño al post de Docker*): instrucciones paso a paso que se activan cuando se las necesita. Viven en `.claude/skills/` y se cargan bajo demanda — Claude lee las descripciones de todas las skills disponibles, pero solo carga el contenido completo cuando decide invocar una.

Nadie memoriza toda la wiki interna antes de empezar un ticket. Buscás el documento específico que necesitás para el problema que tenés enfrente. Los Skills funcionan igual: le dan a Claude la información exacta que necesita en el momento justo, sin sobrecargar el contexto con instrucciones irrelevantes.

**Ejemplo de un Skill para code review:**

```markdown
# .claude/skills/code-review/SKILL.md
---
name: code-review
description: Realiza code review del código generado o modificado.
  Usar después de implementar features, antes de commit,
  o cuando el usuario pida revisión de código.
---

Realizar un code review enfocándose en estas áreas:

## 1. Seguridad
- ¿Hay inputs de usuario sin sanitizar?
- ¿Se exponen secrets o API keys?
- ¿Hay vulnerabilidades de inyección (SQL, XSS)?

## 2. Manejo de errores
- ¿Qué pasa si la API no responde?
- ¿Se manejan los edge cases (null, undefined, arrays vacíos)?

## 3. Tests
- ¿La cobertura cubre los caminos críticos?
- ¿Los tests son determinísticos?

## 4. Mantenibilidad
- ¿Los nombres son descriptivos?
- ¿Hay código duplicado que pueda extraerse?
```

### La diferencia clave, resumida

**Las Rules son para reconocimiento, las Skills son para procedimiento.** Las Rules responden a "¿qué debería tener en cuenta acá?", los Skills responden a "¿cómo hago esto paso a paso?".

Si te encontrás escribiendo una Rule que dice "cada vez que pase X, hacer Y paso a paso", estás describiendo un Skill. Y si tenés un Skill que es solo una lista de "no hagas esto, no hagas aquello", eso es una Rule. Separar estas responsabilidades tiene los mismos beneficios que separar responsabilidades en tu código: principio de responsabilidad única, bajo acoplamiento, y la capacidad de extender sin romper lo que ya existe.

---

## Vibrá, pero con los ojos abiertos

¿Se acuerdan de ese proyecto de 20 minutos que mencioné al principio? Les cuento el final: después le dediqué una hora a revisar el código. Encontré un par de cosas que no me gustaron, una dependencia innecesaria, y un manejo de errores que era más optimista que yo un viernes. Lo arreglé, lo entendí, y ahí sí me quedé tranquilo.

Las vibes están buenas. En serio. La IA como herramienta de desarrollo es posiblemente lo mejor que nos pasó en años. Pero las herramientas sirven cuando las usás con criterio, no cuando las usás con los ojos cerrados.

Si algo me dejó escribir [el post de seguridad](/seguridad-ai/) es que la confianza ciega no es una estrategia. Ni con la IA, ni con el código que genera, ni con nada. La transición desde el desarrollo tradicional no es un salto al vacío: es llevar tu experiencia y criterio a un nuevo paradigma donde el código se escribe más rápido, pero la ingeniería sigue siendo tu responsabilidad.

Así que sí: vibrá, usá la IA, disfrutá la velocidad, construí cosas que antes eran impensables. Pero cada tanto levantá el capot y fijate qué hay adentro. Porque al final del día, si algo se rompe, el que tiene que dar explicaciones sos vos, no la IA.

Usá la IA. No dejes que la IA te use a vos. Hay muchísima tela por cortar en estos temas, pero mientras termino de cocinar otras cosas para este espacio, quería compartir estas cosas que estuve leyendo y debatiendo con colegas.

¡Nos vemos pronto!

*— Cundalf.*

---

### Referencias y lecturas recomendadas

- [Tweet original de Karpathy (Feb 2025)](https://x.com/karpathy/status/1886192184808149383)
- [Vibe Coding Best Practices - Softr](https://www.softr.io/blog/vibe-coding-best-practices)
- [Avoid the Doom Loop - Product Talk](https://www.producttalk.org/vibe-coding-best-practices/)
- [Rules vs Skills in Claude Code - DEV Community](https://dev.to/jeffreese/rules-vs-skills-in-claude-code-5cfi)
- [Claude Code Skills - Documentación oficial](https://code.claude.com/docs/en/skills)
- [Agent Skills vs Rules vs Commands - Builder.io](https://www.builder.io/blog/agent-skills-rules-commands)
- [Top 10 Tips for Conscious Vibe Coding - Refact.ai](https://refact.ai/blog/2025/top-10-tips-for-conscious-vibe-coding/)
- [Vibe Coding Guide - Appwrite](https://appwrite.io/blog/post/the-complete-vibe-coding-guide-2025)

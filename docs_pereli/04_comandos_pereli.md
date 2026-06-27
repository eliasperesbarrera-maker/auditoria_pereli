# Vulnerabilidad 03: Inyección de Comandos del Sistema Operativo (RCE)

**Clasificación OWASP:** A03:2021-Injection
**Componente Afectado:** Herramienta de Diagnóstico de Red / Consola del Servidor
**Severidad CVSS v3.1:** 10.0 (Crítica) - `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H`

---

## 1. Evidencias de Explotación

### ### Fase 1: Inyección del Vector de Ataque
Se introdujo un metacarácter de control de shell (punto y coma `;`) seguido de una directiva del sistema operativo en el campo de entrada destinado a la dirección IP.

```html
127.0.0.1; whoami
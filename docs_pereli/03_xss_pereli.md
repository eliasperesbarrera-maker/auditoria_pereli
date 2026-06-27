# Vulnerabilidad 02: Cross-Site Scripting (XSS) Reflejado

**Clasificación OWASP:** A03:2021-Injection  
**Componente Afectado:** Panel de Mensajes / Entrada de Texto Reflejada  
**Severidad CVSS v3.1:** 6.1 (Medio) - `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`

---

## 1. Evidencias de Explotación

### Fase 1: Inyección del Vector de Ataque
Se introdujo un script malicioso clásico en el campo de texto de entrada para verificar la falta de neutralización de caracteres especiales por parte del servidor.

```html
<script>alert('XSS_EPERES')</script>
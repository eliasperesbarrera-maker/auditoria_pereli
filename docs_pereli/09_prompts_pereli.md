# Bitácora de Uso de Inteligencia Artificial (Prompts) - FitZone

**Asignatura:** Auditoría y Seguridad de Aplicaciones  
**Consultores:** Elías P. & Pedro P.  
**Plataforma de IA:** Gemini AI  

---

## 1. Registro de Interacciones e Ingeniería de Prompts

### Sesión 1: Modelado Teórico de Hallazgos (OWASP)
* **Prompt Emitido:** `"Actúa como un auditor senior de ciberseguridad. Ayúdame a estructurar un informe técnico en formato Markdown para una vulnerabilidad de XSS Reflejado y SQL Injection. Incluye el cálculo de severidad CVSS v3.1 base, la descripción del vector de ataque y el impacto financiero en el negocio."`
* **Uso en la solución:** Generación de la base teórica y justificación de impacto para los hallazgos críticos del Informe A (SQLi y XSS).

### Sesión 2: Refactorización de Código Seguro (Mitigación RCE)
* **Prompt Emitido:** `"Actúa como ingeniero DevSecOps experto en Node.js. Tengo un endpoint que ejecuta herramientas de red usando child_process.exec() concatenando strings directamente, lo cual es vulnerable a RCE. Muéstrame cómo refactorizarlo usando child_process.execFile(), aislando los argumentos ingresados por el usuario en un array estricto para neutralizar los metacaracteres de shell (; y &&)."`
* **Uso en la solución:** Diseño e implementación de la lógica de remediación segura para el módulo de comandos del servidor en el dashboard.

### Sesión 3: Modelado de Gobernanza y Matriz NIST
* **Prompt Emitido:** `"Genera una estructura detallada de un plan de continuidad operativa, junto con una matriz de riesgos probabilística basada en la guía NIST SP 800-30 para una aplicación web empresarial. Necesito que separe los impactos reputacionales, financieros y legales."`
* **Uso en la solución:** Modelado y diseño cuantitativo de las tablas de activos, análisis de calor y flujos de recuperación del Informe B.
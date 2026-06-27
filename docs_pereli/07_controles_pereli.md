# Catálogo de Controles Técnicos de Mitigación

**Fase:** Contramedidas de Ingeniería de Software  
**Estándar de Referencia:** OWASP Proactive Controls  

---

## 1. Desglose de Controles Implementados

### Control C-01: Parámetros y Sentencias Preparadas (Defensa vs SQLi)
* **Naturaleza:** Preventivo.
* **Descripción:** Separación permanente de la consulta base y el set de datos ingresados por el usuario. El driver de la base de datos pre-compila la consulta impidiendo la interpretación de comandos inyectados como `' OR '1'='1`.
* **Refactorización:** `db.query("SELECT * FROM users WHERE user = ? AND pass = ?", [user, pass])`.

### Control C-02: Context-Aware Output Escaping (Defensa vs XSS)
* **Naturaleza:** Preventivo.
* **Descripción:** Codificación estricta de cualquier variable dinámica que deba renderizarse en las vistas HTML, convirtiendo caracteres peligrosos (`<`, `>`, `&`) en entidades de texto plano inofensivas.
* **Refactorización:** Mutación del renderizado de `innerHTML` hacia la asignación estricta por propiedad `textContent`.

### Control C-03: Invocación Aislada de Binarios (Defensa vs RCE)
* **Naturaleza:** Correctivo.
* **Descripción:** Erradicación del uso de funciones de shell del sistema. Al migrar hacia `execFile()`, los argumentos del cliente se envían directo a la tabla de parámetros del binario en el sistema operativo, invalidando la inyección de operadores lógicos de consola como `;` o `&&`.
* **Refactorización:** Reemplazo de `exec()` por la ejecución restringida de `execFile('/bin/ping', [argumentos])`.
# Matriz de Riesgos y Mapa de Calor - FitZone

**Proceso:** Evaluación Cuantitativa de Riesgos de Seguridad  
**Metodología:** NIST SP 800-30  

---

## 1. Metodología de Cálculo
Para priorizar las acciones de remediación, calculamos el nivel de riesgo combinando la Probabilidad (1-5) de ocurrencia del ataque y el Impacto (1-5) en la operación del negocio:

Riesgo = Probabilidad × Impacto

* **Riesgo Crítico (16 - 25):** Requiere atención y mitigación inmediata en producción.
* **Riesgo Alto (10 - 15):** Debe programarse la solución dentro del sprint actual.
* **Riesgo Medio (5 - 9):** Monitoreado con controles compensatorios secundarios.

---

## 2. Registro General del Riesgo

| ID | Activo Vinculado | Amenaza Identificada | Prob (1-5) | Imp (1-5) | Valor Riesgo | Criticidad | Causa Raíz Técnica |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **R-01** | Base de Datos (MongoDB) | Inyección SQL (SQLi) | 4 | 5 | **20** | 🔴 Crítica | Consultas concatenadas dinámicamente en `/api/auth/login`. |
| **R-02** | Buscador Web | XSS Reflejado | 4 | 3 | **12** | 🟠 Alta | Carga directa de parámetros URL en el DOM sin sanitización. |
| **R-03** | Servidor Core (Node.js) | Inyección de Comandos (RCE) | 4 | 5 | **20** | 🔴 Crítica | Uso de `exec()` procesando entradas arbitrarias de red. |

---

## 3. Criterios de Impacto Operativo
* **Impacto 5 (Crítico):** Violación directa de la confidencialidad de datos personales (filtración de base de datos de clientes) o secuestro completo del runtime del servidor.
* **Probabilidad 4 (Alta):** Vector expuesto en la capa externa de la web de FitZone, explotable mediante scripts públicos sin necesidad de contar con credenciales previas.
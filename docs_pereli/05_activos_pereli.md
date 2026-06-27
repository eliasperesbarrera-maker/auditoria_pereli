# Identificación y Clasificación de Activos de Información - FitZone

**Proceso:** Gestión de Riesgos y Gobernanza TI  
**Consultores:** Elías P. & Pedro P.  
**Sólido de Base:** Inventario de activos del core de la plataforma web.

---

## 1. Inventario General de Activos de Información

A continuación se detalla el listado sistemático de los activos críticos identificados dentro del ecosistema de la aplicación FitZone, categorizados según su naturaleza tecnológica y su nivel de criticidad para la operación del gimnasio:

| ID | Activo Vinculado | Tipo de Activo | Criticidad | Descripción y Alcance Operativo |
| :--- | :--- | :--- | :--- | :--- |
| **ACT-01** | Base de Datos Transaccional (MongoDB/SQL) | Datos / Almacenamiento | **Crítica** | Repositorio central que contiene credenciales, datos de clientes, perfiles e información de pagos. |
| **ACT-02** | Endpoint de Autenticación (`/api/auth/login`) | Software / Servicio | **Crítica** | Pasarela lógica de validación de identidad para el ingreso al panel de administración. |
| **ACT-03** | Módulo de Búsqueda y Filtrado Web | Software / Frontend | **Media** | Interfaz del cliente para buscar entrenamientos, sedes y planes disponibles. |
| **ACT-04** | Servidor de Producción Backend (Node.js) | Infraestructura / Lógica | **Crítica** | Entorno de ejecución donde se procesan todas las directivas y reglas de negocio de FitZone. |
| **ACT-05** | Archivos de Logs y Registros de Eventos | Datos / Auditoría | **Alta** | Registros internos utilizados para auditar comportamientos anómalos o intentos de intrusión. |

---

## 2. Dimensiones de Seguridad Evaluadas (C-I-A)

Para determinar el nivel de criticidad de cada activo del inventario, se analizó el impacto potencial sobre las tres dimensiones fundamentales de la seguridad de la información:

* **Confidencialidad (C):** Asegurar que el activo solo sea accesible por personal o procesos explícitamente autorizados (vulnerado gravemente en el hallazgo de inyección SQL).
* **Integridad (I):** Garantizar la exactitud y completitud de los datos, previniendo alteraciones maliciosas no autorizadas.
* **Disponibilidad (A):** Garantizar que los usuarios autorizados tengan acceso continuo al activo cuando lo requieran (bajo riesgo extremo en el hallazgo de inyección de comandos RCE).
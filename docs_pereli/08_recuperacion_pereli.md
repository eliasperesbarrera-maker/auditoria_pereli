# Plan de Recuperación ante Desastres (DRP) y Continuidad

**Área:** Operaciones e Infraestructura FitZone  
**Alcance:** Resiliencia ante Explotación de Vulnerabilidades  

---

## 1. Acuerdos de Nivel de Servicio de Recuperación (SLA)

* **RTO (Recovery Time Objective) - Menor a 30 Minutos:** Tiempo límite estipulado para restablecer el servicio web de cara a los clientes del gimnasio tras sufrir un incidente de caída o compromiso por RCE.
* **RPO (Recovery Point Objective) - Máximo 4 Horas:** Pérdida máxima de datos transaccionales permitida. Se logra mediante la automatización de respaldos diferenciales programados vía tareas Cron cada 4 horas.

---

## 2. Flujo Secuencial de Contención ante Incidentes Activos

1.  **Fase de Aislamiento:** Al dispararse alertas en los archivos log de anomalías por intentos masivos de inyección, se desvía el tráfico del DNS hacia un balanceador alterno apuntando a una landing page estática de mantenimiento.
2.  **Fase de Rollback Automatizado:** Uso de GitHub Actions para redesplegar de manera instantánea una versión anterior estable (Clean Build) libre del fallo explotado, revocando tokens comprometedores del archivo `.env`.
3.  **Fase de Saneamiento y Purga:** Se realiza la invalidación total de llaves JWT vigentes y sesiones guardadas en Redis, protegiendo las cuentas de los clientes de FitZone mientras el equipo de TI audita el origen de la IP atacante.
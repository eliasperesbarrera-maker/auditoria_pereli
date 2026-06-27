import React from 'react';
import payloadSQLi from '../../docs_pereli/img_pereli/sqli_payload.png';
import resultadoSQLi from '../../docs_pereli/img_pereli/sqli_resultado.png';

export default function InyeccionSQL() {
  return (
    <div className="space-y-6 animate-fadeIn text-slate-300">
      
      {/* Encabezado */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <span className="text-[10px] font-mono bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
          OWASP A03:2021 • Vulnerabilidad Crítica
        </span>
        <h2 className="text-2xl font-black text-white mt-2 tracking-tight">
          Análisis de Inyección SQL (SQLi)
        </h2>
        <p className="text-slate-400 text-xs mt-1">
          Bypass de autenticación mediante alteración de consultas lógicas dinámicas en formularios de control de acceso.
        </p>
      </div>

      {/* Grid de Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Severidad Base</span>
          <span className="text-xl font-black text-red-500 block mt-1">9.8 / 10.0</span>
          <span className="text-[11px] text-red-400/80 font-mono block mt-0.5">Métrica CVSS v3.1</span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Vector Utilizado</span>
          <span className="text-sm font-mono bg-slate-950 p-1 rounded text-amber-400 block mt-1 text-center font-bold">
            1' OR '1'='1
          </span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Componente Afectado</span>
          <span className="text-xs font-mono text-slate-300 block mt-2 break-all">
            POST /api/auth/login
          </span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Estado Remediación</span>
          <span className="text-xl font-black text-emerald-400 block mt-1">Mitigado</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">Prepared Statements</span>
        </div>
      </div>

      {/* NUEVA SECCIÓN: Análisis de Impacto para rellenar espacio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
            💥 Descripción y Diagnóstico Técnico
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            El aplicativo web de <span className="text-white font-semibold">FitZone</span> concatenaba directamente las entradas del usuario dentro de las sentencias SQL sin sanitización previa. Al ingresar el metacaracter de comilla simple <code className="text-amber-400 font-mono bg-slate-950 px-1 rounded">'</code>, se logró romper la lógica de la consulta original, forzando al motor de base de datos a evaluar la expresión como verdadera (<code className="text-amber-400 font-mono bg-slate-950 px-1 rounded">1=1</code>) y concediendo acceso administrativo completo sin credenciales válidas.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
            ⚠️ Impacto en el Negocio (CIA Triad)
          </h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold font-mono">[Pérdida de Confidencialidad]</span>
              <span className="text-slate-400">Acceso no autorizado a tablas de usuarios, datos de clientes y registros financieros.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold font-mono">[Pérdida de Integridad]</span>
              <span className="text-slate-400">Capacidad potencial de alterar, modificar o borrar registros críticos del sistema de gimnasio.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Evidencias de Auditoría (Mejoradas de tamaño) */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-4">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
          📸 Evidencias Fotográficas del Hallazgo
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-slate-800 rounded-lg p-3 bg-slate-950 text-center">
            <span className="text-[10px] text-slate-400 font-mono block mb-2">Fase 1: Inyección del Vector en Formulario</span>
            <div className="overflow-hidden rounded border border-slate-850 bg-slate-900 p-1">
              <img src={payloadSQLi} alt="Payload SQLi" className="w-full h-auto rounded" />
            </div>
          </div>

          <div className="border border-slate-800 rounded-lg p-3 bg-slate-950 text-center">
            <span className="text-[10px] text-slate-400 font-mono block mb-2">Fase 2: Autenticación Exitosa (Bypass de Login)</span>
            <div className="overflow-hidden rounded border border-slate-850 bg-slate-900 p-1">
              <img src={resultadoSQLi} alt="Resultado SQLi" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Control de Mitigación */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-3">
        <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
          🛡️ Control de Mitigación Implementado
        </h3>
        <p className="text-slate-400 text-xs">
          Se eliminó la concatenación de cadenas y se implementaron consultas parametrizadas. Esto fuerza al controlador de la base de datos a tratar las entradas del usuario únicamente como datos planos.
        </p>
        <pre className="text-[11px] font-mono bg-slate-950 p-4 rounded-lg text-emerald-400 border border-slate-850 overflow-x-auto">
{`// Código Asegurado (Node.js + MySQL)
const query = "SELECT * FROM usuarios WHERE user = ? AND pass = ?";
db.query(query, [username, password], (err, result) => {
    if (err) return res.status(500).send("Error de servidor");
    if (result.length > 0) res.send("Autenticado");
});`}
        </pre>
      </div>

    </div>
  );
}
import React from 'react';
import payloadXSS from '../../docs_pereli/img_pereli/xss_payload.png';
import resultadoXSS from '../../docs_pereli/img_pereli/xss_resultado.png';

export default function XSS() {
  return (
    <div className="space-y-6 animate-fadeIn text-slate-300">
      
      {/* Encabezado */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
          OWASP A03:2021 • Vulnerabilidad Alta
        </span>
        <h2 className="text-2xl font-black text-white mt-2 tracking-tight">
          Cross-Site Scripting Reflejado (XSS)
        </h2>
        <p className="text-slate-400 text-xs mt-1">
          Inyección de scripts maliciosos en el navegador del cliente mediante la falta de sanitización en parámetros de búsqueda.
        </p>
      </div>

      {/* Grid de Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Severidad Base</span>
          <span className="text-xl font-black text-amber-500 block mt-1">8.2 / 10.0</span>
          <span className="text-[11px] text-amber-400/80 font-mono block mt-0.5">Métrica CVSS v3.1</span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Vector Utilizado</span>
          <span className="text-xs font-mono bg-slate-950 p-1 rounded text-amber-400 block mt-1 text-center font-bold break-all">
            {"<script>alert(1)</script>"}
          </span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Parámetro Afectado</span>
          <span className="text-xs font-mono text-slate-300 block mt-2 break-all">
            GET /buscar?q=
          </span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Estado Remediación</span>
          <span className="text-xl font-black text-emerald-400 block mt-1">Mitigado</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">Context Encoding</span>
        </div>
      </div>

      {/* Descripción e Impacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
            💥 Descripción y Diagnóstico Técnico
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            La barra de búsqueda de la plataforma web de FitZone reflejaba el término buscado directamente en el HTML de respuesta sin pasar por un proceso de codificación de entidades. Esto permitió incrustar etiquetas <code className="text-amber-400 font-mono bg-slate-950 px-1 rounded">{"<script>"}</code> que el navegador de la víctima interpreta y ejecuta automáticamente como código JavaScript legítimo perteneciente al sitio web.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
            ⚠️ Impacto en el Negocio (CIA Triad)
          </h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold font-mono">[Secuestro de Sesión]</span>
              <span className="text-slate-400">Robo de identificadores de sesión (<code className="font-mono">document.cookie</code>) para suplantar cuentas de usuarios activos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold font-mono">[Defacement / Phishing]</span>
              <span className="text-slate-400">Alteración visual de la página para desplegar formularios falsos destinados a capturar credenciales.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Evidencias */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-4">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
          📸 Evidencias Fotográficas del Hallazgo
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-slate-800 rounded-lg p-3 bg-slate-950 text-center">
            <span className="text-[10px] text-slate-400 font-mono block mb-2">Fase 1: Inyección del Script Malicioso en el Buscador</span>
            <div className="overflow-hidden rounded border border-slate-850 bg-slate-900 p-1">
              <img src={payloadXSS} alt="Payload XSS" className="w-full h-auto rounded" />
            </div>
          </div>

          <div className="border border-slate-800 rounded-lg p-3 bg-slate-950 text-center">
            <span className="text-[10px] text-slate-400 font-mono block mb-2">Fase 2: Ejecución Exitosa en el Cliente (Pop-up Alert)</span>
            <div className="overflow-hidden rounded border border-slate-850 bg-slate-900 p-1">
              <img src={resultadoXSS} alt="Resultado XSS" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Mitigación */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-3">
        <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
          🛡️ Control de Mitigación Implementado
        </h3>
        <p className="text-slate-400 text-xs">
          Se integró una capa de sanitización y escape utilizando librerías nativas para neutralizar los caracteres especiales HTML, transformándolos en texto plano no ejecutable.
        </p>
        <pre className="text-[11px] font-mono bg-slate-950 p-4 rounded-lg text-emerald-400 border border-slate-850 overflow-x-auto">
{`// Ejemplo de Escapado de Entidades HTML
function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}`}
        </pre>
      </div>

    </div>
  );
}
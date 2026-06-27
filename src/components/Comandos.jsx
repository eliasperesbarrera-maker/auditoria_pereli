import React from 'react';
import payloadCmd from '../../docs_pereli/img_pereli/cmd_payload.png';
import resultadoCmd from '../../docs_pereli/img_pereli/cmd_resultado.png';

export default function Comandos() {
  return (
    <div className="space-y-6 animate-fadeIn text-slate-300">
      
      {/* Encabezado */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <span className="text-[10px] font-mono bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
          OWASP A03:2021 • Ejecución de Código Remoto (RCE)
        </span>
        <h2 className="text-2xl font-black text-white mt-2 tracking-tight">
          Inyección de Comandos del Sistema Operativo
        </h2>
        <p className="text-slate-400 text-xs mt-1">
          Ejecución no autorizada de directivas del sistema operativo a través de funciones internas del servidor mal implementadas.
        </p>
      </div>

      {/* Grid de Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Severidad Base</span>
          <span className="text-xl font-black text-red-500 block mt-1">10.0 / 10.0</span>
          <span className="text-[11px] text-red-400/80 font-mono block mt-0.5">Crítica Absoluta</span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Metacarácter Utilizado</span>
          <span className="text-sm font-mono bg-slate-950 p-1 rounded text-amber-400 block mt-1 text-center font-bold">
            ; o && o |
          </span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Función Vulnerable</span>
          <span className="text-xs font-mono text-slate-300 block mt-2 text-center bg-slate-950 py-1 rounded">
            child_process.exec()
          </span>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] font-bold uppercase font-mono block">Estado Remediación</span>
          <span className="text-xl font-black text-emerald-400 block mt-1">Mitigado</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">Lista Blanca / API Nativa</span>
        </div>
      </div>

      {/* Descripción e Impacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
            💥 Descripción y Diagnóstico Técnico
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            El sistema de FitZone interactuaba con utilidades del backend (como herramientas de red o utilidades de compresión) enviando comandos de consola directamente estructurados con entradas del usuario. Al inyectar un operador de control de shell como el punto y coma (<code className="text-amber-400 font-mono bg-slate-950 px-1 rounded">;</code>), se logró dar por terminado el comando programado de fondo e iniciar uno completamente nuevo bajo los privilegios del proceso del servidor web.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
            ⚠️ Impacto en el Negocio (CIA Triad)
          </h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold font-mono">[Compromiso del Servidor]</span>
              <span className="text-slate-400">Lectura de archivos del sistema interno (<code className="font-mono">/etc/passwd</code>), descarga de malware y ejecución de shells reversas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold font-mono">[Denegación de Servicio]</span>
              <span className="text-slate-400">Posibilidad latente de apagar el servidor de producción o corromper binarios del sistema operativo.</span>
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
            <span className="text-[10px] text-slate-400 font-mono block mb-2">Fase 1: Inyección de Metacarácter Concatenado</span>
            <div className="overflow-hidden rounded border border-slate-850 bg-slate-900 p-1">
              <img src={payloadCmd} alt="Payload Command Injection" className="w-full h-auto rounded" />
            </div>
          </div>

          <div className="border border-slate-800 rounded-lg p-3 bg-slate-950 text-center">
            <span className="text-[10px] text-slate-400 font-mono block mb-2">Fase 2: Respuesta y Extracción de Datos de la Terminal</span>
            <div className="overflow-hidden rounded border border-slate-850 bg-slate-900 p-1">
              <img src={resultadoCmd} alt="Resultado Command Injection" className="w-full h-auto rounded" />
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
          Se prohibió el uso de invocaciones a shells del sistema operativo (`exec`). En su lugar, se utilizan APIs nativas de Node.js de manejo de archivos o se ejecutan llamadas estrictamente parametrizadas con argumentos separados.
        </p>
        <pre className="text-[11px] font-mono bg-slate-950 p-4 rounded-lg text-emerald-400 border border-slate-850 overflow-x-auto">
{`// Remediación usando execFile (Sin invocar una Shell intermedia)
const { execFile } = require('child_process');

// Los argumentos viajan en un array seguro, anulando inyecciones por caracteres
execFile('ping', ['-c', '4', urlUsuario], (err, stdout, stderr) => {
    if (err) return res.status(500).send("Error de ejecución");
    res.send(stdout);
});`}
        </pre>
      </div>

    </div>
  );
}
import React from 'react';

export default function Matriz() {
  const riesgos = [
    { id: 'R-01', activo: 'Base de Datos (MongoDB/SQL)', amenaza: 'Inyección SQL', p: 4, i: 5, v: 20, cat: 'Crítica', color: 'text-red-400 border-red-500/30 bg-red-500/10', causa: 'Falta de consultas preparadas en el inicio de sesión.' },
    { id: 'R-02', activo: 'Buscador de Clientes', amenaza: 'XSS Reflejado', p: 4, i: 3, v: 12, cat: 'Alta', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10', causa: 'Falta de sanitización de entidades HTML en la vista.' },
    { id: 'R-03', activo: 'Servidor Core (Node.js)', amenaza: 'Inyección de Comandos (RCE)', p: 4, i: 5, v: 20, cat: 'Crítica', color: 'text-red-400 border-red-500/30 bg-red-500/10', causa: 'Concatenación de entradas directo a shells del sistema.' },
  ];

  return (
    <div className="space-y-6 text-slate-300 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl bg-gradient-to-r from-slate-900 to-amber-950/20">
        <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
          COMPONENTE 06 • GESTIÓN DE RIESGOS
        </span>
        <h2 className="text-2xl font-black text-white mt-2 tracking-tight">Matriz de Riesgo y Mapa de Calor</h2>
        <p className="text-slate-400 text-xs mt-1">Evaluación cuantitativa basada en la metodología NIST SP 800-30 para el negocio de FitZone (Riesgo = Probabilidad × Impacto).</p>
      </div>

      {/* Grid Superior: Mapa de Calor y Criterios */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">🗺️ Distribución de Amenazas (Mapa de Calor)</h3>
          <div className="grid grid-cols-6 gap-2 text-center font-mono text-[10px]">
            <div className="text-slate-500 self-center font-bold">Prob \ Imp</div>
            <div className="p-2 bg-slate-950 text-slate-500 rounded border border-slate-900">1 (Bajo)</div>
            <div className="p-2 bg-slate-950 text-slate-500 rounded border border-slate-900">3 (Medio)</div>
            <div className="p-2 bg-slate-950 text-slate-500 rounded border border-slate-900">4 (Alto)</div>
            <div className="p-2 bg-slate-950 text-slate-500 rounded border border-slate-900">5 (Crítico)</div>
            <div className="text-slate-500 self-center font-bold">Estado</div>

            {/* Fila Probabilidad 4 */}
            <div className="p-2 bg-slate-950 text-slate-400 rounded border border-slate-850 flex items-center justify-center font-bold">4 (Alta)</div>
            <div className="p-3 bg-green-950/20 text-green-500 border border-green-900/30 rounded flex items-center justify-center">Tolerable</div>
            <div className="p-3 bg-yellow-950/20 text-yellow-500 border border-yellow-900/30 rounded flex items-center justify-center">Moderado</div>
            <div className="p-3 bg-amber-950/40 text-amber-400 border border-amber-500/30 rounded font-bold flex flex-col justify-center">
              <span>R-02</span>
              <span className="text-[8px] font-sans opacity-70">XSS Alta</span>
            </div>
            <div className="p-3 bg-red-950/50 text-red-400 border border-red-500/40 rounded font-black animate-pulse flex flex-col justify-center">
              <span>R-01, R-03</span>
              <span className="text-[8px] font-sans opacity-70">Críticos</span>
            </div>
            <div className="text-red-400 self-center font-bold font-sans text-[9px] bg-red-500/10 border border-red-500/20 rounded py-1">ACCIÓN INMEDIATA</div>
          </div>
        </div>

        {/* Panel de Criterios Operacionales */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3 text-xs">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono text-amber-400">📊 Criterios de Evaluación</h3>
          <div className="space-y-2 text-[11px] text-slate-400">
            <p><strong className="text-slate-200">Impacto 5 (Crítico):</strong> Exfiltración total de la base de datos de usuarios o toma de control total del servidor de producción.</p>
            <p><strong className="text-slate-200">Probabilidad 4 (Alta):</strong> Vulnerabilidad expuesta públicamente en formularios web sin autenticación previa.</p>
          </div>
        </div>
      </div>

      {/* Tabla Inferior: Detalles de Amenazas */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">📋 Registro Detallado del Riesgo</h3>
        <div className="space-y-3">
          {riesgos.map((r) => (
            <div key={r.id} className={`p-4 rounded-xl border ${r.color} grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-xs`}>
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] opacity-60 block font-bold">{r.id} • VULNERABILIDAD</span>
                <span className="font-bold text-white text-sm">{r.amenaza}</span>
              </div>
              <div className="md:col-span-2">
                <span className="font-mono text-[10px] opacity-60 block font-bold">ACTIVO Y CAUSA RAÍZ</span>
                <p className="text-slate-300 font-medium">{r.activo}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">{r.causa}</p>
              </div>
              <div className="md:col-span-1 text-left md:text-right">
                <span className="font-mono text-[10px] opacity-60 block font-bold">CÁLCULO CRITICIDAD</span>
                <span className="font-mono font-bold text-white">P: {r.p} × I: {r.i} = </span>
                <span className="font-mono font-black text-white bg-slate-950 px-2 py-0.5 rounded ml-1 border border-slate-800">{r.v} ({r.cat})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
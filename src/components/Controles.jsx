import React from 'react';

export default function Controles() {
  const listaControles = [
    { 
      id: 'C-01', 
      titulo: 'Parametrización de Consultas SQL', 
      tipo: 'Preventivo', 
      vulnerabilidad: 'Inyección SQL', 
      antes: 'db.query(`SELECT * FROM users WHERE user = \'${user}\' AND pass = \'${pass}\'`)',
      despues: 'db.query("SELECT * FROM users WHERE user = ? AND pass = ?", [user, pass])',
      desc: 'Desacopla completamente la lógica del intérprete de datos del motor SQL usando placeholders.' 
    },
    { 
      id: 'C-02', 
      titulo: 'Context-Aware Output Escaping', 
      tipo: 'Preventivo', 
      vulnerabilidad: 'XSS Reflejado', 
      antes: 'element.innerHTML = inputUsuario',
      despues: 'element.textContent = inputUsuario // O mapeo de caracteres HTML Entities',
      desc: 'Codifica caracteres especiales (<, >, &) en entidades seguras antes de inyectarlas en el DOM.' 
    },
    { 
      id: 'C-03', 
      titulo: 'Invocación Directa de Archivos (No-Shell)', 
      tipo: 'Correctivo', 
      vulnerabilidad: 'Inyección de Comandos', 
      antes: 'exec(`ping ${inputUsuario}`)',
      despues: 'execFile("/bin/ping", [inputUsuario])',
      desc: 'Evita levantar una shell del sistema operativo (/bin/sh), anulando operadores como ; o &&.' 
    }
  ];

  return (
    <div className="space-y-6 text-slate-300 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl bg-gradient-to-r from-slate-900 to-emerald-950/20">
        <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
          COMPONENTE 07 • MITIGACIÓN TÉCNICA
        </span>
        <h2 className="text-2xl font-black text-white mt-2 tracking-tight">Prevención y Contramedidas Tecnológicas</h2>
        <p className="text-slate-400 text-xs mt-1">Estándares de ingeniería de software implementados en el código de FitZone para el blindaje de APIs.</p>
      </div>

      <div className="space-y-4">
        {listaControles.map((c) => (
          <div key={c.id} className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4 hover:border-slate-700 transition-colors shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-850 pb-3">
              <div>
                <span className="font-mono text-xs text-emerald-400 font-bold block">{c.id} • CONTROL {c.tipo.toUpperCase()}</span>
                <h3 className="text-base font-bold text-white tracking-tight">{c.titulo}</h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-slate-500 block uppercase font-mono font-bold">Remedia contra:</span>
                <span className="text-xs text-slate-300 font-semibold bg-slate-950 border border-slate-850 px-2 py-1 rounded">{c.vulnerabilidad}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>

            {/* Comparativa de código */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-[11px] font-mono">
              <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg">
                <span className="text-red-400 font-bold block mb-1">❌ PATRÓN VULNERABLE ANTERIOR</span>
                <code className="text-slate-400 block break-all">{c.antes}</code>
              </div>
              <div className="p-3 bg-emerald-950/20 border border-emerald-900/30 rounded-lg">
                <span className="text-emerald-400 font-bold block mb-1">✅ REFACTORIZACIÓN SEGURA IMPLEMENTADA</span>
                <code className="text-emerald-300 block break-all">{c.despues}</code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
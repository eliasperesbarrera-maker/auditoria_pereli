import React from 'react';

export default function Prompts() {
  const bitacora = [
    { 
      sesion: 'Sesión 1: Modelado Teórico de Hallazgos (OWASP)', 
      prompt: 'Actúa como un auditor senior de ciberseguridad. Ayúdame a estructurar un informe técnico en formato Markdown para una vulnerabilidad de XSS Reflejado y SQL Injection. Incluye el cálculo de severidad CVSS v3.1 base, la descripción del vector de ataque y el impacto financiero en el negocio.', 
      uso: 'Generación de la base teórica y justificación de impacto para los hallazgos críticos del Informe A (SQLi y XSS).' 
    },
    { 
      sesion: 'Sesión 2: Refactorización de Código Seguro (Mitigación RCE)', 
      prompt: 'Actúa como ingeniero DevSecOps experto en Node.js. Tengo un endpoint que ejecuta herramientas de red usando child_process.exec() concatenando strings directamente, lo cual es vulnerable a RCE. Muéstrame cómo refactorizarlo usando child_process.execFile(), aislando los argumentos ingresados por el usuario en un array estricto para neutralizar los metacaracteres de shell (; y &&).', 
      uso: 'Diseño e implementación de la lógica de remediación segura para el módulo de comandos del servidor en el dashboard.' 
    },
    { 
      sesion: 'Sesión 3: Modelado de Gobernanza y Matriz NIST', 
      prompt: 'Genera una estructura detallada de un plan de continuidad operativa, junto con una matriz de riesgos probabilística basada en la guía NIST SP 800-30 para una aplicación web empresarial. Necesito que separe los impactos reputacionales, financieros y legales.', 
      uso: 'Modelado y diseño cuantitativo de las tablas de activos, análisis de calor y flujos de recuperación del Informe B.' 
    }
  ];

  return (
    <div className="space-y-6 text-slate-300 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl bg-gradient-to-r from-slate-900 to-purple-950/20">
        <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
          COMPONENTE 09 • BITÁCORA IA
        </span>
        <h2 className="text-2xl font-black text-white mt-2 tracking-tight">Registro de Ingeniería de Prompts</h2>
        <p className="text-slate-400 text-xs mt-1">Transparencia y trazabilidad del uso de modelos de lenguaje para el desarrollo de las defensas y documentación de FitZone.</p>
      </div>

      <div className="space-y-4">
        {bitacora.map((b, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3 shadow-md hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white font-mono flex items-center gap-2 text-sm">🤖 {b.sesion}</h3>
              <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded font-mono font-bold">Iteración {i + 1}</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-850 font-mono text-slate-300 text-[11px] leading-relaxed relative">
              <div className="absolute top-2 right-2 text-[9px] text-slate-600 font-bold uppercase tracking-widest">INPUT SYSTEM</div>
              <span className="text-purple-400 font-bold block mb-1">Prompt Emitido:</span> 
              "{b.prompt}"
            </div>
            <div className="text-[12px] text-slate-400 pl-2 border-l-2 border-slate-700">
              <span className="text-white font-semibold">Aplicación en la solución:</span> {b.uso}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
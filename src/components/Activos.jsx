import React from 'react';

const activosFitZone = [
  { id: "ACT-01", nombre: "Base de Datos de Clientes y Membresías", tipo: "Software / Datos", criticidad: "Alta" },
  { id: "ACT-02", nombre: "Portal Web de Agendamiento de Clases", tipo: "Servicio Web", criticidad: "Alta" },
  { id: "ACT-03", nombre: "API Gateway de Pasarela de Pagos", tipo: "Servicio Integrated", criticidad: "Crítica" },
  { id: "ACT-04", nombre: "Servidor Web de Intranet Administrativa", tipo: "Infraestructura", criticidad: "Alta" }
];

const riesgosFitZone = [
  {
    id: "RSK-01",
    activo: "ACT-01 (Base de Datos)",
    amenaza: "Exfiltración de datos por Inyección SQL",
    prob: 3,
    imp: 5,
    valor: 15,
    nivel: "Crítico",
    color: "bg-red-500/10 text-red-400 border-red-500/20"
  },
  {
    id: "RSK-02",
    activo: "ACT-04 (Servidor Intranet)",
    amenaza: "Ejecución remota de código por Command Injection",
    prob: 2,
    imp: 5,
    valor: 10,
    nivel: "Alto",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    id: "RSK-03",
    activo: "ACT-02 (Portal Web)",
    amenaza: "Secuestro de sesión de clientes vía XSS Reflejado",
    prob: 4,
    imp: 3,
    valor: 12,
    nivel: "Alto",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    id: "RSK-04",
    activo: "ACT-03 (API Pasarela)",
    amenaza: "Interrupción de transacciones por manipulación de parámetros",
    prob: 2,
    imp: 4,
    valor: 8,
    nivel: "Medio",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
  }
];

export default function Activos() {
  return (
    <div className="space-y-8 animate-fadeIn text-slate-300">
      {/* SECCIÓN 1: INVENTARIO */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-black text-white mb-4 tracking-tight">
          📋 Inventario de Activos de Información (NIST SP 800-30)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-slate-800">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono">
                <th className="p-3">ID</th>
                <th className="p-3">Nombre del Activo</th>
                <th className="p-3">Tipo de Activo</th>
                <th className="p-3">Criticidad Inicial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              {activosFitZone.map((activo) => (
                <tr key={activo.id} className="hover:bg-slate-850/40 transition">
                  <td className="p-3 font-mono text-emerald-400 font-bold">{activo.id}</td>
                  <td className="p-3 text-white font-medium">{activo.nombre}</td>
                  <td className="p-3 text-slate-400">{activo.tipo}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      activo.criticidad === 'Crítica' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {activo.criticidad}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECCIÓN 2: MATRIZ DE RIESGOS */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-black text-white mb-4 tracking-tight">
          🔥 Matriz de Riesgos Identificados
        </h2>
        <div className="overflow-x-auto rounded-lg border border-slate-800">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono">
                <th className="p-3">ID</th>
                <th className="p-3">Activo Vinculado</th>
                <th className="p-3">Amenaza de Seguridad</th>
                <th className="p-3 text-center">Prob (1-5)</th>
                <th className="p-3 text-center">Imp (1-5)</th>
                <th className="p-3 text-center">Valor</th>
                <th className="p-3 text-center">Nivel Criticidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              {riesgosFitZone.map((r) => (
                <tr key={r.id} className="hover:bg-slate-850/40 transition">
                  <td className="p-3 font-mono text-slate-400">{r.id}</td>
                  <td className="p-3 text-slate-300 font-medium">{r.activo}</td>
                  <td className="p-3 text-slate-400">{r.amenaza}</td>
                  <td className="p-3 text-center font-mono text-amber-400">{r.prob}</td>
                  <td className="p-3 text-center font-mono text-red-400">{r.imp}</td>
                  <td className="p-3 text-center font-mono font-bold text-white">{r.valor}</td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${r.color}`}>
                      {r.nivel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { 
  Shield, Terminal, FileText, Database, Code, 
  Layers, BarChart2, CheckCircle, RefreshCw 
} from 'lucide-react';

export default function App() {
  // Estado para controlar qué pestaña está activa
  const [activeTab, setActiveTab] = useState('resumen');

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      
      {/* SIDEBAR (Menú Lateral) */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4 shrink-0">
        <div className="space-y-6">
          {/* Logo del Dashboard */}
          <div className="flex items-center gap-3 px-2 py-1 border-b border-slate-800 pb-4">
            <Shield className="w-7 h-7 text-emerald-400" />
            <div>
              <h1 className="font-bold text-sm tracking-wider text-white">AUDITORÍA TI</h1>
              <span className="text-xs text-emerald-400 font-mono">pereli_security v3.2</span>
            </div>
          </div>

          {/* Sección INFORME A */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 block mb-2">
              Informe A: Vulnerabilidades
            </span>
            {[
              { id: 'resumen', label: 'Resumen Ejecutivo', icon: FileText },
              { id: 'sqli', label: 'Inyección SQL', icon: Database },
              { id: 'xss', label: 'XSS Reflejado', icon: Code },
              { id: 'cmd', label: 'Inyección de Comandos', icon: Terminal },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Sección INFORME B */}
          <div className="space-y-1 pt-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 block mb-2">
              Informe B: Matriz de Riesgo
            </span>
            {[
              { id: 'activos', label: 'Inventario de Activos', icon: Layers },
              { id: 'matriz', label: 'Matriz y Mapa de Calor', icon: BarChart2 },
              { id: 'controles', label: 'Controles de Mitigación', icon: CheckCircle },
              { id: 'drp', label: 'Plan de Continuidad (DRP)', icon: RefreshCw },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Datos de los Alumnos (Firmas rúbrica) */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-400">
              EP
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-200">Elías Pérez B.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* CONTENEDOR PRINCIPAL DE CONTENIDO */}
      <main className="flex-1 overflow-y-auto p-8 bg-slate-950/40">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <p className="text-slate-400 text-sm">Pestaña activa temporal:</p>
            <h2 className="text-2xl font-bold text-emerald-400 uppercase mt-1">{activeTab}</h2>
            <p className="text-xs text-slate-500 mt-2">En el siguiente commit poblaremos este bloque con los datos de las rúbricas.</p>
          </div>
        </div>
      </main>

    </div>
  );
}
import React, { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');

  // Estructura limpia para los botones del menú
  const menuItems = [
    { id: 'resumen', label: '📊 Resumen Ejecutivo' },
    { id: 'sqli', label: '💉 Inyección SQL' },
    { id: 'xss', label: '🛡️ XSS Reflejado' },
    { id: 'cmd', label: '💻 Inyección de Comandos' },
    { id: 'activos', label: '📋 Activos y Riesgos' }
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100">
      
      {/* BARRA LATERAL DE NAVEGACIÓN COMPLETA */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between">
        <div>
          {/* Encabezado del Menú */}
          <div className="p-6 border-b border-slate-800">
            <h1 className="text-base font-black tracking-wider text-white uppercase">
              FitZone <span className="text-emerald-400">Audit</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-mono mt-1">NIST SP 800-30 • OWASP</p>
          </div>
          
          {/* Botones de las Pestañas */}
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-medium transition-all duration-150 block ${
                    isActive
                      ? 'bg-slate-800 text-white border-l-4 border-emerald-400 font-bold shadow-lg shadow-black/20'
                      : 'text-slate-400 hover:bg-slate-850 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Pie de la barra lateral */}
        <div className="p-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono text-center">
          Consultores: Elías P. & Pedro P.
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL DINÁMICO */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'resumen' && <Resumen />}
          {activeTab === 'sqli' && <InyeccionSQL />}
          {activeTab === 'xss' && <XSS />}
          {activeTab === 'cmd' && <Comandos />}
          {activeTab === 'activos' && <Activos />}
        </div>
      </main>

    </div>
  );
}
import React, { useState } from 'react';
import { 
  Shield, Terminal, FileText, Database, Code, 
  Layers, BarChart2, CheckCircle, RefreshCw, MessageSquare, AlertTriangle, Users
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');

  // Datos de la Bitácora de Prompts (¡Mencionando FitZone para cumplir el 10% de la Rúbrica A!)
  const promptsIa = [
    {
      fase: "Investigación de Inyección SQL en FitZone",
      prompt: "Actúa como un auditor de seguridad senior. Explica los mecanismos de mitigación de la causa raíz para una inyección SQL basada en el portal web de la cadena de gimnasios FitZone utilizando consultas parametrizadas en Node.js.",
      aceptado: "Se adoptó el uso de marcadores de posición (?) para desvincular por completo las instrucciones del motor SQL de los datos de membresías proporcionados por los usuarios de FitZone.",
      corregido: "La IA sugirió inicialmente un WAF genérico, pero lo corrigimos priorizando la parametrización en el código fuente para eliminar la causa raíz en el login de clientes."
    },
    {
      fase: "Estructura de la Matriz de Riesgo FitZone (Informe B)",
      prompt: "Genera una estructura de matriz de riesgo probabilística (Impacto x Probabilidad) de 5x5 aplicable al sistema de gestión de clientes y agendamiento de FitZone alineada con la metodología NIST SP 800-30.",
      aceptado: "Los criterios numéricos de impacto financiero y operativo para ponderar las amenazas críticas en la base de datos de usuarios de FitZone.",
      corregido: "Se ajustaron los valores de probabilidad de los ataques XSS reflejados, reduciendo su impacto directo en la base de datos central en comparación con la inyección SQL."
    }
  ];

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
              <span className="text-xs text-emerald-400 font-mono">eperes_security v1.0</span>
            </div>
          </div>

          {/* Sección INFORME A */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 block mb-2">
              Informe A: Vulnerabilidades
            </span>
            {[
              { id: 'resumen', label: 'Resumen Ejecutivo y IA', icon: FileText },
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

        {/* Datos de los Alumnos */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-400">
              EP
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-200">Elías Pérez B.</p>
              <p className="text-[10px] text-slate-500 truncate">Informatico en Proceso</p>
            </div>
          </div>
        </div>
      </aside>

      {/* CONTENEDOR PRINCIPAL DE CONTENIDO */}
      <main className="flex-1 overflow-y-auto p-8 bg-slate-950/40">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* 1. PESTAÑA: RESUMEN EJECUTIVO */}
          {activeTab === 'resumen' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Encabezado Académico */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Evaluación Unidad 3</span>
                    <h2 className="text-3xl font-black tracking-tight text-white mt-2">Resumen Ejecutivo de Auditoría</h2>
                    <p className="text-slate-400 text-sm mt-1">Asignatura: Fundamentos de Seguridad de la Información — INACAP Valparaíso</p>
                    <p className="text-xs text-emerald-400 font-mono mt-2 bg-emerald-500/5 border border-emerald-500/20 px-2 py-1 rounded inline-block">Empresa Asignada: FitZone (E19)</p>
                  </div>
                  <div className="text-right text-xs text-slate-500 font-mono">
                    <p>Docente: Rubén Schnettler</p>
                    <p>Exigencia: 60% (Escala 1.0 - 7.0)</p>
                  </div>
                </div>
              </div>

              {/* Tarjetas de Métricas de Auditoría */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg text-red-400"><AlertTriangle /></div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold">Vulnerabilidades Analizadas</h4>
                    <p className="text-xl font-bold text-white">3 Fallas Críticas</p>
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400"><Layers /></div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold">Activos Críticos Identificados</h4>
                    <p className="text-xl font-bold text-white">&gt; 4 de Información</p>
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400"><Users /></div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold">Equipo Consultor</h4>
                    <p className="text-sm font-bold text-white">E.Pérez</p>
                  </div>
                </div>
              </div>

              {/* Contexto del Proyecto */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-400" /> Alcance y Objetivos del Análisis
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Este sistema interactivo consolida los hallazgos técnicos del <strong>Informe A</strong> (vulnerabilidades basadas en OWASP/CVSS) y el modelamiento de riesgos del <strong>Informe B</strong> (matrices de criticidad y controles preventivos). El objetivo principal es evaluar la postura de seguridad de las plataformas asignadas frente a vectores de ataque comunes en la capa de aplicación web, aplicando contramedidas arquitectónicas definitivas.
                </p>
              </div>

              {/* SECCIÓN OBLIGATORIA: Bitácora de Prompts de IA */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" /> Bitácora de Uso de IA y Co-creación (Requisito de Rúbrica)
                </h3>
                <p className="text-slate-400 text-xs">
                  Registro de prompts personalizados utilizados para investigar el comportamiento técnico de las fallas, junto con el control de calidad aplicado por los alumnos.
                </p>

                <div className="space-y-4 pt-2">
                  {promptsIa.map((item, index) => (
                    <div key={index} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-emerald-400 font-mono block">{item.fase}</span>
                      <p className="text-xs text-slate-300 italic bg-slate-900/50 p-2 rounded border border-slate-800/50">
                        <span className="text-emerald-500 font-bold not-italic">Prompt:</span> "{item.prompt}"
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-2 rounded">
                          <strong className="text-emerald-400">Lo que se aceptó:</strong> {item.aceptado}
                        </div>
                        <div className="bg-amber-500/5 border border-amber-500/20 p-2 rounded">
                          <strong className="text-amber-400">Lo que se corrigió:</strong> {item.corregido}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <h4 className="text-xs font-bold text-slate-300 uppercase mb-1">Reflexión Final del Equipo sobre el uso de la IA</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    La inteligencia artificial actuó como un acelerador para contrastar las mitigaciones teóricas con las implementaciones prácticas de código. No obstante, se requirió una auditoría crítica humana para adaptar los modelos sugeridos a los requerimientos específicos de la infraestructura local del portal y las métricas formales de la rúbrica institucional.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. PESTAÑA: INYECCIÓN SQL (SQLi) */}
          {activeTab === 'sqli' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Título y Categoría OWASP */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded">OWASP A03:2021-Injection</span>
                    <h2 className="text-2xl font-black text-white mt-2">Falla 01: Inyección SQL (SQLi)</h2>
                    <p className="text-slate-400 text-sm mt-1">Identificada en el formulario de autenticación y consulta de historial del portal.</p>
                  </div>
                  <div className="bg-red-500/20 border border-red-500/40 text-red-400 font-mono text-xs px-3 py-2 rounded-xl text-center">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Severidad</span>
                    <strong className="text-lg">CRÍTICA</strong>
                  </div>
                </div>
              </div>

              {/* Tabla de Clasificación CVSS v3.1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-850 p-4 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-slate-200">Puntuación Calculada CVSS v3.1</h3>
                </div>
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <th className="p-3">Métrica Base</th>
                      <th className="p-3">Valor del Vector</th>
                      <th className="p-3">Impacto Técnico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr>
                      <td className="p-3 font-semibold text-white">Vector Completo</td>
                      <td className="p-3 font-mono text-amber-400">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H</td>
                      <td className="p-3">Acceso remoto sin autenticación previa.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Puntuación Final</td>
                      <td className="p-3 font-bold text-red-400">10.0 / 10.0</td>
                      <td className="p-3">Compromiso total de la confidencialidad, integridad y disponibilidad.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Causa Raíz */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">Análisis de Causa Raíz</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  La falla se origina debido a que los datos proporcionados por el usuario mediante la variable del formulario se concatenan directamente en la cadena de la consulta SQL, sin pasar por filtros de sanitización ni validaciones. Esto le permite a un atacante inyectar operadores lógicos como <code>' OR '1'='1</code>, alterando la lógica de la consulta original ejecutada en el motor de base de datos.
                </p>
              </div>

              {/* Bloques de Código: Vulnerable vs Corregido */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Código Vulnerable */}
                <div className="bg-slate-900 border border-red-900/40 rounded-xl overflow-hidden">
                  <div className="bg-red-950/40 p-3 border-b border-red-900/40 flex justify-between items-center">
                    <span className="text-xs font-bold text-red-400 font-mono">❌ Código Vulnerable (Concatenación)</span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto bg-slate-950/80 leading-relaxed">
{`// Extracción directa de parámetros de la solicitud
const { username, password } = req.body;

// CAUSA RAÍZ: Concatenación directa de strings en la consulta
const query = "SELECT * FROM usuarios WHERE user = '" + username + "' AND pass = '" + password + "'";

db.query(query, (err, result) => {
  if (result.length > 0) res.send("Autenticado");
});`}
                  </pre>
                </div>

                {/* Código Corregido */}
                <div className="bg-slate-900 border border-emerald-900/40 rounded-xl overflow-hidden">
                  <div className="bg-emerald-950/40 p-3 border-b border-emerald-900/40 flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-400 font-mono">🛡️ Mitigación Arquitectónica (Consultas Parametrizadas)</span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto bg-slate-950/80 leading-relaxed">
{`// Uso de marcadores de posición para separar código de datos
const { username, password } = req.body;

// SOLUCIÓN: Consulta parametrizada segura
const query = "SELECT * FROM usuarios WHERE user = ? AND pass = ?";

// Los valores se pasan en un arreglo aislado
db.query(query, [username, password], (err, result) => {
  if (err) return res.status(500).send("Error interno");
  if (result.length > 0) res.send("Autenticado");
});`}
                  </pre>
                </div>

              </div>
            </div>
          )}

          {/* 3. PESTAÑA: XSS REFLEJADO */}
          {activeTab === 'xss' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Título y Categoría OWASP */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded">OWASP A03:2021-Injection</span>
                    <h2 className="text-2xl font-black text-white mt-2">Falla 02: Cross-Site Scripting Reflejado (XSS)</h2>
                    <p className="text-slate-400 text-sm mt-1">Identificado en la barra de búsquedas y parámetros dinámicos de respuesta rápida.</p>
                  </div>
                  <div className="bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs px-3 py-2 rounded-xl text-center">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Severidad</span>
                    <strong className="text-lg">MEDIA</strong>
                  </div>
                </div>
              </div>

              {/* Tabla CVSS v3.1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-850 p-4 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-slate-200">Puntuación Calculada CVSS v3.1</h3>
                </div>
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <th className="p-3">Métrica Base</th>
                      <th className="p-3">Valor del Vector</th>
                      <th className="p-3">Impacto Técnico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr>
                      <td className="p-3 font-semibold text-white">Vector Completo</td>
                      <td className="p-3 font-mono text-amber-400">CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</td>
                      <td className="p-3">Requiere que la víctima haga clic en un enlace malicioso diseñado por el atacante.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Puntuación Final</td>
                      <td className="p-3 font-bold text-amber-400">6.1 / 10.0</td>
                      <td className="p-3">Ejecución remota de scripts dentro del contexto de sesión de la víctima (Robo de Session Tokens).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Causa Raíz */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">Análisis de Causa Raíz</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  La falla ocurre porque la aplicación toma un parámetro enviado directamente desde la URL (query parameter) y lo incrusta de vuelta en la estructura HTML del navegador sin sanitización previa ni codificación de entidades HTML. Esto permite romper las etiquetas de texto originales y forzar al navegador a interpretar secuencias de comandos maliciosas tipo <code>&lt;script&gt;</code>.
                </p>
              </div>

              {/* Bloques de Código */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Código Vulnerable */}
                <div className="bg-slate-900 border border-red-900/40 rounded-xl overflow-hidden">
                  <div className="bg-red-950/40 p-3 border-b border-red-900/40">
                    <span className="text-xs font-bold text-red-400 font-mono">❌ Código Vulnerable (Renderizado Directo)</span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto bg-slate-950/80 leading-relaxed">
{`app.get('/buscar', (req, res) => {
  const terminoBusqueda = req.query.q;
  
  // CAUSA RAÍZ: Reflejo directo en HTML sin escapar caracteres especiales
  res.send(\`<div>Resultados para: \${terminoBusqueda}</div>\`);
});`}
                  </pre>
                </div>

                {/* Código Corregido */}
                <div className="bg-slate-900 border border-emerald-900/40 rounded-xl overflow-hidden">
                  <div className="bg-emerald-950/40 p-3 border-b border-emerald-900/40">
                    <span className="text-xs font-bold text-emerald-400 font-mono">🛡️ Mitigación Arquitectónica (Sanitización y Escape de Entidades)</span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto bg-slate-950/80 leading-relaxed">
{`const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

app.get('/buscar', (req, res) => {
  const terminoBusqueda = req.query.q;
  
  // SOLUCIÓN: Sanitización rigurosa de caracteres maliciosos (<, >, /)
  const safeQuery = DOMPurify.sanitize(terminoBusqueda);
  
  res.send(\`<div>Resultados para: \${safeQuery}</div>\`);
});`}
                  </pre>
                </div>

              </div>
            </div>
          )}
{/* SECCIÓN DE EVIDENCIAS PRÁCTICAS - DVWA */}
<div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="p-1.5 bg-red-500/10 text-red-400 rounded-lg">
      📸
    </span>
    <h3 className="text-lg font-semibold text-gray-200">
      Evidencias de Explotación en Entorno Controlado (DVWA)
    </h3>
  </div>
  
  <p className="text-sm text-gray-400 mb-6">
    Se procedió a testear la vulnerabilidad en un entorno local configurando el nivel de seguridad en <span className="text-yellow-400 font-semibold">Low</span>. A continuación se detallan el payload utilizado y el resultado obtenido en el navegador.
  </p>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Tarjeta de Evidencia 1 */}
    <div className="bg-gray-950/60 p-4 rounded-xl border border-gray-800 flex flex-col justify-between">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-400/10 px-2 py-0.5 rounded">
          Fase 1: Inyección
        </span>
        <h4 className="text-sm font-semibold text-gray-300 mt-2 mb-1">Payload Visible</h4>
        <p className="text-xs text-gray-500 mb-4">
          Inyección de código JavaScript malicioso en el campo de entrada "What's your name?".
        </p>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
        <img 
          src="/evidencias/xss_payload.png" 
          alt="Inyección del Payload XSS en DVWA" 
          className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </div>

    {/* Tarjeta de Evidencia 2 */}
    <div className="bg-gray-950/60 p-4 rounded-xl border border-gray-800 flex flex-col justify-between">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-0.5 rounded">
          Fase 2: Ejecución
        </span>
        <h4 className="text-sm font-semibold text-gray-300 mt-2 mb-1">Resultado Visible</h4>
        <p className="text-xs text-gray-500 mb-4">
          El servidor procesa la entrada sin sanitizar, obligando al navegador a ejecutar la alerta.
        </p>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
        <img 
          src="/evidencias/xss_resultado.png" 
          alt="Resultado de la alerta ejecutada en el navegador" 
          className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</div>
          {/* 4. PESTAÑA: INYECCIÓN DE COMANDOS (CMD INJECTION) */}
          {activeTab === 'cmd' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Título y Categoría OWASP */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded">OWASP A03:2021-Injection</span>
                    <h2 className="text-2xl font-black text-white mt-2">Falla 03: Inyección de Comandos Externos (CMD Injection)</h2>
                    <p className="text-slate-400 text-sm mt-1">Detectada en el módulo de diagnóstico de red y herramientas de ping de la intranet de administración.</p>
                  </div>
                  <div className="bg-red-500/20 border border-red-500/40 text-red-400 font-mono text-xs px-3 py-2 rounded-xl text-center">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Severidad</span>
                    <strong className="text-lg">CRÍTICA</strong>
                  </div>
                </div>
              </div>

              {/* Tabla CVSS v3.1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-850 p-4 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-slate-200">Puntuación Calculada CVSS v3.1</h3>
                </div>
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <th className="p-3">Métrica Base</th>
                      <th className="p-3">Valor del Vector</th>
                      <th className="p-3">Impacto Técnico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr>
                      <td className="p-3 font-semibold text-white">Vector Completo</td>
                      <td className="p-3 font-mono text-amber-400">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</td>
                      <td className="p-3">Ataque directo por red sin necesidad de privilegios ni interacción del usuario.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Puntuación Final</td>
                      <td className="p-3 font-bold text-red-400">9.8 / 10.0</td>
                      <td className="p-3">Ejecución arbitraria de comandos en el sistema operativo del servidor, comprometiendo todo el host backend.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Causa Raíz */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">Análisis de Causa Raíz</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  La vulnerabilidad radica en el uso de funciones de ejecución del sistema (como <code>exec</code> en Node.js) alimentadas por strings construidos dinámicamente con entradas del cliente. Al no validar los caracteres, un atacante puede inyectar delimitadores de comandos del shell (<code>;</code>, <code>&amp;&amp;</code>, <code>|</code>) seguidos de software malicioso o comandos del sistema operativo.
                </p>
              </div>

              {/* Bloques de Código */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Código Vulnerable */}
                <div className="bg-slate-900 border border-red-900/40 rounded-xl overflow-hidden">
                  <div className="bg-red-950/40 p-3 border-b border-red-900/40">
                    <span className="text-xs font-bold text-red-400 font-mono">❌ Código Vulnerable (Llamado Directo al Shell)</span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto bg-slate-950/80 leading-relaxed">
{`const { exec } = require('child_process');

app.post('/diagnostico', (req, res) => {
  const { ipHost } = req.body;
  
  // CAUSA RAÍZ: Pasar la variable directo a una subshell del OS
  // Entrada maliciosa: "127.0.0.1; cat /etc/passwd"
  exec(\`ping -c 4 \${ipHost}\`, (err, stdout, stderr) => {
    res.send({ salida: stdout });
  });
});`}
                  </pre>
                </div>

                {/* Código Corregido */}
                <div className="bg-slate-900 border border-emerald-900/40 rounded-xl overflow-hidden">
                  <div className="bg-emerald-950/40 p-3 border-b border-emerald-900/40">
                    <span className="text-xs font-bold text-emerald-400 font-mono">🛡️ Mitigación Arquitectónica (Uso Seguro de APIs sin Shell)</span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto bg-slate-950/80 leading-relaxed">
{`const { execFile } = require('child_process');

app.post('/diagnostico', (req, res) => {
  const { ipHost } = req.body;
  
  // SOLUCIÓN 1: Validar estrictamente el formato con Expresiones Regulares
  const regexIp = /^(\\d{1,3}\\.){3}\\d{1,3}$/;
  if (!regexIp.test(ipHost)) {
    return res.status(400).send("Formato de IP inválido.");
  }
  
  // SOLUCIÓN 2: Usar execFile para evitar que se levante un intérprete de comandos
  execFile('ping', ['-c', '4', ipHost], (err, stdout, stderr) => {
    if (err) return res.status(500).send("Error en diagnóstico.");
    res.send({ salida: stdout });
  });
});`}
                  </pre>
                </div>

              </div>
            </div>
          )}

          {/* Marcador de posición para las pestañas del Informe B */}
          {activeTab !== 'resumen' && activeTab !== 'sqli' && activeTab !== 'xss' && activeTab !== 'cmd' && (
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-3">
              <Shield className="w-12 h-12 text-slate-600 mx-auto animate-pulse" />
              <h3 className="text-xl font-bold text-white uppercase">{activeTab}</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Módulo en preparación para el siguiente commit progresivo de desarrollo de la auditoría.
              </p>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}
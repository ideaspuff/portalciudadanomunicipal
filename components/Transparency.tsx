
import React from 'react';
import { TRANSPARENCY_CATEGORIES } from '../data/institutional/transparency';
import { Search, ExternalLink, Scale, Download, ChevronRight, BookOpen } from 'lucide-react';
import { PORTAL_THEME } from '../styles/theme';

const Transparency: React.FC = () => {
  return (
    <div className="animate-fade-in-up bg-slate-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-slate-900 py-16 text-center px-4 relative overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
            <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                    <Scale className="h-8 w-8 text-rose-300" />
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Portal de Transparencia</h1>
                <p className="text-rose-100/80 text-lg max-w-2xl mx-auto font-light">
                    Información pública de oficio conforme al Artículo 70 de la Ley General de Transparencia y Acceso a la Información Pública.
                </p>
                
                {/* Search Bar PNT Style */}
                <div className="mt-8 max-w-2xl mx-auto">
                    <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="Buscar obligación (Ej. Sueldos, Contratos, Obras...)" 
                            className="w-full pl-6 pr-14 py-4 rounded-full text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-rose-500/30 shadow-2xl transition-all"
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-rose-600 text-white rounded-full w-12 flex items-center justify-center hover:bg-rose-700 transition-colors shadow-md">
                            <Search className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Content Container - Removed negative margin for better spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Main Content: Categories Grid */}
                <div className="lg:col-span-8 xl:col-span-8">
                    
                    {/* Section Label */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                            <BookOpen className="mr-3 h-6 w-6 text-rose-600"/>
                            Obligaciones (Art. 70)
                        </h2>
                        <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
                            Actualizado: Octubre 2024
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {TRANSPARENCY_CATEGORIES.map((cat) => (
                            <a 
                                key={cat.id} 
                                href={cat.link}
                                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 transition-all group flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-rose-50 transition-colors border border-slate-100">
                                        <cat.icon className="h-6 w-6 text-slate-600 group-hover:text-rose-600 transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded border border-slate-100 group-hover:text-rose-600 group-hover:border-rose-100 transition-colors uppercase tracking-wider">
                                        {cat.articleRef}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-rose-700 transition-colors">{cat.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{cat.description}</p>
                                <div className="pt-4 border-t border-slate-50 flex items-center text-xs font-bold text-rose-600 group-hover:text-rose-700">
                                    Consultar Información <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sidebar: Featured Documents & Links */}
                <div className="lg:col-span-4 xl:col-span-4 space-y-8">
                    
                    {/* Featured Documents Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                        <div className="mb-6 pb-4 border-b border-slate-100">
                            <h3 className="font-bold text-slate-900 text-lg flex items-center">
                                <Download className="h-5 w-5 mr-2 text-rose-600" />
                                Documentos Destacados
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">Descarga directa en formato PDF</p>
                        </div>
                        
                        <ul className="space-y-4">
                            {[
                                'Plan Municipal de Desarrollo 2024-2027',
                                'Bando de Policía y Buen Gobierno',
                                'Ley de Ingresos Municipal 2024',
                                'Presupuesto de Egresos 2024',
                                'Tabulador de Sueldos y Salarios',
                                'Manual de Organización Administrativa',
                                'Reglamento de Tránsito y Vialidad',
                                'Código de Ética de Servidores Públicos',
                                'Gaceta Municipal - Octubre 2023',
                                'Informe Anual de Actividades'
                            ].map((doc, idx) => (
                                <li key={idx} className="group">
                                    <a href="#" className="flex items-start p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors">
                                        <div className="mt-1.5 mr-3 h-2 w-2 rounded-full bg-slate-300 group-hover:bg-rose-500 transition-colors flex-shrink-0"></div>
                                        <div>
                                            <span className="text-sm font-medium text-slate-700 group-hover:text-rose-700 transition-colors leading-snug block">
                                                {doc}
                                            </span>
                                            <span className="text-[10px] text-slate-400 font-normal mt-0.5 block group-hover:text-rose-400">
                                                PDF • Disponible para descarga
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full mt-8 py-3 px-4 text-sm font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-100 flex items-center justify-center">
                            Ver repositorio completo
                            <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                    </div>

                    {/* External Links Card */}
                    <div className="bg-slate-800 p-8 rounded-2xl shadow-lg text-white">
                        <h3 className="font-bold text-white mb-6 flex items-center text-lg">
                            <ExternalLink className="h-5 w-5 mr-2 text-rose-300" />
                            Enlaces de Interés
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="block hover:bg-white/10 p-4 -mx-4 rounded-xl transition-colors group">
                                    <span className="font-bold text-sm block group-hover:text-rose-200">PNT</span>
                                    <span className="text-xs text-slate-400 group-hover:text-slate-300">Plataforma Nacional de Transparencia</span>
                                </a>
                            </li>
                            <li className="border-t border-slate-700/50 pt-2">
                                <a href="#" className="block hover:bg-white/10 p-4 -mx-4 rounded-xl transition-colors group">
                                    <span className="font-bold text-sm block group-hover:text-rose-200">INAI</span>
                                    <span className="text-xs text-slate-400 group-hover:text-slate-300">Instituto Nacional de Transparencia</span>
                                </a>
                            </li>
                            <li className="border-t border-slate-700/50 pt-2">
                                <a href="#" className="block hover:bg-white/10 p-4 -mx-4 rounded-xl transition-colors group">
                                    <span className="font-bold text-sm block group-hover:text-rose-200">SEVAC</span>
                                    <span className="text-xs text-slate-400 group-hover:text-slate-300">Sistema de Evaluaciones de Armonización</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Request Info Banner */}
            <div className="mt-16 bg-gradient-to-r from-rose-900 to-rose-800 rounded-3xl p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-3">¿No encontraste lo que buscabas?</h2>
                        <p className="text-rose-100 max-w-xl text-base leading-relaxed">
                            Tienes derecho a saber. Realiza una solicitud de acceso a la información pública de manera gratuita a través de la Plataforma Nacional.
                        </p>
                    </div>
                    <button className="whitespace-nowrap bg-white text-rose-900 px-8 py-4 rounded-xl font-bold hover:bg-rose-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center text-lg">
                        Realizar Solicitud SIPOT
                        <ExternalLink className="ml-2 h-5 w-5" />
                    </button>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            </div>
        </div>
    </div>
  );
};

export default Transparency;

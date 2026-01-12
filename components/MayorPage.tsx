
import React from 'react';
import { MAYOR_DATA, GOVERNMENT_AXES } from '../data/institutional/government';
import { Facebook, Twitter, Instagram, Quote, CalendarDays, ArrowRight, Play } from 'lucide-react';

const MayorPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up bg-slate-50">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900 group">
        {/* Background Image with slight Parallax/Zoom */}
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2069&auto=format&fit=crop" 
                alt="Palacio Municipal" 
                className="w-full h-full object-cover opacity-30 transform scale-105 group-hover:scale-110 transition-transform duration-[10s]"
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-950/95 via-slate-900/80 to-slate-900/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
                    
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left z-10">
                        <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                            <span>Administración {MAYOR_DATA.period}</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-none drop-shadow-2xl">
                            {MAYOR_DATA.name.split(" ").slice(0, 2).join(" ")} <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-rose-500">
                                {MAYOR_DATA.name.split(" ").slice(2).join(" ")}
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-3xl text-slate-300 font-light mb-10 tracking-wide border-l-4 border-rose-600 pl-6">
                            {MAYOR_DATA.title}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                            <button className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-rose-600/30 hover:-translate-y-1 flex items-center">
                                Conocer Plan de Desarrollo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            
                            <div className="flex space-x-2">
                                <a href={MAYOR_DATA.social.facebook} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-rose-600 hover:border-rose-600 transition-all text-white backdrop-blur-sm"><Facebook className="h-5 w-5"/></a>
                                <a href={MAYOR_DATA.social.twitter} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-rose-600 hover:border-rose-600 transition-all text-white backdrop-blur-sm"><Twitter className="h-5 w-5"/></a>
                                <a href={MAYOR_DATA.social.instagram} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-rose-600 hover:border-rose-600 transition-all text-white backdrop-blur-sm"><Instagram className="h-5 w-5"/></a>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image (Mayor Cutout or Portrait) */}
                    <div className="flex-1 relative hidden md:flex h-full min-h-[500px] w-full max-w-lg items-center justify-center pt-10">
                        <div className="absolute inset-0 bg-rose-600 rounded-[3rem] rotate-3 opacity-20 blur-2xl top-12"></div>
                        <img 
                            src={MAYOR_DATA.photoUrl} 
                            alt={MAYOR_DATA.name}
                            className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white/10 object-cover hover:scale-[1.02] transition-transform duration-700"
                            style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'}}
                        />
                         {/* Signature Badge mockup */}
                        <div className="absolute -bottom-8 -right-8 bg-white text-rose-900 p-6 rounded-2xl shadow-xl max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
                            <p className="font-serif italic text-lg leading-tight">"Servir es un honor, cumplir es mi deber."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 2. STATS BAR (Floating) */}
      <div className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {MAYOR_DATA.stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                    <p className="text-4xl md:text-5xl font-black text-rose-900 mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>

      {/* 3. QUOTE, BIO & VIDEO SECTION (Refactored) */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        
        {/* Quote Block - Centered & Impactful */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
             <Quote className="h-16 w-16 text-rose-200 mx-auto mb-6 opacity-60" />
             <h2 className="text-3xl md:text-5xl font-serif text-slate-800 leading-tight italic relative z-10">
                "{MAYOR_DATA.quote}"
             </h2>
             <div className="w-32 h-1.5 bg-rose-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Bio Column */}
            <div className="lg:col-span-5 space-y-6">
                 <h3 className="text-xl font-bold text-rose-700 uppercase tracking-widest mb-4">Semblanza</h3>
                 <div className="prose prose-lg text-slate-600 text-justify leading-relaxed">
                    {MAYOR_DATA.bio.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                 </div>
                 
                 {/* 
                     REMOVED REDUNDANT NAME/TITLE SECTION HERE 
                     AS REQUESTED BY USER 
                 */}
            </div>

            {/* Video Column - Expanded for prominence */}
            <div className="lg:col-span-7">
                <div className="relative group cursor-pointer">
                    <div className="absolute -inset-2 bg-gradient-to-r from-rose-600 to-rose-900 rounded-[2rem] opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl aspect-video border border-slate-800">
                        <img 
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                            className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-105" 
                            alt="Video cover" 
                        />
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:bg-rose-600 group-hover:border-rose-600 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                                <Play className="h-8 w-8 md:h-10 md:w-10 text-white fill-white ml-1" />
                            </div>
                            <div className="mt-8 text-center px-8">
                                <span className="inline-block py-1 px-3 rounded-full bg-rose-600 text-white text-[10px] font-bold uppercase tracking-widest mb-3 shadow-lg">Destacado</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">100 Días de Resultados</h3>
                                <p className="text-slate-200 text-sm md:text-base max-w-md mx-auto hidden md:block">
                                    Resumen de las principales obras y acciones en beneficio de tu familia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 4. EJES DE GOBIERNO */}
      <div className="bg-slate-100 py-24 relative overflow-hidden">
        {/* Decorative Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h3 className="text-rose-600 font-bold tracking-widest uppercase mb-3 text-sm">Plan Municipal 2024-2027</h3>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Ejes Rectores de Gobierno</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                    Nuestra estrategia se basa en 8 pilares fundamentales diseñados para impulsar el desarrollo integral de nuestro municipio.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {GOVERNMENT_AXES.map((axis, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-2xl hover:border-rose-200 hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors duration-500 shadow-inner">
                            <axis.icon className="h-7 w-7 text-rose-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-700 transition-colors">{axis.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4">{axis.description}</p>
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-500 w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 5. AGENDA / CALL TO ACTION */}
      <div className="max-w-7xl mx-auto px-4 py-24">
         <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <CalendarDays className="h-16 w-16 text-rose-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Agenda Pública</h2>
                <p className="text-rose-100 text-lg mb-10">
                    La transparencia comienza con la agenda. Conoce las actividades diarias, recorridos y reuniones del Presidente Municipal.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-rose-900 px-8 py-4 rounded-xl font-bold hover:bg-rose-50 transition-colors shadow-lg text-lg">
                        Ver Agenda Semanal
                    </button>
                    <button className="bg-transparent border-2 border-rose-400 text-rose-100 px-8 py-4 rounded-xl font-bold hover:bg-rose-900/50 transition-colors text-lg">
                        Solicitar Audiencia
                    </button>
                </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default MayorPage;

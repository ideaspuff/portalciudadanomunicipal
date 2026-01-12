
import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight, ChevronRightCircle } from 'lucide-react';
import { SERVICES } from '../constants';
import { PORTAL_THEME } from '../styles/theme';

interface HeroProps {
  onServiceSelect: (id: string) => void;
}

const SLIDES = [
  {
    id: 1,
    // City / Plaza
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", 
    title: "Tu Municipio Digital",
    highlight: "Más cerca de ti",
    description: "Realiza tus trámites desde la comodidad de tu hogar, las 24 horas del día, los 365 días del año.",
    // Rose (Institucional)
    color: "from-rose-900/90 via-rose-900/80 to-slate-900/80", 
    ctaText: "Explorar Servicios",
    actionId: "scroll_catalog"
  },
  {
    id: 2,
    // Office / Calculator / Papers
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop", 
    title: "Cumple con tu Predial",
    highlight: "Tu contribución cuenta",
    description: "Aprovecha los descuentos por pronto pago. Tus impuestos se reflejan en mejores obras y servicios.",
    // Dark Slate/Rose (Serious, Finance)
    color: "from-slate-900/95 via-rose-950/90 to-slate-900/90",
    ctaText: "Pagar Predial Ahora",
    actionId: "predial"
  },
  {
    id: 3,
    // NUEVA IMAGEN: Trabajadores / Obra Pública / Pavimentación (Alternativa Robusta)
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", 
    title: "Reportes Ciudadanos",
    highlight: "Mejoremos la ciudad",
    description: "Reporta baches, fallas de alumbrado o fugas de agua en segundos. Genera un folio de atención inmediata.",
    // Neutral Dark Grey/Red (Urban/Alert)
    color: "from-stone-900/90 via-stone-800/80 to-rose-900/80",
    ctaText: "Levantar Reporte",
    actionId: "bacheo"
  },
  {
    id: 4,
    // Meeting / Business
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop", 
    title: "Apertura de Negocios",
    highlight: "Impulso Económico",
    description: "Abre tu empresa en menos de 72 horas con el sistema SARE. Emprendimiento fácil y sin burocracia.",
    // Emerald Green (Allowed)
    color: "from-emerald-900/90 via-emerald-800/80 to-slate-900/80",
    ctaText: "Abrir mi Negocio",
    actionId: "sare"
  },
  {
    id: 5,
    // NUEVA IMAGEN: Parque / Naturaleza / Paisaje Verde (Alternativa Robusta)
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop", 
    title: "Municipio Verde",
    highlight: "Cuidemos el entorno",
    description: "Participa en las campañas de reforestación, descacharrización y adopción de espacios públicos.",
    // Green (Allowed)
    color: "from-green-900/90 via-green-800/80 to-slate-900/80",
    ctaText: "Quiero Participar",
    actionId: "donacion_plantas"
  },
  {
    id: 6,
    // NUEVA IMAGEN: Ciudad Segura / Luces Nocturnas (Alternativa Robusta)
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop", 
    title: "Seguridad Ciudadana",
    highlight: "Tranquilidad para todos",
    description: "Conecta tu negocio al C4, reporta incidencias y conoce a tus policías de cuadrante.",
    // Dark Rose/Slate (Authority)
    color: "from-slate-900/95 via-rose-950/90 to-slate-950/90",
    ctaText: "Solicitar Asistencia",
    actionId: "reporte_seguridad"
  }
];

const Hero: React.FC<HeroProps> = ({ onServiceSelect }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [query, setQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState<typeof SERVICES>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentSlide((prevIndex) => (prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1)),
      6000 // 6 segundos por slide
    );
    return () => resetTimeout();
  }, [currentSlide]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 2) {
      const results = SERVICES.filter(s => 
        s.title.toLowerCase().includes(val.toLowerCase()) || 
        s.description.toLowerCase().includes(val.toLowerCase())
      );
      setFilteredServices(results);
    } else {
      setFilteredServices([]);
    }
  };

  const nextSlide = () => {
    setCurrentSlide(current => (current === SLIDES.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? SLIDES.length - 1 : current - 1));
  };

  const handleCtaClick = (actionId: string) => {
      if (actionId === 'scroll_catalog') {
          const catalogElement = document.getElementById('catalog-preview');
          if (catalogElement) {
              catalogElement.scrollIntoView({ behavior: 'smooth' });
          }
      } else {
          onServiceSelect(actionId);
      }
  };

  return (
    <div className="flex flex-col">
      {/* --- HERO SLIDER SECTION --- */}
      <div className="relative h-[650px] w-full overflow-hidden bg-slate-900 group">
        
        {/* Slides */}
        {SLIDES.map((slide, index) => (
            <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
                {/* Background Image with Scale Animation */}
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                    />
                </div>
                
                {/* Gradient Overlay (No Blue/Gold/Yellow) */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-black/20"></div> {/* Extra darkening for text contrast */}

                {/* Content Text */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 pb-12">
                    <div className="max-w-5xl animate-fade-in-up flex flex-col items-center">
                        
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
                            {slide.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-white font-extrabold">
                                {slide.highlight}
                            </span>
                        </h2>
                        
                        <p className="text-xl md:text-2xl text-rose-50/90 max-w-3xl mx-auto leading-relaxed font-medium mb-12 drop-shadow-md">
                            {slide.description}
                        </p>

                        <button 
                            onClick={() => handleCtaClick(slide.actionId)}
                            className="group relative px-10 py-5 bg-white text-rose-900 text-lg md:text-xl font-bold rounded-full hover:bg-rose-50 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] flex items-center mx-auto ring-4 ring-white/30 hover:scale-105"
                        >
                            {slide.ctaText}
                            <ChevronRightCircle className="ml-3 h-6 w-6 text-rose-600 group-hover:text-rose-800" />
                        </button>
                    </div>
                </div>
            </div>
        ))}

        {/* Controls */}
        <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 border border-white/10"
        >
            <ChevronLeft className="h-8 w-8" />
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 border border-white/10"
        >
            <ChevronRight className="h-8 w-8" />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center space-x-3">
            {SLIDES.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-500 shadow-lg ${
                        idx === currentSlide ? 'w-12 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'
                    }`}
                />
            ))}
        </div>
        
        {/* Bottom Curve/Wave Decoration to merge with search section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent z-10"></div>
      </div>

      {/* --- SEARCH SECTION (Separated) --- */}
      <div className="bg-slate-50 pb-16 relative z-30">
          <div className="max-w-4xl mx-auto px-4 -mt-12 relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-3 md:p-4 flex items-center transform transition-all hover:-translate-y-1 duration-300 ring-1 ring-black/5">
                <div className="pl-4 pr-3 border-r border-slate-100 mr-2">
                    <Search className="h-6 w-6 text-rose-500" />
                </div>
                <input 
                    type="text"
                    className="flex-1 h-12 bg-transparent text-lg text-slate-800 placeholder-slate-400 focus:outline-none font-medium px-2"
                    placeholder="¿Qué trámite buscas hoy? (Ej. baches, acta, licencia...)"
                    value={query}
                    onChange={handleSearch}
                />
                <button className="hidden md:block bg-rose-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-rose-800 transition-colors shadow-lg shadow-rose-900/20">
                    Buscar
                </button>
            </div>

            {/* Results Dropdown */}
            {filteredServices.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-white rounded-2xl shadow-2xl border border-slate-100 max-h-80 overflow-y-auto divide-y divide-slate-50 z-50 animate-fade-in-up">
                    <div className="bg-slate-50 px-4 py-3 text-xs font-extrabold text-rose-900/70 uppercase tracking-wider sticky top-0 backdrop-blur-sm">
                        Resultados encontrados ({filteredServices.length})
                    </div>
                    {filteredServices.map(service => (
                        <div 
                        key={service.id}
                        onClick={() => onServiceSelect(service.id)}
                        className="px-6 py-4 hover:bg-rose-50 cursor-pointer transition-colors group"
                        >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-slate-800 group-hover:text-rose-700">{service.title}</p>
                                <p className="text-xs text-slate-500 truncate max-w-md mt-0.5">{service.description}</p>
                            </div>
                            <span className="text-xs font-bold text-slate-400 bg-slate-100 rounded-lg px-2.5 py-1 group-hover:bg-white group-hover:text-rose-600 transition-colors">
                                {service.category}
                            </span>
                        </div>
                        </div>
                    ))}
                </div>
            )}
          </div>

          <div className="text-center mt-8 text-sm text-slate-400 font-medium">
             Trámites más buscados: 
             <button className="text-rose-600 font-bold hover:underline hover:text-rose-800 mx-2 transition-colors" onClick={() => onServiceSelect('predial')}>Predial</button> • 
             <button className="text-rose-600 font-bold hover:underline hover:text-rose-800 mx-2 transition-colors" onClick={() => onServiceSelect('bacheo')}>Baches</button> • 
             <button className="text-rose-600 font-bold hover:underline hover:text-rose-800 mx-2 transition-colors" onClick={() => onServiceSelect('constancia_residencia')}>Constancia de Residencia</button>
          </div>
      </div>
    </div>
  );
};

export default Hero;

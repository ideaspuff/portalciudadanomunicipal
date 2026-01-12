
import React, { useState, useEffect } from 'react';
import { SERVICES, CATEGORIES } from '../constants';
import { PORTAL_THEME } from '../styles/theme';
import { ServiceDefinition } from '../types';
import { 
  Clock, 
  ArrowRight, 
  LayoutGrid, 
  Building2, 
  TrafficCone, 
  Briefcase, 
  Map, 
  HardHat, 
  Leaf, 
  ShieldCheck, 
  HeartHandshake, 
  Camera, 
  Trophy, 
  Vote,
  Stethoscope,
  Landmark,
  LucideIcon,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface ServiceCatalogProps {
  onServiceSelect: (id: string) => void;
}

// Mapeo de Iconos
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Urbanismo': Building2,
  'Tránsito y Vialidad': TrafficCone,
  'Desarrollo Económico': Briefcase,
  'Catastro': Map,
  'Protección Civil': HardHat,
  'Ecología': Leaf,
  'Seguridad': ShieldCheck,
  'Bienestar Social': HeartHandshake,
  'Tesorería y Finanzas': Landmark,
  'Salud Municipal': Stethoscope,
  'Turismo': Camera,
  'Cultura y Deporte': Trophy,
  'Participación Ciudadana': Vote
};

// Función auxiliar para mezclar array (Fisher-Yates Shuffle)
const shuffleArray = (array: ServiceDefinition[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ onServiceSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [shuffledServices, setShuffledServices] = useState<ServiceDefinition[]>([]);
  
  // Estados de Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Efecto para aleatorizar los servicios al montar el componente
  useEffect(() => {
    setShuffledServices(shuffleArray(SERVICES));
  }, []);

  // Efecto para regresar a la página 1 cuando cambia la categoría o el tamaño de página
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, itemsPerPage]);

  // Filtrado
  const filtered = selectedCategory === 'Todos' 
    ? shuffledServices 
    : shuffledServices.filter(s => s.category === selectedCategory);

  // Lógica de Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={`py-20 ${PORTAL_THEME.colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={PORTAL_THEME.catalog.sectionTitle}>Catálogo Digital</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Encuentra tu trámite
          </p>
          <div className="w-24 h-1 bg-rose-500 mx-auto mt-6 rounded-full"></div>
          <p className="max-w-2xl text-lg text-slate-500 mx-auto mt-6">
            Selecciona una categoría para filtrar los servicios disponibles o explora el listado completo.
          </p>
        </div>

        {/* --- GRID DE CATEGORÍAS --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-16">
          {/* Botón "Todos" */}
          <button
            onClick={() => setSelectedCategory('Todos')}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 border ${
              selectedCategory === 'Todos'
                ? PORTAL_THEME.catalog.filterButtonActive
                : PORTAL_THEME.catalog.filterButtonInactive
            }`}
          >
            <LayoutGrid className={`h-8 w-8 mb-3 ${selectedCategory === 'Todos' ? 'text-white' : 'text-slate-400'}`} />
            <span className="font-semibold text-sm">Todos</span>
          </button>

          {CATEGORIES.map(cat => {
            const Icon = CATEGORY_ICONS[cat] || LayoutGrid;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? PORTAL_THEME.catalog.filterButtonActive
                    : PORTAL_THEME.catalog.filterButtonInactive
                }`}
              >
                <Icon className={`h-8 w-8 mb-3 ${isSelected ? 'text-white' : 'text-rose-900/40 group-hover:text-rose-700'}`} />
                <span className="font-bold text-sm text-center leading-tight">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* --- BARRA DE RESULTADOS Y CONTROLES --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b border-slate-200 pb-4 gap-4">
            <div className="flex items-center">
                <h3 className="text-2xl font-bold text-slate-800">
                    {selectedCategory === 'Todos' ? 'Todos los Servicios' : `Servicios de ${selectedCategory}`}
                </h3>
                <span className="ml-4 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full border border-rose-200">
                    {filtered.length} resultados
                </span>
            </div>

            {/* Selector de Items por Página */}
            <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-500 font-medium">Mostrar:</span>
                <div className="relative">
                    <select 
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        className="appearance-none bg-white border border-slate-300 text-slate-700 py-1.5 pl-3 pr-8 rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent cursor-pointer shadow-sm hover:bg-slate-50 transition-colors"
                    >
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                        <option value={36}>36</option>
                        <option value={48}>48</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </div>

        {filtered.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 text-lg font-medium">No hay servicios disponibles en esta categoría por el momento.</p>
            </div>
        ) : (
            <>
                {/* --- GRID DE SERVICIOS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-in-up">
                    {currentItems.map((service) => (
                        <div 
                        key={service.id}
                        className={PORTAL_THEME.catalog.card}
                        >
                        <div className="p-7 flex-1">
                            <div className="flex items-start justify-between mb-5">
                                <span className={`inline-flex items-center justify-center p-3.5 rounded-2xl ${PORTAL_THEME.catalog.cardIconBg} shadow-sm`}>
                                    <service.icon className={`h-7 w-7 ${PORTAL_THEME.catalog.cardIcon}`} />
                                </span>
                                <span className={PORTAL_THEME.catalog.categoryPill}>
                                    {service.category}
                                </span>
                            </div>
                            <h3 className={`text-xl mb-3 ${PORTAL_THEME.catalog.cardTitle}`}>{service.title}</h3>
                            <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex items-center text-xs text-slate-400 font-bold bg-slate-50 py-1.5 px-3 rounded-lg inline-flex">
                                <Clock className="h-3.5 w-3.5 mr-2 text-rose-400" />
                                <span>Tiempo de Respuesta: {service.sla}</span>
                            </div>
                        </div>
                        <div className={PORTAL_THEME.catalog.actionContainer}>
                            <button
                                onClick={() => onServiceSelect(service.id)}
                                className={PORTAL_THEME.catalog.actionButton}
                            >
                                <span>Iniciar Trámite</span>
                                <div className="bg-rose-100 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </div>
                        </div>
                    ))}
                </div>

                {/* --- CONTROLES DE PAGINACIÓN --- */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2">
                        <button 
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        
                        {/* Generación dinámica de números de página */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
                            // Lógica para mostrar solo algunas páginas si son muchas (opcional, aquí simple para < 10 pags)
                            return (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                                        currentPage === number
                                            ? 'bg-rose-900 text-white shadow-md transform scale-105'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-rose-50 hover:text-rose-700'
                                    }`}
                                >
                                    {number}
                                </button>
                            );
                        })}

                        <button 
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                )}
                
                {/* Info de Paginación */}
                <div className="text-center mt-4 text-xs text-slate-400">
                    Mostrando {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filtered.length)} de {filtered.length} trámites
                </div>
            </>
        )}
      </div>
    </div>
  );
};

export default ServiceCatalog;

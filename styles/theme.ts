
// FUENTE DE LA VERDAD - NIVEL PORTAL
// Define la paleta de colores, tipografías, sombras y comportamientos generales de la UI.

export const PORTAL_THEME = {
  colors: {
    primary: "bg-rose-900", // Color base institucional (Vino)
    primaryGradient: "bg-gradient-to-r from-rose-900 via-rose-800 to-red-900", // Degradado moderno
    secondary: "bg-rose-50", // Fondos claros con tinte
    accent: "text-rose-600", // Texto destacado
    accentHover: "hover:text-rose-800",
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-500",
    textLight: "text-slate-100",
    background: "bg-slate-50",
    border: "border-slate-200",
    borderActive: "border-rose-200",
  },
  
  // Estilos de Componentes Específicos
  navbar: {
    container: "bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 text-white sticky top-0 z-50 shadow-xl backdrop-blur-sm bg-opacity-95",
    link: "hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
    buttonCTA: "bg-white text-rose-900 hover:bg-rose-50 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
    logoIcon: "text-rose-300",
  },

  hero: {
    overlay: "bg-gradient-to-r from-rose-950/90 via-rose-900/80 to-slate-900/80",
    title: "text-white font-extrabold tracking-tight",
    highlight: "text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-orange-100",
    searchBar: "block w-full pl-10 pr-3 py-4 border-0 rounded-2xl leading-5 bg-white/95 backdrop-blur text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-rose-500/30 shadow-2xl transition-all",
    searchIcon: "text-rose-900",
  },

  catalog: {
    sectionTitle: "text-rose-800 font-bold tracking-widest uppercase text-sm",
    card: "bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col group hover:-translate-y-2 relative",
    cardIconBg: "bg-rose-50 group-hover:bg-rose-600 transition-colors duration-500",
    cardIcon: "text-rose-700 group-hover:text-white transition-colors duration-500",
    cardTitle: "text-slate-900 font-bold group-hover:text-rose-800 transition-colors",
    categoryPill: "bg-slate-100 text-slate-500 border border-slate-200 uppercase text-[10px] font-bold tracking-wider px-2 py-1 rounded",
    actionButton: "w-full flex items-center justify-between text-rose-700 font-bold text-sm group-hover:text-white transition-colors relative z-10",
    actionContainer: "px-6 py-4 bg-rose-50/50 border-t border-rose-100 group-hover:bg-rose-600 transition-colors duration-300",
    
    // Botones de filtro
    filterButtonActive: "bg-rose-800 text-white shadow-lg scale-105 border-rose-800 ring-2 ring-rose-200",
    filterButtonInactive: "bg-white text-slate-500 border-slate-200 hover:border-rose-300 hover:text-rose-700 hover:shadow-md",
  },

  footer: {
    container: "bg-slate-900 text-slate-400 py-16 border-t border-rose-900",
    heading: "text-white font-semibold mb-4 text-lg",
    link: "hover:text-rose-400 cursor-pointer transition-colors",
  }
};

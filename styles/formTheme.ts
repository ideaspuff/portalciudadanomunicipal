
// ESTILOS UNIFICADOS PARA FORMULARIOS - NIVEL FORMULARIO
// Define la apariencia específica de inputs, labels y estructura de formularios.

export const FORM_THEME = {
    // Contenedor de cada campo
    fieldContainer: "relative bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-lg hover:border-rose-200 group",
    
    // Etiquetas (Labels)
    label: "block text-sm font-bold text-slate-700 mb-2 tracking-wide group-focus-within:text-rose-700 transition-colors",
    
    // Inputs (Texto, Número, Email, Fecha)
    input: "block w-full rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 shadow-sm focus:bg-white focus:border-rose-500 focus:ring-rose-500 focus:ring-4 focus:ring-opacity-20 sm:text-sm p-3.5 transition-all outline-none",
    
    // Inputs de solo lectura
    readOnly: "bg-slate-100 text-slate-500 border-slate-200 cursor-not-allowed select-none italic",
    
    // Áreas de texto (Textarea)
    textarea: "block w-full rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 shadow-sm focus:bg-white focus:border-rose-500 focus:ring-rose-500 focus:ring-4 focus:ring-opacity-20 sm:text-sm p-3.5 transition-all outline-none resize-y min-h-[120px]",
    
    // Listas desplegables (Select)
    select: "block w-full rounded-xl border border-slate-300 bg-slate-50 text-slate-900 shadow-sm focus:bg-white focus:border-rose-500 focus:ring-rose-500 focus:ring-4 focus:ring-opacity-20 sm:text-sm p-3.5 appearance-none outline-none cursor-pointer",
    
    // Checkboxes
    checkboxWrapper: "flex items-center p-4 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-rose-50 hover:border-rose-200 transition-all",
    checkbox: "h-5 w-5 text-rose-700 focus:ring-rose-600 border-gray-300 rounded cursor-pointer accent-rose-700",
    checkboxLabel: "ml-3 block text-sm text-slate-900 font-medium cursor-pointer select-none",
    
    // Subida de archivos (File Upload)
    fileUploadContainer: "mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-slate-300 border-dashed rounded-2xl hover:bg-rose-50 hover:border-rose-400 transition-all cursor-pointer relative bg-white group",
    fileUploadIcon: "mx-auto h-12 w-12 text-slate-400 group-hover:text-rose-500 transition-colors transform group-hover:scale-110 duration-300",
    fileUploadText: "relative cursor-pointer rounded-md font-bold text-rose-700 hover:text-rose-800 focus-within:outline-none underline decoration-2 decoration-transparent hover:decoration-rose-300 transition-all",
    
    // Secciones y Títulos dentro del form
    sectionContainer: "pt-10 pb-4 mb-8 border-b border-slate-200",
    sectionTitle: "text-xl font-extrabold text-slate-800 flex items-center border-l-4 border-rose-600 pl-4",
    sectionHelper: "text-sm text-slate-500 mt-2 pl-4",
    
    // Botón Principal
    submitButton: "w-full flex justify-center py-5 px-6 border border-transparent rounded-xl shadow-lg shadow-rose-900/20 text-lg font-bold text-white bg-gradient-to-r from-rose-700 to-rose-900 hover:from-rose-600 hover:to-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-500/50 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none",
    
    // Mensajes de ayuda
    helperText: "mt-2 text-xs text-slate-500 font-medium flex items-center bg-slate-50 p-2 rounded-lg inline-block",
    requiredAsterisk: "text-rose-600 ml-1 font-bold text-lg leading-none"
};

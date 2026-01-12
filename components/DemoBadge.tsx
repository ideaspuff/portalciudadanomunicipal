import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

const DemoBadge: React.FC = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    if (isDismissed) return null;

    return (
        <>
            {/* Floating Badge */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={() => setShowTooltip(!showTooltip)}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 border-2 border-amber-400/30"
                >
                    <Info className="h-3.5 w-3.5" />
                    <span>MODO DEMO</span>
                </button>

                {/* Tooltip / Info Panel */}
                {showTooltip && (
                    <div className="absolute top-14 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 animate-fade-in-up">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="bg-amber-100 p-2 rounded-lg">
                                    <Info className="h-5 w-5 text-amber-600" />
                                </div>
                                <h3 className="font-bold text-slate-800">Proyecto Demostrativo</h3>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowTooltip(false);
                                    setIsDismissed(true);
                                }}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                            <p className="font-semibold text-amber-700">⚠️ Importante:</p>

                            <ul className="space-y-2 text-xs">
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-2">•</span>
                                    <span>Este es un <strong>proyecto demostrativo</strong> con fines ilustrativos únicamente.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-2">•</span>
                                    <span><strong>No ingrese información real</strong>. No existe una base de datos que almacene o registre datos.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-2">•</span>
                                    <span>Este proyecto <strong>no representa ni está afiliado</strong> a ninguna entidad gubernamental.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-500 mr-2">•</span>
                                    <span>Todos los datos, nombres y trámites son <strong>ficticios</strong> y creados únicamente para demostración.</span>
                                </li>
                            </ul>

                            <p className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
                                Desarrollado como ejemplo de interfaz web
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Prevent click-through */}
            {showTooltip && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowTooltip(false)}
                />
            )}
        </>
    );
};

export default DemoBadge;

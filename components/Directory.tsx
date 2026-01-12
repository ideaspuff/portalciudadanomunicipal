
import React, { useState } from 'react';
import { OFFICIALS_DIRECTORY } from '../data/institutional/government';
import { Search, Mail, Phone, MapPin } from 'lucide-react';
import { PORTAL_THEME } from '../styles/theme';

const Directory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'Todos' | 'Cabildo' | 'Gabinete'>('Todos');

    const filteredOfficials = OFFICIALS_DIRECTORY.filter(official => {
        const matchesSearch = official.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              official.position.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTab = activeTab === 'Todos' || official.area === activeTab;
        return matchesSearch && matchesTab;
    });

    return (
        <div className="py-12 bg-slate-50 min-h-screen animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-black text-slate-900 mb-4">Directorio de Funcionarios</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Conoce a los servidores públicos que trabajan para ti. Encuentra sus datos de contacto y ubicación de oficinas.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex space-x-2 bg-slate-100 p-1 rounded-xl">
                        {['Todos', 'Cabildo', 'Gabinete'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                    activeTab === tab 
                                    ? 'bg-white text-rose-800 shadow-sm' 
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input 
                            type="text" 
                            placeholder="Buscar por nombre o cargo..." 
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOfficials.map((official) => (
                        <div key={official.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
                            <div className="flex items-start gap-4">
                                <img 
                                    src={official.photoUrl} 
                                    alt={official.name} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 group-hover:border-rose-200 transition-colors"
                                />
                                <div>
                                    <h3 className="font-bold text-slate-900 group-hover:text-rose-700 transition-colors">{official.name}</h3>
                                    <p className="text-sm text-rose-600 font-medium mb-1">{official.position}</p>
                                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200">
                                        {official.area}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                                <a href={`mailto:${official.email}`} className="flex items-center text-sm text-slate-600 hover:text-rose-700 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3 group-hover:bg-rose-50">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <span className="truncate">{official.email}</span>
                                </a>
                                {official.phoneExtension && (
                                    <div className="flex items-center text-sm text-slate-600">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3">
                                            <Phone className="h-4 w-4" />
                                        </div>
                                        <span>Ext. {official.phoneExtension}</span>
                                    </div>
                                )}
                                {official.location && (
                                    <div className="flex items-center text-sm text-slate-600">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mr-3">
                                            <MapPin className="h-4 w-4" />
                                        </div>
                                        <span className="truncate">{official.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredOfficials.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400">No se encontraron funcionarios con esos criterios.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Directory;

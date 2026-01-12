
import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/institutional/news';
import { CalendarDays, Tag, ArrowRight, Filter, Search, Newspaper } from 'lucide-react';
import { PORTAL_THEME } from '../styles/theme';

const NewsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Extract unique categories
    const categories = ['Todas', ...Array.from(new Set(NEWS_ARTICLES.map(n => n.category)))];

    // Filter Logic
    const filteredNews = NEWS_ARTICLES.filter(news => {
        const matchesCategory = selectedCategory === 'Todas' || news.category === selectedCategory;
        const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              news.summary.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="py-12 bg-slate-50 min-h-screen animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="mb-12 border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="p-2 bg-rose-100 rounded-lg">
                                <Newspaper className="h-6 w-6 text-rose-700" />
                            </span>
                            <span className="text-sm font-bold text-rose-700 tracking-wider uppercase">Tu Municipio Informa</span>
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Sala de Prensa</h1>
                        <p className="text-slate-500 mt-2 text-lg">Mantente informado del acontecer municipal, obras y avisos importantes.</p>
                    </div>
                    
                    {/* Search Bar Mobile/Desktop */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input 
                            type="text" 
                            placeholder="Buscar noticia..." 
                            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* LEFT COLUMN: News Grid (2 Columns inside) - Spans 8/12 */}
                    <div className="lg:col-span-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-slate-800">
                                {selectedCategory === 'Todas' ? 'Últimas Noticias' : `Noticias de ${selectedCategory}`}
                            </h2>
                            <span className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded-md">
                                {filteredNews.length} resultados
                            </span>
                        </div>

                        {filteredNews.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredNews.map((news) => (
                                    <div key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all group flex flex-col h-full hover:-translate-y-1 duration-300">
                                        <div className="h-48 overflow-hidden relative">
                                            <img 
                                                src={news.imageUrl} 
                                                alt={news.title} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-rose-800 shadow-sm uppercase tracking-wide">
                                                {news.category}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center text-slate-400 text-xs font-medium mb-3">
                                                <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-rose-500" />
                                                {news.date}
                                            </div>
                                            
                                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-rose-700 transition-colors leading-tight">
                                                {news.title}
                                            </h3>
                                            
                                            <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                                                {news.summary}
                                            </p>
                                            
                                            <div className="pt-4 border-t border-slate-100 mt-auto">
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {news.tags.slice(0, 2).map(tag => (
                                                        <span key={tag} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100 flex items-center">
                                                            <Tag className="h-3 w-3 mr-1 opacity-50" /> {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <button className="text-rose-700 font-bold text-xs flex items-center hover:underline">
                                                    Leer nota completa <ArrowRight className="ml-1 h-3 w-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 border-dashed">
                                <p className="text-slate-400 font-medium">No se encontraron noticias con estos criterios.</p>
                                <button onClick={() => {setSelectedCategory('Todas'); setSearchTerm('')}} className="mt-4 text-rose-600 font-bold text-sm hover:underline">
                                    Ver todas las noticias
                                </button>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: Sidebar (Categories) - Spans 4/12 */}
                    <div className="lg:col-span-4 space-y-8">
                        
                        {/* Categories Widget */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
                            <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
                                <Filter className="h-5 w-5 text-rose-600 mr-2" />
                                <h3 className="font-bold text-slate-900">Categorías</h3>
                            </div>
                            
                            <div className="space-y-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                            selectedCategory === cat 
                                            ? 'bg-rose-50 text-rose-800 border border-rose-200 shadow-sm' 
                                            : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-rose-600 border border-transparent'
                                        }`}
                                    >
                                        <span>{cat}</span>
                                        {cat !== 'Todas' && (
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === cat ? 'bg-rose-200/50 text-rose-800' : 'bg-slate-100 text-slate-400'}`}>
                                                {NEWS_ARTICLES.filter(n => n.category === cat).length}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tags Cloud (Decorative but functional-ish feeling) */}
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <h4 className="font-bold text-slate-900 text-sm mb-4">Etiquetas Populares</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Obras Públicas', 'Seguridad', 'Vialidad', 'Predial', 'Cultura', 'DIF', 'Medio Ambiente'].map(tag => (
                                        <span key={tag} className="text-xs bg-slate-50 text-slate-500 px-3 py-1.5 rounded-full border border-slate-200 cursor-default hover:border-rose-200 hover:text-rose-600 transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter / Subscribe Box */}
                            <div className="mt-8 bg-slate-900 rounded-xl p-5 text-white text-center">
                                <h4 className="font-bold mb-2 text-sm">¿Quieres recibir noticias?</h4>
                                <p className="text-xs text-slate-400 mb-4">Suscríbete al boletín digital semanal.</p>
                                <input type="email" placeholder="Tu correo electrónico" className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs mb-2 focus:outline-none focus:border-rose-500"/>
                                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 rounded-lg text-xs transition-colors">
                                    Suscribirme
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsPage;

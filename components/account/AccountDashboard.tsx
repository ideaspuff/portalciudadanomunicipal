
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  User, 
  Bell, 
  LogOut, 
  Settings, 
  Search, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  FileSearch,
  ChevronRight,
  Download
} from 'lucide-react';
import { PORTAL_THEME } from '../../styles/theme';

interface AccountDashboardProps {
  user: { name: string; email: string };
  onLogout: () => void;
}

// MOCK DATA FOR DASHBOARD
const RECENT_TICKETS = [
  { id: 'FOL-29384', service: 'Reparación de Baches', date: '12 Oct, 2023', status: 'En Proceso', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { id: 'FOL-29100', service: 'Pago de Predial', date: '05 Oct, 2023', status: 'Finalizado', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { id: 'FOL-28933', service: 'Licencia de Funcionamiento', date: '20 Sep, 2023', status: 'Requiere Atención', color: 'text-rose-600 bg-rose-50 border-rose-200' },
  { id: 'FOL-28102', service: 'Reporte de Alumbrado', date: '10 Ago, 2023', status: 'Finalizado', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
];

const NOTIFICATIONS = [
  { id: 1, title: 'Su pago de Predial fue aprobado', time: 'Hace 2 horas', unread: true },
  { id: 2, title: 'Respuesta a solicitud FOL-28933', time: 'Ayer', unread: false },
  { id: 3, title: 'Campaña de vacunación en su colonia', time: 'Hace 3 días', unread: false },
];

type Tab = 'resumen' | 'tramites' | 'perfil' | 'mensajes';

const AccountDashboard: React.FC<AccountDashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState<Tab>('resumen');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ tab, icon: Icon, label }: { tab: Tab; icon: any; label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-medium ${
        activeTab === tab
          ? 'bg-rose-900 text-white shadow-md'
          : 'text-slate-500 hover:bg-rose-50 hover:text-rose-700'
      }`}
    >
      <Icon className={`h-5 w-5 ${activeTab === tab ? 'text-rose-200' : ''}`} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-100 flex animate-fade-in-up">
      
      {/* SIDEBAR (Desktop) */}
      <div className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200 fixed h-full z-20">
        <div className="p-8 border-b border-slate-100">
            <h2 className="text-2xl font-black text-rose-900 tracking-tight">Mi Cuenta</h2>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Portal Ciudadano</p>
        </div>
        
        <div className="flex-1 p-6 space-y-2 overflow-y-auto">
            <NavItem tab="resumen" icon={LayoutDashboard} label="Resumen General" />
            <NavItem tab="tramites" icon={FileText} label="Mis Trámites" />
            <NavItem tab="mensajes" icon={Bell} label="Notificaciones" />
            <NavItem tab="perfil" icon={User} label="Mi Perfil" />
            
            <div className="pt-6 mt-6 border-t border-slate-100">
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all">
                    <Settings className="h-5 w-5" />
                    <span>Configuración</span>
                </button>
            </div>
        </div>

        <div className="p-6 border-t border-slate-100">
            <button 
                onClick={onLogout}
                className="w-full flex items-center justify-center space-x-2 bg-slate-50 text-slate-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 border border-slate-200 px-4 py-3 rounded-xl transition-all font-bold"
            >
                <LogOut className="h-5 w-5" />
                <span>Cerrar Sesión</span>
            </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-72">
        
        {/* TOP BAR */}
        <header className="bg-white h-20 border-b border-slate-200 sticky top-0 z-10 px-8 flex items-center justify-between shadow-sm/50 backdrop-blur-md bg-white/90">
            <div className="flex items-center">
                <h2 className="text-xl font-bold text-rose-900">
                    {activeTab === 'resumen' && 'Hola, ' + user.name.split(' ')[0]}
                    {activeTab === 'tramites' && 'Historial de Trámites'}
                    {activeTab === 'perfil' && 'Datos Personales'}
                    {activeTab === 'mensajes' && 'Buzón de Mensajes'}
                </h2>
            </div>
            <div className="flex items-center space-x-6">
                <div className="relative cursor-pointer group">
                    <Bell className="h-6 w-6 text-slate-400 group-hover:text-rose-600 transition-colors" />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
                </div>
                <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-slate-700 leading-none">{user.name}</p>
                        <p className="text-xs text-slate-400 mt-1">{user.email}</p>
                    </div>
                    <div className="h-10 w-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 font-bold border-2 border-white shadow-sm">
                        {user.name.charAt(0)}
                    </div>
                </div>
            </div>
        </header>

        {/* CONTENT AREA */}
        <main className="p-8 max-w-6xl mx-auto">
            
            {activeTab === 'resumen' && (
                <div className="space-y-8 animate-fade-in-up">
                    {/* Welcome Banner */}
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2">Bienvenido a tu Espacio Digital</h3>
                            <p className="text-slate-300 max-w-xl text-lg">Tienes <strong className="text-white">1 trámite</strong> pendiente de atención y <strong className="text-white">3 notificaciones</strong> nuevas.</p>
                            <div className="mt-8 flex gap-4">
                                <button onClick={() => setActiveTab('tramites')} className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                                    Ver mis trámites
                                </button>
                                <button className="bg-rose-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/50">
                                    Nuevo Trámite
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <span className="text-3xl font-black text-slate-800">2</span>
                            </div>
                            <h4 className="font-bold text-slate-700">En Proceso</h4>
                            <p className="text-xs text-slate-400 mt-1">Trámites activos</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <span className="text-3xl font-black text-slate-800">12</span>
                            </div>
                            <h4 className="font-bold text-slate-700">Finalizados</h4>
                            <p className="text-xs text-slate-400 mt-1">Histórico anual</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-rose-50 rounded-xl text-rose-600">
                                    <AlertCircle className="h-6 w-6" />
                                </div>
                                <span className="text-3xl font-black text-slate-800">1</span>
                            </div>
                            <h4 className="font-bold text-slate-700">Requiere Acción</h4>
                            <p className="text-xs text-slate-400 mt-1">Documentos pendientes</p>
                        </div>
                    </div>

                    {/* Recent Activity Table */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h3 className="font-bold text-slate-800 flex items-center">
                                <FileSearch className="mr-2 h-5 w-5 text-slate-400" />
                                Actividad Reciente
                            </h3>
                            <button onClick={() => setActiveTab('tramites')} className="text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center">
                                Ver todo <ChevronRight className="h-4 w-4 ml-1" />
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-400 uppercase bg-slate-50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Folio</th>
                                        <th className="px-6 py-4 font-bold">Trámite</th>
                                        <th className="px-6 py-4 font-bold">Fecha</th>
                                        <th className="px-6 py-4 font-bold">Estatus</th>
                                        <th className="px-6 py-4 font-bold text-right">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {RECENT_TICKETS.map((ticket) => (
                                        <tr key={ticket.id} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="px-6 py-4 font-mono font-bold text-slate-600">{ticket.id}</td>
                                            <td className="px-6 py-4 font-medium text-slate-900">{ticket.service}</td>
                                            <td className="px-6 py-4 text-slate-500">{ticket.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${ticket.color}`}>
                                                    {ticket.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-rose-600 font-bold">Detalles</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'tramites' && (
                <div className="animate-fade-in-up">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
                        <div className="flex items-center justify-between mb-8">
                             <div className="relative w-full max-w-md">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                <input type="text" placeholder="Buscar por folio o nombre..." className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500" />
                             </div>
                             <div className="flex gap-2">
                                <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50">Filtrar</button>
                                <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800">Descargar Reporte</button>
                             </div>
                        </div>
                        
                        {/* Just reusing the table for demo purposes, would be a full list */}
                        <div className="space-y-4">
                            {RECENT_TICKETS.map(ticket => (
                                <div key={ticket.id} className="p-6 border border-slate-100 rounded-2xl hover:border-rose-200 hover:shadow-md transition-all group cursor-pointer bg-white">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-rose-50 transition-colors">
                                                <FileText className="h-6 w-6 text-slate-400 group-hover:text-rose-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">{ticket.service}</h4>
                                                <p className="text-sm text-slate-500">Folio: <span className="font-mono text-slate-700">{ticket.id}</span> • Iniciado el {ticket.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${ticket.color}`}>
                                                {ticket.status}
                                            </span>
                                            <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-rose-400" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'perfil' && (
                <div className="max-w-3xl animate-fade-in-up">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                        <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-8">
                            <div className="h-24 w-24 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 text-3xl font-bold border-4 border-white shadow-lg">
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">{user.name}</h3>
                                <p className="text-slate-500">Ciudadano Verificado</p>
                                <button className="text-sm font-bold text-rose-600 mt-2 hover:underline">Cambiar fotografía</button>
                            </div>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                                    <input type="text" defaultValue={user.name} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all font-medium text-slate-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Correo Electrónico</label>
                                    <input type="email" defaultValue={user.email} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all font-medium text-slate-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono</label>
                                    <input type="tel" defaultValue="55 1234 5678" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all font-medium text-slate-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">CURP</label>
                                    <input type="text" defaultValue="ABCD800101HDFRNR00" disabled className="w-full px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 cursor-not-allowed font-medium" />
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-slate-100 flex justify-end">
                                <button type="button" className="px-8 py-3 bg-rose-700 text-white font-bold rounded-xl hover:bg-rose-800 shadow-lg shadow-rose-900/20 transition-all">
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {activeTab === 'mensajes' && (
                <div className="animate-fade-in-up">
                     <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[500px]">
                        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="font-bold text-slate-800">Notificaciones del Sistema</h3>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {NOTIFICATIONS.map(notif => (
                                <div key={notif.id} className={`p-6 hover:bg-slate-50 transition-colors flex items-start gap-4 cursor-pointer ${notif.unread ? 'bg-rose-50/30' : ''}`}>
                                    <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${notif.unread ? 'bg-rose-500' : 'bg-slate-200'}`}></div>
                                    <div className="flex-1">
                                        <h4 className={`text-sm ${notif.unread ? 'font-bold text-slate-900' : 'font-medium text-slate-600'}`}>{notif.title}</h4>
                                        <p className="text-xs text-slate-400 mt-1">{notif.time}</p>
                                    </div>
                                    {notif.unread && <button className="text-xs font-bold text-rose-600 hover:underline">Marcar leído</button>}
                                </div>
                            ))}
                        </div>
                     </div>
                </div>
            )}

        </main>
      </div>
    </div>
  );
};

export default AccountDashboard;


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCatalog from './components/ServiceCatalog';
import ServiceFlow from './components/ServiceFlow';
import DemoBadge from './components/DemoBadge';
import LegalDocs from './components/LegalDocs';
import MayorPage from './components/MayorPage';
import Directory from './components/Directory';
import Transparency from './components/Transparency';
import NewsPage from './components/NewsPage';
import AuthPage from './components/AuthPage';
import AccountDashboard from './components/account/AccountDashboard';
import { SERVICES, APP_NAME } from './constants';
import { ServiceDefinition } from './types';
import { PORTAL_THEME } from './styles/theme';

type ViewType = 'home' | 'catalog' | 'flow' | 'privacy' | 'terms' | 'president' | 'directory' | 'transparency' | 'news' | 'auth' | 'account';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedService, setSelectedService] = useState<ServiceDefinition | null>(null);

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string, email: string } | null>(null);

  const navigateToService = (serviceId: string) => {
    const service = SERVICES.find(s => s.id === serviceId);
    if (service) {
      setSelectedService(service);
      setCurrentView('flow');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigation = (view: string) => {
    if (view === 'auth' && isAuthenticated) {
      // If already logged in, go to account dashboard
      setCurrentView('account');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Type guard basic logic
    if (['home', 'catalog', 'president', 'directory', 'transparency', 'news', 'auth', 'account'].includes(view)) {
      setCurrentView(view as ViewType);
      setSelectedService(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setUser({ name: 'Juan Pérez', email: 'juan.perez@ciudadano.mx' });
    setCurrentView('account'); // Redirect to dashboard
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setCurrentView('home');
  };

  const openLegal = (type: 'privacy' | 'terms') => {
    setCurrentView(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${PORTAL_THEME.colors.background} flex flex-col font-sans`}>

      {/* Navbar visible unless in flow/legal/auth/account (immersive modes) */}
      {!['flow', 'privacy', 'terms', 'auth', 'account'].includes(currentView) && (
        <Navbar
          onNavigate={handleNavigation}
          isAuthenticated={isAuthenticated}
          userName={user?.name}
        />
      )}

      {/* Demo Badge - Always visible */}
      <DemoBadge />

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onServiceSelect={navigateToService} />
            <div id="catalog-preview">
              <ServiceCatalog onServiceSelect={navigateToService} />
            </div>
          </>
        )}

        {currentView === 'catalog' && (
          <ServiceCatalog onServiceSelect={navigateToService} />
        )}

        {currentView === 'president' && <MayorPage />}

        {currentView === 'directory' && <Directory />}

        {currentView === 'transparency' && <Transparency />}

        {currentView === 'news' && <NewsPage />}

        {currentView === 'auth' && (
          <AuthPage
            onBack={() => handleNavigation('home')}
            onLoginSuccess={handleLoginSuccess}
          />
        )}

        {currentView === 'account' && user && (
          <AccountDashboard
            user={user}
            onLogout={handleLogout}
          />
        )}

        {currentView === 'flow' && selectedService && (
          <ServiceFlow
            service={selectedService}
            onExit={() => handleNavigation('catalog')}
          />
        )}

        {currentView === 'privacy' && (
          <LegalDocs type="privacy" onBack={() => handleNavigation('home')} />
        )}

        {currentView === 'terms' && (
          <LegalDocs type="terms" onBack={() => handleNavigation('home')} />
        )}
      </main>



      {/* Footer */}
      {!['flow', 'privacy', 'terms', 'auth', 'account'].includes(currentView) && (
        <footer className={PORTAL_THEME.footer.container}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className={PORTAL_THEME.footer.heading}>{APP_NAME}</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Plataforma oficial para la gestión de servicios municipales. Comprometidos con la transparencia, la eficiencia y la atención ciudadana de calidad.
                </p>
              </div>
              <div>
                <h4 className={PORTAL_THEME.footer.heading}>Contacto Ciudadano</h4>
                <p className="text-sm mb-3 flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span> Palacio Municipal S/N, Centro</p>
                <p className="text-sm mb-3 flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span> Tel: (555) 123-4567</p>
                <p className="text-sm flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span> atencion@municipio.gob.mx</p>
              </div>
              <div>
                <h4 className={PORTAL_THEME.footer.heading}>Enlaces Rápidos</h4>
                <ul className="space-y-3 text-sm">
                  <li onClick={() => openLegal('privacy')} className={PORTAL_THEME.footer.link}>Aviso de Privacidad</li>
                  <li onClick={() => openLegal('terms')} className={PORTAL_THEME.footer.link}>Términos y Condiciones</li>
                  <li onClick={() => handleNavigation('transparency')} className={PORTAL_THEME.footer.link}>Portal de Transparencia</li>
                  <li onClick={() => handleNavigation('directory')} className={PORTAL_THEME.footer.link}>Directorio de Funcionarios</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800/50 mt-12 pt-8 text-center">
              <p className="text-xs text-slate-500">© {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;

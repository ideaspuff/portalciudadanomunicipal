
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowLeft, ArrowRight, CheckCircle, Shield, KeyRound, Eye, EyeOff } from 'lucide-react';
import { PORTAL_THEME } from '../styles/theme';

interface AuthPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

type AuthMode = 'LOGIN' | 'REGISTER' | 'RECOVER';

const AuthPage: React.FC<AuthPageProps> = ({ onBack, onLoginSuccess }) => {
  const [mode, setMode] = useState<AuthMode>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Estados del Formulario (Pre-llenados para DEMO)
  const [email, setEmail] = useState('ciudadano@ejemplo.com');
  const [password, setPassword] = useState('123456');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg('');

    // Simulador de API (Rápido para Demo)
    setTimeout(() => {
      setIsLoading(false);
      
      if (mode === 'RECOVER') {
        setSuccessMsg(`Hemos enviado un enlace de recuperación a ${email || 'tu correo'}`);
        return;
      }

      if (mode === 'REGISTER') {
        setMode('LOGIN');
        setSuccessMsg('Cuenta creada exitosamente. Por favor inicia sesión.');
        return;
      }

      // Login Success (Sin validación real)
      onLoginSuccess();
    }, 1000);
  };

  const toggleMode = (newMode: AuthMode) => {
    setMode(newMode);
    setSuccessMsg('');
    // Limpiar campos solo al cambiar a registro/recuperar para que login siempre esté listo
    if (newMode === 'REGISTER') {
        setName('');
        setEmail('');
        setPassword('');
    } else if (newMode === 'LOGIN') {
        setEmail('ciudadano@ejemplo.com');
        setPassword('123456');
    } else {
        setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex animate-fade-in-up">
      
      {/* LEFT COLUMN: Visual / Branding */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-full object-cover opacity-30"
             alt="City background"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 to-slate-900/90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-lg px-12 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-md border border-white/10 shadow-2xl">
                <Shield className="h-12 w-12 text-rose-300" />
            </div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                Tu Municipio <span className="text-rose-400">Digital</span>
            </h2>
            <p className="text-rose-100/80 text-lg mb-10 leading-relaxed font-light">
                Accede a todos los servicios municipales desde un solo lugar. Consulta adeudos, realiza pagos y da seguimiento a tus reportes ciudadanos de manera segura y transparente.
            </p>
            
            <div className="flex flex-col gap-4 text-left bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Trámites 100% digitales y seguros</span>
                </div>
                <div className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Historial de solicitudes en tiempo real</span>
                </div>
                <div className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Canal directo con el Alcalde</span>
                </div>
            </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        <button 
            onClick={onBack}
            className="absolute top-8 left-8 flex items-center text-slate-400 hover:text-rose-700 transition-colors font-medium text-sm"
        >
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver al portal
        </button>

        <div className="w-full max-w-md">
            
            <div className="text-center mb-10 lg:hidden">
                <div className="inline-block p-3 bg-rose-50 rounded-xl mb-4">
                    <Shield className="h-8 w-8 text-rose-700" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">Tu Municipio Digital</h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
                
                {/* HEADERS */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                        {mode === 'LOGIN' && 'Bienvenido'}
                        {mode === 'REGISTER' && 'Crear Cuenta'}
                        {mode === 'RECOVER' && 'Recuperar Acceso'}
                    </h1>
                    <p className="text-slate-500">
                        {mode === 'LOGIN' && 'Ingresa tus credenciales para acceder a Mi Cuenta.'}
                        {mode === 'REGISTER' && 'Completa el formulario para registrarte como usuario verificado.'}
                        {mode === 'RECOVER' && 'Te enviaremos un enlace para restablecer tu contraseña.'}
                    </p>
                </div>

                {/* SUCCESS MESSAGE */}
                {successMsg && (
                    <div className="mb-6 bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start animate-fade-in-up">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-emerald-800 font-medium">{successMsg}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* INPUTS FOR REGISTER */}
                    {mode === 'REGISTER' && (
                        <div className="relative group">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Nombre Completo</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-rose-500 transition-colors" />
                                <input 
                                    type="text" 
                                    // required (Removed for Demo)
                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium"
                                    placeholder="Ej. Juan Pérez"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* EMAIL INPUT (ALL MODES) */}
                    <div className="relative group">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Correo Electrónico</label>
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-rose-500 transition-colors" />
                            <input 
                                type="email" 
                                // required (Removed for Demo)
                                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium"
                                placeholder="nombre@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* PASSWORD INPUT (LOGIN & REGISTER) */}
                    {mode !== 'RECOVER' && (
                        <div className="relative group">
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-bold text-slate-700">Contraseña</label>
                                {mode === 'LOGIN' && (
                                    <button 
                                        type="button" 
                                        onClick={() => toggleMode('RECOVER')}
                                        className="text-xs font-bold text-rose-600 hover:text-rose-800 hover:underline"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </button>
                                )}
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-rose-500 transition-colors" />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    // required (Removed for Demo)
                                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* CONFIRM PASSWORD (REGISTER) */}
                    {mode === 'REGISTER' && (
                        <div className="relative group">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Confirmar Contraseña</label>
                            <div className="relative">
                                <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-rose-500 transition-colors" />
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    // required (Removed for Demo)
                                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium"
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* SUBMIT BUTTON */}
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-rose-700 hover:bg-rose-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-900/20 hover:shadow-rose-900/30 transition-all transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                    >
                        {isLoading ? (
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                {mode === 'LOGIN' && 'Entrar a Mi Cuenta'}
                                {mode === 'REGISTER' && 'Registrarse'}
                                {mode === 'RECOVER' && 'Enviar Enlace'}
                                {mode !== 'RECOVER' && <ArrowRight className="ml-2 h-5 w-5" />}
                            </>
                        )}
                    </button>
                </form>

                {/* FOOTER LINKS */}
                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                    {mode === 'LOGIN' && (
                        <p className="text-slate-500 text-sm">
                            ¿No tienes cuenta?{' '}
                            <button onClick={() => toggleMode('REGISTER')} className="text-rose-700 font-bold hover:underline hover:text-rose-800 transition-colors">
                                Regístrate aquí
                            </button>
                        </p>
                    )}
                    {(mode === 'REGISTER' || mode === 'RECOVER') && (
                        <p className="text-slate-500 text-sm">
                            ¿Ya tienes cuenta?{' '}
                            <button onClick={() => toggleMode('LOGIN')} className="text-rose-700 font-bold hover:underline hover:text-rose-800 transition-colors">
                                Inicia Sesión
                            </button>
                        </p>
                    )}
                </div>
            </div>
            
            <p className="text-center text-slate-400 text-xs mt-8">
                &copy; 2024 Ayuntamiento Digital. Protegido por reCAPTCHA.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

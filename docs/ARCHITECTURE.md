# 🏗️ Arquitectura del Sistema

Esta documentación describe la arquitectura técnica del Portal Ciudadano Municipal, proporcionando una visión completa de la estructura del proyecto, patrones de diseño y flujos de datos.

---

📖 **Navegación**: [← README](../README.md) | [Personalización →](CUSTOMIZATION.md) | [Roadmap](ROADMAP.md) | [Seguridad](../SECURITY.md)

---

## 📋 Tabla de Contenidos

- [Visión General](#-visión-general)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Flujo de Datos](#-flujo-de-datos)
- [Componentes Clave](#-componentes-clave)
- [Integraciones Externas](#-integraciones-externas)
- [Patrones de Diseño](#-patrones-de-diseño)
- [Extensibilidad](#-extensibilidad)

---

## 🌐 Visión General

### Arquitectura de Alto Nivel

```
┌─────────────────────────────────────────────────────────┐
│                    NAVEGADOR WEB                        │
│                  (Cliente/Frontend)                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ HTTP/HTTPS
                     │
┌────────────────────▼────────────────────────────────────┐
│              APLICACIÓN REACT (SPA)                     │
│  ┌──────────────────────────────────────────────────┐  │
│  │  App.tsx (Router Principal)                      │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐ │  │
│  │  │ Components │  │  Services  │  │   Styles   │ │  │
│  │  └────────────┘  └────────────┘  └────────────┘ │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ API Calls
                     │
┌────────────────────▼────────────────────────────────────┐
│             SERVICIOS EXTERNOS (APIs)                   │
│  • API de Inteligencia Artificial                      │
│  • APIs Gubernamentales (futuro)                       │
│  • Servicios de Autenticación (futuro)                 │
└─────────────────────────────────────────────────────────┘
```

### Decisiones de Diseño Principales

**1. Single Page Application (SPA)**
- **Por qué**: Experiencia de usuario fluida sin recargas de página
- **Implementación**: React con routing del lado del cliente mediante estado
- **Beneficio**: Navegación rápida, menor carga del servidor

**2. TypeScript sobre JavaScript**
- **Por qué**: Type safety reduce errores en tiempo de ejecución
- **Beneficio**: Mejor autocompletado, refactoring más seguro, documentación implícita

**3. Gestión de Estado con React Hooks**
- **Por qué**: Simplicidad para un proyecto de esta escala
- **Implementación**: `useState` y `useEffect` sin bibliotecas adicionales
- **Cuándo escalar**: Si el estado se vuelve complejo, considerar Context API o Zustand

**4. Arquitectura Modular por Componentes**
- **Por qué**: Reutilización, mantenibilidad y testabilidad
- **Organización**: Componentes separados por funcionalidad, no por tipo de archivo

---

## 📁 Estructura del Proyecto

```
portal-ciudadano-municipal/
│
├── components/              # Componentes React reutilizables
│   ├── Navbar.tsx          # Barra de navegación principal
│   ├── Hero.tsx            # Sección hero de la página principal
│   ├── ServiceCatalog.tsx  # Catálogo de servicios ciudadanos
│   ├── ServiceFlow.tsx     # Motor de flujos de trámites
│   ├── AIAssistant.tsx     # Asistente virtual con IA
│   ├── MayorPage.tsx       # Perfil del presidente municipal
│   ├── Directory.tsx       # Directorio de funcionarios
│   ├── Transparency.tsx    # Portal de transparencia
│   ├── NewsPage.tsx        # Gestión de noticias
│   ├── AuthPage.tsx        # Página de autenticación
│   ├── LegalDocs.tsx       # Documentos legales (privacidad, términos)
│   └── account/            # Componentes del dashboard de usuario
│       └── AccountDashboard.tsx
│
├── services/               # Servicios e integraciones externas
│   └── aiService.ts        # Integración con API de IA
│
├── data/                   # Datos de configuración y contenido
│   ├── services.ts         # Definiciones de servicios municipales
│   ├── news.ts             # Contenido de noticias
│   ├── officials.ts        # Directorio de funcionarios
│   ├── transparency.ts     # Documentos de transparencia
│   └── ...                 # Otros archivos de datos
│
├── styles/                 # Estilos y temas
│   └── theme.ts            # Configuración de tema (colores, fuentes)
│
├── types.ts                # Definiciones de tipos TypeScript globales
├── constants.tsx           # Constantes de la aplicación
├── App.tsx                 # Componente raíz y router
├── index.tsx               # Punto de entrada de la aplicación
├── index.html              # HTML base
├── vite.config.ts          # Configuración de Vite
└── tsconfig.json           # Configuración de TypeScript
```

### Descripción de Directorios

**`/components`**
- Contiene todos los componentes React de la aplicación
- Cada componente es autónomo e importa sus propias dependencias
- Componentes de propósito general vs. componentes específicos de página

**`/services`**
- Lógica de negocio que no pertenece a componentes
- Integraciones con APIs externas
- Funciones helper y utilidades

**`/data`**
- Datos mock para demostración
- En producción, estos se reemplazarían por llamadas a APIs/base de datos
- Facilita testing y desarrollo sin backend

**`/styles`**
- Sistema de diseño centralizado
- Configuración de tema (colores, espaciados, tipografías)
- Permite re-theming fácil para diferentes municipios

**`types.ts`**
- Definiciones TypeScript compartidas
- Interfaces para servicios, usuarios, documentos, etc.
- Single source of truth para estructuras de datos

---

## 🔄 Flujo de Datos

### 1. Navegación entre Vistas

```
Usuario hace clic
       │
       ▼
Evento onClick en Navbar/Botón
       │
       ▼
handleNavigation() en App.tsx
       │
       ▼
setCurrentView(nuevaVista)
       │
       ▼
React re-renderiza con nuevo componente
```

### 2. Selección de Servicio

```
Usuario selecciona servicio del catálogo
       │
       ▼
navigateToService(serviceId)
       │
       ▼
Busca servicio en SERVICES array
       │
       ▼
setSelectedService(service)
setCurrentView('flow')
       │
       ▼
ServiceFlow renderiza con datos del servicio
```

### 3. Autenticación (Demo)

```
Usuario envía formulario de login
       │
       ▼
handleLoginSuccess() en App.tsx
       │
       ▼
setIsAuthenticated(true)
setUser(userData)
       │
       ▼
Navbar muestra nombre de usuario
AccountDashboard se vuelve accesible
```

### 4. Asistente IA

```
Usuario escribe consulta
       │
       ▼
AIAssistant captura input
       │
       ▼
Llama a API de IA (aiService.ts)
       │
       ▼
Procesa respuesta
       │
       ▼
Si recomienda servicio → navigateToService()
Si es información general → muestra respuesta
```

---

## 🧩 Componentes Clave

### App.tsx - Orquestador Principal

**Responsabilidades**:
- Gestión de rutas mediante estado (`currentView`)
- Control de autenticación
- Coordinación entre componentes de alto nivel
- Renderizado condicional de Navbar, Footer y AIAssistant

**Estado Principal**:
```typescript
currentView: 'home' | 'catalog' | 'flow' | 'privacy' | ...
selectedService: ServiceDefinition | null
isAuthenticated: boolean
user: {name: string, email: string} | null
```

### ServiceCatalog.tsx - Catálogo de Servicios

**Responsabilidades**:
- Mostrar todos los servicios municipales organizados por categoría
- Buscador de servicios
- Filtrado por categoría
- Navegación a flujo de servicio

**Props**:
```typescript
onServiceSelect: (serviceId: string) => void
```

### ServiceFlow.tsx - Motor de Flujos

**Responsabilidades**:
- Renderizar flujo paso a paso de un trámite
- Mostrar requisitos, documentos, tiempos
- Navegación entre pasos
- Botón de salida

**Props**:
```typescript
service: ServiceDefinition
onExit: () => void
```

### AIAssistant.tsx - Asistente Virtual

**Responsabilidades**:
- Chat flotante siempre accesible
- Comunicación con API de IA
- Recomendación de servicios basada en consultas
- Manejo de estado de conversación

**Props**:
```typescript
onServiceRecommended: (serviceId: string) => void
```

### Navbar.tsx - Navegación Principal

**Responsabilidades**:
- Menú de navegación principal
- Mostrar estado de autenticación
- Links a secciones principales

**Props**:
```typescript
onNavigate: (view: string) => void
isAuthenticated: boolean
userName?: string
```

---

## 🔌 Integraciones Externas

### API de Inteligencia Artificial

**Ubicación**: `services/aiService.ts`

**Funcionalidad**:
- Procesamiento de lenguaje natural para consultas ciudadanas
- Recomendación inteligente de servicios
- Respuestas contextuales

**Configuración**:
```typescript
// vite.config.ts define variable de entorno
'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
```

**Flujo**:
1. Usuario escribe pregunta en AIAssistant
2. `aiService.sendMessage()` envía consulta a API
3. API procesa y devuelve respuesta
4. AIAssistant muestra respuesta + recomendaciones

### Puntos de Integración Futuros

**Base de Datos Backend**
- Actualmente: Datos mock en `/data`
- Futuro: API REST/GraphQL que provea:
  - Servicios dinámicos
  - Usuarios y autenticación
  - Noticias y contenido
  - Documentos de transparencia

**Ejemplo de migración**:
```typescript
// Actual (mock)
import { SERVICES } from './data/services';

// Futuro (API)
const response = await fetch('/api/services');
const services = await response.json();
```

**Sistemas de Pago**
- Integración con OpenPay, Stripe, ConektaPayPal gubernamental
- Endpoint en `ServiceFlow` para procesar pagos

**Autenticación Gubernamental**
- OAuth con sistemas estatales
- e.firma para firma digital
- CURP/INE para verificación de identidad

---

## 🎨 Patrones de Diseño

### 1. Component Composition

Los componentes complejos se construyen componiendo componentes más simples.

**Ejemplo**: `AccountDashboard` compone múltiples secciones (trámites, citas, perfil).

### 2. Props Drilling vs. Context

**Actual**: Props drilling (apropiado para esta escala)
**Cuándo cambiar**: Si pasas props a través de >3 niveles, considera Context API

### 3. Presentational vs. Container Components

- **Presentational**: Componentes puros que solo renderizan UI (`Hero`, `Directory`)
- **Container**: Componentes con lógica y estado (`App`, `ServiceFlow`)

### 4. Custom Hooks (Futuro)

Para lógica reutilizable, considerar:
```typescript
// Ejemplo
const useAuth = () => {
  const [user, setUser] = useState(null);
  const login = (credentials) => { /* ... */ };
  const logout = () => { /* ... */ };
  return { user, login, logout };
};
```

---

## 🔧 Extensibilidad

### Agregar un Nuevo Servicio

1. **Definir el servicio** en `data/services.ts`:
```typescript
{
  id: 'nuevo-servicio',
  name: 'Nuevo Servicio',
  category: 'Desarrollo Social',
  description: '...',
  requirements: [...],
  // ...
}
```

2. **El sistema lo detecta automáticamente** - no se requieren cambios de código

### Agregar una Nueva Sección

1. **Crear componente** en `/components/NuevaSeccion.tsx`
2. **Agregar ruta** en `App.tsx`:
```typescript
type ViewType = 'home' | ... | 'nuevaSeccion';

// En el render
{currentView === 'nuevaSeccion' && <NuevaSeccion />}
```
3. **Agregar link** en `Navbar.tsx`

### Personalizar Tema

Editar `styles/theme.ts`:
```typescript
export const PORTAL_THEME = {
  colors: {
    primary: '#tu-color-primario',
    secondary: '#tu-color-secundario',
    // ...
  },
  // ...
};
```

### Integrar con Backend Real

1. **Crear servicio API** en `/services/apiService.ts`
2. **Reemplazar imports de `/data`** con llamadas a API
3. **Manejar estados de carga y error**

**Ejemplo**:
```typescript
// Antes
import { SERVICES } from './data/services';

// Después
const [services, setServices] = useState([]);

useEffect(() => {
  fetch('/api/services')
    .then(res => res.json())
    .then(setServices);
}, []);
```

---

## 📊 Diagramas

### Diagrama de Componentes

```
App
├── Navbar
├── Hero
├── ServiceCatalog
│   └── ServiceCard (múltiples)
├── ServiceFlow
│   ├── StepNavigation
│   └── StepContent
├── MayorPage
├── Directory
│   └── OfficialCard (múltiples)
├── Transparency
│   └── DocumentCard (múltiples)
├── NewsPage
│   └── NewsCard (múltiples)
├── AuthPage
│   ├── LoginForm
│   └── RegisterForm
├── AccountDashboard
│   ├── UserProfile
│   ├── ActiveProcedures
│   └── Appointments
├── AIAssistant (flotante)
└── Footer
```

---

## 🚀 Mejores Prácticas

### Performance

- **Code splitting**: Considerar lazy loading para rutas con React.lazy()
- **Memoization**: `React.memo` para componentes pesados que no cambian a menudo
- **Optimizar assets**: Comprimir imágenes, usar formatos modernos (WebP)

### Mantenibilidad

- **Consistencia de código**: ESLint + Prettier
- **Documentación**: JSDoc para funciones complejas
- **Testing**: Implementar tests unitarios (Jest, React Testing Library)

### Escalabilidad

- **Separar lógica de presentación**: Evitar lógica compleja en componentes
- **Modularizar**: Mantener componentes pequeños y enfocados
- **Estado predecible**: Considerar gestores de estado si crece la complejidad

---

## 📚 Recursos para Desarrolladores

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Patterns](https://reactpatterns.com/)

---

## 🔗 Documentación Relacionada

- [← Volver al README](../README.md)
- [Guía de Personalización](CUSTOMIZATION.md)
- [Hoja de Ruta](ROADMAP.md)
- [Consideraciones de Seguridad](../SECURITY.md)

---

<div align="center">

**¿Preguntas sobre la arquitectura?**

📧 [manuelceomx@gmail.com](mailto:manuelceomx@gmail.com) | 💬 [@manuelceo](https://t.me/manuelceo) | 💼 [LinkedIn](https://linkedin.com/in/manuelceomx)

</div>

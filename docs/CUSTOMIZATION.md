# 🎨 Guía de Personalización

Esta guía explica cómo adaptar el Portal Ciudadano Municipal a las necesidades específicas de tu gobierno municipal, desde cambios visuales básicos hasta integraciones profundas con sistemas existentes.

---

📖 **Navegación**: [← README](../README.md) | [← Arquitectura](ARCHITECTURE.md) | [Roadmap →](ROADMAP.md) | [Seguridad](../SECURITY.md)

---

## 📋 Tabla de Contenidos

- [Personalización de Marca](#-personalización-de-marca)
- [Configuración de Servicios](#-configuración-de-servicios)
- [Integración con Datos Reales](#-integración-con-datos-reales)
- [Módulos Adicionales](#-módulos-adicionales)
- [Desarrollo Personalizado](#-desarrollo-personalizado)

---

## 🎨 Personalización de Marca

### Nombre del Municipio

**Archivo**: `constants.tsx`

Cambia el nombre de tu municipio en una ubicación centralizada:

```typescript
export const APP_NAME = 'H. Ayuntamiento de [Tu Municipio]';
export const MUNICIPALITY_NAME = '[Tu Municipio]';
export const STATE = '[Tu Estado]';
```

Estos valores se propagan automáticamente a:
- Título de la aplicación
- Footer
- Meta tags SEO
- Documentos legales

---

### Logo y Colores Institucionales

#### Cambiar Colores del Tema

**Archivo**: `styles/theme.ts`

Personaliza la paleta de colores para reflejar tu identidad institucional:

```typescript
export const PORTAL_THEME = {
  colors: {
    primary: '#1e40af',      // Azul principal - cambiar a color primario institucional
    secondary: '#7c3aed',    // Púrpura - cambiar a color secundario
    accent: '#f97316',       // Naranja - para CTAs
    background: 'bg-slate-50', // Fondo general
    // Agregar más colores según necesidad
  },
  // ...
};
```

**Ejemplo para un municipio con verde institucional**:
```typescript
colors: {
  primary: '#047857',      // Verde esmeralda
  secondary: '#0891b2',    // Cyan
  accent: '#ea580c',       // Naranja vibrante
}
```

#### Agregar Logo Institucional

1. **Coloca tu logo** en `/public/images/logo-municipio.png`

2. **Actualiza el Navbar** en `components/Navbar.tsx`:
```typescript
<img 
  src="/images/logo-municipio.png" 
  alt="Logo [Tu Municipio]"
  className="h-12 w-auto"
/>
```

3. **Actualiza el Hero** en `components/Hero.tsx` si deseas mostrar el escudo municipal

---

### Información de Contacto

**Archivo**: `App.tsx` (sección Footer)

Actualiza la información de contacto municipal:

```typescript
<p className="text-sm mb-3">
  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span> 
  Palacio Municipal, Calle Principal #123, Centro
</p>
<p className="text-sm mb-3">
  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span> 
  Tel: (XXX) XXX-XXXX
</p>
<p className="text-sm">
  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span> 
  atencion@tumunicipio.gob.mx
</p>
```

---

### Metadata y SEO

**Archivo**: `index.html`

Personaliza los meta tags para SEO:

```html
<title>Portal Ciudadano - H. Ayuntamiento de [Tu Municipio]</title>
<meta name="description" content="Portal oficial de servicios del municipio de [Tu Municipio], [Estado]. Trámites, transparencia y atención ciudadana en línea.">
<meta name="keywords" content="[Tu Municipio], gobierno municipal, trámites, servicios ciudadanos, transparencia">
```

---

## 🗂️ Configuración de Servicios

### Agregar un Nuevo Servicio

**Archivo**: `data/services.ts`

Los servicios se definen en un array. Para agregar uno nuevo:

```typescript
{
  id: 'licencia-construccion',
  name: 'Licencia de Construcción',
  category: 'Desarrollo Urbano',
  description: 'Obtén tu licencia para construcción de inmuebles',
  icon: Building2,  // Ícono de lucide-react
  estimatedTime: '15-20 días hábiles',
  cost: '$2,500 - $15,000 MXN (según tipo de obra)',
  requirements: [
    'Identificación oficial',
    'Escrituras del inmueble',
    'Planos arquitectónicos firmados por DRO',
    'Constancia de alineamiento y número oficial',
    'Estudio de mecánica de suelos (obras mayores)',
  ],
  steps: [
    {
      title: 'Presentar Documentación',
      description: 'Acude a la ventanilla de Desarrollo Urbano con la documentación completa.',
    },
    {
      title: 'Revisión Técnica',
      description: 'El área de Desarrollo Urbano revisará planos y documentos.',
    },
    {
      title: 'Pago de Derechos',
      description: 'Realiza el pago correspondiente en caja municipal o banco autorizado.',
    },
    {
      title: 'Recepción de Licencia',
      description: 'Recoge tu licencia una vez aprobada la solicitud.',
    },
  ],
  documents: [
    'Formato de solicitud (descarga aquí)',
    'Planos arquitectónicos (3 juegos)',
    'Responsiva de DRO',
  ],
  responsibleArea: 'Dirección de Desarrollo Urbano',
  legalBasis: 'Ley de Asentamientos Humanos del Estado, Reglamento de Construcción Municipal',
}
```

El sistema **detectará automáticamente** el nuevo servicio y:
- Lo mostrará en el catálogo
- Permitirá buscarlo
- Lo filtrará por categoría
- Generará su flujo de pasos

---

### Modificar Categorías de Servicios

**Archivo**: `components/ServiceCatalog.tsx`

Las categorías se generan dinámicamente, pero puedes forzar un orden específico:

```typescript
const categories = [
  'Licencias y Permisos',
  'Desarrollo Social',
  'Servicios Públicos',
  'Desarrollo Urbano',
  'Catastro y Predial',
  'Seguridad Pública',
  // ... agregar más categorías
];
```

---

### Personalizar Flujos de Servicio

Si necesitas flujos más complejos que los pasos estándar, puedes:

1. **Extender el tipo** en `types.ts`:
```typescript
export interface ServiceDefinition {
  // ... campos existentes
  customFlow?: {
    requiresAppointment?: boolean;
    requiresPaymentUpfront?: boolean;
    allowsOnlineSubmission?: boolean;
  };
}
```

2. **Modificar el renderizado** en `ServiceFlow.tsx` para manejar estos casos especiales

---

## 🔌 Integración con Datos Reales

### Arquitectura Backend Recomendada

Para migrar de datos mock a datos reales, se recomienda:

#### Opción 1: API REST con Node.js + PostgreSQL

**Stack sugerido**:
- **Backend**: Node.js + Express
- **ORM**: Prisma o Sequelize
- **Base de datos**: PostgreSQL
- **Autenticación**: JWT + bcrypt

**Estructura de endpoints**:
```
GET    /api/services           - Lista de servicios
GET    /api/services/:id       - Detalle de servicio
POST   /api/auth/login         - Login ciudadano
POST   /api/auth/register      - Registro
GET    /api/news               - Noticias
GET    /api/transparency/docs  - Documentos de transparencia
GET    /api/officials          - Directorio de funcionarios
```

#### Opción 2: Firebase (Solución Rápida)

**Ventajas**:
- No requiere servidor backend propio
- Autenticación integrada
- Base de datos en tiempo real

**Configuración**:
1. Crear proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Instalar: `npm install firebase`
3. Configurar en `services/firebaseConfig.ts`
4. Migrar datos de `/data` a Firestore

---

### Migración de Servicios a Base de Datos

**Paso 1**: Crear tabla en base de datos

```sql
CREATE TABLE services (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  description TEXT,
  estimated_time VARCHAR(100),
  cost VARCHAR(100),
  requirements JSONB,
  steps JSONB,
  documents JSONB,
  responsible_area VARCHAR(255),
  legal_basis TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Paso 2**: Crear servicio API

```typescript
// services/apiService.ts
export const fetchServices = async () => {
  const response = await fetch('/api/services');
  if (!response.ok) throw new Error('Error fetching services');
  return response.json();
};
```

**Paso 3**: Actualizar componente

```typescript
// components/ServiceCatalog.tsx
import { fetchServices } from '../services/apiService';

const [services, setServices] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchServices()
    .then(setServices)
    .catch(console.error)
    .finally(() => setLoading(false));
}, []);
```

---

### Autenticación Real

#### Integración con e.firma (Firma Electrónica Avanzada)

Si tu estado/país tiene infraestructura de firma electrónica:

```typescript
// services/authService.ts
export const loginWithEfirma = async (certificate: File, key: File, password: string) => {
  const formData = new FormData();
  formData.append('certificate', certificate);
  formData.append('key', key);
  formData.append('password', password);

  const response = await fetch('/api/auth/efirma', {
    method: 'POST',
    body: formData,
  });

  return response.json();
};
```

#### OAuth con Sistemas Estatales

```typescript
// Redirigir a proveedor OAuth del gobierno
export const loginWithGovOAuth = () => {
  window.location.href = `https://oauth.gobierno.mx/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
};
```

---

### Integración de Pagos

#### OpenPay (Ejemplo)

```bash
npm install openpay
```

```typescript
// services/paymentService.ts
import Openpay from 'openpay';

const openpay = new Openpay(MERCHANT_ID, PUBLIC_KEY);

export const processPayment = async (amount: number, tokenId: string) => {
  return openpay.charges.create({
    method: 'card',
    source_id: tokenId,
    amount: amount,
    currency: 'MXN',
    description: 'Pago de servicio municipal',
  });
};
```

**Integrar en ServiceFlow**:
```typescript
const handlePayment = async () => {
  const token = await openpay.token.create(cardData);
  const charge = await processPayment(serviceCost, token.id);
  
  if (charge.status === 'completed') {
    // Proceder al siguiente paso
  }
};
```

---

## 🧩 Módulos Adicionales

### Sistema de Citas

**Funcionalidad**: Agendamiento de turnos para atención presencial

**Implementación**:
1. Crear componente `components/AppointmentScheduler.tsx`
2. Integrar con calendario (librería: `react-big-calendar`)
3. Backend para gestionar disponibilidad de funcionarios
4. Notificaciones por email/SMS al confirmar cita

**Tecnologías sugeridas**:
- Frontend: `react-big-calendar`, `date-fns`
- Backend: Lógica de disponibilidad + Twilio (SMS) / SendGrid (Email)

---

### Panel Administrativo

**Funcionalidad**: Gestión de contenido para funcionarios

**Características**:
- Editor de noticias (WYSIWYG con Quill o TipTap)
- Gestión de servicios (CRUD)
- Carga de documentos de transparencia
- Visualización de estadísticas

**Rutas sugeridas**:
```
/admin/dashboard
/admin/services
/admin/news
/admin/transparency
/admin/users
```

---

### Notificaciones

**Push Notifications** (PWA):
```typescript
// Registrar service worker
navigator.serviceWorker.register('/sw.js');

// Solicitar permiso
const permission = await Notification.requestPermission();

// Enviar notificación
new Notification('Actualización de trámite', {
  body: 'Tu solicitud ha sido aprobada',
  icon: '/logo.png',
});
```

**Email Notifications**:
- Backend con SendGrid / AWS SES
- Templates para confirmaciones, recordatorios

**SMS Notifications**:
- Twilio / MessageBird para envío de SMS
- Mensajes de confirmación de cita, estatus de trámite

---

### Modo Offline (PWA)

Convertir la aplicación en Progressive Web App:

1. **Manifest** (`public/manifest.json`):
```json
{
  "name": "Portal Ciudadano Municipal",
  "short_name": "Portal Municipal",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1e40af",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

2. **Service Worker** para caché offline
3. **Vite PWA Plugin**: `npm install vite-plugin-pwa`

---

### Integración con Mapas

**Caso de uso**: Mostrar ubicaciones de oficinas, reportes ciudadanos geocalizados

**Librería recomendada**: Leaflet (open source) o Google Maps

```bash
npm install react-leaflet leaflet
```

```typescript
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

<MapContainer center={[19.432, -99.133]} zoom={13}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[19.432, -99.133]}>
    <Popup>Palacio Municipal</Popup>
  </Marker>
</MapContainer>
```

---

## 💼 Desarrollo Personalizado

### ¿Cuándo Considerar Desarrollo a Medida?

Este boilerplate cubre las necesidades básicas de un portal municipal, pero cada gobierno tiene requerimientos únicos. Considera desarrollo personalizado si necesitas:

✅ **Integración con Sistemas Legacy**
- Migración de datos de sistemas antiguos (AS400, COBOL, etc.)
- Sincronización bidireccional con bases de datos existentes
- Interoperabilidad con plataformas estatales/federales

✅ **Módulos Especializados**
- Sistema de licitaciones electrónicas
- Gestión de obra pública con seguimiento fotográfico
- Portal de empleo municipal
- Reportes ciudadanos con seguimiento GPS
- Sistema de participación ciudadana con votaciones

✅ **Personalización Profunda de UX/UI**
- Diseño institucional específico
- Accesibilidad mejorada (WCAG AAA)
- Multilenguaje (español + lenguas indígenas)
- Modo alto contraste para personas con discapacidad visual

✅ **Integraciones Complejas**
- Conectar con ERPs gubernamentales (SAP, Oracle)
- Firma digital con INE / e.firma
- Cobros con sistemas bancarios específicos
- Interconexión con Plataforma Nacional de Transparencia

✅ **Análisis y Reportes Avanzados**
- Dashboards ejecutivos con Power BI / Tableau
- Análisis de sentimiento de quejas ciudadanas
- Predicción de demanda de servicios con ML
- Generación automática de reportes para auditorías

---

### Servicios de Desarrollo Ofrecidos

**1. Consultoría Técnica**
- Evaluación de infraestructura actual
- Diseño de arquitectura personalizada
- Asesoría en migración a la nube
- Auditoría de seguridad y compliance

**2. Desarrollo Full-Stack**
- Backend con Node.js, Python, PHP, .NET (según preferencia)
- Integración con bases de datos (PostgreSQL, MySQL, MongoDB, SQL Server)
- APIs RESTful / GraphQL
- Microservicios para escalabilidad

**3. Migración de Datos**
- Extracción de datos de sistemas legacy
- Limpieza y normalización de información
- Importación a nueva plataforma
- Validación y auditoría de migración

**4. Capacitación y Soporte**
- Entrenamiento para equipo técnico municipal
- Documentación técnica detallada
- Manuales de usuario para ciudadanos
- Soporte técnico post-implementación

---

### Proceso de Trabajo

**Fase 1: Discovery** (1-2 semanas)
- Reuniones con stakeholders
- Levantamiento de requerimientos
- Análisis de sistemas actuales
- Propuesta técnica y cotización

**Fase 2: Diseño** (2-3 semanas)
- Wireframes y mockups
- Arquitectura de información
- Diseño de base de datos
- Especificaciones técnicas

**Fase 3: Desarrollo** (4-12 semanas según alcance)
- Desarrollo iterativo con demos semanales
- Testing continuo
- Ajustes basados en feedback

**Fase 4: Despliegue** (1-2 semanas)
- Migración de datos
- Configuración de servidores
- Pruebas de carga y seguridad
- Go-live

**Fase 5: Soporte** (continuo)
- Mantenimiento correctivo
- Actualizaciones de seguridad
- Mejoras incrementales

---

### Casos de Éxito

> **Municipio de Ejemplo, Estado X**  
> *"La implementación del portal redujo 60% el tiempo de atención presencial y mejoró significativamente la satisfacción ciudadana. Las integraciones personalizadas con nuestros sistemas de catastro fueron clave."*

> **H. Ayuntamiento de Ciudad Y**  
> *"El módulo de transparencia nos permitió cumplir automáticamente con obligaciones legales, liberando horas-hombre del equipo jurídico."*

---

### Contacto para Proyectos Personalizados

Si tu municipio necesita funcionalidades específicas más allá de este boilerplate:

📧 **Email**: [manuelceomx@gmail.com](mailto:manuelceomx@gmail.com)  
💼 **LinkedIn**: [linkedin.com/in/manuelceomx](https://linkedin.com/in/manuelceomx)

**En tu mensaje incluye**:
- Nombre del municipio y población aproximada
- Descripción de necesidades específicas
- Plazo deseado de implementación
- Presupuesto estimado (si aplica)

**Respuesta garantizada en 24-48 horas**

---

## 📚 Recursos de Ayuda

- [Documentación de React](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev/icons/)

---

## 🔗 Documentación Relacionada

- [← Volver al README](../README.md)
- [Arquitectura del Sistema](ARCHITECTURE.md)
- [Hoja de Ruta](ROADMAP.md)
- [Consideraciones de Seguridad](../SECURITY.md)

---

<div align="center">

**¿Listo para transformar la atención ciudadana de tu municipio?** 🚀

📧 [manuelceomx@gmail.com](mailto:manuelceomx@gmail.com) | 💬 [@manuelceo](https://t.me/manuelceo) | 💼 [LinkedIn](https://linkedin.com/in/manuelceomx)

</div>

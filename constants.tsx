import { ServiceDefinition } from './types';

// Imports de Módulos de Servicios
import { urbanismoServices } from './data/categories/urbanismo';
import { desarrolloEconomicoServices } from './data/categories/desarrolloEconomico';
import { catastroServices } from './data/categories/catastro';
import { proteccionCivilServices } from './data/categories/proteccionCivil';
import { ecologiaServices } from './data/categories/ecologia';
import { seguridadServices } from './data/categories/seguridad';
import { turismoServices } from './data/categories/turismo';
import { culturaDeporteServices } from './data/categories/culturaDeporte';
import { participacionCiudadanaServices } from './data/categories/participacionCiudadana';

// New Categories
import { transitoServices } from './data/categories/transito';
import { tesoreriaServices } from './data/categories/tesoreria';
import { saludServices } from './data/categories/salud';
import { bienestarServices } from './data/categories/bienestar';

export const APP_NAME = "Ayuntamiento Digital";

export const SERVICES: ServiceDefinition[] = [
  ...urbanismoServices,
  ...transitoServices, // Replaces movilidad
  ...desarrolloEconomicoServices,
  ...catastroServices,
  ...tesoreriaServices, // New
  ...proteccionCivilServices,
  ...ecologiaServices,
  ...saludServices, // New
  ...seguridadServices,
  ...bienestarServices, // Renamed from social
  ...turismoServices,
  ...culturaDeporteServices,
  ...participacionCiudadanaServices
];

export const CATEGORIES = Array.from(new Set(SERVICES.map(s => s.category)));
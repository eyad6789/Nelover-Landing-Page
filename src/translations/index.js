// translations/index.js - Main translations export file
import { en } from './en';
import { ar } from './ar';

// Export all translations as a single object
export const translations = {
  en,
  ar
};

// Export individual languages (optional, for direct access)
export { en, ar };

// Default export
export default translations;
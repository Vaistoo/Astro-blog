import { allLocales, defaultLocale } from '@/config'
import { langMap } from './config'

/**
 * Mapping Browser Language Codes to Site Supported Languages
 * @param browserLang Browser language code
 * @returns Mapped language code
 */
export function mapBrowserLanguage(browserLang: string): string {
  // Normalized language code to lowercase
  const normalizedLang = browserLang.toLowerCase()
  
  // Directly match the complete language code
  if (allLocales.includes(normalizedLang)) {
    return normalizedLang
  }
  
  // Match language prefixes (e.g., 'en-US' to 'en')
  const langPrefix = normalizedLang.split('-')[0]
  if (allLocales.includes(langPrefix)) {
    return langPrefix
  }
  
  // Matching through language map
  for (const [locale, mappings] of Object.entries(langMap)) {
    // Check the complete match
    if (mappings.some(mapping => mapping.toLowerCase() === normalizedLang)) {
      return locale
    }
    
    // Check prefix match
    if (mappings.some(mapping => mapping.toLowerCase().startsWith(langPrefix + '-'))) {
      return locale
    }
  }
  
  // Return the default language code when no match is found
  return defaultLocale
}

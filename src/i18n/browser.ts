import { defaultLocale, moreLocales } from '@/config'
import { langMap } from '@/i18n/config'
import { buildNextLangPath } from '@/i18n/path'
import { getLangFromPath } from '@/i18n/lang'

/**
 * Save the user's manually selected language preference to localStorage
 * @param lang User-selected language code
 */
export function saveUserLanguagePreference(lang: string): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('userLanguagePreference', lang)
  }
}

/**
 * Get user's manually selected language preference
 * @returns User's language preference or null
 */
export function getUserLanguagePreference(): string | null {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('userLanguagePreference')
  }
  return null
}

/**
 * Retrieve the browser's preferred language and map it to supported languages
 * @returns Matching support language codes
 */
export function getBrowserLang(): string {
  if (typeof navigator === 'undefined') return defaultLocale
  
  // Get browser language settings
  const browserLangs = navigator.languages || [navigator.language]
  
  // Try to directly match the supported languages
  for (const browserLang of browserLangs) {
    const normalizedLang = browserLang.toLowerCase()
    if ([defaultLocale, ...moreLocales].includes(normalizedLang)) {
      return normalizedLang
    }
  }
  
  // Try to match by langMap
  for (const browserLang of browserLangs) {
    const normalizedLang = browserLang.toLowerCase()
    for (const [lang, variants] of Object.entries(langMap)) {
      if (variants.some(variant => 
        normalizedLang === variant.toLowerCase() ||
        normalizedLang.startsWith(variant.toLowerCase().split('-')[0])
      )) {
        return lang
      }
    }
  }
  
  return defaultLocale
}

/**
 * Checks if the page exists in the specified language version
 * @param currentPath Current Path
 * @param currentLang Current language
 * @param targetLang Target language
 * @returns Promise<boolean> Does the page exist
 */
export async function checkPageExists(currentPath: string, currentLang: string, targetLang: string): Promise<boolean> {
  const targetPath = buildNextLangPath(currentPath, currentLang, targetLang)
  
  try {
    const response = await fetch(targetPath, { method: 'HEAD' })
    return response.ok
  } catch (e) {
    return false
  }
}

/**
 * Try to automatically redirect to the appropriate language version
 * @param currentPath Current path
 * @param currentLang Current Language
 */
export async function autoRedirectByLang(currentPath: string, currentLang: string): Promise<void> {
  // Check if there has been a redirection in this session to prevent circular redirections
  const redirectionKey = `redirected_${window.location.pathname}`;
  if (sessionStorage.getItem(redirectionKey)) {
    return;
  }
  
  // URLs with language codes, respecting user preferences
  if (currentLang !== defaultLocale && currentPath.startsWith(`/${currentLang}/`)) {
    return;
  }
  
  // Firstly, check if the user has manually set language preferences
  const userPreference = getUserLanguagePreference();
  
  // If there is a user preference for a language that differs from the current one, 
  // prioritize redirecting to the user's preferred language.
  if (userPreference && userPreference !== currentLang) {
    if (await checkPageExists(currentPath, currentLang, userPreference)) {
      // Mark this path as redirected to prevent loops
      sessionStorage.setItem(redirectionKey, 'true');
      const targetPath = buildNextLangPath(currentPath, currentLang, userPreference);
      window.location.href = targetPath;
      return;
    }
  }
  
  // Get the browser language
  const browserLang = getBrowserLang();
  
  // If the browser language matches the current language, no redirection is needed.
  if (browserLang === currentLang) {
    return;
  }
  
  // Build a language priority list
  const langPriority = [
    browserLang, 
    defaultLocale,
    ...moreLocales.filter(lang => lang !== browserLang && lang !== defaultLocale)
  ];
  
  // Attempt redirection by priority
  for (const lang of langPriority) {
    if (await checkPageExists(currentPath, currentLang, lang)) {
      // Mark this path as redirected to prevent loops
      sessionStorage.setItem(redirectionKey, 'true');
      const targetPath = buildNextLangPath(currentPath, currentLang, lang);
      window.location.href = targetPath;
      break;
    }
  }
}

/**
 * Returns the correct asset path taking into account the Vite base URL.
 * Use this for any image paths that are hardcoded in JSX.
 *
 * @param {string} path - Absolute path starting with '/' (e.g., '/images/logo/logo-icon.png')
 * @returns {string} - Path with BASE_URL prepended
 */
export function asset(path) {
  const base = import.meta.env.BASE_URL || '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return base + cleanPath
}
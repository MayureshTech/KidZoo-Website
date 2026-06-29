// Helper to prefix image paths with basePath for GitHub Pages
const BASE_PATH = "";

export function getAssetPath(path: string): string {
  // Avoid double slashes
  if (path.startsWith("/")) {
    return `${BASE_PATH}${path}`;
  }
  return `${BASE_PATH}/${path}`;
}

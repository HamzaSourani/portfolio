export const fallbackLng = "en";
export const languages = [fallbackLng, "ar"];
export const defaultNS = "translation";
export const isFallbackLng = (lng: string) => lng === "en";
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

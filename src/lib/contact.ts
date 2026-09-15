// Single source of truth for PawSync's official contact details, so the
// email address, WhatsApp number, and pre-filled message stay identical
// everywhere they're used (Contact page, footer, CTAs).
export const CONTACT_EMAIL = "contact@pawsync.tech";
export const WHATSAPP_DISPLAY = "+92 345 1616967";
export const WHATSAPP_INTERNATIONAL = "923451616967";
export const WHATSAPP_MESSAGE =
  "Hello PawSync, I would like to discuss an Animal-Tech / IoT project.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

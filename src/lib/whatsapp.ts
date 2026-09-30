export const DIGIMIND_WHATSAPP_NUMBER = "94742605036";
export const DIGIMIND_EMAIL = "digimindstore@gmail.com";
export const DIGIMIND_WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VabRRa71dAw3RzQhcX28";
export const DIGIMIND_FACEBOOK_PAGE = "https://www.facebook.com/profile.php?id=61561621926212";

export function generateWhatsAppOrderUrl(params: {
  productName: string;
  duration?: string;
  priceString?: string;
  paymentMethod?: string;
}) {
  const greeting = "Hello Digi Mind Store, I want to upgrade my subscription!";
  const lines = [
    greeting,
    `• Product: ${params.productName}`,
    params.duration ? `• Duration: ${params.duration}` : null,
    params.priceString ? `• Quoted Price: ${params.priceString}` : null,
    params.paymentMethod ? `• Preferred Payment: ${params.paymentMethod}` : null,
    "Please send me payment details & delivery instructions.",
  ].filter(Boolean);

  const encoded = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${DIGIMIND_WHATSAPP_NUMBER}?text=${encoded}`;
}

export function generateDirectWhatsAppChatUrl(customMessage?: string) {
  const text = customMessage || "Hello Digi Mind Store! I have a question regarding subscription upgrades.";
  return `https://wa.me/${DIGIMIND_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

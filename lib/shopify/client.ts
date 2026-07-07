// Minimal Shopify Storefront API client (server-side).
// Hybrid model: Shopify is the source of truth for price / availability /
// checkout; editorial product content stays in lib/data/*.

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;
const VERSION = process.env.SHOPIFY_API_VERSION || "2024-10";

export const shopifyConfigured = Boolean(DOMAIN && TOKEN);

export async function storefront<T = unknown>(
  query: string,
  variables?: Record<string, unknown>,
  revalidate = 300
): Promise<T> {
  if (!shopifyConfigured) {
    throw new Error("Shopify Storefront API is not configured (missing env vars).");
  }
  const res = await fetch(`https://${DOMAIN}/api/${VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN as string,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  });
  if (!res.ok) throw new Error(`Shopify Storefront API ${res.status}`);
  const json = (await res.json()) as { data?: T; errors?: unknown };
  if (json.errors) throw new Error(`Shopify Storefront errors: ${JSON.stringify(json.errors)}`);
  return json.data as T;
}

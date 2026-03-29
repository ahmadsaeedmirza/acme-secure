/**
 * SEO Helper Functions
 * Updates document head meta tags for dynamic pages
 */

export const updatePageMeta = (config: {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  url: string;
  type?: "website" | "article";
}) => {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  const updateOrCreateMeta = (name: string, content: string) => {
    let element = document.querySelector(
      `meta[name="${name}"], meta[property="${name}"]`,
    ) as HTMLMetaElement;

    if (!element) {
      element = document.createElement("meta");
      const isProperty = name.startsWith("og:") || name.startsWith("twitter:");
      isProperty
        ? element.setAttribute("property", name)
        : (element.name = name);
      document.head.appendChild(element);
    }

    element.content = content;
  };

  updateOrCreateMeta("description", config.description);
  updateOrCreateMeta("og:title", config.title);
  updateOrCreateMeta("og:description", config.description);
  updateOrCreateMeta("og:type", config.type || "website");
  updateOrCreateMeta("og:url", config.url);
  updateOrCreateMeta("twitter:title", config.title);
  updateOrCreateMeta("twitter:description", config.description);

  if (config.keywords) {
    updateOrCreateMeta("keywords", config.keywords);
  }

  if (config.ogImage) {
    updateOrCreateMeta("og:image", config.ogImage);
    updateOrCreateMeta("og:image:width", "1200");
    updateOrCreateMeta("og:image:height", "630");
    updateOrCreateMeta("twitter:image", config.ogImage);
  }

  // Update canonical URL
  let canonical = document.querySelector(
    "link[rel='canonical']",
  ) as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = config.url;
};

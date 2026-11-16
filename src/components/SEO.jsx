import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://askaranbinjraj.com";

export default function SEO({
  title = "Askaran Binjraj Shopping Mall | Dhekiajuli, Assam",
  description = "Discover Askaran Binjraj Shopping Mall in Dhekiajuli, Assam. Explore fashion, ethnic wear, kidswear, home essentials, travel gear, jewellery and more.",
  image = "/assets/mall-dusk.jpg",
}) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "");
    const canonicalUrl = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = title;

    const setMeta = (key, value, useProperty = false) => {
      const attribute = useProperty ? "property" : "name";
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", value);
    };

    setMeta("description", description);
    setMeta("robots", "index,follow,max-image-preview:large");
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Askaran Binjraj", true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", imageUrl, true);
    setMeta("og:image:alt", "Askaran Binjraj Shopping Mall in Dhekiajuli, Assam", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, image, location.pathname]);

  return null;
}

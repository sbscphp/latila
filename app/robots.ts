import { MetadataRoute } from "next";

export const dynamic = "force-static"; // ✅ tells Next.js to statically generate
export const revalidate = false; // ✅ optional, ensures no ISR issues

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://latila.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/cgi-bin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

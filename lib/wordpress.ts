const BASE_URL = "https://wordpress/wp-json/wp/v2";

/**
 * Home Page Data Fetch Karne Ka Function (ACF Fields)
 */
export const getHomePageData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/pages?slug=home`, {
      next: { revalidate: 10 }, // ISR (Incremental Static Regeneration)
    });
    if (!res.ok) throw new Error("Failed to fetch home page data");
    const data = await res.json();
    return data[0]?.acf || null; // ACF fields ko extract karenge
  } catch (error) {
    console.error("WordPress API Error:", error);
    return null;
  }
};
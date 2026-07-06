// Single source of truth for the site's category structure.
// Add/remove subcategories here and the homepage, articles page, and
// header nav all stay in sync.

export interface CategoryDef {
  label: string;
  id: string; // used for URLs/anchors/data attributes
  subcategories: string[]; // shown as subheadings within the category, in this order
}

export const categories: CategoryDef[] = [
  { label: 'Radar', id: 'radar', subcategories: ['Station', 'Platform'] },
  { label: 'Culture', id: 'culture', subcategories: ['Lines'] },
  { label: 'Art & Design', id: 'art-design', subcategories: [] },
  { label: 'Music & Film', id: 'music-film', subcategories: [] },
  { label: 'Fashion', id: 'fashion', subcategories: [] },
  { label: 'Media', id: 'media', subcategories: ['Radio', 'Stops'] },
];

export function categoryIdFor(label: string): string {
  const match = categories.find((c) => c.label === label);
  return match ? match.id : label.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-');
}

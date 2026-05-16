/**
 * Image Mapping Structure
 * 
 * This file defines the directory structure for safari package images.
 * It ensures that image paths remain consistent and scalable as more 
 * packages are added.
 */

export const PACKAGE_IMAGE_PATHS = {
  MASAI_MARA: '/images/packages/masai-mara',
  AMBOSELI: '/images/packages/amboseli',
  TSAVO_EAST: '/images/packages/tsavo-east',
  SAMBURU: '/images/packages/samburu',
  DIANI: '/images/packages/diani',
  NAKURU: '/images/packages/nakuru',
  NAIVASHA: '/images/packages/naivasha',
  TAITA_HILLS: '/images/packages/taita-hills',
  TSAVO_WEST: '/images/packages/tsavo-west',
  CUSTOM_TOUR: '/images/packages/custom-tour',
} as const;

/**
 * Standardized image filenames to be used within each package folder.
 * This pattern ensures that every package follows the same naming convention.
 */
export const PACKAGE_IMAGE_FILENAMES = {
  CARD: 'card.webp',       // For listing page thumbnails
  HERO: 'hero.webp',       // For detail page hero sections
  GALLERY: 'gallery-',     // Prefix for gallery images (e.g., gallery-1.webp)
} as const;

/**
 * Utility function to get the full path for a package image.
 * This helps avoid hardcoded strings across the components.
 */
export function getPackageImagePath(
  packageKey: keyof typeof PACKAGE_IMAGE_PATHS,
  imageType: keyof typeof PACKAGE_IMAGE_FILENAMES,
  index?: number
): string {
  const basePath = PACKAGE_IMAGE_PATHS[packageKey];
  const filename = PACKAGE_IMAGE_FILENAMES[imageType];
  
  if (imageType === 'GALLERY' && typeof index === 'number') {
    return `${basePath}/${filename}${index}.webp`;
  }
  
  return `${basePath}/${filename}`;
}

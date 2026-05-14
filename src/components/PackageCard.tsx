import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

interface PackageCardProps {
  title: string;
  duration: string;
  location: string;
  imageSrc: string;
  slug: string;
}

export function PackageCard({ title, duration, location, imageSrc, slug }: PackageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-surface-container-low border border-surface-variant flex flex-col hover:shadow-md transition-shadow h-full min-h-[300px]">
      <div className="relative h-[45%] min-h-[140px] w-full overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-on-primary font-label-sm text-[10px] px-2 py-1 rounded-sm">
          {duration}
        </span>
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-headline-md text-[14px] leading-tight text-on-surface mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="font-body-md text-[11px] text-on-surface-variant line-clamp-2 flex items-start gap-1 flex-grow">
          <MapPin size={12} className="text-secondary mt-0.5 flex-shrink-0" /> 
          <span>{location}</span>
        </p>
        <Link 
          href={`/packages/${slug}`} 
          className="mt-2 text-secondary font-label-sm text-[10px] uppercase flex items-center gap-1 group-hover:gap-2 transition-all mt-auto"
        >
          View Details <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

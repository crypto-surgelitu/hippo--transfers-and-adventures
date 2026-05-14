import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ExcursionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
}

export function ExcursionCard({ title, description, imageSrc, slug }: ExcursionCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-surface-container-low border border-surface-variant flex flex-col hover:shadow-md transition-shadow h-full min-h-[220px]">
      <div className="relative h-[55%] min-h-[120px] w-full overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </div>
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-headline-md text-[14px] leading-tight text-on-surface mb-0.5 line-clamp-1">
            {title}
          </h3>
          <p className="font-body-md text-[11px] text-on-surface-variant line-clamp-1">
            {description}
          </p>
        </div>
        <Link 
          href={`/excursions/${slug}`} 
          className="text-secondary font-label-sm text-[10px] uppercase flex items-center gap-1 group-hover:gap-2 transition-all mt-2"
        >
          View Details <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

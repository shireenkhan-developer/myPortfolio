'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import Tag from '@/components/data-display/tag';
import Link from '@/components/navigation/link';

type ProjectCardGridProps = ProjectDetailsType & {
  index?: number;
};

const ProjectCardGrid = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  index = 0,
}: ProjectCardGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.03,
        y: -4,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      className="group relative h-full"
      style={{ willChange: 'transform, opacity' }}
    >
      <div 
        className="relative h-full flex flex-col rounded-xl overflow-hidden backdrop-blur-lg border border-white/10 transition-all duration-200 group-hover:border-stellar-indigo/50 group-hover:shadow-2xl group-hover:shadow-stellar-indigo/20"
        style={{
          background: 'rgba(30, 27, 75, 0.6)',
          willChange: 'transform',
        }}
      >
        {/* Image Container */}
        {url ? (
          <Link noCustomization href={url} externalLink className="block w-full relative overflow-hidden">
            <div className="relative w-full h-[240px] md:h-[280px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="relative w-full h-full transition-transform duration-300 ease-out group-hover:scale-105">
                <Image
                  src={previewImage}
                  alt={`${name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="eager"
                  priority
                  unoptimized
                  style={{ transition: 'opacity 0.6s ease-out' }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
          </Link>
        ) : (
          <div className="block w-full relative overflow-hidden">
            <div className="relative w-full h-[240px] md:h-[280px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="relative w-full h-full">
                <Image
                  src={previewImage}
                  alt={`${name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="eager"
                  priority
                  unoptimized
                  style={{ transition: 'opacity 0.6s ease-out' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 md:p-6 flex-1">
          {/* Title */}
          <h3 
            className="text-xl md:text-2xl font-bold text-white group-hover:text-stellar-indigo transition-colors duration-300"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(79, 70, 229, 1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-white/70 leading-relaxed line-clamp-5 flex-1 min-h-[120px]">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies?.map((technology, index) => (
              <Tag key={index} label={technology} />
            ))}
          </div>

          {/* Live Link - Prominent Button on Side */}
          <div className="mt-4">
            {url ? (
              <Link
                href={url}
                noCustomization
                externalLink
                className="flex items-center gap-2 font-semibold text-white transition-all duration-200 group/link cursor-pointer hover:text-stellar-indigo inline-block"
              >
                <span className="text-sm md:text-base">Live</span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            ) : (
              <div className="flex items-center gap-2 font-semibold text-white/50 transition-all duration-300 cursor-not-allowed">
                <span className="text-sm md:text-base">Live</span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardGrid;


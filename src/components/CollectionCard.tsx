export type Collection = {
  number: string;
  title: string;
  items: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

export function CollectionCard({
  collection,
  feature = false,
}: {
  collection: Collection;
  feature?: boolean;
}) {
  return (
    <article
      className={`zoom-media group relative isolate h-full w-full ${
        feature
          ? "min-h-[26rem] sm:min-h-[34rem] lg:min-h-[36rem]"
          : "min-h-[16rem] sm:min-h-[17.5rem]"
      }`}
    >
      <img
        src={collection.image}
        alt={collection.alt}
        width={collection.width}
        height={collection.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/92 via-teal-deep/45 to-teal-deep/5 transition-opacity duration-500 group-hover:opacity-90" />


      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <p className="eyebrow text-brass">{collection.number}</p>
        <h3
          className={`mt-3 font-serif text-ivory ${
            feature ? "text-4xl sm:text-5xl" : "text-3xl"
          }`}
        >
          {collection.title}
        </h3>
        <p className="mt-2 max-w-sm text-[0.8125rem] leading-relaxed text-ivory/70">
          {collection.items}
        </p>
      </div>
    </article>
  );
}

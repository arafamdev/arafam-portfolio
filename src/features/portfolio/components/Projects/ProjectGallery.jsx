function ProjectGallery({ images, translations, title }) {
  if (!images?.length || !translations) {
    return null;
  }

  return (
    <section className="border-foreground/15 mt-8 border-t pt-6">
      <h3 className="mb-5 text-base font-semibold">{title}</h3>

      <div className="grid gap-6">
        {images.map((image) => {
          const imageTranslation = translations[image.id];

          return (
            <figure key={image.id} className="min-w-0">
              <img
                src={image.src}
                width={image.width}
                height={image.height}
                alt={imageTranslation.alt}
                loading="lazy"
                decoding="async"
                className="border-foreground/10 h-auto w-full rounded-lg border"
              />

              <figcaption className="text-muted mt-3 text-xs leading-5">
                {imageTranslation.title}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectGallery;

"use client";

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn(className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

type CarouselPreviousProps = React.ComponentProps<typeof Button> & {
  classNameIcon?: string;
};

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  CarouselPreviousProps
>(
  (
    { className, variant = "outline", size = "icon", classNameIcon, ...props },
    ref,
  ) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    if (!canScrollPrev) {
      return null;
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute size-16 rounded-full border-none",
          orientation === "horizontal"
            ? "-left-4 xl:-left-8 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeft className={cn("size-16 flex-shrink-0", classNameIcon)} />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

type CarouselNextProps = React.ComponentProps<typeof Button> & {
  classNameIcon?: string;
};

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  (
    { className, variant = "outline", size = "icon", classNameIcon, ...props },
    ref,
  ) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    if (!canScrollNext) {
      return null;
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute size-16 border-none",
          orientation === "horizontal"
            ? "-right-4 xl:-right-8 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRight className={cn("size-16 flex-shrink-0", classNameIcon)} />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

const CarouselIndicator = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & { index: number }
>(({ index, className, ...props }, ref) => {
  const { api } = useCarousel();

  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const onSelect = React.useCallback((emblaApi: CarouselApi) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() ?? null);
  }, []);

  const isSelected = api?.selectedScrollSnap() === index;

  React.useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("reInit", onSelect).on("select", onSelect);
  }, [api, onSelect]);

  return (
    <button
      ref={ref}
      onClick={() => api?.scrollTo(index)}
      {...props}
      className="py-2 px-1 md:py-3 md:px-2"
    >
      <div
        className={cn(
          "size-2.5 md:size-3 rounded-full",
          isSelected ? "bg-white" : "bg-white/50",
          className,
        )}
      />
    </button>
  );
});

CarouselIndicator.displayName = "CarouselIndicator";

const CarouselIndicators = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api } = useCarousel();

  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onInit = React.useCallback((api: CarouselApi) => {
    setScrollSnaps(api?.scrollSnapList() ?? []);
  }, []);

  React.useEffect(() => {
    if (!api) return;

    onInit(api);
    api.on("reInit", onInit);
  }, [api, onInit]);

  if (scrollSnaps.length <= 1) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex bg-black/20 rounded-lg px-2", className)}
      {...props}
    >
      {scrollSnaps.map((_, i) => (
        <CarouselIndicator key={i} index={i} />
      ))}
    </div>
  );
});

CarouselIndicators.displayName = "CarouselIndicators";

export {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
};

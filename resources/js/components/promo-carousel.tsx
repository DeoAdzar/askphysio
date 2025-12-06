import { useState, useRef, useEffect } from 'react';

function PromoCarousel() {
    const promos = [
        {
            id: 1,
            image: 'https://picsum.photos/seed/promo1/800/400',
        },
        {
            id: 2,
            image: 'https://picsum.photos/seed/promo2/800/400',
        },
        {
            id: 3,
            image: 'https://picsum.photos/seed/promo3/800/400',
        },
        {
            id: 4,
            image: 'https://picsum.photos/seed/promo4/800/400',
        },
    ];

    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);

    const handleStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
    };

    const handleMove = (clientX: number) => {
        if (!isDragging) return;
        const diff = clientX - startX;
        setTranslateX(diff);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 50;
        if (translateX < -threshold && index < promos.length - 1) {
            setIndex(index + 1);
        } else if (translateX > threshold && index > 0) {
            setIndex(index - 1);
        }

        setTranslateX(0);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        handleStart(e.clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
        handleMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleEnd();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleEnd();
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, startX, translateX]);

    // Calculate position based on current index
    const getCardPosition = () => {
        const cardWidth = 85; // 85%
        const gapWidth = 12; // 12px (gap-3)

        if (index === 0) {
            // First slide: card on left, show preview on right
            return '0%';
        } else if (index === promos.length - 1) {
            // Last slide: card on right, show preview on left
            const offset = 100 - cardWidth; // 15%
            return `calc(-${(promos.length - 1) * cardWidth}% - ${(promos.length - 1) * gapWidth}px + ${offset}%)`;
        } else {
            // Middle slides: card in center, show previews on both sides
            const centerOffset = (100 - cardWidth) / 2; // 7.5%
            return `calc(-${index * cardWidth}% - ${index * gapWidth}px + ${centerOffset}%)`;
        }
    };

    return (
        <section className="mt-6">
            <h2 className="text-lg font-bold text-[#0b1b4a] mb-4">Promo untuk kamu</h2>

            <div className="relative -mx-4">
                <div
                    ref={containerRef}
                    className="overflow-hidden cursor-grab active:cursor-grabbing select-none px-4"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex gap-3 transition-transform"
                        style={{
                            transform: `translateX(calc(${getCardPosition()} + ${translateX}px))`,
                            transitionDuration: isDragging ? '0ms' : '300ms',
                            transitionTimingFunction: 'ease-out',
                        }}
                    >
                        {promos.map((promo) => (
                            <div
                                key={promo.id}
                                className="flex-shrink-0"
                                style={{ width: '85%' }}
                            >
                                <div className="relative h-28 sm:h-36 md:h-44 rounded-3xl overflow-hidden shadow-md bg-gray-200">
                                    <img
                                        src={promo.image}
                                        alt={`Promo ${promo.id}`}
                                        className="w-full h-full object-cover pointer-events-none"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromoCarousel;
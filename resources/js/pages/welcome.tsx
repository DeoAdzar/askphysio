import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import PromoCarousel from '../components/promo-carousel';

// Simple BannerSlider component that reads images from public assets.
// Assumption: place images in `public/images/` (for example: /images/banner1.jpg).
function BannerSlider() {
    // Using Lorem Picsum placeholder images for now (seeded so they remain consistent).
    const banners = [
        'https://picsum.photos/seed/banner1/1200/600',
        'https://picsum.photos/seed/banner2/1200/600',
        'https://picsum.photos/seed/banner3/1200/600',
    ];

    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // Use a self-rescheduling timeout instead of setInterval.
    // This behaves more reliably in React Strict Mode and when the component re-renders.
    useEffect(() => {
        if (paused) return;
        let mounted = true;
        const tick = () => {
            if (!mounted) return;
            setIndex((i) => (i + 1) % banners.length);
        };
        const id = setTimeout(tick, 3000);
        return () => {
            mounted = false;
            clearTimeout(id);
        };
    }, [paused, index, banners.length]);

    return (
        <section
            className="rounded-xl overflow-hidden shadow-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="w-full h-28 sm:h-36 md:h-44 relative bg-gray-100">
                {/* slides row: each image takes 100% width of container */}
                <div
                    className="absolute inset-0 flex"
                    style={{
                        width: `${banners.length * 100}%`,
                        transform: `translateX(-${(index * 100) / banners.length}%)`,
                        transition: 'transform 500ms ease',
                    }}
                >
                    {banners.map((src, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0"
                            style={{ width: `${100 / banners.length}%` }}
                        >
                            <img
                                src={src}
                                alt={`banner-${i + 1}`}
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                {/* indicators */}
                <div className="absolute left-0 right-0 bottom-3 flex items-center justify-center gap-2">
                    {banners.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Slide ${i + 1}`}
                            className={`w-2 h-2 rounded-full transition-colors duration-150 ${i === index ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Footer component
function Footer() {
    return (
        <footer className="mt-8 bg-gradient-to-b from-blue-100 to-blue-50 rounded-t-3xl pt-8 pb-6 px-4 mx-0">
            {/* Message section with illustration */}
            <div className="flex items-center gap-4 mb-8">
                <div className="flex-1">
                    <p className="text-sm text-gray-700 font-medium leading-snug">Sehat Dari Mana Saja dan Hubungi Kami Kapanpun</p>
                </div>
                {/* Simple mascot illustration */}
                <div className="w-24 h-24 flex-shrink-0 relative flex items-center justify-center">
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        {/* Cyan circle background */}
                        <circle cx="60" cy="60" r="50" fill="#4FD1E5" opacity="0.4" />

                        {/* Head */}
                        <circle cx="60" cy="40" r="14" fill="#4FD1E5" />

                        {/* Body */}
                        <rect x="48" y="58" width="24" height="32" rx="4" fill="#4FD1E5" />

                        {/* Arms */}
                        <rect x="42" y="62" width="6" height="24" rx="3" fill="#2FA4BF" />
                        <rect x="72" y="62" width="6" height="24" rx="3" fill="#2FA4BF" />

                        {/* Legs */}
                        <rect x="50" y="92" width="6" height="18" rx="3" fill="#2FA4BF" />
                        <rect x="64" y="92" width="6" height="18" rx="3" fill="#2FA4BF" />

                        {/* Plus sign (medical cross) */}
                        <g transform="translate(60, 45)">
                            <rect x="-1.5" y="-6" width="3" height="12" fill="#1E40AF" rx="1.5" />
                            <rect x="-6" y="-1.5" width="12" height="3" fill="#1E40AF" rx="1.5" />
                        </g>

                        {/* Medical shield */}
                        <path d="M60 50 L70 45 L70 60 Q70 75 60 85 Q50 75 50 60 L50 45 Z" fill="#4FD1E5" stroke="#1E40AF" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>

            {/* Social Media section */}
            <div>
                <h3 className="text-base font-bold text-red-500 mb-4">Sosial Media</h3>

                <div className="space-y-2.5 mb-6">
                    {/* Instagram */}
                    <a
                        href="https://instagram.com/askphysio_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2.5 bg-white rounded-lg hover:shadow-sm transition-shadow"
                    >
                        <div className="w-9 h-9 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="1" fill="white" />
                                <circle cx="17.6" cy="6.4" r="1" fill="white" />
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z" fill="white" />
                            </svg>
                        </div>
                        <span className="text-blue-700 font-medium text-sm">@askphysio_</span>
                    </a>

                    {/* TikTok */}
                    <a
                        href="https://tiktok.com/@askphysio_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2.5 bg-white rounded-lg hover:shadow-sm transition-shadow"
                    >
                        <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.7a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.03.99.1V9.4a6.15 6.15 0 0 0-.99-.08 6.59 6.59 0 1 0 6.59 6.59V11.9a8.62 8.62 0 0 0 4.7-1.34v-3.87z" fill="white" />
                            </svg>
                        </div>
                        <span className="text-blue-700 font-medium text-sm">@askphysio_</span>
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 mb-4"></div>

            {/* Copyright section */}
            <div className="text-center">
                <p className="text-xs text-gray-600 leading-relaxed">
                    © S1 Fisioterapi | Fakultas Kedokteran |<br />
                    Universitas Negeri Surabaya
                </p>
            </div>
        </footer>
    );
}

export default function Welcome() {
    return (
        <>
            <Head title="askPhysio" />

            <div className="min-h-screen bg-[#f8fafc] text-[#0b1b4a] flex flex-col">
                <header className="sticky top-0 z-10 w-full border-b border-[#d7dff0] bg-white">
                    <div className="max-w-[420px] mx-auto flex items-center justify-between px-4 py-3">
                        <button aria-label="menu" className="p-2">
                            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="2" rx="1" fill="#10207A" />
                                <rect y="7" width="18" height="2" rx="1" fill="#10207A" />
                                <rect y="14" width="12" height="2" rx="1" fill="#10207A" />
                            </svg>
                        </button>
                        <div className="flex-1 text-center font-semibold">askPhysio</div>
                        <button aria-label="profile" className="p-2">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="8" r="3.5" stroke="#10207A" strokeWidth="1.5" />
                                <path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" stroke="#10207A" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </header>

                <main className="max-w-[420px] mx-auto w-full px-4 py-6 flex-1 pb-32">
                    {/* Banner slider: images should be placed under public/images, e.g. /images/banner1.jpg */}
                    <BannerSlider />

                    <section className="mt-5 grid grid-cols-4 gap-4 text-center">
                        {['Konsultasi', 'Apotek', 'Edukasi', 'Fisioterapi', 'Kesehatan', 'Lainnya'].map((label, i) => (
                            <button key={i} className="flex flex-col items-center gap-2 py-2">
                                <div className="w-14 h-14 rounded-full bg-[#dbe9ff] flex items-center justify-center shadow-inner">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="8" stroke="#1040B0" strokeWidth="1.2" />
                                    </svg>
                                </div>
                                <div className="text-[12px] leading-tight mt-1 text-[#10207A]">{label}</div>
                            </button>
                        ))}
                    </section>

                    <section className="mt-4">
                        <div className="bg-white border-2 border-[#2b52c9] rounded-md p-3 flex items-center justify-between shadow-sm">
                            <div>
                                <div className="text-xs text-red-600">your coins</div>
                                <div className="text-lg font-semibold">50</div>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-[#f33] flex items-center justify-center text-white">→</button>
                        </div>
                    </section>

                    {/* Promo Carousel Section */}
                    <PromoCarousel />

                    {/* Footer Section */}
                    <Footer />

                </main>

                <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-[420px] bg-[#06227a] text-white rounded-2xl shadow-lg py-3 px-4">
                    <div className="flex items-center justify-between">
                        {['Beranda', 'Riwayat', 'Profil', 'Pesan', 'Setelan'].map((label) => (
                            <button key={label} className="flex flex-col items-center text-[12px] gap-1 flex-1">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="1" />
                                    </svg>
                                </div>
                                <span className="text-[11px]">{label}</span>
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
}

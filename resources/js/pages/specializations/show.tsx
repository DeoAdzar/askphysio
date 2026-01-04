import { Head, router } from '@inertiajs/react';
import { Home, Clock, User, MessageCircle, Settings } from 'lucide-react';
import type { Specialization, Condition } from '../../types';

interface SpecializationWithConditions extends Specialization {
    conditions: Condition[];
}

interface Props {
    specialization: SpecializationWithConditions;
}

export default function SpecializationShow({ specialization }: Props) {
    return (
        <>
            <Head title={`${specialization.name} - askPhysio`} />

            <div className="min-h-screen bg-[#f8fafc] text-[#0b1b4a]">
                {/* Header */}
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

                <main className="max-w-[420px] mx-auto w-full px-4 py-4 pb-32">
                    {/* Back Button */}
                    <div className="mb-4">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                router.visit('/physiotherapy');
                            }}
                            className="inline-flex items-center gap-2 text-[#666] hover:text-[#10207A] transition-colors cursor-pointer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-sm font-medium">Kembali</span>
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Cari Diagnosis"
                                className="w-full px-4 py-3 pr-12 border-2 border-[#2b52c9] rounded-full text-sm focus:outline-none focus:border-[#1040B0]"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="6" stroke="#2b52c9" strokeWidth="2" />
                                    <path d="M15.5 15.5l4 4" stroke="#2b52c9" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-xl font-bold text-[#0b1b4a] mb-4">
                        Cari Fisioterapi Spesialis Sesuai Dengan Keluhan Mu
                    </h1>

                    {/* Conditions List */}
                    {specialization.conditions && specialization.conditions.length > 0 ? (
                        <div className="space-y-4">
                            {specialization.conditions.map((condition) => {
                                const whatsappText = `Halo, saya ingin berkonsultasi mengenai: ${condition.name}`;
                                const whatsappUrl = `https://wa.me/6289512636038?text=${encodeURIComponent(whatsappText)}`;

                                return (
                                    <div
                                        key={condition.id}
                                        className="bg-white p-4 rounded-lg border-2 border-gray-300 shadow-md relative"
                                    >
                                        <h3 className="text-base font-normal text-[#0b1b4a] mb-2 pr-20">
                                            {condition.name}
                                        </h3>
                                        {condition.description && (
                                            <p className="text-sm text-[#666] mb-2">
                                                {condition.description}
                                            </p>
                                        )}
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute right-4 bottom-4 px-6 py-2 bg-[#c5d9ff] text-[#10207A] rounded-full text-sm font-medium hover:bg-[#b0caff] transition-colors"
                                        >
                                            Chat
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-[#666]">Belum ada kondisi yang terdaftar</p>
                        </div>
                    )}
                </main>

                {/* Bottom Navigation */}
                <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-[420px] bg-[#06227a] text-white rounded-2xl shadow-lg py-3 px-4 z-[9999]">
                    <div className="flex items-center justify-between">
                        {[
                            {
                                label: 'Beranda',
                                href: '/',
                                icon: <Home size={20} color="#fff" strokeWidth={2} />
                            },
                            {
                                label: 'Riwayat',
                                href: '#',
                                icon: <Clock size={20} color="#fff" strokeWidth={2} />
                            },
                            {
                                label: 'Profil',
                                href: '#',
                                icon: <User size={20} color="#fff" strokeWidth={2} />
                            },
                            {
                                label: 'Pesan',
                                href: '#',
                                icon: <MessageCircle size={20} color="#fff" strokeWidth={2} />
                            },
                            {
                                label: 'Setting',
                                href: '#',
                                icon: <Settings size={20} color="#fff" strokeWidth={2} />
                            },
                        ].map((item) =>
                            item.href === '#' ? (
                                <button
                                    key={item.label}
                                    type="button"
                                    className="flex flex-col items-center text-[12px] gap-1 flex-1 cursor-pointer"
                                >
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="text-[11px]">{item.label}</span>
                                </button>
                            ) : (
                                <button
                                    key={item.label}
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        router.visit(item.href);
                                    }}
                                    className="flex flex-col items-center text-[12px] gap-1 flex-1 cursor-pointer"
                                >
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="text-[11px]">{item.label}</span>
                                </button>
                            )
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}

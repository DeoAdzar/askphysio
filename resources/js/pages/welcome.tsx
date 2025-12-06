import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="askPhysio" />

            <div className="min-h-screen bg-[#f8fafc] text-[#0b1b4a] flex flex-col">
                <header className="w-full border-b border-[#d7dff0] bg-white">
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

                <main className="max-w-[420px] mx-auto w-full px-4 py-6 flex-1">
                    <section className="rounded-xl bg-white p-4 shadow-sm flex items-center gap-4">
                        <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-gradient-to-tr from-[#dbe9ff] to-[#f2f8ff]">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="20" fill="#DDECFF" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Selamat datang di layanan fisioterapi kami</h2>
                            <p className="text-sm text-[#6b6e76]">Tempat di mana ilmu pengetahuan, teknologi, dan sentuhan empati bertemu</p>
                        </div>
                    </section>

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

                    <section className="mt-6">
                        <h3 className="text-lg font-semibold">Promo untuk kamu</h3>
                    </section>
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

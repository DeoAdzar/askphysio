// Updated Footer component
function Footer() {
    const socialLinks = [
        {
            name: 'Instagram',
            username: '@askphysio_',
            href: 'https://instagram.com/askphysio_',
            icon: 'Instagram',
        },
        {
            name: 'TikTok',
            username: '@askphysio_',
            href: 'https://tiktok.com/@askphysio_',
            icon: 'TikTok',
        },
    ];

    return (
        <footer className="mt-8 -mx-4 relative bg-gray-50">
            {/* Wave decoration */}
            <div className="relative w-full bg-transparent" style={{ height: '100px' }}>
                <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    style={{ height: '100px' }}
                >
                    <path
                        d="M0,60 C300,20 450,10 720,35 C990,60 1140,70 1440,45 L1440,100 L0,100 Z"
                        fill="#d6e7f9"
                    />
                </svg>
            </div>

            {/* Blue gradient background */}
            <div className="px-5 pb-6 bg-[#d6e7f9]">
                {/* Message card with mascot */}
                <div className="relative mb-8 pt-6">
                    <div className="bg-white rounded-3xl p-4 pr-28 shadow-lg">
                        <p className="text-base leading-relaxed text-gray-700">
                            Sehat Dari Mana Saja<br />
                            dan Hubungi Kami Kapanpun
                        </p>
                    </div>
                    {/* Mascot image */}
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                        <img
                            src="https://picsum.photos/128/128"
                            alt="Mascot"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Social Media section */}
                <div className="mt-6">
                    <h3 className="text-[20px] font-extrabold text-[#ff7a8c] mb-4">
                        Social Media
                    </h3>
                    <div className="space-y-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group"
                            >
                                <div className={`w-[24px] h-[24px] rounded-[8px] flex items-center justify-center shadow-md transition-transform group-hover:scale-105 ${social.icon === 'Instagram' ? 'bg-[#1e3a8a]' : 'bg-[#1e3a8a]'}`}>
                                    {social.icon === 'Instagram' ? (
                                        <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="none">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                                        </svg>
                                    ) : (
                                        <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <p className="text-[15px] font-normal text-[#4a5568]">{social.username}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="bg-gray-50 py-4 text-center border-t-2 border-gray-300">
                <p className="text-sm text-gray-600">
                    © S1 Fisioterapi | Fakultas Kedokteran |<br />
                    Universitas Negeri Surabaya
                </p>
            </div>
        </footer>
    );
}

export default Footer;
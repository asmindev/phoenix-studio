import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-800 p-6 mt-12">
            <div className="container mx-auto flex flex-wrap items-center text-left md:text-center">
                <div className="w-full md:w-4/12 px-4 mb-6 md:mb-0">
                    <h5 className="text-white font-bold uppercase text-sm md:text-base">
                        Alamat
                    </h5>
                    <p className="text-gray-600 font-bold text-xs md:text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 inline-block mr-2"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                className="fill-gray-600"
                            />
                        </svg>
                        123 Main Street, Anytown USA
                    </p>
                </div>
                <div className="w-full md:w-4/12 px-4 mb-6 md:mb-0">
                    <h5 className="text-white font-bold uppercase text-sm md:text-base">
                        Kontak
                    </h5>
                    <p className="text-gray-600 font-bold text-xs md:text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 inline-block mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                        </svg>
                        (123) 456-7890
                    </p>
                    <p className="text-gray-600 font-bold text-xs md:text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 inline-block mr-2"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                                className="fill-gray-600"
                            />
                        </svg>
                        info@example.com
                    </p>
                </div>
                <div className="w-full md:w-4/12 px-4 mb-6 md:mb-0">
                    <h5 className="text-white font-bold uppercase text-sm md:text-base">
                        Tautan
                    </h5>
                    <ul className="list-reset leading-loose text-gray-600 font-bold text-xs md:text-sm">
                        <li>
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tentang"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                Tentang
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/kontak"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

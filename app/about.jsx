'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
    return (
        <div className="mt-12">
            <div>
                {/* about us */}
                <motion.h5
                    className="text-xl font-bold text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Us
                </motion.h5>
                <motion.h1
                    className="text-6xl font-bold text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Phoenix 021
                </motion.h1>
                <div className="my-4 lg:w-8/12">
                    <motion.p
                        className="text-sm leading-relaxed text-gray-700 text-justify"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Phoenix adalah nama angkatan dari Teknik Informatika
                        2021 di Universitas Haluoleo, Kendari. Nama Phoenix
                        digunakan karena Phoenix adalah burung yang dapat
                        menyembuhkan dirinya sendiri dan melakukan regenerasi.
                        Burung Phoenix adalah hewan mitologis yang berasal dari
                        mitologi Yunani dan Romawi. Selain mengambil makna dari
                        burung Phoenix, kami juga mengambil makna dari Bios
                        Phoenix.
                    </motion.p>
                </div>
            </div>
            <div>
                <div className="my-12">
                    <h1 className="font-poppins text-4xl font-bold text-gray-700">
                        What We Do
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link
                        href="/skill/development"
                        className="w-full h-fit group p-4 rounded hover:bg-orange-50/70 smooth"
                    >
                        <div className="h-full">
                            <motion.h1
                                className="text-2xl font-bold text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Web Development
                            </motion.h1>
                            <div className="my-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="bg-orange-100 rounded-full p-4 w-16 h-16"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                                        className="fill-orange-500"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="">
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-sm leading-relaxed text-gray-700 text-justify"
                            >
                                Kami mengerjakan berbagai macam website mulai
                                dari website profile, website e-commerce,
                                website blog, website portfolio, dan lain-lain.
                                Jadi jika anda membutuhkan website, kami siap
                                untuk membantu anda.
                            </motion.p>
                        </div>
                        <div className="my-4 relative w-full flex">
                            {/* when hover update */}
                            <span className="opacity-0 group-hover:opacity-100 smooth absolute left-2 group-hover:left-0 text-gray-700">
                                Lihat Selengkapnya
                            </span>
                            <button
                                className="opacity-0 group-hover:opacity-100 smooth absolute right-6 group-hover:right-4"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-orange-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link
                        href="/skill/design"
                        className="w-full h-fit group p-4 rounded hover:bg-violet-50/70 smooth"
                    >
                        <div className="h-full">
                            <motion.h1
                                className="text-2xl font-bold text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Design
                            </motion.h1>
                            <div className="my-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="bg-violet-100 rounded-full p-4 w-16 h-16"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M16.596 1.04l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.656.212-1.485a.5.5 0 0 1 .848-.283zM4.595 20.15c3.722-3.331 7.995-4.328 12.643-5.52l.446-4.018-4.297-4.297-4.018.446c-1.192 4.648-2.189 8.92-5.52 12.643L2.454 18.01c2.828-3.3 3.89-6.953 5.303-13.081l6.364-.707 5.657 5.657-.707 6.364c-6.128 1.414-9.782 2.475-13.081 5.303L4.595 20.15zm5.284-6.03a2 2 0 1 1 2.828-2.828A2 2 0 0 1 9.88 14.12z"
                                        className="fill-violet-500"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="">
                            <motion.p
                                className="text-sm leading-relaxed text-gray-700 text-justify"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* ui ux designer */}
                                Dalam bidang design kami memiliki beberapa
                                spesialis yang dapat membantu anda dalam membuat
                                desain yang menarik dan dapat digunakan untuk
                                berbagai macam kebutuhan. Mulai dari desain
                                logo, desain poster, desain banner, desain web
                                dan lain-lain.
                            </motion.p>
                        </div>
                        <div className="my-4 relative w-full flex">
                            {/* when hover update */}
                            <span className="opacity-0 group-hover:opacity-100 smooth absolute left-2 group-hover:left-0 text-gray-700">
                                Lihat Selengkapnya
                            </span>
                            <button
                                className="opacity-0 group-hover:opacity-100 smooth absolute right-6 group-hover:right-4"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-violet-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link
                        href="/skill/photo-editing"
                        className="w-full h-fit group p-4 rounded hover:bg-green-50/70 smooth"
                    >
                        <div className="h-full">
                            <motion.h1
                                className="text-2xl font-bold text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Photo Editing
                            </motion.h1>
                            <div className="my-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="bg-green-100 rounded-full p-4 w-16 h-16"
                                >
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path
                                        d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.415 1.413L9 11.93l-4 3.999V19h10.533l.708.001 1.329-1.33L18.9 19h.1v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.55 0-1-.45-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z"
                                        className="fill-green-500"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" h-full">
                            <motion.p
                                className="text-sm leading-relaxed text-gray-700 text-justify"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* photo editor */}
                                Kami ahli dalam mengedit foto dengan berbagai
                                macam style dan genre. Kami juga menerima jasa
                                editing foto untuk keperluan personal ataupun
                                untuk keperluan bisnis. Jangan ragu untuk
                                menghubungi kami.
                            </motion.p>
                        </div>
                        <div className="my-4 relative w-full flex">
                            {/* when hover update */}
                            <span className="opacity-0 group-hover:opacity-100 smooth absolute left-2 group-hover:left-0 text-gray-700">
                                Lihat Selengkapnya
                            </span>
                            <button
                                className="opacity-0 group-hover:opacity-100 smooth absolute right-6 group-hover:right-4"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-green-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link
                        href="/skill/digital-marketing"
                        className="w-full h-fit group p-4 rounded hover:bg-teal-50/70 smooth"
                    >
                        <div className="h-full">
                            <motion.h1
                                className="text-2xl font-bold text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Digital Marketing
                            </motion.h1>
                            <div className="my-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-16 h-16 bg-teal-100 rounded-full p-4 text-teal-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" h-full">
                            <motion.p
                                className="text-sm leading-relaxed text-gray-700 text-justify"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* photo editor */}
                                Kami menyediakan layanan digital marketing yang
                                berkualitas tinggi untuk bisnis anda. Kami
                                adalah tim yang berdedikasi untuk membuat bisnis
                                anda berkembang dengan cepat. Kami akan membantu
                                anda untuk meningkatkan bisnis anda dengan
                                menggunakan media sosial dan website.
                            </motion.p>
                        </div>
                        <div className="my-4 relative w-full flex">
                            {/* when hover update */}
                            <span className="opacity-0 group-hover:opacity-100 smooth absolute left-2 group-hover:left-0 text-gray-700">
                                Lihat Selengkapnya
                            </span>
                            <button
                                className="opacity-0 group-hover:opacity-100 smooth absolute right-6 group-hover:right-4"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-teal-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link
                        href="/skill/video-editing"
                        className="w-full h-fit group p-4 rounded hover:bg-pink-50/70 smooth"
                    >
                        <div className="h-full">
                            <motion.h1
                                className="text-2xl font-bold text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Video Editing
                            </motion.h1>
                            <div className="my-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-16 h-16 bg-pink-100 rounded-full p-4 text-pink-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" h-full">
                            <motion.p
                                className="text-sm leading-relaxed text-gray-700 text-justify"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* photo editor */}
                                Kami punya keterampilan untuk membuat video yang
                                menarik dan berkualitas tinggi. Kami akan
                                membantu anda untuk membuat video yang sesuai
                                dengan kebutuhan anda. Kami membuat video untuk
                                bisnis anda, video promosi, video dokumentasi,
                                video animasi, dan video lainnya.
                            </motion.p>
                        </div>
                        <div className="my-4 relative w-full flex">
                            {/* when hover update */}
                            <span className="opacity-0 group-hover:opacity-100 smooth absolute left-2 group-hover:left-0 text-gray-700">
                                Lihat Selengkapnya
                            </span>
                            <button
                                className="opacity-0 group-hover:opacity-100 smooth absolute right-6 group-hover:right-4"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-pink-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link
                        href="/skill/video-editing"
                        className="w-full h-fit group p-4 rounded hover:bg-fuchsia-50/70 smooth"
                    >
                        <div className="h-full">
                            <motion.h1
                                className="text-2xl font-bold text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Photography
                            </motion.h1>
                            <div className="my-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-16 h-16 bg-fuchsia-100 rounded-full p-4 text-fuchsia-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" h-full">
                            <motion.p
                                className="text-sm leading-relaxed text-gray-700 text-justify"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* photo editor */}
                                Phoenix juga memiliki keterampilan dalam bidang
                                fotografi. Kami akan membantu anda untuk membuat
                                foto yang berkualitas tinggi. Kami akan membantu
                                anda untuk membuat foto yang sesuai dengan
                                kebutuhan anda. Kami membuat foto untuk bisnis
                                anda, foto dokumentasi, foto produk, dan foto
                                lainnya. Kami juga menerima jasa editing foto.
                            </motion.p>
                        </div>
                        <div className="my-4 relative w-full flex">
                            {/* when hover update */}
                            <span className="opacity-0 group-hover:opacity-100 smooth absolute left-2 group-hover:left-0 text-gray-700">
                                Lihat Selengkapnya
                            </span>
                            <button
                                className="opacity-0 group-hover:opacity-100 smooth absolute right-6 group-hover:right-4"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-fuchsia-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link
                        href="/skill/video-editing"
                        className="w-full h-fit group p-4 rounded hover:bg-blue-50/70 smooth"
                    >
                        <div className="h-full">
                            <motion.h1
                                className="text-2xl font-bold text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Gaming
                            </motion.h1>
                            <div className="my-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="bg-blue-100 rounded-full p-4 w-16 h-16"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm0 2H7a4 4 0 0 0-3.995 3.8L3 10v4a4 4 0 0 0 3.8 3.995L7 18h10a4 4 0 0 0 3.995-3.8L21 14v-4a4 4 0 0 0-3.8-3.995L17 6zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9h2zm8 4v2h-2v-2h2zm-2-4v2h-2V9h2z"
                                        className="fill-blue-500"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" h-full">
                            <motion.p
                                className="text-sm leading-relaxed text-gray-700 text-justify"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* photo editor */}
                                Phoenix juga memiliki keterampilan dalam bidang
                                gaming. Banyak talenta berkualitas yang ada
                                didalamnya dan telah berpengalaman dalam bidang
                                gaming. Kami telah memenangkan beberapa
                                tournament.
                            </motion.p>
                        </div>
                        <div className="my-4 relative w-full flex">
                            {/* when hover update */}
                            <span className="opacity-0 group-hover:opacity-100 smooth absolute left-2 group-hover:left-0 text-gray-700">
                                Lihat Selengkapnya
                            </span>
                            <button
                                className="opacity-0 group-hover:opacity-100 smooth absolute right-6 group-hover:right-4"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

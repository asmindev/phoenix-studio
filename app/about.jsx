'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
                    <div className="w-full h-fit">
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
                                We are a team of developers that create high
                                quality websites. We are passionate about
                                building excellent software that improves the
                                lives of those around us.
                            </motion.p>
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <div className="h-full">
                            <motion.h1
                                className="text-2xl font-bold text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                UI/UX Design
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
                                We provide high quality UI/UX design for your
                                website, mobile app, or any other digital
                                product. We are passionate about creating
                                beautiful and functional designs. We build
                                products that people love to use.
                            </motion.p>
                        </div>
                    </div>
                    <div className="w-full h-fit">
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
                                We provide high quality photo editing services
                                for your photo. We are passionate about creating
                                high quality photos. We have a team of
                                professional photo editors. We can edit your
                                photos to make them look amazing.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

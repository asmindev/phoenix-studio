/* eslint-disable react/no-unknown-property */

'use client'

import '../public/globals.css'
import { Poppins, Bebas_Neue } from '@next/font/google'

const poppins = Poppins({
    weights: [400, 700],
    weight: '400',
    variable: '--font-poppins',
    subsets: ['latin']
})
const bebas = Bebas_Neue({
    weights: [400, 700],
    weight: '400',
    variable: '--font-bebas',
    subsets: ['latin']
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <style jsx global>
                    {`
                        html {
                            font-family: ${poppins.style.fontFamily};
                        }
                    `}
                </style>
            </head>
            <body>{children}</body>
        </html>
    )
}

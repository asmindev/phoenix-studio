import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-800 p-6 mt-12 ">
            <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <Link href="/" className="text-white text-xl font-bold">
                        Phoenix 021
                    </Link>
                    <p className="text-gray-400 text-sm mt-2">
                        <code>Kita kuat karena ck-ck</code>
                    </p>
                </div>
                <div className="flex flex-col mt-4 md:mt-0">
                    <Link href="/about">
                        <p className="text-white text-sm font-bold">About</p>
                    </Link>
                    <Link href="/contact">
                        <p className="text-white text-sm font-bold mt-2">
                            Contact
                        </p>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

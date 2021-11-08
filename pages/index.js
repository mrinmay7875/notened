import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Nextjs Mongodb</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                {/* This is the homepage */}
                <div className="flex flex-col justify-center items-center text-white bg-black h-full py-10">
                    <h1 className="text-8xl font-bold ">Next.js</h1>
                    <h1 className="text-8xl font-bold">Mongodb</h1>
                    <h1
                        className="
                        text-8xl
                        font-bold"
                    >
                        App
                    </h1>
                    <Link href="/feed" passHref={true}>
                        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-10 my-20 ">
                            Go to Feed
                        </button>
                    </Link>
                </div>

                <Footer />
            </main>
        </div>
    );
}

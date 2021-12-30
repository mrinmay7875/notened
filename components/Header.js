import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';
import { server } from '../config/index';

function Header() {
    const [session, loading] = useSession();

    return (
        <div>
            <Head>
                <title>Next Mongodb App</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <header className="flex flex-row flex-wrap justify-around items-center bg-gray-900 ">
                <Link href="/">
                    <a className="text-2xl font-bold text-white ">Notened</a>
                </Link>

                <div className="flex flex-row flex-wrap justify-evenly items-center bg-gray-900 my-3  ">
                    {!session && (
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-10 "
                            onClick={() => signIn()}
                        >
                            Login
                        </button>
                    )}

                    {session && (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-5"
                            onClick={() => signOut({ callbackUrl: server })}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Header;

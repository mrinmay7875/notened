import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSession } from "next-auth/client";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin-top: 40px;
  border-color: red;
`;

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>Nextjs Mongodb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Header />
        <div className="flex flex-col justify-center items-center text-white bg-black h-full py-10 min-h-screen">
 
 <h1 className="text-4xl font-bold ">Notened</h1>
          <h6 className="text-xl font-bold mx-40 my-5 px-20 py-5 text-center">Simple Note taking App where you can store your notes or todo lists. To create a new note you must be logged in</h6>
       
          {loading  && <BeatLoader  size={30} color={"#123abc"} css={override} loading={loading} />}
          {!loading && session  && <div>
              <h2 className="text-4xl mt-10">You are logged in as {session.user.name} </h2>
              

              </div>
              }

          {!loading && !session && <h2 className="text-4xl mt-10">You are not logged in!</h2>}


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

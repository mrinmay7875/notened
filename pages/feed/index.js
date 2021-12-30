import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Post from '../../components/PostComponent';
import { server } from '../../config/index';
import { useSession, signIn, getSession } from 'next-auth/client';

export async function getServerSideProps(context) {
    const session = await getSession(context);
    // const session={user:{email: "mrinmaysantra3@gmail.com"}}
    if (session) {
        const email = session.user.email;
        // const email = "mrinmaysantra3@gmail.com"
        const res = await fetch(`${server}api/fetchpostbyusername`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        });

        let b = await res.json();

        return {
            props: {
                posts: b.Post,
                session: session
            }
        };
    } else {
        return {
            props: {
                posts: []
            }
        };
    }
}

function index({ posts, session }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [session, loading] = useSession();

    console.log(session);

    function handleCreatePost() {
        if (session) {
            window.location.href = '/newpost';
        } else {
            signIn();
        }
    }

    if (posts !== [] && session) {
        // console.log(posts);
        return (
            <div className=" bg-black min-h-screen">
                <Header />
                <div>
                    <h2 className="bg-black text-white text-3xl text-center py-5 ">
                        Here are the posts
                    </h2>
                    <div className="bg-black text-white text-2xl text-center">
                        To create a new post click here 👉
                        <button
                            onClick={handleCreatePost}
                            className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold ml-4 py-1 px-2 rounded "
                        >
                            Button
                        </button>
                    </div>
                </div>

                <div className="bg-black pt-5 pb-20 text-white ">
                    {posts.map((post) => (
                        <Post
                            key={post.post_id}
                            id={post.post_id}
                            username={post.username}
                            content={post.content}
                            avatar={post.avatar}
                            created_at={new Date(
                                post.created_at
                            ).toLocaleString()}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        );
    } else if (session && posts === []) {
        return (
            <>
                <Header />
                Sorry you haven not created any posts yet. You are logged in
                though.
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Header />
                Sorry you are not logged in Click on Login to login
                <Footer />
            </>
        );
    }
}

export default index;

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Post from '../../components/PostComponent';
import Link from 'next/link';
// import posts from '../../data/posts.json';
import Loader from 'react-loader-spinner';
import { server } from '../../config/index';

export async function getServerSideProps() {
    let a = await fetch(`${server}api/fetchallposts`);
    let b = await a.json();

    return {
        props: {
            posts: b.Posts
        }
    };
}

function index({ posts }) {
    if (posts) {
        // console.log(posts);
        return (
            <div>
                <Header />
                <h2 className="bg-black text-white text-3xl text-center py-5 ">
                    Here are the posts
                </h2>
                <h4 className="bg-black text-white pl-20">
                    To post first you have to{' '}
                    <Link href="/login" passHref={true}>
                        <a className=" text-red-700 hover:border-b-2 border-fuchsia-600">
                            Login here
                        </a>
                    </Link>
                </h4>

                <div className="bg-black   pt-5 pb-20 text-white ">
                    {posts.map((post) => (
                        <Post
                            key={post.post_id}
                            id={post.post_id}
                            username={post.username}
                            content={post.content}
                            avatar={post.avatar}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <>
                <Header />
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={500}
                    width={500}
                    timeout={3000} //3 secs
                />
                <Footer />
            </>
        );
    }
}

export default index;

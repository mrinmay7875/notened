import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { server } from '../../config/index';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function getServerSideProps(context) {
    const post_id = context.query.post[1];
    const res = await fetch(`${server}api/fetchpostbyid`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            post_id: post_id
        })
    });

    const data = await res.json();
    const post = data.Post[0];
    return {
        props: {
            post: post
        }
    };
}

async function deletePost(post_id) {
    let text = 'Are you sure you want to delete this post?';
    if (confirm(text) == true) {
        // We will delete the post
        let response = await fetch(`${server}api/deletepostbyid`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post_id: post_id
            })
        });
        let res = await response.json();

        if (res.data.deletedCount > 0) {
            alert('The post was deleted successfully!');
            window.location.href = '/feed';
        } else {
            alert('There was an error deleting the post!');
        }
    } else {
        // console.log("No please dont delete this post")  }
    }
}

function Post(props) {
    const { username, content, avatar, created_at, post_id } = props.post;
    if (props.post) {
        return (
            <>
                <Header />

                <div className="flex flex-col items-center justify-ceneter bg-black h-screen">
                    <h1 className="text-center text-2xl text-white py-10">
                        Here is your post
                    </h1>
                    <div className="rounded border-2 border-gray-100 bg-black text-white mx-20 mb-10 lg:mx-10 p-4 ">
                        <div>
                            <span className="mt-20 ml-2">
                                <Image
                                    src={avatar}
                                    alt="avatar"
                                    height="40"
                                    width="50"
                                    className="mt-20"
                                />
                            </span>
                            <span className="relative bottom-6 ml-2">
                                {username}
                            </span>
                        </div>
                        <p className="px-2.5 py-3"> {content}</p>

                        <div className="ml-5 text-gray-600">
                            {' '}
                            <div className="ml-5 text-gray-600">
                                Posted at{' '}
                                {new Date(created_at).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <Link href="/feed" passHref={true}>
                            <span className="text-xl text-white underline mt-15 cursor-pointer text-center">
                                Back to Feed
                            </span>
                        </Link>

                        <button
                            onClick={() => deletePost(post_id)}
                            className=" block absolute top-48 lg:top-32 bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded opacity-50 hover:opacity-80 "
                        >
                            Delete Post
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Header />

                {/* <Loader type="Circles" color="#00BFFF" height={80} width={80} /> */}
                <h1 className="bg-black text-white text-2xl">
                    Sorry could not find posts
                </h1>
                <div className="bg-black h-screen"></div>
                <Footer />
            </>
        );
    }
}

export default Post;

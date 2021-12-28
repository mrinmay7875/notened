import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { server } from '../../config/index';
import Image from 'next/image';
import Link from 'next/link';

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

function Post(props) {
    const { username, content, avatar,created_at } = props.post;
    if (props.post) {
        return (
            <>
                <Header />

                <div className="flex flex-col items-center justify-ceneter bg-black h-screen">
                    <h1 className="text-center text-2xl text-white py-10">
                        Here is your post 
                    </h1>
                    <div className="rounded border-2 border-gray-100 bg-black text-white mx-10 mb-10 lg:mx-10 p-4 ">
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

                        <div className="ml-5 text-gray-600">                <div className="ml-5 text-gray-600">Posted at {new Date(created_at).toLocaleString()}</div>
</div>
                    </div>

                    <div>
                            <Link href="/feed" passHref={true}>
                                    <span className="text-xl text-white underline mt-15 cursor-pointer text-center">
                                        Back to Feed
                                    </span>
                                    </Link>
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

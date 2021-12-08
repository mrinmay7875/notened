import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Post from "../../components/PostComponent";
import Link from "next/link";
// import posts from '../../data/posts.json';
import { server } from "../../config/index";
import { useSession, signIn } from "next-auth/client";

export async function getServerSideProps() {
  let a = await fetch(`${server}api/fetchallposts`);
  let b = await a.json();

  return {
    props: {
      posts: b.Posts,
    },
  };
}

function index({ posts }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [session, loading] = useSession();

  function handleCreatePost() {
    if (session) {
      window.location.href = "/newpost";
    } else {
      signIn();
    }
  }

  if (posts) {
    // console.log(posts);
    return (
      <div>
        <Header />
<div className="bg-black">


        <h2 className="bg-black text-white text-3xl text-center py-5 ">
          Here are the posts
        </h2>
        <div className="bg-black text-white text-2xl text-center">
To create a  new post click here 👉
        <button
          onClick={handleCreatePost}
          className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold ml-4 py-1 px-2 rounded "
          >
          Button
        </button>
            </div>
</div>
        {/* <h4 className="bg-black text-white pl-20">
                    To post first you have to{' '}
                    <Link href="/login" passHref={true}>
                        <a className=" text-red-700 hover:border-b-2 border-fuchsia-600">
                            Login here
                        </a>
                    </Link>
                </h4> */}

        {/* <h4 className="bg-black text-white pl-20">
                    To create a new post
                    <Link href="/newpost" passHref={true}>
                        <a className=" text-blue-700 hover:border-b-2 border-fuchsia-600">
                            Click here
                        </a>
                    </Link>
                </h4> */}

        <div className="bg-black pt-5 pb-20 text-white ">
          {posts.map((post) => (
            <Post
              key={post.post_id}
              id={post.post_id}
              username={post.username}
              content={post.content}
              avatar={post.avatar}
              created_at={post.created_at}
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
      
        <Footer />
      </>
    );
  }
}

export default index;

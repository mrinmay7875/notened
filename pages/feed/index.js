import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Post from "../../components/PostComponent";
import Link from "next/link";
import { server } from "../../config/index";
import { useSession, signIn } from "next-auth/client";




export async function getStaticProps() {
  let a = await fetch(`${server}api/fetchallposts`);
  let b = await a.json();

  return {
    revalidate: 1,
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
      <div className=" bg-black min-h-screen">
        <Header />
<div >


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
     
        <div className="bg-black pt-5 pb-20 text-white ">
          {posts.map((post) => (
            <Post
              key={post.post_id}
              id={post.post_id}
              username={post.username}
              content={post.content}
              avatar={post.avatar}
              created_at={(new Date(post.created_at)).toLocaleString()}

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

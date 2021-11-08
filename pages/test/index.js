import React from 'react';
import Post from '../../components/PostComponent';
export async function getServerSideProps() {
    let a = await fetch('http://localhost:3000/api/fetchallposts');
    let b = await a.json();

    return {
        props: {
            posts: b.Posts
        }
    };
}

function Test({ posts }) {
    return (
        <>
            <div className="bg-black   pt-5 pb-20 text-white ">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        content={post.content}
                        avatar={post.avatar}
                    />
                ))}
            </div>
            {console.log(posts)}
        </>
    );
}

export default Test;

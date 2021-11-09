import React from 'react';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    // console.log(context.query.post[0]);
    console.log(context.query);

    // function to send POST request to server
    const res = await fetch('http://localhost:3000/api/fetchpostbyusername', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: context.query.post[0]
        })
    });

    const data = await res.json();

    return {
        props: {
            // username: data.Post[0].username,
            // content: data.Post[0].content
        }
    };
}

function Post({ username, content }) {
    // console.log(router.query);

    // let a = await fetch('http://localhost:3000/')

    return (
        <>
            <div>The username is {username}</div>
            <div>The page content is </div>
            <br />
            <hr />
            {/* <h4> {content}</h4> */}
        </>
    );
}

export default Post;

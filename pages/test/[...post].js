import React from 'react';
import { useRouter } from 'next/router';
import { server } from './../../config/index';
export async function getServerSideProps(context) {
    // console.log(context.query.post[0]);
    console.log(context.query);

    // function to send POST request to server
    const res = await fetch(`${server}api/fetchpostbyusername`, {
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
        props: {}
    };
}

function Post({ username, content }) {
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

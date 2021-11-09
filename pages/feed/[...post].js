import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import Posts from '../../data/posts.json';
import PostComponent from '../../components/PostComponent';
import Image from 'next/image';
import Loader from 'react-loader-spinner';

async function Post() {
    let [id, setId] = useState();
    let [post, setPost] = useState([
        {
            id: '6',
            username: 'nleatham5',
            content:
                'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida',
            avatar: 'https://robohash.org/doloresevenietdelectus.png?size=50x50&set=set1'
        }
    ]);
    // const router = useRouter();
    // // let post;
    // useEffect(() => {
    //     if (router.isReady) {
    //         setId(router.query.post[1]);
    //     }
    // }, [router.isReady]);

    // Make the db call here to fetch the Posts from database

    // let a = await fetch('http://localhost:3000/api/fetchpostbyid');
    // let b = await a.json();
    // console.log('Hi There!');
    // console.log(b.Posts[0].username);
    // console.log(b.Posts[0].avatar);
    // setPost(b.Posts[0]);
    if (post) {
        return (
            <>
                <Header />

                <div className="bg-black h-screen">
                    <h1 className="text-center text-2xl text-white py-10">
                        Here is your post
                    </h1>
                    <div className="rounded border-2 border-gray-100 bg-black text-white mx-20 mb-10 lg:mx-30 p-4 ">
                        <div>
                            <span className="mt-20 ml-2">
                                <Image
                                    src={post[0].avatar}
                                    alt="avatar"
                                    height="40"
                                    width="50"
                                    className="mt-20"
                                />
                            </span>
                            <span className="relative bottom-6 ml-2">
                                {post[0].username}
                            </span>
                            {/* <span className="relative right-22 ">mrinmay</span> */}
                            {/* <span className="relative bottom-4 ml-2">mrinmay</span> */}
                        </div>
                        <p className="px-2.5 py-3">{post[0].content}</p>

                        <div className="ml-5 text-gray-600">6 hours ago</div>
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

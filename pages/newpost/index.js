import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { server } from '../../config/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSession} from 'next-auth/client';


function Newpost() {
    const [session, loading] =  useSession();
    async function submitPost() {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        let newPost = document.getElementById('newpost_field').value;
        let response = await fetch(`${server}api/createpost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newPost,
                user: session.user.name,
                avatar: session.user.image ? session.user.image : 'https://robohash.org/esseharumomnis.png?size=50x50&set=set1'
            })
        });

        let { error, res } = await response.json();
        document.getElementById('newpost_field').value = '';

        if (res) {
            toast.success('Post created successfully!', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            toast.error('Sorry could not create Post, Please try again !', {
                position: toast.POSITION.TOP_CENTER
            });
        }

        // console.log(error);
    }

    return (
        <div>
            <Header />
            <h3 className="bg-black text-white text-center py-10 text-2xl ">
                Create your new Post here
            </h3>
            <div className=" flex flex-col items-center justify-ceneter pb-20 bg-black">
                <div className=" mt-5 pt-0 mx-80">
                    <textarea
                        id="newpost_field"
                        className="resize border rounded-md"
                        rows="12"
                        cols="60"
                    ></textarea>
                </div>
                <div>
                    <button
                        onClick={submitPost}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-5 mt-10 "
                    >
                        Submit Post
                    </button>
                    <ToastContainer
                        position="top-center"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Newpost;

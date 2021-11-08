import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Post({ id, username, content, avatar }) {
    return (
        <Link href={`/feed/posts/${id}`} passHref={true}>
            <div className="rounded border-1 border-gray-500 bg-black text-white mx-20 mb-10 lg:mx-30 p-4 hover:bg-gray-900 cursor-pointer ">
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
                    <span className="relative bottom-6 ml-2">{username}</span>
                    {/* <span className="relative right-22 ">mrinmay</span> */}
                    {/* <span className="relative bottom-4 ml-2">mrinmay</span> */}
                </div>
                <p className="px-2.5 py-3">{content.substring(0, 40)}</p>

                <div className="ml-5 text-gray-600">6 hours ago</div>
            </div>
        </Link>
    );
}

export default Post;

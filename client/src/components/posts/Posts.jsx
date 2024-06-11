import React from 'react'
import './posts.scss'
import Post from '../post/Post'

const Posts = () => {

    // Temporary Dummy Data
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userID: 1,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatum!",
            img: "https://images.pexels.com/photos/13861099/pexels-photo-13861099.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            name: "JohnDoe Doe",
            userID: 2,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatum!",
        },
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts;

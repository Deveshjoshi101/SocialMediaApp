import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    // Temporary data
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatum!",
            name: "JohnDoe Doe",
            userID: 1,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatum!",
            name: "John Doe",
            userID: 2,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt={currentUser.name} />
                <input type="text" placeholder="Write a Comment" />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <img src={comment.profilePic} alt={comment.name} />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">a few seconds ago</span>
                </div>
            ))}
        </div>
    );
};

export default Comments;

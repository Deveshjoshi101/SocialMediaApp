import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./post.scss";
import { AuthContext } from "../../context/authContext";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const [like, setLike] = useState(false);
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userID}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date"> a minute ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="desc">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item" onClick={() => setLike(!like)}>
                        {like ? (
                            <>
                                <FavoriteOutlinedIcon /> You and
                            </>
                        ) : (
                            <FavoriteBorderOutlinedIcon />
                        )}
                        {' '}12 likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        2 comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    );
}

export default Post
import { useContext } from 'react'
import "./stories.scss"
import { AuthContext } from '../../context/authContext';

const Stories = () => {
    const { currentUser } = useContext(AuthContext);

    // Temporary Dummy Data
    const stories = [
        {
            id: 1,
            name: "JohnDoe Doe",
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: "JohnDoe Doe",
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 3,
            name: "JohnDoe Doe",
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 4,
            name: "JohnDoe Doe",
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
    ]

    return (
        <div className="stories">
            <div className="story" key={currentUser.id}>
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.profilePic} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories;
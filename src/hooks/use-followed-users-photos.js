import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);

    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserId = await getUserByUserId(userId);
            let followedUserPhotos = [];

            if (followingUserIds && followingUserIds[0].following.length > 0) {
                const followedUserPhotos = await getUserFollowedPhotos(userId, followingUserIds[0].following);

                followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPhotos);
            }
        }

        getTimelinePhotos();
    }, [userId]);

    return { photos };
}
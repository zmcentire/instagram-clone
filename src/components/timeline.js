import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../hooks/use-followed-users-photos';

const Timeline = () => {
    const { photos } = useFollowedUsersPhotos();

    return(
        <div className="container col-span-2">
            {!photos ? (
                <>
                    {[...new Array(4)].map((_, index) => (
                        <Skeleton key={index} count={4} width={640} height={500} className="mb-5" />
                    ))}
                </>
            ) : photos && photos.length > 0 ? (
                photos.map((content) => <p key={content.docId}>{content.username}</p>)
            ) : (
                <p className="text-center text-2xl">Follow people to see photos!</p>
            )}
        </div>
    )
}

export default Timeline
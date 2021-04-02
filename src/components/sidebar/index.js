import React from 'react';
import useUser from '../../hooks/use-user';

const Sidebar = () => {
    const { user: { docId, userId, following, username, fullName } = {} } = useUser();

    return(
        <div>
            <p>I am the sidebar</p>
        </div>
    )
}

export default Sidebar
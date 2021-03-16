export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'n8y50H2RNcNLGxTsaAhlsJHzh5k1',
            username: 'Zach',
            fullName: 'Zach McEntire',
            emailAddress: 'mcentirezach@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'Panther',
            fullName: 'Ann Takamaki',
            emailAddress: 'ann@takamaki.com',
            following: ['n8y50H2RNcNLGxTsaAhlsJHzh5k1'],
            followers: ['n8y50H2RNcNLGxTsaAhlsJHzh5k1'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'Joker',
            fullName: 'Akira Kurusu',
            emailAddress: 'akira@kurusu.com',
            following: ['n8y50H2RNcNLGxTsaAhlsJHzh5k1'],
            followers: ['n8y50H2RNcNLGxTsaAhlsJHzh5k1'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'Spike',
            fullName: 'Spike Spiegel',
            emailAddress: 'spike@spiegel.com',
            following: ['n8y50H2RNcNLGxTsaAhlsJHzh5k1'],
            followers: ['n8y50H2RNcNLGxTsaAhlsJHzh5k1'],
            dateCreated: Date.now()
        }
    ];

    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k]);
    }

    for (let i = 1; i <= 5; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '3',
                imageSrc: `/images/users/joker${i}.jpg`,
                caption:'Take Your Heart',
                likes: [],
                comments: [
                    {
                        displayName: 'Panther',
                        comment: 'Lookin cool, Joker'
                    },
                    {
                        displayName: 'Spike',
                        comment: 'Not bad'
                    }
                ],
                userLatitude: '40.7128',
                userLongitude: '74.0060',
                dateCreated: Date.now() 
            });
    }
}
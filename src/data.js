import subMinutes from 'date-fns/sub_minutes';
import subHours from 'date-fns/sub_hours';
import subDays from 'date-fns/sub_days';
import subMonths from 'date-fns/sub_months';

const today = new Date();

export default {
    tweets: [
        { id: 1, body: 'Lorem Ipsum', date: subMinutes(today, 1), author_id: 10 },
        { id: 2, body: 'Sic dolor amet', date: subMinutes(today, 25), author_id: 11 },
        { id: 3, body: 'Lorem Ipsum', date: subMinutes(today, 45), author_id: 10 },
        { id: 4, body: 'Sic dolor amet', date: subHours(today, 3), author_id: 11 },
        { id: 5, body: 'Lorem Ipsum', date: subHours(today, 7), author_id: 10 },
        { id: 6, body: 'Sic dolor amet', date: subDays(today, 1), author_id: 11 },
        { id: 7, body: 'Lorem Ipsum', date: subDays(today, 5), author_id: 10 },
        { id: 8, body: 'Sic dolor amet', date: subDays(today, 11), author_id: 11 },
        { id: 9, body: 'Lorem Ipsum', date: subDays(today, 23), author_id: 10 },
        { id: 10, body: 'Sic dolor amet', date: subMonths(today, 3), author_id: 11 },
    ],
    users: [
        {
            id: 10,
            username: 'johndoe',
            first_name: 'John',
            last_name: 'Doe',
            avatar_url: 'https://material-ui-1dab0.firebaseapp.com/static/images/remy.jpg',
        },
        {
            id: 11,
            username: 'janedoe',
            first_name: 'Jane',
            last_name: 'Doe',
            avatar_url: 'https://material-ui-1dab0.firebaseapp.com/static/images/uxceo-128.jpg',
        },
    ],
    stats: [
        { tweet_id: 1, views: 123, likes: 4, retweets: 1, responses: 0 },
        { tweet_id: 2, views: 567, likes: 45, retweets: 63, responses: 6 },
        { tweet_id: 3, views: 45, likes: 24, retweets: 18, responses: 1 },
        { tweet_id: 4, views: 87, likes: 34, retweets: 31, responses: 2 },
        { tweet_id: 5, views: 93, likes: 53, retweets: 14, responses: 4 },
        { tweet_id: 6, views: 10, likes: 2, retweets: 1, responses: 0 },
        { tweet_id: 7, views: 243, likes: 145, retweets: 121, responses: 128 },
        { tweet_id: 8, views: 73, likes: 12, retweets: 2, responses: 3 },
        { tweet_id: 9, views: 187, likes: 139, retweets: 167, responses: 98 },
        { tweet_id: 10, views: 435, likes: 389, retweets: 348, responses: 310 },
    ],
};

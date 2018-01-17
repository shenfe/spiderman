module.exports = {
    entry: 'http://zhihu.com',
    cookie: '',
    pages: {
        user: '(?:.*?)zhihu.com/people/(.*?)/(?:.*)',
        question: '(?:.*?)zhihu.com/question/(\\d+)(?:.*)',
        answer: {
            author: '',
            url: '(?:.*?)zhihu.com/question/(?:\\d+)/answer/(\\d+)(?:.*)'
        }
    }
};

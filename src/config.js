module.exports = {
    index: 'http://zhihu.com',
    cookie: '',
    pages: {
        user: '(?:.*?)zhihu.com/people/(.*?)/(?:.*)',
        question: '(?:.*?)zhihu.com/question/(\\d+)(?:.*)',
        answer: '(?:.*?)zhihu.com/question/(?:\\d+)/answer/(\\d+)(?:.*)'
    }
};

module.exports = {
    entry: 'http://zhihu.com',
    cookie: '',
    page: {
        user: '(?:.*?)zhihu.com/people/(.*?)/(?:.*)',
        question: '(?:.*?)zhihu.com/question/(\\d+)(?:.*)',
        answer: '(?:.*?)zhihu.com/question/(?:\\d+)/answer/(\\d+)(?:.*)'
    },
    type: {
        user: async () => {},
        question: async () => {},
        answer: async () => {}
    }
};

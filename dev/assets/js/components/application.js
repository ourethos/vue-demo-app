application = {
    el: '#app',

    data: {
        currentView: null,
        currentId: null
    },

    components: {
        dashboard: require('./dashboard'),
        messages: require('./messages'),
        users: require('./users')
    }
};

module.exports = application;

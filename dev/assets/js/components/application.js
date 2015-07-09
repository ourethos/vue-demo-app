application = {
    el: '#app',

    data: {
        currentView: null,
        currentId: null
    },

    components: {
        dashboard: require('./dashboard'),
        messages: require('./messages')
    }
};

module.exports = application;

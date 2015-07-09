routes = function(app, router) {

    /**
        Define our routes
    **/

    router.on('/', function() {
        app.currentView = 'dashboard';
    });

    router.on('/messages', function() {
        app.currentView = 'messages';
    });

    router.on('/messages/:id', function(id) {
        app.currentView = 'messages';
        app.currentId = id;
    });

    /**
        Add any filters, or additional config options,
        this could also be done when initalising in the
        app.js file, but if you wish to redirect to
        another page it could fit nicely in here.
    **/
    router.configure({
        // we can add a before filer, could be used for authorisation etc
        before: function() {

            /**
                set the current id to null on every page before routes
                are dispatched this means, if you select a
                resource eg message, then go back to the main resource
                page eg messages, it will be cleared out automatically.
            **/
            app.currentId = null;

            console.log('before');
            //throw new Error('Not authorised');
        },

        // we can catch 404s and redirect or show a 404 page.
        notfound: function() {
            console.log('not found');
            //throw new Error('Page not found');
        }
    });

    /**
        Initalise the router to begin listening for
        route changes and dispatching based on matches,
        we can also set a default to redirect to.
    **/

    router.init('/');
};

module.exports = routes;

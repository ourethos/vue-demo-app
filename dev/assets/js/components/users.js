module.exports = {
    template: require('../views/users-view.html'),

    props: ['currentId'],

    data: function() {
        return {
            users: [
                {id: 3, title: "Message One", content: "Content One" },
                {id: 4, title: "Message Two", content: "Content Two" }
            ], 
            selectUser: null
        };
    },

    /**
        This runs eveytime the component is created and we 
        can then access parent properties to do some set up.
    **/

    created: function()
    {
        //this.getMessageById(this.currentId)
    },

    computed: 
    {
        /**
            By using a computed we can render a message whenver
            the currentId property changes, this means if can
            be changed even when click the forward or back button
            and not just when the compent is first created

            @return {mixed}
        **/
        selectedUserComputed: function()
        {
            user = this.getUserById(this.currentId);

            this.selectedUser = user;
            return user;
        }
    },

    methods:
    {
        setUser: function(user)
        {
            this.selectUser = user;
        },

        getUserById: function(id)
        {
            user = null;
            if (id)
            {
                for (var i = this.users.length - 1; i >= 0; i--) {
                    if (this.users[i].id === parseInt(id)) {
                        user = this.users[i];
                    }
                }
            }

            return user;
        }
    }
};

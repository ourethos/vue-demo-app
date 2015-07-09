module.exports = {
    template: require('../views/users-view.html'),

    props: ['currentId'],

    data: function() {
        return {
            users: [
                {id: 1, firstName: "Jack", lastName: "Hannigan Popp", profileImage: "http://placepu.gs/200/200", about: "Orbiting the planet at maximum velocity. The moon with the Rebel base will be in range in thirty minutes. This will be a day long remembered. It has seen the end of Kenobi and it will soon see the end of the Rebellion." },
                {id: 2, firstName: "Winston", lastName: "Jones", profileImage: "http://placepu.gs/201/201", about: "All right, kid. But you'd better be right about this. All right. What's your plan? Uh...Threepio, hand me those binders there will you? Okay. Now, I'm going to put these on you. Okay. Han, you put these on. Don't worry, Chewie. I think I know what he has in mind. Master Luke, sir! Pardon me for asking...but, ah...what should Artoo and I do if we're discovered here? Lock the door! And hope they don't have blasters. That isn't very reassuring" },
                {id: 3, firstName: "Herbert", lastName: "Hughes", profileImage: "http://placepu.gs/202/202", about: "Stand by, Chewie, here we go. Cut in the sublight engines. What the...? Aw, we've come out of hyperspace into a meteor shower. Some kind of asteroid collision. It's not on any of the charts. What's going on? Our position is correct, except...no, Alderaan! What do you mean? Where is it? Thats what I'm trying to tell you, kid. It ain't there. It's been totally blown away. What? How? Destroyed...by the Empire!" },
            ], 
            selectedUser: null
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
            this.selectedUser = this.getUserById(this.currentId);
            return this.selectedUser;
        }
    },

    methods:
    {
        setUser: function(user)
        {
            this.selectedUser = user;
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
        },

        userFullName: function(user)
        {
            return user.firstName +" "+ user.lastName;
        }
    }
};

module.exports = {
    template: require('../views/messages-view.html'),

    props: ['currentId'],

    data: function() {
        return {
            messages: [
                {id: 3, title: "Message One", content: "Content One", read: false },
                {id: 4, title: "Message Two", content: "Content Two", read: false }
            ], 
            selectedMessage: null
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
            and not just when the compent is first created.

            This will also be run when the selectedMessage is 
            changed, so we can keep the selected message up to date
            when the parent current id is changed or when the selected
            message is changed.

            @return {mixed}
        **/
        selectedMessageComputed: function()
        {
            this.selectedMessage = this.getMessageById(this.currentId);

            if (this.selectedMessage) 
            {
                this.selectedMessage = message;
                this.selectedMessage.read = true;
            }
            
            return this.selectedMessage;
        }
    },

    methods:
    {
        setMessage: function(message)
        {
            this.selectedMessage = message;
        },

        getMessageById: function(id)
        {
            message = null;
            if (id)
            {
                for (var i = this.messages.length - 1; i >= 0; i--) {
                    if (this.messages[i].id === parseInt(id)) {
                        message = this.messages[i];
                    }
                }
            }

            return message;
        }
    }
};

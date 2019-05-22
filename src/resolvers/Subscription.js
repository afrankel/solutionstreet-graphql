const {forwardTo} = require('prisma-binding')

const Subscription = {
    customer: 
    {
        subscribe: forwardTo('db')
    },
    account:     
    {
        subscribe: forwardTo('db')
    },
    transaction:     
    {
        subscribe: forwardTo('db')
    },

}

export { Subscription as default }
const {forwardTo} = require('prisma-binding')

const Mutation = {
    createCustomer: forwardTo('db'),
    createAccount: forwardTo('db'),
    createTransaction: forwardTo('db'),
    updateCustomer: forwardTo('db'),
    updateAccount: forwardTo('db'),
    updateTransaction: forwardTo('db')
}

export { Mutation as default }
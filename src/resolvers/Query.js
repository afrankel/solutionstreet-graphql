const {forwardTo} = require('prisma-binding')

const Query = {
    customers: forwardTo('db'),
    accounts: forwardTo('db'),
    transactions: forwardTo('db'),
    customer: forwardTo('db'),
    account: forwardTo('db'),
    transaction: forwardTo('db')
}

export { Query as default }
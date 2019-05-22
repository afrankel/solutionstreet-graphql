import '@babel/polyfill/noConflict'
import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import Customer from './resolvers/Customer'
import Account from './resolvers/Account'
import Transaction from './resolvers/Transaction'
import db from './prisma'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Subscription,
        Customer,
        Account,
        Transaction
    },
    context: {
        db
    }
})

server.start({ port: process.env.PORT || 4000 }, () => {
    console.log('The server is up!')
})
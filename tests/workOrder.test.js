const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const workOrder = require('../models/workorder')
const WorkOrder = mongoose.model('WorkOrder')

// process.env.TEST_SUITE = 'workOrder-test'

// describe('Work Order', () => {
//     beforeEach(() => {
//         WorkOrder.ensureIndexes({ loc: '2d' }) // no idea what this is?
//     })
// })

describe('insert', () => {
    let connection
    let db

    // beforeAll(async () => {
    //     connection = await MongoClient.connect(
    //         process.env.MONGODB_URI || 'mongodb://localhost/WorkOrderWizard',
    //         {
    //             useNewUrlParser: true,
    //         }
    //     )
    //     db = await connection.db(global.__MONGO_DB_NAME__)
    //     function clearDB() {
    //         for (var i in db.collections) {
    //             db.collections[i].remove(function() {})
    //         }
    //     }
    //     clearDB()
    // })

    // afterAll(async () => {
    //     await connection.close()
    //     await db.close()
    // })
    // it('should insert a work order into collection', async () => {
    //     const workorders = db.collection('WorkOrders')
    //     const mockWO = {
    //         _id: 'test-id',
    //         createdOn: '08-04-2019',
    //         dateDue: '08-26-19',
    //         hoursLogged: 23,
    //         customerId: 'mock-ID',
    //     }
    //     await workorders.insertOne(mockWO)

    //     const insertedWO = await workorders.findOne({ _id: 'test-id' })
    //     expect(insertedWO).toEqual(mockWO)
    // })
})

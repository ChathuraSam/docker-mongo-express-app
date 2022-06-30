// This app will diaplay the Databases inside mongo-db

const { MongoClient } = require('mongodb')

async function main() {
    const url = "mongodb://admin:password@localhost:27017/"
    const client = new MongoClient(url)
    try{
        await client.connect()
        await listDatabases(client)
    }catch(e) {
        console.error(e)
    }finally {
        await client.close()
    }
}

main().catch(console.error)

async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();
    console.log("******* Databases *******")
    databaseList.databases.forEach(db => {
        console.log(`${db.name}`)
    });
}


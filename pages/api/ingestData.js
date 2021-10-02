import { connectToElasticsearch } from "../../lib/elasticsearch"
import { createReadStream } from 'fs'

export default async function ingestData(req, res) {
  
    const split = require('split2')
    const client = await connectToElasticsearch()
    await client.helpers.bulk({
        datasource: createReadStream('./movies.json').pipe(split()),
        onDocument (doc) {
          return {
            index: { _index: 'my-index' }
          }
        },
        onDrop (doc) {
            console.log(doc)
          }
      })
    
    res.redirect('/ingest')
    
  }
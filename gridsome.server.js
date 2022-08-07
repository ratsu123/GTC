// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {
    const Acordions = require('./src/data/Acordions.json');
    const collection = actions.addCollection({
      typeName: 'Acordion',
    })

    for (const acordion of Acordions) {
      collection.addNode({
        head: acordion.head,
        body: acordion.body,
        id: acordion.id,
      })
    }
  })
  api.loadSource(async actions => {
    const Products = require('./src/data/Products.json');
    const collection = actions.addCollection({
      typeName: 'Products',
    })

    for (const p of Products) {
      collection.addNode({
       id: p.id,
      //  image: require.resolve(p.img),
       title: p.title,
       description: p.description,
      })
    }
  })
  api.loadSource(async actions => {
    const Programs = require('./src/data/Programs.json');
    const collection = actions.addCollection({
      typeName: 'Programs',
    })

    for (const p of Programs) {
      collection.addNode({
       id: p.id,
      //  image: require.resolve(p.img),
       title: p.title,
       description: p.desc,
      })
    }
  })
}


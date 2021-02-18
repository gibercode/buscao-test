const post = `
  post(id: "cG9zdDoyNjM=") {
    id
    uri
    title
    commerce {
      website
      image
      description
      outstanding
      subsidiary {
        address
        deliveryPickup
        name
        phoneNumber
        schedule {
          friday {
            abierto
            apertura
            cierre
          }
          monday {
            abierto
            apertura
            cierre
          }
          saturday {
            abierto
            apertura
            cierre
          }
          sunday {
            abierto
            apertura
            cierre
          }
          thursday {
            abierto
            apertura
            cierre
          }
          tuesday {
            abierto
            apertura
            cierre
          }
          wednesday {
            abierto
            apertura
            cierre
          }
        }
      }
    }
    currencies {
      nodes {
        id
        name
      }
    }
  }
`

export default post

const posts = `
  posts {
    nodes {
      id
      title
      commerce {
        country {
          id
          name
          slug
        }
        outstanding
        paymentmethods
        paymenttypes
        subsidiary {
          address
          deliveryPickup
          name
          map {
            latitude
            longitude
            streetAddress
          }
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
          state {
            id
            name
            slug
          }
        }
        website
      }
    }
  }
`

export default posts

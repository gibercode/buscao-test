const posts = `
  posts {
    nodes {
      id
      title
      categories {
        nodes {
          id
          name
          slug
        }
      }
      commerce {
        country {
          id
          name
          slug
        }
        image
        description
        outstanding
        paymentmethods
        paymenttypes
        subsidiary {
          phoneNumber
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

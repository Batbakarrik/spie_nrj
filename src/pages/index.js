import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {
  const product = data.site.siteMetadata.products
  // const group = data.site.siteMetadata.products.groups
  console.log(product)
  return (
  <Layout>
    <Seo title="Spie_NRJ" />
    <main className='grid-container'>
      {product.map(prod => (
        <article key={prod.id} className='grid-item'>
          <h2>{prod.id}</h2>
            <main className='grid-container'>
              {prod.groups.map(group => (
                <article key={group.id} className='grid-item'> 
                  <h4>{group.id}</h4>
                    <main className='grid-container'>
                      {group.items.map(item => (
                        <article key={item.id} className='grid-item'>
                          <h4>{item.id}</h4>
                            <main className='grid-container'>
                              {item.devices.map(device => (
                                  <h5 key={device.id}>{device.id} <a href={device.url}>Télécharger</a> </h5>
                              ))}
                            </main>
                        </article>
                        ))}
                    </main>
                </article>
                ))}
            </main>
        </article>
      ))}
    </main>
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ProductsQuery {
    site {
      siteMetadata {
        products {
          groups {
            id
            items {
              id
              devices {
                id
                pic
                url
              }
            }
          }
          id
        }
      }
    }
  }
`
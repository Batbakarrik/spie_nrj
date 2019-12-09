import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {
  const product = data.site.siteMetadata.products
  console.log(product)
  return (
  <Layout>
    <Seo title="Spie_NRJ" />
    <main className='grid-container'>
      {product.map(prod => (
        <article key={prod.id} className='grid-item'>
          <h2>{prod.id}</h2>
            <items className='grid-item'>
              {product.map(item => (
                <item className='grid-item'>
                  <h4> {item.group}</h4>
                </item>
              ))}
            </items>
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
              url
              id
              pic
            }
          }
          id
        }
      }
    }
  }
`
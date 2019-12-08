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
      {product.map(product => (
        <article key={product.id} className='grid-item'>
          <h2>{product.id}</h2>
            <item className='grid-item'>
            <h3>{product.products[groups]}</h3>
            </item>
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
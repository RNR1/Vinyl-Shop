import React from 'react'
import classes from './verticalTabs.module.css'
import VerticalTab from './verticalTab/verticalTab'
import { useStaticQuery, graphql } from 'gatsby'

export default function VerticalTabs() {
  const {
    site: {
      siteMetadata: { verticalTabs },
    },
  } = useStaticQuery(query)
  return (
    <div className={classes.VerticalTabs}>
      {verticalTabs.map(tab => (
        <VerticalTab
          key={tab.label}
          label={tab.label}
          color={tab.color}
          caret={tab.label !== 'dj'}
        />
      ))}
    </div>
  )
}

const query = graphql`
  query TabsQuery {
    site {
      siteMetadata {
        verticalTabs {
          color
          label
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import NavGroup from '../navGroup/navGroup'

import SecureIcon from '../secureIcon/secureIcon'
import { info, departments, myJuno } from '../../data/footerData'
import classes from './footer.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PaymentMethods from '../paymentMethods/paymentMethods'
import SocialBar from '../socialBar/socialBar'

export default function Footer({ siteTitle }) {
  return (
    <footer className={classes.Footer}>
      <div className={classes.ItemGroups}>
        <NavGroup
          title="Help & Information"
          items={info}
          direction="column"
          className={classes.ItemGroup}
        />
        <NavGroup
          title="Departments"
          items={departments}
          direction="column"
          className={classes.ItemGroup}
        />
        <NavGroup
          title="My Juno"
          items={myJuno}
          direction="column"
          className={classes.ItemGroup}
        />
        <div className={classes.ItemGroup}>
          <h5 className={(classes.SecureStatement, classes.FooterStatement)}>
            <SecureIcon /> 100% Secure Shopping
          </h5>
          <PaymentMethods />
          <h5 className={classes.FooterStatement}>DJ Mag Best Of British</h5>
          <p className={classes.SmallStatement}>
            Best Music Store: 5 time winners
          </p>
          <StaticQuery
            query={query}
            render={data => (
              <Img
                fixed={data.afem.childImageSharp.fixed}
                alt="Association for Electronic Music"
              />
            )}
          />
          <p className={classes.SmallStatement}>© 1996 - 2020 Juno Records</p>
          <p className={classes.License}>
            <span>
              All image and audio content is used by permission of the copyright
              holders or their agents, and/or according to fair dealing as per
              the UK Copyright, Designs and Patents Act 1988.
            </span>
          </p>
        </div>
      </div>
      <SocialBar siteTitle={siteTitle} />
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

const query = graphql`
  query afemLogo {
    site {
      siteMetadata {
        title
      }
    }
    afem: file(relativePath: { eq: "afem.png" }) {
      childImageSharp {
        fixed(height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import IconsContainer from '../IconsContainer/IconsContainer'
import SocialBar from '../socialBar/socialBar'
import SecureIcon from '../secureIcon/secureIcon'
import paymentIcons from '../paymentIcons'
import NavGroup from '../navGroup/navGroup'
import classes from './footer.module.css'

export default function Footer() {
  const {
    site: {
      siteMetadata: {
        title,
        footerData: { info, departments, myJuno, socialLinks },
      },
    },
    afem,
  } = useStaticQuery(query)

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
          <IconsContainer icons={paymentIcons} />
          <h5 className={classes.FooterStatement}>DJ Mag Best Of British</h5>
          <p className={classes.SmallStatement}>
            Best Music Store: 5 time winners
          </p>
          <Img
            fixed={afem.childImageSharp.fixed}
            alt="Association for Electronic Music"
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
      <SocialBar siteTitle={title} socialItems={socialLinks} />
    </footer>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        title
        footerData {
          departments {
            label
            to
          }
          info {
            label
            to
          }
          myJuno {
            label
            to
          }
          socialLinks {
            icon
            label
            to
          }
        }
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

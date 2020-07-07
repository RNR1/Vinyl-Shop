import React from 'react'
import PropTypes from 'prop-types'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './socialBar.module.css'
import NavGroup from '@bit/ronbraha.codebyron.nav-group'
import Icon from './icon'
import { socialLinks } from './socialLinks'

export default function SocialBar({
  siteTitle,
  socialItems = socialLinks,
  feedbackUrl = '/',
}) {
  return (
    <div className={classes.SocialBar}>
      <NavGroup
        items={socialItems}
        Item={Icon}
        className={classes.SocialIcon}
        style={{ margin: 20 }}
      />
      <span className={classes.FeedbackText}>
        <FontAwesomeIcon
          icon={faEnvelope}
          size="lg"
          style={{ marginRight: 5 }}
        />
        We&apos;d like to know what you think of{' '}
        {siteTitle ? `${siteTitle}'s` : 'our'} website. Please send us your
        comments and suggestions via our{' '}
        <a href={feedbackUrl} className={classes.FeedbackText}>
          feedback page.
        </a>
      </span>
    </div>
  )
}

SocialBar.propTypes = {
  siteTitle: PropTypes.string,
  socialItems: PropTypes.array,
  feedbackUrl: PropTypes.string,
}

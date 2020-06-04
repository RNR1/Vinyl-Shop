import React from "react"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import NavGroup from "../navGroup/navGroup"
import Icon from "../icon"
import { info, departments, myJuno, socialLinks } from "../../data/footerData"
import classes from "./footer.module.css"

export default function Footer() {
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
        <div></div>
      </div>
      <div className={classes.SocialBar}>
        <NavGroup
          items={socialLinks}
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
          We'd like to know what you think of Juno's website. Please send us
          your comments and suggestions via our feedback page.
        </span>
      </div>
    </footer>
  )
}

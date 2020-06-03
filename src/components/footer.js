import React from "react"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import NavGroup from "./navGroup"
import Icon from "./icon"
import { info, departments, myJuno, socialLinks } from "../data/footerData"

export default function Footer() {
  return (
    <footer style={styles.Footer}>
      <div style={styles.ItemGroups}>
        <NavGroup
          title="Help & Information"
          items={info}
          direction="column"
          style={styles.ItemGroup}
        />
        <NavGroup
          title="Departments"
          items={departments}
          direction="column"
          style={styles.ItemGroup}
        />
        <NavGroup
          title="My Juno"
          items={myJuno}
          direction="column"
          style={styles.ItemGroup}
        />
        <div></div>
      </div>
      <div style={styles.SocialBar}>
        <NavGroup items={socialLinks} Item={Icon} style={styles.SocialIcon} />
        <span style={styles.FeedbackText}>
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

const styles = {
  Footer: {
    background: `#2c495b`,
    flexGrow: 0,
  },
  ItemGroups: {
    display: "flex",
    flexDirection: "row",
    padding: 40,
    justifyContent: "space-evenly",
  },
  ItemGroup: {
    textDecoration: "none",
    color: "#fff",
    fontSize: 13,
  },
  SocialBar: {
    backgroundColor: "#1E3441",
    display: "flex",
    height: 70,
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    verticalAlign: "center",
  },
  SocialIcon: {
    fontSize: 16,
    margin: 20,
  },
  FeedbackText: { color: "#fff", fontSize: 14, fontWeight: 600 },
}

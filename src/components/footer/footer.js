import React from "react"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import NavGroup from "../navGroup/navGroup"
import Icon from "../icon"
import SecureIcon from "../secureIcon/secureIcon"
import { info, departments, myJuno, socialLinks } from "../../data/footerData"
import Visa from "../../data/paymentIcons/visa"
import Mastercard from "../../data/paymentIcons/mastercard"
import Maestro from "../../data/paymentIcons/maestro"
import Paypal from "../../data/paymentIcons/paypal"
import classes from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.ItemGroups}>
        <div>
          <NavGroup
            title="Help & Information"
            items={info}
            direction="column"
            className={classes.ItemGroup}
          />
        </div>
        <div>
          <NavGroup
            title="Departments"
            items={departments}
            direction="column"
            className={classes.ItemGroup}
          />
        </div>
        <div>
          <NavGroup
            title="My Juno"
            items={myJuno}
            direction="column"
            className={classes.ItemGroup}
          />
        </div>
        <div>
          <div>
            <h5 className={(classes.SecureStatement, classes.FooterStatement)}>
              <SecureIcon /> 100% Secure Shopping
            </h5>
            <div className={classes.PaymentMethods}>
              <Visa />
              <Mastercard />
              <Maestro />
              <Paypal />
            </div>
            <h5 className={classes.FooterStatement}>DJ Mag Best Of British</h5>
            <p className={classes.SmallStatement}>
              Best Music Store: 5 time winners
            </p>
            <div>AFEM LOGO</div>
            <p className={classes.SmallStatement}>© 1996 - 2020 Juno Records</p>
            <p className={classes.License}>
              All image and audio content is used by permission of the copyright
              holders or their agents, and/or according to fair dealing as per
              the UK Copyright, Designs and Patents Act 1988.
            </p>
          </div>
        </div>
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

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header/header'
import Footer from './footer/footer'
import './layout.css'
import VerticalTabs from './verticalTabs/verticalTabs'
import '../utils/faLibrary'

export default function Layout({ children }) {
  return (
    <div style={styles.Container}>
      <VerticalTabs />
      <Header />
      <div style={styles.Main}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

const styles = {
  Container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  Main: {
    margin: '0 auto',
    maxWidth: 1320,
    padding: '0 1.0875rem 1.45rem',
    flex: 1,
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

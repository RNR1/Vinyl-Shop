import React, { useState } from "react"
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Caret = () => (
  <FontAwesomeIcon icon={faCaretDown} size="sm" style={styles.Caret} />
)

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div style={styles.Container}>
      <div style={styles.SearchType}>
        All <Caret />
      </div>
      <input
        type="text"
        placeholder="Search Vinyl-shop..."
        aria-label="search"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        style={styles.Input}
      />
      <div style={styles.Button}>
        <FontAwesomeIcon icon={faSearch} style={styles.SearchIcon} />
      </div>
    </div>
  )
}

const styles = {
  Container: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  SearchType: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 33,
    backgroundColor: "#D6D6CC",
    color: "#000",
  },
  Caret: { fontSize: 12, position: "relative", top: -4, marginLeft: 4 },
  Input: { width: 400, height: 35, padding: 10, fontSize: 15 },
  Button: {
    backgroundColor: "#3B81AA",
    width: 40,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SearchIcon: { fontSize: 14, color: "#fff" },
}

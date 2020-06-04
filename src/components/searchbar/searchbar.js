import React, { useState } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Dropdown from "../dropdown/dropdown"
import classes from "./searchbar.module.css"

const searchTypes = [
  { id: "all", value: "all", label: "All" },
  { id: "artists", value: "artists", label: "Artists" },
  { id: "releaseTitles", value: "releaseTitles", label: "Release Titles" },
  { id: "labels", value: "labels", label: "Labels" },
  { id: "equipment", value: "equipment", label: "Equipment" },
]

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className={classes.Container}>
      <Dropdown items={searchTypes} />
      <input
        type="text"
        placeholder="Search Vinyl-shop..."
        aria-label="search"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        className={classes.Input}
      />
      <div className={classes.Button}>
        <FontAwesomeIcon icon={faSearch} style={styles.SearchIcon} />
      </div>
    </div>
  )
}

const styles = {
  SearchIcon: { fontSize: 12, color: "#fff" },
}

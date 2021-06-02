import React, { useEffect, useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"
import { noPatsList, patsList } from "./config"
import { useLocation } from "@reach/router"
import { hashToId } from "../utils"

const CalculatorSidebar = ({ search, activeItem, handleLinkClick }) => {
  const { hash } = useLocation()

  const tabContentList = search === "?pets-allowed" ? patsList : noPatsList

  return (
    <aside className="calculator-sidebar">
      <div className="sidebar-tab">
        <ul className="sidebar-tab-header">
          <li>
            <AnchorLink
              to={"?no-pets-allowed"}
              title="No Pets Allowed"
              className={search === "?no-pets-allowed" ? "active" : ""}
            />
          </li>

          <li>
            <AnchorLink
              to={"?pets-allowed"}
              title="Pets Allowed"
              className={search === "?pets-allowed" ? "active" : ""}
            />
          </li>
        </ul>
        <ul className="sidebar-tab-content">
          {tabContentList.map(({ to, title }) => {
            return (
              <li
                key={to}
                onClick={() => handleLinkClick(title)}
                to={`${search}`}
                title={title}
                className={
                  activeItem === hashToId(to)
                    ? "active"
                    : !activeItem && hash === to
                    ? "active"
                    : ""
                }
              >
                {title}
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default CalculatorSidebar

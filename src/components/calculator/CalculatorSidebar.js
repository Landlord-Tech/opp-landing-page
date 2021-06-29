import React from "react"
import { Link } from "gatsby"
import { noPatsList, patsList } from "./config"
import { useLocation } from "@reach/router"
import { hashToId } from "../utils"

const CalculatorSidebar = ({ search, activeItem, handleLinkClick, active, prodSidebar }) => {
  const { hash } = useLocation()

  // const tabContentList = search === "?pets-allowed" ? patsList : noPatsList
  const tabContentList = active ? patsList : noPatsList

  return (
    <aside className="calculator-sidebar">
      <div className="sidebar-tab">
        <ul className="sidebar-tab-header">
          <li>
            {/*<AnchorLink
              to={"?no-pets-allowed"}
              title="No Pets Allowed"
              className={search === "?no-pets-allowed" || search === "" ? "active" : ""}
            />*/}
            <Link
              to={`${prodSidebar ? '/calculator/' : '/calculator-no-pets-allowed/'}`}
              className={!active ? "active" : ""}
            >
              No Pets Allowed
            </Link>
          </li>

          <li>
            {/*<AnchorLink
              to={"?pets-allowed"}
              title="Pets Allowed"
              className={search === "?pets-allowed" ? "active" : ""}
            />*/}
            <Link
              to={`${prodSidebar ? '/calculator-with-pets/' : '/calculator-pets-allowed/'}`}
              className={active ? "active" : ""}
            >
              Pets Allowed
            </Link>
          </li>
        </ul>
        <ul className="sidebar-tab-content">
          {tabContentList.map(({ to, title }) => {
            return (
              <li
                key={to}
                onClick={() => handleLinkClick(title)}
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

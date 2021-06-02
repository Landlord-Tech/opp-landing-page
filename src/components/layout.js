import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "../assets/styles/main.scss"
import { useLocation } from "@reach/router"

const Layout = ({ children, className }) => {

  const { pathname } = useLocation()

  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      {
        !pathname.includes('/calculator') && <Footer />
      }

    </>
  )
}

export default Layout

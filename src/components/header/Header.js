import React from "react"

class Header extends React.Component {
  render() {
    return (
      <>
        {/* Intro */}
        <div id="intro">
          <h1>I'm Iskander, make yourself at home</h1>
          <p>Im a web developer ready to make your dream website.</p>
          <ul className="actions">
            <li>
              <a
                href="#header"
                className="button icon solid solo fa-arrow-down scrolly"
              >
                Continue
              </a>
            </li>
          </ul>
        </div>
        {/* Header */}
        <header id="header">
          <h3 class="logo">Twin Unison</h3>
        </header>
        {/* Nav */}
        <nav id="nav">
          <ul className="links">
            <li className="active">
              <a href="index.html">My projects</a>
            </li>
            {/* <li>
                  <a href="generic.html">Generic Page</a>
                </li>
                <li>
                  <a href="elements.html">Elements Reference</a>
                </li> */}
          </ul>
          <ul className="icons">
            {/* <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li> */}
            <li>
              <a
                href="https://www.instagram.com/twinunison/?hl=fr"
                className="icon brands fa-instagram"
                target="_blank"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SkaGitWork"
                className="icon brands fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Header

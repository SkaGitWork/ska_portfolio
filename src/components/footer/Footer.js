import React from "react"

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer id="footer">
        <section className="split contact">
          <section className="alt"></section>
          <section>
            <h3>Email</h3>
            <p>
              <a href="mailto:denguezli.iskander@gmail.com">
                denguezli.iskander@gmail.com
              </a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
              <li>
                <a
                  href="https://www.instagram.com/twinunison/?hl=fr"
                  className="icon brands alt fa-instagram"
                  target="_blank"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SkaGitWork"
                  className="icon brands alt fa-github"
                  target="_blank"
                >
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </footer>
      {/* Copyright */}
      <div id="copyright">
        <ul>
          <li>©2022 Twin Unison</li>
        </ul>
      </div>
    </>
  )
}

export default Footer

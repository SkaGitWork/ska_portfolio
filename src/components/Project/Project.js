import React from "react"

class Header extends React.Component {
  render() {
    return (
      <article>
        <header>
          <h2>
            <a href={this.props.link}>
              {this.props.title}
              <br />
            </a>
          </h2>
        </header>
        <a href={this.props.link} className="image fit">
          <img src={"images/" + this.props.image} alt="" />
        </a>
        <p>{this.props.text}</p>
        <ul className="actions special">
          <li>
            <a href={this.props.link} className="button">
              GitHub Link
            </a>
          </li>
        </ul>
      </article>
    )
  }
}

export default Header

import * as React from 'react'
import './styles.scss'

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <a href="https://www.idearobin.com/">IdeaRobin</a>
            &nbsp;<span>&copy;</span>&nbsp;{new Date().getFullYear()}.
          </div>
        </div>
        <div className="level-right is-pulled-right">
          <div className="level-item">
            <a href="https://www.idearobin.com/start">Contact Us</a>
          </div>
          <div className="level-item">
            <span className="is-text-black"> | </span>
          </div>
          <div className="level-item">
            <a href="https://www.idearobin.com/careers">Careers</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

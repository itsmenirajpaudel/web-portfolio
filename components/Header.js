import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { theme } from '../config'
// import authService from '../services/auth'
import { Col, Icon, Row } from 'antd'
import Link from 'next/link'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSignedIn: false,
      showMenu: false
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='header'>
        <div className='container'>
          <Row>
            <Col xs={12} lg={2}>
              <Link href='/'>
                <a>
                  <div>
                    <img src='/static/img/avatar.png' style={{ width: 78, zIndex: 10 }} />
                  </div>
                </a>
              </Link>
            </Col>

            <Col xs={12} lg={22}>
              <div className='menu'>
                <Link href='/'>
                  <a className='desktopMenu'>About</a> 
                </Link>

                <Link href='/'>
                  <a className='desktopMenu'>Works</a>
                </Link>

                <Link href='/'>
                  <a className='desktopMenu'>Contact</a>
                </Link>
              </div>

              <div className='hamburgerIcon' onClick={() => this.setState({ showMenu: true })}>☰</div>
            </Col>
          </Row>

          <div className='mobileMenuContainer'
            style={{ display: this.state.showMenu ? '' : 'none' }}
            onClick={() => this.setState({ showMenu: !this.state.showMenu })}
          >
            <div className='mobileMenu'>
              <Link href='/'>
                <a><div className='mobileMenuLink'>About</div></a>
              </Link>

              <Link href='/'>
                <a><div className='mobileMenuLink'>Works</div></a>
              </Link>

              <Link href='/'>
                <a><div className='mobileMenuLink'>Contact</div></a>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .hamburgerIcon {
            color: ${theme.color.primary};
            font-size: 24pt;
            cursor: pointer;
            display: none;
            float: right;
          }
          .desktopMenu {
            letter-spacing: 0.5pt;
            margin-right: 25px;
            font-size: 12.5pt;
            color: ${theme.color.primary};
            font-weight: bold;
          }
          .loginMenu {
            border: 1px solid #fff;
            border-radius: 5px;
            font-size: 9pt;
            padding: 1px 10px;
          }
          .languageButton {
            background-color: ${theme.color.primary};
            color: white;
            width: 40px;
            height: 20px;
            border-radius: 5px;
            font-size: 9.5pt;
            text-align: center;
            margin-top: 1px;
          }
          .mobileLanguageButton {
            margin-left: 10px;
          }
          .menu {
            display: flex;
            flex-direction: row;
            float: right;
            margin-top: 25px;
          }
          .rightSide {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            color: #222;
            cursor: pointer;
            white-space: nowrap;
          }
          .mobileMenuContainer {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 100;
            top: 0px;
            left: 0px;
            background-color: rgba(0,0,0,0.7);
          }
          .mobileMenu {
            width: 88%;
            min-height: 300px;
            position: absolute;
            z-index: 101;
            top: 10%;
            left: 6%;
            border-radius: 10px;
            background-color: white;
            padding: 15px;
          }
          .mobileMenuLink {
            padding: 10px 15px;
            cursor: pointer;
            margin: 5px 0;
            font-weight: bold;
            color: ${theme.color.primary}
          }
          .mobileMenuLink:hover {
            background-color: #f4f4f4;
          }
          .mobileMenuLink a {
            color: ${theme.color.secondary}
          }
          .hamburgerIcon:hover {
            color: ${theme.color.primary};
          }
          .header {
            background-color: rgba(255,255,255, 1);
            height: 100px;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
          }
          .logo {
            color: white;
            font-size: 24pt;
            font-weight: bold;
            margin-left: 10px;
            letter-spacing: 2pt;
            cursor: pointer;
            white-space: nowrap;
           }
          .logo:hover {
            opacity: 0.6;
          }
          a {
            text-decoration: none;
            color: white;
            font-size: 11pt;
          }
          a:hover {
            opacity: 0.6;
          }
          button {
            color: white;
            background-color: ${theme.color.primary};
            border: 0px solid transparent;
            font-size: 11.5pt;
            letter-spacing: 0.5pt;
            padding: 10px 18px;
            cursor: pointer;
          }
          button:hover {
            opacity: 0.8;
          }
          @media (max-width: 720px) {
            .menu {
              display: none;
            }
            .hamburgerIcon {
              display: block;
            }
          }
        `}</style>
      </div>
    )
  }

  // getMyAccountLink = () => {
  //   const { type = '' } = authService.getCurrentUser() || {}
  //   return `/${type.replace(' ', '')}`
  // }
}

export default withRouter(Header)

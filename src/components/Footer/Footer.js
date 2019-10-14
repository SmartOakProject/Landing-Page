import React from "react";
import styled from "styled-components";
import { FaApple, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';


const Container = styled.div`
  background-color: #ccc;
  height: 10rem;
  width: 100vw;
  color: var(--color-white);
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: ${props => props.justifyEnd ? 'flex-end' : 'flex-start'};
  width: 100%;
  padding: 0 1.5rem;

`

const Col = styled.div`
  flex: 1 1 50%;
  width: 50%;
`


const ListLink = styled.a`
  color: var(--color-black);
  text-decoration: none;
  padding: 0 0.5rem;
  &:first-of-type {
    padding-left: 0;
  }
  &:hover {
    color: var(--color-white);
  }
`

const ListItem = styled.li`
  font-size: 1.5rem;
  padding: 0 1rem;
  &:first-of-type {
    padding-left: 0;
  }
`

const ListItemWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
`

const DownloadFromMarketplace = styled.div`
  margin: 0 1rem;
  align-items: center;
  justify-content: flex-start;
  background-color: grey;
`

const menuItems = [
  {
    name: 'Sklep',
    path: ''
  },
  {
    name: 'Pobierz',
    path: '',
  },
  {
    name: 'Wydarzenia',
    path: '',
  },
  {
    name: 'Kontakt',
    path: ''
  },
  {
    name: 'O projekcie',
    path: '',
  },
];

const downloadFromMarketplaceContent = [
  {
    downloadText: 'Pobierz',
    marketName: 'App Store',
  },
  {
    downloadText: 'Pobierz',
    marketName: 'Google Play',
  },
];

function FooterTopLeftMenu(props) {
  const menuList = props.menuItems.map((menuItem, index) => {
    return (
      <ListItem key={index}>
        <ListLink href={menuItem.path} >
          {menuItem.name}
        </ListLink>
      </ListItem>
    )
  });
  return (
  <ListItemWrapper>
    {menuList}
  </ListItemWrapper>
  )
}

function DownloadFromMarketplaceWrapper(props) {
  const singleDownload = props.downloadFromMarketplaceContent.map((singleDownload, index) => {
    return (
      <DownloadFromMarketplace key={index}>
        {index === 0 ? <FaApple /> : <FaGoogle />}
        {singleDownload.downloadText}
        {singleDownload.marketName}
      </DownloadFromMarketplace>
    )
  });
  return singleDownload;
}

// function SocialmediaLinks(props) {
//   const menuItems = props.socialmediaMenu.map((menuItem, index) => {
//     return (
//       <li key={index}>{menuItem.icon}</li>
//     )
//   })
//   return (
//     <ul>{menuItems}</ul>
//     );
// }

class SocialmediaLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialmediaMenu: [
        {
          path: '',
          icon: FaInstagram,
        },
        {
          path: '',
          icon: FaTwitter,
        }
      ]
      
    }
  }
  render() {
    const menuItems = this.state.socialmediaMenu.map((menuItem, index) => {
      return<li>{menuItem.icon}</li>
    })
    return (
      <ul>
        {menuItems}
      </ul>
    );
  }
}

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <FooterTopLeftMenu menuItems={menuItems} />
        </Col>
        <Col>
        <Row justifyEnd>
          <DownloadFromMarketplaceWrapper downloadFromMarketplaceContent={downloadFromMarketplaceContent} />
        </Row>
        </Col>
        <Col>
          <SocialmediaLinks />
        </Col>
      </Row>
    </Container>
  )
}
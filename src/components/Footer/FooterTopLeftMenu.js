export function FooterTopLeftMenu(props) {
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
  <ListItemWrapper className="mainFooterMenu">
    {menuList}
  </ListItemWrapper>
  )
}

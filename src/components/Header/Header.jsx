import styled from 'styled-components'

function Header() {
  return (
    <HeaderWrapper>
      <Button>
        <MenuButtonIcon />
      </Button>
      <Button>
        <ProfileButtonIcon />
      </Button>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  justify-content: space-between;
  display: flex;
  height: 4rem;
  width: 100vw;
  background-color: var(--blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: var(--global-offset);
`
const Button = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`
const MenuButtonIcon = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/static/images/menu.svg',
})`
  width: 100%;
  height: 100%;
`
const ProfileButtonIcon = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/static/images/profile.svg',
})`
  width: 100%;
  height: 100%;
`

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

const MenuLink = ({ path, name, location }) => {
  return (
    <Link
      to={path}
      className={`
        vtex-account_menu-link f6 no-underline db hover-near-black pv5 mv3 pl5 bl bw2 nowrap ${location.pathname.indexOf(path) === -1 ? 'c-muted-1 b--transparent' : 'c-on-base b b--action-primary'}`}>
      {name}
    </Link>
  )
}

MenuLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default withRouter(MenuLink)

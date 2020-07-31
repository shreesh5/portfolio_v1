import React from 'react'
import { Link } from 'react-scroll'
import Typography from '@material-ui/core/Typography';


const NavBarLink = ({ name, to }) => {
    return (
            <Link 
              className="link"
              activeClass="linkactive"
              to={to}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              style={{
                  margin: 10
              }}
              >
                <Typography>
                    {name}
                </Typography>
              </Link>
    )
}

export default NavBarLink
import { Switch } from '@mui/material'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeSlice } from '../../Store/themeSlice'

function Nav() {
  const themeState = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <div>
        <div>favorites</div>
        <div>login</div>
        <Switch
          onChange={() => {
            dispatch(themeSlice.actions.toggleTheme());
          }}
          checked={themeState.theme === "dark"}
        />
    </div>
  )
}

export default Nav
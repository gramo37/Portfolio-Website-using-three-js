import React, {useState} from 'react'
import "./alert.css"
import ErrorIcon from '@mui/icons-material/Error';
import { red, green } from '@mui/material/colors'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MyAlert = (props) => {

  const [show, setShow] = useState(true);
  const {variant, message} = props

  return (
    <>
        <div className={`alert-border-${variant} alert-container`}>
          <div className="alert-icon">
            {variant === "danger" && <ErrorIcon sx={{fontSize: 40, color: red[600]}}/>}
            {variant === "success" && <CheckCircleIcon sx={{fontSize: 40, color: green[600]}}/>}
          </div>
          <div className={`alert-message alert-color-${variant}`}>{message}</div>
        </div>
    </>
  )
}

export default MyAlert
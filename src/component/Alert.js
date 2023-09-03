import React from 'react'

export default function Alert(props) {
  return (
    <>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {props.alert.type}: {props.alert.message}

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </>
  )
}

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import React from 'react'

const Cookies = () => {
    const MySwal = withReactContent(Swal)

    MySwal.fire('Bienvenido, acepta las cookies')

    
}

export default Cookies;

/*
const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
*/
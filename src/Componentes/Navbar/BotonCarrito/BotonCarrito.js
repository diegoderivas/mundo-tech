import React from 'react'

export const BotonCarrito = () => {
  return (
    <button type="button" className="btn btn-outline-primary position-relative align-self-center me-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <i className="bi bi-cart carrito fs-5"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
    </button>
  )
}

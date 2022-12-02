import React from 'react'

export const Buscador = () => {
  return (
    <form className="d-flex me-2" role="search">
      <input className="form-control me-2" type="search" placeholder="Buscar Productos..." aria-label="Search"/>
      <button className="btn btn-outline-primary" type="submit"><i class="bi bi-search fs-5"></i></button>
    </form>
  )
}

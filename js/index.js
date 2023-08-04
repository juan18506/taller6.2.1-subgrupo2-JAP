'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.link-button')

  btn.addEventListener('click', () => {
    const img = document.querySelector('.image')
    
    if (img.alt === 'Imagen de la NASA') {
      img.src = 'assets/servers.jpg'
      img.alt = 'Sala de servidores'
    } else {
      img.src = 'assets/nasa.jpg'
      img.alt = 'Imagen de la NASA'
    }
  })
})
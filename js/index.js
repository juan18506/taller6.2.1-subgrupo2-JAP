'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.link-button')

  btn.addEventListener('click', () => {
    const img = document.querySelector('.image')
    const para = document.querySelector('.p')
    
    if (img.alt === 'Imagen de la NASA') {
      para.innerHTML = "En esta imágen se puede observar un rack de servidores de una empresa."
      img.src = 'assets/servers.jpg'
      img.alt = 'Sala de servidores'
    } else {
      img.src = 'assets/nasa.jpg'
      img.alt = 'Imagen de la NASA'
      para.innerHTML = "En esta imágen se puede observar una fotografía del Planeta Tierra, tomada por la NASA desde la Estación Espacial Internacional."
    }
  })
})
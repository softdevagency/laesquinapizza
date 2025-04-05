
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todos los botones de testimonio
  const testimonialButtons = document.querySelectorAll('.review-btn');
  
  // Seleccionar todos los bloques de testimonio
  const testimonialBlocks = document.querySelectorAll('.review-block');
  
  // Ocultar todos los testimonios excepto el primero
  testimonialBlocks.forEach((block, index) => {
    if(index !== 0) {
      block.style.display = 'none';
    }
  });
  
  // Añadir evento click a cada botón
  testimonialButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Obtener el atributo data-atr que indica qué testimonio mostrar
      const testimonialId = this.getAttribute('data-atr');
      
      // Ocultar todos los testimonios
      testimonialBlocks.forEach(block => {
        block.style.display = 'none';
      });
      
      // Mostrar solo el testimonio seleccionado
      document.getElementById(testimonialId).style.display = 'block';
      
      // Opcional: añadir animación o efecto visual
      this.classList.add('active');
      setTimeout(() => {
        this.classList.remove('active');
      }, 300);
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    // Configurar todos los botones de compartir
    document.querySelectorAll('.share-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const options = this.nextElementSibling;
        options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
      });
    });
  
    // Configurar las opciones de compartir
    document.querySelectorAll('.share-option').forEach(option => {
      option.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const card = this.closest('.team_overlay_icon');
        const shareBtn = card.querySelector('.share-btn');
        const imageUrl = shareBtn.getAttribute('data-image');
        const description = shareBtn.getAttribute('data-description');
        const pageUrl = window.location.href;
        
        let shareUrl = '';
        
        if (this.classList.contains('whatsapp')) {
          shareUrl = `https://wa.me/?text=${encodeURIComponent(description + ' ' + pageUrl)}`;
        } else if (this.classList.contains('facebook')) {
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
        } else if (this.classList.contains('twitter')) {
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(description)}&url=${encodeURIComponent(pageUrl)}`;
        } else if (this.classList.contains('pinterest')) {
          shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(description)}`;
        } else if (this.classList.contains('copy-link')) {
          navigator.clipboard.writeText(pageUrl).then(() => {
            alert('Enlace copiado al portapapeles');
          });
          return;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=400');
      });
    });
  
    // Cerrar menú de compartir al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.team_overlay_icon')) {
        document.querySelectorAll('.share-options').forEach(menu => {
          menu.style.display = 'none';
        });
      }
    });
  });
  
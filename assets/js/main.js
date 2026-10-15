/**
 * Westchester ENT Redesign — Interactive Controller
 */

// Mobile navigation toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Modal controls
function openBookingModal(preselectedService = null) {
  const modal = document.getElementById('booking-modal');
  const form = document.getElementById('modal-booking-form');
  const confirmation = document.getElementById('booking-confirmation');
  
  if (!modal) return;
  
  if (form) form.classList.remove('hidden');
  if (confirmation) confirmation.classList.add('hidden');
  
  if (preselectedService) {
    const select = document.getElementById('modal-service');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === preselectedService || select.options[i].text.includes(preselectedService)) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Quick booking bar handler
function handleQuickBooking(e) {
  if (e) e.preventDefault();
  const deptEl = document.getElementById('quick-dept');
  const dateEl = document.getElementById('quick-date');
  
  const dept = deptEl ? deptEl.value : null;
  const date = dateEl ? dateEl.value : null;
  
  openBookingModal(dept);
  if (date) {
    const modalDate = document.getElementById('modal-date');
    if (modalDate) modalDate.value = date;
  }
}

// Modal booking form submit handler
function submitModalBooking(e) {
  if (e) e.preventDefault();
  const form = document.getElementById('modal-booking-form');
  const confirmation = document.getElementById('booking-confirmation');
  
  if (form) form.classList.add('hidden');
  if (confirmation) confirmation.classList.remove('hidden');
}

// Featured Services Carousel scrolling
function scrollCarousel(direction) {
  const carousel = document.getElementById('services-carousel');
  if (carousel) {
    const scrollAmount = 360 * direction;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Auto-scroll carousel every 5 seconds (with pause on mouse hover)
let carouselInterval = null;

function startCarouselAutoScroll() {
  const carousel = document.getElementById('services-carousel');
  if (!carousel) return;
  
  if (carouselInterval) clearInterval(carouselInterval);
  
  carouselInterval = setInterval(() => {
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: 360, behavior: 'smooth' });
    }
  }, 4500);
}

// Dynamic Live Clinic Status check based on current local time
function updateClinicStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 is Sun, 6 is Sat
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeDecimal = hours + minutes / 60;
  
  let isOpen = false;
  if (day === 0) {
    isOpen = false; // Sunday closed
  } else if (day === 6) {
    // Saturday: 9:00 to 15:00
    isOpen = (timeDecimal >= 9 && timeDecimal < 15);
  } else if (day === 2 || day === 4) {
    // Tuesday & Thursday: 9:00 to 18:00
    isOpen = (timeDecimal >= 9 && timeDecimal < 18);
  } else {
    // Monday, Wednesday, Friday: 9:00 to 17:00
    isOpen = (timeDecimal >= 9 && timeDecimal < 17);
  }
  
  const pill = document.getElementById('live-status-pill');
  if (pill) {
    if (isOpen) {
      pill.className = "text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300";
      pill.textContent = "Clinic Open";
    } else {
      pill.className = "text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300";
      pill.textContent = "After Hours • Online Booking 24/7";
    }
  }
}

// Setup Event Listeners on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  updateClinicStatus();
  startCarouselAutoScroll();
  
  const carouselEl = document.getElementById('services-carousel');
  if (carouselEl) {
    carouselEl.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carouselEl.addEventListener('mouseleave', () => startCarouselAutoScroll());
  }
  
  // Close modal on Escape key or outside click
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBookingModal();
  });
  
  const modalEl = document.getElementById('booking-modal');
  if (modalEl) {
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeBookingModal();
    });
  }
});

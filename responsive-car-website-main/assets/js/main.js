/*=============== VEHICLE CATALOG DATASET ===============*/
const FLEET_DATA = [
  {
    id: 'mission-e',
    brand: 'porsche',
    brandLabel: 'Porsche',
    name: 'Mission E Concept',
    subtitle: '800V Flagship Grand Tourer',
    price: 184500,
    accel: 2.8,
    topSpeed: 360,
    range: 873,
    voltage: '800V Dual-Motor',
    availability: ' Direct Allocation',
    image: 'assets/img/home.png',
    popularSeries: false,
    description: 'Flagship silicon-carbide 800-volt electric grand tourer with active all-wheel torque vectoring and dual-speed rear transaxle.'
  },
  {
    id: 'porsche-turbo-s',
    brand: 'porsche',
    brandLabel: 'Porsche',
    name: 'Taycan Turbo S',
    subtitle: 'Performance Plus AWD',
    price: 175900,
    accel: 2.8,
    topSpeed: 356,
    range: 468,
    voltage: '800V Electric',
    availability: 'In Stock · Stuttgart',
    image: 'assets/img/popular1.png',
    popularSeries: true,
    description: '560 kW (761 PS) overboost output with Launch Control, Porsche Ceramic Composite Brakes (PCCB), and rear-axle steering.'
  },
  {
    id: 'porsche-taycan',
    brand: 'porsche',
    brandLabel: 'Porsche',
    name: 'Taycan 4S',
    subtitle: 'Executive Sport Saloon',
    price: 114900,
    accel: 3.7,
    topSpeed: 356,
    range: 512,
    voltage: '800V Electric',
    availability: 'In Stock · Zurich',
    image: 'assets/img/popular2.png',
    popularSeries: true,
    description: 'Adaptive three-chamber air suspension with PASM and 270 kW peak DC fast-charging architecture.'
  },
  {
    id: 'porsche-turbo-s-cross',
    brand: 'porsche',
    brandLabel: 'Porsche',
    name: 'Turbo S Cross Turismo',
    subtitle: 'All-Terrain Electric GT',
    price: 150900,
    accel: 2.9,
    topSpeed: 356,
    range: 456,
    voltage: '800V Electric',
    availability: '2 Build Slots Left',
    image: 'assets/img/popular3.png',
    popularSeries: true,
    description: 'Extendedshooting-brake roofline with Gravel Mode chassis calibration and increased rear luggage capacity.'
  },
  {
    id: 'porsche-boxster-718',
    brand: 'porsche',
    brandLabel: 'Porsche',
    name: 'Boxster 718 EV',
    subtitle: 'Mid-Battery Roadster',
    price: 125900,
    accel: 3.4,
    topSpeed: 320,
    range: 490,
    voltage: '800V Electric',
    availability: 'In Stock · Munich',
    image: 'assets/img/popular4.png',
    popularSeries: true,
    description: 'T-shaped central battery layout replicating mid-engine rotational inertia for razor-sharp alpine handling.'
  },
  {
    id: 'porsche-cayman',
    brand: 'porsche',
    brandLabel: 'Porsche',
    name: 'Cayman GT4 ePerformance',
    subtitle: 'Track-Bred Electric Coupe',
    price: 128900,
    accel: 3.2,
    topSpeed: 340,
    range: 475,
    voltage: '800V Electric',
    availability: 'Direct Allocation',
    image: 'assets/img/popular5.png',
    popularSeries: true,
    description: 'Direct oil-cooled e-motors and natural-fiber composite bodywork engineered for sustained track sessions.'
  },
  {
    id: 'tesla-model-x',
    brand: 'tesla',
    brandLabel: 'Tesla',
    name: 'Model X Plaid',
    subtitle: 'Tri-Motor Falcon SUV',
    price: 98900,
    accel: 2.6,
    topSpeed: 262,
    range: 543,
    voltage: '1,020 HP Tri-Motor',
    availability: 'Immediate Delivery',
    image: 'assets/img/featured1.png',
    popularSeries: false,
    description: 'Carbon-sleeved rotors delivering 1,020 horsepower with active torque vectoring and Falcon Wing rear access.'
  },
  {
    id: 'tesla-model-3',
    brand: 'tesla',
    brandLabel: 'Tesla',
    name: 'Model 3 Performance',
    subtitle: 'Dual-Motor Sport Sedan',
    price: 45900,
    accel: 3.1,
    topSpeed: 261,
    range: 528,
    voltage: 'Dual-Motor AWD',
    availability: 'Immediate Delivery',
    image: 'assets/img/featured2.png',
    popularSeries: false,
    description: 'Track Mode V3 calibration, adaptive continuous damping, and forged performance staggered wheels.'
  },
  {
    id: 'audi-e-tron',
    brand: 'audi',
    brandLabel: 'Audi',
    name: 'RS e-tron GT',
    subtitle: 'Quattro Electric Gran Turismo',
    price: 175900,
    accel: 3.1,
    topSpeed: 250,
    range: 495,
    voltage: '800V Quattro',
    availability: 'In Stock · Ingolstadt',
    image: 'assets/img/featured3.png',
    popularSeries: false,
    description: 'Carbon-fiber roof panel, tungsten-carbide coated brake discs, and fully variable e-quattro torque distribution.'
  },
  {
    id: 'porsche-panamera',
    brand: 'porsche',
    brandLabel: 'Porsche',
    name: 'Panamera Executive EV',
    subtitle: 'Long-Wheelbase Luxury Saloon',
    price: 126900,
    accel: 3.0,
    topSpeed: 315,
    range: 560,
    voltage: '800V Active Ride',
    availability: 'In Stock · Stuttgart',
    image: 'assets/img/featured5.png',
    popularSeries: false,
    description: 'Porsche Active Ride single-chamber hydraulic suspension that neutralizes pitch and roll during dynamic cornering.'
  }
];

/*=============== DRIVE MODE TELEMETRY PROFILES ===============*/
const DRIVE_MODES = {
  gt: {
    temp: '24.0°C',
    tempNote: 'Optimal cell window',
    range: '873 km',
    rangeNote: 'Long-range dual pack',
    soc: '94%',
    socNote: '350 kW DC fast ready',
    accel: '2.8 s',
    accelNote: 'Balanced rear bias'
  },
  sport: {
    temp: '28.5°C',
    tempNote: 'Pre-conditioned sport',
    range: '740 km',
    rangeNote: 'Dynamic aero deployed',
    soc: '94%',
    socNote: '560 kW overboost armed',
    accel: '2.6 s',
    accelNote: 'Sport Plus response'
  },
  track: {
    temp: '32.0°C',
    tempNote: 'Max cooling circuit',
    range: '610 km',
    rangeNote: 'Track downforce trim',
    soc: '94%',
    socNote: 'Peak discharge unlocked',
    accel: '2.4 s',
    accelNote: 'Launch control active'
  }
};

/*=============== APPLICATION STATE ===============*/
let activeFilter = 'all';
let activeSort = 'featured';
let searchQuery = '';
let selectedModalCar = FLEET_DATA[1];
let selectedPaint = { name: 'Obsidian Metallic', cost: 0 };
let selectedPack = { name: 'Performance Battery Plus (93.4 kWh)', cost: 0 };
let savedGarage = [
  {
    uid: 'initial-1',
    car: FLEET_DATA[1],
    paint: 'Obsidian Metallic',
    pack: 'Performance Battery Plus (93.4 kWh)',
    totalPrice: 175900
  }
];

function formatCurrency(amount) {
  return '$' + amount.toLocaleString('en-US');
}

/*=============== MOBILE NAVIGATION ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*=============== HERO DRIVE MODE SWITCHER ===============*/
const driveModeBtns = document.querySelectorAll('.drive-mode-btn');
driveModeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    driveModeBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const modeKey = btn.getAttribute('data-mode');
    const profile = DRIVE_MODES[modeKey];
    if (!profile) return;

    document.getElementById('telemetry-temp').textContent = profile.temp;
    document.getElementById('telemetry-temp-note').textContent = profile.tempNote;
    document.getElementById('telemetry-range').textContent = profile.range;
    document.getElementById('telemetry-range-note').textContent = profile.rangeNote;
    document.getElementById('telemetry-soc').textContent = profile.soc;
    document.getElementById('telemetry-soc-note').textContent = profile.socNote;
    document.getElementById('telemetry-accel').textContent = profile.accel;
    document.getElementById('telemetry-accel-note').textContent = profile.accelNote;
  });
});

/*=============== RENDER SHOWROOM CATALOG ===============*/
const fleetGrid = document.getElementById('fleet-grid');

function renderFleetCatalog() {
  if (!fleetGrid) return;

  let filtered = FLEET_DATA.filter((car) => {
    const matchesBrand = activeFilter === 'all' || car.brand === activeFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      car.name.toLowerCase().includes(q) ||
      car.brandLabel.toLowerCase().includes(q) ||
      car.subtitle.toLowerCase().includes(q) ||
      car.voltage.toLowerCase().includes(q);
    return matchesBrand && matchesSearch;
  });

  if (activeSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'accel-asc') {
    filtered.sort((a, b) => a.accel - b.accel);
  } else if (activeSort === 'range-desc') {
    filtered.sort((a, b) => b.range - a.range);
  }

  if (filtered.length === 0) {
    fleetGrid.innerHTML = `
      <div class="empty-catalog-state">
        <h3 style="margin-bottom: 0.5rem;">No Matching Vehicles Found</h3>
        <p style="margin-bottom: 1.25rem;">Try clearing your search filter or viewing all available marques.</p>
        <button type="button" class="btn-secondary" id="reset-catalog-btn">Reset Showroom Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-catalog-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        activeFilter = 'all';
        searchQuery = '';
        activeSort = 'featured';
        document.getElementById('fleet-search').value = '';
        document.getElementById('fleet-sort').value = 'featured';
        updateFilterTabUI('all');
        renderFleetCatalog();
      });
    }
    return;
  }

  fleetGrid.innerHTML = filtered
    .map(
      (car) => `
      <article class="car-card">
        <div>
          <div class="car-card__top">
            <div>
              <p class="car-card__brand">${car.brandLabel} · ${car.subtitle}</p>
              <h3 class="car-card__name">${car.name}</h3>
            </div>
            <span class="car-card__availability">${car.availability}</span>
          </div>

          <div class="car-card__stage">
            <img src="${car.image}" alt="${car.brandLabel} ${car.name}" class="car-card__img" referrerpolicy="no-referrer">
          </div>

          <div class="car-card__specs unboxed-meta">
            <span class="tabular-nums">${car.accel}s 0–100</span>
            <span aria-hidden="true">·</span>
            <span class="tabular-nums">${car.range} km WLTP</span>
            <span aria-hidden="true">·</span>
            <span>${car.voltage}</span>
          </div>
        </div>

        <div class="car-card__bottom">
          <div>
            <span class="car-card__price-label">Direct Allocation</span>
            <strong class="car-card__price tabular-nums">${formatCurrency(car.price)}</strong>
          </div>

          <div class="car-card__actions">
            <button type="button" class="btn-secondary configure-car-btn" data-car-id="${car.id}">
              Configure
            </button>
            <button type="button" class="btn-icon quick-save-btn" data-car-id="${car.id}" aria-label="Save ${car.name} to garage" title="Save to Garage">
              <i class="ri-bookmark-line"></i>
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  bindCardEvents();
}

function bindCardEvents() {
  document.querySelectorAll('.configure-car-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const carId = btn.getAttribute('data-car-id');
      openConfiguratorModal(carId);
    });
  });

  document.querySelectorAll('.quick-save-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const carId = btn.getAttribute('data-car-id');
      const car = FLEET_DATA.find((c) => c.id === carId);
      if (!car) return;
      addCarToGarage(car, 'Obsidian Metallic', 'Standard Performance Pack', car.price);
      openGarageDrawer();
    });
  });
}

/*=============== RENDER PORSCHE SPOTLIGHT SERIES ===============*/
const spotlightTrack = document.getElementById('spotlight-track');

function renderPorscheSpotlight() {
  if (!spotlightTrack) return;
  const porscheSeries = FLEET_DATA.filter((c) => c.popularSeries);

  spotlightTrack.innerHTML = porscheSeries
    .map(
      (car) => `
      <article class="spotlight-card">
        <div>
          <div class="car-card__top">
            <div>
              <p class="car-card__brand">${car.brandLabel} Stuttgart Edition</p>
              <h3 class="car-card__name">${car.name}</h3>
            </div>
            <span class="tabular-nums" style="font-size: 0.8125rem; color: var(--text-secondary);">${car.topSpeed} km/h</span>
          </div>

          <div class="car-card__stage">
            <img src="${car.image}" alt="${car.brandLabel} ${car.name}" class="car-card__img" referrerpolicy="no-referrer">
          </div>

          <div class="car-card__specs unboxed-meta">
            <span class="tabular-nums">${car.accel} Sec</span>
            <span aria-hidden="true">·</span>
            <span class="tabular-nums">${car.topSpeed} Km/h</span>
            <span aria-hidden="true">·</span>
            <span>${car.voltage}</span>
          </div>
        </div>

        <div class="car-card__bottom">
          <div>
            <span class="car-card__price-label">MSRP Allocation</span>
            <strong class="car-card__price tabular-nums">${formatCurrency(car.price)}</strong>
          </div>
          <button type="button" class="btn-primary configure-car-btn" data-car-id="${car.id}">
            Inspect &amp; Reserve
          </button>
        </div>
      </article>
    `
    )
    .join('');

  bindCardEvents();
}

const spotlightPrev = document.getElementById('spotlight-prev');
const spotlightNext = document.getElementById('spotlight-next');

if (spotlightPrev && spotlightTrack) {
  spotlightPrev.addEventListener('click', () => {
    spotlightTrack.scrollBy({ left: -320, behavior: 'smooth' });
  });
}

if (spotlightNext && spotlightTrack) {
  spotlightNext.addEventListener('click', () => {
    spotlightTrack.scrollBy({ left: 320, behavior: 'smooth' });
  });
}

/*=============== FILTER, SEARCH & SORT HANDLERS ===============*/
const filterTabs = document.querySelectorAll('.filter-tab');
const searchInput = document.getElementById('fleet-search');
const sortSelect = document.getElementById('fleet-sort');

function updateFilterTabUI(selectedBrand) {
  filterTabs.forEach((tab) => {
    const isMatch = tab.getAttribute('data-filter') === selectedBrand;
    tab.classList.toggle('active', isMatch);
    tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });
}

filterTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activeFilter = tab.getAttribute('data-filter');
    updateFilterTabUI(activeFilter);
    renderFleetCatalog();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderFleetCatalog();
  });
}

if (sortSelect) {
  sortSelect.addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderFleetCatalog();
  });
}

/* Footer Quick Filter Links */
document.querySelectorAll('[data-quick-filter]').forEach((link) => {
  link.addEventListener('click', () => {
    const brand = link.getAttribute('data-quick-filter');
    activeFilter = brand;
    updateFilterTabUI(brand);
    renderFleetCatalog();
  });
});

/*=============== CONTIGUOUS VEHICLE CONFIGURATOR MODAL ===============*/
const configModal = document.getElementById('config-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const heroConfigureBtn = document.getElementById('hero-configure-btn');
const heroSpecsBtn = document.getElementById('hero-specs-btn');

function openConfiguratorModal(carId) {
  const car = FLEET_DATA.find((c) => c.id === carId) || FLEET_DATA[0];
  selectedModalCar = car;

  // Reset trim options to default
  selectedPaint = { name: 'Obsidian Metallic', cost: 0 };
  selectedPack = { name: 'Performance Battery Plus (93.4 kWh)', cost: 0 };

  document.querySelectorAll('#config-paint-options .config-choice').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
  });
  document.querySelectorAll('#config-pack-options .config-choice').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
  });

  document.getElementById('modal-car-brand').textContent = car.brandLabel;
  document.getElementById('modal-car-category').textContent = car.subtitle;
  document.getElementById('modal-car-title').textContent = `${car.brandLabel} ${car.name}`;
  document.getElementById('modal-car-desc').textContent = car.description;
  document.getElementById('modal-car-img').src = car.image;
  document.getElementById('modal-car-img').alt = `${car.brandLabel} ${car.name}`;

  document.getElementById('modal-spec-accel').textContent = `${car.accel} Sec`;
  document.getElementById('modal-spec-speed').textContent = `${car.topSpeed} km/h`;
  document.getElementById('modal-spec-range').textContent = `${car.range} km`;
  document.getElementById('modal-spec-power').textContent = car.voltage;

  updateModalPricing();

  configModal.classList.add('is-open');
  configModal.setAttribute('aria-hidden', 'false');
}

function updateModalPricing() {
  const total = selectedModalCar.price + selectedPaint.cost + selectedPack.cost;
  const monthlyLease = Math.round(total * 0.0124);

  document.getElementById('modal-total-price').textContent = formatCurrency(total);
  document.getElementById('modal-lease-price').textContent = `${formatCurrency(monthlyLease)} / mo`;
}

function closeConfiguratorModal() {
  configModal.classList.remove('is-open');
  configModal.setAttribute('aria-hidden', 'true');
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeConfiguratorModal);
}

if (configModal) {
  configModal.addEventListener('click', (e) => {
    if (e.target === configModal) closeConfiguratorModal();
  });
}

if (heroConfigureBtn) {
  heroConfigureBtn.addEventListener('click', () => openConfiguratorModal('mission-e'));
}

if (heroSpecsBtn) {
  heroSpecsBtn.addEventListener('click', () => openConfiguratorModal('mission-e'));
}

/* Paint & Pack Option Handlers */
document.querySelectorAll('#config-paint-options .config-choice').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#config-paint-options .config-choice').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPaint = {
      name: btn.getAttribute('data-paint'),
      cost: Number(btn.getAttribute('data-cost')) || 0
    };
    updateModalPricing();
  });
});

document.querySelectorAll('#config-pack-options .config-choice').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#config-pack-options .config-choice').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPack = {
      name: btn.getAttribute('data-pack'),
      cost: Number(btn.getAttribute('data-cost')) || 0
    };
    updateModalPricing();
  });
});

/* Modal Primary Actions */
const modalAddGarageBtn = document.getElementById('modal-add-garage-btn');
const modalBookDriveBtn = document.getElementById('modal-book-drive-btn');

if (modalAddGarageBtn) {
  modalAddGarageBtn.addEventListener('click', () => {
    const total = selectedModalCar.price + selectedPaint.cost + selectedPack.cost;
    addCarToGarage(selectedModalCar, selectedPaint.name, selectedPack.name, total);
    closeConfiguratorModal();
    openGarageDrawer();
  });
}

if (modalBookDriveBtn) {
  modalBookDriveBtn.addEventListener('click', () => {
    const selectEl = document.getElementById('client-model');
    const notesEl = document.getElementById('client-notes');
    if (selectEl) {
      // Match or add option
      const fullLabel = `${selectedModalCar.brandLabel} ${selectedModalCar.name}`;
      let matched = false;
      Array.from(selectEl.options).forEach((opt) => {
        if (opt.value.toLowerCase().includes(selectedModalCar.name.toLowerCase())) {
          selectEl.value = opt.value;
          matched = true;
        }
      });
      if (!matched) {
        const newOpt = document.createElement('option');
        newOpt.value = fullLabel;
        newOpt.textContent = `${fullLabel} (${formatCurrency(selectedModalCar.price)})`;
        selectEl.appendChild(newOpt);
        selectEl.value = fullLabel;
      }
    }
    if (notesEl) {
      notesEl.value = `Finish: ${selectedPaint.name} · Package: ${selectedPack.name}`;
    }
    closeConfiguratorModal();
    document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
  });
}

/*=============== GARAGE DRAWER STATE & HANDLERS ===============*/
const garageDrawer = document.getElementById('garage-drawer');
const openGarageBtn = document.getElementById('open-garage-btn');
const closeGarageBtn = document.getElementById('close-garage-btn');
const garageItemsContainer = document.getElementById('garage-items-container');
const garageCountEl = document.getElementById('garage-count');
const garageTotalPriceEl = document.getElementById('garage-total-price');
const garageCheckoutBtn = document.getElementById('garage-checkout-btn');

function addCarToGarage(car, paint, pack, totalPrice) {
  savedGarage.push({
    uid: 'item-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
    car,
    paint,
    pack,
    totalPrice
  });
  renderGarageDrawer();
}

function renderGarageDrawer() {
  if (garageCountEl) {
    garageCountEl.textContent = String(savedGarage.length);
  }

  if (!garageItemsContainer) return;

  if (savedGarage.length === 0) {
    garageItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <p>Your saved fleet garage is empty.</p>
        <p style="font-size: 0.8125rem; margin-top: 0.35rem;">Select any vehicle from the showroom to configure and store build slots.</p>
      </div>
    `;
    if (garageTotalPriceEl) garageTotalPriceEl.textContent = '$0';
    return;
  }

  const totalSum = savedGarage.reduce((acc, item) => acc + item.totalPrice, 0);
  if (garageTotalPriceEl) {
    garageTotalPriceEl.textContent = formatCurrency(totalSum);
  }

  garageItemsContainer.innerHTML = savedGarage
    .map(
      (item) => `
      <div class="garage-item">
        <img src="${item.car.image}" alt="${item.car.name}" class="garage-item__img" referrerpolicy="no-referrer">
        <div class="garage-item__info">
          <h4 class="garage-item__title">${item.car.brandLabel} ${item.car.name}</h4>
          <p class="garage-item__meta">${item.paint} · <span class="tabular-nums">${formatCurrency(item.totalPrice)}</span></p>
        </div>
        <button type="button" class="garage-item__remove" data-remove-uid="${item.uid}" aria-label="Remove ${item.car.name}">
          Remove
        </button>
      </div>
    `
    )
    .join('');

  document.querySelectorAll('[data-remove-uid]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const uid = btn.getAttribute('data-remove-uid');
      savedGarage = savedGarage.filter((item) => item.uid !== uid);
      renderGarageDrawer();
    });
  });
}

function openGarageDrawer() {
  garageDrawer.classList.add('is-open');
  garageDrawer.setAttribute('aria-hidden', 'false');
}

function closeGarageDrawer() {
  garageDrawer.classList.remove('is-open');
  garageDrawer.setAttribute('aria-hidden', 'true');
}

if (openGarageBtn) {
  openGarageBtn.addEventListener('click', openGarageDrawer);
}

if (closeGarageBtn) {
  closeGarageBtn.addEventListener('click', closeGarageDrawer);
}

if (garageDrawer) {
  garageDrawer.addEventListener('click', (e) => {
    if (e.target === garageDrawer) closeGarageDrawer();
  });
}

if (garageCheckoutBtn) {
  garageCheckoutBtn.addEventListener('click', () => {
    if (savedGarage.length > 0) {
      const summaryNames = savedGarage.map((i) => `${i.car.brandLabel} ${i.car.name} (${i.paint})`).join(', ');
      const notesInput = document.getElementById('client-notes');
      if (notesInput) {
        notesInput.value = `Saved Garage Inquiry: ${summaryNames}`;
      }
    }
    closeGarageDrawer();
    document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
  });
}

/*=============== PRIVATE CLIENT FORM VALIDATION & SUBMISSION ===============*/
const consultationForm = document.getElementById('consultation-form');
const formError = document.getElementById('form-error');
const formSuccess = document.getElementById('form-success');
const formSuccessTitle = document.getElementById('form-success-title');
const formSuccessBody = document.getElementById('form-success-body');

if (consultationForm) {
  consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = document.getElementById('client-name').value.trim();
    const emailVal = document.getElementById('client-email').value.trim();
    const modelVal = document.getElementById('client-model').value;
    const acquisitionVal = document.getElementById('client-acquisition').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameVal.length < 2) {
      formError.textContent = 'Please enter your full name to register an allocation dossier.';
      formError.hidden = false;
      formSuccess.hidden = true;
      return;
    }

    if (!emailRegex.test(emailVal)) {
      formError.textContent = 'Please provide a valid work or private email address.';
      formError.hidden = false;
      formSuccess.hidden = true;
      return;
    }

    formError.hidden = true;
    const dossierNumber = 'EL-' + Math.floor(1000 + Math.random() * 9000);
    formSuccessTitle.textContent = `Allocation Dossier #${dossierNumber} Confirmed`;
    formSuccessBody.textContent = `Thank you, ${nameVal}. Your ${acquisitionVal} dossier for the ${modelVal} has been dispatched to ${emailVal}.`;
    formSuccess.hidden = false;
  });
}

/*=============== SCROLL SPY NAVIGATION ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function updateActiveNavOnScroll() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const navLinkEl = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    if (navLinkEl) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinkEl.classList.add('active-link');
      } else {
        navLinkEl.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });

/*=============== ESCAPE KEY CLOSES MODAL / DRAWER ===============*/
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeConfiguratorModal();
    closeGarageDrawer();
  }
});

/*=============== INITIALIZE VIEW ===============*/
renderFleetCatalog();
renderPorscheSpotlight();
renderGarageDrawer();

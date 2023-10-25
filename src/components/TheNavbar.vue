<script setup></script>

<template>
  <header class="fixed-top">
    <div
      class="bg-cafe d-flex justify-content-center align-items-center py-2 text-white"
    >
      ¡Realiza hoy tu pedido!
      <button class="ms-4 btn btn-outline-light">Ver Catálogo</button>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-crema">
      <div class="container-fluid">
        <router-link class="navbar-brand m-0" :to="{ name: 'home'}" >
            <img
                src="../assets/luharud-500.png"
                alt="Logo"
                height="40"
                class="d-inline-block align-text-top mx-4"
            />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav justify-content-end w-100 ">
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'home'}" >
                    Inicio
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'products'}" >
                    Artículos
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'processes'}" >
                    Proceso
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'FAQ'}" >
                    FAQ
                </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

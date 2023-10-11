<script setup></script>

<template>
    <header>
        <div class="bg-cafe sticky-top d-flex justify-content-center align-items-center py-2 text-white">
            ¡Realiza hoy tu pedido! 
            <button class="ms-4 btn btn-outline-light"> Ver Catálogo </button>
        </div>
        <nav
            class="navbar sticky-top navbar-expand-lg navbar-light shadow-sm bg-crema"
        >
            <div class="container-fluid">
                <a class="navbar-brand m-0" href="#">
                    <img
                        src="../assets/luharud-500.png"
                        alt="Logo"
                        height="40"
                        class="d-inline-block align-text-top mx-4"
                    />
                </a>
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
                    <ul class="navbar-nav justify-content-end w-100">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><b>Inicio</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Artículos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Proceso</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

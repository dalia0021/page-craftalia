<script setup></script>

<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light shadow-sm">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-end w-100">
                    <li class="nav-item mx-5">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item mx-5">
                        <a class="nav-link">Articulos</a>
                    </li>
                </ul>
                <a class="navbar-brand m-0" href="#">
                    <img
                        src="../assets/logo-letra.png"
                        alt="Logo"
                        height="50"
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

                <ul class="navbar-nav justify-content-start w-100">
                    <li class="nav-item mx-5">
                        <a class="nav-link" href="#">Calculadora</a>
                    </li>
                    <li class="nav-item mx-5">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

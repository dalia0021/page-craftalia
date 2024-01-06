<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import BaseTitlePage from "@components/BaseTitlePage.vue";
import BaseSection from "@components/BaseSection.vue";
import TheFooter from "@components/TheFooter.vue";
</script>

<template>
    <TheNavbar />
    <BaseTitlePage title="Proceso de personalización de tus productos" />
    <BaseSection bgColor="bg-white" frames>
        <div class="row justify-content-center text-justify">
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="py-2">
                    <h4 class="text-cafe text-matcha">Paso 1: Selección del Producto</h4>
                    <p>
                        Elige el producto que deseas personalizar de nuestra
                        amplia gama de opciones. Puedes optar por llaveros,
                        cuadernos, stickers, tarjetas y mucho más.
                    </p>
                </div>
                <div class="py-2">
                    <h4 class="text-cafe text-matcha">
                        Paso 2: Especifica tus Preferencias
                    </h4>
                    <p>
                        Selecciona las opciones de personalización disponibles
                        para ese producto en particular. Esto podría incluir la
                        elección de colores, patrones, tamaños y cualquier
                        detalle adicional que desees.
                    </p>
                </div>
                <div class="py-2">
                    <h4 class="text-cafe text-matcha">Paso 3: Agrega Tu Toque Personal</h4>
                    <p>
                        Aquí es donde realmente brilla la personalización.
                        Puedes proporcionar detalles específicos, como un
                        nombre, una fecha especial, una cita inspiradora o
                        cualquier diseño único que tengas en mente.
                    </p>
                </div>
                <div class="py-2">
                    <h4 class="text-cafe text-matcha">Paso 4: Revisión y Confirmación</h4>
                    <p>
                        Antes de comenzar el proceso de personalización, te
                        proporcionaremos una vista previa digital de cómo se
                        verá el producto final con tus especificaciones. Una vez
                        que estés satisfecho con el diseño, confirmaremos tu
                        pedido.
                    </p>
                </div>

                <div class="py-2">
                    <h4 class="text-cafe text-matcha">Paso 5: Creación a Mano</h4>
                    <p>
                        Cada producto se crea cuidadosamente a mano, prestando
                        atención a los detalles y utilizando materiales de alta
                        calidad para garantizar que el resultado final sea
                        excepcional.
                    </p>
                </div>
                <div class="py-2">
                    <h4 class="text-cafe text-matcha">Paso 6: Control de Calidad</h4>
                    <p>
                        Una vez finalizado el proceso de personalización,
                        realizamos un riguroso control de calidad para
                        asegurarnos de que tu producto cumple con nuestros
                        estándares de excelencia.
                    </p>
                </div>
                <div class="py-2">
                    <h4 class="text-cafe text-matcha">Paso 7: Empaque</h4>
                    <p>
                        Tu producto personalizado se empaqueta con cuidado para
                        que llegue seguro hasta tus manos.
                    </p>
                </div>
                <div class="py-2">
                    <h4 class="text-cafe text-matcha">
                        Paso 8: Disfruta de tu Producto Único
                    </h4>
                    <p>
                        Finalmente, recibirás tu producto personalizado, creado
                        especialmente para ti. Disfruta de la satisfacción de
                        tener un artículo único que refleja tu estilo y
                        personalidad. Este proceso asegura que cada producto
                        personalizado que ofrecemos sea una obra maestra única y
                        especial que cumple con tus expectativas y necesidades.
                    </p>
                </div>
            </div>
        </div>
    </BaseSection>
    <TheFooter />
</template>

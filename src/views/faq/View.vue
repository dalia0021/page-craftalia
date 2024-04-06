<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import BaseTitlePage from "@components/BaseTitlePage.vue";
import BaseAccordionItem from "@components/BaseAccordionItem.vue";
import BaseSection from "@components/BaseSection.vue";
import TheFooter from "@components/TheFooter.vue";
</script>

<template>
    <TheNavbar />
    <BaseTitlePage
        title="Preguntas Frecuentes (FAQ)"
        subtitle="¡Muchas gracias por tu interés!"
    />
    <BaseSection bgColor="bg-white" frames>
        <div class="row justify-content-center text-justify">
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="accordion" id="accordionExample">
                    <BaseAccordionItem
                        idItem="q1"
                        title="¿Cómo puedo realizar un pedido personalizado?"
                    >
                        Para hacer un pedido personalizado, simplemente
                        selecciona el producto que deseas personalizar y sigue
                        las opciones de personalización proporcionadas en la
                        página del producto. Luego, completa el formulario de
                        pedido personalizado con los detalles específicos que
                        deseas incluir en tu artículo.
                    </BaseAccordionItem>
                    <BaseAccordionItem
                        idItem="q2"
                        title="¿Cuánto tiempo lleva el proceso de personalización?"
                    >
                        El tiempo de personalización puede variar según la
                        complejidad del diseño y la cantidad de pedidos en
                        curso. Por lo general, el proceso de personalización
                        toma entre 5 y 10 días hábiles. Te proporcionaremos una
                        estimación más precisa al confirmar tu pedido.
                    </BaseAccordionItem>
                    <BaseAccordionItem
                        idItem="q3"
                        title="¿Puedo ver una muestra antes de confirmar mi pedido personalizado?"
                    >
                        Sí, antes de comenzar la producción, te proporcionaremos
                        una vista previa digital de cómo se verá tu producto
                        personalizado con los detalles que has proporcionado.
                        Esto te dará la oportunidad de hacer ajustes si es
                        necesario y asegurarte de que estés satisfecho con el
                        diseño final.
                    </BaseAccordionItem>
                    <BaseAccordionItem
                        idItem="q4"
                        title="¿Ofrecen descuentos para pedidos a granel o eventos especiales?"
                    >
                        Sí, ofrecemos descuentos especiales para pedidos a
                        granel y eventos como bodas, graduaciones y
                        corporativos. Ponte en contacto con nuestro equipo de
                        atención al cliente para obtener más detalles y una
                        cotización personalizada.
                    </BaseAccordionItem>
                    <BaseAccordionItem
                        idItem="q5"
                        title="¿Qué garantías ofrecen en cuanto a la calidad de sus productos?"
                    >
                        Nos enorgullece la calidad artesanal de nuestros
                        productos y nos esforzamos por garantizar que cada
                        artículo cumpla con tus expectativas. Si tienes algún
                        problema con la calidad de tu pedido, por favor, ponte
                        en contacto con nuestro equipo de atención al cliente lo
                        antes posible y haremos todo lo posible para resolverlo.
                    </BaseAccordionItem>
                    <BaseAccordionItem
                        idItem="q6"
                        title="¿Aceptan devoluciones o cambios en los productos personalizados?"
                    >
                        Debido a la naturaleza personalizada de nuestros
                        productos, normalmente no aceptamos devoluciones ni
                        cambios, a menos que el artículo esté dañado o haya
                        habido un error en la personalización por nuestra parte.
                        Por favor, consulta nuestra política de devoluciones
                        para obtener más información.
                    </BaseAccordionItem>
                </div>
                <br />
                <div class="py-5 text-center bg-lila text-white">
                    <h3><b>¿Tienes más dudas?</b></h3>

                    <p>Si necesitas más ayuda con mucho gusto te apoyamos:</p>

                    @craftalia | craftalia@gmail.com
                </div>
            </div>
        </div>
    </BaseSection>
    <TheFooter />
</template>

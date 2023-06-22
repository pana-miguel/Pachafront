<template>
    <li v-for="(item, index) in productosStore.productos">
        {{ index }} - {{ item.nombre }}
    </li>
</template>

<script setup>
import { useProductosStore } from '../stores/productos'
const productosStore = useProductosStore();
productosStore.fill();
console.log(productosStore.productos)
</script>

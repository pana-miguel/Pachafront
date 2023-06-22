import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductosStore = defineStore('productos', {
    state: () => {
        return {
            productos: [],
        }
    }
    ,
    actions: {
        async fill() {
         await
                axios
                    .get('http://localhost:3000/productos')
                    .then((response) => {
                        this.productos = response.data
                        console.log(response.data)
                    })

        }
    }
}
)

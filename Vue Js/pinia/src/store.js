import {defineStore} from "pinia";
import {ref} from "vue";

export const useCounter = defineStore("counter", () =>{
    const counter = ref(0)

    return {
        counter
    }
})
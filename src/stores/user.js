import { defineStore } from 'pinia'
import { ref, computed } from 'pinia'
export const useUserStore = defineStore('user', () => {
  
 const user = ref({
  name:"Tania",
  asignatura:"programación",
  nota: 0


  });
});
 const website = computed(()=> user.value.asignatura.nota.substring(user.value.asignatura.nota.lastIndexOf('@')+1));

 const addNota = (newNota) => {
  user.value.nota = newNota
 }
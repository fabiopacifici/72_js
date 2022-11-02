/* 
Creare un applicazione per l'inserimento e la visualizzazione di una lista di tasks.

Aggiungere un input con un pulsante, una lista di tasks da visualizzare di default.
Al click sul pulsante aggiungiamo la task inserita nell'input dentro la lista di tasks.
La nuova task non deve essere vuota ne minore di 5 caratteri, mostrare un messaggio per avvisare l'utente che la task non é indonea.


Bonus:
- facciamo inserire la task anche al click del tasto enter
- al click su una task la marchiamo come completa
*/

/* 
M1: 
Preparare il markup per aggiungere un input con un pulsante, una lista di tasks da visualizzare di
default.

M2: 
Rendere il markup dinamico inserendo le tasks di default tramite l'array in data nella DOM


M3:
Al click sul pulsante aggiungiamo la task inserita nell 'input dentro la lista di tasks.
- salvare il valore dell'input (come? dove?)  usando v-model e creando una prop nell'oggetto data
- usare la direttiva v-on sul pulsante
- creare funzione da applicare al v-on dentro oggetto methods

- dentro il metodo AddTask recuperare il valore dell'input
- pushare il valore dell'input dentro la lista di tasks


M4:
al click su una task la marchiamo come completa

*/

/* 
const {
  createApp
} = Vue */

import {
  createApp
} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
  data() {
    return {
      //newTask: '', // opzione 1
      // opzione 2
      newTask: {
        text: '',
        done: false
      },
      error: false,
      tasks: [{
          text: 'Learn HTML',
          done: false
        },
        {
          text: 'Learn CSS',
          done: false
        },
        {
          text: 'Learn JS',
          done: false
        }
      ]
    }
  },
  methods: {
    addTask() {
      console.log('Ho cliccato su add task');

      // non consentire l'aggiunta di task vuote
      if (this.newTask.text.length < 15) {
        // mostro messaggio di errore
        this.error = true

      } else {
        /* 
        -dentro il metodo AddTask recuperare il valore dell 'input 
        - pushare il valore dell 'input dentro la lista di tasks
        */
        this.error = false
        /*   this.tasks.unshift({
            text: this.newTask,
            done: false
          }) */

        //opzione 2
        const newTask = {
          ...this.newTask
          // text: ''
          // done: false
        }
        console.log(newTask);
        this.tasks.unshift(newTask)
        // svuotare l'input dopo che la task é stata aggiunta
        this.newTask.text = ''
      }

    },
    done(index) {
      // how to remove an element da un array (uso splice)
      // fruits.splice(2, 1);
      console.log('Ho cliccato sulla task con indice:', index);
      this.tasks.splice(index, 1)
    }
  }
}).mount('#app')

const { createApp } = Vue;
createApp({
    data() {
        return {
            newMail : []
        }
    },
    methods: {
        randomMails(){
            // CREO CICLO PER VISUALIZZARE MAIL
            for (let i= 0; i <10 ; i++){
                // METTO HTTP DELLA PAGINA 
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                    // ARROW FUNCTION FONDAMENTALE 
                    (response) => {
                    console.log(response);
                    // inserisco nell'array vuoto le mail
                    this.newMail.push(response.data.response);
                });
            }
        }
    },

    // per richiamare il method
    created (){
        this.randomMails()
    }
}).mount('#app'); 


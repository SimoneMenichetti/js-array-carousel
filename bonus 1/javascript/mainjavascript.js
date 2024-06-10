
//     BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

// 1
    // creazione nuovo array per le img da inserire dinamicamente da js

    const ArrayImmagini = ['./img/01.webp','./img/02.webp','./img/03.webp','./img/04.webp','./img/05.webp'];

      // 3
        // prendere l' elemento contenitore degli item del carosello rendendolo globale 

        const itemsContenitore = document.querySelector(".carosello");

// 2
    // inizio ciclo for per estrapolazione degli elementi img

    for(let i = 0; i < ArrayImmagini.length; i++) {
        let itemImmagine = ArrayImmagini[i];
        console.log(itemImmagine);

          // 4
            // creare l'elemento da inserire ad ogni iterazione
        let itemContenuto = `<div class="carosello-item"><img src="${itemImmagine}"></div>`;


        // 5
            // inserire il nuovo elemento creato nel contenitore nel dom "carosello"

            itemsContenitore.innerHTML += itemContenuto;
    }

    // 3
        // prendere l' elemento contenitore degli item del carosello e spostarlo per renderlo una const globale per l'utilizzo 


    // 6
        // selezionare tutti gli elementi " carosello-item" in pagina

        const itemContenuto  = document.getElementsByClassName("carosello-item");

            // // verifica funzionamento

            // console.log(items);

        let activeItem = 0;
    // 7
        // inserire la class active all " carosello-item"
        itemContenuto [activeItem].classList.add("active");

        // verifica funzionamento aggiunta classe activ al " carosello-item 0"
            // console.log( itemCarosello[activeItem]);

    // 8
        // per dare la funzione di active all'interazione utente vado a selezionare il bottone next creando una const

        const next = document.querySelector(".next");
            // verifica funzionamento selezione in console
            // console.log(next);

       const prev= document.querySelector(".prev");
        


    // 9 gestire l evento click

    next.addEventListener("click",
        function() {

            if(activeItem < ArrayImmagini.length -1) {

                // verificare se non siamo alla fine della lista immagini

                

                // eliminare l'active all item attivo
                itemContenuto [activeItem].classList.remove("active");



                // incremento valore item

                activeItem +=1;


                // inserire la classe active agli elementi corrispondenti all item aggiornato

                itemContenuto [activeItem].classList.add("active");

            } else {
                // Se siamo alla fine della lista immagini, torna al primo
                itemContenuto [activeItem].classList.remove("active");

                activeItem = 0;

                itemContenuto [activeItem].classList.add("active");

            }

        }

    );

    // BONUS 

    prev.addEventListener('click', 
        function() {
            if (activeItem > 0) {
                // Eliminare l'active dall'item attivo
                itemContenuto [activeItem].classList.remove("active");
        
                // Decremento valore item
                activeItem -= 1;
        
                // Inserire la classe active all'elemento corrispondente all'item aggiornato
                itemContenuto [activeItem].classList.add("active");
            } else {
                // Se siamo all'inizio della lista immagini, torna all'ultimo
                itemContenuto  [activeItem].classList.remove("active");
                activeItem =  ArrayImmagini.length - 1;
                itemContenuto  [activeItem].classList.add("active");
            }
        }
    );


 



  


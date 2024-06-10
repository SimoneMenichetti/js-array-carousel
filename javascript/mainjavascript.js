// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito


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

  


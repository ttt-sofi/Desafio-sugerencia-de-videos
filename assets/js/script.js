class Multimedia {
    constructor(url) {
        this.url = url;
    }

    // Función pública que muestra el video en el iframe
    mostrarVideoEnIframe(id) {
        
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', this.url);
        } else {
            console.error(`No se encontró el iframe con el id: ${id}`);
        }
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        console.log(`Playing multimedia with id: ${this.id}`);
    }

    setInicio(tiempo) {
        const iframe = document.getElementById(this.id);
        if (iframe) {
            // Modificar la URL para agregar el tiempo de inicio
            let nuevaUrl = `${this.url}?start=${tiempo}`;
            iframe.setAttribute('src', nuevaUrl);
        } else {
            console.error(`No se encontró el iframe con el id: ${this.id}`);
        }
    }
}

// Instancias de la clase para diferentes tipos de multimedia
const musica = new Reproductor("https://www.youtube.com/embed/iVsNMjld8Ek", "musica");
const peliculas = new Reproductor("https://www.youtube.com/embed/V75dMMIW2B4", "peliculas");
const series = new Reproductor("https://www.youtube.com/embed/L6cDDmk-O5A", "series");

// Mostrar automáticamente los videos en los iframes respectivos
musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();

// Establecer un tiempo de inicio para los videos de música, películas y series
musica.setInicio(30); 
peliculas.setInicio(60); 
series.setInicio(90); 

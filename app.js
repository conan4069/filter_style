const productos = [
    // {name: '', text: '', category: '', material: '', system: ''},

    {
        name: 'Natural',
        text: 'Text Natural',
        category: 'category Natural',
        material: 'Material Natural',
        system: ' System Natural',
        image: 'https://stosacucine20.imgix.net/en/immagini_cucine/modern-kitchens-natural-1567.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1553160074&q=85&w=450'
    },
    {
        name: 'Infinito',
        text: 'Text Infinito',
        category: 'category Infinito',
        material: 'Material Infinito',
        system: ' System Infinito',
        image: 'https://stosacucine30.imgix.net/en/immagini_cucine/modern-kitchens-metropolis-1568.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1553160941&q=85&w=450'
    },
    {
        name: 'Tosca',
        text: 'Text Tosca',
        category: 'category Tosca',
        material: 'Material Tosca',
        system: ' System Tosca',
        image: 'https://stosacucine30.imgix.net/en/immagini_cucine/modern-kitchens-aliant-1581.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1553163229&q=85&w=450'
    },
    {
        name: 'Virginia',
        text: 'Text Virginia',
        category: 'category Virginia',
        material: 'Material Virginia',
        system: ' System Virginia',
        image: 'https://stosacucine10.imgix.net/en/immagini_cucine/modern-kitchens-aleve-3726.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1570715209&q=85&w=450'
    },

]

const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#products');

const contentProducts = () => {

    resultado.innerHTML = '';

    for (let producto of productos) {
        let name = producto.name.toLowerCase();

        resultado.innerHTML += `
            <div class="col" name=" ${producto.name}" category="${producto.category}" material="${producto.material}" system="${producto.system}">
                <a href="#">
                    <div class="image">
                        <img src="${producto.image}" alt="">
                        <div class="text">
                            <span>${producto.text}</span>
                            <span class="serif">
                                <em>Text em</em>
                            </span>
                        </div>
                    </div>
                    <div class="name">
                        ${producto.name}
                    </div>
                </a>
            </div>
        `
    }

    if (resultado.innerHTML === '') {
        resultado.innerHTML = `<div no-results style="display: flex">Ningun resultado</div>`
    } else resultado.innerHTML += `<div no-results>Ningun resultado</div>`
}
contentProducts();

// const elemento = document.querySelector('#products [name*="Virginia"]');

const filtrar = () => {

    // console.log(formulario.value);

    const texto = formulario.value.toLowerCase();

    console.log('texto',texto)


    for (let producto of productos) {
        let name = producto.name.toLowerCase();

        if (name.indexOf(texto) !== -1) {
            document.querySelector(`#products [name*='${producto.name}']`).classList.remove('d-none');
            console.log('alguno tiene')
        }
        else {
            document.querySelector(`#products [name*='${producto.name}']`).classList.add('d-none');
            console.log('nintuno tiene')
        }
    }

    const all_product = document.querySelectorAll('#products [name]').length;
    console.log('all_producta',all_product)
    const d_none_product = document.querySelectorAll('#products [name].d-none').length;
    console.log('d_none_product',d_none_product)

    if (all_product === d_none_product) {
        document.querySelector(`#products > [no-results]`).style.display = 'flex';
    }
    else {
         document.querySelector(`#products > [no-results]`).style.display = 'none';
    }

   
}
formulario.addEventListener('keyup', filtrar);
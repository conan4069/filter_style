const productos = [
    // {name: '', text: '', category: '', material: '', system: '', image:''},

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

const select_categorys = [
    'category Natural',
    'category Infinito',
    'category Tosca',
    'category Virginia',
]
const content_category = document.querySelector('select[select-filter="category"]');

const select_materials = [
    'Material Natural',
    'Material Infinito',
    'Material Tosca',
    'Material Virginia',
]
const content_material = document.querySelector('select[select-filter="materials"]');

const select_systems = [
    'System Natural',
    'System Infinito',
    'System Tosca',
    'System Virginia',
] 
const content_system = document.querySelector('select[select-filter="systems"]');

const contentCategory = () => {

    content_category.innerHTML = '';

    for (let category of select_categorys) {
        console.log(category)

        content_category.innerHTML += `
            <option value="">${category}</option>
        `
    }
}
contentCategory();

const contentMaterial = () => {

    content_material.innerHTML = '<option value="*">Materials</option>';

    for (let material of select_materials) {
        console.log(material)

        content_material.innerHTML += `
            <option value="">${material}</option>
        `
    }
}
contentMaterial();

const contentSystem = () => {

    content_system.innerHTML = '<option value="*">Opening systems</option>';

    for (let system of select_systems) {
        console.log(system)

        content_system.innerHTML += `
            <option value="">${system}</option>
        `
    }
}
contentSystem();

const search_filter = document.querySelector('#search-filter');
const results = document.querySelector('#products-filter');

const contentProducts = () => {

    results.innerHTML = '';

    for (let producto of productos) {
        let name = producto.name.toLowerCase();

        results.innerHTML += `
            <div class="col" name=" ${producto.name}" category="${producto.category}" material="${producto.material}" system="${producto.system}">
                <a href="#" link-filter>
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

    if (results.innerHTML === '') {
        results.innerHTML = `<div no-results style="display: flex">Ningun resultado</div>`
    } else results.innerHTML += `<div no-results>Ningun resultado</div>`
}
contentProducts();

// const elemento = document.querySelector('#products [name*="Virginia"]');

const filtrar = () => {

    // console.log(search_filter.value);

    const text = search_filter.value.toLowerCase();

    console.log('texto',text)


    for (let producto of productos) {
        let name = producto.name.toLowerCase();

        if (name.indexOf(text) !== -1) {
            document.querySelector(`#products-filter [name*='${producto.name}']`).classList.remove('d-none');
            console.log('alguno tiene')
        }
        else {
            document.querySelector(`#products-filter [name*='${producto.name}']`).classList.add('d-none');
            console.log('nintuno tiene')
        }
    }

    const all_product = document.querySelectorAll('#products-filter [name]').length;
    console.log('all_producta',all_product)
    const d_none_product = document.querySelectorAll('#products-filter [name].d-none').length;
    console.log('d_none_product',d_none_product)

    if (all_product === d_none_product) {
        document.querySelector(`#products-filter > [no-results]`).style.display = 'flex';
    }
    else {
         document.querySelector(`#products-filter > [no-results]`).style.display = 'none';
    }

   
}
search_filter.addEventListener('keyup', filtrar);
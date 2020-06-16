// Product data
const productos = [
    // {name: '', text: '', category: '', material: '', system: '', image:''},
    {
        name: 'Natural',
        text: 'Text Natural',
        category: 'Modern, category Natural, otra',
        material: 'veneer, Material Natural',
        system: ' System Natural',
        image: 'https://stosacucine20.imgix.net/en/immagini_cucine/modern-kitchens-natural-1567.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1553160074&q=85&w=450'
    },
    {
        name: 'Infinity',
        text: 'Text Infinito',
        category: 'Modern, category Infinito',
        material: 'laminate, pet, Material Infinito',
        system: ' System Infinito',
        image: 'https://stosacucine10.imgix.net/en/immagini_cucine/modern-kitchens-aleve-3726.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1570715209&q=85&w=450'
    },
    {
        name: 'Metropolis',
        text: 'Text Metropolis',
        category: 'Modern, Category Metropolis',
        material: 'laminate, pet, Material Metropolis',
        system: ' System Metropolis',
        image: 'https://stosacucine30.imgix.net/en/immagini_cucine/modern-kitchens-metropolis-1568.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1553160941&q=85&w=450'
    },
    {
        name: 'Tosca',
        text: 'Text Tosca',
        category: 'Classic, category Tosca',
        material: 'Material Tosca',
        system: ' System Tosca',
        image: 'https://stosacucine30.imgix.net/en/immagini_cucine/modern-kitchens-aliant-1581.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1553163229&q=85&w=450'
    },
    {
        name: 'Virginia',
        text: 'Text Virginia',
        category: 'Classic, category Virginia, otra',
        material: 'Material Virginia',
        system: ' System Virginia',
        image: 'https://stosacucine10.imgix.net/en/immagini_cucine/modern-kitchens-aleve-3726.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1570715209&q=85&w=450'
    },
    {
        name: 'Frame',
        text: 'Text Frame',
        category: 'Modern, otra',
        material: 'lacquer',
        system: 'flat groove wint pocket, Recessed groove',
        image: 'https://stosacucine20.imgix.net/en/immagini_cucine/modern-kitchens-rewind-1641.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1553174088&q=85&w=450'
    },
    {
        name: 'Saturnia',
        text: 'Text Saturnia',
        category: 'Classic',
        material: 'wood',
        system: 'handle',
        image: 'https://stosacucine30.imgix.net/en/immagini_cucine/classic-kitchens-saturnia-1824.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=.0&fp-y=.0&h=300&ixlib=php-2.3.0&mdate=1553702457&q=85&w=450'
    },
]
// End - Product data



// Categorys data
const select_categorys = [
    'Modern',
    'Classic',
    'category Natural',
    'category Infinito',
    'category Tosca',
    'category Virginia',
    'Category Metropolis',
    'otra',
    'Null'
]
const content_category = document.querySelector('select[select-filter="categorys"]');



// Materials data
const select_materials = [
    'laminate',
    'veneer',
    'pet',
    'lacquer',
    'wood',
    'Material Natural',
    'Material Infinito',
    'Material Tosca',
    'Material Virginia',
]
const content_material = document.querySelector('select[select-filter="materials"]');



// Systems data
const select_systems = [
    'flat groove wint pocket',
    'Recessed groove',
    'handle',
    'System Natural',
    'System Infinito',
    'System Tosca',
    'System Virginia',
] 
const content_system = document.querySelector('select[select-filter="systems"]');




// Select categorys List
const contentCategory = () => {

    if (content_category !== null){

        content_category.innerHTML = '<option value="*">All</option>';        // content_category.innerHTML = '';

        for (let category of select_categorys) {
            // console.log(category)

            content_category.innerHTML += `
                <option value="${category}">${category}</option>
            `
        }
    }
}
contentCategory();




// Select Materials List
const contentMaterial = () => {


    if (content_material !== null) {

        content_material.innerHTML = '<option value="*">Materials</option>';

        for (let material of select_materials) {
            // console.log(material)

            content_material.innerHTML += `
                <option value="${material}">${material}</option>
            `
        }
    }
}
contentMaterial();




// Select Systems List
const contentSystem = () => {

    if (content_system !== null){

        content_system.innerHTML = '<option value="*">Opening systems</option>';

        for (let system of select_systems) {
            // console.log(system)

            content_system.innerHTML += `
                <option value="${system}">${system}</option>
            `
        }
    }
}
contentSystem();




// Product content
const contentProducts = () => {

    // Container to list products
    const results = document.querySelector('#products-filter');

    results.innerHTML = '';

    // Dynamic structure of products
    for (let producto of productos) {
        let name = producto.name.toLowerCase();

        results.innerHTML += `
            <div class="col-filter" name=" ${producto.name}" categorys="${producto.category}" materials="${producto.material}" systems="${producto.system}">
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
                        <h4>${producto.name}</h4>
                        <span class="discover">
                            discover
                        </span>
                    </div>
                </a>
            </div>
        `
    }

    if (results.innerHTML === '') {
        results.innerHTML = `<div no-results style="display: flex">Any result... </div>`
    } else results.innerHTML += `<div no-results>Any result...</div>`
}
contentProducts();




// Input Search
const search_filter = document.querySelector('#search-filter');

const filtrar = () => {

    // Button
    const button_filter = document.querySelector('[btn-filter]');

    // Search length
    if (button_filter !== null) {
        if (document.getElementById('search-filter').value.length <= 0) {
            button_filter.setAttribute('deactivate','')
        }
        else button_filter.removeAttribute('deactivate');
    }


    const text = search_filter.value.toLowerCase();

    // console.log('texto',text)

    // Hide or show
    for (let producto of productos) {
        let name = producto.name.toLowerCase();

        if (name.indexOf(text) !== -1) {
            document.querySelector(`#products-filter [name*='${producto.name}']`).classList.remove('d-none');
        }
        else {
            document.querySelector(`#products-filter [name*='${producto.name}']`).classList.add('d-none');
        }
    }

    // Check if there are products displayed
    const all_product = document.querySelectorAll('#products-filter [name]').length;
    // console.log('all_producta',all_product)
    const d_none_product = document.querySelectorAll('#products-filter [name][class*="d-none"]').length;
    // console.log('d_none_product',d_none_product)

    // If you don't find results
    if (all_product === d_none_product) {
        document.querySelector(`#products-filter > [no-results]`).style.display = 'flex';
    }
    else {
         document.querySelector(`#products-filter > [no-results]`).style.display = 'none';
    }
}
// Always active when writing to the input field
if (search_filter !== null) {
    search_filter.addEventListener('keyup', filtrar);
}





// Filter by select
function selectFilter (argument) {
    // Filter the selects

    // Button
    const button_filter = document.querySelector('[btn-filter]');

    // Validate if select exists 
    const select_argument = document.querySelector(`[select-filter="${argument}"]`);

    if (select_argument !== null) {

        // Select value
        const value_select = select_argument.value;

        // Select initial state (all)
        let normal_select = false;

        // Botton on / off and select status
        // if (value_select === "*" && argument !== 'categorys') {
        if (value_select === "*") {
            normal_select = true;
            if (button_filter !== null) {
                button_filter.setAttribute('deactivate','')
            }
        }else if( button_filter !== null){
            button_filter.removeAttribute('deactivate');
        }


        // List of all products (select)
        const list_all_product_select = document.querySelectorAll(`[${argument}]`)

        list_all_product_select.forEach( function(product_select) {

            let value_attribute = product_select.getAttribute(argument)
            // console.log(value_attribute)

            if (value_attribute.indexOf(value_select) !== -1 || normal_select) {

                product_select.classList.remove(`d-none-${argument}`)
            }
            else {
                product_select.classList.add(`d-none-${argument}`)
            }

        });


        // Check if there are products displayed
        const all_product = document.querySelectorAll('#products-filter [name]').length;
        const d_none_product = document.querySelectorAll('#products-filter [name][class*="d-none"]').length;

        // If you don't find results
        if (all_product === d_none_product) {
            document.querySelector(`#products-filter > [no-results]`).style.display = 'flex';
        }
        else {
            document.querySelector(`#products-filter > [no-results]`).style.display = 'none';
        }

    }
}
// The filter by selection is initialized in categories, to show initially
selectFilter('categorys')



// Clean filters by botton
function resetFilters() {

    //Clean select
    const id_search_filter = document.getElementById('search-filter');
    if (id_search_filter !== null) {
        id_search_filter.value ='';
    }

    // Reset input (search)
    const products_filter_none = document.querySelectorAll(`#products-filter .d-none`);
    products_filter_none.forEach(key => key.classList.remove('d-none'))


    // Reset select
    const reset_select_filter = document.querySelectorAll('[select-filter]');
    reset_select_filter.forEach( key => key.value = "*");

    // Reset all products
    document.querySelectorAll('#products-filter .col-filter').forEach( key => key.classList.remove('d-none-categorys','d-none-materials', 'd-none-systems'));

    // Button
    const button_filter = document.querySelector('[btn-filter]');
    if (button_filter !== null) {
        button_filter.setAttribute('deactivate','')
    }

    // Reset the container of no results
    document.querySelector(`#products-filter > [no-results]`).style.display = 'none';

}
resetFilters()

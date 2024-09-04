import fetchApi from '../../utils/fetch';
import printImages from '../../utils/printImages';
import './Header.css'

export default function Header(app){
    const header = document.createElement('header')
    header.className = 'header';

    const logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = 'https://static.vecteezy.com/system/resources/previews/021/495/992/non_2x/pinterest-social-media-logo-icon-free-png.png';

    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Buscar...';

    searchInput.addEventListener('keydown', async (e) => {
        if(e.key == 'Enter'){
            const word = e.target.value;
            const response = await fetchApi(word);
            const photos = response.data.results;
            printImages(photos);
        }
    })

    const searchButton = document.createElement('button');
    searchButton.className = 'search-button';
    searchButton.textContent = '🔎';

    searchButton.addEventListener('click', async () => {
        const word = searchInput.value;
        const response = await fetchApi(word);
        const photos = response.data.results;
        printImages(photos);
    })

    searchContainer.append(searchInput, searchButton);

    header.append(logo, searchContainer);

    app.appendChild(header)
}
import fetchApi from '../../utils/fetch';
import printImages from '../../utils/printImages';
import './Home.css';


export default async function Home(app){
    let pageNum = 1

    const homeContainer = document.createElement('section')
    homeContainer.className = 'home-container';

    const response = await fetchApi();
    const photos = response.data.results

    const pageContainer = document.createElement('div');
    pageContainer.className = 'page-container';
 
    const buttonLeft = document.createElement('button');
    buttonLeft.className = 'page-buttons';
    buttonLeft.textContent = '⬅️'

    const buttonRight = document.createElement('button');
    buttonRight.className = 'page-buttons';
    buttonRight.textContent = '➡️'

    const page = document.createElement('span');
    page.className = 'page';
    page.textContent = pageNum;

    pageContainer.append(buttonLeft, page, buttonRight)

    app.append(homeContainer, pageContainer)


    buttonLeft.addEventListener('click', async () => {
        if(pageNum > 1){
            pageNum--
            const word = document.querySelector('.search-input').value;
            const response = await fetchApi(word, pageNum)
            const photos = response.data.results;
    
            printImages(photos)
    
            page.textContent = pageNum
        }
    })

    buttonRight.addEventListener('click', async () => {
        pageNum++
        const word = document.querySelector('.search-input').value;
        const response = await fetchApi(word, pageNum)
        const photos = response.data.results;

        printImages(photos)

        page.textContent = pageNum
    })

    printImages(photos)
}
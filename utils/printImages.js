import ImageCard from "../components/ImageCard/ImageCard";

export default function printImages(photos){
    const container = document.querySelector('.home-container')
    container.innerHTML = ''

    photos.forEach(photo => {
        ImageCard(container, photo)
    });
}
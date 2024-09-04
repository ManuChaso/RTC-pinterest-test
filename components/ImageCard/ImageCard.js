import './ImageCard.css';
import image from '../../asstes/heart.png'

export default function ImageCard(parent, image){
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const photo = document.createElement('img');
    photo.className = 'photo';
    photo.src = image.urls.small;

    const infoContainer = document.createElement('div');
    infoContainer.className = 'info-container';


    const profilePic = document.createElement('img');
    profilePic.className = 'profile-pic';
    profilePic.src = image.user.profile_image.medium;

    const likes = document.createElement('p');
    likes.className = 'likes';
    likes.textContent = image.likes;
    likes.style.backgroundImage = image.src

    const imageLink = document.createElement('a');
    imageLink.className = 'image-link';
    imageLink.href = image.links.html;
    imageLink.textContent = 'Visitar';
    imageLink.target = '_blank'

    infoContainer.append(likes, profilePic, imageLink)

    imageContainer.append(photo, infoContainer)

    parent.appendChild(imageContainer)
}

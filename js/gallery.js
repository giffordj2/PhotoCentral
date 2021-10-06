function createPhotoCard(photographer){  //Function to create a Photo Card to add to the Gallery on the Photographers page after new profile is created

    //Declare parts of the Photo Card
    var photoCard = document.createElement('div');
    var profilePic = document.createElement('img');
    var photoInfo = document.createElement('div');
    var name = document.createElement('h3');
    var eventLabel = document.createElement('h5');
    var eventList = document.createElement('ul');
    var location = document.createElement('p');

    //add html classes to Photo card parts
    photoCard.classList.add('photoCard');
    photoInfo.classList.add('photoInfo');
    eventList.classList.add('eventTypes');

    profilePic.src = photographer.profilePic;
    profilePic.alt = 'Profile picture for ' + photographer.fullName;

    
    



}
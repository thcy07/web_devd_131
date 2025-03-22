let index = 0; // Start from the first image
displayImages(); // Call the function to start the slideshow

function displayImages() {
  const images = document.getElementsByClassName("image");
  
  // Remove the 'active' class from all images
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  // Increment index and reset if it exceeds the number of images
  index++;
  if (index > images.length) {
    index = 1;
  }

  // Add the 'active' class to the current image
  images[index - 1].classList.add("active");

  // Automatically switch to the next image after 2 seconds
  setTimeout(displayImages, 2000);
}

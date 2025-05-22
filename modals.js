


  //=================================================================
  // Open the modal
  //=================================================================
  let modalActivate=document.getElementsByClassName("modalActivate");
  for (i = 0; i < modalActivate.length; i++) {
     modalActivate[i].addEventListener("click", function(e) {
     const interestingElement=e.target.getAttribute("data-modalID");
     document.getElementById(interestingElement).style.display = "block";
     let slides = document.querySelectorAll("#" + interestingElement + " .mySlides");
     slides[0].classList.add("currentSlide");
 
    });
  };
 
  //=================================================================
  // Next slide
  //=================================================================
  let nextActivate=document.getElementsByClassName("next");
  for (i = 0; i < nextActivate.length; i++) {
    nextActivate[i].addEventListener("click", function(e) {
     const currentModal = e.target.getAttribute("data-modalID");
     let slides = document.querySelectorAll("#" + currentModal + " .mySlides");
     let nextSlide = 0;
     for (i = 0; i < slides.length; i++) {
       if (slides[i].classList.contains("currentSlide")) {
         slides[i].classList.remove("currentSlide");
         nextSlide = i+1;
       }
     }
     if (nextSlide > slides.length-1) {
           nextSlide = 0;
     }
     slides[nextSlide].classList.add("currentSlide");
    });
  };

  //=================================================================
  // Previous slide
  //=================================================================
  let previousActivate=document.getElementsByClassName("prev");
  for (i = 0; i < previousActivate.length; i++) {
    previousActivate[i].addEventListener("click", function(e) {
     const currentModal = e.target.getAttribute("data-modalID");
     let slides = document.querySelectorAll("#" + currentModal + " .mySlides");
     let prevSlide = 0;
     for (i = 0; i < slides.length; i++) {
       if (slides[i].classList.contains("currentSlide")) {
         slides[i].classList.remove("currentSlide");
         prevSlide = i-1;
       }
     }
     if (prevSlide === -1) {
      prevSlide = slides.length-1;
     }
     slides[prevSlide].classList.add("currentSlide");
    });
  };
 
  //=================================================================
  // Close modal
  //=================================================================

  let modalClose=document.getElementsByClassName("closeModal");
  for (i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener("click", function(e) {
      const currentModal = e.target.getAttribute("data-modalID");
      document.getElementById(currentModal).style.display = "none";
    });
  };
 


 

// JavaScript Document
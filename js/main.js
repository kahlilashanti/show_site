
document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  // let body = document.getElementById('body');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }

  // wrapper.addEventListener('mousemove', function(e){
  wrapper.addEventListener('hover', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});

//modal code
$(document).ready(function(){

  var modal = document.getElementById('razorModal');


  var closeBtn = document.getElementsByClassName('closeBtn')[0];


  document.getElementById("razorSynopsis").addEventListener("click", function(){
    openModal();
  })


  //listen for close click
  closeBtn.addEventListener('click', closeModal);

  //listen for outside click
  window.addEventListener('click', clickOutside);

  //function to open modal
  function openModal(){
    modal.style.display = "block";
  }

  //function to close modal
  function closeModal(){
    modal.style.display = "none";
  }

  //function to close modal on window click
  function clickOutside(e){
    if(e.target == modal){
      modal.style.display = "none";
    }
  }

// openModal();

});

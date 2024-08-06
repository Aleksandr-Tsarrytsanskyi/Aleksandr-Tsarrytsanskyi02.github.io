document.addEventListener("DOMContentLoaded", init);

function init() {
  const linksHover = document.querySelectorAll(".link_hover");
  const counter = document.querySelectorAll(".counter");
  const slider3 = document.querySelectorAll(" .counter");
  const slideRight = document.querySelectorAll("#main .slide_right");
  const slideLeft = document.querySelectorAll("#main .slide_left");
  const slideEyeglassesLeft = document.querySelectorAll(".slide_eyeglasses_left");
  const slideEyeglassesRight = document.querySelectorAll(".slide_eyeglasses_right");
  console.log(slideEyeglassesLeft, slideEyeglassesRight);
  const brands = document.querySelector("#topmenu .first_child");
  const hoverBrands = document.querySelector("#topmenu .hover_brands");
  const table = document.querySelector("#topmenu .hover_brands .table");
  const search = document.querySelector("#bg_search");
  const linkSearch = document.querySelector("#topmenu .search");
  const closesearch = document.querySelector("#close_search");
  linkSearch.addEventListener("click", function() {
    search.style.display ="block"
  })
  closesearch.addEventListener("click", function() {
    search.style.display ="none"
  })
  brands.addEventListener("mouseover", function() {
    hoverBrands.style.display = "block"
  })
  hoverBrands.addEventListener("mouseout", function() {
    hoverBrands.style.display = "none"
  })
  for (let link of linksHover) {
    link.addEventListener("mouseover", function (event) {
      let events = event.target;
      events.classList.add("show_active");
    });
  }
  for (let link of linksHover) {
    link.addEventListener("mouseout", function (event) {
      let events = event.target;
      events.classList.remove("show_active");
      events.classList.add("hide_active");
    });
  }



  function changeWpipperSlider() {
    let count = 1;
    slideRight[0].addEventListener("click", function (event) {
      count++;
      console.log(count);
      slideLeft[0].disabled = false;
      console.log(event.target.disabled);
      counter[0].innerHTML = count;
      if (count == 5) {
        event.target.disabled = true;
      }
    });
    slideLeft[0].addEventListener("click", function (event) {
      count--;
      console.log(count);
      slideRight[0].disabled = false;
      counter[0].innerHTML = count;
      if (count == 1) {
        event.target.disabled = true;
      } 
    });

    slideEyeglassesRight[0].addEventListener("click", function (event) {
      count++;
      console.log(count);
      slideEyeglassesLeft[0].disabled = false;
      console.log(event.target.disabled);
      counter[1].innerHTML = count;
      if (count == 3) {
        event.target.disabled = true;
      }
    });
    slideEyeglassesLeft[0].addEventListener("click", function (event) {
      count--;
      console.log(count);
      slideEyeglassesRight[0].disabled = false;
      counter[1].innerHTML = count;
      if (count == 1) {
        event.target.disabled = true;
      }
    });
  }
  changeWpipperSlider();
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 3500px)", ".slider-2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    navigation: {
      nextEl: ".slide_right",
      prevEl: ".slide_left",
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });

  resizableSwiper("(max-width: 3500px)", ".slider-3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    navigation: {
      nextEl: ".slide_eyeglasses_right",
      prevEl: ".slide_eyeglasses_left",
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });
  someFunc();
}

document.querySelectorAll(".nav-link").forEach((nav) => {
    console.log(nav);
  
    // Lắng nghe sự kiện onclick
    nav.onclick = () => {
      console.log("click");
      document.querySelector(".nav-link__active")
      .classList.remove("nav-link__active")
      // Thêm class cho thẻ được click
      nav.classList.add("nav-link__active");
    };
  });
  
const dropArea=document.getElementById("drag-area"),dragText=document.getElementById("drag-area-header"),input=document.getElementById("drag-area-input");function showFile(e){var r=e.type;if(["image/jpeg"].includes(r)){let t=new FileReader;t.onload=()=>{var e=t.result;let r=window.open("about:blank"),a=new Image;a.src=e,r.document.write(a.outerHTML)},t.readAsDataURL(e)}else dragText.textContent="Це не тип jpeg"}dropArea.onclick=()=>{input.click()},input.addEventListener("change",function(){var e=this.files[0];dropArea.classList.add("active"),showFile(e)}),dropArea.addEventListener("dragover",e=>{e.preventDefault(),dragText.textContent="Загружено фото товара"}),dropArea.addEventListener("dragleave",()=>{dragText.textContent="Загрузить фото товара"}),dropArea.addEventListener("drop",e=>{e.preventDefault(),showFile(e.dataTransfer.files[0])});const carouselSlide=document.querySelector('[slider-element="carousel-slide"]'),carouselIndicators=document.querySelector('[slider-element="carousel-indicators"]'),carouselInner=document.querySelector('[slider-element="carousel-inner"]'),carouselItemActive=document.querySelector('[slider-element="carousel-item-active"]'),carouselItem=document.querySelectorAll('[slider-element="carousel-item"]');function resize(){window.innerWidth<=991?(carouselSlide.className="carousel slide",carouselIndicators.className="carousel-indicators element_carousel-indicators prospects__carousel-indicators",carouselInner.className="carousel-inner",carouselItemActive.className="carousel-item active",carouselItem.forEach(e=>{e.className="carousel-item"})):(carouselSlide.className="",carouselIndicators.className="d-none",carouselInner.className="mt-3 p-3 row row-cols-1 row-cols-lg-4 g-5",carouselItemActive.className="col",carouselItem.forEach(e=>{e.className="col"}))}resize(),window.addEventListener("resize",resize,!0);
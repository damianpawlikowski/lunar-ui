<template>
  <div class="carousel slide" id="carousel" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        class="active"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="0"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="../assets/carousel/placeholder.png"
          alt="Slide 1"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../assets/carousel/placeholder.png"
          alt="Slide 2"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .carousel {
    height: 370px;
  }
}

.carousel-inner,
.carousel-item,
.carousel-item > img {
  height: 100%;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 25%);
  border-color: rgba(155, 155, 155, 0.2);
}
</style>

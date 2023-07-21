<script>
export default {};
</script>

<template>
  <footer class="footer bg-dark text-white">
    <div class="container-fluid d-flex flex-column align-items-center">
      <div class="row">
        <div class="col-12 my-3 fw-bold title">COCKTAIL made with Boolean</div>
      </div>
      <div class="row">
        <div class="col-12 mt-3">
          <ul
            class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row"
          >
            <li class="list-inline-item">
              <a href="" class="text-light text-decoration-none">Privacy</a>
            </li>
            <li class="list-inline-item">|</li>
            <li class="list-inline-item">
              <a href="" class="text-light text-decoration-none"
                >Accessibilità</a
              >
            </li>
            <li class="list-inline-item">|</li>
            <li class="list-inline-item">
              <a href="" class="text-light text-decoration-none"
                >Cookie policy</a
              >
            </li>
            <li class="list-inline-item">|</li>
            <li class="list-inline-item">
              <router-link :to="{ name: 'contacts' }" class="navbar-brand"
                >Contact</router-link
              >
            </li>
            <li class="list-inline-item">|</li>
            <li class="list-inline-item">
              <a href="" class="text-light text-decoration-none">Credits</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-3 copyright">
          <span class="d-inline-block"
            >&copy; Copyright Bolean tutti i diritti riservati</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      newsletter: true,
      showSuccess: false,
      isSending: false,
      showError: false,
      errors: {},
    };
  },

  methods: {
    sendLead() {
      axios
        .post(this.store.baseUrl + "api/leads", {
          name: this.name,
          email: this.email,
          message: this.message,
          newsletter: this.newsletter,
        })
        .then((response) => {
          this.isSending = false;

          if (response.data.success) {
            this.showSuccess = true;
            this.resetForm();
          } else {
            this.showError = true;
            this.errors = response.data.errors;
          }
        });
    },

    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.newsletter = true;
    },
  },
};
</script>

<template>
  <div
    v-if="showSuccess"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    Messaggio inviato con successo
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      @click="showSuccess = false"
    ></button>
  </div>

  <div
    v-if="showError"
    class="alert alert-danger alert-dismissible fade show"
    role="alert"
  >
    Errore nell'invio del messaggio
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      @click="showError = false"
    ></button>
  </div>

  <div class="p-0 m-0 d-flex content">
    <div class="left w-50">
      <img
        src="https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt=""
      />
    </div>
    <div class="align-self-center w-50 p-5">
      <h1 class="text-center text-light">Contattaci</h1>
      <form @submit.prevent="sendLead" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input
            type="email"
            class="form-control"
            id="name"
            placeholder="Inserisci il tuo nome"
            v-model="name"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            class="form-control"
            id="email"
            placeholder="Inserisci la tua email"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Messaggio</label>
          <textarea
            class="form-control"
            id="message"
            rows="5"
            placeholder="Lasciaci un feedback!"
            v-model="message"
          ></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="newsletter" />
          <label class="form-check-label" for="newsletter"
            >Iscriviti alla nostra newsletter</label
          >
        </div>
        <button type="submit" class="btn">Invia</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 126px);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

label {
  color: white;
}

.left {
  border: 6px solid black;
}

.btn {
  background-color: white;
}
</style>

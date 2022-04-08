<template>
  <!-- <div
    class="container mx-auto grid grid-cols-3"
    v-for="product in products"
    :key="product.id"
  >
    <div>{{ product.product_name }}</div>
    <div>{{ product.image_url }}</div>
    <div>{{ product.description }}</div>
  </div> -->
  <form>
    <div class="form-control">
      <label for="user-name">Product Name</label>
      <input id="user-name" name="user-name" type="text" />
    </div>
    <div class="form-control">
      <label for="age">Product description</label>
      <input id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="age">Image url</label>
      <input id="age" name="age" type="number" />
    </div>
    <div class="flex justify-around">
      <button>Add product</button>
      <button>Remove Product</button>
      <button>Update Product</button>
      <button>Create Product</button>
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
<script>


export default {
  
};
</script>

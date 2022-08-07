<template>
  <div>
    <div
      class="product"
      v-for="edge in $static.products.edges"
      :key="edge.node.id"
    >
      <!-- <div class="img flex"><g-image :src="edge.node.image" alt="" /></div> -->
      <p class="color_black p_title">{{ edge.node.title }}</p>
      <p class="p_desc color_grey">{{ edge.node.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBlock",
};
</script>
<static-query>

query Products {
  products: allProducts(order: ASC) {
    edges {
      node {
       title
       description
      }
    }
  }
}
</static-query>


<style>
</style>
<script lang="ts">
    import {DishInfoStore} from "../store/storeData"
    import { CartStore } from "../store/storeData";
  
    const handleSubmit = (item) => {
       CartStore.update((items) => [...items, item]);
        window.alert("Added to cart successfully!");
    };

</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-5 md:mr-18 mx-3">
  {#each $DishInfoStore as item}
    <div class="card bg-white rounded-lg overflow-hidden shadow-md text-left transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:text-gray-900 hover:border-gray-900 border-2">
    <form on:submit|preventDefault={() => handleSubmit(item)} action=""> 
      <img src="{item.image}" alt="" class="w-full h-32 object-cover">
      <div class="px-6 py-4">
        
        <div class="font-bold text-xl mb-2 text-center">{item.dishname}</div>
        
        <p class="text-red-700 text-base">${item.price}</p>
        
        <p class="text-gray-700 font-bold text-sm">{item.description}</p>
        
        <button  class="bg-gray-900 text-white px-3 py-1 mt-3 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
          <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
          Add to cart
        </button>
      </div>
    </form>
    </div>
  {/each}
</div>



  
 
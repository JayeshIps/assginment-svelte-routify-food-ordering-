<script lang="ts">
    import {DishInfoStore} from "../store/storeData"
    import { CartStore } from "../store/storeData"
    import { url } from '@sveltech/routify';
    import 'toastr/build/toastr.min.css';
    import toastr from 'toastr';
  
    const handleSubmit = (item) => {
       CartStore.update((items) => [...items,  {cartId:item.cartId,dishId:item.dishId,dishname:item.dishname, price:item.price,description:item.description,quantity:1, image:item.image}]);
       toastr.success('Add To Cart Successfully');
    };


</script>


<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-5 md:mr-18 mx-3">
  {#each $DishInfoStore as item}
    <div  class="card bg-white rounded-lg overflow-hidden shadow-md text-left transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:text-gray-900 hover:border-gray-900 border-2">
    <form on:submit|preventDefault={() => handleSubmit(item)} action=""> 
      <img src="{item.image}" alt="" class="w-full h-52 md:h-80 object-cover">
      <div class="px-6 py-4">
        
        <div class="font-bold text-xl mb-2 text-center">{item.dishname}</div>
        
        <p class="text-red-700 text-base">${item.price}</p>
        
        <p class="text-gray-700 font-bold text-sm">{item.description}</p>
        
        <button type="submit"  class="bg-gray-700 text-white px-3 py-1 mt-3 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
          <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
          Add to cart
        </button>
        
        <a href="{$url('../dishdetails/?id=' + item.dishId )}" class="bg-gray-700 text-white px-3 py-1 mt-3 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
          <i class="fa-solid fa-circle-info"></i>
          View Details
        
      </div>
    </form>
    </div>
  {/each}
</div>



  
 
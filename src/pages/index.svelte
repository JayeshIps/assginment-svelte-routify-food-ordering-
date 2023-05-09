<script lang="ts">
    import {DishInfoStore,CartStore} from "../store/storeData"
    import { url } from '@sveltech/routify';
    import 'toastr/build/toastr.min.css';
    import toastr from 'toastr';
    import { onMount } from "svelte";
    import * as _ from 'lodash'
    toastr.options.timeOut = 1000;
  
  const handleSubmit = (item) => {
  const existingItemIndex = $CartStore.findIndex((cartItem) => cartItem.dishId === item.dishId);
  if (existingItemIndex !== -1) {
      
    CartStore.update((items) => {
      const updatedItems = [...items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      };
      toastr.success('Qunatity is increase');
      return updatedItems;
    });
  } else {
    
    let cartid = 1;
    let lastdish = _.last($CartStore);
    if (lastdish) {
      cartid = lastdish.cartId + 1;
    }
    CartStore.update((items) => [
      ...items,
      {
        cartId: cartid,
        dishId: item.dishId,
        dishname: item.dishname,
        price: item.price,
        description: item.description,
        quantity: 1,
        image: item.image,
      },
    ]);
    toastr.success('Add To Cart Successfully');
  }
};

const images = [
      "../image/slide3.avif",
      "../image/slide2.avif",
      "../image/slide5.avif",
    ];
    
    let currentIndex = 0;
    const interval = 2000;
    
    function next() {
      currentIndex = (currentIndex + 1) % images.length;
    }
    
    onMount(() => {
      const intervalId = setInterval(() => {
        next();
      }, interval);
      
      return () => clearInterval(intervalId);
    });


</script>


<div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img class="max-h-96 w-full  opacity-150 mb-2  " src="{images[currentIndex]}" alt="image description">	
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-5 md:mr-18 mx-3">
  {#each $DishInfoStore as item}
    <div  class="card bg-white rounded-lg overflow-hidden shadow-md text-left transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:text-gray-900 hover:border-gray-900 border-2">
    <form on:submit|preventDefault={() => handleSubmit(item)} action=""> 
      <img src="{item.image}" alt="" class="w-full h-52 md:h-80 object-cover">
      <div class="px-6 py-4">
        
        <div class="font-bold text-xl mb-2 text-center">{item.dishname}</div>
        
        <p class="text-red-700 font-bold text-base">&#8377; {item.price}</p>
        
        <p class="text-black-700 text-sm">{item.description}</p>
        
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



  
 
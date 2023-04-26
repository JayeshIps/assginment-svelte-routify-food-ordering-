<script lang="ts">
  import { CartStore } from "../store/storeData";
  import * as _ from 'lodash';
    
  function increment(id:number){
    CartStore.update(quantity=>{
      let updateQuantity= _.find(quantity,{dishId:id})
      
      updateQuantity.quantity++;
      return quantity;
    })
  }
  
  function decrement(id:number){
  CartStore.update(quantity=>{
    let updateQuantity= _.find(quantity,{dishId:id})
    
    if (updateQuantity.quantity > 1) {
      updateQuantity.quantity--;
    }
    
    return quantity;
  })
}

  
  </script>
  
  <div class="w-full p-6">
    {#if $CartStore.length === 0}
      <p>Your cart is empty</p>
    {:else}
      <table class="w-full border-4 border-gray-400 rounded-2xl overflow-hidden text-left">
        <thead class="bg-gray-900 text-white font-bold">
          <tr>
            <th class="p-2">Image</th>
            <th class="p-2">Dish Name</th>
            <th class="p-2">Description</th>
            <th class="p-2">Quantity</th>
            <th class="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {#each $CartStore as item}
            <tr class="transition duration-400 hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
              <td data-th="Image" class="p-2"><img src="{item.image}" alt="" style="width: 100px;"></td>
              <td data-th="Name" class="p-2">{item.dishname}</td>
              <td data-th="Description" class="p-2">{item.description}</td>
              <td data-th="Quantity" class="p-2">
                <button class="bg-gray-300 px-2 py-1 rounded-md mr-2" on:click={() => decrement(item.dishId)}>−</button>
                {item.quantity}
                <button class="bg-gray-300 px-2 py-1 rounded-md ml-2" on:click={() => increment(item.dishId)}>+</button>
              </td>
              <td data-th="Price" class="p-2">${item.price * item.quantity}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </div>
  
  <style>
    @media (max-width: 640px) {
	table {
		overflow-x: auto;
		white-space: nowrap;
		width: 100%;
	}
	thead{
		display: none;
	}
	td::before {
		content: attr(data-th);
		float: left;
		margin-right: 20px;
		color: black;
		font-weight: bold;
	}
	td {
		display: block;
		text-align: right;
	}
	
}
</style>
<script lang="ts">
  import { CartStore } from "../store/storeData";
  import * as _ from 'lodash';
  import 'toastr/build/toastr.min.css';
  import toastr from 'toastr';
    
  function increment(id:number){
    CartStore.update(quantity=>{
      let updateQuantity= _.find(quantity,{cartId:id})
      updateQuantity.quantity++;
      return quantity;
    })
  }
  
  function decrement(id:number){
  CartStore.update(quantity=>{
    let updateQuantity= _.find(quantity,{cartId:id})
    if (updateQuantity.quantity > 1) {
      updateQuantity.quantity--;
    }
    return quantity;
  })
}

const cartDeleteItem = (id: number) => {
  CartStore.update(cartitem => {
    const index = cartitem.findIndex(x => x.cartId === id);
    if (index !== -1) {
      cartitem.splice(index, 1);
    }
    return cartitem;
  });
  toastr.error('Deleted Successfully'); 
};



  
  </script>
  
  <div class="w-full p-6 hidden md:block">
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
            <th class="p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {#each $CartStore as item}
            <tr class="transition duration-400 hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
              <td data-th="Image" class="p-2"><img src="{item.image}" alt="" style="width: 100px;"></td>
              <td data-th="Name" class="p-2">{item.dishname}</td>
              <td data-th="Description" class="p-2">{item.description}</td>
              <td data-th="Quantity" class="p-2">
                <button class="bg-blue-600 px-2 py-1 rounded-md mr-2 text-white font-extrabold" on:click={() => decrement(item.cartId)}>−</button>
                {item.quantity}
                <button class="bg-blue-600 px-2 py-1 rounded-md ml-2 text-white font-extrabold" on:click={() => increment(item.cartId)}>+</button>
              </td>
              <td data-th="Price" class="p-2">${item.price * item.quantity}</td>
              
              <td data-th="Delete" class="p-2">
                <button type="button" on:click = {()=>cartDeleteItem(item.cartId)} class="bg-gray-300 hover:bg-red-500 px-2 py-1 rounded-md ml-2"><i class="fa-solid fa-trash-can"></i></button>
              </td>
              
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </div>

  <div class="px-2 py-1 md:hidden flex-row">
    {#each $CartStore as item}
      <div class="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <img class="w-full h-48 object-cover" src="{item.image}" alt="{item.dishname}">
        <div class="p-4">
          <h2 class="font-bold text-lg mb-2">{item.dishname}</h2>
          <p class="text-gray-700 text-base mb-4">{item.description}</p>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <button class="bg-blue-600 px-2 py-1 rounded-md mr-2 text-white font-extrabold" on:click={() => decrement(item.cartId)}>−</button>
              <p class="text-gray-700 font-bold text-lg">{item.quantity}</p>
              <button class="bg-blue-600 px-2 py-1 rounded-md ml-2 text-white font-extrabold" on:click={() => increment(item.cartId)}>+</button>
            </div>
            <p class="font-bold text-lg">${item.price * item.quantity}</p>
          </div>
          <button type="button" on:click={() => cartDeleteItem(item.cartId)} class="bg-gray-300 hover:bg-red-500 px-2 py-1 rounded-md mt-4"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </div>
      </div>
    {/each}
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
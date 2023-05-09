<script lang="ts">
  import { OrderStore } from "../store/storeData";
  import { DishInfoStore } from "../store/storeData";
  import * as _ from 'lodash';
  import 'toastr/build/toastr.min.css';
  import toastr from 'toastr';
  toastr.options.timeOut = 1000;

  $:dishData=$DishInfoStore;
  $:orderData=$OrderStore;

  function getDishData(id)
  {
    return _.find(dishData,n=>n.dishId==id)
  }
 const OrderDeleteItem = (id: number) => {
  OrderStore.update(cartitem => {
    const index = cartitem.findIndex(x => x.orderId === id);
    if (index !== -1) {
      cartitem.splice(index, 1);
      toastr.error('Deleted Successfully');
    }
    return cartitem;
  });
};
</script>
{#if orderData.length === 0}
  <div class="flex justify-center">
   <img src="../image/order.jpg" class="w-96" alt="" srcset="">
  </div>
{:else}
<div class="w-full p-6 hidden md:block">
      <table class="w-full border-4 border-gray-400 rounded-2xl overflow-hidden text-left">
        <thead class="bg-yellow-500 text-black font-bold">
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
          {#each orderData as item}
            <tr class="transition duration-400 hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
              <td data-th="Image" class="p-2"><img src="{getDishData(item.dishId).image}" alt="" style="width: 100px;"></td>
              <td data-th="Name" class="p-2">{getDishData(item.dishId).dishname}</td>
              <td data-th="Description" class="p-2 overflow-hidden ">{getDishData(item.dishId).description}</td>
              <td data-th="Quantity" class="p-2">
               
                {item.quantity}
                
              </td>
              <td data-th="Price" class="p-2 font-bold text-lg text-black-700">&#8377;{getDishData(item.dishId).price * item.quantity}</td>
              
              <td data-th="Delete" class="p-2">
                <button type="button" on:click={()=>{OrderDeleteItem(item.orderId)}} class="bg-gray-300 hover:bg-red-500 px-2 py-1 rounded-md ml-2"><i class="fa-solid fa-trash-can"></i></button>
              </td>
              
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    
  <div class="px-2 py-1 md:hidden flex-row">
    {#each orderData as item}
      <div class="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <img class="w-full h-64 md:h-96 object-cover" src="{getDishData(item.dishId).image}" alt="">
        <div class="p-4">
          <h2 class="font-bold text-lg mb-2">{getDishData(item.dishId).dishname}</h2>
          <div >
            <p class="font-bold">Description:</p>
            <p class="text-gray-700 text-base overflow-hidden mb-4">{getDishData(item.dishId).description}</p>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <p class="text-gray-700 font-bold">Quantity:</p>
              <p class="text-gray-700 font-bold text-lg">{item.quantity}</p>
            </div>
          </div>
          <div class="flex items-center">
            <p class="text-gray-700 font-bold">Price: </p>
            <p class="font-bold text-lg text-red-700">&#8377;{getDishData(item.dishId).price * item.quantity}</p>
          </div>
          <button type="button" on:click={()=>{OrderDeleteItem(item.orderId)}} class="bg-gray-300 hover:bg-red-500 px-2 py-1 rounded-md mt-4"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </div>
      </div>
    {/each}
  </div>
{/if}
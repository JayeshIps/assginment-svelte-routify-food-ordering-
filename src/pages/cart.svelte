<script lang="ts">
    import { CartStore } from "../store/storeData";
    import { DishInfoStore ,OrderStore} from "../store/storeData";
    import * as _ from 'lodash';
    import 'toastr/build/toastr.min.css';
    import toastr from 'toastr';
  
    $:dishData=$DishInfoStore;
    $:cartData=$CartStore;
    $:orderData=$OrderStore;
  
    function getDishData(id)
    {
      return _.find(dishData,n=>n.dishId==id)
    }
      
    function increment(id:number){
      CartStore.update(quantity=>{
        let updateQuantity= _.find(quantity,{cartId:id})
        updateQuantity.quantity++;
        return quantity;
      })
    }
  
  const orderSubmit = (id) => {
     let orderid=1
      let lastdish=_.last(orderData)
      if(lastdish){
        orderid=lastdish.orderId+1;
      }
      let dish=_.find(cartData,x=>x.cartId==id)
      OrderStore.update((items) => [...items,  {orderId:orderid,dishId:dish.dishId,quantity:dish.quantity}]);
       toastr.success('Order Placed Successfully');
    };
    
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
        toastr.error('Deleted Successfully');
      }
      return cartitem;
    });
  };
  
  
  </script>
    
  
  <div class="w-full p-6 hidden md:block">
      {#if $CartStore.length === 0}
        <p>Your cart is empty</p>
      {:else}
        <table class="w-full border-4 border-gray-400 rounded-2xl overflow-hidden text-left">
          <thead class="bg-yellow-500 text-black font-bold">
            <tr>
              <th class="p-2">Image</th>
              <th class="p-2">Dish Name</th>
              <th class="p-2">Description</th>
              <th class="p-2">Quantity</th>
              <th class="p-2">Price</th>
              <th class="p-2">ConfirmOrder</th>
              <th class="p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {#each cartData as item}
              <tr class="transition duration-400 hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
                <td data-th="Image" class="p-2"><img src="{getDishData(item.dishId).image}" alt="" style="width: 100px;"></td>
                <td data-th="Name" class="p-2">{getDishData(item.dishId).dishname}</td>
                <td data-th="Description" class="p-2 overflow-hidden ">{getDishData(item.dishId).description}</td>
                <td data-th="Quantity" class="p-2">
                  <div class="flex">
                    <button class="bg-gray-700 px-2 py-1 rounded-md mr-2 text-white font-extrabold" on:click={() => decrement(item.cartId)}>−</button>
                    <span> {item.quantity}</span>
                    <button class="bg-gray-700 px-2 py-1 rounded-md ml-2 text-white font-extrabold" on:click={() => increment(item.cartId)}>+</button>
                  </div>
                </td>
                <td data-th="Price" class="p-2 font-bold text-lg text-black-700">&#8377;{getDishData(item.dishId).price * item.quantity}</td>
                
                <td data-th="PlaceOrder" class="p-2">
                    <button type="button" on:click = {()=>orderSubmit(item.cartId)} class="bg-gray-700  hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">PlaceOrder</button>
                </td>
  
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
          <img class="w-full h-64 md:h-96 object-cover" src="{getDishData(item.dishId).image}" alt="">
          <div class="p-4">
            <h2 class="font-bold text-lg mb-2">{getDishData(item.dishId).dishname}</h2>
            <p class="text-gray-700 text-base overflow-hidden mb-4">{getDishData(item.dishId).description}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <button class="bg-gray-700  px-2 py-1 rounded-md mr-2 text-white font-extrabold" on:click={() => decrement(item.cartId)}>−</button>
                <p class="text-gray-700 font-bold text-lg">{item.quantity}</p>
                <button class="bg-gray-700  px-2 py-1 rounded-md ml-2 text-white font-extrabold" on:click={() => increment(item.cartId)}>+</button>
              </div>
              <p class="font-bold text-lg text-red-700">&#8377;{getDishData(item.dishId).price * item.quantity}</p>
            </div>
          </div>
          <div class="md:mb-2">
            <button type="button" on:click = {()=>orderSubmit(item.cartId)} class="bg-gray-700  hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">PlaceOrder</button>
            <button type="button" on:click={() => cartDeleteItem(item.cartId)} class="bg-gray-700 hover:bg-red-500 px-4 py-2 text-white font-bold rounded"><i class="fa-solid fa-trash-can"></i> Delete</button>
          </div>
        </div>
      {/each}
    </div>
    
    <style>
  </style>
<script lang="ts">
import { DishInfoStore,CartStore } from "../store/storeData";
import * as _ from 'lodash';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

let url = window.location.search;
let urlData = new URLSearchParams(url)
let id = urlData.get('id');


let dishDetail=_.find($DishInfoStore,x=>x.dishId==id)

let count = 1;

    function increment(){
        count++
    }

    function decrement(){
        (count<=1)?'':count--;
    }

    const handleCart = () => {
        let cartId = 1;
        let cartdata = $CartStore;
        if (cartdata.length > 0) {
            let data=_.last(cartdata)
            cartId = data.cartId+1
        }
        CartStore.update((items) => [...items,  {cartId:cartId,dishId:dishDetail.dishId,dishname:dishDetail.dishname,price:dishDetail.price,description:dishDetail.description,quantity:count, image:dishDetail.image}]);
        toastr.success('Add To Cart Successfully');
    };
</script>
  
<div class="w-full p-6">
    <div class="mx-3 p-3 border-4 border-yellow-400 rounded-2xl justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-gray-900">
        
        <form >
            <div class="grid md:grid-cols-2 gap-3 ">
                
                <div class="">
                    <img class="object-cover h-64 md:h-96 w-full rounded-lg shadow-xl dark:shadow-gray-80" src="{dishDetail.image}" alt="">
                </div>

                <div class="p-6 flex ">
                    <div class="h-48">
                        <div class="text-3xl font-bold py-1">
                            {dishDetail.dishname}
                        </div>
                        <div class="text-lg py-1">
                            {dishDetail.description}
                        </div>
    
                        <div class="flex py-1">
                            <div class="text-xl font-bold">
                                Quantity: &nbsp;
                                <button type="button" class="bg-blue-600 px-2 py-1 rounded-md mr-2 text-white font-extrabold" on:click={() => decrement()}>−</button>
                                 {count}
                               <button type="button" class="bg-blue-600 px-2 py-1 rounded-md mr-2 text-white font-extrabold" on:click={() => increment()}>+</button>
                            </div>
                        </div>

                        
                        <div class="flex text-xl font-bold ">
                            Price:
                            <td data-th="Price" class="p-2">${dishDetail.price * count}</td>
                        </div>
                        <button on:click={handleCart} type="button" class="bg-gray-900 text-white px-3 py-1 mt-3 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
                            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            Add to cart
                        </button>
                    </div>
                
                </div>
            </div>
        </form>
    </div>
</div>







  


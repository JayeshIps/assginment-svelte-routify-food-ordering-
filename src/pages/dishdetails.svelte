<script lang="ts">
import { DishInfoStore } from "../store/storeData";
import * as _ from 'lodash';

let url = window.location.search;
let urlData = new URLSearchParams(url)
let id = urlData.get('id');


let dishDetail=_.find($DishInfoStore,x=>x.dishId==id)

</script>
  
<!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-5 md:mr-18 mx-3 max-w-full" >
    
    <div class="flex flex-col items-start justify-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-6">
        <img class=" w-full h-full rounded-lg md:w-58 md:h-auto md:rounded-none md:rounded-l-lg mb-6 md:mb-0" src="{dishDetail.image}" alt="{dishDetail.dishname}">
        <div class="flex flex-col justify-between p-12 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dishDetail.dishname}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Descripation:{dishDetail.description}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${dishDetail.price}</p>
        </div>
    </div>
   
</div>
 -->

 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto md:mx-5 md:mr-18 w-full md:w-3/4">
    <div class="card bg-white rounded-lg overflow-hidden shadow-md text-left transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:text-gray-900 hover:border-gray-900 border-2 mx-auto" style="width: 350px;">
        <img src="{dishDetail.image}" alt="" class="w-full h-56 object-cover">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">{dishDetail.dishname}</div>
            <p class="text-red-700 text-base">${dishDetail.price}</p>
            <p class="text-gray-700 font-bold text-sm">{dishDetail.description}</p>
            <button  class="bg-gray-900 text-white px-3 py-1 mt-3 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                Add to cart
            </button>
        </div>
    </div>
</div>







  


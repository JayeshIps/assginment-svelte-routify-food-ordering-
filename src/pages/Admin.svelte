<script lang="ts">
  import {FeedBackStore } from '../store/storeData'
  import classnames from "vest/classnames";
  import Button from "../components/button.svelte";
  import Inputarea from "../components/inputarea.svelte";
  import Inputtext from "../components/inputtext.svelte";
  import Inputnumber from '../components/inputnumber.svelte';
  import suite from '../Validation/productSuite';
  import {DishInfoStore} from "../store/storeData"

  let formState : {dishname? : string, price? : number, description? : string, image? : any} = {}; 
  let result = suite.get();
  const handleChange = (name) => {    
    result = suite(formState,name)
  };
  $: cn = classnames(result, {
      warning: "warning",
      invalid: "error",
      valid: "success"
  }); 

  $: disabled = !result.isValid();

  const addDish = (event): void => {
  event.preventDefault();

  const newDish = {
    dishname: formState.dishname,
    price: formState.price,
    description: formState.description,
    image: event.target.image.files[0],};
  
  DishInfoStore.update(dishes => [...dishes, newDish]);
  disabled=true;
  event.target.reset();
  suite.reset();
};


    
</script>

<div class="bg-white rounded-lg shadow border border-gray-300 md:mx-5 md:mr-18 mx-3">
    <div class="px-6 py-6 lg:px-8">
          <form on:submit|preventDefault={addDish}  class="space-y-6"  action="#">

            <Inputtext
                name="dishname"
                label="dishname"
                placeholder="Enter DishName"
                bind:value={formState.dishname}
                onInput={handleChange}
                messages={result.getErrors("dishname")}
                validityclass={cn("dishname")}
            />

            <Inputnumber
                name="price"
                label="price"
                placeholder="Enter the Price"
                bind:value={formState.price}
                onInput={handleChange}
                messages={[... result.getErrors("price")]}
                validityclass={cn("price")}
            />

            <Inputarea
                name="description"
                label="Message"
                placeholder="message"
                bind:value={formState.description}
                onInput={handleChange}
                messages={[... result.getErrors("description")]}
                validityclass={cn("description")}
            />
            
              <div>
                <label for="image" class="block text-black-700 text-sm font-bold mb-2 ml-5">Image:</label><br>
                <input type="file" id="image" name="image" accept="image/*" required>
              </div>
              

              <div class="flex items-center rounded-b">
                  <div class="ml-auto">
                    <Button {disabled}>Submit</Button>
                      <button type="reset"  class="mx-1 text-black-500 bg-white hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-black-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Reset</button>
                  </div>
              </div>
          </form>
    </div>
</div>
    
    <div class="container mx-auto">
        <table class='w-full rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
        <thead class="bg-gray-900">
          <tr class="text-white text-left">
                        <th class="font-semibold text-sm py-5"> Name </th>
                        <th class="font-semibold text-sm py-5 "> Email </th>
                        <th class="font-semibold text-sm py-5 "> Massages </th>
                        
                    </tr>
                </thead>
    
                <tbody class="divide-y divide-gray-200">
                  {#each $FeedBackStore as item}
                  <tr>
                      <td data-th="Names" class="px-6 py-4">
                          <div class="flex items-center space-x-3">
                               <div>
                                  <p>{item.name} </p>   
                              </div>
                          </div>
                      </td>
      
                      <td data-th="Email" class="px-6 py-4">
                          <p class="text-gray-500 text-sm font-semibold tracking-wide"> {item.email} </p>
                      </td>
                      
                      <td data-th="Message" class="px-6 py-4"> 
                        <p class="text-gray-500 text-sm font-semibold tracking-wide">{item.Message}</p>
                      </td>
                    </tr>
                  {/each}
                  </tbody>
            </table>
       
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
        td div{
            float: right;
        }
    }
    
       
      </style>
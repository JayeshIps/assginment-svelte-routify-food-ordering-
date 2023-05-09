<script lang="ts">
 import * as _ from 'lodash';
  import classnames from "vest/classnames";
  import Button from "../components/button.svelte";
  import Inputarea from "../components/inputarea.svelte";
  import Inputtext from "../components/inputtext.svelte";
  import Inputnumber from '../components/inputnumber.svelte';
  import suite from '../Validation/productSuite';
  import 'toastr/build/toastr.min.css';
  import toastr from 'toastr';
  import {DishInfoStore} from "../store/storeData"
  import { ImageStore } from '../store/imagestore';
  import Inputfile from '../components/inputfile.svelte';
  

  toastr.options.timeOut = 1000;
  

  let formState : {dishname? : string, price? : number, description? : string, image? : string} = {}; 
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

  let EditformState : {dishname? : string, price? : number, description? : string, image? : string} = {}; 
  const EdithandleChange = (name) => {    
    result = suite(EditformState,name)
  };

  let adddish:boolean=false;
  function toggleAddDishes(){
  adddish = !adddish
  if(adddish){
      document.body.classList.add('overflow-hidden');
  }
  else{
      document.body.classList.remove('overflow-hidden');
  }
}

const addDish = (event): void => {
  event.preventDefault();
  let Dishid = 1;
  let dishData = $DishInfoStore;
    if(_.last(dishData))
    {
      Dishid=_.last(dishData).dishId+1;
    }
    const newDish = {
      dishId: Dishid,
      dishname: formState.dishname,
      price: formState.price,
      description: formState.description,
      image: $ImageStore
    };
  
    DishInfoStore.update(dishes => [...dishes, newDish]);
    disabled=true;
    event.target.reset();
    suite.reset();
    toastr.success('Item Added Successfully');
  
    toggleAddDishes();
    ImageStore.set('')
};

const clearform=()=>{
  
  formState.dishname=null;
  formState.price=undefined;
  formState.description=null;
  formState.image=null;
}

//start delete function
let delDishName:string = null;
let delid: number | undefined;
let delname:string = null;


function findDeleteDish(id: number, name: string): void {
  delid = id;
  delname = name;
  delDishName = delname;
  formState.dishname='';
}

const deleteDish = (): void => {
  
  const deleteName: string = formState.dishname;

  DishInfoStore.update(dishes => {
    const index = _.findIndex(dishes, x => x.dishId === delid);
   if (index !== -1) {
      if (deleteName === delDishName) {
        _.remove(dishes, x => x.dishId === delid);
        formState.dishname = '';
        toggleDeleteDish();
        toastr.error('Item Deleted Successfully');
      } 
    }
    return dishes;
  });
};

// toggle form function

let deletedish:boolean=false;
function toggleDeleteDish(){
  deletedish = !deletedish

  if(deletedish){
      document.body.classList.add('overflow-hidden');
      
  }
  else{
      document.body.classList.remove('overflow-hidden');
  }
}
//End delete function


// Start Edit function
let editdish:boolean=false;
function toggleEditDish(){
  editdish = !editdish
  if(editdish){
      document.body.classList.add('overflow-hidden');
  }
  else{
      document.body.classList.remove('overflow-hidden');
  }
}

let editDishName='';
function updateDish(id:number,name:string)
{
     editDishName=name
  
     DishInfoStore.update(dishes=>{
      let UpdateItem = _.find(dishes,n=>n.dishId===id);
      EditId = id
      EditformState.dishname=UpdateItem.dishname;
      EditformState.price=UpdateItem.price;
      EditformState.description=UpdateItem.description;
      EditformState.image=UpdateItem.image;
      EdithandleChange(event)
      return dishes
     });
}

let EditId: any = '';

function saveDish() {
  DishInfoStore.update(dishes => {
    let SaveItem = _.find(dishes, n => n.dishId === EditId); 
    if(SaveItem)
    {
      SaveItem.dishname = EditformState.dishname;
      SaveItem.price = EditformState.price;
      SaveItem.description = EditformState.description;
      if(SaveItem.image == EditformState.image){
        SaveItem.image = EditformState.image;
      }
      else{
        SaveItem.image = $ImageStore;
        ImageStore.set('');
      }
      toastr.success('Item Updated Successfully');
    }
    return dishes;
  });

  toggleEditDish();
  EditformState.dishname=null;
  EditformState.price=undefined;
  EditformState.description=null;
  EditformState.image=null;
}
// End Edit function
</script>
<div class="w-full p-6 ">
  <div class="flex justify-start w-full">
    <button class=" bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"on:click|preventDefault={()=>{toggleAddDishes();}}>
      Add Products
    </button>
  </div>
</div>

<div class="w-full p-6 hidden md:block">
  {#if $DishInfoStore.length === 0}
    <p>Your cart is empty</p>
  {:else}
    <table class="w-full   rounded-2xl text-left">
      <thead class="bg-yellow-500 text-black font-bold">
        <tr>
          <th class="p-2">Image</th>
          <th class="p-2">Dish Name</th>
          <th class="p-2">Description</th>
          <th class="p-2">Price</th>
          <th class="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {#each $DishInfoStore as item}
          <tr class=" transition duration-400 hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
            <td data-th="Image" class="p-2"><img src="{item.image}" class="h-24" alt="" style="width: 100px;"></td>
            <td data-th="Name" class="p-2">{item.dishname}</td>
            <td data-th="Description" class="p-2 overflow-hidden ">{item.description}</td>
            <td data-th="Price" class="p-2 text-black-900 font-bold">&#8377;{item.price}</td>
            <td data-th="Action" class="p-2">
              <div class="group relative dropdown  cursor-pointer font-bold text-base  tracking-wide">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span class="relative text-black font-bold hover:text-blue-400 px-4 md:px-0 md:ml-8 md:mr-8">...</span>
                <div class="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul class="top-0 w-48 bg-white shadow px-2 ">
                    <li><button type="button" on:click = {()=>{toggleEditDish(); updateDish(item.dishId,item.dishname); }}  class="w-28 mb-2 text-black bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><i class="fa fa-pencil-square mx-2" aria-hidden="true"></i>Edit</button></li>
                    <li><button type="button" on:click = {()=>{toggleDeleteDish(); findDeleteDish(item.dishId,item.dishname);}}  class="w-28 mb-2 text-black bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><i class="fa-solid fa-trash-can mx-2"></i>Delete</button><li>
                  </ul>
                </div>
              </div>
            </td>
            
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<div class="w-full p-6 md:hidden flex-row ">
  {#if $DishInfoStore.length === 0}
    <p>Your cart is empty</p>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 hover:border-gray-900">
      {#each $DishInfoStore as item}
        <div class="bg-white rounded-lg shadow-md flex flex-col">
          <img src="{item.image}" alt="" class="h-64 md:h-96 object-cover">
          <div class="p-4 flex-grow">
            <h2 class="text-xl font-bold mb-2">{item.dishname}</h2>
            <p class="text-gray-700 text-base mb-4 overflow-hidden">{item.description}</p>
            <div class="flex items-center justify-between">
              <span class="font-bold text-xl text-red-700 font-bold ">&#8377;{item.price}</span>
            </div>
            <div class="group relative dropdown  cursor-pointer font-bold text-base  tracking-wide">
             <button type="button" on:click = {()=>{toggleEditDish(); updateDish(item.dishId,item.dishname); }}  class="mb-4 mt-4  mb-2 text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit</button>
             <button type="button" on:click = {()=>{toggleDeleteDish(); findDeleteDish(item.dishId,item.dishname);}}  class="mb-4 mt-4  mb-2 text-white bg-red-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Delete</button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>




<!-- start Add Dishes Form -->
<div class="{adddish ? ' ':'hidden'} z-[+2] h-screen top-0 left-0 bottom-0 right-0  fixed  backdrop-blur-md">
  <div class="pt-10  ml-auto mr-auto w-full h-full max-w-md md:h-auto ">
          <form on:submit|preventDefault={addDish}  class="bg-white shadow-md p-2 rounded border-8 border-double pt-10 hover:border-yellow-500 w-full"  action="#">
            <p class="text-black font-bold text-2xl pb-5 ml-2">Add New Dishes</p>
            <Inputtext
                name="dishname"
                label="Dishname"
                placeholder="Enter DishName"
                bind:value={formState.dishname}
                onInput={handleChange}
                messages={result.getErrors("dishname")}
                validityclass={cn("dishname")}
            />

            <Inputnumber
                name="price"
                label="Price"
                placeholder="Enter the Price"
                bind:value={formState.price}
                onInput={handleChange}
                messages={[... result.getErrors("price")]}
                validityclass={cn("price")}
            />

            <Inputarea
                name="description"
                label="Description"
                placeholder="Enter Description"
                bind:value={formState.description}
                onInput={handleChange}
                messages={[... result.getErrors("description")]}
                validityclass={cn("description")}
            />
            
            <Inputfile
              name="image"
              label="image"
              bind:value={formState.image}
              onInput={handleChange}
              messages={[... result.getErrors("image")]}
              validityclass={cn("image")}
            />

              <div class="flex items-center rounded-b">
                  <div class="ml-auto">
                    <Button {disabled}>Submit</Button>
                      <button type="reset" on:click={()=>{toggleAddDishes();clearform();}}  class="mb-2 mx-1 text-black-500 bg-white hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-black-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                  </div>
              </div>
          </form>
    </div>
</div>
<!-- end Add Dishes Form -->

<!-- Start Delete From -->
  <div class="{deletedish ? ' ':'hidden'} z-[+2] w-full h-screen top-0 left-0 bottom-0 right-0 fixed  backdrop-blur-md">
    
    <div class="pt-10   h-full ml-auto mr-auto w-full max-w-md md:h-auto  ">
      
      <form class="space-y-6 bg-white shadow-md rounded border-8 border-double p-2 hover:border-yellow-500"  action="#">
        <p class="text-black font-bold text-2xl py-5 ml-5">Delete - {delDishName} </p>
        <div class="mb-4">
          <Inputtext
          name="dishname"
          label="Name"
          placeholder="Enter DishName"
          bind:value={formState.dishname}
          onInput={handleChange}
          messages={result.getErrors("dishname")}
          validityclass={cn("dishname")}
          />
        </div>
       
        <div class="flex justify-end gap-2 pb-5 ">
          <button type="submit" on:click|preventDefault={()=>{deleteDish();}} class="btn bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
          <button type="button" on:click={toggleDeleteDish}   class="btn bg-white text-black  py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" >Cancel</button>
        </div>
      </form>
    </div>
  </div>
  <!-- End Delete From -->

  
  <!-- Start Edit From -->
  <div class="{editdish ? ' ':'hidden'} z-[+2]  h-screen top-0 left-0 bottom-0 right-0  fixed  backdrop-blur-md">
    <div class="pt-10  ml-auto mr-auto w-full h-full max-w-md md:h-auto  ">
        <form on:submit|preventDefault={saveDish}  class="bg-white shadow-md rounded border-8 p-2 border-double pt-10  w-full hover:border-yellow-500 "   action="#">
          <p class="text-black font-bold text-2xl pb-5 ml-5">Edit Product-{editDishName}</p>
          
          <Inputtext
              name="dishname"
              label="dishname"
              placeholder="Enter DishName"
              bind:value={EditformState.dishname}
              onInput={EdithandleChange}
              messages={result.getErrors("dishname")}
              validityclass={cn("dishname")}
           />

          <Inputnumber
              name="price"
              label="price"
              placeholder="Enter the Price"
              bind:value={EditformState.price}
              onInput={EdithandleChange}
              messages={[... result.getErrors("price")]}
              validityclass={cn("price")}
          />

          <Inputarea
              name="description"
              label="Description"
              placeholder="Enter Description"
              bind:value={EditformState.description}
              onInput={EdithandleChange}
              messages={[... result.getErrors("description")]}
              validityclass={cn("description")}
          />
          
            <Inputfile
              name="image"
              label="image"
              bind:value={EditformState.image}
              onInput={EdithandleChange}
              messages={[... result.getErrors("image")]}
              validityclass={cn("image")}
            />
            
            <div class="flex justify-end gap-2 pb-5 ">
              <!-- svelte-ignore missing-declaration -->
              <Button {disabled}>Update</Button>
              
              <button type="button" on:click={()=>{toggleEditDish();}}  class="mb-4 mt-4 mx-1 mb-2 text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Cancel</button>
            </div>
        </form>
  </div>
</div>
<!-- End Edit From -->

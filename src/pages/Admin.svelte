<script lang="ts">
  import * as _ from 'lodash';
  import {FeedBackStore } from '../store/storeData'
  import classnames from "vest/classnames";
  import Button from "../components/button.svelte";
  import Inputarea from "../components/inputarea.svelte";
  import Inputtext from "../components/inputtext.svelte";
  import Inputnumber from '../components/inputnumber.svelte';
  import suite from '../Validation/productSuite';
  import 'toastr/build/toastr.min.css';
  import toastr from 'toastr';
  import {DishInfoStore} from "../store/storeData"

  toastr.options.timeOut = 1500;
  

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

  let EditformState : {dishname? : string, price? : number, description? : string, image? : any} = {}; 
  const EdithandleChange = (name) => {    
    result = suite(EditformState,name)
  };
  

  const addDish = (event): void => {
  event.preventDefault();
  let Dishid = 1;
  let dishData = $DishInfoStore;
  if (dishData.length > 0) {
    Dishid = dishData[dishData.length - 1].dishId + 1;
  }
  const newDish = {
    dishId:Dishid,
    dishname: formState.dishname,
    price: formState.price,
    description: formState.description,
    image: event.target.image.files[0],};
  
  DishInfoStore.update(dishes => [...dishes, newDish]);
  disabled=true;
  event.target.reset();
  suite.reset();
  toastr.success('Item Added Successfully');
};

//start delete function
let delDishName = '';
let delid: number | undefined;
let delname = '';

function findDeleteDish(id: number, name: string): void {
  delid = id;
  delname = name;
  delDishName = delname;
}

const deleteDish = (): void => {
  
  const deleteName: string = formState.dishname;

  DishInfoStore.update(dishes => {
    const index = _.findIndex(dishes, x => x.dishId === delid);

    console.log(index);
    if (index !== -1) {
      if (deleteName === delDishName) {
        _.remove(dishes, x => x.dishId === delid);
        formState.dishname = '';
        toggleDeleteDish();
      } else {
        formState.dishname="Dish name is Not Matched"
      }
      toastr.dangar('Item Deleted Successfully');
    }
    return dishes;
  });
};

// toggle form function

let deletedish:boolean=false;
function toggleDeleteDish(){
  deletedish = !deletedish
}
//End delete function


// Start Edit function
let editdish:boolean=false;
function toggleEditDish(){
  editdish = !editdish
}

// --------------
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
      return dishes
     });
}

let EditId: any = '';

function saveDish() {
  DishInfoStore.update(dishes => {
    let SaveItem = _.find(dishes, n => n.dishId === EditId); 
    console.log(SaveItem);
    
    if(SaveItem)
    {
      SaveItem.dishname = EditformState.dishname;
      SaveItem.price = EditformState.price;
      SaveItem.description = EditformState.description;
      SaveItem.image = EditformState.image;
    }
    return dishes;
  });
  toggleEditDish();
  toastr.success('Item Updated Successfully');
  EditformState.dishname='';
  EditformState.price=undefined;
  EditformState.description='';
  EditformState.image='';
}
// -------------------


// End Edit function

</script>

<div class=" ">
  <div class="pt-10  ml-auto mr-auto w-full h-full max-w-md md:h-auto  ">
          <form on:submit|preventDefault={addDish}  class="bg-white shadow-md rounded border-8 border-double pt-10  w-full"  action="#">
            <p class="text-black font-bold text-2xl pb-5 ml-0">Add New Dishes</p>
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

<div class="w-full p-6">
  {#if $DishInfoStore.length === 0}
    <p>Your cart is empty</p>
  {:else}
    <table class="w-full border-4 border-gray-400 rounded-2xl overflow-hidden text-left">
      <thead class="bg-gray-900 text-white font-bold">
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
          <tr class="transition duration-400 hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
            <td data-th="Image" class="p-2"><img src="{item.image}" alt="" style="width: 100px;"></td>
            <td data-th="Name" class="p-2">{item.dishname}</td>
            <td data-th="Description" class="p-2">{item.description}</td>
            <td data-th="Price" class="p-2">${item.price}</td>
            <td data-th="Action" class="p-2">
              <button type="button" on:click = {()=>{toggleEditDish(); updateDish(item.dishId,item.dishname); }} class="bg-gray-300 px-2 py-1 rounded-md ml-2" ><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
              <button type="button" on:click = {()=>{toggleDeleteDish(); findDeleteDish(item.dishId,item.dishname);}} class="bg-gray-300 px-2 py-1 rounded-md ml-2"><i class="fa-solid fa-trash-can"></i></button>
            </td>
            
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<div class="w-full p-6">
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



      
<!-- Start Delete From -->
  <div class="{deletedish ? ' ':'hidden'} z-[+2] w-full h-screen top-0 left-0 bottom-0 right-0 fixed  backdrop-blur-md">
    
    <div class="pt-10   h-full ml-auto mr-auto w-full max-w-md md:h-auto  ">
      
      <form class="space-y-6 bg-white shadow-md rounded border-8 border-double" action="#">
        <p class="text-black font-bold text-2xl py-5 ml-5">Delete -{delDishName} </p>
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
            <button type="button" on:click|preventDefault={()=>{toggleDeleteDish();}}   class="btn bg-white text-black font-italic py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" >Cancel</button>
        </div>
      </form>
    </div>
  </div>
  <!-- End Delete From -->

  <!-- Start Edit From -->
  
  <div class="{editdish ? ' ':'hidden'} z-[+2]  h-screen top-0 left-0 bottom-0 right-0  fixed  backdrop-blur-md">
    <div class="pt-10  ml-auto mr-auto w-full h-full max-w-md md:h-auto  ">
        <form on:submit|preventDefault={saveDish}  class="bg-white shadow-md rounded border-8 border-double pt-10  w-full"   action="#">
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
          
            <div>
              <label for="image" class="block text-black-700 text-sm font-bold mb-2 ml-5">Image:</label><br>
              <input type="file" id="image" name="image" accept="image/*" required>
            </div>
            

            <div class="flex justify-end gap-2 pb-5 ">
              <!-- svelte-ignore missing-declaration -->
              <Button {disabled}>Update</Button>
              <button on:click={()=>{toggleEditDish();}} class="btn bg-white text-black font-italic py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Cancel    
              </button>
            </div>
        </form>
  </div>
</div>

  <!-- End Edit From -->



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
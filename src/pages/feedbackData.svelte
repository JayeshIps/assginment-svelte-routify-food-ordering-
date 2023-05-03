<script lang="ts">
    import {FeedBackStore } from '../store/storeData'
</script>

<div class="w-full p-6 hidden md:block ">
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
                    <p class="text-gray-500 text-sm font-semibold tracking-wide overflow-hidden ">{item.Message}</p>
                  </td>
                </tr>
              {/each}
              </tbody>
        </table>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:hidden flex-row ">
    {#each $FeedBackStore as item}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <p class="text-gray-900 text-sm font-bold mb-2">Name:</p>
        <p class="text-gray-700 text-lg mb-4">{item.name}</p>
        <p class="text-gray-900 text-sm font-bold mb-2">Email:</p>
        <p class="text-gray-700 text-lg mb-4">{item.email}</p>
        <p class="text-gray-900 text-sm font-bold mb-2 overflow-hidden">Message:</p>
        <p class="text-gray-700 text-lg">{item.Message}</p>
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
    td div{
        float: right;
    }
  }
  </style>
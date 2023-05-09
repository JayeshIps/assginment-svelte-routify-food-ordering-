<script lang="ts">
import { goto } from "@sveltech/routify";
import { CartStore } from "./store/storeData";


let showMenu:boolean = false;
	function toggleNavbar() {
	  showMenu = !showMenu;
	}

	let totalItem=0;
    $:totalItem=Object.keys($CartStore).length;

	

</script>

<div on:mouseleave={()=>showMenu=false}>

	<div class="bg-yellow-500 fixed ml-0 mr-0 w-full md:flex z-[+1]">
		<div class="flex md:justify-around">
            <div class="flex items-center ml-0 p-5 mr-5">
				<img src="../image/logo1.png" alt="Food Adda logo" class="h-8 mr-2">
				<div>
				  <div class="text-black text-lg font-bold w-32">FOOD ADDA</div>
				  
				</div>
			  </div>
			  
           
            <div class="absolute right-6">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={toggleNavbar} class="flex md:hidden absolute right-8 mt-5">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={$goto('./cart')} class="p-1 text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>
						<span class="relative inline-block">
						  <i class="fa-solid fa-cart-shopping text-black text-2xl"></i>
						  <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{totalItem}</span>
						</span>
					  </a>
					<i class=" ml-6 fa-solid fa-bars text-black text-3xl"></i>
	            </div>
			</div>
			
		</div>
			
			<nav class="container px-1 py-1 mx-auto md:flex md:items-center flex md:justify-end">
				<div class="menu flex-col max-w-full mt-4 space-y-4 md:mb-0 mb-2
					md:flex 
					md:flex-row 
					md:space-y-0 
					md:items-center
					md:justify-between
					md:mt-0  {showMenu? 'flex md:flex': 'hidden'}">
						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- svelte-ignore missing-declaration -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="cursor-pointer">
                          <a on:click={$goto('/')} class="text-black font-bold  px-4 md:px-0 md:ml-8 md:mr-8" on:click={toggleNavbar} >Home</a>
						</div>
						
						<!-- <a on:click={$goto('./index')} class="text-black font-bold  px-4 md:px-0 md:ml-8 md:mr-8" on:click={toggleNavbar}>Home</a> -->
						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- svelte-ignore missing-declaration -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="cursor-pointer">
							<a on:click={$goto('./Orderview')} class="text-black font-bold  px-4 md:px-0 md:ml-8 md:mr-8" on:click={toggleNavbar} >View Order</a>
                        </div>

						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- svelte-ignore missing-declaration -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="cursor-pointer">
                           <a on:click={$goto('./Feedback')} class="text-black font-bold  px-4 md:px-0 md:ml-8 md:mr-8" on:click={toggleNavbar}>Feedback</a>
						</div>

						<!-- svelte-ignore a11y-missing-attribute -->
				
						<div class="group relative dropdown  cursor-pointer font-bold text-base  tracking-wide">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<span class="relative text-black font-bold  px-4 md:px-0 md:ml-8 md:mr-8">Admin</span>
							<div class="group-hover:block dropdown-menu absolute hidden h-auto">
								<ul class="top-0 w-48 bg-white shadow px-2 py-2">
									<!-- svelte-ignore a11y-missing-attribute -->
									<!-- svelte-ignore missing-declaration -->
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<li><a on:click={$goto('./Admin')} class="font-medium text-lg " on:click={toggleNavbar}>Products</a></li>
									<!-- svelte-ignore a11y-missing-attribute -->
									<!-- svelte-ignore missing-declaration -->
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<li><a on:click={$goto('./feedbackData')} class="font-medium text-lg " on:click={toggleNavbar}>Feedbacks</a><li>
								</ul>
							</div>
						</div>

						<li class=" md:block hidden md:mr-8 cursor-pointer">
							<!-- svelte-ignore a11y-missing-attribute -->
							<!-- svelte-ignore missing-declaration -->
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<a on:click={$goto('./cart')} class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>
							  <span class="relative inline-block">
								<i class="fa-solid fa-cart-shopping text-black text-2xl"></i>
								<span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{totalItem}</span>
							  </span>
							</a>
						</li>

				</div>
			</nav>
			
	</div>	
</div>


<div class="mb-24 container px-1 py-1 mx-auto md:flex  md:items-center"></div>
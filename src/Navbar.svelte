<script lang="ts">
import {Navigation} from "./enums/Nav"

let showMenu:boolean = false;
	function toggleNavbar() {
	  showMenu = !showMenu;
	}

</script>

<div>
	<div class="bg-yellow-500 fixed ml-0 mr-0 w-full md:flex z-[+1]">
		<div class="flex md:justify-around">
            <div class="ml-0 p-5 mr-5">
                <div class="text-black text-lg font-bold">FOODADDA</div>
				<div class="text-black text-lg font-bold">TagLine</div>
            </div>
           
            <div class="absolute right-6">
		        <!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={toggleNavbar} class="flex md:hidden absolute right-8 mt-2">
					<i class="fa-solid fa-bars text-white text-3xl"></i>
				</div> 
               
            </div>
			<nav class="container px-1 py-1 mx-auto md:flex   md:items-center">
				<div class=" menu flex-col max-w-full mt-4 space-y-4 
				md:flex 
				md:flex-row 
				md:space-y-0 
				md:items-center
				md:justify-between
				md:mt-0  {showMenu? 'flex md:flex': 'hidden'}">
			 <!-- svelte-ignore a11y-missing-attribute -->
			 <a href="{Navigation.Home}" class="text-black font-bold hover:text-blue-400 px-4 md:px-0 md:ml-8 md:mr-8" on:click={toggleNavbar}>Home</a>
			 <!-- svelte-ignore a11y-missing-attribute -->
			 <a href="{Navigation.ViewOrder}" class="text-black font-bold hover:text-blue-400 px-4 md:px-0 md:ml-8 md:mr-8"on:click={toggleNavbar} >View Order</a>
	
			 <!-- svelte-ignore a11y-missing-attribute -->
			 <a href="{Navigation.FeedBack}" class="text-black font-bold hover:text-blue-400 px-4 md:px-0 md:ml-8 md:mr-8" on:click={toggleNavbar}>Feedback</a>
	
			 <!-- svelte-ignore a11y-missing-attribute -->
			 <a href="{Navigation.Admin}" class="text-black font-bold hover:text-blue-400 px-4 md:px-0 md:ml-8 md:mr-8" on:click={toggleNavbar}>Admin</a>

			 <a href="{Navigation.Footer}" class="text-black font-bold hover:text-blue-400 px-4 md:px-0 md:ml-8 md:mr-8" on:click={toggleNavbar}>Footer</a>
	
			</div>
			</nav>
			
	    </div>	
	</div>
</div>
<div class="mb-24 container px-1 py-1 mx-auto md:flex  md:items-center"></div>
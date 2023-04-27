<script lang="ts">
    export let disabled;
</script>

<button disabled={disabled} type="submit" class="{disabled ? "opacity-40":""} mb-4 mt-4 mx-1 mb-2 text-white bg-blue-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
  <slot />    
</button>
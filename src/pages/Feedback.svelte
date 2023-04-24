<script lang="ts">
 import classnames from "vest/classnames";
  import Button from "../components/button.svelte";
  import Inputarea from "../components/inputarea.svelte";
  import Inputtext from "../components/inputtext.svelte";
  import suite from "../Validation/suite";
  import {FeedBackStore} from "../store/storeData"
  

  let formState : {username? : string, email? : string, message? : string} = {}; 
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

  const addFeedBack = (event):void => {
    event.preventDefault();
    const data={name:formState.username,email:formState.email,Message:formState.message}
    console.log(data);
    FeedBackStore.update(Feedbacks=>[...Feedbacks,data]);
    disabled=true;
    event.target.reset();
    suite.reset();
  };
</script>

<div class="grid md:grid-cols-2 md:gap:24 pt-6">
  <div class="bg-white rounded-lg shadow border border-gray-300 md:mx-5 md:mr-18 mx-3">
      <div class="px-6 py-6 lg:px-8">
            <form on:submit|preventDefault={addFeedBack} class="space-y-6"  action="#">

              <Inputtext
                  name="username"
                  label="username"
                  placeholder="Enter User Name"
                  bind:value={formState.username}
                  onInput={handleChange}
                  messages={result.getErrors("username")}
                  validityclass={cn("username")}
              />

              <Inputtext
                  name="email"
                  label="Email"
                  placeholder="adam.smith@gmail.com"
                  bind:value={formState.email}
                  onInput={handleChange}
                  messages={[... result.getErrors("email")]}
                  validityclass={cn("email")}
              />

              <Inputarea
                  name="message"
                  label="Message"
                  placeholder="message"
                  bind:value={formState.message}
                  onInput={handleChange}
                  messages={[... result.getErrors("message")]}
                  validityclass={cn("message")}
              />

                <div class="flex items-center rounded-b">
                    <div class="ml-auto">
                      <Button {disabled} >Submit</Button>
                        <button type="reset"  class="text-black-500 bg-white hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Reset</button>
                    </div>
                </div>
            </form>
      </div>
  </div>
  <div class="">
            
    <div class="mx-auto  h-64">
            <!-- svelte-ignore a11y-missing-attribute -->
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8779361948978!2d72.49672071400717!3d23.0282536218966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d5c5d6ba3f%3A0x2dac1a9a5d5f34be!2sIT%20Path%20Solutions!5e0!3m2!1sen!2sin!4v1680410435695!5m2!1sen!2sin"></iframe>
        
        <div class="pt-6 ">
          
          <div>
            <p class="text-black font-bold text-3xl">Reach Out to Us</p>
          </div>
          
          <div class="pt-4">
            <p class="text-black flex-cols-2 font-bold">Binori b square 1</p>
          </div>
          
          <div class="pt-1">
            <p class="text-black flex-cols-2 font-bold">[Iskon],[Ahmedabad]</p>
          </div>  
          
          <div class="pt-1">
            <p class="text-black flex-cols-2 font-bold">[Gujrat]-[380016]</p>
          </div>  

        </div> 
      
    </div>
</div>
</div> 

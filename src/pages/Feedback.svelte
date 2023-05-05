<script lang="ts">
 import classnames from "vest/classnames";
  import Button from "../components/button.svelte";
  import Inputarea from "../components/inputarea.svelte";
  import Inputtext from "../components/inputtext.svelte";
  import suite from "../Validation/feedbackSuite";
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

<div class="w-full  p-6 grid md:grid-cols-2 md:gap:12 gap-12">
  <div class="">
      
    <form on:submit|preventDefault={addFeedBack} class="bg-white shadow-md rounded border-8 border-double h-full  hover:border-yellow-500"  action="#">
      <img src="https://doi-ds.org/images/upload/contact_us.jpg" class="h-48 w-full " alt="" srcset="">
        
              <Inputtext
                  name="username"
                  label="Username"
                  placeholder="Enter user name"
                  bind:value={formState.username}
                  onInput={handleChange}
                  messages={result.getErrors("username")}
                  validityclass={cn("username")}
              />

              <Inputtext
                  name="email"
                  label="Email"
                  placeholder="Enter email"
                  bind:value={formState.email}
                  onInput={handleChange}
                  messages={[... result.getErrors("email")]}
                  validityclass={cn("email")}
              />

              <Inputarea
                  name="message"
                  label="Message"
                  placeholder="Enter message"
                  bind:value={formState.message}
                  onInput={handleChange}
                  messages={[... result.getErrors("message")]}
                  validityclass={cn("message")}
              />

                <div class="flex items-center rounded-b">
                    <div class="ml-auto">
                      <Button {disabled} >Submit</Button>
                        <button type="reset"  class="text-black-500 bg-white hover:bg-red-500 focus:ring-4 hover:bg-red-500 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                    </div>
                </div>
            </form>
      
     </div>
  
            
    <div class="mx-auto shadow-md rounded border-8 hover:border-yellow-500 border-double p-6 md:p-4 w-full h-full">
            <!-- svelte-ignore a11y-missing-attribute -->
        <iframe class="map w-full h-72 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8779361948978!2d72.49672071400717!3d23.0282536218966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d5c5d6ba3f%3A0x2dac1a9a5d5f34be!2sIT%20Path%20Solutions!5e0!3m2!1sen!2sin!4v1680410435695!5m2!1sen!2sin"></iframe>
        
        <div class="pt-2">
          
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

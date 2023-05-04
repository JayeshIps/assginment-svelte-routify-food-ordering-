import { writable } from 'svelte/store';
export const ImageStore = writable('');
export function handleFileChange(image){
    let reader = new FileReader();
    reader.readAsDataURL(image[0]);
    reader.addEventListener("load",function (){
        ImageStore.update(f => reader.result as string)
    });
}
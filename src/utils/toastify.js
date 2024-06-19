import { toast } from "react-toastify";


export const toastSuccess=(msg='Success')=>{
toast.success(msg,{
    position:"top-center",
    pauseOnHover:false,
    autoClose:3000
})
}
 export const toastError=(msg='ERROR')=>{
toast.error(msg,{
    position:"top-center",
    pauseOnHover:false,
    autoClose:3000
})
}
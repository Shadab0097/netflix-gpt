

  export const CheckValdation = (email , password , name)=>{
        const isemailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
        const ispasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
        const isnameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)
        if(!isemailValid) return "Email is not Valid"
        if(!ispasswordValid) return "Password is not Valid"
        if(!isnameValid) return "Please Enter Valid Name"


        return null;
}
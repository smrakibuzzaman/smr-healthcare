import { getAuth, signInWithPopup, GoogleAuthProvider,  signOut, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = ()=>{
const [user, setUser]= useState({});
const [isLoading, setIsLoading] = useState(true);
const auth = getAuth();


const signInUsingGoogle=()=> {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth, googleProvider)
  .then((result) => {
setUser(result);
  })
  .finally(()=>setIsLoading(false));
}

const logOut =()=> {
    signOut(auth)
    .then(()=>{})
    .finally(()=>setIsLoading(false));
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        } else {
         setUser({});
        }
        setIsLoading(false);
      });
      return ()=> unSubscribe();
},[])

return{
    user,
    signInUsingGoogle,
    logOut,
    isLoading
}
}

export default useFirebase;
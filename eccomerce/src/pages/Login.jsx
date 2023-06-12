import React from 'react'
import { Google } from '../assets/logo';
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../redux/bazarSlice';
import axios from 'axios';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const auth = getAuth();
  const provider = new GoogleAuthProvider()

  // ========= GOOGLE LOGIN ==============
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    // console.log(auth)
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        console.log(result.user)
        const user = result.user;
        dispatch(addUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        }));
        const userData1 = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
        };
        const userData = JSON.stringify(userData1)


        async function registro() {
          const URI1 = "http://localhost:8000/stilos/registroUsuario/";
          const URI2 = "http://localhost:8000/stilos/PersonaExiste/";
          await axios.post(URI1, { id: user.uid, email: user.email }).then((res) => {
            if (!res.data.msg) {
              console.log("error en el inicio de sesion")
            } else {
              console.log("Se ha registrado con exito")
            }
          })
          await axios.post(URI2, {id:user.uid}).then((res) => {
            if (res.data.exist) {
              navigate('/')
            }
            if (res.data.no) {
              navigate('/DatoPersonales')
            }
            if (res.data.error) {
              console.log(res.data.error)
            }
          })

        }

        // const registro = async () => {
        //   const URI = "http://localhost:5173/registroUsuario/'";
        //   await axios.post(URI, { userData }).then((res) => {
        //     if (!res.data.msg) {
        //       console.log("error en el inicio de sesion")
        //     } else {
        //       console.log(res.msg)
        //       console.log('Se ha registrado correctamente')
        //       navigate('/')
        //     }
        //   })
        // }


        setTimeout(() => {
          registro()
          navigate('/DatoPersonales')
        }, 1500)
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error)
      });
  };

  // ========== GOOGLE SING OUT o LOG OUT ===========
  const handleSingOut = () => {
    signOut(auth).then(() => {
      toast.success('Cerro sesión con éxito!')
      dispatch(removeUser())
    }).catch((error) => {
      console.log(error)
    })
  };
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
        <div onClick={handleGoogleLogin} className='flex gap-2 text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md items-center justify-center hover:border-blue-600 cursor-pointer duration-300'>
          <img src={Google} alt="googleIMG" className='w-7' />
          <span className='text-md text-gray-900'> Iniciar sesión con Google</span>
        </div>
        <button onClick={handleSingOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-orange-700 duration-300'> Cerrar Sesión</button>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newesOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default Login
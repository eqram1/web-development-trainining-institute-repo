import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { gooleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        gooleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                }

                //get jwt token
                fetch('https://online-trainer-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //local storage is the easiest but not the best not the best place
                        localStorage.setItem('online-trainer', data.token)

                    });
            })
            .catch(err => console.error(err));

    }
    return (
        <div>
            <p><small>Social Log in</small></p>
            <p><button onClick={handleGoogleSignIn} className='btn btn-blue'>Google</button></p>
        </div>
    );
};

export default SocialLogin;
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { gooleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        gooleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
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

import { useState } from "react";
export default function FormComponent(){

    const [users]=useState([
        {UserId:'john'},
        {UserId:'john12'},
        {UserId:'david'},
        {UserId:'john_nit'}

    ]);
    const [isUserValid,setUserValid]=useState(false)
    const [userMsg,setUserMsg]=useState('');
    const [pwdMsg,setPwdMsg]=useState('');
    const [capsStatus,setCapsStatus]=useState(false)
    function VerifyUserId(e){
        for(var user of users)
        {
            if (user.UserId===e.target.value){
                setUserMsg('User Id Taken -Try Another')
                setUserValid(false);
                break;

            }
            else{
                setUserMsg('User Available')
                setUserValid(true);
            }
        }

    }
    function HiderUserMsg(){
        setUserMsg('')

    }
    function HiderPassword(){
        setUserMsg('')

    }
    

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setPwdMsg('Strong Password')

        }
        else{
            if(e.target.value.length<4){
                setPwdMsg('Poor Password')

            }
            else{
                setPwdMsg('Weak Password')

            }
        }



    }

    function VerifyCaps(e){
        if(e.keyCode>=65 && e.keyCode<=90){
            setCapsStatus(true)
        }
        else{
            setCapsStatus(false)
        }

    }
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User id</dt>
                <dd><input type="text"  onBlur={HiderUserMsg}    onKeyUp={VerifyUserId}/></dd>
                <dd className={(isUserValid==true)?'text-success':'text-danger'}>{userMsg}</dd>
                <dt>Password:</dt>
                <dd>
                    <input type="password"  onBlur={HiderPassword}  onKeyPress={VerifyCaps} onKeyUp={VerifyPassword}/>
                </dd>
                <dd>
                    {pwdMsg}
                </dd>
                <dd className={(capsStatus==true)?'d-block':'d-none'}>
                    <span className="text-warning"><span className="bi bi-exclamation-triangle"></span> Caps ON</span>
                    </dd>

            </dl>

        </div>
    )

}
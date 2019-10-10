import styled from "styled-components";
import BackImang from "@staic/1.jpg"

export const Login_Style = styled.div`
    width:100%;
    height:100%;
    background:pink;
    background-image:url(${BackImang});
    background-size:100% 100%;
    background-repeat:no-repeat;
    background-position:100% 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .loginContainer{
        width:500px;
        height: 300px;
        background-color:yellow
    }
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
`
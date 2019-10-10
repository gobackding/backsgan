import Loadable from "react-loadable";
import Loading from "@common/Loading";

const Login = Loadable({
    loader:()=>import("./Login"),
    loading:Loading
})

export {
    Login
}
import { useSelector } from "react-redux";
import { logInHandle, logOutHandle } from "../utils";

function Header() {
    const {user} = useSelector((state) => state.auth)

    const logIn = user => {
        logInHandle(user)
    }

    return (
        <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2>LOGO</h2> 
            {!user && (
                <nav>
                    <button onClick={() => logIn({name: 'JOHN', id: 1})}>John Olarak Giris Yap</button>
                    <button onClick={() => logIn({name: 'MONICA', id: 2})}>Monica Olarak Giris Yap</button>
                </nav>
            )}
            {user && (
                <nav>
                    Hosgeldin {user.name}
                    <button onClick={logOutHandle}>Çıkış Yap</button>
                </nav>
            )}
        </header>
    )
}

export default Header;
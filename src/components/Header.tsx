import {GiNotebook} from "react-icons/gi";

const Header = ({setMode}: any) => {

    return (
        <div className="header">
            <div>
                <h1 style={{
                    fontSize: "3em",
                    fontWeight: "bold"
                }}>My To-do List
                    <GiNotebook
                        size="1.5em"
                        style={{margin: "15px"}}
                    />
                </h1>
            </div>
            <button
                onClick={() => setMode((previousDarkMode: any) => !previousDarkMode)}
                className="save">
                Theme Toggle
            </button>
        </div>
    );
};

export default Header;
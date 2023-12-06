const Header = ({setMode}: any) => {

    return (
        <div className="header">
            <h1>My To-do List</h1>
            <button
                onClick={() => setMode((previousDarkMode: any) => !previousDarkMode)}
                className="save">
                Toggle Mode
            </button>
        </div>
    );
};

export default Header;
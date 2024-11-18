function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <form className="flex items-center">
                <input className="form-control flex-grow h-10 px-4 mr-4 rounded" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Search</button>
            </form>
        </nav>
    );
}

export default Navbar;
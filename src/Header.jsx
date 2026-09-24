
export function Header({children}){
    return(
        <header className="header">
            <h1 className="header-title">Shelf</h1>
            <p className="header-meta">User - 4 books</p>
        
            {children}
        </header>
    )
}

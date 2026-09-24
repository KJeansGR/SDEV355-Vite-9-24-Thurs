import  './App.css'
import  { Header} from './Header';
import Footer from './Footer';
import BookCard from './BookCard';
function App() {

  return (
    <>
      <div className="app">
        
        <Header />

        <section className="panel">

          <h2 className="panel-title">Currently reading</h2>
          <div className="panel-body">
            <BookCard 
              title={"To Kill a Mockingbird"} 
              author={"Harper Lee"}
              pages={"like 300"}
              rating = {5}
            />
            <BookCard 
              title={"To Kill a The Hunger Games"} 
              author={"Suzanne Collins"}
              pages={"like 200"}
              rating = {2}
            />
          </div>

        </section>

        <section className="panel">

          <h2 className="panel-title">Want to read</h2>
          <div className="panel-body">
            <BookCard 
              title={"Harry Potter and the Sorcerer's Stone"} 
              author={"J.K. Rowling"}
            />
            <BookCard 
              title={"Pride and Prejudice"} 
              author={"Jane Austen"}
            />
          </div>
          
        </section>
      </div>
      <Footer />
    </>
  )
}
export default App

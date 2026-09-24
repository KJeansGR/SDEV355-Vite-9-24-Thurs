import  './App.css'
import  { Header} from './Header';
import Footer from './Footer';
import BookCard from './BookCard';
import Panel from './Panel';
function App() {

  return (
    <>
      <div className="app">
        
        <Header />
        <Panel title="Crrently Reading">
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
        </Panel>
        <Panel title="Want to read">
            <BookCard 
              title={"Harry Potter and the Sorcerer's Stone"} 
              author={"J.K. Rowling"}
            />
            <BookCard 
              title={"Pride and Prejudice"} 
              author={"Jane Austen"}
            />
        </Panel>

      </div>
      <Footer />
    </>
  )
}
export default App

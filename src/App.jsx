import Card from './ui/Card'
import article from'./data/article.json'

function App() {
  return (
    <section className='page'>
      <h1 className='hidden'>Responsive and Interactive Article - Made By Keiner Mendoza</h1>
      <Card 
        title={article.title}
        image={article.image}
        content={article.content}
        published={article.published}
        author={article.author}
      />
    </section>
  )
}

export default App

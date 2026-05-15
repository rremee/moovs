import Sidebar from "./components/sidebar/Sidebar.jsx";
import MovieCard from "./components/movieCard/MovieCard.jsx";
import Heading from "./components/heading/Heading.jsx";
import UpcomingList from "./components/UpcomingList/UpcomingList.jsx";
import NewsHome from "./components/NewsHome/NewsHome.jsx";

function App() {

  return (
    <div className={'app-main'}>
        <Sidebar/>
        <main className="main-content">
            <section className={'home-slider'}>
                <Heading name={'Now Playing'} />
                <MovieCard/>
            </section>
            <div className="news-wrapper">
                <aside className={'news'}>
                    <Heading name={'News'} />
                    <NewsHome/>
                </aside>
            </div>
            <section className={'upcoming'}>
                <Heading name={'Upcoming releases'} />
                <UpcomingList/>
            </section>
        </main>
    </div>
  )
}

export default App

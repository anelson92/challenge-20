import About from './Pages/About'; 
import Contact from './Pages/Contact'; 
import Portfolio from './Pages/Portfolio'; 
import PageContent from './PageContent'; 


const Page = (currentPage) => {
    const renderPage = () =>{
        switch (currentPage.name){
            case 'about me':
                return <About />;  
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            default:
                return <About />;  
        }
    }
    return (

        <section>
            <h2>{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    )
}

export default Page; 
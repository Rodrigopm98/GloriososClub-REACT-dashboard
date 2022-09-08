import React from 'react'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import Movie from './Movie'
import TopBar from './TopBar'

function ContentWrapper() {
  return (
    <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Movie />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
  )
}

export default ContentWrapper
export const Features = (props) => {
  return (
    <div id='features' className='text-center section-background'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2> </h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-5">
            <div>
              <span className="header-span-font-black">A </span>
              <span className="header-span-font-blue">Better Future </span> 
              <span className="header-span-font-black">requires a </span>              
              <span className="header-span-font-blue">Better Foundation </span>                             
            </div>            
            <div className="header-content">
              <span className="header-content-font">Decentralized Oracle Network provide tamper-proof inputs, outputs, and computations to support advanced smart contracs on any blockchain.</span>              
            </div>
            <div className="header-content">
              <div className="col-xs-12 col-md-6">
                <button type='submit' className='btn btn-primary btn-lg custom-button'>
                  Develop with Near
                </button> 
              </div>
              <div className="col-xs-12 col-md-6">
                <button type='submit' className='btn btn-primary btn-lg custom-button'>
                  Explore solutions
                </button> 
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-1">  
            <img
              src='img/feature/Image.png'                         
            />          
          </div>
        </div>
        <div className='col-md-10 col-md-offset-1 section-title'>
        </div>          
      </div>
    </div>
  )
}

export const Part5 = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row position-relative1" >
          <div className="col-xs-12 col-md-6">
            <div className="part-sub-image-content1 row">                             
              <div className="col-xs-12 col-md-4"></div>
              <div className="part-sub-image-size col-xs-12 col-md-4">
                {/* <img src='img/feature/Image.png' className="part-sub-image-percent"/> */}
              </div>              
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="part-sub-content part-sub-content-height5">
              <div className="part-header-font-black">                
                Create an account & choose a path
              </div>
              <div className="part-sub-content1-font-black">                
                The best way to stake your claim in the Sophon verse is by creating an account (wallet). Then, choose the first step in your journey.                
              </div>
              <button className='btn btn-primary btn-lg custom-button-black'>
                Create an Account
              </button>          
            </div>            
          </div>
          <div className="absolute-content1">            
            <div className="col-xs-12 col-md-4">
              <div className="part-sub-content part-sub-content-height6">
                <div className="row"> 
                  <div className="col-xs-12 col-md-2">
                    <div className="part-sub-image1-size">
                      <img src='img/part/build.png' className="part-sub-image-percent"/>
                    </div>                    
                  </div>                  
                  <div className="part-sub-margin part-header-font-black col-xs-12 col-md-2">                
                    Build
                  </div>
                </div>
                <div className="part-sub-content1-font-black">                
                  Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability.
                </div>
                <button className='btn btn-primary btn-lg custom-button'>
                  I'm a Developer
                </button> 
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="part-sub-content part-sub-content-height6">
                <div className="row"> 
                  <div className="col-xs-12 col-md-2">
                    <div className="part-sub-image1-size">
                      <img src='img/part/grow.png' className="part-sub-image-percent"/>
                    </div>                    
                  </div>                  
                  <div className="part-sub-margin part-header-font-black col-xs-12 col-md-2">                
                    Grow
                  </div>
                </div>
                <div className="part-sub-content1-font-black">                
                  Startup or grow up on a platform that sets you up for success. Investors, partners, and users are waiting.
                </div>
                <button className='btn btn-primary btn-lg custom-button'>
                  I’m a Founder / Creator
                </button> 
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="part-sub-content part-sub-content-height6">
                <div className="row"> 
                  <div className="col-xs-12 col-md-2">
                    <div className="part-sub-image1-size">
                      <img src='img/part/belong.png' className="part-sub-image-percent"/>
                    </div>                    
                  </div>                  
                  <div className="part-sub-margin part-header-font-black col-xs-12 col-md-2">                
                    Belong
                  </div>
                </div>
                <div className="part-sub-content1-font-black">                
                  When you find your purpose, you find your people. Pick a wallet, create an account, and start contributing today.
                </div>
                <button className='btn btn-primary btn-lg custom-button'>
                  Explore Community
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

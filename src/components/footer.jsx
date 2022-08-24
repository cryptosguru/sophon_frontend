import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Footer = (props) => {  
  return (    
      <div className="footer-content">
        <div className="row footer-part1">
          <div className="col-xs-12 col-md-2 footer-part2">
            <div className="footer-header-font-black">
              Logo
            </div>
            <div className="footer-part3 footer-content-font-black">
              <div>
                Wallet
              </div>
              <div>
                Explorer
              </div>
              <div>
                Sophon Bridge
              </div>
              <div>
                Brand Toolkit
              </div>
            </div>            
          </div>
          <div className="col-xs-12 col-md-2 footer-part2">
            <div className="footer-header1-font-black">
              Learn
            </div>  
            <div className="footer-part4 footer-content-font-black">
              <div>
                Platform
              </div>
              <div>
                Blog
              </div>
              <div>
                Technology
              </div>
              <div>
                Use Cases
              </div>
              <div>
                Eduction
              </div>
              <div>
                About
              </div>
              <div>
                Careers
              </div>
            </div>   
          </div>
          <div className="col-xs-12 col-md-2 footer-part2">
            <div className="footer-header1-font-black">
              Build
            </div>  
            <div className="footer-part5 footer-content-font-black">
              <div>
                Documentation
              </div>
              <div>
                Platform
              </div>
              <div>
                Office Hours
              </div>
              <div>
                Examples
              </div>
              <div>
                Bounties
              </div>
              <div>
                Security Report
              </div>
            </div>   
          </div>
          <div className="col-xs-12 col-md-2 footer-part2">
            <div className="footer-header1-font-black">
              Grow
            </div>  
            <div className="footer-part6 footer-content-font-black">
              <div>
                Work with Us
              </div>
              <div>
                Grants & Funding
              </div>
              <div>
                Join the Accelerator
              </div>
            </div>   
          </div>
          <div className="col-xs-12 col-md-2 footer-part2">
            <div className="footer-header1-font-black">
              Belong
            </div>  
            <div className="footer-part7 footer-content-font-black">
              <div>
                Open Web Sandbox
              </div>
              <div>
                Guilds
              </div>
              <div>
                DAOs
              </div>
              <div>
                Events
              </div>
              <div>
                Community Blog
              </div>
            </div>   
          </div>
          <div className="col-xs-12 col-md-2 footer-part2">
            <div className="footer-header1-font-black">
              Choose a Path
            </div>  
            <div className="footer-part8 footer-content-font-black">
              <div>
                Developer Path
              </div>
              <div>
                Founder Path
              </div>
              <div>
                Community Paty
              </div>
            </div>   
          </div>        
        </div>
        <div className="footer-part9">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Receive email updates"
              aria-label="Subscribe"
              aria-describedby="basic-addon2">                
              </Form.Control>
          </InputGroup>
        </div>
        <div className="row footer-part10">
            <div className="footer-content-font-black col-xs-12 col-md-2">
              @ 2022 Sophon Protocal
            </div>
            <div className="col-xs-12 col-md-6">
            </div>
            <div className="footer-content-font-black col-xs-12 col-md-2">
              Privacy Policy
            </div>
            <div className="footer-content-font-black col-xs-12 col-md-2">
              Terms of Use
            </div>
        </div>
      </div>          
  )
}

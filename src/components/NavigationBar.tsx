import "./NavigationBar.css";

const NavigationBar = () => {   
    
  return(
     <div className="navigation-bar">
    <ul className="navigation-bar-links">
      <li><a href="/product">Product</a></li>
      <li><a href="/Developer">Developer</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href = "/enterprise">Enterprise</a></li>
    </ul>
  </div>


  );
  
}

export default NavigationBar;
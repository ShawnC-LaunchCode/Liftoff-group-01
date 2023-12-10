function setEverydayDresscode() {
    return (
      <div className="setEverydayDresscode">
        <h1 class="welcomePageHeader">Welcome to Weather2Wear</h1>
  

  <h2>How Would You Describe Your Everyday Wardrobe?</h2>
  <form>
   <label>Casual <input type="radio" name="everydayDresscode" value="Casual"/></label> 
    <label>Business Casual <input type="radio" name="everydayDresscode" value="Buisness Casual"/> </label>
    <label> Semi-Formal <input type="radio" name="everydayDresscode" value="Semi-Formal"/></label>
    <label>Formal <input type="radio" name="everydayDresscode" value="Formal"/> </label>
  </form>


      </div>
    );
  }
  
  export default setEverydayDresscode;
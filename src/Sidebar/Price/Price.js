import "./Price.css";

function Price() {
  return <div className="ml">
    <h2 className="sidebar-title price-title">Price</h2>

    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
      <span className="checkmark"></span>All
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
      <span className="checkmark"></span>&#8377;0 - &#8377;500
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
      <span className="checkmark"></span>&#8377;500 - &#8377;800
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
      <span className="checkmark"></span>&#8377;800 - &#8377;1200
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
      <span className="checkmark"></span>Over &#8377;1200
    </label>
  </div>;
}

export default Price;

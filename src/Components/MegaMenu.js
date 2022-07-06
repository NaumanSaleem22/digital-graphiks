//importing bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import GroceryImg from '../Images/grocery.svg'
import gamingimg from '../Images/gaming.jpg'
import comp from '../Images/comp.jpg'
import huwawei from '../Images/huwawei.png'
import bose from '../Images/bose.png'
import hp from '../Images/hp.png'
import lenovo from '../Images/lenovo.png'
import nooneast from '../Images/nooneast.png'
import philips from '../Images/philips.png'

import './MegaMenu.css'
function MegaMenu() {
  return (
    <div className="MegaMenu-nav">
      <div>
        {' '}
        <div class="dropdown">
          <button class="dropbtn">All Categories</button>
          <div class="dropdown-content">
            <div className="mega-menu-inner-menu-all-categories">
              <div className="all-categories-div-1">
                <h6>All Categories</h6>
                <p className="text-muted inner-menu-p">Electronic Mobiles</p>
                <p className="text-muted inner-menu-p">Beauty & Fragrance</p>
                <p className="text-muted inner-menu-p">Baby & Toys</p>
                <p className="text-muted inner-menu-p">Books & Mobiles</p>
                <p className="text-muted inner-menu-p">Play & Mobiles</p>
                <p className="text-muted inner-menu-p">Electronic & Mobiles</p>

                <p className="text-muted inner-menu-p">Plays & Mobiles</p>
                <p className="text-muted inner-menu-p">Women & Mobiles</p>
                <p className="text-muted inner-menu-p">Men & Mobiles</p>
              </div>
              <div className=" justify-content-start">
                <div className="d-flex gap-3 m-3">
                  <div>
                    {' '}
                    <img className="brand-img" src={hp} width="100%" />
                  </div>
                  <div>
                    {' '}
                    <img className="brand-img" src={bose} width="100%" />
                  </div>
                  <div>
                    {' '}
                    <img className="brand-img" src={huwawei} width="100%" />
                  </div>
                </div>
                <div className="d-flex gap-3 m-3">
                  <div>
                    {' '}
                    <img className="brand-img" src={philips} width="100%" />
                  </div>
                  <div>
                    {' '}
                    <img className="brand-img" src={lenovo} width="100%" />
                  </div>
                  <div>
                    {' '}
                    <img className="brand-img" src={nooneast} width="100%" />
                  </div>
                </div>
                <div className="d-flex gap-3 m-3">
                  <div>
                    {' '}
                    <img className="brand-img" src={hp} width="100%" />
                  </div>
                  <div>
                    {' '}
                    <img className="brand-img" src={bose} width="100%" />
                  </div>
                  <div>
                    {' '}
                    <img className="brand-img" src={huwawei} width="100%" />
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  {' '}
                  <img src={comp} width="100%" />
                </div>
                <div>
                  {' '}
                  <img src={gamingimg} width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Electronics</div>
      <div>Men</div>
      <div>Beauty & Fragnance</div>
      <div>Women</div>
      <div>Baby & Toy</div>
      <div>Sports</div>
      <div>BestSellers</div>
      <div>Sell on Moon</div>
      <div>Men & Women</div>

      <div>
        <img src={GroceryImg} alt="icon" />
      </div>
    </div>
  )
}
export default MegaMenu

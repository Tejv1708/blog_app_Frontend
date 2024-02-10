import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/18036077/pexels-photo-18036077/free-photo-of-a-girl-happy-shock-with-looking-lighting-lamp.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <span>Post 2 days ago </span>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}></Link>
            <img src={Edit} alt="" />
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          similique fuga est quod molestiae ratione deleniti eligendi velit,
          illo natus consectetur, doloremque odio dicta? Velit accusamus quod id
          similique nulla itaque esse totam quam, ducimus, recusandae quia
          deserunt error minima cupiditate tempore dignissimos a illum. Numquam
          magnam hic reiciendis maiores id adipisci rem necessitatibus sint
          ratione? Dicta, libero omnis nam ut aspernatur consectetur, sed quia
          provident, corrupti iure voluptatum ex tenetur illum repellendus
          incidunt odit? Voluptates fugit similique blanditiis recusandae, illum
          impedit natus porro, in repellat deserunt, architecto numquam labore
          assumenda esse sapiente inventore laudantium corporis incidunt amet
          cupiditate eaque quam reprehenderit. Eius cum modi dolorum! Reiciendis
          perferendis, odio minus quas ipsa impedit ex quod velit illo commodi
          reprehenderit nemo praesentium eligendi blanditiis. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Iusto ipsa nam, maxime
          laboriosam dicta perferendis accusantium aut sunt ex qui alias ad
          veritatis unde aliquam tenetur enim dolorum dolor at id sapiente,
          minima excepturi quas. Omnis assumenda commodi quos quae adipisci
          maxime vero soluta illo, pariatur ad quas quo, perferendis, magnam
          quam! Quae aliquam incidunt tempore, blanditiis, aspernatur facilis
          mollitia ipsa est dolores sequi rerum id distinctio reiciendis facere
          enim. Non, voluptate assumenda. Deleniti aperiam voluptates, illo
          blanditiis architecto adipisci, explicabo dolorem fugit voluptatum
          tempore obcaecati quam a sapiente quaerat recusandae corporis
          assumenda cupiditate velit quia qui beatae nemo magni.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;

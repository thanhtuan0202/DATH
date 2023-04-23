import React,{useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";
import sidebar_items from "./sidebar_data.json";


const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const [Category, setCategory] = useState([])
  const [loading, setLoading] = useState(false);

  const fetchCategory = async () =>{
    const res = await axios .get(
      "http://localhost:5000/read-list-category"
    )
    .then(res => {
      setCategory(res.data),
      setLoading(true)}
    )
  }
  useEffect(() => {
    fetchCategory();
  }, []);
  useEffect(() => {
    console.log("ListCategory: ", Category);
  }, [loading]);

  return (
    <div className="sidebar">
        <div className="sidebar__h">
          <h6> Tất cả danh mục </h6>
        </div>
      {sidebar_items.map((item, index) => (
        
        <Link to={item.route} key={index} class = "links">
          <SidebarItem
            title={item.display_name}
            backgroundColor={item.color}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

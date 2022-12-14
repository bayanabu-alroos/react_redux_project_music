import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductComponent = (props) => {




  
  const addToFav=(song_id,user_id)=>{
  //  console.log(song_id)
  //  console.log('test')
  //  console.log(user_id)
    // setInputs((values) => ({song_id:song_id,user_id:user_id}));
    axios.post('http://localhost/ApiReduxPro8/favorite.php',{song_id:song_id,user_id:user_id})
    .then((res) => {
      console.log(res);
    })

    alert('The song has been add to the favorite list successful');  
    
  }
 
  if (props.search == "") {


    
    const renderList = props.currentBlogs.map((song) => {
      const { id, song_name,singer,album,genre, song_image, lyrics,description } = song;

      return (
     
 
   <>
  

<div className="card" style={{ width: "18rem",margin:"40px" }}>
<Link  to={`/${id}`}><img className="card-img-top" src={song_image} alt={song_name} /></Link>
  <div className="card-body">
  <div class="row">
    <div class="col text-center">
    <h3  style={{ color:"#755e92" }}className="card-title ">{song_name}</h3>
    </div>
  </div>
    
    <div class="row">
    <div class="col text-center">
    <button type="submit" class="btn btn-dark" onClick={()=>addToFav(id,sessionStorage.getItem('id'))}>Add to favourite</button>
    </div>
  </div>
   
   
    
  </div>
</div>
                
    

   </>
  

    
  
      );
    });
    return <>{renderList}</>;
  } else {
    const filteredData = props.all.filter((el) => {
      return el.song_name.toLowerCase().includes(props.search);
    });

    const renderList = filteredData.map((song) => {
      const { id, song_name,singer,album,genre, song_image, lyrics,description } = song;

      return (
             
  
        <Link  to={`/${id}`}>
        <div className="card" style={{ width: "18rem",margin:"40px" }}>
          <img className="card-img-top" src={song_image} alt={song_name} />
          <div className="card-body">
          <div class="row">
            <div class="col text-center">
            <h3  style={{ color:"#755e92" }}className="card-title ">{song_name}</h3>
            </div>
          </div>
            
            <div class="row">
            <div class="col text-center">
            <button type="submit" class="btn btn-dark" onClick={()=>addToFav(id,sessionStorage.getItem('id'))}>Add to favourite</button>
            </div>
          </div>
           
           
            
          </div>
        </div>
                        </Link>
 

      );
    });
    return <>{renderList}</>;
  }
};

export default ProductComponent;

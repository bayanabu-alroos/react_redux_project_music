import React, { useState,useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import "./App.css";
import "./fav.css";

export default function Modal({ open,value,onClose}) {


 
const [fav,setFav]=useState([]);

  const fetchProductDetail = async () => {
   
      const response = await axios
      .get(`http://localhost/ApiReduxPro8/favorite.php/${value.value}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      setFav(response.data);
      console.log(response.data)
  
  };

  useEffect(() => {
    fetchProductDetail();

   
  }, []);



  const handleDel = (favid) => {
   
    axios
      .delete(`http://localhost/ApiReduxPro8/favorite.php/${favid}/delete`)
      .then(function (response) {
        fetchProductDetail();
      });
     
  };





  if (!open) return null;
















  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="model" style={{ top: value.top, left: value.left }}>
      
        



<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css" integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossOrigin="anonymous" />
  <div className="container">
   
  <div class="row align-items-center">
        <div class="col-md-6">
            <div class="mb-3">
                <h5 class="card-title">Favorite Song List <span class="text-muted fw-normal ms-2">(8)</span></h5>
            </div>
        </div>
  
        <div class="col-md-6">
            <div class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                <div>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                        <button className="btn btn-danger" onClick={onClose}>Close</button>
                        </li>
                     
                    </ul>
                </div>
              
                
            </div>
        </div>
    </div>


















  

<div className="row">
<div className="col-lg-12">
  <div className>
    <div className="table-responsive">
      <table className="table project-list-table table-nowrap align-middle table-borderless">
        <thead>
          <tr>
            
            <th scope="col">Song Name</th>
            <th scope="col">Singer</th>

            <th scope="col" style={{width: 200}}>Action</th>
          </tr>
        </thead>
        <tbody>

        {fav.map((song)=>
          <tr>
            
            <td><img src={song.song_image} alt className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">{song.song_name}</a></td>
            <td><span className="badge badge-soft-success mb-0">{song.singer}</span></td>
 
     
            <td>
              <ul className="list-inline mb-0">
                
                <li className="list-inline-item">
                  <button   onClick={()=>handleDel(song.id)} data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18" /></button>
                </li>
               

              </ul>
            </td>
          </tr>
         )}
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>


    




  </div>
</div>

























        
        
      </div>
    </>,
    document.getElementById("portal")
  );
}

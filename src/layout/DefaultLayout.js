import React,{useEffect } from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";
import config from '../config';
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader
} from '../components/index';

const DefaultLayout = () => {
 

  useEffect(()=>{
    refreshToken();
  },[]/** this empty array used to run useEffect on mounted */)

  const refreshToken =async()=>{
    try {
      const response = await axios.get(config.BACKEND_URL+'/token',{withCredentials: true});
      const decode= jwt_decode(response.data.accessToken);
    } catch (error) {
      
    }
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;

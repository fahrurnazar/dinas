import React, { useState } from 'react';
import axios from "axios";
import config from '../../../config';
import logoEdu from '../../../assets/images/logoEdu.png'
import { Link,useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPasword]=useState('');
  const [msg,setMsg]=useState('');
  //const history=useHistory();
  const navigate=useNavigate();

  const goToDashboard=()=>{
    navigate('/dashboard')
  }
  const Auth=async(e)=>{
    e.preventDefault();
    try {
    const response=await axios.post(config.BACKEND_URL+'/Login',{
      email:email,
      password:password
    },{withCredentials: true});
    navigate("/dashboard");
    
    } catch (error) {
      if(error.response){        
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                    <CRow className="justify-content-center text-center">
                      <CCol lg={12} className="justify-content-center text-center">
                        <img src={logoEdu} alt="Logo" />
                      </CCol>
                    </CRow>
                    <CRow className="justify-content-center">
                      <CCol lg={12} className="justify-content-center text-center">
                        APLIKSI E-DINAS
                      </CCol>
                    </CRow>
                  <CForm onSubmit={Auth}>
                    
                    
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <p className="text-medium-emphasis">{msg}</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e)=>setPasword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit" onClick={goToDashboard}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;

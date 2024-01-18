import React, { useEffect, useState } from 'react';
import { LoginURL, RegisterURL, FileAPI, AddNotePage, CheckNotePage, SeeAllNotesPage, LoginPage, RegisterPage } from './constants';

import InputForm from './components/InputForm';
import axios from 'axios';
import NoteDisplay from './components/NoteDisplay';
import MainNavbar from './components/Navbar';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import Notes from './components/Notes';

function App() {

  // PageState tine starea paginii
  // 0 - Adaugare de nota
  // 1 - Vizualizare nota specifica
  const [pageState, setPageState] = useState({ page: 0 })
  const [currentNote, setCurrentNote] = useState(null)
  const [user, setUser] = useState(undefined)
  const [notes, setNotes] = useState([])

  const onFileCreate = (content) => {
    const authToken = localStorage.getItem('authToken');
    const headers = authToken ? {
      Authorization: `Bearer ${authToken}`
    } : {};
    console.log(headers);
    axios
      .post(FileAPI, { fileContent: content }, { headers })
      .then(response => {
        const fileId = response.data;
        return axios.get(`${FileAPI}/${fileId}`)
      })
      .then(response => {
        // console.log(response);
        setCurrentNote(response.data);
        setPageState({ page: 1 });
      })
  }

  const onFileGet = (fileId) => {
    const authToken = localStorage.getItem('authToken');
    const headers = authToken ? {
      Authorization: `Bearer ${authToken}`
    } : {};
    console.log(headers);
    axios
      .get(`${FileAPI}/${fileId}`, { headers })
      .then(response => {
        // console.log(response);
        setCurrentNote(response.data);
        setPageState({ page: 1 });
      })
  }

  const onRegister = (username, email, password) => {
    // handle on be
    console.log(username, email, password);
    axios.post(RegisterURL, {email: email, username: username, password: password})
      .then(response => {
        setPageState({RegisterPage});
      })
  }

  const getUserNotes = () => {
    const authToken = localStorage.getItem('authToken');
    const headers = authToken ? {
      Authorization: `Bearer ${authToken}`
    } : {};
    axios.get(FileAPI, { headers })
      .then(response => {
        console.log(response.data)
        setNotes(response.data)
      })
  }

  const onLogin = (email, password) => {
    axios.post(LoginURL, {
      email: email,
      password: password
    })
      .then((response) => {
        localStorage.setItem("authToken", response.data.token);
        console.log(response);
        setUser({
          username: "Cristi",
          email: "cristip100@yahoo.com"
        });
        setPageState({ page: 0 });
      })
    console.log(email, password);
  }

  const onLogout = () => {
    localStorage.clear(); 
    setUser(undefined)
    setPageState({page: AddNotePage})
  }

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setUser({
        username: "Cristi",
        email: "cristip100@yahoo.com"
      });
    }
  }, [])

  return (<div>
  <MainNavbar setPageState={setPageState} user={user} getUserNotes={getUserNotes} onLogout={onLogout}></MainNavbar>
    {pageState.page === AddNotePage ? <InputForm onFileCreate={onFileCreate}></InputForm> : <div></div>}
    {pageState.page === CheckNotePage ? <NoteDisplay note={currentNote}></NoteDisplay> : <div></div>}
    {pageState.page === SeeAllNotesPage ? <Notes notes={notes} onFileGet={onFileGet}></Notes> : <div></div>}
    {pageState.page === LoginPage ? <LoginComponent onLogin={onLogin}></LoginComponent> : <div></div>}
    {pageState.page === RegisterPage ? <RegisterComponent onRegister={onRegister}></RegisterComponent> : <div></div>}
  </div>
  );
}

export default App;

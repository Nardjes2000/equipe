import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./App.css";


const SideBar = () => {
  return (
    <SideNav id="Sidebar"
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav>
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Acceuil
            </NavText>
        </NavItem>
        <NavItem eventKey="add">
            <NavIcon>
                <i className="fa fa-plus-circle" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Ajouter thèse
            </NavText>
        </NavItem>
        <NavItem eventKey="list">
            <NavIcon>
                <i className="fa fa-list"  style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Afficher thèses
            </NavText>
        </NavItem>
        <NavItem eventKey="edit">
            <NavIcon>
                <i className="fas fa-edit" aria-hidden="true"style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Modifier thèse
            </NavText>
        </NavItem>

    </SideNav.Nav>
</SideNav>

  )
}

export default SideBar;

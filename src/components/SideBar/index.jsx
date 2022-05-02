import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import style from "./styles.module.css";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
//react icons
import { AiOutlineUser } from "react-icons/ai";

const SideBar = () => {
  return (
    <Row className={style.sideBar}>
      <Col sm = {4} md = {4} lg = {4} className = {style.sideBarItemP}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="178.996"
        height="89.5"
        viewBox="0 0 178.996 89.5"
      >
        <g
          id="Grupo_3"
          data-name="Grupo 3"
          transform="translate(-162.177 -189.058)"
        >
          <path
            id="Trazado_1"
            data-name="Trazado 1"
            d="M350.981,240.088a10.972,10.972,0,0,1,1.741-.132,2.933,2.933,0,0,1,1.947.507,1.612,1.612,0,0,1,.54,1.262,1.677,1.677,0,0,1-1.144,1.581v.028a1.6,1.6,0,0,1,.881,1.214,13,13,0,0,0,.5,1.759h-1.187a9.484,9.484,0,0,1-.423-1.487c-.177-.823-.474-1.085-1.126-1.1h-.584v2.589h-1.139Zm1.139,2.789h.682c.777,0,1.262-.413,1.262-1.041,0-.694-.485-1.012-1.234-1.012a3.292,3.292,0,0,0-.71.058Zm-4.764.253a5.589,5.589,0,1,0,5.6-5.587A5.6,5.6,0,0,0,347.356,243.13Zm1.064,0a4.528,4.528,0,1,1,4.532,4.532A4.534,4.534,0,0,1,348.419,243.13Zm-1.306-54.064a6.418,6.418,0,0,0-6.451,6.013,5.83,5.83,0,0,0,6.136,5.859,6.417,6.417,0,0,0,6.439-6.015A5.823,5.823,0,0,0,347.114,189.066ZM221.66,195.3c1.89-.057,5,.049,5,.049s1.529-6.167,1.529-6.252c-1.127-.006-6.426-.069-7.5-.028-9.423,0-17.066,5.725-19.21,14.5-.017.016-1.451,5.387-1.419,5.363-.018.024-8.235,0-8.235,0l-1.526,6.23h8.206s-5.591,23.337-7.88,33.562h10.3l8.162-33.562h12.588l1.5-6.23H210.627l1.9-7.2C213.671,197.3,218.423,195.365,221.66,195.3Zm13.808,43.258,12.08-49.5H237.239l-12.184,49.569a29.207,29.207,0,0,0-.776,4.944,10.741,10.741,0,0,0,.7,5.16h12.111a6.217,6.217,0,0,1-2.323-4.339A20,20,0,0,1,235.467,238.563Zm105.916,0,7.219-29.625H338.259l-7.291,29.689a29.908,29.908,0,0,0-.779,4.944,10.767,10.767,0,0,0,.706,5.16h12.11a6.2,6.2,0,0,1-2.324-4.339A19.851,19.851,0,0,1,341.383,238.563Zm-22-29.625-10.347,13.005-7.817-13.005H289.5l11.529,19.181-16.417,20.611h8.254l11.681-14.758,8.857,14.745h11.7l-12.528-20.866,14.927-18.913Zm-48.416-1.925c-8.164.023-20.168,5.689-24.153,18.914-3.225,10.724,1.7,24.095,19,24.742a42.931,42.931,0,0,0,15.494-2.64c-.088.1-1.231-5.789-1.206-5.789a36.94,36.94,0,0,1-13.888,1.9c-5.924-1.074-10.953-5.585-9.843-13.386.032.083,9.153,1.458,15.684-.348,13.444-4.039,14.561-12.33,12.381-16.743C281.266,207.239,273.536,207,270.963,207.013Zm-1.942,17.812a42.335,42.335,0,0,1-10.91.33,19.24,19.24,0,0,1,6.6-10.234c3.523-2.426,7.415-2.406,9.986-.289C276.477,216.472,278.764,223.188,269.021,224.825Z"
            transform="translate(-17.361)"
            fill="#ffffff"
          />
          <g
            id="Grupo_2"
            data-name="Grupo 2"
            transform="translate(162.177 258.668)"
          >
            <g id="Grupo_1" data-name="Grupo 1" transform="translate(0 0)">
              <path
                id="Trazado_2"
                data-name="Trazado 2"
                d="M162.177,371.9c27.876,20.873,56.646,21.889,88.922,15.359,30.623-6.2,60.742-13.266,90.051,2.59-27.884-20.868-56.656-21.893-88.931-15.36C221.6,380.687,191.466,387.762,162.177,371.9Z"
                transform="translate(-162.177 -370.928)"
                fill="#ffffff"
              />
            </g>
          </g>
        </g>
      </svg>
      <ul className= {style.user}>
        <li>Mario Villaverde</li>
        <li>m.villaverde@flexi.mx</li>
        <li>Administrador</li>
      </ul>
      </Col>
      <Col sm = {8} md = {8} lg = {8} className = {style.sideBarItemI}>
      <div className={style.items}>
        <ul>
          <li>
          <Link to = "/users" className = {style.textDecoration}>
          <svg id="_005-user" data-name="005-user" xmlns="http://www.w3.org/2000/svg" width="17.199" height="17.199" viewBox="0 0 17.199 17.199">
  <g id="Grupo_1440" data-name="Grupo 1440" transform="translate(0)">
    <path id="Trazado_2785" data-name="Trazado 2785" d="M14.681,11.119a8.567,8.567,0,0,0-3.268-2.05,4.972,4.972,0,1,0-5.626,0A8.613,8.613,0,0,0,0,17.2H1.344a7.256,7.256,0,1,1,14.512,0H17.2A8.544,8.544,0,0,0,14.681,11.119ZM8.6,8.6a3.628,3.628,0,1,1,3.628-3.628A3.632,3.632,0,0,1,8.6,8.6Z" transform="translate(0)" fill="#fff"/>
  </g>
</svg>

            Usuarios
            </Link>
          </li>
          <li>
          <Link to = "/news" className = {style.textDecoration}>
            <svg
              id="_004-newspaper"
              data-name="004-newspaper"
              xmlns="http://www.w3.org/2000/svg"
              width="17.199"
              height="16.057"
              viewBox="0 0 17.199 16.057"
            >
              <path
                id="Trazado_2778"
                data-name="Trazado 2778"
                d="M16.7,20.494h-3.83V17.5a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5V30.538a2.522,2.522,0,0,0,2.519,2.519H14.68A2.522,2.522,0,0,0,17.2,30.538V21A.5.5,0,0,0,16.7,20.494ZM2.519,32.05a1.513,1.513,0,0,1-1.512-1.512V18.008h10.85c0,13.318-.006,12.578.012,12.768a2.511,2.511,0,0,0,.494,1.274Zm13.672-1.512A1.513,1.513,0,0,1,14.68,32.05h-.3a1.513,1.513,0,0,1-1.512-1.512V21.5h3.326Z"
                transform="translate(0 -17)"
                fill="#fff"
              />
              <path
                id="Trazado_2779"
                data-name="Trazado 2779"
                d="M73.029,89H65.5a.5.5,0,0,0,0,1.008h7.525a.5.5,0,0,0,0-1.008Z"
                transform="translate(-62.816 -86.581)"
                fill="#fff"
              />
              <path
                id="Trazado_2780"
                data-name="Trazado 2780"
                d="M73.029,153H65.5a.5.5,0,0,0,0,1.008h7.525a.5.5,0,1,0,0-1.008Z"
                transform="translate(-62.816 -148.431)"
                fill="#fff"
              />
              <path
                id="Trazado_2781"
                data-name="Trazado 2781"
                d="M73.029,393H65.5a.5.5,0,1,0,0,1.008h7.525a.5.5,0,1,0,0-1.008Z"
                transform="translate(-62.816 -380.369)"
                fill="#fff"
              />
              <path
                id="Trazado_2782"
                data-name="Trazado 2782"
                d="M181.266,217H177.5a.5.5,0,0,0-.5.5v3.762a.5.5,0,0,0,.5.5h3.762a.5.5,0,0,0,.5-.5V217.5A.5.5,0,0,0,181.266,217Zm-.5,3.762h-2.755v-2.755h2.755Z"
                transform="translate(-171.054 -210.281)"
                fill="#fff"
              />
              <path
                id="Trazado_2783"
                data-name="Trazado 2783"
                d="M65.5,242.008h1.612a.5.5,0,0,0,0-1.008H65.5a.5.5,0,0,0,0,1.008Z"
                transform="translate(-62.816 -233.475)"
                fill="#fff"
              />
              <path
                id="Trazado_2784"
                data-name="Trazado 2784"
                d="M65.5,306.008h1.612a.5.5,0,1,0,0-1.008H65.5a.5.5,0,1,0,0,1.008Z"
                transform="translate(-62.816 -295.325)"
                fill="#fff"
              />
            </svg>
            Noticias
            </Link>
          </li>
          <li>
          <Link to = "/events" className = {style.textDecoration}>
            <svg
              id="_003-calendar"
              data-name="003-calendar"
              xmlns="http://www.w3.org/2000/svg"
              width="17.199"
              height="17.199"
              viewBox="0 0 17.199 17.199"
            >
              <g id="Grupo_1439" data-name="Grupo 1439">
                <g id="Grupo_1438" data-name="Grupo 1438">
                  <ellipse
                    id="Elipse_1"
                    data-name="Elipse 1"
                    cy="1"
                    ry="1"
                    transform="translate(13.004 6)"
                    fill="#fff"
                  />
                  <path
                    id="Trazado_2775"
                    data-name="Trazado 2775"
                    d="M14.512,1.344h-.873V.672a.672.672,0,0,0-1.344,0v.672H9.238V.672a.672.672,0,1,0-1.344,0v.672H4.871V.672a.672.672,0,1,0-1.344,0v.672h-.84A2.69,2.69,0,0,0,0,4.031V14.512A2.69,2.69,0,0,0,2.687,17.2h5.14a.672.672,0,0,0,0-1.344H2.687a1.345,1.345,0,0,1-1.344-1.344V4.031A1.345,1.345,0,0,1,2.687,2.687h.84v.672a.672.672,0,1,0,1.344,0V2.687H7.894v.672a.672.672,0,1,0,1.344,0V2.687h3.057v.672a.672.672,0,0,0,1.344,0V2.687h.873a1.345,1.345,0,0,1,1.344,1.344v3.83a.672.672,0,1,0,1.344,0V4.031A2.69,2.69,0,0,0,14.512,1.344Z"
                    fill="#fff"
                  />
                  <path
                    id="Trazado_2776"
                    data-name="Trazado 2776"
                    d="M274.065,270a4.065,4.065,0,1,0,4.065,4.065A4.069,4.069,0,0,0,274.065,270Zm0,6.786a2.721,2.721,0,1,1,2.721-2.721A2.724,2.724,0,0,1,274.065,276.786Z"
                    transform="translate(-260.93 -260.93)"
                    fill="#fff"
                  />
                  <path
                    id="Trazado_2777"
                    data-name="Trazado 2777"
                    d="M372.646,331.377h-.3v-.705a.672.672,0,0,0-1.344,0v1.377a.672.672,0,0,0,.672.672h.974a.672.672,0,1,0,0-1.344Z"
                    transform="translate(-358.537 -318.914)"
                    fill="#fff"
                  />
                  <ellipse
                    id="Elipse_2"
                    data-name="Elipse 2"
                    cy="1"
                    ry="1"
                    transform="translate(10.004 6)"
                    fill="#fff"
                  />
                  <circle
                    id="Elipse_3"
                    data-name="Elipse 3"
                    cx="1"
                    cy="1"
                    r="1"
                    transform="translate(6.004 9)"
                    fill="#fff"
                  />
                  <circle
                    id="Elipse_4"
                    data-name="Elipse 4"
                    cx="1"
                    cy="1"
                    r="1"
                    transform="translate(3.004 6)"
                    fill="#fff"
                  />
                  <circle
                    id="Elipse_5"
                    data-name="Elipse 5"
                    cx="1"
                    cy="1"
                    r="1"
                    transform="translate(3.004 9)"
                    fill="#fff"
                  />
                  <circle
                    id="Elipse_6"
                    data-name="Elipse 6"
                    cx="1"
                    cy="1"
                    r="1"
                    transform="translate(3.004 12)"
                    fill="#fff"
                  />
                  <circle
                    id="Elipse_7"
                    data-name="Elipse 7"
                    cx="1"
                    cy="1"
                    r="1"
                    transform="translate(6.004 12)"
                    fill="#fff"
                  />
                  <circle
                    id="Elipse_8"
                    data-name="Elipse 8"
                    cx="1"
                    cy="1"
                    r="1"
                    transform="translate(6.004 6)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            Eventos
            </Link>
          </li>
          <li>
          <Link to = "/chat" className = {style.textDecoration}>
            <svg
              id="_006-chat"
              data-name="006-chat"
              xmlns="http://www.w3.org/2000/svg"
              width="17.199"
              height="17.199"
              viewBox="0 0 17.199 17.199"
            >
              <g
                id="Grupo_1442"
                data-name="Grupo 1442"
                transform="translate(3.225 3.225)"
              >
                <g id="Grupo_1441" data-name="Grupo 1441">
                  <path
                    id="Trazado_2786"
                    data-name="Trazado 2786"
                    d="M102.987,96h-6.45a.537.537,0,0,0,0,1.075h6.45a.537.537,0,1,0,0-1.075Z"
                    transform="translate(-96 -96)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Grupo_1444"
                data-name="Grupo 1444"
                transform="translate(3.225 5.375)"
              >
                <g id="Grupo_1443" data-name="Grupo 1443">
                  <path
                    id="Trazado_2787"
                    data-name="Trazado 2787"
                    d="M100.837,160h-4.3a.537.537,0,1,0,0,1.075h4.3a.537.537,0,1,0,0-1.075Z"
                    transform="translate(-96 -160)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g id="Grupo_1446" data-name="Grupo 1446">
                <g id="Grupo_1445" data-name="Grupo 1445">
                  <path
                    id="Trazado_2788"
                    data-name="Trazado 2788"
                    d="M11.825,0H2.15A2.152,2.152,0,0,0,0,2.15V12.9a.537.537,0,0,0,.31.487.545.545,0,0,0,.228.051.537.537,0,0,0,.344-.125L3.957,10.75h7.868a2.152,2.152,0,0,0,2.15-2.15V2.15A2.152,2.152,0,0,0,11.825,0ZM12.9,8.6a1.076,1.076,0,0,1-1.075,1.075H3.762a.537.537,0,0,0-.344.125L1.075,11.753V2.15A1.076,1.076,0,0,1,2.15,1.075h9.675A1.076,1.076,0,0,1,12.9,2.15Z"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Grupo_1448"
                data-name="Grupo 1448"
                transform="translate(4.3 4.3)"
              >
                <g id="Grupo_1447" data-name="Grupo 1447">
                  <path
                    id="Trazado_2789"
                    data-name="Trazado 2789"
                    d="M138.75,128a.537.537,0,0,0,0,1.075,1.076,1.076,0,0,1,1.075,1.075v9.093l-1.815-1.451a.542.542,0,0,0-.335-.117H130.15a1.076,1.076,0,0,1-1.075-1.075v-.537a.537.537,0,1,0-1.075,0v.537a2.152,2.152,0,0,0,2.15,2.15h7.336l2.54,2.033a.538.538,0,0,0,.874-.42V130.15A2.152,2.152,0,0,0,138.75,128Z"
                    transform="translate(-128 -128)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            Mensajes
            </Link>
          </li>
          <li>
          <Link to = "/learning" className = {style.textDecoration}>
            <svg
              id="_001-book"
              data-name="001-book"
              xmlns="http://www.w3.org/2000/svg"
              width="16.124"
              height="16.125"
              viewBox="0 0 16.124 16.125"
            >
              <path
                id="Trazado_2768"
                data-name="Trazado 2768"
                d="M8.062,0H4.569A.269.269,0,0,0,4.3.269V2.15H.269A.269.269,0,0,0,0,2.419V15.856a.269.269,0,0,0,.269.269H8.062a.269.269,0,0,0,.269-.269V.269A.269.269,0,0,0,8.062,0ZM7.794,13.975H4.837v-.537H7.794ZM.537,4.031H4.3v8.062H.537ZM7.794,2.956H4.837V2.15H7.794ZM.537,12.631H4.3v.806H.537Zm4.3.269V3.494H7.794V12.9ZM7.794.537V1.612H4.837V.537ZM4.3,2.687v.806H.537V2.687ZM.537,13.975H4.3v1.612H.537Zm4.3,1.612V14.512H7.794v1.075Zm0,0"
                fill="#fff"
              />
              <path
                id="Trazado_2769"
                data-name="Trazado 2769"
                d="M255.783,76.565,252.558,64.2a.268.268,0,0,0-.329-.192L248.2,65.086a.269.269,0,0,0-.191.327l3.225,12.362a.268.268,0,0,0,.329.191l4.031-1.075A.269.269,0,0,0,255.783,76.565Zm-6.76-9.387,3.512-.936.126.484-3.512.938Zm3.774.069,1.559,5.979-3.511.937-1.559-5.979Zm1.7,6.5.275,1.055-3.512.936-.274-1.054ZM252.106,64.6l.293,1.122-3.512.936-.292-1.121Zm-.423,12.779-.293-1.122,3.512-.937.292,1.121Zm0,0"
                transform="translate(-239.667 -61.851)"
                fill="#fff"
              />
              <path
                id="Trazado_2770"
                data-name="Trazado 2770"
                d="M34.419,144h-2.15a.269.269,0,0,0-.269.269v2.15a.269.269,0,0,0,.269.269h2.15a.269.269,0,0,0,.269-.269v-2.15A.269.269,0,0,0,34.419,144Zm-.269,2.15H32.537v-1.612H34.15Zm0,0"
                transform="translate(-30.925 -139.163)"
                fill="#fff"
              />
            </svg>
            E-Learning
            </Link>
          </li>
          <li>
          <Link to = "/services" className = {style.textDecoration}>
            <svg
              id="_008-to-do-list"
              data-name="008-to-do-list"
              xmlns="http://www.w3.org/2000/svg"
              width="13.437"
              height="17.199"
              viewBox="0 0 13.437 17.199"
            >
              <path
                id="Trazado_2798"
                data-name="Trazado 2798"
                d="M116.612,152.741l1.57-1.889a.252.252,0,1,0-.388-.322l-1.346,1.62-.294-.478a.252.252,0,1,0-.429.264l.478.777A.252.252,0,0,0,116.612,152.741Z"
                transform="translate(-113.683 -145.385)"
                fill="#fff"
              />
              <path
                id="Trazado_2799"
                data-name="Trazado 2799"
                d="M115.727,250.934l.478.777a.252.252,0,0,0,.408.029l1.57-1.889a.252.252,0,1,0-.388-.322l-1.346,1.62-.294-.478a.252.252,0,1,0-.429.264Z"
                transform="translate(-113.684 -241.058)"
                fill="#fff"
              />
              <path
                id="Trazado_2800"
                data-name="Trazado 2800"
                d="M115.727,350.6l.478.777a.252.252,0,0,0,.408.029l1.57-1.889a.252.252,0,1,0-.388-.322l-1.346,1.62-.294-.478a.252.252,0,1,0-.429.264Z"
                transform="translate(-113.684 -337.377)"
                fill="#fff"
              />
              <path
                id="Trazado_2801"
                data-name="Trazado 2801"
                d="M69.185,158.517a.252.252,0,0,0-.252.252V160.6a.387.387,0,0,1-.386.386H56.89a.387.387,0,0,1-.386-.386V149.561a.252.252,0,1,0-.5,0V160.6a.891.891,0,0,0,.89.89H68.547a.891.891,0,0,0,.89-.89v-1.834A.252.252,0,0,0,69.185,158.517Z"
                transform="translate(-56 -144.293)"
                fill="#fff"
              />
              <path
                id="Trazado_2802"
                data-name="Trazado 2802"
                d="M68.547,1.941H67.314V.9a.9.9,0,1,0-1.8,0V1.941h-1.9V.9a.9.9,0,1,0-1.8,0V1.941h-1.9V.9a.9.9,0,1,0-1.8,0V1.941H56.89a.891.891,0,0,0-.89.89v1.26a.252.252,0,1,0,.5,0V2.832a.387.387,0,0,1,.386-.386h1.232v.4a.9.9,0,1,0,1.8,0v-.4h1.9v.4a.9.9,0,1,0,1.8,0v-.4h1.9v.4a.9.9,0,1,0,1.8,0v-.4h1.232a.387.387,0,0,1,.386.386V13.3a.252.252,0,1,0,.5,0V2.832a.891.891,0,0,0-.89-.89Zm-9.128.9a.4.4,0,1,1-.793,0V.9a.4.4,0,1,1,.793,0Zm3.7,0a.4.4,0,0,1-.793,0V.9a.4.4,0,0,1,.793,0Zm3.7,0a.4.4,0,1,1-.793,0V.9a.4.4,0,1,1,.793,0Z"
                transform="translate(-56 0)"
                fill="#fff"
              />
              <path
                id="Trazado_2803"
                data-name="Trazado 2803"
                d="M199.028,179.762h5.308a.789.789,0,0,0,0-1.579h-5.308a.789.789,0,0,0,0,1.579Zm0-1.075h5.308a.286.286,0,1,1,0,.571h-5.308a.286.286,0,0,1,0-.571Z"
                transform="translate(-193.461 -172.197)"
                fill="#fff"
              />
              <path
                id="Trazado_2804"
                data-name="Trazado 2804"
                d="M199.028,278.975h5.308a.789.789,0,1,0,0-1.579h-5.308a.789.789,0,0,0,0,1.579Zm0-1.075h5.308a.286.286,0,1,1,0,.571h-5.308a.286.286,0,0,1,0-.571Z"
                transform="translate(-193.461 -268.078)"
                fill="#fff"
              />
              <path
                id="Trazado_2805"
                data-name="Trazado 2805"
                d="M199.028,378.187h5.308a.789.789,0,1,0,0-1.579h-5.308a.789.789,0,0,0,0,1.579Zm0-1.075h5.308a.286.286,0,1,1,0,.571h-5.308a.286.286,0,0,1,0-.571Z"
                transform="translate(-193.461 -363.957)"
                fill="#fff"
              />
            </svg>
            Servicios
            </Link>
          </li>
          <li>
          <Link to = "/improves" className = {style.textDecoration}>
            <svg
              id="_002-happy"
              data-name="002-happy"
              xmlns="http://www.w3.org/2000/svg"
              width="17.199"
              height="17.199"
              viewBox="0 0 17.199 17.199"
            >
              <g
                id="Grupo_1431"
                data-name="Grupo 1431"
                transform="translate(0 0)"
              >
                <g id="Grupo_1430" data-name="Grupo 1430">
                  <path
                    id="Trazado_2771"
                    data-name="Trazado 2771"
                    d="M14.681,2.519A8.6,8.6,0,1,0,2.519,14.681,8.6,8.6,0,1,0,14.681,2.519ZM8.6,16.176A7.576,7.576,0,1,1,16.176,8.6,7.585,7.585,0,0,1,8.6,16.176Z"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Grupo_1433"
                data-name="Grupo 1433"
                transform="translate(3.549 5.7)"
              >
                <g id="Grupo_1432" data-name="Grupo 1432">
                  <path
                    id="Trazado_2772"
                    data-name="Trazado 2772"
                    d="M108.84,170.309a2.152,2.152,0,0,0-3.04,0,.512.512,0,0,0,.724.724,1.127,1.127,0,0,1,1.593,0,.512.512,0,0,0,.724-.724Z"
                    transform="translate(-105.65 -169.681)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Grupo_1435"
                data-name="Grupo 1435"
                transform="translate(10.31 5.7)"
              >
                <g id="Grupo_1434" data-name="Grupo 1434">
                  <path
                    id="Trazado_2773"
                    data-name="Trazado 2773"
                    d="M310.1,170.309a2.152,2.152,0,0,0-3.04,0,.512.512,0,0,0,.724.724,1.127,1.127,0,0,1,1.593,0,.512.512,0,0,0,.724-.724Z"
                    transform="translate(-306.912 -169.681)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Grupo_1437"
                data-name="Grupo 1437"
                transform="translate(3.549 8.975)"
              >
                <g id="Grupo_1436" data-name="Grupo 1436">
                  <path
                    id="Trazado_2774"
                    data-name="Trazado 2774"
                    d="M115.24,267.175h-9.077a.512.512,0,0,0-.512.512,5.051,5.051,0,0,0,10.1,0A.512.512,0,0,0,115.24,267.175Zm-4.539,4.539a4.033,4.033,0,0,1-3.994-3.515H114.7A4.033,4.033,0,0,1,110.7,271.714Z"
                    transform="translate(-105.651 -267.175)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            Mejoras
            </Link>
          </li>
          <li>
          <Link to = "/reports" className = {style.textDecoration}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.66"
              height="18.792"
              viewBox="0 0 15.66 18.792"
            >
              <g
                id="_007-pie-chart"
                data-name="007-pie-chart"
                transform="translate(-2)"
              >
                <path
                  id="Trazado_2806"
                  data-name="Trazado 2806"
                  d="M15.7,18.792H3.957A1.96,1.96,0,0,1,2,16.834V1.957A1.96,1.96,0,0,1,3.957,0H15.7A1.96,1.96,0,0,1,17.66,1.957V16.834A1.96,1.96,0,0,1,15.7,18.792ZM3.957.783A1.176,1.176,0,0,0,2.783,1.957V16.834a1.176,1.176,0,0,0,1.174,1.174H15.7a1.176,1.176,0,0,0,1.174-1.174V1.957A1.176,1.176,0,0,0,15.7.783Z"
                  fill="#fff"
                />
                <path
                  id="Trazado_2807"
                  data-name="Trazado 2807"
                  d="M17.957,11.783H16.391a.391.391,0,0,1,0-.783h1.566a.391.391,0,0,1,0,.783Z"
                  transform="translate(-3.038 -2.387)"
                  fill="#fff"
                />
                <path
                  id="Trazado_2808"
                  data-name="Trazado 2808"
                  d="M17.957,8.783H16.391a.391.391,0,0,1,0-.783h1.566a.391.391,0,0,1,0,.783Z"
                  transform="translate(-3.038 -1.736)"
                  fill="#fff"
                />
                <path
                  id="Trazado_2809"
                  data-name="Trazado 2809"
                  d="M17.957,14.783H16.391a.391.391,0,0,1,0-.783h1.566a.391.391,0,0,1,0,.783Z"
                  transform="translate(-3.038 -3.038)"
                  fill="#fff"
                />
                <path
                  id="Trazado_2810"
                  data-name="Trazado 2810"
                  d="M17.957,17.783H16.391a.391.391,0,0,1,0-.783h1.566a.391.391,0,0,1,0,.783Z"
                  transform="translate(-3.038 -3.689)"
                  fill="#fff"
                />
                <path
                  id="Trazado_2811"
                  data-name="Trazado 2811"
                  d="M15.57,20.783H5.391a.391.391,0,1,1,0-.783H15.57a.391.391,0,1,1,0,.783Z"
                  transform="translate(-0.651 -4.34)"
                  fill="#fff"
                />
                <path
                  id="Trazado_2812"
                  data-name="Trazado 2812"
                  d="M8.915,15.83a3.915,3.915,0,1,1,3.915-3.915A3.919,3.919,0,0,1,8.915,15.83Zm0-7.047a3.132,3.132,0,1,0,3.132,3.132A3.135,3.135,0,0,0,8.915,8.783Z"
                  transform="translate(-0.651 -1.736)"
                  fill="#fff"
                />
                <path
                  id="Trazado_2813"
                  data-name="Trazado 2813"
                  d="M6.709,14.8a.391.391,0,0,1-.277-.668l2.377-2.377V8.391a.391.391,0,1,1,.783,0v3.523a.394.394,0,0,1-.114.277L6.987,14.684A.393.393,0,0,1,6.709,14.8Z"
                  transform="translate(-0.937 -1.736)"
                  fill="#fff"
                />
              </g>
            </svg>
            Reportes
            </Link>
          </li>
          <li>
          <button>Cerrar sesiòn</button>
          </li>
        </ul>
      </div>
      
      </Col>
      
    </Row>
  );
};

export default SideBar;

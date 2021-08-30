import React, { useState, useEffect } from "react";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import {useHistory, Link} from "react-router-dom";
import axios from "axios";
import ContentTop from "../ContentTop";
import UserName from "../UserName";
import GetAppIcon from '@material-ui/icons/GetApp';
import {withTranslation} from "react-i18next";

const IncomingRequestSection = (props) => {

    const [request, setRequest] = useState([]);
    const history = useHistory();
    const [idUser, setIdUser] = useState(1)
    console.log(idUser);
    const [nS,setNS]=useState(1);
    const [r,setR]=useState(false);
    const [newApps,setNewApps]=useState([]);
    const [inpApps,setInpApps]=useState([]);
    const [doneApps,setDoneApps]=useState([]);
    const token = localStorage.getItem(STORAGE_NAME);


    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/listener",
            method: 'GET'
        }).then(res => {
            setRequest(res.data.object)
            console.log(res);
            let cr=[];
            let ac=[];
            let dn=[];
            res.data.object.map((item)=>{
                if (item.status==="CREATED"){
                    cr.push(item)
                }
            })
            setNewApps(cr);
            section(1)

        })
    }, [r]);

    const acceptApp = (id) => {
        axios({
            method:'put',
            url:API_URL+'/application/accepted?id='+id,
            headers:{
                'Authorization':token
            }
        }).then((r)=>{
            console.log(r)
            setR(!r);
        })
    };

    const acceptedApp=()=>{
        axios({
            method:'get',
            url:API_URL+'/application/unchecked',
            headers: {
                'Authorization': token
            }
        }).then((r)=>{
            console.log(r)
            setInpApps(r.data.object)
        })
    }

    const download = (id,name) => {
        axios.get(API_URL+"/attach/"+id,{
            headers:{
                'Authorization':token,
                'Content-Type':'application/pdf'
            }
        }).then((r)=>{
            const type = r.headers['content-type']
            const blob = new Blob([r.data], { type: type, encoding: 'UTF-8' })
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = ''+name+' arizasi.pdf'
            link.click()
        })

    }

    const section = (n) => {
      switch (n){
          case 1:return (
              <>
                  {newApps && newApps.map((item, i) =>
                      <div className="content" key={i} value={item.id}>
                          <div className="request-content-title">
                              <div className="request-content-title-name">
                                  <UserName text={`${item.applicant.fullName}`} />
                              </div>
                              <div className="request-content-title-date">
                                  <div className="date-label">
                                      Осталось:
                                  </div>
                                  <div className="date-item">
                                      5 день
                                  </div>
                              </div>
                          </div>
                          <div className="request-theme">
                              <div className="request-theme-title">
                                  <h3>Тема обращения:</h3>
                                  <p>{item.title}</p>
                              </div>
                              <div>
                                  <input type="checkbox" />
                                  <label htmlFor="">Конфиденциально</label>
                              </div>
                          </div>
                          <div className="request-content-item">
                              <p>{item.description}</p>
                          </div>
                          <div className="categories">
                              <ul>
                                  <li>
                                      <label for="">Категория обращения</label>
                                      <div className="category-item">{item.section.title.uz}</div>
                                  </li>
                                  <li>
                                      <label for="">Файл</label>
                                      <div onClick={()=>{
                                          item.attachmentsId?download(item.attachmentsId[0],item.applicant?.fullName):console.log("not found")
                                      }} style={{textAlign:"center",paddingTop:"10px"}} className="file-item"><GetAppIcon/></div>
                                  </li>
                              </ul>
                          </div>
                          <div className="request-bottom">
                              <button className="blue-btn" onClick={() => changeAppeal(item)}>Отправить модератору на замену исполнителя</button>
                              <button type="submit" className="btn-default" style={{
                                  marginTop:"15px"
                              }}
                                      onClick={() => acceptApp(item.id)} >Qabul qilish</button>
                          </div>
                      </div>
                  )}
              </>
          )
          case 2:return (
              <>
                  {inpApps && inpApps.map((item, i) =>
                      <div className="content" key={i} value={item.id}>
                          <div className="request-content-title">
                              <div className="request-content-title-name">
                                  <UserName text={`${item.applicant.fullName}`} />
                              </div>
                              <div className="request-content-title-date">
                                  <div className="date-label">
                                      Осталось:
                                  </div>
                                  <div className="date-item">
                                      5 день
                                  </div>
                              </div>
                          </div>
                          <div className="request-theme">
                              <div className="request-theme-title">
                                  <h3>Тема обращения:</h3>
                                  <p>{item.title}</p>
                              </div>
                              <div>
                                  <input type="checkbox" />
                                  <label htmlFor="">Конфиденциально</label>
                              </div>
                          </div>
                          <div className="request-content-item">
                              <p>{item.description}</p>
                          </div>
                          <div className="categories">
                              <ul>
                                  <li>
                                      <label for="">Категория обращения</label>
                                      <div className="category-item">{item.section.title.uz}</div>
                                  </li>
                                  <li>
                                      <label for="">Файл</label>
                                      <div onClick={()=>{
                                          item.attachmentsId?download(item.attachmentsId[0],item.applicant?.fullName):console.log("not found")
                                      }} style={{textAlign:"center",paddingTop:"10px"}} className="file-item"><GetAppIcon/></div>
                                  </li>
                              </ul>
                          </div>
                          <div className="request-bottom">
                              <button className="blue-btn" onClick={() => changeAppeal(item)}>Отправить модератору на замену исполнителя</button>
                              <button className="blue-btn">Написать сообщение</button>
                              <button type="submit" className="btn-default" style={{
                                  marginTop:"15px"
                              }}
                                      // onClick={() => testPage(item)}
                              >Ответить</button>
                          </div>
                      </div>
                  )}
              </>
          )
          default:return (
              <>
                  {doneApps && doneApps.map((item, i) =>
                      <div className="content" key={i} value={item.id}>
                          <div className="request-content-title">
                              <div className="request-content-title-name">
                                  <UserName text={`${item.applicant.fullName}`} />
                              </div>
                              <div className="request-content-title-date">
                                  <div className="date-label">
                                      Осталось:
                                  </div>
                                  <div className="date-item">
                                      5 день
                                  </div>
                              </div>
                          </div>
                          <div className="request-theme">
                              <div className="request-theme-title">
                                  <h3>Тема обращения:</h3>
                                  <p>{item.title}</p>
                              </div>
                              <div>
                                  <input type="checkbox" />
                                  <label htmlFor="">Конфиденциально</label>
                              </div>
                          </div>
                          <div className="request-content-item">
                              <p>{item.description}</p>
                          </div>
                          <div className="categories">
                              <ul>
                                  <li>
                                      <label for="">Категория обращения</label>
                                      <div className="category-item">{item.section.title.uz}</div>
                                  </li>
                                  <li>
                                      <label for="">Файл</label>
                                      <div onClick={()=>{
                                          item.attachmentsId?download(item.attachmentsId[0],item.applicant?.fullName):console.log("not found")
                                      }} style={{textAlign:"center",paddingTop:"10px"}} className="file-item"><GetAppIcon/></div>
                                  </li>
                              </ul>
                          </div>
                          <div className="request-bottom">
                              <button className="blue-btn" onClick={() => changeAppeal(item)}>Отправить модератору на замену исполнителя</button>
                              <button className="blue-btn">Написать сообщение</button>
                              <button type="submit" className="btn-default" style={{
                                  marginTop:"15px"
                              }}
                                      // onClick={() => testPage(item)}
                              >Ответить</button>
                          </div>
                      </div>
                  )}
              </>
          )
      }
    }

    const changeAppeal = (item) => {
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/answer/"+item.id,
            method: 'PUT',
            data: {
                id: item.id,
                description:item.description,
                status:true,
                deniedMessage:"null"
            }
        }).then((r)=>{
            console.log(r)
        })
        console.log(item.id);
    }

    return (
        <div className="incoming-request-section">
            <ContentTop />
            <div className="navbar-wrapper">
                <div className="content-top">
                    <p className="request-items">
                    </p>
                    <p style={{padding:"0px 10px",border:nS===1?"1px solid rgba(0,0,0,0.5)":""}} className="request-items">
                        <Link onClick={()=>{
                            setNS(1)
                        }}>{props.t("Yangi")}</Link>
                    </p>
                    <p style={{padding:"0px 10px",border:nS===2?"1px solid rgba(0,0,0,0.5)":""}}  className="request-items">
                        <Link onClick={()=>{
                            setNS(2)
                            acceptedApp();
                        }}>{props.t("Qabul qilinganlar")}</Link>
                    </p>
                    <p style={{padding:"0px 10px",border:nS===3?"1px solid rgba(0,0,0,0.5)":""}} className="request-items active">
                        <Link onClick={()=>{
                            setNS(3)
                        }}>{props.t("Ko'rib chiqilganlar")}</Link>
                    </p>
                    <p className="request-items">
                    </p>
                </div>
            </div>
            {
                section(nS)
            }
            {/* <nav className="pagination">
                <ul>
                    <li><a href="#1" onClick={page === 0 ? (e) => (e.preventDefault()) : () => getNewsPegeable(0)}>{"<<"}</a></li>
                    <li><a href="#1" onClick={page === 0 ? (e) => (e.preventDefault()) : () => getNewsPegeable(page - 1)}>{"<"}</a></li>
                    {paginations && paginations.map(i =>
                        <li key={i} className={currentPage === (i) ? "current" : ''}><a href="#1" onClick={page === (i - 1) || i === '...' ? (e) => (e.preventDefault()) : () => getNewsPegeable(i - 1)}>{i}</a></li>
                    )}
                    <li><a href="#1" onClick={(totalPages - 1) === page ? (e) => (e.preventDefault()) : () => getNewsPegeable(page + 1)} >{'>'}</a></li>
                    <li><a href="#1" onClick={(totalPages - 1) === page ? (e) => (e.preventDefault()) : () => getNewsPegeable(totalPages - 1)} >{'>>'}</a></li>
                </ul>
            </nav> */}
        </div>
    );
}

export default withTranslation()(IncomingRequestSection);



import React, { useState } from 'react'

//components
import Header from '../components/Header';
import Notice from '../components/Notice';
import Modal from '../components/Modal';
import AccessPortal from '../components/AccessPortal';
import Settings from '../components/Settings';

import img from '../imgs/homepage-background.jpg';

import useClickOutside from '../hooks/useClickOutside';

const Homepage = () => {
  const [modal, setModal] = useState("");
  let modalRef = useClickOutside(() => {
    setModal("");
  });

  return (
    <>
      <Header setModal={setModal}/>
      <Notice duplicate={9}/>
      <div className="section">
          <div className="section__home">
              <img src={img} alt="homepage background img" draggable="false"></img>
          </div>
      </div>
      <div className="modals" ref={modalRef}>
        <Modal
          title="access portal"
          isActive={modal === "access-portal" && true}
          type="side"
          id="access-portal"
          setModal={setModal}
        >
          <AccessPortal />
        </Modal>
      </div>
    </>
  )
}

export default Homepage

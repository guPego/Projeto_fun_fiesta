import React, { useState, useRef, useEffect, } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import './btnDislexia.css';

const DislexiaButton = () => {
  // Modal
  const [modalAberto, setModalAberto] = useState(false);
  const modalRef = useRef(null);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  useEffect(() => {
    const handleClickForaModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        fecharModal();
      }
    };

    document.addEventListener('mousedown', handleClickForaModal);

    return () => {
      document.removeEventListener('mousedown', handleClickForaModal);
    };
  }, []);

  // Filtro Dislexia

  const [ativo, setAtivo] = useState(false);

  const [isFilterEnabled, setFilterEnabled] = useState(false);

  const handleButtonClick = () => {
    const enabled = !isFilterEnabled;
    setFilterEnabled(enabled);
    toggleFilter(enabled);
    setAtivo(!ativo);
  };

  const toggleFilter = (enabled) => {
    const rootElement = document.getElementById('root');
    if (enabled) {
      rootElement.classList.add('dislexia-filter');
    } else {
      rootElement.classList.remove('dislexia-filter');
    }
  };

  const buttonClasses = classNames('dislexia-button', {
    'active': isFilterEnabled,
  });

  return (
    <>
      <Helmet>
        <link
          href="./fonts/OpenDyslexic-Regular.otf"
          rel="stylesheet"
        />
      </Helmet>
      {/* <button className='dislexia-button' onClick={handleButtonClick}>
        {isFilterEnabled ? '' : ''}
      </button> */}

      <div>
        <button className='modal-button' onClick={abrirModal}>
        </button>

        {/* <button className='confirmacao' onClick={handleButtonClick} style={{ backgroundColor: ativo ? 'green' : 'red' }}>
          {isFilterEnabled ? '' : ''}
        </button> */}

        {modalAberto && (
          <div ref={modalRef} className='modalAcessibilidade modal-overlay'>
            <h3 className='titulo-acessibilidade'>Menu de acessibilidade</h3>
            <div className='div-btn-acessibilidade'>
              <h5>Dislexia</h5>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isFilterEnabled}
                  onChange={handleButtonClick}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className='div-btn-acessibilidade'>
              <h5>Outro</h5>
              <label className="switch">
                <input
                  type="checkbox"
                  // checked={isFilterEnabled}
                  // onChange={handleButtonClick}
                />
                <span className="slider"></span>
              </label>
            </div>

            {/* Conteúdo do modal */}
            {/* <button className='modal-button-close' onClick={fecharModal}>
              Fechar
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default DislexiaButton;

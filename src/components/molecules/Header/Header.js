import React from 'react';
import './Header.css';
import logoImg from '../../../assets/images/logo-lucky.png';
import languageImg from '../../../assets/icons/arabe.svg';

export const Header = ({ locale = 'en', onClick}) => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <img
            src={logoImg}
            alt='lucky'
            width={112}
            height={32}
          />
          <div
            className='header__btnLanguage'
            onClick={onClick}
          >
            {locale === 'ar' ? (
              'English'
            ) : (
              <div className='header__btnLanguage__img'>
                <img src={languageImg} alt='lucky'/>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};


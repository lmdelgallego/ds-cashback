import React from 'react';
import './Header.css';

export const Header = ({ locale = 'en', onClick}) => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <img
            src='./assets/images/logo-lucky.png'
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
                <img src='./assets/icons/arabe.svg' alt='lucky' layout='fill' />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};


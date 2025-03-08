'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.scss';
import { FaAngleDown } from 'react-icons/fa6';

const menuItems = [
  { label: 'Home', hasSubMenu: false, link: '/' },
  { label: 'About', hasSubMenu: false, link: '/about' },
  {
    label: 'Services',
    hasSubMenu: true,
    link: '#', // Prevents navigation when clicked
    subMenu: [
      { label: 'Mobile application development', link: '/services/web-design' },
      { label: 'App Development', link: '/services/app-development' },
      { label: 'SEO', link: '/services/seo' },
    ],
  },
  { label: 'Contact', hasSubMenu: false, link: '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo}>
          <Link href="/">Innostes</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* NAVIGATION MENU */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.show : ''}`}>
          <ul className={styles.menu}>
            {menuItems.map((item, index) => (
              <li key={item.label+"-"+index} className={item.hasSubMenu ? styles.dropdown : ''}>
                {item.hasSubMenu ? (
                  <>
                    <button className={styles.dropdownToggle} onClick={() => toggleDropdown(index)}>
                      {item.label} <FaAngleDown className={styles.dropdownIcon} />
                    </button>
                    <ul
                      className={`${styles.dropdownMenu} ${openDropdown && openDropdown === index ? styles.showDropdown : ''}`}
                    >
                      {item.subMenu?.map((subItem, subIndex) => (
                        <li
                          key={subItem.label + '-' + subIndex}
                          className={subIndex == 0 ? styles['m-top'] : ''}
                        >
                          <Link href={subItem.link}>{subItem.label}</Link>
                          <div
                            className={
                              'divider ' + (subIndex == item.subMenu.length - 1 ? 'd-none' : '')
                            }
                          >
                            &nbsp;
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.link}>{item.label}</Link>
                )}

                <div className={'divider ' + styles['menu-divider']}>&nbsp;</div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

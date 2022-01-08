/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable no-unused-vars */
// import ClassName from 'models/classname';
// import styles from './NavListItem.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
const NavListItem = ({ className, item }) => {
  const nestedItems = (item.children || []).map((item) => {
    return <NavListItem key={item.id} item={item} />;
  });

  return (
    <>
      {console.log('item', item.path)}
      {!item.path.includes('http') &&
        !item.target &&
        (item.path === '/inicio/' ? (
          <a href="/" title={item.title}>
            {' '}
            {item.label}
          </a>
        ) : item.path === '/blog/' ? (
          <a href="/posts" title={item.title}>
            {' '}
            {item.label}
          </a>
        ) : item.path === '/sobre-mi/' ? (
          <a href="/sobre-mi" title={item.title}>
            {item.label}
          </a>
        ) : item.path === '/servicios/' ? (
          <a href="/servicios" title={item.title}>
            {item.label}
          </a>
        ) : (
          <Link activeClass="active" to={item.path} spy={true} smooth={true} offset={-70} duration={500}>
            {item.label}
          </Link>
        ))}
      {item.path.includes('http') &&
        (item.path === '/inicio/' ? (
          <a href="/" title={item.title}>
            {' '}
            {item.label}
          </a>
        ) : item.path === '/blog/' ? (
          <a href="/posts" title={item.title}>
            {' '}
            {item.label}
          </a>
        ) : item.path === '/sobre-mi/' ? (
          <a href="/sobre-mi" title={item.title}>
            {item.label}
          </a>
        ) : item.path === '/servicios/' ? (
          <a href="/servicios" title={item.title}>
            {item.label}
          </a>
        ) : (
          <Link activeClass="active" to={item.path} spy={true} smooth={true} offset={-70} duration={500}>
            {item.label}
          </Link>
        ))}

      {nestedItems.length > 0 && <ul className={className}>{nestedItems}</ul>}
    </>
  );
};

export default NavListItem;

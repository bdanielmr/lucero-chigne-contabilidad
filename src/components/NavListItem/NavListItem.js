// import ClassName from 'models/classname';
// import styles from './NavListItem.module.scss';

const NavListItem = ({ className, item }) => {
  const nestedItems = (item.children || []).map((item) => {
    return <NavListItem key={item.id} item={item} />;
  });

  return (
    <li key={item.id}>
      {console.log(item.path)}
      {!item.path.includes('http') && !item.target && (
        <a href={item.path === '/inicio/' ? '/' : item.path} title={item.title}>
          {item.label}
        </a>
      )}
      {item.path.includes('http') && (
        <a href={item.path} title={item.title} target={item.target}>
          {item.label}
        </a>
      )}

      {nestedItems.length > 0 && <ul className={className}>{nestedItems}</ul>}
    </li>
  );
};

export default NavListItem;
